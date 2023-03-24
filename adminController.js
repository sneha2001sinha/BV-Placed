const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const Admin = require('../models/UserModel')

module.exports.signup = async (req, res, next) => {
  try {
    const { password } = req.body;
    
    const securePassword = await bcrypt.hash(password, 10); // 10 is the salt

    const Admin = await Admin.create({
      password: securePassword,
    });
    
    const data = {
      admin: {
        password: admin.password
      },
    };
    const authToken = jwt.sign(data, process.env.JWT_SECRET);

    return res.json({ status: true, authToken });

  } catch (ex) {
    next(ex);
  }
};


module.exports.login = async (req, res, next) => {
    try {
        
        const passwordCompare = await bcrypt.compare(password, admin.password);
        if (!passwordCompare) {
          return res.json({ status:false, msg: "Please login with correct details" });
        }
        const data = {
            admin: {
             password:admin.password
            },
          };
        const authToken = jwt.sign(data, process.env.JWT_SECRET);
        res.json({ status:true, authToken });
      } catch (error) {
        console.error(error.message);
        res.json({status:false, msg:"Internal server error occoured"});
      }
};


module.exports.temp = async (req, res, next) => { // just to demo a controller using fetchuser middleware
};
