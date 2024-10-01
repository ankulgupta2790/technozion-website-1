import React from "react";
import "./about.css";
import spreelogo from "./springspree2.png";
import rasengan from "./Rasengan.png";
import nitw from "./nitw.jpg";

export const About = () => {
  return (
    <div className="">
      <div className="w-full p-4 bg-gradient-to-t to-black text-white">
        {/* <div className="about-spree flex flex-row flex-wrap justify-center justify-items-center items-center gap-4 p-4 mb-8">
          <br />
          <h1 className="flex-[100%] text-center text-4xl font-bold uppercase bg-gradient-to-r from-[#FFFFFF] to-[#F7CA17] inline-block text-transparent pb-5 bg-clip-text">
            About SpringSpree
          </h1>
          <div className="sm:w-[100%] md:w-[45%] flex justify-center items-center">
            <img
              className="sm:w-[156px] lg:w-[296px] h-auto flex-shrink-1"
              src={spreelogo}
              alt="spreelogo"
            />
          </div>
          <div className="about-content sm:w-[100%] md:w-[45%]">
            <span className="text-[#ca85b8] font-bold">
              SpringSpree, NIT Warangal's annual cultural festival
            </span>
            , started in 1978 as a refreshing break from classes. Now, after 45
            years, it's renowned as one of the nation's best cultural festivals,
            attracting participants from all corners. Over time, we've hosted
            famous artists, enriching the festival with their esteemed presence
            and performances.
          </div>
        </div> */}
        <div className="flex mx-10  min-h-screen flex-wrap justify-center justify-items-center items-center">
          <h1 className="flex-[100%] text-center text-4xl font-bold uppercase bg-gradient-to-r from-[#FFFFFF] to-[#F7CA17] inline-block text-transparent  bg-clip-text">
            Welcome to NITW
          </h1>
          <div className="bg-red p-10 h-full rounded-md hover:scale-105 duration-300  flex flex-flow-reverse  flex-wrap justify-center justify-items-center gap-4 items-center">
            <div className="sm:w-[100%] md:w-[45%] flex justify-center items-center">
              <img
                className="sm:w-[330px] rounded-md lg:w-[590px] h-auto flex-shrink-1 "
                src={nitw}
                alt="themelogo"
              />
            </div>
            <div className="theme-content sm:w-[100%] md:w-[45%] text-lg">
              Since its inception in the year 1959 as Regional Engineering
              College Warangal, NIT Warangal has culminated into a premier
              technical institute in India with its alumni contributing
              profoundly to the engineering industry as well as ascending to
              unprecedented heights in finance, art, culture, politics and
              various other professional disciplines. At NIT Warangal, the
              faculty and students strive towards not only emulating but
              exceeding the legacy of the alumni and the institute, by
              immaculately professing the idea of holistic development of
              students. Along with their core and rudimentary engineering
              disciplines, the concepts of art, culture and heritage also have a
              profuse impact on the lives of the students pursuing their
              education at this institute of national importance <br />
            </div>
          </div>
        </div>
        <div className="about-spree flex flex-flow-reverse flex-row-reverse flex-wrap justify-center justify-items-center items-center gap-4 p-4 mb-10">
          <h1 className="flex-[100%] text-center font-bold text-4xl uppercase bg-gradient-to-r from-[#FFFFFF] to-[#F7CA17] inline-block text-transparent pb-5 bg-clip-text">
            About Technozion
          </h1>
          <div className="sm:w-[100%] md:w-[45%] flex justify-center items-center">
            <img
              className="sm:w-[330px] lg:w-[590px] h-auto flex-shrink-1 "
              src={rasengan}
              alt="themelogo"
            />
          </div>
          <div className="theme-content sm:w-[100%] md:w-[45%]">
            NIT Warangal celebrates its heart and soul in the form of
            TECHNOZION, the annual technical festival, organized by student
            fraternity at National Institute of Technology, Warangal.
            Established in 2006, Technozion has been at the forefront of
            fostering technological advancements and providing a platform for
            young minds to showcase their brilliance at the largest technical
            fest of India. Technozion has grown exponentially to become the
            largest technical fest in south India. It includes the conduction of
            60+ top class events with the aim of gathering engineering students
            from various regions and providing them opportunity to showcase
            their abilities and talents. With every passing year, the events at
            Technozion grow bigger and better. As we eagerly anticipate the
            unfolding chapters, get ready for the latest installment in the saga
            - Technozion ’23, themed 'INGENIOUS.'
          </div>
        </div>
        <div className="flex-flow-reverse flex flex-row-reverse flex-wrap justify-center justify-items-center items-center gap-4 p-4 mb-10">
          <h1 className="flex-[100%] text-center font-bold text-4xl uppercase bg-gradient-to-r from-[#FFFFFF] to-[#F7CA17] inline-block text-transparent pb-5 bg-clip-text">
            From Director
          </h1>
          <div className="sm:w-[100%] md:w-[45%] flex justify-center items-center">
            <img
              className="sm:w-[330px] lg:w-[590px] h-auto flex-shrink-1 "
              src={rasengan}
              alt="themelogo"
            />
          </div>
          <div className="theme-content sm:w-[100%] md:w-[45%]">
            As the director of NIT Warangal, I take this opportunity to Invite
            you to be an integral part of our Technical fest Technozion. TZ is
            our three-day annual technical festival that aims to provide a
            platform for students to gather, interact, share and showcase their
            technical skills. Through this we seek to provide a platform for
            emerging young talents to display their talent in a plethora of
            events. Being a part of our festival will bring you in touch with
            the best minds across the nation and gives you an opportunity to
            nurture and identify excellence. We look forward to providing you
            with good brand visibility among the student community. I am very
            optimistic that with your goodwill and association, Technozion will
            reach greater heights.
          </div>
        </div>
      </div>
    </div>
  );
};
