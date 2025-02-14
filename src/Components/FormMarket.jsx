import { useState, useContext } from 'react';
import './FormMarket.css';
import { ListProduct } from './ListProduct/ListProduct';
import { ProductContext } from './Context/ListProvider';

export const FormMarket = () => {
    const { listProduct, addProduct, totalPrice } = useContext(ProductContext); 
    const [nameProduct, setNameProduct] = useState('');
    const [priceProduct, setPriceProduct] = useState(0);
    const [dateProduct, setDateProduct] = useState('');

    const handleAddProduct = (e) => {
        e.preventDefault();
        const newProduct = { name: nameProduct, price: priceProduct, date: dateProduct };
        addProduct(newProduct);
    };

    return (
        <>
            <div className="ContainerFather">
                <form onSubmit={handleAddProduct} className="FormList">
                    <h2>Agregar Productos</h2>
                    <input
                        className="input"
                        onChange={(e) => setNameProduct(e.target.value)}
                        type="text"
                        placeholder="Nombre del producto"
                    />
                    <input
                        className="input"
                        onChange={(e) => setPriceProduct(Number(e.target.value))}
                        type="text"
                        placeholder="Precio del Producto"
                    />
                    <input
                        className="input"
                        onChange={(e) => setDateProduct(e.target.value)}
                        type="date"
                        placeholder="Fecha en la que se agrega el Producto"
                    />
                    <button className="buttonSubmit">Agregar a la lista</button>
                </form>

                <section className="ListProduct">
                    
                    <h2>Lista de productos</h2>

                        <ListProduct products={listProduct} />

                    <p className="TotalPrice">
                        Precio Total ${totalPrice} 
                    </p>
                </section>
            </div>
        </>
    );
};
