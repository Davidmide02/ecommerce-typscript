import { AiOutlinePlus } from "react-icons/ai";
// import { AiOutlinePlus,} from "react-icons/ai";
import { GrFormSubtract } from "react-icons/gr";
import { useState } from "react";
import shoe from "./assets/product1.jpg";
import { dbProps } from "./App";

// type cardProps = {
//   productName: string;
//   color: string;
//   setTotal: React.Dispatch<React.SetStateAction<number>>;
//   handleTotal: (value: number) => void;
// };

// type cardProps = {
//   productName: string;
//   color: string;
//   amount: number;
//   brand: string;
//   imgSrc: string;
//   setTotal: React.Dispatch<React.SetStateAction<number>>;
// };

type cardProps = dbProps;
function Card({ imgSrc, productName, color, amount }: cardProps) {
  let [price, setPrice] = useState(0);
  let [quantity, setQuantity] = useState(0);
  let [disactive, setDisactive] = useState(false);

  function handleAdd(): void {
    let addPrice = price + amount;
    setQuantity(quantity + 1);
    // handleTotal(price);
    setPrice(addPrice);
    // setTotal(addPrice);

    console.log(addPrice + "this is add");

    // console.log(price);
    setDisactive(false);
  }

  function handleSubtract(): void {
    if (price > 0) {
      let subPrice = price - 5500;
      setPrice(subPrice);
      setQuantity(quantity - 1);
      console.log(subPrice);
      console.log(quantity);
      // setTotal(subPrice);
      // handleTotal(subPrice);
      console.log(subPrice + "this is sub");
    } else {
      console.log("disactive button");
      setQuantity(0);
      setDisactive(true);
    }
  }

  return (
    <div className="card border-b-2 border-gray-500 flex justify-between gap-2 p-2 mb-2 h-[12%] md:h-[24%]">
      <div className="img-btns flex gap-2 ">
        <img
          src={imgSrc}
          alt="img"
          className="rounded-md w-[25%] md:w-[35%] h-[100%]"
        />
        <div className="text-btns flex flex-col justify-between">
          <div className="text">
            <h2 className=" font-extrabold text-xl">Tile: {productName}</h2>
            <p>color: {color}</p>
          </div>
          <div className="btns flex gap-2 justify-between ">
            <button className="p-4 bg-green-400 mr-2" onClick={handleAdd}>
              <AiOutlinePlus />
            </button>
            <p>QTY {quantity} </p>
            {!disactive && (
              <button className="p-4 bg-red-500" onClick={handleSubtract}>
                <GrFormSubtract />
              </button>
            )}
            {disactive && (
              <button
                className="p-4 bg-red-200"
                onClick={handleSubtract}
                disabled
              >
                <GrFormSubtract />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="price flex flex-col justify-between">
        <p>NGN amount: {price}</p>
        <p>new p {amount}</p>
        <button>Remove</button>
      </div>
    </div>
  );
}
export default Card;
