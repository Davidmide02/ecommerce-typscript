import React, { ReactElement, useState } from "react";
import "./App.css";
import Card from "./card";
import Header from "./header";
import Orders from "./orders";
import shoe from "./assets/product1.jpg";
import shoe2 from "./assets/product2.jpg";
import shoe3 from "./assets/product3.jpg";
import shoe4 from "./assets/product4.jpg";

export type dbProps = {
  productName: string;
  color: string;
  imgSrc: string;
  amount: number;
  quanty: number;
  id: number;
  // card?: React.ReactElement;
};
const db: dbProps[] = [
  {
    productName: "bip",
    color: "white",
    imgSrc: shoe,
    amount: 200,
    quanty: 0,
    id: 0,
  },
  {
    productName: "bid",
    color: "white",
    imgSrc: shoe2,
    amount: 300,
    quanty: 0,
    id: 1,
  },
  {
    productName: "bic",
    color: "white",
    imgSrc: shoe3,
    amount: 200,
    quanty: 0,
    id: 2,
  },
  {
    productName: "biv",
    color: "white",
    imgSrc: shoe4,
    amount: 500,
    quanty: 0,
    id: 3,
  },
  // {
  //   productName: "bix",
  //   color: "white",
  //   imgSrc: "./image.come",
  // },
  // {
  //   productName: "biy",
  //   color: "white",
  //   imgSrc: "./src/assets/fabian-heimann-4R_WEmhx8og-unsplash.jpg",
  // },
];

function App() {
  let [cartItems, setCartItems] = useState(db);

  const handleTotal = (items: dbProps[]) => null;

  // const handleAdd = (clickedItem:dbProps) => {

  // }
  function handleAdd(id: number) {
    cartItems.map((cartItem) =>
      cartItem.id === id
        ? { ...cartItem, quanty: cartItem.quanty + 1 }
        : console.log(cartItem.id, id)
    );
    console.log(id);
  }
  return (
    <div className="p-4">
      <Header />
      <main className="border-2 border-gray-500 mt-5 md:flex justify-between gap p-4 w-full">
        <div className="card-con">
          {cartItems.map((item) => {
            return (
              <Card
                key={item.id}
                cartItems={cartItems}
                setCartItems={setCartItems}
                handleTotal={handleTotal}
                productName={item.productName}
                color={item.color}
                quanty={item.quanty}
                amount={item.amount}
                id={item.id}
                imgSrc={item.imgSrc}
                handleAdd={handleAdd}
              />
            );
          })}
        </div>

        <Orders total={4} />
        {/* <h1></h1> */}
      </main>
    </div>
  );
}

export default App;
