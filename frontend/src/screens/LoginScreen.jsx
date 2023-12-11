import { useState } from "react";
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from "../components/FormContainer";

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log('submit');
    }

    return(
        <FormContainer>
            <h1>Login</h1>

            <Form onSubmit={ submitHandler }>
                <Form.Group className='my-2' controlId={email}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Insira o seu email'
                        value={email}
                        onChange={(event) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId={password}>
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Insira a sua senha'
                        value={password}
                        onChange={(event) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary' className='mt-3'>Entrar</Button>

                <Row className='py-3'>
                    <Col>
                        Novo por aqui? <Link to='/cadastrar'>Cadastre agora</Link>
                    </Col>
                </Row>
            </Form>
        </FormContainer>
    )
}

export default LoginScreen;