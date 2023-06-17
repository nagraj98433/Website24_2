import React, { useEffect, useState } from "react";
import '../../All_Styles/Form.css'
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

import axios from 'axios';

import Profile_cards from "./Profile_cards";

import 'bootstrap/dist/css/bootstrap.css';

// Add the desired icons to the library
library.add(fas);


const Form = (props) => {

  // Form validation start

  const [index, setIndex] = useState(0);

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [formValidated, setFormValidated] = useState(false);




  // Calling on number API start


  const apiUrl = 'https://admin.care24.co.in/leadmanager/api/lead/';

  const headers = {
    'Authorization': 'Token 11a839fb7483b8778f14567f9e24c3ebd973af6d',
    'Cookie': 'csrftoken=EmQhD5qgJZomFzSARRsCoyJv18qWowpQu2JqF9YWEDXw4WtKX9cvZyuUCyAboeVG; sessionid=1czu79h19smorqth4umjd2qx125y6lpv',
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  const formData = new URLSearchParams();
  formData.append('cust_name', name);
  formData.append('phone', mobile);
  formData.append('city', '1');
  formData.append('service', '3');
  formData.append('c24service', 'A');
  formData.append('lead_type', '4');

  const handleClick = () => {
    axios.post(apiUrl, formData, { headers })
      .then(response => {
        // Handle successful response
        console.log(response.data);
      })
      .catch(error => {
        // Handle error
        console.error(error);
      });
  };


  // Calling on number API end



  // Form validation start


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    console.log(form.checkValidity())


    if (form.checkValidity() === false) {
      event.stopPropagation();
      setFormValidated(true);
    }
    else {

      setFormValidated(true);
      handleClick()
    }


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





  // Profile API call start

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

  // cgsProfile.map((preval) => {
  //   console.log(preval)
  // })


  // Profile API call end




  return (
    <>
      <div className="Max_width80 myMT">
        <div className="search_form_container sm_M_auto">
          <div className="Form_main_container_mobile">
            {/* <div className="col-12 col-xxl-5 col-xl-5 col-lg-4 col-md-4 col-sm-12 mt-md-5 mt-sm-5 FormSection">
          <div className="row">
            <div className="col-12 col-md-12 col-sm-12">
              
            </div>
          </div>
        </div> */}
            <div className='from_container Vibrate_card' tabIndex='0' id={props.id}>

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
                    <div className="buttons_container mt-5">
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

export default Form