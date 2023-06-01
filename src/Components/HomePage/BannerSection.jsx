import React from "react";
import '../../All_Styles/BannerSection.css'
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


const BannerSection = () => {
  return (
    <>
      <div className="Max_width80 mt-5">
        <div className="BannerSection_container">
          <div className="container">
            <div className="Content_container">
              <div className="rating_container">
                <div className="rating">
                  <span><FontAwesomeIcon icon={faThumbsUp} /></span> Rated <span className="fw-bold">4.5/5 </span> by 1,00,000+ customers
                </div>
              </div>

              <div className="get_reliable_container mt-4">
                <div className="get_reliable">
                  Get reliable and
                </div>
              </div>

              <div className="Quality_container">
                <div className="Quality">
                  Quality Healthcare
                </div>
              </div>

              <div className="doorstep_container">
                <div className="doorstep">
                  at your doorstep
                </div>
              </div>

              <div className="care_description_container">
                <div className="care_description">
                  Care24 is here to provide you with the <br /> best healthcare services in India.
                </div>
              </div>

              <div className="buttons_container">
                <button type="button" className="btn btn-primary me-3 px-4 py-3">Call us now</button>
                <button type="button" className="btn btn-success px-4 py-3">Request a callback</button>
              </div>

            </div>
            <div className="img_container">
              <div class="image_container_bannerSection">
                <img src={care1_overlay} alt="care1_img" />
                
                {/* <div class="overlay_bannerSection">
                 <img src={BannerSection_img} alt="bannerSection_img" />
                </div> */}

                <div class="overlay_bannerSection_content">
                 <div className="d-flex align-items-center">
                  <div className="banner_section_icon"><FontAwesomeIcon icon={faCheckCircle} /></div>
                  <div className="banner_section_hourN">24</div>
                  <div className="banner_section_hour me-2">hr</div>
                  <div className="banner_section_content">Booking of Professional Care Services</div>
                 </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BannerSection