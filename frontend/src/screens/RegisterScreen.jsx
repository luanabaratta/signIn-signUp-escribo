import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from "../components/FormContainer";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slices/usersApiSlice.js";
import { setCredentials } from "../slices/authSlice.js";
import Loader from '../components/Loader.jsx';

const RegisterScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telephones, setTelephones] = useState([{ ddd: '', number: '' }]);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [register, { isLoading }] = useRegisterMutation();

    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
        if (userInfo) {
            navigate('/');
        }
    }, [navigate, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error('A senha não é a mesma');
        } else {
            try {
                const res = await register({ name, email, password }).unwrap();
                dispatch(setCredentials({ ...res }));
                navigate('/');
            } catch (err) {
                toast.error(err?.data?.message || err.error);
            }
        }
    };

    const handleTelephoneChange = (index, key, value) => {
        const newTelephones = [...telephones];
        newTelephones[index][key] = value;
        setTelephones(newTelephones);
    };

    const addTelephone = () => {
        setTelephones([...telephones, { ddd: '', number: '' }]);
    };

    const removeTelephone = (index) => {
        const newTelephones = [...telephones];
        newTelephones.splice(index, 1);
        setTelephones(newTelephones);
    };

    return(
        <FormContainer>
            <h1>Cadastro</h1>

            <Form onSubmit={ submitHandler }>
                <Form.Group className='my-2' controlId={name}>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Insira o seu nome completo'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group className='my-2' controlId={email}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Insira o seu email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                {/*<Form.Group className="my-2" controlId={telephones}>*/}
                {/*    <Form.Label>Telefones</Form.Label>*/}
                {/*    {telephones.map((telephone, index) => (*/}
                {/*        <div key={index}>*/}
                {/*            <Row>*/}
                {/*                <Col>*/}
                {/*                    <Form.Control*/}
                {/*                        type="text"*/}
                {/*                        placeholder="DDD"*/}
                {/*                        value={telephone.ddd}*/}
                {/*                        onChange={(e) => handleTelephoneChange(index, 'ddd', e.target.value)}*/}
                {/*                        className="mt-2"*/}
                {/*                    />*/}
                {/*                </Col>*/}
                {/*                <Col>*/}
                {/*                    <Form.Control*/}
                {/*                        type="text"*/}
                {/*                        placeholder="Número"*/}
                {/*                        value={telephone.number}*/}
                {/*                        onChange={(e) => handleTelephoneChange(index, 'number', e.target.value)}*/}
                {/*                        className="mt-2"*/}
                {/*                    />*/}
                {/*                </Col>*/}
                {/*                <Col>*/}
                {/*                    <Button*/}
                {/*                        variant="danger"*/}
                {/*                        className="mt-2 btn-close"*/}
                {/*                        onClick={() => removeTelephone(index)}*/}
                {/*                    />*/}
                {/*                </Col>*/}
                {/*            </Row>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*    <br/>*/}
                {/*    <Button variant="secondary" onClick={addTelephone} className="mt-2">*/}
                {/*        Adicionar Tel.*/}
                {/*    </Button>*/}
                {/*</Form.Group>*/}

                <Form.Group className='my-2' controlId={password}>
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Insira a sua senha'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group className='my-2' controlId={confirmPassword}>
                    <Form.Label>Confirmar Senha</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Confirme a sua senha'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                {isLoading && <Loader/>}

                <Button type='submit' variant='primary' className='mt-3'>Cadastrar</Button>

                <Row className='py-3'>
                    <Col>
                        Já tem uma conta? <Link to='/login'>Entrar</Link>
                    </Col>
                </Row>
            </Form>
        </FormContainer>
    )
}

export default RegisterScreen;