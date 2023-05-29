import React from "react";
import '../../All_Styles/Our_Services.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';
import attendant from '../../assets/Images/attendant.png'
import physiotherapy from '../../assets/Images/physiotherapy.png'
import Nursing from '../../assets/Images/Nursing.png'
import elder_care from '../../assets/Images/elder_care.png'
import Service_bg from '../../assets/Images/Service_bg.png'







// Add the desired icons to the library
library.add(fas);


const Our_Services = () => {
  return (
    <>
      <div className="Max_width80 mt-4">
        <div className="ps-5">
        <div className="our_services">Our Services</div>
        <div className="services_discription mt-4">At Care24, we provide personalized home care services tailored to meet the unique needs of each client. Our experienced caregivers are carefully selected, screened, and trained to ensure high-quality care. We offer flexible scheduling options and strive to make the process of inviting a caregiver into your home as easy as possible.</div>
        </div>

        <div class="grid-container_our_services">
          <div class="grid-item_our_services">

            <div class="image_container_our_services">
              <img src={Service_bg} alt="Service_bg" />

              <div class="overlay_our_services_icon">
                <img src={attendant} alt="attendant_icon" />
              </div>
              <div class="overlay_our_services">
               <div className="our_services_heading">Attendant Services</div>
               <div className="our_services_description">Our attendants are certified caregivers highly experienced in various nursing care specializations</div>
              </div>
            </div>


          </div>
          <div class="grid-item_our_services">
          <div class="image_container_our_services">
              <img src={Service_bg} alt="Service_bg" />

              <div class="overlay_our_services_icon">
                <img src={physiotherapy} alt="attendant_icon" />
              </div>
              <div class="overlay_our_services">
               <div className="our_services_heading">Physiotherapy</div>
               <div className="our_services_description2">Our physiotherapists are experienced in providing complete range of physiotherapy services</div>
              </div>
            </div>
          </div>
          <div class="grid-item_our_services">
          <div class="image_container_our_services">
              <img src={Service_bg} alt="Service_bg" />

              <div class="overlay_our_services_icon">
                <img src={Nursing} alt="attendant_icon" />
              </div>
              <div class="overlay_our_services">
               <div className="our_services_heading">Nursing Service</div>
               <div className="our_services_description3">Our nurses are experienced in providing a complete range of nursing care specializations.</div>
              </div>
            </div>
          </div>
          <div class="grid-item_our_services">
          <div class="image_container_our_services">
              <img src={Service_bg} alt="Service_bg" />

              <div class="overlay_our_services_icon">
                <img src={elder_care} alt="attendant_icon" />
              </div>
              <div class="overlay_our_services">
               <div className="our_services_heading">Elder Care</div>
               <div className="our_services_description4">Care24's qualified clinical staff specialize in providing round-the -clock elder care services</div>
              </div>
            </div>
          </div>

        </div>


      </div>
    </>
  )
}

export default Our_Services