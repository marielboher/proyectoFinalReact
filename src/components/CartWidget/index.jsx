import React, { useContext } from 'react'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import './cartWidget.css'
import { CartContext } from '../../contexts/CartContext';

const CartWidget = () => {
  const { cartProducts, getTotalQuantity } = useContext(CartContext);
  return (
    <div>
        <LocalMallIcon  className='icon'/>
        <p className='cantidad-productos'>{getTotalQuantity(cartProducts)}</p>
    </div>
  )
}

export default CartWidget;