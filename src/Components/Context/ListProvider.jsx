import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

export const ListProvider = ({ children }) => {
    const [listProduct, setListProduct] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0); 
    const [dateProduct , setDateProduct] = useState('');

    
 
    const addProduct = (newProduct) => {
        
        setListProduct((prevList) => {
            const updatedList = [...prevList, newProduct];
            return updatedList.sort((a, b) => a.name.localeCompare(b.name)); 
        });
    };

    
   
    useEffect(() => {
        const date= new Date();
        const day = date.getDate();
        const mouth = date.getMonth() + 1;
        const year = date.getFullYear();

        setDateProduct(`(${day}/${mouth}/${year})`)
      

        const total = listProduct.reduce((total, product) => total + product.price, 0);
        setTotalPrice(total); 


    }, [listProduct]);


    
   

    return (
        <ProductContext.Provider value={{ listProduct, addProduct, totalPrice,dateProduct }}>
            {children}
        </ProductContext.Provider>
    );
};
