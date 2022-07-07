import React from "react";
import ItemList from "../../components/Items/ItemList";
import Payment from "../../components/Payment/Payment";


const Home = ({ greeting, onAdd }) => {
  return (
    <main className="home">
      <div className="home__title">
        <h1>{greeting}</h1>
      </div>
      
      <Payment />
      <ItemList onAdd={onAdd} />
    </main>
  );
};

export default Home;