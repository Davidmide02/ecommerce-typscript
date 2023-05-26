import { useState } from "react";
import "./App.css";
import Card from "./card";
import Header from "./header";
import Orders from "./orders";

function App() {
  let [total, setTotal] = useState(0);

  return (
    <>
      <div className="">
        {/* <h1>Hello Ecommerce</h1> */}
        <Header />
        <main className="border-2 border-gray-500 mt-5 md:flex justify-center p-4">
          <div className="">
            <Card productName="Nike watch" color="white" setTotal={setTotal} />
            <Card productName="Puma watch" color="green" setTotal={setTotal} />
            <Card productName="Conu watch" color="lilac" setTotal={setTotal} />
            <Card productName="Apir watch" color="yellow" setTotal={setTotal} />
            <Card productName="Apple watch" color="black" setTotal={setTotal} />
          </div>

          <Orders total={total} />
          <h1>{total}</h1>
        </main>
      </div>
    </>
  );
}

export default App;
