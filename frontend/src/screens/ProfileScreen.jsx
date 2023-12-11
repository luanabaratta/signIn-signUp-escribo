import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import { useUpdateUserMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';

const ProfileScreen = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();

    const { userInfo } = useSelector((state) => state.auth);

    const [updateProfile, { isLoading }] = useUpdateUserMutation();

    useEffect(() => {
        setName(userInfo.name);
        setEmail(userInfo.email);
    }, [userInfo.email, userInfo.name]);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('As senhas não são as mesmas');
        } else {
            try {
                const res = await updateProfile({
                    _id: userInfo._id,
                    name,
                    email,
                    password,
                }).unwrap();
                console.log(res);
                dispatch(setCredentials(res));
                toast.success('Perfil atualizado com sucesso');
            } catch (err) {
                toast.error(err?.data?.message || err.error);
            }
        }
    };
    return (
        <FormContainer>
            <h1>Atualize o seu perfil</h1>

            <Form onSubmit={submitHandler}>
                <Form.Group className='my-2' controlId='name'>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='Insira o seu nome completo'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className='my-2' controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Insira o seu email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className='my-2' controlId='password'>
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Insira a sua senha'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId='confirmPassword'>
                    <Form.Label>Confirmar Senha</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Confirme a sua senha'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary' className='mt-3'>
                    Atualizar Perfil
                </Button>

                {isLoading && <Loader />}
            </Form>
        </FormContainer>
    );
};

export default ProfileScreen;