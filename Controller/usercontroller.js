const recorddatamodel = require('../Model/recorddata');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
var validator = require("email-validator");

//Signup Api code
const signup = async (req, res) => {
    const { username, email, password, role, message } = req.body;
    let roleId;
    let doc;
    if (username && email && password && role && message) {
        if (validator.validate(email)) {
            //Now dataRecord in database
            let user = await recorddatamodel.findOne({email:email})
            if (user) {
                res.send("Email Exists");
            } else {
                //checking Valid Rollname
               
                //checking role
                
                    let salt = await bcrypt.genSalt(10);
                    let hashPassword = await bcrypt.hash(password, salt);
                    try {
                        addrecord = new recorddatamodel({
                            username: username,
                            email: email,
                            password: hashPassword,
                            role: role,
                            roleTypeId: roleId,
                            message: message
                        });
                        res.send("Registeration Successful");
                        return addrecord.save();
                    } catch (error) {
                        res.send(error);
                        console.log(error);
                    }
            
            }
        } else {
            res.send("Invalid EmailID");
        }

    } else {
        res.send("All Fields required");
    }
};

// Log in Api 
const login = async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        if (validator.validate(email)) {
            let user = await recorddatamodel.findOne({ email: email });
            let checkLogin = await bcrypt.compare(password, user.password);
            if (checkLogin) {
                let token =  jwt.sign({ userID: user._id }, process.env.Secretkey, { expiresIn: "20m",});
                res.status(200).json({ Status: "Login Successful", "Your Token": token }); 
            } else {
                res.send("Incorrect Password");
            }
        } else {
            res.send("Invalid Email");
        }
    } else {
        res.send("Fields required!!");
    }
};




module.exports = {signup, login,};