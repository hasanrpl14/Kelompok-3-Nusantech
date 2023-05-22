const User = require("../models/UserModel.js");
const argon2 = require("argon2");
const { Op } = require("sequelize");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");

exports.getUsers = async (req, res) => {
  const last_id = parseInt(req.query.lastId) || 0;
  const limit = parseInt(req.query.limit) || 10;
  const search = req.query.search_query || "";

  let result = [];
  if (last_id < 1) {
    const results = await User.findAll({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            role: {
              [Op.like]: "%" + search + "%",
            },
          },
        ],
      },
      limit: limit,
      order: [["id", "DESC"]],
    });
    result = results;
  } else {
    const results = await User.findAll({
      where: {
        id: {
          [Op.lt]: last_id,
        },
        [Op.or]: [
          {
            name: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            role: {
              [Op.like]: "%" + search + "%",
            },
          },
        ],
      },
      limit: limit,
      order: [["id", "DESC"]],
    });
    result = results;
  }

  res.json({
    result: result,
    lastId: result.length ? result[result.length - 1].id : 0,
    hasMore: result.length >= limit ? true : false,
  });
};

exports.getUserById = async (req, res) => {
  try {
    const response = await User.findOne({
      attributes: [
        "id",
        "uuid",
        "name",
        "email",
        "role",
        "phone_number",
        "address",
        "profile_picture",
        "url",
      ],
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.createUser = async (req, res) => {
  const { name, email, password, confPassword, role, phoneNumber, address } =
    req.body;
  if (!name) {
    return res.status(400).json({ msg: "Masukan nama" });
  } else if (!email) {
    return res.status(400).json({ msg: "Masukan email yang aktif" });
  } else if (!password) {
    return res.status(400).json({ msg: "Masukan password" });
  } else if (!confPassword) {
    return res.status(400).json({ msg: "masukan konfirmasi password" });
  } else if (!phoneNumber) {
    return res
      .status(400)
      .json({ msg: "Masukan nomor HP/WhatsApp yang aktif" });
  } else if (!address) {
    return res.status(400).json({ msg: "Masukkan alamat rumah kamu" });
  }

  // cek apakah password dan confirm password sama
  if (password !== confPassword) {
    return res
      .status(400)
      .json({ msg: "Password dan confirm Password tidak sama" });
  }

  try {
    // cek apakah nama yang akan di daftarkan sudah ada di database
    const existingUser = await User.findOne({ where: { name } });
    if (existingUser) {
      return res
        .status(400)
        .json({ msg: "User dengan nama ini yang sama sudah digunakan" });
    }

    let fileName = null;
    let url = null;
    const timestamp = Date.now(); // Mendapatkan timestamp saat ini

    if (req.files && req.files.file) {
      const file = req.files.file;
      const fileSize = file.data.length;
      const ext = path.extname(file.name);
      const randomString = crypto.randomBytes(8).toString("hex"); // Menghasilkan string acak
      fileName = `${timestamp}-${randomString}${ext}`; // Menambahkan timestapm dan string acak ke dalam nama file
      url = `${req.protocol}://${req.get("host")}/profile-picture/${fileName}`;

      // tipe data yang di izinkan
      const allowedType = [".png", ".jpg", ".jpeg"];

      if (!allowedType.includes(ext.toLowerCase()))
        return res.status(422).json({ msg: "yang kamu masukan bukan gambar" });

      const maxSize = 10000000; // dalam basis 10
      // const maxSize = 3 * 1024 * 1024; // dalam basis 2

      if (fileSize > maxSize)
        return res
          .status(422)
          .json({ msg: "Ukuran gambar harus kurang dari 3 MB" });

      await file.mv(`./public/profile-picture/${fileName}`);
    }

    // Hash  password
    const hashPassword = await argon2.hash(password);

    // buat user baru
    await User.create({
      name: name,
      email: email,
      password: hashPassword,
      role: role,
      phone_number: phoneNumber,
      address: address,
      profile_picture: fileName,
      url: url,
    });

    res.status(201).json({ msg: "Berhasil membuat akun" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.editUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });

    const { name, email, password, confPassword, role, phoneNumber, address } =
      req.body;

    // Cek apakah nama sudah ada di database dan bukan nama pengguna saat ini
    const existingUser = await User.findOne({
      where: {
        name,
        uuid: {
          [Op.ne]: user.uuid, // Memastikan UUID tidak sama dengan pengguna saat ini
        },
      },
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ msg: "User dengan nama ini yang sama sudah digunakan" });
    }

    let fileName = user.profile_picture;
    let url = user.url;

    if (req.files && req.files.file) {
      const file = req.files.file;
      const fileSize = file.data.length;
      const ext = path.extname(file.name);
      const randomString = crypto.randomBytes(8).toString("hex");
      const timestamp = Date.now();
      fileName = `${timestamp}-${randomString}${ext}`;
      url = `${req.protocol}://${req.get("host")}/profile-picture/${fileName}`;

      const allowedType = [".png", ".jpg", ".jpeg"];

      if (!allowedType.includes(ext.toLowerCase()))
        return res.status(422).json({ msg: "invalid images" });

      const maxSize = 10000000;

      if (fileSize > maxSize)
        return res.status(422).json({ msg: "Maksimal ukuran Gambar 10mb" });

      // Hapus file lama jika ada
      if (user.profile_picture) {
        const filePath = `./public/profile-picture/${user.profile_picture}`;
        fs.unlinkSync(filePath);
      }
      file.mv(`./public/profile-picture/${fileName}`, (err) => {
        if (err) return res.status(500).json({ msg: err.message });
      });
    }

    let roles = "";
    if (role === "" || role === null) {
      role = user.role;
    }

    let hashPassword;
    if (password === "" || password === null) {
      hashPassword = user.password;
    } else {
      hashPassword = await argon2.hash(password);
    }
    if (password !== confPassword)
      return res
        .status(400)
        .json({ msg: "Password dan Confirm Password tidak cocok" });

    await User.update(
      {
        name: name,
        email: email,
        password: hashPassword,
        role: role,
        phone_number: phoneNumber,
        address: address,
        profile_picture: fileName,
        url: url,
      },
      {
        where: {
          uuid: req.params.id,
        },
      }
    );

    res.status(200).json({ msg: "User Updated" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        uuid: req.params.id,
      },
    });

    if (!user) {
      return res.status(404).json({ msg: "User tidak ditemukan" });
    }

    if (user.profile_picture) {
      const filePath = `./public/profile-picture/${user.profile_picture}`;
      fs.unlinkSync(filePath);
    }

    await User.destroy({
      where: {
        id: user.id,
      },
    });

    return res.status(200).json({ msg: "User berhasil dihapus" });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Gagal menghapus pengguna", error: error.message });
  }
};
