import { Box, Button, Container, TextField } from '@mui/material';
import { FC, FormEvent, useState } from 'react';
import { RegisterUser } from '../../Firebase/firebaseConfig';

const Register: FC<{ isModalOpen: boolean; onClose: () => void }> = ({
    isModalOpen,
    onClose,
}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await RegisterUser(username, password);
            setUsername('');
            setPassword('');
        } catch (err) {
            return;
        }
    }

    return (
        <>
            {isModalOpen && (
                <Container
                    sx={{
                        width: '50vw',
                        height: '70vh',
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'transparent',
                        textAlign: 'center',
                        color: '#1976d2',
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                    }}
                >
                    <>
                        <form onSubmit={handleSubmit}>
                            <Box
                                sx={{
                                    height: '70vh',
                                    width: '50vw',
                                    display: 'flex',
                                    justifyContent: 'space-evenly',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                }}
                            >
                                <h3>Register User</h3>

                                <TextField
                                    id="standard-basic"
                                    label="Enter username"
                                    variant="standard"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    placeholder="Enter Username"
                                ></TextField>
                                <TextField
                                    id="standard-basic"
                                    label="Enter password"
                                    variant="standard"
                                    type={'password'}
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    placeholder="Enter Password"
                                ></TextField>
                                <Button variant="outlined" type="submit">
                                    Register
                                </Button>
                                <Button variant="outlined" onClick={onClose}>
                                    Cancel
                                </Button>
                            </Box>
                        </form>
                    </>
                </Container>
            )}
        </>
    );
};

export default Register;
