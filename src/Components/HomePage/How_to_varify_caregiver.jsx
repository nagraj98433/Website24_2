import React, { useState, useEffect } from "react";
import '../../All_Styles/How_to_varify_caregiver.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';
// import why_choose from '../../assets/Images/why_choose.png'
// import Why_choose2 from '../../assets/Images/Why_choose2.png'
import doctor_img from '../../assets/Images/doctor_img.png'
import verify1 from '../../assets/Images/verify1.png'
import verify2 from '../../assets/Images/verify2.png'
import verify3 from '../../assets/Images/verify3.png'


import axios from 'axios';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


// Add the desired icons to the library
library.add(fas);


const How_to_varify_caregiver = (props) => {





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

  if (data === null) {
    console.log('data is loading...')
  }
  else {
    console.log(data.data.link_name)
  }
  // console.log(data.data.link_name)
  // console.log(data.data.pg_content.pg_content.pg_hdr[0].title.title_1)
  // console.log(data.data.pg_content.pg_content.pg_hdr[0].content)









  return (
    <>
      <div className="Max_width80 mt-4">



      {
          (data === null) ?
            <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open
            >
              <CircularProgress color="inherit" />
            </Backdrop>
            :

            (data.data.link_name === 'page1' ?

            <div className="verify_caregiver_container">
            <div className="caregiver_verify_container">
              <div className="verify_content">
               {data.data.pg_content.pg_content.pg_center[3].title}
              </div>
              <div className="verify_discription">
              {data.data.pg_content.pg_content.pg_center[3].content}
              </div>
            </div>
            <div className="verify_caregiver_overlay_container for_desktop_varify">
  
              <div className="image_container_verify">
                <img src={doctor_img} alt="Example Image" />
                <div className="overlay_verify">
                  <img src={verify1} alt="verify1" />
                </div>
  
                <div className="overlay_verify2">
                  <img src={verify2} alt="verify2" />
                </div>
  
                <div className="overlay_verify3">
                  <img src={verify3} alt="verify3" />
                </div>
              </div>
  
            </div>
          </div>

              :

              <div className="Why_choose_caregivers__content_container3">
          <div className="Why_choose_caregivers__content_heading2">
          {data.data.pg_content.pg_content.pg_center[3].title}
          </div>
          <div className="Why_choose_caregivers__Description2 mt-2">
          {data.data.pg_content.pg_content.pg_center[3].content.slice(0,509)}

            <div className="mt-5">
            {data.data.pg_content.pg_content.pg_center[3].content.slice(510,1000)}
            </div>
          </div>
        </div>


            )
        }









        





      </div>
    </>
  )
}

export default How_to_varify_caregiver