const User = require("../models/UserModel.js");
const argon2 = require("argon2");
const { Op } = require("sequelize");
const path = require("path");
const fs = require("fs");

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

    if (req.files && req.files.file) {
      const file = req.files.file;
      const fileSize = file.data.length;
      const ext = path.extname(file.name);
      fileName = file.md5 + ext;
      url = `${req.protocol}://${req.get("host")}/profile-picture/${fileName}`;

      // tipe data yang di izinkan
      const allowedType = [".png", ".jpg", ".jpeg"];

      if (!allowedType.includes(ext.toLowerCase()))
        return res.status(422).json({ msg: "yang kamu masukan bukan gambar" });

      if (fileSize > 3000000)
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

exports.editUser = async (req, res) => {};

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
