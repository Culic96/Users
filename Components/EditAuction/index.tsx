import { Button, Container, Input, MenuItem, Select } from '@mui/material';
import { FC, useState } from 'react';
import { WithId } from '../../src/utils/withId';
import { AuctionItem, Categories } from '../Auctions';

const EditAuction: FC<{
    onClose: () => void;
    isEditOpen: boolean;
    auction: WithId<AuctionItem>;
    editAuctionDb: (auction: WithId<AuctionItem>) => void;
}> = ({ onClose, isEditOpen, auction, editAuctionDb }) => {
    const [title, setTitle] = useState(auction.title);
    const [desc, setDesc] = useState(auction.desc);
    const [price, setPrice] = useState(auction.price);
    const [category, setCategory] = useState(auction.category);
    return (
        <>
            {isEditOpen && (
                <Container
                    sx={{
                        height: '60px',
                        width: '85vw',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: '2rem',
                    }}
                >
                    <Container
                        sx={{
                            maxWidth: '900px',
                            height: '50px',
                            backgroundColor: 'transparent',
                            color: '#1976d2',
                            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            fontSize: '12px',
                        }}
                    >
                        Enter New Title
                        <Input
                            inputProps={{
                                maxLength: '12',
                            }}
                            sx={{ color: '#1976d2', width: '120px' }}
                            type={'text'}
                            value={title}
                            required={true}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        Enter New Description
                        <Input
                            inputProps={{
                                maxLength: '200',
                            }}
                            sx={{ color: '#1976d2', width: '120px' }}
                            type={'text'}
                            value={desc}
                            required={true}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                        <Select
                            sx={{ color: '#1976d2' }}
                            label="category"
                            onChange={(event) =>
                                setCategory(event.target.value as Categories)
                            }
                            value={category}
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
                        Enter new Price
                        <Input
                            inputProps={{
                                maxLength: '5',
                            }}
                            sx={{ color: '#1976d2', width: '120px' }}
                            type={'text'}
                            value={price}
                            required={true}
                            onChange={(e) => setPrice(Number(e.target.value))}
                        />
                        <Button
                            variant="contained"
                            onClick={() => {
                                editAuctionDb({
                                    id: auction.id,
                                    title,
                                    desc,
                                    category,
                                    price,
                                });
                                onClose();
                            }}
                        >
                            Edit auction
                        </Button>
                    </Container>
                </Container>
            )}
        </>
    );
};

export default EditAuction;
