import React from "react";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Notes from "./Components/Notes";
import Works from "./Components/Works";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Works />
      <Notes />
      <Footer />
    </div>
  );
}

export default App;
