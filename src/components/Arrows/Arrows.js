import { BsArrowDownUp } from 'react-icons/bs'
import { IconContext } from "react-icons";
import './arrows.css';

const Arrows = ({ handleOnClick }) => {

    return (
        <IconContext.Provider value={{ size: "20px", className: "global-class-name" }} >
            <div className='arrowDetails'>
                <BsArrowDownUp onClick={handleOnClick} />
            </div>
        </IconContext.Provider>

    )
}

export default Arrows;