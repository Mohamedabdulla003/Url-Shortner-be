const bcrypt = require("bcrypt");

const encryptPwdFunc = async (originalPwd) => {
    const hashedPwd =await bcrypt.hash(originalPwd,12);
    return hashedPwd;
};
const decryptPwdFunc = async (plainPwd,hashPwd) => {
    const isMatch = await bcrypt.compare(plainPwd,hashPwd);
    return isMatch;
};

module.exports = { encryptPwdFunc,decryptPwdFunc };