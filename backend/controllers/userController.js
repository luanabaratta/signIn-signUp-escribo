const authUser = async (req, res) => {
    res.status(200).json({ message: 'Autenticação de Usuário' });
};

export { authUser };
