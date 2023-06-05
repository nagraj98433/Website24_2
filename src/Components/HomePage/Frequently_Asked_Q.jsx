import React, { useState, useEffect } from "react";
import '../../All_Styles/Frequently_Asked_Q.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';
// import attendant from '../../assets/Images/attendant.png'
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';




// Add the desired icons to the library
library.add(fas);


const Frequently_Asked_Q = (props) => {


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
    console.log(data.data.pg_content.pg_content.pg_faq[0].question)
  }
  // console.log(data.data.link_name)
  // console.log(data.data.pg_content.pg_content.pg_hdr[0].title.title_1)







  return (
    <>
      <div className="Max_width80 mt-4">
        <div className="frequently_content mb-5 ps-5">Frequently Asked Questions</div>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">


            {
              (data === null) ?
                alert('data is loading...')
                :
                <Accordion.Header>

                  {(data.data.link_name === 'page1' || data.data.link_name === 'page2' || data.data.link_name === 'page3') ?
                    data.data.pg_content.pg_content.pg_faq[0].question
                    :
                    null
                  }
                </Accordion.Header>


            }




            {
              (data === null) ?
                alert('data is loading...')
                :

                <Accordion.Body>
                {(data.data.link_name === 'page1' || data.data.link_name === 'page2' || data.data.link_name === 'page3') ?
                    data.data.pg_content.pg_content.pg_faq[0].answer
                    :
                    null
                  }
              </Accordion.Body>

            }
           

          </Accordion.Item>
          <Accordion.Item eventKey="1">

          {
              (data === null) ?
                alert('data is loading...')
                :
                <Accordion.Header>

                  {(data.data.link_name === 'page1' || data.data.link_name === 'page2' || data.data.link_name === 'page3') ?
                    data.data.pg_content.pg_content.pg_faq[1].question
                    :
                    null
                  }
                </Accordion.Header>


            }
            
            
            
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>

          </Accordion.Item>
          <Accordion.Item eventKey="2">

            <Accordion.Header>Are Care24’s caregivers trained and experienced?</Accordion.Header>
            
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>

          </Accordion.Item>

          <Accordion.Item eventKey="3">

            <Accordion.Header>What is the process for hiring a caregiver service provider?</Accordion.Header>
            
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>

          </Accordion.Item>
        </Accordion>





      </div>
    </>
  )
}

export default Frequently_Asked_Q