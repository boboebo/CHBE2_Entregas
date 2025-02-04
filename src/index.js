import express from 'express'
import userRoutes from './routes/user.routes.js'
import passport from 'passport';
import connect from './config/database.js';
import initializePassport from './config/passport.config.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

//settings
connect(process.env.MONGODB_URI);
initializePassport();
dotenv.config();
const app = express();
app.set('PORT', process.env.PORT || 3000);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(cookieParser());

//routes
app.use('/api/session', userRoutes);

app.get('/', (req, res) => {
    res.json({ title: 'Home Page' })
})

//listeners
app.listen(app.get("PORT"), () => {
    console.log(`Server on port http://localhost:${app.get("PORT")}`);
})
