const { createHash } = require("crypto");

exports.hash = (input) => {
    return createHash("sha256").update(input).digest("hex");
};
