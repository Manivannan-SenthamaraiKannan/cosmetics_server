import express from "express";
import { Jwt } from "jsonwebtoken";
import { bcrypt } from 'bcrypt';

const router = express.Router();
import { User } from "../models/User";


// user signup function
router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // check for the existing user
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.send(400).json({ error: "Email is already registered" })
        }

        // Hasing the Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // creating the new user
        const newUser = new User({ username, email, password: hashedPassword })
        await newUser.save();
        res.status(201).json({ message: "User created successfully" })
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
});

// login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // find the user by email
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({ error: "invalid email or password" })
        }

        // compare the password
        const passwordMastch = await bcrypt.compare(password, user.password)
        if (!passwordMastch) {
            return res.status(401).json({ error: "invalid email or password" })
        }

        // if user = generate jwt token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.status(200).json({ message: 'Login successful', token })
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
})

// logout
router.post('/logout', async (req, res) => {
    res.status(200).json({ message: "logout Successful" })
})

module.exports = router;
