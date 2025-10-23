import passport from "passport";

export const protect = (req, res, next) => {
    passport.authenticate(
        'jwt', {
            session: false
        },
        (error, user, info) => {
            if(error || !user) {
                return res.status(401).json({
                    message: info ? info.message : "Akses tidak diizinkan",
                    error: error || "Token tidak valid",
                    data: null
                })
            }
            console.log('Middleware protect - user:', user)
            req.user = user
            return next();
        }
    )(req, res, next);
}