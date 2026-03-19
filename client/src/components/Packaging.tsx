import React from 'react'
import packaging from "../assets/images/packaging.png"
import flower from "../assets/images/bg/flower.png"

const Packaging = () => {
  return (
    <section 
      className="w-full relative py-20 pb-20"
    >
   
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-16 px-6 relative z-10">
        {/* Right Side: Image */}
        <div className="flex-1 w-full flex h-[500px] justify-center md:justify-start">
          <div 
            className="w-[90%] rounded-2xl  md:w-[110%] max-w-[650px] relative overflow-hidden"
       
          >
            <img src={packaging} alt="Kombucha Packaging in cooler" style={{borderRadius:"30px"}} className="w-full h-full object-cover scale-[1.03]" />
          </div>
        </div>

        {/* Left Side: Text */}
        <div className="flex-1 w-full flex flex-col justify-center text-[#2C331E] md:pl-10">
          <h2 className="text-4xl md:text-5xl lg:text-[54px] font-heading font-semibold mb-8 tracking-tight">Packaging & Storage</h2>
          
          <ul className="space-y-4 mb-12 font-body text-[1.15rem] text-[#4A3D36]">
            <li className="flex items-start">
              <span className="mr-4 mt-2 w-1.5 h-1.5 rounded-full bg-[#7D5A50] flex-shrink-0"></span>
              330 ml sealed glass bottle
            </li>
            <li className="flex items-start">
              <span className="mr-4 mt-2 w-1.5 h-1.5 rounded-full bg-[#7D5A50] flex-shrink-0"></span>
              Naturally effervescent
            </li>
            <li className="flex items-start">
              <span className="mr-4 mt-2 w-1.5 h-1.5 rounded-full bg-[#7D5A50] flex-shrink-0"></span>
              Best served chilled
            </li>
          </ul>

          <h3 className="text-3xl md:text-[38px] font-heading font-semibold mb-6 tracking-tight">Storage Instructions:</h3>
          
          <ul className="space-y-4 font-body text-[1.15rem] text-[#4A3D36]">
            <li className="flex items-start">
              <span className="mr-4 mt-2 w-1.5 h-1.5 rounded-full bg-[#7D5A50] flex-shrink-0"></span>
              Keep refrigerated
            </li>
            <li className="flex items-start">
              <span className="mr-4 mt-2 w-1.5 h-1.5 rounded-full bg-[#7D5A50] flex-shrink-0"></span>
              Store away from direct sunlight
            </li>
            <li className="flex items-start">
              <span className="mr-4 mt-2 w-1.5 h-1.5 rounded-full bg-[#7D5A50] flex-shrink-0"></span>
              Maintain cold chain for optimal freshness
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Packaging