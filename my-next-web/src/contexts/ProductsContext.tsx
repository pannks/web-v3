"use client";

import { ProductItem } from "@/utils/dataType";
import { createContext, useContext, useEffect, useState } from "react";
import { getProducts } from "../utils/firebase";
import useFetch from "@/hooks/useFetch";

type ProductsContextValue = {
    products: ProductItem[] | null;
    loading: boolean;
    refetch: () => void;
    error: Error | null;
};

type ProductsProviderProps = {
    children: React.ReactNode;
};

const ProductsContext = createContext<ProductsContextValue | undefined>(
    undefined
);

const ProductsProvider: React.FC<ProductsProviderProps> = ({ children }) => {
    const {
        data: products,
        loading,
        error,
        refetch
    } = useFetch<ProductItem[]>(getProducts, []);

    return (
        <ProductsContext.Provider value={{ products, loading, refetch, error }}>
            {children}
        </ProductsContext.Provider>
    );
};

function useProducts() {
    const context = useContext(ProductsContext);
    if (context === undefined) {
        throw new Error("use ProductsContext outside provider");
    }
    return context;
}

export { ProductsProvider, useProducts };
