import React, { useState } from "react";
import '../../All_Styles/Checking.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import care1_overlay from '../../assets/Images/care1_overlay.png'
import BannerSection_img from '../../assets/Images/BannerSection_img.png'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



// Add the desired icons to the library
library.add(fas);


const Checking = () => {

 
  const handleButtonClick = () => {
    toast.info('CLICK ON PHONE/ICON'); // Display a success toast
  };
  const handleButtonClick2 = () => {
    toast.info('FILL THE FORM'); // Display a success toast
  };


  return (
    <>
      <div className="Max_width80 mt-4">

      <ToastContainer />
     

      <button onClick={handleButtonClick}>Show Toast</button>
      <button onClick={handleButtonClick2}>Fill the form</button>
      </div>
    </>
  )
}

export default Checking