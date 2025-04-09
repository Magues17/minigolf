import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
// import Programs from "../Components/Programs/Programs";
import Title from "../Components/Title/Title";
import About from "../Components/About/About";
import Church from "../Components/Church/Church";
import Testimonials from "../Components/Testimonials/Testimonials";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
// import VideoPlayer from "../Components/VideoPlayer/VideoPlayer";

const Home = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      
      <Hero /> 
      <div className="container">
       {/* <Title subTitle="Pricing" title="What We Offer" />
         <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="Gallery" title="Servicing Our Community" />
        <Church />
        <Title subTitle="TESTIMONIALS" title="What Community Says" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact /> */}
       
      </div>
      {/* <VideoPlayer playState={playState} setPlayState={setPlayState} /> */}
    </div>
  );
};

export default Home;
