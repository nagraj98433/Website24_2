import React, { useState, useEffect } from "react";
import '../../All_Styles/BannerSection.css'
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


const BannerSection = (props) => {
  



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
        <div className="BannerSection_container">
          <div className="container">
            <div className="Content_container">
              <div className="rating_container">
                <div className="rating">
                  <span><FontAwesomeIcon icon={faThumbsUp} /></span> Rated <span className="fw-bold">4.5/5 </span> by 1,00,000+ customers
                </div>
              </div>

              <div className="get_reliable_container mt-4">
                {
                  (data === null) ?
                  <Backdrop
                  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                  open
                >
                  <CircularProgress color="inherit" />
                </Backdrop>
                    :

                    <div className="get_reliable">
                      {(data.data.link_name === 'page1' || data.data.link_name === 'page2' || data.data.link_name === 'page3') ?
                        data.data.pg_content.pg_content.pg_hdr[0].title.title_1
                        :
                        null
                      }

                    </div>
                }
              </div>

              <div className="Quality_container">

                {
                  (data === null) ?
                  <Backdrop
                  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                  open
                >
                  <CircularProgress color="inherit" />
                </Backdrop>
                    :

                    <div className="Quality">
                      {(data.data.link_name === 'page1' || data.data.link_name === 'page2' || data.data.link_name === 'page3') ?
                        data.data.pg_content.pg_content.pg_hdr[0].title.title_2
                        :
                        null
                      }
                    </div>
                }

              </div>

              <div className="doorstep_container">

                {

                  (data === null) ?
                  <Backdrop
                  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                  open
                >
                  <CircularProgress color="inherit" />
                </Backdrop>
                    :

                    (data.data.link_name === 'page1') ?
                      <div className="doorstep">
                        at your doorstep
                      </div>
                      :
                      null
                }



              </div>

              <div className="care_description_container">

              {
                  (data === null) ?
                  <Backdrop
                  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                  open
                >
                  <CircularProgress color="inherit" />
                </Backdrop>
                    :

                    <div className="care_description">
                {(data.data.link_name === 'page1' || data.data.link_name === 'page2' || data.data.link_name === 'page3') ?
                        data.data.pg_content.pg_content.pg_hdr[0].content
                        :
                        null
                      }
                </div>
                }


              </div>

              <div className="buttons_container">
                <button type="button" className="btn btn-primary me-3 px-4 py-3">Call us now</button>
                <button type="button" className="btn btn-success px-4 py-3">Request a callback</button>
              </div>

            </div>
            <div className="img_container">
              
              <div className="image_container_bannerSection">


{
                  (data === null) ?
                  <Backdrop
                  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                  open
                >
                  <CircularProgress color="inherit" />
                </Backdrop>
                    :

                    (data.data.link_name === 'page2' || data.data.link_name === 'page3')?
                <img src={care2_overlay} alt="care2_img" />
                    
                    :
                <img src={care1_overlay} alt="care1_img" />


                }
              



                {/* <div class="overlay_bannerSection">
                 <img src={BannerSection_img} alt="bannerSection_img" />
                </div> */}

                <div className="overlay_bannerSection_content">
                  <div className="d-flex align-items-center">
                    <div className="banner_section_icon"><FontAwesomeIcon icon={faCheckCircle} /></div>
                    <div className="banner_section_hourN">24</div>
                    <div className="banner_section_hour me-2">hr</div>
                    <div className="banner_section_content">Booking of Professional Care Services</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BannerSection