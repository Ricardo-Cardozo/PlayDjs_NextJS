import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const BtnSlider = ({direction, moveLeft, moveRight}) => {
  
  return (
    <div>
      <button className="btn_slide_left" onClick={moveLeft}>
        <AiOutlineLeft className="img"/>
      </button>
      <br />
      <button className="btn_slide_right" onClick={moveRight}>
        <AiOutlineRight className="img"/>
      </button>
    </div>
  )
}

export default BtnSlider