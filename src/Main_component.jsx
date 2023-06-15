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
import Features from "./Components/HomePage/Features";
import Clients_reviews from "./Components/HomePage/Clients_reviews";
import Checking from "./Components/HomePage/Checking";
import { useParams } from 'react-router-dom';

const Main_component = () => {

  let { userId } = useParams();



  if (userId === undefined) {
    userId="page1"

  }

  else {
    userId 
  }

  console.log(userId)

  return (
    <>
      <TopHeader />
      <BannerSection Param={userId} />
      {/* <Features/> */}
      <Search_Form />
      <BannerSecond />
      {/* <Clients_reviews/> */}
      <Clients_have_to_say/>
      <Best_Caregivers_Services Param={userId}/>
      <Why_choose_caregivers Param={userId}/>
      <How_to_varify_caregiver Param={userId}/>
      <AboutUS />
      <Our_Services/>
      <Frequently_Asked_Q Param={userId} />
      <Get_in_touch />
      <FooterSection/>
      <Checking/>
    </>
  )
}

export default Main_component