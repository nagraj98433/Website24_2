import React from "react";
import '../../All_Styles/Get_in_touch.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';
import Orange_Banner from '../../assets/Images/Orange_Banner.png'
import doctors_img4 from '../../assets/Images/doctors_img4.png'

// Add the desired icons to the library
library.add(fas);


const Get_in_touch = () => {
  return (
    <>
      <div className="mt-4">
        <div className="image_container_get_in_touch">
          <img src={Orange_Banner} alt="orange_bg" />
          <div class="overlay_get_in_touch">
          <img src={doctors_img4} alt="doctor3_img" />
          </div>

          <div class="overlay_get_in_touch_content">
          <div className="get_in_touch_heading">Get in Touch</div>
          <div className="get_in_touch_description">Give us a call today to schedule a free in-home assessment and learn more about how we can help you or your loved one.</div>
          <div className="get_in_touch_btn_section"><button type="button" class="btn btn-primary">Call us now</button></div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Get_in_touch