import React from "react";
import '../../All_Styles/Clients_have_to_say.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';
import Testimonial_Blob from '../../assets/Images/Testimonial_Blob.png'
import client_1 from '../../assets/Images/client_1.png'
import qout1 from '../../assets/Images/qout1.png'
import qout2 from '../../assets/Images/qout2.png'
import qout3 from '../../assets/Images/qout3.png'
import Slider from "react-slick";




// Add the desired icons to the library
library.add(fas);


const Clients_have_to_say = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };





  return (
    <>
      <div className="Max_width80 mt-5">



        <div className="Flex_container_client">
          <div className="Hear_what">Hear What Our Clients Have to Say</div>
          <div className="Real_stories">Real Stories from families who trust Care24 for their Home Care needs</div>
        </div>

        <div className="clients_cards_main_container mt-5">
          <div className="clients_cards_flex_container">

          <div>
          <div class="image-container_clients_have_to_say">
                <img src={Testimonial_Blob} alt="Testimonial_Blob" />
                <div class="overlay_clients_have_to_say">
                  <div className="clients_have_to_say_content">Needed an attendant for a week for post-surgical assistance (ward boy type work). The person allocated was punctual, polite, and generally did the job well. Quite happy with the services provided.</div>
                </div>

                <div class="overlay_clients_have_to_say_img">
                  <img src={client_1} alt="client-1" />
                </div>

                <div class="overlay_clients_have_to_say_icon">
                  <img src={qout1} alt="qout1" />
                </div>

                <div class="overlay_clients_have_to_say_name">
                  <div className="client_name">Swati Saxena</div>
                  <div className="client_location">Mumbai</div>
                </div>
              </div>
          </div>
          <div>
          <div class="image-container_clients_have_to_say">
                <img src={Testimonial_Blob} alt="Testimonial_Blob" />
                <div class="overlay_clients_have_to_say">
                  <div className="clients_have_to_say_content">Needed an attendant for a week for post-surgical assistance (ward boy type work). The person allocated was punctual, polite, and generally did the job well. Quite happy with the services provided.</div>
                </div>

                <div class="overlay_clients_have_to_say_img">
                  <img src={client_1} alt="client-1" />
                </div>

                <div class="overlay_clients_have_to_say_icon">
                  <img src={qout1} alt="qout1" />
                </div>

                <div class="overlay_clients_have_to_say_name">
                  <div className="client_name">Swati Saxena</div>
                  <div className="client_location">Mumbai</div>
                </div>
              </div>
          </div>
          <div>
          <div class="image-container_clients_have_to_say">
                <img src={Testimonial_Blob} alt="Testimonial_Blob" />
                <div class="overlay_clients_have_to_say">
                  <div className="clients_have_to_say_content">Needed an attendant for a week for post-surgical assistance (ward boy type work). The person allocated was punctual, polite, and generally did the job well. Quite happy with the services provided.</div>
                </div>

                <div class="overlay_clients_have_to_say_img">
                  <img src={client_1} alt="client-1" />
                </div>

                <div class="overlay_clients_have_to_say_icon">
                  <img src={qout1} alt="qout1" />
                </div>

                <div class="overlay_clients_have_to_say_name">
                  <div className="client_name">Swati Saxena</div>
                  <div className="client_location">Mumbai</div>
                </div>
              </div>
          </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Clients_have_to_say