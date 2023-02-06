import { Button, Container, Link } from '@mui/material';
import {
    collection,
    DocumentData,
    getDocs,
    orderBy,
    query,
} from 'firebase/firestore';

import React, { useCallback, useEffect, useState } from 'react';
import { firestore } from '../../Firebase/firebaseConfig';
const Navigation = () => {
    const [userAuctions, setUserAuctions] = useState<DocumentData>([]);

    const getUserAuctions = useCallback(async () => {
        const docRef = collection(firestore, 'auctions');

        // Create query
        const q = query(docRef, orderBy('title', 'desc'));

        const docs = await getDocs(q);
        console.log('docs = ', docs.docs);
        setUserAuctions(
            docs.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
        );
    }, []);

    useEffect(() => {
        getUserAuctions();
    }, [getUserAuctions]);

    console.log('from nav', userAuctions);
    return (
        <>
            <Container
                sx={{
                    height: '90vh',
                    width: '15vw',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '2rem',
                    position: 'fixed',
                    left: 0,
                    top: '10vh',
                    color: '#fff',

                    alignItems: 'center',
                    flexDirection: 'column',
                    boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
                    backgroundColor: '#1976d2',
                }}
            >
                <h2>Filter auctions</h2>
                <Button size="small" variant="contained">
                    Title
                </Button>
                <Link
                    style={{ color: '#fff' }}
                    variant="body2"
                    underline="hover"
                    href="/"
                >
                    <li style={{ listStyle: 'none' }}>All Auctions</li>
                </Link>
                <Link
                    variant="body2"
                    underline="hover"
                    style={{ color: '#fff' }}
                    href="/myauctions"
                >
                    <li style={{ listStyle: 'none' }}>My Auctions</li>
                </Link>
                <Link
                    underline="hover"
                    variant="body2"
                    style={{ color: '#fff' }}
                    href="/"
                >
                    <li style={{ listStyle: 'none' }}>Register</li>
                </Link>
                <Link
                    underline="hover"
                    variant="body2"
                    style={{ color: '#fff' }}
                    href="/"
                >
                    <li style={{ listStyle: 'none' }}>Register</li>
                </Link>
            </Container>
        </>
    );
};

export default Navigation;
