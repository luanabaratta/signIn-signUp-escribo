import asyncHandler from 'express-async-handler';



/***** POST /api/usuarios/auth *****/
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Autenticação de Usuário' });
});

export { authUser };
