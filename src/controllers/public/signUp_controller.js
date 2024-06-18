const User = require("../../models/userModel");
const mailerFunc = require("../../models/userModel");
const mailerFunc = require("../../util/mailerFunc");
const { encryptPwdFunc } = require("../../util/passwordHelperFunc");
const { signTokenFunc } =require("../../util/tokenFunc");

const signupHandler = async (req,res) => {
    const { email,name,password } = req.body;
    try {
        if(!email || !name || !password) {
            return res 
            .status(400)
            .send({ msg: "No Empty values allowed",type:"error" });
        }
        const userAlreadyAvilable =await User.findOne({ email });
        if (userAlreadyAvilable) {
            return res 
            .status(403)
            .send({ msg: "Account already excists",type: "error" })
        }
        const hashedPwd = await encryptPwdFunc(password);
        const createdUser =await User.create({ email,name,password:hashedPwd });
        if (!createdUser) {
            return res.status(500).send({
                msg: "couldnot create user- server problem maybe",
                type:"error",
            });
        }
        const tokenPayLoad ={ email,id: createdUser._id,name };
        const token =signTokenFunc(tokenPayLoad);

        const mailDetails = {
            toAddress:createdUser.email,
            mailSubject: "Acccount Activation Link",
            mailContent: `Welcome ${createdUser.name}!,just Click the follwing link to activate your Account -
              ${process.env.CLIENT_URL_ACCOUNTACTIVATION}/${token}`,
        };
        await mailerFunc(mailDetails);

        res.send({ token,user:tokenPayLoad, type:"success" });
    } catch (error) {
        console.log(e.message, "err in signupHandler");
        res.status(500).send({ msg:"Server issue",type: "error" });
    }
};

module.exports = signupHandler;