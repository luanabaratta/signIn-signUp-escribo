import asyncHandler from 'express-async-handler';
import User from "../models/userModel.js";

// POST /api/usuarios/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Login do Usuário' });
});

// api/usuarios @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, phones } = req.body;

    const userExists = await User.findOne( { email });

    if(userExists) {
        res.status(400);
        throw new Error('E-mail já existente');
    }

    const user = await User.create({
        name,
        email,
        password,
        phones
    });

    if(user) {
        res.status(201).json({
           _id: user_id,
           name: user.name,
           email: user.email,
           phones: user.phones
        });
    } else {
        res.status(400);
        throw new Error('')
    }

    res.status(200).json({ message: 'Registro do Usuário' });
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
