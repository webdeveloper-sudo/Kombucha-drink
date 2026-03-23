import Header from "./components/Header";
import Hero from "./components/Hero";
import AllFlavours from "./components/AllFlavours";
import OurCustomers from "./components/OurCustomers";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Chatbot from "./components/Chatbot";
import { useEffect, useState } from "react";
import OurCraftmanship from "./components/OurCraftmanship";
import Ingredients from "./components/Ingredients";
import HopeKombuchaFits from "./components/HopeKombuchaFits";
import ManBehindTheMove from "./components/ManBehindTheMove";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";

function App() {
  const [showFB, setShowFB] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFB(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <div id="our-flavours">
        <AllFlavours />
      </div>
      <HopeKombuchaFits />
      <OurCraftmanship />
      <Ingredients />
      <div id="our-story">
        <ManBehindTheMove />
      </div>
      <Testimonial />
      <OurCustomers />
      <div id="contact">
        <Contact />
      </div>
      {/* <Packaging /> */}
      <Footer />
      {showFB && (
        <>
          <WhatsAppButton />
          <Chatbot />
        </>
      )}
    </>
  );
}

export default App;
