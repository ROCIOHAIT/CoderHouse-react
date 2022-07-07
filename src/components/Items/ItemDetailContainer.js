import React, { useState, useEffect } from "react";
import ItemDetail from "../Items/ItemDetail";


const ItemDetailContainer = ({ product, onAdd }) => {
  const [article, setArticle] = useState();
  

  const getProduct = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(product);
      }, 1000);
    });
  };

  useEffect(() => {
    let isSubscribed = true;
    getProduct()
      .then((data) => {
        if (isSubscribed) {
          setArticle(data);
          
        }
      })
      .catch(() => console.log("rejected"));

    return () => (isSubscribed = false);
    
  }, []);

  
};

export default ItemDetailContainer;