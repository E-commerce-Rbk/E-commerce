import User from "../models/user.js"
import bcrypt from "bcrypt"
export const login = async (req, res) => {
    try {
        if (req.body.password.length < 8 || req.body.password.length > 50) {
            res.status(400).send("check password")
        }
        else {
            const user = await User.findOne({ email: req.body.email })
            if (!user) {
                res.status(400).send("That user don't exisits!");
            }
            else {
                const validPassword = await bcrypt.compare(req.body.password, user.password)
                if (!validPassword) {
                    res.status(400).send("wrong password!");
                }
                else {
                    res.status(201).json({ user, status: "connected" });
                }
            }
        }
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const signup = async (req, res) => {
    try {
        if (req.body.userName.length < 5 || req.body.userName.length > 50) {
            res.status(400).send("check user name")
        }
        else if (req.body.password.length < 8 || req.body.password.length > 50) {
            res.status(400).send("check password")
        }
        else if (String(req.body.phoneNumber).length !== 8) {
            res.status(400).send("check phone number")
        }
        else {
            const user = await User.findOne({ email: req.body.email })
            if (user) {
                res.status(400).send('That user already exisits!');
            }
            else {
                const newUser = new User({
                    email: req.body.email,
                    userName: req.body.userName,
                    password: req.body.password,
                    phoneNumber: req.body.phoneNumber,
                    role: req.body.role
                })
                const salt = await bcrypt.genSalt(10);
                newUser.password = await bcrypt.hash(newUser.password, salt);
                newUser.save().then((result) => { res.status(201).send(result) })
            }
        }
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

