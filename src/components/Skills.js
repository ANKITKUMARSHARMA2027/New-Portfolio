import React, { useState, useEffect, useRef } from "react";
import SkillsData from "../data/skills";

const Skills = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  
  // Split the skills data into two rows
  const halfLength = Math.ceil(SkillsData.length / 2);
  const firstRowSkills = [...SkillsData.slice(0, halfLength), ...SkillsData.slice(0, halfLength)];
  const secondRowSkills = [...SkillsData.slice(halfLength), ...SkillsData.slice(halfLength)];
  
  // Auto-scroll effect for both rows
  useEffect(() => {
    const scrollContainer1 = scrollRef1.current;
    const scrollContainer2 = scrollRef2.current;
    if (!scrollContainer1 || !scrollContainer2) return;
    
    let scrollAmount = 0;
    const scrollSpeed = 0.5; // Adjust for faster/slower scrolling
    
    const scroll = () => {
      if (!isPaused) {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= scrollContainer1.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer1.scrollLeft = scrollAmount;
        scrollContainer2.scrollLeft = scrollAmount;
      }
      requestAnimationFrame(scroll);
    };
    
    const animationId = requestAnimationFrame(scroll);
    
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);
  
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="p-4 pt-0 mt-5 mx-auto md:p-5 md:mx-20 lg:mx-32 xl:mx-56">
        <div
          id="skills"
          className="flex flex-wrap w-full mb-4 flex-col justify-center text-center md:mb-7"
        >
          <h1 className="sm:text-4xl text-3xl font-medium mb-2 text-gray-900">
            Skills
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg font-medium leading-relaxed text-dark-orange"
          >
            My Technical Expertise
          </p>
        </div>
        
        <div 
          className="relative py-6 border-t-gray-200 border-2 rounded-md md:shadow-md"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* First Row */}
          <div 
            ref={scrollRef1}
            className="flex overflow-x-hidden scrollbar-hide mb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {firstRowSkills.map((skill, index) => {
              return (
                <div
                  data-aos="zoom-in-up"
                  data-aos-duration="1500"
                  data-aos-once="false"
                  data-aos-delay={index * 50} // Stagger the animation
                  key={index}
                  className="flex flex-col w-20 h-20 items-center justify-center md:w-24 md:h-24 lg:m-3 xl:m-5 mx-auto flex-shrink-0 group border border-gray-300 rounded-lg p-2 hover:border-dark-orange transition-colors duration-300"
                >
                  <div className="relative">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="m-2 object-cover w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 animate-float"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
                  </div>
                  <p className="font-medium text-sm md:text-base transition-all duration-300 group-hover:text-dark-orange group-hover:scale-105">
                    {skill.name}
                  </p>
                </div>
              );
            })}
          </div>
          
          {/* Second Row */}
          <div 
            ref={scrollRef2}
            className="flex overflow-x-hidden scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {secondRowSkills.map((skill, index) => {
              return (
                <div
                  data-aos="zoom-in-up"
                  data-aos-duration="1500"
                  data-aos-once="false"
                  data-aos-delay={index * 50} // Stagger the animation
                  key={index + halfLength}
                  className="flex flex-col w-20 h-20 items-center justify-center md:w-24 md:h-24 lg:m-3 xl:m-5 mx-auto flex-shrink-0 group border border-gray-300 rounded-lg p-2 hover:border-dark-orange transition-colors duration-300"
                >
                  <div className="relative">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="m-2 object-cover w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 animate-float"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
                  </div>
                  <p className="font-medium text-sm md:text-base transition-all duration-300 group-hover:text-dark-orange group-hover:scale-105">
                    {skill.name}
                  </p>
                </div>
              );
            })}
          </div>
          
          {/* Gradient overlays for fade effect at edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Skills;