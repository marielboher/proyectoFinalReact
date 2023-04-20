import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../../../db/firebase-config";
import { getDocs, collection } from "firebase/firestore";
import "./itemListContainer.css";
import ItemList from "../ItemList";

const ItemListContainer = () => {
  const [productos, setProducto] = useState([]);
  const productDB = collection(db, "productos");
  const { categoryName } = useParams();

  const getItems = async () => {
    const productCollection = await getDocs(productDB);
    const productos = productCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    if (categoryName) {
      setProducto(
        productos.filter((producto) => producto.category === categoryName)
      );
    } else {
      setProducto(productos);
    }
  };

  useEffect(() => {
    getItems();
  }, [categoryName]);

  return (
    <div>
      <div className="productos">
        {productos.map((producto) => (
          <ItemList key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
