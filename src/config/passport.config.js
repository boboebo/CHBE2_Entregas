import passport from "passport";
import jwtPassport from "passport-jwt";
import dotenv from "dotenv";
dotenv.config();

const initializePassport = () => {
    passport.use('jwt', new jwtPassport.Strategy(
        {
            jwtFromRequest: jwtPassport.ExtractJwt.fromExtractors([cookieExtractor]),
            secretOrKey: process.env.jwtAuthKey
        },
        async (jwt_payload, done) => {
            try {
                return done(null, jwt_payload);
            }
            catch (error) {
                return done(error)
            }
        }
    ))

    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });
};

const cookieExtractor = (req) => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies['jwtAuthToken'];
    }
    return token;
}

export default initializePassport;