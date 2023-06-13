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

            (data.data.pg_content.pg_name === 'page1' || data.data.pg_content.pg_name === 'page2' ?

              <div className="Why_choose_caregivers__content_container">
                <div className="Why_choose_caregivers__content_heading">
                {data.data.pg_content.pg_content.pg_center[1].title}
                </div>
                <div className="Why_choose_caregivers__Description mt-2">
                {data.data.pg_content.pg_content.pg_center[1].content}
                </div>
              </div>

              :

              <div className="Why_choose_caregivers__content_container">
                <div className="Why_choose_caregivers__content_heading">
                {data.data.pg_content.pg_content.pg_center[1].title}
                </div>
                <div className="Why_choose_caregivers__Description mt-2">
                {data.data.pg_content.pg_content.pg_center[1].content}


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

            (data.data.pg_content.pg_name === 'page1' || data.data.pg_content.pg_name === 'page2'?

            <div className="Why_choose_caregivers__content_container2">
            <div className="Why_choose_caregivers__content_heading2">
            {data.data.pg_content.pg_content.pg_center[2].title}
            </div>
            <div className="Why_choose_caregivers__Description2 mt-2">
            {data.data.pg_content.pg_content.pg_center[2].content}
            </div>
          </div>

              :

              <div className="Why_choose_caregivers__content_container3">
          <div className="Why_choose_caregivers__content_heading2">
          {data.data.pg_content.pg_content.pg_center[2].title}
          </div>
          <div className="Why_choose_caregivers__Description2 mt-2">
          {data.data.pg_content.pg_content.pg_center[2].content}
          </div>
        </div>

            )
        }


      </div>



    </>
  )
}

export default Why_choose_caregivers