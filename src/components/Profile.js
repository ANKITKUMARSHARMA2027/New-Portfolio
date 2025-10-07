



// import React, { useState, useEffect, useRef } from "react";
// import { Typewriter } from "react-simple-typewriter";
// import { Link } from "react-scroll";
// import SocialHandles from "./SocialHandles";
// import ProfileData from "../data/profile";
// import Wave from "./Wave";

// const Profile = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [scrollY, setScrollY] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const profileRef = useRef(null);
  
//   useEffect(() => {
//     // Check if mobile
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
    
//     // Set loaded state
//     const timer = setTimeout(() => setIsLoaded(true), 100);
    
//     // Mouse tracking
//     const handleMouseMove = (e) => {
//       if (!isMobile) {
//         setMousePosition({ x: e.clientX, y: e.clientY });
//       }
//     };
    
//     // Scroll tracking
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };
    
//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('scroll', handleScroll);
    
//     return () => {
//       window.removeEventListener('resize', checkMobile);
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('scroll', handleScroll);
//       clearTimeout(timer);
//     };
//   }, [isMobile]);

//   return (
//     <section
//       id="home"
//       className="text-gray-600 bg-darkblue body-font pt-16 lg:min-h-75vh relative overflow-hidden"
//       ref={profileRef}
//     >
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
//         <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
//         <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
//         {/* Grid overlay */}
//         <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
//         {/* Animated gradient overlay */}
//         <div 
//           className="absolute inset-0 opacity-30"
//           style={{
//             background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
//           }}
//         ></div>
//       </div>
      
//       <div className={`p-5 mx-auto gap-2 flex flex-col md:pt-12 md:px-7 lg:py-20 lg:flex-row-reverse items-center min-h-fit relative z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
//         style={{
//           transform: isMobile ? 'none' : `translateY(${scrollY * 0.1}px)`
//         }}
//       >
//         <div
//           data-aos="zoom-in-up"
//           data-aos-duration="1000"
//           data-aos-once="false"
//           className="w-5/6 sm:max-w-xs md:max-w-sm lg:max-w-md sm:w-2/6 lg:mr-10 xl:mr-20 lg:p-5 lg:w-1/3 xl:w-1/4 relative group"
//           style={{
//             transform: isMobile ? 'none' : `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
//           }}
//         >
//           {/* Animated rings around profile image */}
//           <div className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 animate-ping"></div>
//           <div className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-50 transition-opacity duration-1000 z-0 animate-ping animation-delay-1000"></div>
          
//           {/* Glow effect */}
//           <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          
//           {/* Profile image */}
//           <img
//             className="object-cover object-center bg-[#b9aeb6] border-2 border-white pointer-events-none rounded-full backdrop-contrast-200 backdrop-brightness-200 relative z-10 transition-transform duration-500 group-hover:scale-105"
//             alt={ProfileData.name}
//             src={ProfileData.img}
//           />
          
//           {/* Floating elements */}
//           <div className="absolute top-0 right-0 w-8 h-8 bg-dark-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce"></div>
//           <div className="absolute bottom-0 left-0 w-6 h-6 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce animation-delay-500"></div>
//         </div>
        
//         <div className="lg:flex-grow lg:pr-4 lg:mr-14 flex flex-col md:mb-0 items-center text-center xl:scale-105">
//           <div data-aos="fade-down" data-aos-duration="800" data-aos-delay="200">
//             <SocialHandles />
//           </div>
          
//           <h2
//             data-aos="zoom-in-up"
//             data-aos-duration="1500"
//             data-aos-delay="300"
//             data-aos-once="false"
//             className="title-font md:text-3xl text-2xl mb-4 text-center font-medium text-white relative"
//           >
//             {/* Animated letters */}
//             <span className="inline-block hover:animate-bounce transition-transform">H</span>
// <span className="inline-block hover:animate-bounce transition-transform" style={{animationDelay: '0.05s'}}>e</span>
// <span className="inline-block hover:animate-bounce transition-transform" style={{animationDelay: '0.1s'}}>l</span>
// <span className="inline-block hover:animate-bounce transition-transform" style={{animationDelay: '0.15s'}}>l</span>
// <span className="inline-block hover:animate-bounce transition-transform" style={{animationDelay: '0.2s'}}>o</span>
// <span className="inline-block hover:animate-bounce transition-transform" style={{animationDelay: '0.25s'}}>,</span>
// <span className="inline-block" style={{animationDelay: '0.3s', width: '0.5em'}}></span>
// <span className="inline-block hover:animate-bounce transition-transform" style={{animationDelay: '0.35s'}}>I</span>
// <span className="inline-block" style={{animationDelay: '0.4s', width: '0.5em'}}></span>
// <span className="inline-block hover:animate-bounce transition-transform" style={{animationDelay: '0.45s'}}>a</span>
// <span className="inline-block hover:animate-bounce transition-transform" style={{animationDelay: '0.5s'}}>m</span>
// <span className="inline-block" style={{animationDelay: '0.55s', width: '0.5em'}}></span>
// <span className="text-dark-orange inline-block hover:animate-pulse transition-transform">{ProfileData.name}</span>
            
//             {/* Underline animation */}
//             <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-dark-orange to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
//           </h2>
          
//           <div
//             data-aos="zoom-in-up"
//             data-aos-duration="1500"
//             data-aos-delay="500"
//             data-aos-once="false"
//             className="text-3xl text-white mb-4 font-medium lg:inline-block relative group"
//           >
//             <span className="absolute -left-3 top-0 w-1 h-full bg-gradient-to-b from-transparent via-dark-orange to-transparent animate-pulse"></span>
//             &nbsp;
//             <Typewriter
//               words={ProfileData.professions}
//               loop={false}
//               typeSpeed={100}
//               deleteSpeed={100}
//               delaySpeed={1000}
//               cursorStyle="|"
//               cursorColor="#FF7F50"
//             />
            
//             {/* Glow effect on hover */}
//             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300"></div>
//           </div>
          
//           {ProfileData.info?.map((item, index) => (
//             <p
//               key={index}
//               data-aos="fade-up"
//               data-aos-duration="2000"
//               data-aos-delay={700 + index * 200}
//               data-aos-once="false"
//               className="mb-2 text-white text-lg md:text-xl leading-relaxed hover:scale-105 transition-all duration-300 hover:text-cornsilk cursor-default relative group"
//             >
//               {item}
//               <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cornsilk to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
//             </p>
//           ))}
          
//           <div
//             data-aos="fade-up"
//             data-aos-duration="2000"
//             data-aos-delay={900 + (ProfileData.info?.length || 0) * 200}
//             data-aos-once="false"
//             className="mt-4 flex gap-x-4 md:gap-x-5 justify-center md:justify-between"
//           >
//             <button className="group relative inline-flex font-medium text-white bg-black border-2 border-white py-3 px-7 focus:outline-none hover:bg-cornsilk hover:border-dark-orange hover:text-black rounded-full text-md xl:px-10 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cornsilk/50 overflow-hidden">
//               {/* Shimmer effect */}
//               <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></span>
              
//               {/* Button content */}
//               <Link
//                 to="contact"
//                 spy={true}
//                 smooth={true}
//                 offset={-100}
//                 duration={750}
//                 className="relative z-10 flex items-center"
//               >
//                 <span>Hire Me</span>
//                 <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               </Link>
              
//               {/* Ripple effect */}
//               <span className="absolute inset-0 rounded-full bg-white opacity-0 group-active:opacity-30 transition-opacity"></span>
//             </button>
            
//             <a href={ProfileData.resume} target="_blank" rel="noreferrer">
//               <button className="group relative inline-flex font-medium text-white bg-dark-orange border-2 border-dark-orange py-3 px-7 focus:outline-none hover:bg-cornsilk hover:border-dark-orange hover:text-black rounded-full text-md xl:px-10 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-dark-orange/50 overflow-hidden">
//                 {/* Shimmer effect */}
//                 <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></span>
                
//                 {/* Button content */}
//                 <span className="relative z-10 flex items-center">
//                   <span>Get Resume</span>
//                   <svg className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
//                   </svg>
//                 </span>
                
//                 {/* Ripple effect */}
//                 <span className="absolute inset-0 rounded-full bg-white opacity-0 group-active:opacity-30 transition-opacity"></span>
//               </button>
//             </a>
//           </div>
          
//           {/* Floating elements for desktop */}
//           {!isMobile && (
//             <div className="hidden lg:block absolute top-10 right-10 w-20 h-20 bg-white opacity-10 rounded-full blur-xl animate-pulse"></div>
//           )}
//           {!isMobile && (
//             <div className="hidden lg:block absolute bottom-10 left-10 w-16 h-16 bg-dark-orange opacity-10 rounded-full blur-xl animate-pulse animation-delay-2000"></div>
//           )}
//         </div>
//       </div>
      
//       <div className="absolute bottom-0 left-0 right-0 z-20">
//         <Wave />
//       </div>
      
//       <style jsx>{`
//         @keyframes blob {
//           0% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//           100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//         .animation-delay-1000 {
//           animation-delay: 1s;
//         }
//         .animation-delay-500 {
//           animation-delay: 0.5s;
//         }
//         .bg-grid-pattern {
//           background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
//                             linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
//           background-size: 20px 20px;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Profile;







import React, { useState, useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import SocialHandles from "./SocialHandles";
import ProfileData from "../data/profile";
import Wave from "./Wave";

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
          background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
};

export default Profile;
