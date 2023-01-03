import React from "react";
import "./project.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
const Projects= ({ id }) => {
  return (
    <>
      <div className="tt-main" id={id}>
         <Swiper
          modules={[Autoplay, Pagination]}
          style={{ marginBottom: "1rem" }}
          className="swipers"
          autoplay={{ delay: 70000 }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
        <div className="ty-title" data-aos="fade-down" data-aos-duration="1000">
          <span>Recent Projects</span>
            </div>
            
        <div className="pt-project">
          <div className="pt-too">
          <span>ICCT STUDENT PORTAL</span>
                
                <p>We build Student Portal App in our thesis, to improve our portal in shcool. <br />ICCT Online Student Portal is an online gateway where students can access the<br /> registration/application system for new students, view grades, and update contact information. </p>
                <div className="row-btn">
                <div className="pt-btn">Html</div>
                <div className="pt-btn1">Css</div>
                <div className="pt-btn2">JavaScript</div>
                <div className="pt-btn3">React Js</div>
                <div className="pt-btn4">Sass</div>
     </div></div>
        <div className="pt-pic" data-aos="zoom-in-right" data-aos-duration="1000">
        <img src="https://res.cloudinary.com/dkg6aexz0/image/upload/v1670487274/Group_2_rokbhe.png" alt="" className="img1"/>
          </div>
            </div>
       


        
     
          </SwiperSlide>
           <SwiperSlide>
        <div className="ty-title" >
          <span>Recent Projects</span>
        </div>
        <div className="pt-project">
          <div className="pt-too" data-aos="zoom-in-right" data-aos-duration="1000">
          <span>Soto Grande Cebu Hotel</span>
          <p>The name SotoGrande is derived from the two words, "Soto" and "Grande". <br/>Soto means Orchards or group of trees while Grande means luxurious or majestic.<br/> Sotogrande operates as a Hotel & Resort with new spacious rooms and state of the<br/> art facilities.
<div className="row-btn1">
                <div className="pt-btn">Html</div>
                <div className="pt-btn1">Css</div>
                <div className="pt-btn2">JavaScript</div>
                <div className="pt-btn3">React Js</div>
                <div className="pt-btn4">Sass</div>
     </div>
</p>
     </div>
        <div className="pt-pic" data-aos="zoom-in-right" data-aos-duration="1000">
        <img src="https://res.cloudinary.com/dkg6aexz0/image/upload/v1669883046/projects_recent_r1ulcf.png" alt="" className="img"/>
          </div>
            </div>
            </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Projects;
