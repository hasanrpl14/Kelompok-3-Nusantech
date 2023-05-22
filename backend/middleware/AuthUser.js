const User = require('../models/UserModel.js')

// untuk mengecek apakah user itu sudah login atau belum
exports.verifyUser = async (req, res, next) =>{
    // ambil session jika tidak ada session maka munculkan pesan 
    if(!req.session.userId){
        return res.status(401).json({msg: "Mohon login ke akun Anda!"});
    }
    // ambil user berdasarkan uuid 
    const user = await User.findOne({
        where: {
            uuid: req.session.userId
        }
    });
    // jika tidak ada munculkan pesan
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    req.userId = user.id;
    req.role = user.role; 
    next();
}

exports.adminOnly = async (req, res, next) =>{
    const user = await User.findOne({
        where: {
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    if(user.role !== "admin") return res.status(403).json({msg: "Akses terlarang"});
    next();
}