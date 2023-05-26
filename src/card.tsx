import { AiOutlinePlus } from "react-icons/ai";
// import { AiOutlinePlus,} from "react-icons/ai";
import { GrFormSubtract } from "react-icons/gr";
import { useState } from "react";
// import shoe from './assets/fabian-heimann-4R_WEmhx8og-unsplash.jpg'

type cardProps = {
  productName: string;
  color: string;
  setTotal:React.Dispatch<React.SetStateAction<number>>;
};

function Card({ productName, color, setTotal}: cardProps) {
  let [price, setPrice] = useState(0);
  let [quantity, setQuantity] = useState(0);
  let [disactive, setDisactive] = useState(false);

  function handleSubtract(): void {
    if (price > 0) {
      let subPrice = price - 5500;
      setPrice(subPrice);
      setQuantity(quantity - 1);
      console.log(price);
      console.log(quantity);
      setTotal(price);
      
    } else {
      console.log("disactive button");
      setQuantity(0);
      setDisactive(true);
      // setTotal(price)
    }
  }
  function handleAdd(): void {
    let addPrice = price + 5500;
    setQuantity(quantity + 1);
    setPrice(addPrice++);
    setTotal(price);
    console.log(price);
    setDisactive(false);
  }

  return (
    <div className=" border-b-4 border-gray-500 flex justify-between p-2 bg-green-500">
      <div className="img-btns bg-green-500 flex p-2 gap-5">
        <img
          src="./src/assets/fabian-heimann-4R_WEmhx8og-unsplash.jpg"
          alt="img"
          className="w-[40%] rounded-md"
        />
        <div className="text-btns flex flex-col justify-between">
          <div className="text">
            <h2 className=" font-extrabold text-xl">Tile: {productName}</h2>
            <p>color: {color}</p>
          </div>
          <div className="btns">
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
        <button>Remove</button>
      </div>
    </div>
  );
}
export default Card;
