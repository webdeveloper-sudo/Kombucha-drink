import { MapPin, Phone, Mail, Send } from "lucide-react";
import Heading from "./ui/Heading";
import leaficon from "../assets/icons/monstera.png";

const Contact = () => {
  return (
    <section className="relative py-24 bg-[#FAF8F5] overflow-hidden">
      {/* Background Decor */}
      {/* <img
        src={flower}
        alt=""
        className="absolute top-0 right-0 w-1/3 opacity-10 pointer-events-none transform -scale-x-100 rotate-180"
      /> */}

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        {/* Left Side: Contact Form and Info */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <Heading
            title1="Get"
            title2="In Touch"
            subtitle="Connect"
            textAlignment="left"
            titleColor="text-gray-800"
            subtitleColor="text-forest-green"
          />

          <p className="text-gray-600 text-lg font-body mb-10 mt-2">
            Whether you have a question about our flavors, wholesale inquiries,
            or just want to explore a healthier lifestyle, we'd love to hear
            from you.
          </p>

          {/* Contact Details Grid */}
          <div className="flex flex-col gap-3 mb-10 pl-2">
            <div
              className="flex items-center gap-6 group bg-forest-green px-8 py-4"
              style={{
                borderTopLeftRadius: "30px",
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "30px",
                borderTopRightRadius: "0px",
              }}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange text-white group-hover:bg-orange group-hover:text-white transition-all duration-300 shadow-sm">
                <MapPin size={26} />
              </div>
              <div>
                <h4 className="text-white font-bold text-xl font-heading mb-1">
                  Our Location
                </h4>
                <span className="text-white/90 font-body text-md">
                  123 Wellness Blvd, Green Valley, CA
                </span>
              </div>
            </div>

            <div
              className="flex items-center gap-6 group bg-forest-green px-8 py-4"
              style={{
                borderTopLeftRadius: "30px",
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "30px",
                borderTopRightRadius: "0px",
              }}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange text-white group-hover:bg-orange group-hover:text-white transition-all duration-300 shadow-sm">
                <Phone size={26} />
              </div>
              <div>
                <h4 className="text-white font-bold text-xl font-heading mb-1">
                  Phone Number
                </h4>
                <span className="text-white/90 font-body text-md">
                  +91 90000 00000
                </span>
              </div>
            </div>

            <div
              className="flex items-center gap-6 group bg-forest-green px-8 py-4"
              style={{
                borderTopLeftRadius: "30px",
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "30px",
                borderTopRightRadius: "0px",
              }}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange text-white group-hover:bg-orange group-hover:text-white transition-all duration-300 shadow-sm">
                <Mail size={26} />
              </div>
              <div>
                <h4 className="text-white font-bold text-xl font-heading mb-1">
                  Email Address
                </h4>
                <span className="text-white/90 font-body text-md">
                  hello@hopekombucha.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form Card & Decorative Image */}
        <div className="w-full lg:w-1/2 ">
          {/* The Contact Form Container */}
          <div
            className="bg-[#FAF8F5] border border-forest-green w-full p-8 sm:p-10 shadow-xl relative z-20"
            style={{
              borderTopLeftRadius: "60px",
              borderBottomLeftRadius: "0px",
              borderBottomRightRadius: "60px",
              borderTopRightRadius: "0px",
            }}
          >
            <h3 className="text-3xl font-heading font-bold text-gray-800 mb-8 flex items-center gap-3">
              <img
                src={leaficon}
                className="w-8 h-8 rounded-full bg-white/20 p-1"
                alt="leaf icon"
              />
              Send Us a Message
            </h3>
            <form className="flex flex-col gap-5 font-body">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/10 border border-gray-400 text-gray-800 placeholder-gray-600 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange focus:bg-white/15 transition-all outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white/10 border border-gray-400 text-gray-800 placeholder-gray-600 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange focus:bg-white/15 transition-all outline-none"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full bg-white/10 border border-gray-400 text-gray-800 placeholder-gray-600 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange focus:bg-white/15 transition-all resize-none outline-none"
                ></textarea>
              </div>
              <button
                type="button"
                className="group flex items-center justify-center gap-3 bg-orange hover:bg-[#e67727] text-white font-bold text-lg rounded-xl px-6 py-4 transition-all mt-4 hover:shadow-lg"
              >
                Submit Now
                <Send
                  size={20}
                  className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </form>
          </div>

          {/* Decorative Packging Image floating behind */}
          {/* <img 
            src={packaging} 
            className="absolute -top-16 -right-12 w-3/4 max-w-[350px] object-contain -z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] opacity-90 hidden md:block"
            alt="Products Background" 
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
