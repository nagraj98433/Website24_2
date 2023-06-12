import React, { useState, useEffect } from "react";
import '../../All_Styles/Clients_reviews.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import care1_overlay from '../../assets/Images/care1_overlay.png'
import client_4 from '../../assets/Images/client_4.png'
import care2_overlay from '../../assets/Images/care2_overlay.jpeg'
import BannerSection_img from '../../assets/Images/BannerSection_img.png'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';



// Add the desired icons to the library
library.add(fas);


const Clients_reviews = (props) => {




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
        <div className="client_reviews_title">Based on Client Reviews</div>

        <div class="grid_container_clients_reviews">
          <div class="grid_item_clients_reviews">
            <div className="percentage">95%</div>
            <div className="feedbacks">are happy with Care24’s performance &
              reliability vs. 88% for Aajicare</div>
          </div>
          <div class="grid_item_clients_reviews">
            <div className="percentage">92%</div>
            <div className="feedbacks">find Care24's platform easy to use vs. 83% for Aajicare </div>
          </div>
          <div class="grid_item_clients_reviews">
            <div className="percentage">89%</div>
            <div className="feedbacks">say Care24's services are easy to set up vs. 80% for Aajicare </div>
          </div>
        </div>

        {/* feedback section start */}
        <div class="grid_container_feedback_section">
          <div class="grid_item_feedback">
            <div></div>
            <div className="feedback_given">I was initially hesitant about switching from Aajicare to Care42, but I am so glad I made the decision. Care42 has exceeded my expectations in every way possible. Their outstanding care and support, coupled with prompt response to my questions, has enabled me to make informed decisions about my health</div>
            <div className="feedback_given_name">Swati Saxena</div>
            <div className="feedback_given_location">Mumbai</div>
          </div>
          <div class="grid_item_feedback1">
            <img src={client_4} alt="review pic" />
          </div>
        </div>
        {/* feedback section end */}




      </div>
    </>
  )
}

export default Clients_reviews