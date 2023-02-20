/**packages */
var CryptoJS = require("crypto-js");
const config = require("config");
//const jwt = require("jsonwebtoken");

/**Encrypt password */
exports.EncryptPassword = (password) =>{
    let secretKey = config.get("secretkeys").cryptojs;
    var encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
    return encryptedPassword;
};