import { AppBar, Button } from '@mui/material';
import { NextPage } from 'next';
import Navigation from '../Components/Navigation';
import UserAuctions from '../Components/UserAuctions';
import { useAuth } from '../Hooks/useAuth';
const MyAuctions: NextPage = () => {
    const { auth, logoutUser } = useAuth();

    return (
        <>
            {auth && (
                <>
                    <AppBar
                        position="static"
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
                        <h3 style={{ paddingRight: '2rem' }}>
                            Welcome back {auth.email}
                        </h3>
                        <Button variant="contained" onClick={logoutUser}>
                            Logout
                        </Button>
                    </AppBar>
                </>
            )}
            <Navigation />
            <UserAuctions />
        </>
    );
};

export default MyAuctions;
