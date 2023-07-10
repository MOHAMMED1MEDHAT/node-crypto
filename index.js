//hash in crypto
const { hash } = require("./src/hash");

const password1 = "mohammed";
const hash1 = hash(password1);

const password2 = "mohammd";
const hash2 = hash(password2);

const match = hash1 === hash2;

console.log(match ? "same password" : "wrong password");
