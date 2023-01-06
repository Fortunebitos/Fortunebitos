import React from "react";
import "./testimony.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
const Testimony = ({ id }) => {
  return (
    <>
      <div className="ty-main" id={id}>
         <Swiper
          modules={[Autoplay, Pagination]}
          style={{ marginBottom: "1rem" }}
          className="swipers"
          autoplay={{ delay: 70000 }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
        <div className="ty-title" data-aos="fade-down" data-aos-duration="1000">
          <span>Testimonies</span>
        </div>
        <div className="ty-border"></div>
        <div className="ty-row" data-aos="zoom-in-right" data-aos-duration="1000">
          <p className="ty-text">
            <span>Mimis</span>
            <br /> Developer
          </p>
          <p>
            Mr. Fort has been an attentive and patient person to work with.
            <br /> I’m thankfull that found someone facing t
            echnical issue
          </p>
            </div>
         
        <div className="ty-border"></div>
        <div className="ty-row" data-aos="zoom-in-right" >
          <p className="ty-text"> 
            <span>Cleofe</span>
            <br />
            Graphics Designer
          </p>
          <p>
            Mr. Fort magaling siya mag deisgn at mag manage ng client.
             I’m <br />thankfull that found someone facing my problems.
          </p>
            </div>
          </SwiperSlide>
           <SwiperSlide>
        <div className="ty-title" >
          <span>Testimonies</span>
        </div>
        <div className="ty-border"></div>
        <div className="ty-row" >
          <p className="ty-text">
            <span>Xjeter</span>
            <br /> Vlogger
          </p>
          <p>
          Maganda siya gumawa ng monogram logo lalo na sa color combination.
            <br /> I am very thankfull na nagpagawa ako sa kanya.
          </p>
            </div>
         
        <div className="ty-border"></div>
        <div className="ty-row" >
          <p className="ty-text">
            <span>Sam</span>
            <br />
      Tiktoker
          </p>
          <p>
           Grabi ang galing niya mag design ng banner sa youtube ko.
         Madali din     <br />siyang kausap, at madali mo siyang ma contact.
          </p>
            </div>
          </SwiperSlide>
           <SwiperSlide>
        <div className="ty-title" >
          <span>Testimonies</span>
        </div>
        <div className="ty-border"></div>
        <div className="ty-row" >
          <p className="ty-text">
            <span>Maharlika Koders</span>
            <br /> Programmer Team
          </p>
          <p>
            Mr. Fort has been good in creating monogram logo.
            <br /> I am very thankfull sa ginawa niyang monogram logo for my Group.
          </p>
            </div>
         
        <div className="ty-border"></div>
        <div className="ty-row" >
          <p className="ty-text">
            <span>Dong Pekto</span>
            <br />
      Vlogger
          </p>
          <p>
           Mura yung  singil niya sa pag gawa .
            <br /> kung di dahil sa  kanya wala akong banner sa facebook page ko.
          </p>
            </div>
            </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Testimony;
