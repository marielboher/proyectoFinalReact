import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "./itemDetailContainer.css";
import { CartContext } from "../../contexts/CartContext";
import { collection, getDocs } from "firebase/firestore";
import db from "../../../db/firebase-config";
import { Toaster, toast } from "react-hot-toast";

const ItemDetailContainer = ({ data }) => {
  const { addProduct } = useContext(CartContext);

  const [producto, setProducto] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  const productDB = collection(db, "productos");

  const getItems = async () => {
    const productCollection = await getDocs(productDB);
    const productos = productCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    const productoEncontrado = productos.find((producto) => producto.id == id);
    setProducto(productoEncontrado);
    setIsLoading(false);
  };

  const handleAddToCart = (product) => {
    addProduct(product);
    toast.success(`Added "${product.title}" to cart.`);
  };

  useEffect(() => {
    getItems();
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <div className="container-loader">
          <div className="loader"></div>
        </div>
      ) : producto ? (
        <div className="container-details">
          <div className="img-details">
            <img src={producto.image} alt={producto.title} />
          </div>
          <div className="info-details">
            <h1>{producto.title}</h1>
            <p>{producto.description}</p>
            <p>{producto.category}</p>
            <p>$ {producto.price}</p>
            <button className="btn" onClick={() => handleAddToCart(producto)}>
              ADD TO BAG
            </button>
          </div>
        </div>
      ) : (
        <p>No se encontró el producto con ID {id}</p>
      )}
      <Toaster
        position="top-left"
        toastOptions={{
          autoClose: 1000,
          style: {
            background: "#FFFF",
            color: "#AD8B73",
          }
          
        }}
      />
    </div>
  );
};

export default ItemDetailContainer;
