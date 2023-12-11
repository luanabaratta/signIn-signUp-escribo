import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
       expiresIn: '30m'
    });

    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_DEV !== 'development',
        sameSite: 'strict',
        maxAge: 30 * 60 * 1000
    });
}

export default generateToken;