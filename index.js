var CryptoJS = require("crypto-js");

// Encrypt
var ciphertext = CryptoJS.AES.encrypt(
	"my message",
	"secret key 123"
).toString();

// Decrypt message
var bytes = CryptoJS.AES.decrypt(ciphertext, "secret key 123");
var originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log(ciphertext); // random string starting with "U2F"
console.log(originalText); // 'my message'
