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
        <main className="border-2 border-gray-500 mt-5 md:flex justify-center p-4">
          <div className="">
            <Card productName="Nike watch" color="white" />
            <Card productName="Puma watch" color="green" />
            <Card productName="Conu watch" color="lilac" />
            <Card productName="Apir watch" color="yellow" />
            <Card productName="Apple watch" color="black" />
          </div>

          <Orders />
        </main>
      </div>
    </>
  );
}

export default App;
