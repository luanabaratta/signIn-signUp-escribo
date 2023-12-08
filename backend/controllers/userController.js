import asyncHandler from 'express-async-handler';

// @desc Auth user/set token
// route POST /api/usuarios/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Login do Usuário' });
});

// @desc Register a new user
// route POST /api/usuarios
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Registrar Usuário' });
});

// @desc Logout user
// route POST /api/usuarios/sair
// @access Public
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Deslogar Usuário' });
});

// @desc Get user profile
// route GET /api/usuarios/perfil
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Perfil do Usuário' });
});

// @desc Update user profile
// route PUT /api/usuarios/perfil
// @access Private
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
