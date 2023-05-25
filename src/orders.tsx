import { GrCart } from "react-icons/gr";

function Orders() {
  return (
    <div className="con">
      <h2>Order Sumary</h2>
      <p>Subtotal:</p>
      <p>Shipping extimate</p>
      <p>Tax extimate</p>
      <h4>Total:</h4>
      <button>
        Checkout <GrCart />
      </button>
    </div>
  );
}

export default Orders;
