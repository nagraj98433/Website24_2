import React from "react";
import TopHeader from "./Components/HomePage/TopHeader";
import BannerSection from "./Components/HomePage/BannerSection";
import Search_Form from "./Components/HomePage/Search_Form";
import BannerSecond from "./Components/HomePage/BannerSecond";
import Clients_have_to_say from "./Components/HomePage/Clients_have_to_say";
import Best_Caregivers_Services from "./Components/HomePage/Best_Caregivers_Services";
import Why_choose_caregivers from "./Components/HomePage/Why_choose_caregivers";
import How_to_varify_caregiver from "./Components/HomePage/How_to_varify_caregiver";
import AboutUS from "./Components/HomePage/AboutUS";
import Our_Services from "./Components/HomePage/Our_Services";
import Frequently_Asked_Q from "./Components/HomePage/Frequently_Asked_Q";
import Get_in_touch from "./Components/HomePage/Get_in_touch";
import FooterSection from "./Components/HomePage/FooterSection";
import Checking from "./Components/HomePage/Checking";

const Main = () => {
  return (
    <>
  <TopHeader/>
  <BannerSection/>
  {/* <Search_Form/> */}
  <BannerSecond/>
  {/* <Clients_have_to_say/> */}
  <Best_Caregivers_Services/>
  <Why_choose_caregivers/>
  <How_to_varify_caregiver/>
  <AboutUS/>
  {/* <Our_Services/> */}
  <Frequently_Asked_Q/>
  <Get_in_touch/>
  {/* <FooterSection/> */}
  {/* <Checking/> */}
    </>
  )
}

export default Main