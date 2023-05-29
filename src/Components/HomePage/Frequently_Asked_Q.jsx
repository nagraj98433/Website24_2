import React from "react";
import '../../All_Styles/Frequently_Asked_Q.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';
// import attendant from '../../assets/Images/attendant.png'
import Accordion from 'react-bootstrap/Accordion';



// Add the desired icons to the library
library.add(fas);


const Frequently_Asked_Q = () => {
  return (
    <>
      <div className="Max_width80 mt-4">
        <div className="frequently_content mb-5 ps-5">Frequently Asked Questions</div>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What types of caregiver services do you offer?</Accordion.Header>
            <Accordion.Body>
              You can book a caregiver with Care24 by visiting their website, selecting the type of service you need, and providing some basic information about your requirements.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How much does it cost to hire a caregiver with Aajicare?</Accordion.Header>
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
        </Accordion>





      </div>
    </>
  )
}

export default Frequently_Asked_Q