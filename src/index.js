import React from 'react';
import ReactDOM from 'react-dom/client';
import {Routes, Route, BrowserRouter} from "react-router-dom"

//Styles
import "./assets/css/bootstrap.min.css"
import "./assets/css/home4.css"
import "./assets/css/font-awesome.min.css"
import "./assets/css/flaticon.css"
// import "./assets/css/lightgallery.css"
import "./assets/style.css"


//Components
import Header from './components/Header';
import Home from "./components/Home"
import Footer from './components/Footer';
import Team from './components/Team';


function Index() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/team' element={<Team />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
