import React,{useState} from "react";
import '../../All_Styles/Checking.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import care1_overlay from '../../assets/Images/care1_overlay.png'
import BannerSection_img from '../../assets/Images/BannerSection_img.png'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


// Add the desired icons to the library
library.add(fas);


const Checking = () => {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };



  return (
    <>
      <div className="Max_width80 mt-4">

      <div className={`color-box ${isClicked ? 'active' : ''}`} onClick={handleClick}>
      Click me
    </div>

    <div>
      <a href="tel:08069048806">Phone dailar pad</a>
    </div>

      </div>
    </>
  )
}

export default Checking