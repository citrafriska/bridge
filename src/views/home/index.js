import React from "react";
import Navigation from "../../shared-components/Layout/Navigation";
import Banner from "./components/Banner";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Offer from "./components/Offer";
import Footer from "./../../shared-components/Layout/Footer";

function Home() {
  return (
    <>
      <Navigation />
      <Banner />
      <About />
      <Testimonial />
      <Offer />
      <Footer />
    </>
  );
}

export default Home;
