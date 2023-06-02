import React, { useEffect, useState } from "react";
import '../../All_Styles/Profile_cards.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import caregiver_img from '../../assets/Images/caregiver_img.png'
import Blue_Banner from '../../assets/Images/Blue_Banner.png'
import doctor_img3 from '../../assets/Images/doctor_img3.png'


import 'bootstrap/dist/css/bootstrap.css';

// Add the desired icons to the library
library.add(fas);


const Profile_cards = (props) => {

  return (
    <>
      <div className="grid-item desktop_block">
                <div className="card mb-3" style={{maxWidth:'384px'}}>
                  <div className="row g-0">
                    <div className="col-md-4">
                     <div className="bg_color">
                     <img src={props.profile_pc} className="img-fluid rounded-start" alt="caregiver_img" />
                     </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                      <div className="card_details_container">
                    <div className="name_rating_container d-flex justify-content-between">
                      <div className="name">{props.cg_name}</div>
                      <div className="ratinng_star"><span className="star_rating_icon"> <FontAwesomeIcon icon="star" /></span> 4.0</div>
                    </div>
                    <div className="identity_age mb-2">
                    Nurse, 29
                    </div>
                    <div className="education mb-2">
                    <span className="education_icon"> <FontAwesomeIcon icon={faGraduationCap} /></span> BS in Nursing (BSN)
                    </div>
                    <div className="experience mb-2"> <span className="experience_icon"> <FontAwesomeIcon icon={faShoppingBag} /></span> 3 years in clinical nursing </div>
                    <div className="enquire_btn_container text-start">
                    <button type="button" className="btn btn-primary enquire_btn w-100">Enquire Now</button>
                    </div>
                  </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>








              {/* For Mobile cards start start */}

              <div className="card CardStyle XS_Block mb-5">
                <div className='Flex_container'>
                  <div className='Img_container'>
                    <img src={props.profile_pc} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body p-0" style={{ maxWidth: '240px' }}>
                    <div className="card_details_container">
                    <div className="name_rating_container d-flex justify-content-between">
                      <div className="name">{props.cg_name}</div>
                      <div className="ratinng_star"><span className="star_rating_icon"> <FontAwesomeIcon icon="star" /></span> 4.0</div>
                    </div>
                    <div className="identity_age mb-2">
                    Nurse, 29
                    </div>
                    <div className="education mb-2">
                    <span className="education_icon"> <FontAwesomeIcon icon={faGraduationCap} /></span> BS in Nursing (BSN)
                    </div>
                    <div className="experience mb-2"> <span className="experience_icon"> <FontAwesomeIcon icon={faShoppingBag} /></span> 3 years in clinical nursing </div>
                    <div className="enquire_btn_container text-start">
                    <button type="button" className="btn btn-primary enquire_btn w-100">Enquire Now</button>
                    </div>
                  </div>
                    
                  </div>
                </div>
              </div>

              {/* For Mobile cards start start */}

    </>
  )
}

export default Profile_cards