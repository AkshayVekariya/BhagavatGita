import React from "react";
import GetAllChapter from "../../componet/homeComponet/AllChapter/GetAllChapter";
import HeroSection from "../../componet/homeComponet/Herosection/HeroSection";
import StaInspiredDaily from "../../componet/homeComponet/StayInspiredDaily/StaInspiredDaily";



function Home() {
  return (
    <div >
      <HeroSection />
      <StaInspiredDaily />
      <GetAllChapter />
    </div>
  );
}

export default Home;
