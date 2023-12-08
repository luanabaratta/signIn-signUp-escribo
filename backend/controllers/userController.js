const authUser = async (req, res) => {
    res.status(200).json({ message: 'Autenticar Usuário' });
};

export { authUser };
