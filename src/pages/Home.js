import React from "react";
import "../App.css";
import Cards from "../components/Cards.js";
import HeroSection from "../components/HeroSection.js";
import Footer from "../components/Footer.js";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
