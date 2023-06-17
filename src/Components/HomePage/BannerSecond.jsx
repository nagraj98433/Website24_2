import React from "react";
import '../../All_Styles/BannerSecond.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';
import Blue_Banner from '../../assets/Images/Blue_Banner.png'
import doctor_img3 from '../../assets/Images/doctor_img3.png'
import { Link, animateScroll as scroll } from "react-scroll";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Add the desired icons to the library
library.add(fas);


const BannerSecond = () => {


  // Scrolling effect start

  const scrollToTop = () => {
    scroll.scrollToTop();
    PhoneCall()

  };

  
  // Scrolling effect end

  // Toas start
  const PhoneCall = () => {
    toast.info('CLICK ON PHONE/ICON ABOVE'); // Display a success toast
  };

  // Toas end





  return (
    <>

      <div className="MTSB D_none_on_xm1">
        <div className="image_container_second_banner">
          <img src={Blue_Banner} alt="Example Image" />
          <div className="overlay_Banner_second">
            <img src={doctor_img3} alt="doctor3_img" />
          </div>

          <div className="overlay_Banner_second_content">
            <div className="Banner_second_heading">Not sure how to go ahead?</div>
            <div className="Banner_second_description">Give us a call and we'll guide you through the process of selecting the best caregiver for your loved ones.</div>
            <div className="Banner_second_btn_section mt-4"><button type="button" className="btn btn-primary" onClick={scrollToTop}>Call us now</button></div>
          </div>
        </div>

      </div>
    </>
  )
}

export default BannerSecond