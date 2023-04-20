import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import "./cart.css";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import Form from "../Checkout/form";
import Swal from "sweetalert2";

const Cart = () => {
  const {
    cartProducts,
    addProduct,
    decrease,
    handleDelete,
    getTotalQuantity,
    getTotalPrice,
    clear,
  } = useContext(CartContext);

  const [buyerData, setBuyerData] = useState({
    name: "",
    adress: "",
    phone: "",
    email: "",
    confirmEmail: "",
  });

  const handleSubmit = (data) => {
    setBuyerData(data);
    getOrder();
  };

  const [orderId, setOrderId] = useState("");

  const order = {
    buyer: buyerData && {
      name: buyerData.name || "",
      email: buyerData.email || "",
      phone: buyerData.phone || "",
      adress: buyerData.adress || "",
    },
    items: cartProducts.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
    })),
  };

  const messageOrder = (orderId) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Successful! order number: ${orderId} -  Date: ${dateStr}`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handlePurchase = () => {
    clear();
  };

  const orderDate = new Date();
  const dateStr = orderDate.toLocaleDateString();

  const orderWithDate = {
    ...order,
    date: dateStr,
  };

  const getOrder = () => {
    if (
      buyerData.name &&
      buyerData.email &&
      buyerData.phone &&
      buyerData.adress &&
      cartProducts.length > 0
    ) {
      const db = getFirestore();
      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, orderWithDate).then(({ id }) => {
        setOrderId(id);
        console.log(id);
        messageOrder(id);
        clear();
      });
      console.log(order);
    }
  };

  return (
    <div className="container-cart">
      <div className="marco-cart">
        {cartProducts && cartProducts.length > 0 ? (
          cartProducts.map((product) => (
            <div className="cart-items" key={product.id}>
              <div className="imagen-cart">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="producto">
                <p>{product.title}</p>
              </div>
              <div className="cantidad">
                <p className="counter" onClick={() => decrease(product)}>
                  -
                </p>
                <p>{product.quantity}</p>
                <p className="counter" onClick={() => addProduct(product)}>
                  +
                </p>
              </div>
              <div className="precio">
                <p>$ {product.price * product.quantity}</p>
              </div>
              <div className="cancelar">
                <button onClick={() => handleDelete(product.id)}>
                  <DeleteIcon className="btn-delete" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-products">There are no products in the cart.</p>
        )}
        <div className="total-cant">
          <p>quantity of products: {getTotalQuantity(cartProducts)}</p>
        </div>
        <div className="total-price">
          <p>total price: ${getTotalPrice(cartProducts)}</p>
        </div>
        <div className="vaciar-carrito">
          <button className="button-modal" onClick={() => clear()}>
            Delete all
          </button>
        </div>
      </div>
      <div className="button-container">
        <p>You must first complete the form to finalize the order</p>
        <button
          type="button"
          className="button-modal"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          disabled={cartProducts.length === 0}
        >
          Complete form
        </button>
      </div>
      <div
        className="modal modal-personalizado"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body login">
              <Form
                onSubmit={handleSubmit}
                buyerData={buyerData}
                setBuyerData={setBuyerData}
                onPurchase={handlePurchase}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
