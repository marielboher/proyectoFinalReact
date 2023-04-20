import "./home.css";
import fondo from "../../assets/multimedia/home3.jpeg";
import Jarron from "../../assets/multimedia/jarron2.webp";
import Textile from "../../assets/multimedia/textil3.webp";
import NewIn from "../NewIn";
import Featured from "../Featured";
import { useEffect, useState } from "react";
import db from "../../../db/firebase-config";
import { collection, getDocs } from "firebase/firestore";

const Home = () => {
  const productDB = collection(db, "productos");
  const [productos, setProducto] = useState([]);

  const getProd = async () => {
    const productCollection = await getDocs(productDB);
    const productos = productCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setProducto(productos);
  };

  useEffect(() => {
    getProd();
  }, []);

  const textKitchen =
    "Stock your home with our cooking and decoration essentials designed to last and look beautiful in your home. Whether you are searching for a gift or simply wanting to add aesthetic to your home, we have a variety of unique products to choose from.";
  const textKids =
    "Give your home a makeover with our beautiful collection of textiles designed to last and bring comfort to your home! Whether you're looking for a quick update for your living room, bedroom, or any other room in the house, our collection of textiles has everything you need to create an inviting and stylish space.";

  return (
    <div className="container-home">
      <div className="home">
        <div className="info">
          <p>WE CREATE EXCEPTIONAL PIECES THAT DEFINE SPACES.</p>
        </div>
        <img src={fondo} className="imagen-inicio" />
      </div>
      <div className="new-in">
        <h4>NEW IN-STORE</h4>
      </div>
      <NewIn
        title={"VASES"}
        text={textKitchen}
        sectionClass={"section-1"}
        bodyClass={"kitchen"}
        imgClass={"imagen-kitchen"}
        imgSrc={Jarron}
        imgLeft={true}
      />
      <NewIn
        title={"TEXTILES"}
        text={textKids}
        sectionClass={"section-2"}
        bodyClass={"kids"}
        imgClass={"imagen-kitchen"}
        imgSrc={Textile}
        imgLeft={false}
      />
      <Featured productos={productos} />
    </div>
  );
};

export default Home;
