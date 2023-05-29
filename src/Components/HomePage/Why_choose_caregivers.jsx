import React from "react";
import '../../All_Styles/Why_choose_caregivers.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';
// import why_choose from '../../assets/Images/why_choose.png'
// import Why_choose2 from '../../assets/Images/Why_choose2.png'

// Add the desired icons to the library
library.add(fas);


const Why_choose_caregivers = () => {
  return (
    <>
      <div className="Max_width80 mt-4">
      <div className="Why_choose_caregivers__content_container">
        <div className="Why_choose_caregivers__content_heading">
        Why Choose Our Caregiver Services?
        </div>
        <div className="Why_choose_caregivers__Description mt-2">
        Our caregiver services are provided by highly trained and experienced professionals who are passionate about what they do. We understand that every individual has unique needs and we work closely with you to ensure that those needs are met with compassion and expertise.
        </div>
      </div>

      <div className="Why_choose_caregivers__content_container2">
        <div className="Why_choose_caregivers__content_heading2">
        How much does it cost?
        </div>
        <div className="Why_choose_caregivers__Description2 mt-2">
        Our caregiver services are priced competitively to ensure that you receive the best value for your investment. We offer a range of packages and options to meet your specific needs and budget. Contact us today to discuss pricing options.
        </div>
      </div>
      </div>
    </>
  )
}

export default Why_choose_caregivers