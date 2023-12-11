import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';

const Header = () => {
    const { userInfo } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logoutApiCall] = useLogoutMutation();

    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap();
            dispatch(logout());
            navigate('/login');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>Escribo</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            {userInfo ? (
                                <>
                                    <NavDropdown title={userInfo.name} id='username'>
                                        <LinkContainer to='/perfil'>
                                            <NavDropdown.Item>Perfil</NavDropdown.Item>
                                        </LinkContainer>
                                        <NavDropdown.Item onClick={logoutHandler}>
                                            Sair
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </>
                            ) : (
                                <>
                                    <LinkContainer to='/login'>
                                        <Nav.Link>
                                            <FaSignInAlt /> Entrar
                                        </Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to='/cadastrar'>
                                        <Nav.Link>
                                            <FaSignOutAlt /> Cadastrar
                                        </Nav.Link>
                                    </LinkContainer>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;