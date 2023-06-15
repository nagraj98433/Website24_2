import React from "react";
import '../../All_Styles/AboutUS.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';
// import why_choose from '../../assets/Images/why_choose.png'
// import Why_choose2 from '../../assets/Images/Why_choose2.png'
import care4 from '../../assets/Images/care4.png'
import About_us1 from '../../assets/Images/About_us1.png'
import About_us2 from '../../assets/Images/About_us2.png'
import About_us3 from '../../assets/Images/About_us3.png'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faShieldCat } from '@fortawesome/free-solid-svg-icons';


// Add the desired icons to the library
library.add(fas);



const AboutUS = () => {
  return (
    <>
      <div className="Max_width80 MTA">

        <div className="aboutUs_caregiver_container">
          <div className="caregiver_aboutUs_container">
            <div className="aboutUs_content">
              About Us
            </div>
            <div className="aboutUs_discription">
              We at care24 understand the struggles one faces post-surgery or in chronic pain? That is why we are here to help you and your loved ones facing difficulty in going about their daily routines. The elderly of the house need constant attention and care post-surgery or during the recuperating period. You cannot stay by their side every day, and there is nowhere else they would rather be than in the comforts of their home.
            </div>

            <div className="aboutUs_discription1 mt-2">Care24 answers your distress call. A brainchild of IIT alumni Vipin Pathak, and Garima Tripathi, Care24, offers professional care from trained caregivers that help the patient recuperate at home. Care24 has been in operation since 2014 and has successfully helped 60000+ families heal at home in Mumbai and Delhi.</div>
          </div>
          <div className="aboutUs_caregiver_overlay_container">

            <div className="image_container_aboutUs">
             <div className="aboutUS_img"> <img src={care4} alt="care4" /></div>
              <div className="overlay_aboutUs1">
             <div>
              <div><span className="AboutUs_icon"><FontAwesomeIcon icon={faCheckCircle} /></span> <span className="AboutUs_years">06yrs</span></div>
             <div className="AboutUs_Exp">Experience</div>
             </div>
              </div>


              <div className="overlay_aboutUs2">
             <div>
              <div><span className="AboutUs_icon2">  <FontAwesomeIcon icon={faShieldCat} />  </span> <span className="AboutUs_years2">200+</span></div>
             <div className="AboutUs_Exp2">Strong team</div>
             </div>
              </div>

              <div className="overlay_aboutUs3">
             <div>
              <div className=""><span className="AboutUs_icon3"> <FontAwesomeIcon icon={faMapMarkerAlt} /></span> <span className="AboutUs_years3">09</span></div>
             <div className="AboutUs_Exp3">City Presence</div>
             </div>
              </div>

            </div>

           


          </div>
        </div>

      </div>
    </>
  )
}

export default AboutUS