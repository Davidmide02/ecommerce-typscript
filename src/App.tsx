import { useState } from "react";
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
  quantity: number;
  id: number;
};
const db: dbProps[] = [
  {
    productName: "bip",
    color: "white",
    imgSrc: shoe,
    amount: 200,
    quantity: 0,
    id: 0,
  },
  {
    productName: "bid",
    color: "white",
    imgSrc: shoe2,
    amount: 300,
    quantity: 0,
    id: 1,
  },
  {
    productName: "bic",
    color: "white",
    imgSrc: shoe3,
    amount: 200,
    quantity: 0,
    id: 2,
  },
  {
    productName: "biv",
    color: "white",
    imgSrc: shoe4,
    amount: 500,
    quantity: 0,
    id: 3,
  },
];

function App() {
  let [cartItems, setCartItems] = useState(db);

  // add item to card and increase item quantity
  function handleAdd(id: number) {
    const increaseQuantity = cartItems.map((cartItem) =>
      cartItem.id === id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCartItems(increaseQuantity);
  }
  // decrease quantity of item
  function handleSubtract(id: number) {
    const decreaseQuantity = cartItems.map((cartItem) =>
      cartItem.id === id && cartItem.quantity > 0
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    setCartItems(decreaseQuantity);
  }

  const handleRemove = (id: number) => {
    const reducedArr = cartItems.filter((cartItem) => cartItem.id !== id);
    setCartItems(reducedArr);
  };
  // get total prices
  let totalPrice = 0;
  const getTotal = (items: dbProps[]): number => {
    const total = items.reduce(
      (ack: number, item) => ack + item.quantity * item.amount,
      0
    );
    totalPrice = total;
    return total;
  };
  getTotal(cartItems);

  return (
    <div className="p-4">
      <Header />
      <main className="border-2 border-gray-500 mt-5 md:flex justify-between gap p-4 w-full">
        <div className="card-con">
          {cartItems.map((item) => (
            <Card
              key={item.id}
              productName={item.productName}
              color={item.color}
              quantity={item.quantity}
              amount={item.amount}
              id={item.id}
              imgSrc={item.imgSrc}
              handleAdd={handleAdd}
              handleSubtract={handleSubtract}
              handleRemove={handleRemove}
            />
          ))}
        </div>

        <Orders total={totalPrice} />
      </main>
    </div>
  );
}

export default App;
