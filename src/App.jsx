import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart";
import Register from "./components/Register";
import Login from "./components/Login";
import User from "./components/User";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container-app">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route
          path="/category/:categoryName"
          element={
            <ProtectedRoute>
              <ItemListContainer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <ItemListContainer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
