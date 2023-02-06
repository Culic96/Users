import { useState, useEffect } from 'react';
import {
    Button,
    Input,
    FormLabel,
    Container,
    Select,
    MenuItem,
    InputLabel,
} from '@mui/material';
import EditAuction from '../EditAuction';
import { v4 as uuid } from 'uuid';
import {
    collection,
    onSnapshot,
    setDoc,
    doc,
    DocumentData,
    deleteDoc,
} from 'firebase/firestore';
import { auctionsRef, firestore } from '../../Firebase/firebaseConfig';
import { WithId } from '../../src/utils/withId';
import { useAuth } from '../../Hooks/useAuth';
import {
    AuctionCardHolder,
    AuctionItem,
    GridWrapper,
    ScrollContainer,
} from '../Shared/AuctionContainers/style';
export enum Categories {
    Home = 'Home',
    Cars = 'Cars',
    Tech = 'Tech',
}

export interface AuctionItem {
    title: string;
    desc: string;
    category: Categories;
    price: number;
    createdBy: string;
}

const Auctions = () => {
    const { auth } = useAuth();
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState<Categories>(Categories.Cars);
    const [editAuction, setEditAuction] = useState<AuctionItem | null>(null);
    const [auctionsDb, setAuctionsDb] = useState<DocumentData>([]);
    const createdBy = auth?.userId;
    useEffect(() => {
        const clear = onSnapshot(
            collection(firestore, 'auctions'),
            (snapshot) =>
                setAuctionsDb(
                    snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
                ),
        );

        return clear;
    }, []);

    const addDbAuction = async (
        title: string,
        desc: string,
        category: string,
        price: number,
        createdBy: string | undefined,
    ) => {
        await setDoc(doc(auctionsRef, uuid()), {
            title,
            desc,
            category,
            price,
            createdBy,
        });
        setTitle('');
        setDesc('');
        setPrice(0);
    };

    const editAuctionDb = async (auction: WithId<AuctionItem>) => {
        const docRef = doc(auctionsRef, auction.id);
        await setDoc(
            docRef,
            {
                title: auction.title,
                desc: auction.desc,
                category: auction.category,
                price: auction.price,
            },
            { merge: true },
        );
    };

    const deleteAuctionDb = async (auction: WithId<AuctionItem>) => {
        const docRef = doc(auctionsRef, auction.id);
        await deleteDoc(docRef);
    };

    const onClose = () => {
        setEditAuction(null);
    };

    return (
        <>
            <Container
                sx={{
                    maxWidth: '85vw',
                    marginLeft: '14vw',
                    display: 'flex',
                    paddingTop: '4rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: '1rem',
                }}
            >
                <Container
                    sx={{
                        // height: '60px',
                        maxWidth: '85vw',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: '2rem',
                    }}
                >
                    {!editAuction && (
                        <FormLabel
                            sx={{
                                width: '1100px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '2rem',
                            }}
                        >
                            <label style={{ width: '150px' }}>
                                Enter title
                                <Input
                                    size="small"
                                    inputProps={{
                                        maxLength: '12',
                                    }}
                                    type={'text'}
                                    value={title}
                                    required={true}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </label>
                            <label style={{ width: '150px' }}>
                                Enter description
                                <Input
                                    size="small"
                                    inputProps={{
                                        maxLength: '45',
                                    }}
                                    type={'text'}
                                    value={desc}
                                    required={true}
                                    onChange={(e) => setDesc(e.target.value)}
                                />
                            </label>
                            <InputLabel id="demo-simple-select-autowidth-label">
                                Category
                            </InputLabel>
                            <Select
                                sx={{ color: '#1976d2' }}
                                label="category"
                                onChange={(event) =>
                                    setCategory(
                                        event.target.value as Categories,
                                    )
                                }
                                size="small"
                            >
                                {Object.values(Categories).map((category) => (
                                    <MenuItem
                                        key={category.toString()}
                                        value={category}
                                    >
                                        {category.toString()}
                                    </MenuItem>
                                ))}
                            </Select>
                            <label style={{ width: '150px' }}>
                                Enter price
                                <Input
                                    size="small"
                                    inputProps={{
                                        maxLength: '5',
                                    }}
                                    type={'text'}
                                    value={price}
                                    required={true}
                                    onChange={(e) =>
                                        setPrice(Number(e.target.value))
                                    }
                                />
                            </label>
                            <Button
                                sx={{ fontSize: '12px' }}
                                size="small"
                                variant="contained"
                                onClick={() => {
                                    addDbAuction(
                                        title,
                                        desc,
                                        category,
                                        price,
                                        createdBy,
                                    );
                                }}
                            >
                                Add auction
                            </Button>
                        </FormLabel>
                    )}
                </Container>
                {editAuction && (
                    <EditAuction
                        onClose={onClose}
                        isEditOpen={!!editAuction}
                        auction={editAuction}
                        editAuctionDb={editAuctionDb}
                    />
                )}
            </Container>
            <GridWrapper>
                <ScrollContainer>
                    <AuctionCardHolder>
                        {auctionsDb.map((auction, idx) => {
                            return (
                                <AuctionItem key={idx}>
                                    <h3>Title: {auction.title}</h3>
                                    <p>Description: {auction.desc}</p>
                                    <p>Category: {auction.category}</p>
                                    <p>Price: {auction.price}$</p>
                                    {auth?.userId === auction.createdBy ? (
                                        <>
                                            <Button
                                                size="small"
                                                variant="contained"
                                                onClick={() => {
                                                    setEditAuction(auction);
                                                }}
                                            >
                                                Edit Auction
                                            </Button>
                                            <Button
                                                size="small"
                                                variant="contained"
                                                onClick={() =>
                                                    deleteAuctionDb(auction)
                                                }
                                            >
                                                Delete Auction
                                            </Button>
                                        </>
                                    ) : (
                                        <Button
                                            size="small"
                                            variant="contained"
                                        >
                                            Buy
                                        </Button>
                                    )}
                                </AuctionItem>
                            );
                        })}
                    </AuctionCardHolder>
                </ScrollContainer>
            </GridWrapper>
        </>
    );
};

export default Auctions;
