import React, {useState,useContext} from "react";
import About from "./About";
import image1 from '../images/IMG_7066.jpg';
import image2 from '../images/20230416_104038.jpg';
import image3 from '../images/20230423_122158.jpg'
import Footer from './/footer.js'; 

const Home=()=>{


    return(
        <div>
          <br/>
        {/* Your other content above the carousel */}
        <div className="carousel-container">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* Apply a fixed height to all images */}
            <img src={image1} className="d-block w-100" alt="Slide 1" style={{ height: '400px' }} />
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="Slide 2" style={{ height: '400px' }} />
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="Slide 3" style={{ height: '400px' }} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        </div>
        {/* Your other content below the carousel */} check out my work
        <div className="image-container">
      {/* <img src={image1} alt="Pic 1 loading..."/>
      <img src={image2} alt="Pic 2 loading..."/>
      <img src={image3} alt="Pic  3loading..."/> */}
     
        </div>
        <Footer/>
      </div>
  
    )
}

export default Home