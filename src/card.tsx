import { AiOutlinePlus,} from "react-icons/ai";
// import { AiOutlinePlus,} from "react-icons/ai";
import { GrFormSubtract} from "react-icons/gr";

function Card() {

    return(
        <div className=" border-b-4 border-gray-500">
            <div className="img-btns bg-green-500">
                <img src="" alt="img" />
                <div className="text-btns">
                    <div className="text">
                        <h4>Tile</h4>
                        <p>color</p>
                    </div>
                    <div className="btns">
                        <button><AiOutlinePlus/></button>
                        <button><GrFormSubtract/></button>
                    </div>
                </div>
            </div>
            <div className="price">
                <p>NGN amount</p>
                <button>Remove</button>
            </div>
        </div>
    )
    
}
export default Card;