import "./App.css";
import Card from "./card";
import Header from "./header";
import Orders from "./orders";

function App() {
  return (
    <>
      <div className="">
        {/* <h1>Hello Ecommerce</h1> */}
        <Header />
        <main className="border-2 border-gray-500 mt-5">
          <Card />
          <Orders />
        </main>
      </div>
    </>
  );
}

export default App;
