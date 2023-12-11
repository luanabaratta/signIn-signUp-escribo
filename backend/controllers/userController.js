import asyncHandler from 'express-async-handler';
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";

// /api/usuarios/login @access Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne( { email });
    if(user && (await user.matchPassword(password))) {
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    } else {
        res.status(401);
        throw new Error('Usuário e/ou senha inválidos');
    }
});

// api/usuarios @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, telephones } = req.body;

    const userExists = await User.findOne( { email });

    if(userExists) {
        res.status(400);
        throw new Error('E-mail já existente');
    }
    const user = await User.create({
        name,
        email,
        password,
        telephones: telephones.map(({ ddd, number }) => ({ ddd, number })),
    });

    if(user) {
        generateToken(res, user._id);
        res.status(201).json({
           _id: user._id,
           name: user.name,
           email: user.email,
           telephones: user.telephones,
        });
    } else {
        res.status(400);
        throw new Error('Usuário e/ou senha inválidos');
    }
});

// api/usuarios/sair @access Public
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
       httpOnly: true,
       expires: new Date(0)
    });

    res.status(200).json({ message: 'Usuário deslogado' });
});

// api/usuarios/perfil @access Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Perfil do Usuário' });
});

// api/usuarios/perfil @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Atualizar o perfil' });
});

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};
