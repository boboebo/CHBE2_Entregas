import { Router } from "express";
import { createToken, hashPassword, comparePassword } from "../utils/index.js";
import passport from "passport";
import User from "../models/user.model.js";

const router = Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email });
    const isValidPassword = comparePassword(password, userExists.password);
    if (!isValidPassword || !userExists) return res.status(401).json({ message: 'Invalid Credentials' })
    const user = userExists.toObject();
    delete user.password;
    const token = createToken(user);
    res
        .cookie('jwtAuthToken', token, { maxAge: 60 * 60 * 1000, httpOnly: true })
        .send({ message: 'successful login', auth: token })
})

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    if (!req.user) return res.status(401).json({ message: 'Usuario no encontrado' });
    res.send(req.user);
});

router.post('/register', async (req, res) => {
    try {
        const { first_name, last_name, email, password, age, role } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: 'User already exists' });
        const newUser = new User({ first_name, last_name, email, password: hashPassword(password), age, role });
        await User.create(newUser);
        res.status(201).json({ message: 'User created' });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;