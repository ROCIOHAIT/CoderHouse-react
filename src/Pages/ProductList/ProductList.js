import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/Items/ItemDetail";
import { getFirestore } from "firebase/firestore";



const Categories = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const itemsByCategory = itemCollection.where(
      "categoryId",
      "==",
      categoryId
    );

    itemsByCategory
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
  }, [categoryId]);

  return (
    <div className="categories">
      <h1>Categoría {categoryId}</h1>
      
        <div className="categories__list">
          {products.map((product) => {
            return <ItemDetail product={product} key={product.id} />;
          })}
        </div>
      
    </div>
  );
};

export default Categories;