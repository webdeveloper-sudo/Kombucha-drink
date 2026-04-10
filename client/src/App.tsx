import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Showcase from "./components/Showcase";
import Outlets from "./components/Outlets";
import Gallery from "./components/Gallery";

function MainApp() {
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
      <hr className="border-gray-300 container mx-auto" />
      <HopeKombuchaFits />
      <OurCraftmanship />
      <Ingredients />
      <hr className="border-gray-300 container mx-auto" />
      <div id="our-story">
        <ManBehindTheMove />
      </div>
      <hr className="border-gray-300 container mx-auto" />
      <OurCustomers />
      <hr className="border-gray-300 container mx-auto" />
       <div id="client-says">
        <Testimonial />
      </div>
      <hr className="border-gray-300 container mx-auto" />
      <div id="outlets">
        <Outlets />
      </div>
      <hr className="border-gray-300 container mx-auto" />
      <div id="gallery">
        <Gallery />
      </div>
      <hr className="border-gray-300 container mx-auto" />
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/showcase" element={<Showcase />} />
      </Routes>
    </Router>
  );
}

export default App;
