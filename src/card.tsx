import { AiOutlinePlus } from "react-icons/ai";
// import { AiOutlinePlus,} from "react-icons/ai";
import { GrFormSubtract } from "react-icons/gr";



type cardProps = {
  productName: string;
  color: string;
  imgSrc: string;
  amount: number;
  quantity: number;
  id: number;
  handleAdd: (value: number) => void;
  handleSubtract: (value: number) => void;
  handleRemove: (value: number) => void;
};
function Card({
  productName,
  imgSrc,
  id,
  amount,
  color,
  quantity,
  handleAdd,
  handleSubtract,
  handleRemove,
}: cardProps) {
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
            <p>price: NGN{amount}</p>
          </div>
          <div className="btns flex gap-2 justify-between ">
            <button
              className="p-4 bg-green-400 mr-2"
              onClick={() => {
                handleAdd(id);
              }}
            >
              <AiOutlinePlus />
            </button>
            <p>QTY {quantity} </p>
            {quantity > 0 && (
              <button
                className="p-4 bg-red-500"
                onClick={() => {
                  handleSubtract(id);
                }}
              >
                <GrFormSubtract />
              </button>
            )}
            {quantity <= 0 && (
              <button
                className="p-4 bg-red-300"
                onClick={() => {
                  handleSubtract(id);
                }}
                disabled
              >
                <GrFormSubtract />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="price flex flex-col justify-between">
        <p>NGN amount: {amount * quantity}</p>
        {/* <p>new p {amount}</p> */}
        <button
          onClick={() => {
            handleRemove(id);
          }}
          className="text-blue-500 font-semibold hover:bg-gray-400 hover:text-white"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
export default Card;
