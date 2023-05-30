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
  // card?: React.ReactElement;
};
const db: dbProps[] = [
  {
    productName: "bip",
    color: "white",
    imgSrc: shoe,
    amount: 200,
  },
  {
    productName: "bid",
    color: "white",
    imgSrc: shoe2,
    amount: 300,
  },
  {
    productName: "bic",
    color: "white",
    imgSrc: shoe3,
    amount: 200,
  },
  {
    productName: "biv",
    color: "white",
    imgSrc: shoe4,
    amount: 500,
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
  // let [total, setTotal] = useState(0);
  // const handleTotal = (value: number) => {
  //   const amountn = total + value;
  //   setTotal(value);
  //   // console.log(amountn + " amount");
  //   console.log(total + " total");
  //   // console.log("hello here");
  // };

  // const totalAmount = db.reduce
  // db.reduce ((ack=0, {amount}) => { a})

  return (
    <div className="p-4">
      <Header />
      <main className="border-2 border-gray-500 mt-5 md:flex justify-between gap p-4 w-full">
        <div className="card-con">
          {db.map((item) => {
            return (
              <Card
                productName={item.productName}
                color={item.color}
                imgSrc={item.imgSrc}
                amount={item.amount}
              />
            );
          })}
        </div>

        <Orders total={4} />
        {/* <h1>hello</h1> */}
      </main>
    </div>
  );
}

export default App;
