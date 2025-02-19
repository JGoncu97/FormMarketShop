import { useState, useContext } from 'react';
import './FormMarket.css';
import { ListProduct } from './ListProduct/ListProduct';
import { ProductContext } from './Context/ListProvider';

export const FormMarket = () => {
    const { listProduct, addProduct, totalPrice ,dateProduct } = useContext(ProductContext); 
    const [nameProduct, setNameProduct] = useState('');
    const [priceProduct, setPriceProduct] = useState(0);

    

    const handleAddProduct = (e) => {
        e.preventDefault();

        if(nameProduct || priceProduct == null){
          
        }
        const newProduct = { name: nameProduct, price: priceProduct};
        addProduct(newProduct);
        
        setNameProduct('');
        setPriceProduct(0);
    };

    return (
        <>
            <div className="ContainerFather">
                <form onSubmit={handleAddProduct} className="FormList">
                    <h2>Agregar Productos</h2>
                    <input
                        className="input"
                        value={nameProduct}
                        onChange={(e) => setNameProduct(e.target.value)}
                        type="text"
                        placeholder="Nombre del producto"
                    />
                    <input
                        value={priceProduct}
                        className="input"
                        onChange={(e) => setPriceProduct(Number(e.target.value))}
                        type="text"
                        placeholder="Precio del Producto"
                    />
                    
                    <button className="buttonSubmit">Agregar a la lista</button>
                </form>

                <section className="ListProduct">
                    
                    <h2 className='titleList'>Lista de productos {dateProduct}</h2>


                        <ListProduct products={listProduct} />

                    <h3 className="TotalPrice">
                        Precio Total ${totalPrice} 
                    </h3>
                </section>
            </div>
        </>
    );
};
