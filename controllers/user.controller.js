const {User} = require('../models');

module.exports={
    getAllUser:async(req,res)=>{
        try {
            
            const users = await User.findAll()
    
            return res.status(200).json({
                status: 200,
                message: "Data user",
                data: users,
            });
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: "Kesalahan server internal selama ambil data user",
            });
        }
    },
    getUserById:async(req,res)=>{
        
    },
    createUser : async(req, res) => {
        let data = req.body
        try {

            // hash password

            const hashPassword = bcrypt.hashSync(data.password, 10)
            data.password = hashPassword
            await User.create(data)
            res.status(201).json({
                message:"berhasil create user"
            })
        } catch {
            res.status(500).json({
                message:"gagal create user"
            })
            
        }
    }
}