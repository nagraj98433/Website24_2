import React from "react";
import '../../All_Styles/How_to_varify_caregiver.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';
// import why_choose from '../../assets/Images/why_choose.png'
// import Why_choose2 from '../../assets/Images/Why_choose2.png'
import doctor_img from '../../assets/Images/doctor_img.png'
import verify1 from '../../assets/Images/verify1.png'
import verify2 from '../../assets/Images/verify2.png'
import verify3 from '../../assets/Images/verify3.png'


// Add the desired icons to the library
library.add(fas);


const How_to_varify_caregiver = () => {
  return (
    <>
      <div className="Max_width80 mt-4">

        <div className="verify_caregiver_container">
          <div className="caregiver_verify_container">
            <div className="verify_content">
              How to verify Caregiver services?
            </div>
            <div className="verify_discription">
              We understand that the safety and security of your loved one is of the utmost importance. That's why we have a rigorous vetting process for all of our caregiver service providers. We conduct background checks, interviews, and reference checks to ensure that only the best professionals are part of our team.
            </div>
          </div>
          <div className="verify_caregiver_overlay_container">

            <div className="image_container_verify">
              <img src={doctor_img} alt="Example Image" />
              <div className="overlay_verify">
               <img src={verify1} alt="verify1" />
              </div>

              <div className="overlay_verify2">
               <img src={verify2} alt="verify2" />
              </div>

              <div className="overlay_verify3">
               <img src={verify3} alt="verify3" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default How_to_varify_caregiver