

import React, { useState, useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import SocialHandles from "./SocialHandles";
import ProfileData from "../data/profile";
import Wave from "./Wave";
// Assuming you have imported your Navbar component here if it's in a separate file and not in App.js
// import Navbar from "./Navbar"; 

const Profile = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Set loaded state
    const timer = setTimeout(() => setIsLoaded(true), 100);

    // Mouse tracking
    const handleMouseMove = (e) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    // Scroll tracking
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [isMobile]);

  return (
    <section
      id="home"
      className="text-gray-600 bg-darkblue body-font pt-16 lg:min-h-75vh relative overflow-hidden"
      ref={profileRef}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        {/* Mouse gradient overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      {/* Profile Content */}
      <div
        className={`p-5 mx-auto gap-2 flex flex-col md:pt-12 md:px-7 lg:py-20 lg:flex-row-reverse items-center min-h-fit relative z-10 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          transform: isMobile ? "none" : `translateY(${scrollY * 0.1}px)`,
        }}
      >
        {/* Profile Image & Rings */}
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-once="false"
          className="w-5/6 sm:max-w-xs md:max-w-sm lg:max-w-md sm:w-2/6 lg:mr-10 xl:mr-20 lg:p-5 lg:w-1/3 xl:w-1/4 relative group"
          style={{
            transform: isMobile
              ? "none"
              : `translate(${mousePosition.x * 0.02}px, ${
                  mousePosition.y * 0.02
                }px)`,
          }}
        >
          <div className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 animate-ping"></div>
          <div className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-50 transition-opacity duration-1000 z-0 animate-ping animation-delay-1000"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          <img
            className="object-cover object-center bg-[#b9aeb6] border-2 border-white pointer-events-none rounded-full relative z-10 transition-transform duration-500 group-hover:scale-105"
            alt={ProfileData.name}
            src={ProfileData.img}
          />
        </div>

        {/* Info & Buttons */}
        <div className="lg:flex-grow lg:pr-4 lg:mr-14 flex flex-col md:mb-0 items-center text-center xl:scale-105 relative z-20">
          <div data-aos="fade-down" data-aos-duration="800" data-aos-delay="200">
            <SocialHandles />
          </div>

          <h2
            className="title-font md:text-3xl text-2xl mb-4 text-center font-medium text-white relative"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            Hello, I am <span className="text-dark-orange">{ProfileData.name}</span>
          </h2>

          {/* START: Added Separator Line for Classy Look */}
          <div
            className="w-16 h-1 bg-dark-orange mb-4 rounded-full"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="400"
          ></div>
          {/* END: Added Separator Line for Classy Look */}


          <div
            className="text-3xl text-white mb-4 font-medium lg:inline-block relative group"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-delay="500"
          >
            <Typewriter
              words={ProfileData.professions}
              loop={false}
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
              cursorStyle="|"
              cursorColor="#FF7F50"
            />
          </div>

          {ProfileData.info?.map((item, index) => (
            <p
              key={index}
              className="mb-2 text-white text-lg md:text-xl leading-relaxed hover:scale-105 transition-all duration-300 hover:text-cornsilk cursor-default"
            >
              {item}
            </p>
          ))}

          {/* Buttons */}
          <div className="mt-4 flex gap-x-4 md:gap-x-5 justify-center md:justify-between relative z-20">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={750}
              className="inline-block"
            >
              <button className="bg-black text-white py-3 px-7 rounded-full hover:bg-cornsilk hover:text-black transition-all duration-300">
                Hire Me
              </button>
            </Link>

            <a href={ProfileData.resume} target="_blank" rel="noreferrer">
              <button className="bg-dark-orange text-white py-3 px-7 rounded-full hover:bg-cornsilk hover:text-black transition-all duration-300">
                Get Resume
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Wave background behind buttons */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <Wave />
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
};

export default Profile;