import React from "react";
import Main_component from "./Main_component";
import './App.css'
import { Routes, Route } from "react-router-dom";


function App(params) {
  return (
    <>
      <Routes>
        <Route path='/care24' element={<Main_component />} />
        <Route path='/care24/:userId' element={<Main_component />} />
      </Routes>

    </>

  )
}


export default App