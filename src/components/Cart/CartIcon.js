import React, { useEffect, useContext } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from "../../context/CartContext";
import Badge from '@mui/material/Badge';


const CartIcon = () => {
  const { cart, qnt, setQnt } = useContext(CartContext);

  useEffect(() => {
    if (cart.length === 0) {
      setQnt(0);
    }
  }, [cart, setQnt]);

  return (
    <Badge badgeContent={qnt} color="secondary">
      <ShoppingCartIcon fontSize="large" />
    </Badge>
  );
};

export default CartIcon;