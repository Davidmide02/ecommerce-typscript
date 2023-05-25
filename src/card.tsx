import { AiOutlinePlus,} from "react-icons/ai";
// import { AiOutlinePlus,} from "react-icons/ai";
import { GrFormSubtract} from "react-icons/gr";
// import shoe from './assets/fabian-heimann-4R_WEmhx8og-unsplash.jpg'

function Card() {

    return(
        <div className=" border-b-4 border-gray-500 flex justify-between p-2 bg-green-500">
            <div className="img-btns bg-green-500 flex p-2 gap-5">
                <img src='./src/assets/fabian-heimann-4R_WEmhx8og-unsplash.jpg' alt="img" className="w-[40%] rounded-md" />
                <div className="text-btns flex flex-col justify-between">
                    <div className="text">
                        <h4>Tile</h4>
                        <p>color</p>
                    </div>
                    <div className="btns">
                        <button className="p-4 bg-green-400 mr-2"><AiOutlinePlus/></button>
                        <button className="p-4 bg-red-500"><GrFormSubtract/></button>
                    </div>
                </div>
            </div>
            <div className="price flex flex-col justify-between">
                <p>NGN amount</p>
                <button>Remove</button>
            </div>
        </div>
    )
    
}
export default Card;