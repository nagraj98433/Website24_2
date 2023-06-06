import React from "react";
import '../../All_Styles/Best_Caregivers_Services.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';
import care3 from '../../assets/Images/care3.png'

// Add the desired icons to the library
library.add(fas);


const Best_Caregivers_Services = () => {
  return (
    <>
      <div className="Max_width80 mt_top_bestC">

        <div className="container-fluid">
          <div className="row">
            <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 stack_on_xm">
              <div className="Best_caregiver_container">
                <div className="Best_care">Best Caregiver Services in <br /><span className="Best_care_part">Powai, Mumbai</span></div>
                <div className="caregiver_description">At Care24, we understand that finding quality caregiver services can be a difficult and stressful process. That's why we are committed to providing the best caregiver services in Powai, Mumbai to ensure your loved one receives the highest level of care possible.
                </div>
              </div>
            </div>
            <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6">

              <div className="Best_caregiver_img_container">
                <img src={care3} alt="care3_img" />
              </div>

            </div>
          </div>
        </div>









      </div>
    </>
  )
}

export default Best_Caregivers_Services