import asyncHandler from 'express-async-handler';
import User from "../models/userModel.js";

// /api/usuarios/login @access Public
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Login do Usuário' });
});

// api/usuarios @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, telephones } = req.body;

    const userExists = await User.findOne( { email });

    if(userExists) {
        res.status(400);
        throw new Error('E-mail já existente');
    }

    const { ddd } = telephones[0];
    const { number } = telephones[0];

    const user = await User.create({
        name,
        email,
        password,
        telephones: [{ ddd, number }]
    });

    if(user) {
        res.status(201).json({
           _id: user._id,
           name: user.name,
           email: user.email,
           password: user.password,
           telephones: telephones,
        });
    } else {
        res.status(400);
        throw new Error('Usuário e/ou senha inválidos');
    }
});

// api/usuarios/sair @access Public
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Logout de Usuário' });
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
