import React, { createContext, ReactNode, useContext, useState } from 'react';

export enum AuctionsFilterOp {
    Eq = '==',
    Ge = '>',
    Le = '<',
    Geq = '>=',
    Leq = '<=',
}

export interface AuctionsFilter {
    field: string;
    op: AuctionsFilterOp;
    value: string;
}

export interface AuctionsFilterContext {
    filters: AuctionsFilter[] | null;
    setFilters: (filters: AuctionsFilter[] | null) => void;
}

const auctionsFilterContext = createContext<AuctionsFilterContext>({
    filters: null,
    setFilters: () => void 0,
});

function useAuctionsFilterProvider(): AuctionsFilterContext {
    const [filters, setFilters] = useState<AuctionsFilter[] | null>(null);
    return {
        filters,
        setFilters,
    };
}

const AuctionsFilterProvider = (props: { children: ReactNode }) => {
    const filters = useAuctionsFilterProvider();
    console.log('filters = ', filters);
    return (
        <auctionsFilterContext.Provider value={filters}>
            {props.children}
        </auctionsFilterContext.Provider>
    );
};

const useAuctionsFilter = (): AuctionsFilterContext =>
    useContext(auctionsFilterContext);

export { useAuctionsFilter, AuctionsFilterProvider };
