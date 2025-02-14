import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

export const ListProvider = ({ children }) => {
    const [listProduct, setListProduct] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0); 

 
    const addProduct = (newProduct) => {
        setListProduct((prevList) => [...prevList, newProduct]);
    };

   
    useEffect(() => {
        const total = listProduct.reduce((total, product) => total + product.price, 0);
        setTotalPrice(total); 
    }, [listProduct]);

    return (
        <ProductContext.Provider value={{ listProduct, addProduct, totalPrice }}>
            {children}
        </ProductContext.Provider>
    );
};
