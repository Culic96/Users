import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Register from '../Components/Register';
import Login from '../Components/Login';
import { useAuth } from '../Hooks/useAuth';
import Navigation from '../Components/Navigation';
import Auctions from '../Components/Auctions';
import { Button, AppBar, Toolbar } from '@mui/material';

const Index: NextPage = () => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

    const { auth, logoutUser } = useAuth();

    useEffect(() => {
        console.log(auth);
    }, [auth]);

    return (
        <>
            <AppBar
                // position="static"
                sx={{
                    height: '10vh',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    flexDirection: 'row',
                    paddingRight: '2rem',
                    gap: '2rem',
                }}
            >
                <Toolbar>
                    {!auth && (
                        <>
                            <AppBar
                                position="static"
                                sx={{
                                    height: '10vh',
                                    width: '100vw',
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    margin: '0 auto',
                                    paddingRight: '2rem',
                                    gap: '2rem',
                                }}
                            >
                                <Button
                                    color="inherit"
                                    onClick={() => setIsLoginModalOpen(true)}
                                >
                                    Login
                                </Button>
                                <Button
                                    color="inherit"
                                    onClick={() => setIsRegisterModalOpen(true)}
                                >
                                    Register
                                </Button>
                            </AppBar>
                        </>
                    )}
                    {auth && (
                        <>
                            <h3 style={{ paddingRight: '2rem' }}>
                                Welcome back {auth.email}
                            </h3>
                            <Button
                                // color="inherit"
                                variant="contained"
                                onClick={logoutUser}
                            >
                                Logout
                            </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
            {isRegisterModalOpen && !isLoginModalOpen && !auth && (
                <div style={{ width: '100vw', height: '90vh' }}>
                    <Register
                        isModalOpen={isRegisterModalOpen}
                        onClose={() => {
                            setIsRegisterModalOpen(false);
                        }}
                    />
                </div>
            )}
            {isLoginModalOpen && !isRegisterModalOpen && !auth && (
                <div style={{ width: '100vw', height: '90vh' }}>
                    <Login
                        isModalOpen={isLoginModalOpen}
                        onClose={() => {
                            setIsLoginModalOpen(false);
                        }}
                    />
                </div>
            )}
            {auth && (
                <>
                    <Navigation />
                    <Auctions />
                </>
            )}
        </>
    );
};

export default Index;
