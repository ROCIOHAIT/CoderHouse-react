import React, { useState, useEffect } from "react";
import ItemDetailContainer from "../Items/ItemDetailContainer";
import { getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";


const ItemList = ({ onAdd }) => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    
    const db = getFirestore();
    const itemCollection = db.collection("items");

    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No results!");
        }
        setProducts(
          querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {
        
      });
    
  }, []);

  return (
    <div className="list-container" id="list-container">
      
        <div className="list-container__details">
          <div className="list-container__details-categories">
            <h2>Categorías</h2>
            <Link to="/categories/mesas">mesas</Link>
            <Link to="/categories/sillas">sillas</Link>
            <Link to="/categories/velas">Velas</Link>
            <Link to="/categories/bandejas">bandejas</Link>
          </div>
          <div className="list-container__details-title">
            <h3>Productos</h3>
          </div>
          <div className="list-container__list">
            {products.map((product) => {
              return (
                <ItemDetailContainer
                  key={product.id}
                  product={product}
                  onAdd={onAdd}
                />
              );
            })}
          </div>
        </div>
      
    </div>)
  
};

export default ItemList;