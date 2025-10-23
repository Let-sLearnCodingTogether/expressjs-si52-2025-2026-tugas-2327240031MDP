import userModel from '../model/userModel.js';
import { hash, compare } from '../utils/hashUtil.js';
import { jwtSignUtil } from '../utils/jwtSignUtil.js';

export const register = async (req, res) => {
    try {
        const request = req.body;
        console.log(request);
        
        const hashPassword = await hash(request.password);

        const user = await userModel.create({
            username: request.username,
            email: request.email,
            password: hashPassword
        });

        res.status(201).json({
            message: "Berhasil melakukan register, silahkan login.",
            data: {
                id: user._id
            }
        })

    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        })
    }
}

export const login = async (req, res) => {
    try {
        const request = req.body;
        const user = await userModel.findOne({ email: request.email });

        if (!user) {
            return res.status(404).json({
                message: "User tidak ditemukan.",
                data: null
            })
        }

        const isPasswordMatch = compare(request.password, user.password);

        if (!isPasswordMatch) {
            return res.status(404).json({
                message: "Password yang anda masukan salah.",
                data: null
            })
        }

        if (await compare(request.password, user.password)) {
            return res.status(200).json({
                message: "Login berhasil.",
                data: {
                    username: user.username,
                    email: user.email,
                    token: jwtSignUtil(user)
                }
            })
        }

        res.status(401).json({
            message: "Login gagal.",
            data: null
        })

    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        })
    }
}

export const viewProfile = async (req, res) => {
    try {
        const user = await userModel.findById(req.user.id).select('-password');

        if (!user) {
            return res.status(404).json({
            message: "User tidak ditemukan.",
            data: null
          });
        }

        res.status(200).json({
            message: "Profile berhasil diakses.",
            data: user
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        });
    }
};
