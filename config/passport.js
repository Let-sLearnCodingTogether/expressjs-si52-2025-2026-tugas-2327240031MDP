import passport from 'passport';
import { ExtractJwt, Strategy } from "passport-jwt";
import userModel from '../model/userModel.js';

const opts = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "JWT_SECRET_KEY"
}

passport.use(
    new Strategy(opts, async (payload, done) => {
        try {
            const user = await userModel.findById({
                email : payload.email
            })

            if (!user) {
                return done(null, false)
            }

            return done (null, {
                id : user.id,
                email : user.email,
                username : user.username
            })
        } catch (error) {
            return done (null, false)
        }
    })
)