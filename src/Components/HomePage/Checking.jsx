import React, { useState } from "react";
import '../../All_Styles/Checking.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import care1_overlay from '../../assets/Images/care1_overlay.png'
import BannerSection_img from '../../assets/Images/BannerSection_img.png'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-bootstrap';


// Add the desired icons to the library
library.add(fas);


const Checking = () => {

  const [showModal, setShowModal] = useState(false);



  return (
    <>
      <div className="Max_width80 mt-4">

      <button onClick={() => setShowModal(true)}>Open Modal</button>



        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Modal content goes here...</p>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={() => setShowModal(false)}>Close</button>
          </Modal.Footer>
        </Modal>


      </div>
    </>
  )
}

export default Checking