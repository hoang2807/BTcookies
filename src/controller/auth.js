const { User } = require("../model");
// const bcrypt = require("bcryptjs");

const {
    hashPassword,
    comparePassword,
    generateToken,
} = require("../services/auth");

exports.check = async({ username, password }) => {
    try {
        console.log(username, password);
        const user = await User.findOne({ username });
        if (!user) throw new Error("Not found user");

        const matchPassword = comparePassword(password, user.password);
        if (!matchPassword) {
            throw new Error("Incorrect password");
        }

        const token = generateToken({ username });

        return { token };
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.login = async({ username, password }) => {
    try {
        const hased = hashPassword(password);
        const newUser = await User.create({ username, password: hased });
        // return { message: "Dang nhap thanh cong" };
        return newUser;
    } catch (err) {
        return err;
    }
};
exports.change = async({ username, password }) => {
    const hased = hashPassword(password);
    try {
        const User = await User.findOneAndUpdate({ username: username }, { password: hased }, { new: true });
    } catch (error) {}
};