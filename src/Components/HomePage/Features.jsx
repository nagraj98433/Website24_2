import React, { useState, useEffect } from "react";
import '../../All_Styles/Features.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import care1_overlay from '../../assets/Images/care1_overlay.png'
import care2_overlay from '../../assets/Images/care2_overlay.jpeg'
import BannerSection_img from '../../assets/Images/BannerSection_img.png'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';



// Add the desired icons to the library
library.add(fas);


const Features = (props) => {




  // const [Header_title1, setHeader_title1] = useState()

  const [data, setData] = useState(null);

  useEffect(() => {


    const fetchData = async () => {
      try {
        const response = await axios.get(
          // 'https://admin.care24.co.in/c24web/content?name=page1'
          `https://admin.care24.co.in/c24web/content?name=${props.Param}`
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching API:', error);
      }
    };

    fetchData();
  }, []);

  // console.log(props.Param)

  // if (data === null) {
  //   console.log('data is loading...')
  // }
  // else {
  //   console.log(data.data.link_name)
  // }
  // console.log(data.data.link_name)
  // console.log(data.data.pg_content.pg_content.pg_hdr[0].title.title_1)
  // console.log(data.data.pg_content.pg_content.pg_hdr[0].content)







  return (
    <>
      <div className="Max_width80 mt-5">
        <div className="Featuers_heading_flex_container">
          <div className="feature_header">Here are some of the features that set Care24 apart</div>
          <div className="feature_header_description">
            Care24 provides a range of healthcare services, including nursing, physiotherapy, and post-operative care. Their team consists of trained and certified professionals who are available 24/7 to provide personalized care to patients in the comfort of their homes.
          </div>
        </div>





        <div class="grid_Featuers_flex_container">
          <div class="grid_item_features border_left_1">
          <div className="feature_1_title">Holistic Care</div>
            <div className="feature_1_description">Care24 provides holistic healthcare, offering emotional and psychological support alongside assistance with daily activities like bathing, dressing, and feeding.</div>
          </div>

          <div class="grid_item_features border_left_2">
          <div className="feature_2_title">Skilled Professionals</div>
            <div className="feature_2_description">Care24's skilled professionals undergo rigorous selection and regular training to stay updated with the latest healthcare practices.</div>
          </div>

          <div class="grid_item_features border_left_3">
          <div className="feature_3_title">Advanced Technology</div>
            <div className="feature_3_description">Care24 leverages advanced technology for efficient support, including an omnichannel inbox for caregivers to reply to patients from a single location</div>
          </div>
          

        </div>


      </div>
    </>
  )
}

export default Features