import {
    collection,
    getDocs,
    query,
    where,
    DocumentData,
    orderBy,
} from 'firebase/firestore';
import { useCallback, useEffect, useState } from 'react';
import { firestore } from '../../Firebase/firebaseConfig';
import { useAuth } from '../../Hooks/useAuth';
import {
    AuctionCardHolder,
    AuctionItem,
    GridWrapper,
    ScrollContainer,
} from '../Shared/AuctionContainers/style';

const UserAuctions = () => {
    const [userAuctions, setUserAuctions] = useState<DocumentData>([]);
    const { auth } = useAuth();
    const currUser = auth?.userId;
    console.log('single user auctions', userAuctions);

    const getUserAuctions = useCallback(async (userId: string) => {
        const docRef = collection(firestore, 'auctions');

        // Create query
        let q = query(docRef, orderBy('title', 'desc'));
        q = query(q, where('createdBy', '==', userId));

        const docs = await getDocs(q);
        console.log('docs = ', docs.docs);
        setUserAuctions(
            docs.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
        );
    }, []);

    useEffect(() => {
        if (currUser) {
            getUserAuctions(currUser);
        }
    }, [getUserAuctions, currUser]);
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100vw',
                    height: '60px',
                }}
            >
                <h1>MY AUCTIONS</h1>
            </div>
            <GridWrapper>
                <ScrollContainer>
                    <AuctionCardHolder>
                        {userAuctions.map((auction) => {
                            return (
                                <AuctionItem key={auction.id}>
                                    <h1 style={{ color: '#000' }}>
                                        Title: {auction.title}
                                    </h1>
                                    <p>Description: {auction.desc}</p>
                                    <p>Category: {auction.category}</p>
                                    <p>Price: {auction.price} $</p>
                                </AuctionItem>
                            );
                        })}
                    </AuctionCardHolder>
                </ScrollContainer>
            </GridWrapper>
        </>
    );
};

export default UserAuctions;
