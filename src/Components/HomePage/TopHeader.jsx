import React, {useState, useEffect} from "react";
import '../../All_Styles/TopHeader.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';

import axios from 'axios';

// Add the desired icons to the library
library.add(fas);

import TopHeader_img from '../../assets/Images/HeaderPic1.png'
import TopHeader_img1 from '../../assets/Images/HeaderPic2.png'
import Logo from '../../assets/Images/logo.png'
import Mobile_bg from '../../assets/Images/Mobile_bg.png'


const TopHeader = () => {


  const [data, setData] = useState(null);

  useEffect(() => {


    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://admin.care24.co.in/c24web/content?name=page1'
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching API:', error);
      }
    };

    fetchData();
  }, []);

  console.log(data)










  return (
    <>
      <div className="Max_width80">
        <div className="image-container">
          <img src={TopHeader_img} alt="ToHeader_bg" className="Header_bg" />
          {/* This is for number img start */}
          <div className="overlay">
              <img src={TopHeader_img1} alt="TopHeader_img1" className="numberImg"/>
              <img src={Mobile_bg} alt="TopHeader_img1" className="numberImg_mobile"/>
          </div>
          {/* This is for number img end */}

          {/* This is for logo img start */}
          <div className="overlay_logo">
              <img src={Logo} alt="TopHeader_logo" className="image_container_logo"/>
          </div>
          {/* This is for logo img end */}

          {/* This is for number start */}
          <div className="overlay_number">
         
             <span className="me-2"><FontAwesomeIcon icon="fa-solid fa-phone-volume" /></span> 
             <span className="Top_header_number">Call Us - 08069048806</span>
          </div>
          {/* This is for number end */}

        </div>
      </div>

    </>
  )
}

export default TopHeader