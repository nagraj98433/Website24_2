import React from "react";
import '../../All_Styles/FooterSection.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';
import Blue_Banner from '../../assets/Images/Blue_Banner.png'
import logo from '../../assets/Images/logo.png'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


// Add the desired icons to the library
library.add(fas);


const FooterSection = () => {
  return (
    <>
      <footer className="Footer_main_container">

        <div class="image_container_footer">
          <img src={Blue_Banner} alt="Footer_bg" />
          <div class="overlay_footer">


            <div className="Footer_container">
              <div className="footerLeft_section">
                <div className="log">
                  <img src={logo} alt="logo" />
                </div>
                <div className="footer_left_content1 mt-2">World Class Cares at Home</div>

                <div className="footer_left_content2">Now be stress-free. Care24 is here to take care of your loved ones.</div>

                <div className="my-4">
                  <div className="contact_us">Contact Us</div>

                  <div className="Number_email_section"><span>+91 8069048802</span> <span>support@care24.co.in</span></div>
                </div>

                <div className="Social_apps_icons"><button> <FontAwesomeIcon icon={faInstagram} /></button> <button><FontAwesomeIcon icon={faFacebook} /></button> <button><FontAwesomeIcon icon={faTwitter} /></button></div>
              </div>
              <div className="footerRight_section">

                <div class="grid-container_footer">
                  <div class="grid-item_footer">

                    <div className="footer_Right_content_container">
                      <div className="footer_Right_content_heading1">Company</div>
                      <div>About Us</div>
                      <div>Blogs</div>
                      <div>News</div>
                      <div>Careers</div>
                      <div>FAQs</div>
                    </div>

                  </div>
                  <div class="grid-item_footer">

                    <div className="footer_Right_content_container">
                      <div className="footer_Right_content_heading1">Our Services</div>
                      <div>Our Caregivers</div>
                      <div>Attendant Services</div>
                      <div>Nursing Services</div>
                      <div>Elderly Care</div>
                      <div>Doctor At Home</div>
                      <div>Physiotherapist</div>
                      <div>Rehabilitation at Home</div>
                    </div>

                  </div>
                  <div class="grid-item_footer">

                    <div className="footer_Right_content_container">
                      <div className="footer_Right_content_heading1">Location</div>
                      <div>Mumbai</div>
                      <div>Delhi</div>
                      <div>Bangalore</div>
                      <div>Chennai</div>
                      <div>Pune</div>
                      <div>Hyderabad</div>
                      <div>Kolkata</div>
                      <div>Ahmedabad</div>
                    </div>
                  </div>
                  <div class="grid-item_footer">

                    <div className="footer_Right_content_container">
                      <div className="footer_Right_content_heading1">Care for</div>
                      <div>Arthritis</div>
                      <div>Cancer</div>
                      <div>Dementia</div>
                      <div>Diabetes</div>
                      <div>Stroke</div>
                      <div>Alzheimer's disease</div>
                      <div>Cardiovascular disease</div>
                      <div>Traumatic brain injury</div>
                      <div>Parkinson's disease</div>
                    </div>
                  </div>
                  <div class="grid-item_footer">

                    <div className="footer_Right_content_container">
                      <div className="footer_Right_content_heading1">Helpful Links</div>
                      <div>Terms & Conditions</div>
                      <div>Privacy Policy</div>
                      <div>Payment Policy</div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            <hr className="footer_horizontal_line text-light" />
            <div className="d-flex justify-content-between">
              <div className="terms">Terms and conditions</div>
              <div className="rights_reserved">© 2023 Care24 Pvt Ltd. All rights reserved</div>
            </div>
          </div>



        </div>



      </footer>
    </>
  )
}

export default FooterSection