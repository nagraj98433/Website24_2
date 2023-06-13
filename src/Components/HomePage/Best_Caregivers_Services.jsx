import React, { useState, useEffect }  from "react";
import '../../All_Styles/Best_Caregivers_Services.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';
import care3 from '../../assets/Images/care3.png'
import care_page2 from '../../assets/Images/care_page2.png'

import axios from 'axios';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


// Add the desired icons to the library
library.add(fas);


const Best_Caregivers_Services = (props) => {

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
      <div className="Max_width80 mt_top_bestC">

        <div className="container-fluid">
          <div className="row">
            <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 stack_on_xm">
              <div className="Best_caregiver_container">

              {
                  (data === null) ?
                  <Backdrop
                  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                  open
                >
                  <CircularProgress color="inherit" />
                </Backdrop>
                    :

                    
                      (data.data.pg_content.pg_name === 'page1' || data.data.pg_content.pg_name === 'page2') ?
                        <>
                        <div className="Best_care">{data.data.pg_content.pg_content.pg_center[0].title.title_1} <br /><span className="Best_care_part">{data.data.pg_content.pg_content.pg_center[0].title.title_2}</span></div>
                <div className="caregiver_description">{data.data.pg_content.pg_content.pg_center[0].content}</div>
                        </>
                        :
                        <>
                       <div className="Best_care">{data.data.pg_content.pg_content.pg_center[0].title.title_1} <br /><span className="Best_care_part">{data.data.pg_content.pg_content.pg_center[0].title.title_2}</span></div>
                <div className="caregiver_description">{data.data.pg_content.pg_content.pg_center[0].content}</div>
                        </>
                      

                   
                }




              </div>
            </div>
            <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6">

              <div className="Best_caregiver_img_container">
              {
                  (data === null) ?
                  <Backdrop
                  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                  open
                >
                  <CircularProgress color="inherit" />
                </Backdrop>
                    :

                    
                      (data.data.pg_content.pg_name === 'page1' || data.data.pg_content.pg_name === 'page2' ) ?
                        <>
                       <img src={care3} alt="care3_img" />
                        </>
                        :
                        <>
                       <img src={care_page2} alt="care3_img" />
                        </>
                      

                   
                }
               
              </div>

            </div>
          </div>
        </div>









      </div>
    </>
  )
}

export default Best_Caregivers_Services