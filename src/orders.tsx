import { GrCart } from "react-icons/gr";

function Orders() {
  return (
    <div className="con w-[30%] bg-blue-500 rounded-xl flex flex-col gap-2 p-8 text-white h-[50%]">
      <h2 className=" text-xl py-4">Order Sumary</h2>
      <p className="py-4 border-b-2 border-green-500">Subtotal:</p>
      <p className="py-4 border-b-2 border-green-500">Shipping extimate</p>
      <p className="py-4 border-b-2 border-green-500">Tax extimate</p>
      <h4 className=" text-2xl font-bold">Total:</h4>
      <button className="bg-blue-300 rounded-lg flex justify-center items-center gap-2 py-2 px-4 text-lg font-bold">
        Checkout <GrCart />
      </button>
    </div>
  );
}

export default Orders;