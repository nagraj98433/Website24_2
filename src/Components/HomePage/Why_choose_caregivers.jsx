import React, { useState, useEffect } from "react";
import '../../All_Styles/Why_choose_caregivers.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';
// import why_choose from '../../assets/Images/why_choose.png'
// import Why_choose2 from '../../assets/Images/Why_choose2.png'

import axios from 'axios';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

// Add the desired icons to the library
library.add(fas);


const Why_choose_caregivers = (props) => {


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

              <div className="Why_choose_caregivers__content_container">
                <div className="Why_choose_caregivers__content_heading">
                  Why Choose Our Caregiver Services?
                </div>
                <div className="Why_choose_caregivers__Description mt-2">
                  Our caregiver services are provided by highly trained and experienced professionals who are passionate about what they do. We understand that every individual has unique needs and we work closely with you to ensure that those needs are met with compassion and expertise.
                </div>
              </div>

              :

              <div className="Why_choose_caregivers__content_container">
                <div className="Why_choose_caregivers__content_heading">
                  Home Remedies for Arthritis
                </div>
                <div className="Why_choose_caregivers__Description mt-2">
                  There are several home remedies that can help ease the pain and stiffness associated with arthritis. One of the most effective is exercise. Gentle exercises like walking, swimming, and yoga can help improve flexibility, reduce pain, and strengthen the muscles around the affected joints. Another home remedy for arthritis is heat therapy. Applying a hot compress or taking a warm bath can help reduce pain and stiffness in the joints. Additionally, some studies have shown that acupuncture and massage therapy can help alleviate arthritis symptoms.


                </div>
              </div>

            )
        }




        


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

            <div className="Why_choose_caregivers__content_container2">
            <div className="Why_choose_caregivers__content_heading2">
              How much does it cost?
            </div>
            <div className="Why_choose_caregivers__Description2 mt-2">
              Our caregiver services are priced competitively to ensure that you receive the best value for your investment. We offer a range of packages and options to meet your specific needs and budget. Contact us today to discuss pricing options.
            </div>
          </div>

              :

              <div className="Why_choose_caregivers__content_container3">
          <div className="Why_choose_caregivers__content_heading2">
            Taking Care of Arthritis Patients at Home
          </div>
          <div className="Why_choose_caregivers__Description2 mt-2">
            Arthritis patients require special care at home to help manage their symptoms and improve their quality of life. One of the most important things you can do is to make sure they get plenty of rest. Arthritis patients often experience fatigue, so it's important to ensure they get enough sleep and take breaks throughout the day. Additionally, you should make sure their home is safe and easy to navigate. Consider installing handrails in the bathroom, removing tripping hazards, and using non-slip rugs. Finally, you should encourage them to eat a healthy, balanced diet and avoid foods that can trigger inflammation.
          </div>
        </div>

            )
        }


      </div>



    </>
  )
}

export default Why_choose_caregivers