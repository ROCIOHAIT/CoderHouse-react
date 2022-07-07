import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../../components/Items/ItemCount";
import CartContext from "../../context/CartContext";
import { getFirestore } from "firebase/firestore";



const ItemDetailPage = ({ onAdd }) => {
  const { setCart, setQnt } = useContext(CartContext);
  const [article, setArticle] = useState();
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    let isSubscribed = true;
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const item = itemCollection.doc(id);

    item
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("Item does not exist!");
          return;
        }
        if (isSubscribed) {
          console.log("Item found!");
          setProduct({ id: doc.id, ...doc.data() });
        }
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {
        
      });

    return () => (isSubscribed = false);
  }, [id]);

  useEffect(() => {
    setArticle(product);
  }, [product]);

  const [quantity, setQuantity] = useState(1);

  const handleClick = () => {
    setQnt((value) => value + quantity);
    article.quantity = quantity;

    const prod = {
      id: article.id,
      title: article.title,
      stock: article.stock,
      price: article.price,
      image: article.image,
    };

    setCart((value) => [...value, prod]);
  };

  return (
    <div className="itemPage">
      
        <div className="container itemPage__detail">
          <div className="row">
            {/* IMAGE */}
            <div className="col-sm-12 col-md-8 itemPage__detail-image">
              <div>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt="Imagen de Producto"
                />
              </div>
            </div>
            {/* BUY */}
            <div className="col-sm-12 col-md-4 itemPage__detail-buy">
              <div>
                <div className="counter item itemPage__detail-buy-sale">
                  <div className="">
                    <h3 className="card-title">{product.title}</h3>
                    
                    <h3>${product.price}</h3>
                    <h6>Stock: {product.stock}</h6>
                  </div>
                  <div className="itemPage__detail-buy-sale-buttons">
                    <ItemCount
                      initial={1}
                      min={0}
                      max={product.stock}
                      onAdd={onAdd}
                      setQuantity={setQuantity}
                    />
                    <div className="counter btn-buy" style={{ width: "15rem" }}>
                      <div className="counter__buttonAdd">
                        <button onClick={handleClick}>
                          Agregar al carrito {quantity}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      
    </div>
  )
};

export default ItemDetailPage;