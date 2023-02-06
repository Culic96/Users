import {
    collection,
    DocumentData,
    getDocs,
    orderBy,
    OrderByDirection,
    query,
    where,
} from 'firebase/firestore';
import { useCallback, useState } from 'react';
import { firestore } from '../../Firebase/firebaseConfig';
import {
    AuctionsFilter,
    useAuctionsFilter,
} from '../../Hooks/useAuctionsFilter';

interface AuctionSortExpression {
    field: string;
    orderBy: OrderByDirection;
}

interface AuctionsExpression {
    sort?: AuctionSortExpression;
    filter?: string;
}

const useAuctionsService = () => {
    const [auctions, setAuctions] = useState<DocumentData>([]);
    const { filters } = useAuctionsFilter();

    const getAllAuctions = useCallback(
        async (expression?: AuctionsExpression) => {
            const docRef = collection(firestore, 'auctions');

            // Create query
            let q = query(docRef);
            if (expression?.sort) {
                q = query(
                    q,
                    orderBy(expression?.sort.field, expression?.sort.orderBy),
                );
            }

            const docs = await getDocs(q);
            setAuctions(
                docs.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
            );
        },
        [],
    );

    const getAllAuctionsFiltered = useCallback(async () => {
        const docRef = collection(firestore, 'auctions');

        // Create query
        let q = query(docRef);
        if (filters && filters.length > 0) {
            filters.forEach((filter: AuctionsFilter) => {
                q = query(q, where(filter.field, filter.op, filter.value));
            });
        }

        const docs = await getDocs(q);
        setAuctions(docs.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    }, [filters]);

    return {
        auctions,
        getAllAuctions,
        getAllAuctionsFiltered,
    };
};

export default useAuctionsService;
