import React, { useEffect, useState } from "react";
import '../../All_Styles/Search_Form.css'
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


const Search_Form = () => {

  // Form validation start
  const [index, setIndex] = useState(0);

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [formValidated, setFormValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setFormValidated(true);

  };




  const handleSlideChange = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === 2 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    handleSlideChange(index);
  }, [index]);

  // Form validation end





  // API Calling start

  const [cgsProfile, setCgsProfile] = useState([]);

  useEffect(() => {
    fetch('https://admin.care24.co.in/desertbox/api/getCGSProfile/?page=1', {
      method: 'GET',
      headers: {
        'Authorization': 'Token b22c4f7adc8ac8ea95138067bddb04b64358202c',
        'Cookie': 'csrftoken=s0ildCtQbbUhlXi5IKdYsSGJ2djUOuAXr8SrEAYheWul9tAd10YhSe78XV2DCHbz'
      }
    })
      .then(response => response.json())
      .then(data => setCgsProfile(data.data))
      .catch(error => console.error(error))
  }, []);

  cgsProfile.map((preval) => {
    console.log(preval)
  })


  // API Calling end






  return (
    <>
      <div className="Max_width80 mt-5">
        <div className="search_form_container">
          <div className="search_container">
            <div className="find_caregivers">
            Search for services around you
            </div>

            <div className="caregivers_filters_container d-flex">
              <div className="input-group">
                <span className="input-group-text border-0 left_location_icon" id="basic-addon1"> <FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                <input type="number" className="form-control location_input border-0 border-end" placeholder="Pin code" aria-label="Username" aria-describedby="basic-addon1" />
              </div>
              <div className="input-group ">
                <span className="input-group-text border-0 caregivers_search" id="basic-addon1">  <FontAwesomeIcon icon={faSearch} /></span>
                <input type="text" className="form-control caregivers_input border-0" placeholder="Caregivers" aria-label="Username" aria-describedby="basic-addon1" />
              </div>
              <div className="Submit_icon_container d-flex align-items-center">
                <button type="button" className="right_arrow_icon_search">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
            <div className="Headlines_container mt-5">
              <div className="Best_Arthritis">Best Arthritis Care Services in <span className="part_text fw-bold">Powai, Mumbai</span></div>
            </div>
            <div className="grid-container">
              <div className="grid-item">
                <div className="card mb-3" style={{maxWidth:'384px'}}>
                  <div className="row g-0">
                    <div className="col-md-4">
                     <div className="bg_color">
                     <img src={caregiver_img} className="img-fluid rounded-start" alt="caregiver_img" />
                     </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                      <div className="card_details_container">
                    <div className="name_rating_container d-flex justify-content-between">
                      <div className="name">Gurpreet Singh</div>
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

              <div className="grid-item">
                <div className="card mb-3" style={{maxWidth:'384px'}}>
                  <div className="row g-0">
                    <div className="col-md-4">
                     <div className="bg_color">
                     <img src={caregiver_img} className="img-fluid rounded-start" alt="caregiver_img" />
                     </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                      <div className="card_details_container">
                    <div className="name_rating_container d-flex justify-content-between">
                      <div className="name">Gurpreet Singh</div>
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

              <div className="grid-item">
                <div className="card mb-3" style={{maxWidth:'384px'}}>
                  <div className="row g-0">
                    <div className="col-md-4">
                     <div className="bg_color">
                     <img src={caregiver_img} className="img-fluid rounded-start" alt="caregiver_img" />
                     </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                      <div className="card_details_container">
                    <div className="name_rating_container d-flex justify-content-between">
                      <div className="name">Gurpreet Singh</div>
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

              <div className="grid-item">
                <div className="card mb-3" style={{maxWidth:'384px'}}>
                  <div className="row g-0">
                    <div className="col-md-4">
                     <div className="bg_color">
                     <img src={caregiver_img} className="img-fluid rounded-start" alt="caregiver_img" />
                     </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                      <div className="card_details_container">
                    <div className="name_rating_container d-flex justify-content-between">
                      <div className="name">Gurpreet Singh</div>
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


              {/* on mobile banner to be shown start */}

              <div className="mt-4 D_none_on_xm">
        <div className="image_container_second_banner">
          <img src={Blue_Banner} alt="Example Image" />
          <div class="overlay_Banner_second">
          <img src={doctor_img3} alt="doctor3_img" />
          </div>

          <div class="overlay_Banner_second_content">
          <div className="Banner_second_heading">Not sure how to go ahead?</div>
          <div className="Banner_second_description">Give us a call and we'll guide you through the process of selecting the best caregiver for your loved ones.</div>
          <div className="Banner_second_btn_section mt-4"><button type="button" class="btn btn-primary">Call us now</button></div>
          </div>
        </div>

      </div>

            {/* on mobile banner to be shown end */}

              







              <div className="grid-item">
                <div className="card mb-3" style={{maxWidth:'384px'}}>
                  <div className="row g-0">
                    <div className="col-md-4">
                     <div className="bg_color">
                     <img src={caregiver_img} className="img-fluid rounded-start" alt="caregiver_img" />
                     </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                      <div className="card_details_container">
                    <div className="name_rating_container d-flex justify-content-between">
                      <div className="name">Gurpreet Singh</div>
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

              <div className="grid-item">
                <div className="card mb-3" style={{maxWidth:'384px'}}>
                  <div className="row g-0">
                    <div className="col-md-4">
                     <div className="bg_color">
                     <img src={caregiver_img} className="img-fluid rounded-start" alt="caregiver_img" />
                     </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                      <div className="card_details_container">
                    <div className="name_rating_container d-flex justify-content-between">
                      <div className="name">Gurpreet Singh</div>
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

              <div className="grid-item">
                <div className="card mb-3" style={{maxWidth:'384px'}}>
                  <div className="row g-0">
                    <div className="col-md-4">
                     <div className="bg_color">
                     <img src={caregiver_img} className="img-fluid rounded-start" alt="caregiver_img" />
                     </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                      <div className="card_details_container">
                    <div className="name_rating_container d-flex justify-content-between">
                      <div className="name">Gurpreet Singh</div>
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

              <div className="grid-item">
                <div className="card mb-3" style={{maxWidth:'384px'}}>
                  <div className="row g-0">
                    <div className="col-md-4">
                     <div className="bg_color">
                     <img src={caregiver_img} className="img-fluid rounded-start" alt="caregiver_img" />
                     </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                      <div className="card_details_container">
                    <div className="name_rating_container d-flex justify-content-between">
                      <div className="name">Gurpreet Singh</div>
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

              <div className="grid-item">
                <div className="card mb-3" style={{maxWidth:'384px'}}>
                  <div className="row g-0">
                    <div className="col-md-4">
                     <div className="bg_color">
                     <img src={caregiver_img} className="img-fluid rounded-start" alt="caregiver_img" />
                     </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                      <div className="card_details_container">
                    <div className="name_rating_container d-flex justify-content-between">
                      <div className="name">Gurpreet Singh</div>
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

              <div className="grid-item">
                <div className="card mb-3" style={{maxWidth:'384px'}}>
                  <div className="row g-0">
                    <div className="col-md-4">
                     <div className="bg_color">
                     <img src={caregiver_img} className="img-fluid rounded-start" alt="caregiver_img" />
                     </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                      <div className="card_details_container">
                    <div className="name_rating_container d-flex justify-content-between">
                      <div className="name">Gurpreet Singh</div>
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
              

            </div>
            

          </div>
          <div className="Form_main_container">
            {/* <div className="col-12 col-xxl-5 col-xl-5 col-lg-4 col-md-4 col-sm-12 mt-md-5 mt-sm-5 FormSection">
          <div className="row">
            <div className="col-12 col-md-12 col-sm-12">
              
            </div>
          </div>
        </div> */}
            <div className='from_container'>

              <form noValidate onSubmit={handleSubmit} className={formValidated ? 'was-validated' : ''}>
                <div className="form_Heaader_content_container">
                  <div className="Have_a_query">Have a query?</div>
                  <div className="We_are_here">We’re here to help!</div>
                </div>
                <div className="form_body">
                  <div className="mb-3">
                    <input type="text" className="form-control HomePage_Form" id="exampleInputName" placeholder="Enter Your Name" pattern="[A-Za-z]{3,}" required value={name} onChange={(e) => setName(e.target.value)} autoComplete='off' />
                    <div className="invalid-feedback">Please enter your name</div>
                  </div>
                  <div className="mb-3">
                    <input type="tel" className="form-control HomePage_Form" id="exampleInputMobile" placeholder="Enter Mobile Number" pattern="[0-9]{10}" required value={mobile} onChange={(e) => setMobile(e.target.value)} autoComplete='off' />
                    <div className="invalid-feedback">Please enter a valid 10-digit mobile number</div>
                  </div>
                  <div className="text-center">
                    <div className="buttons_container mt-4">
                      <button type="submit" className="btn btn-success callus_btn mb-3">Request a callback</button>
                      <button type="submit" className="btn btn-primary callus_btn">Call us now</button>
                    </div>
                  </div>
                </div>

              </form>




            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Search_Form