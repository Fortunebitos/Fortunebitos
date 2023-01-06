import React, {useState} from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";
const Contact = ({ id }) => {
     const [show, setShow] = useState(false);

  const [bdatas, setBdatas] = useState({
    coment: "",
    name: "",
  
    uGmail: "",
    select: "",
  });

  const { coment,  name, uGmail, select } = bdatas;

  const onHandleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setBdatas({ ...bdatas, [name]: value });
  };

  let datas = {
    coment: coment,
  
  name: name,
    uGmail: uGmail,
    select: select,
   
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send("service_u72w9m7", "template_onhz8er", datas, "XnZuPLhuMpPQh2z20")
      .then(
        () => {
          alert("Success");
          setShow(!show);
        },
        (error) => {
          alert(error);
        }
      );
  };
  return (
    <>
      <div className="ct-main" id={id}>
        <div className="ct-title" data-aos="zoom-in-down" data-aos-duration="1000">
          <span>Contact</span>
        </div>

        <div className="ct-row">
          <div className="ct-roww" data-aos="zoom-out-up">
            <span>
              <b>Pasig,</b> Philippines
            </span>
            <p className="np">Napico Manggahan</p>
            <p>(+63) 9615 690 650</p>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqVNpfqQGTNMfpWKNSGXCHztWTlGPcMlwJxPCfNCjpRcjvQbQJQTKDbPhQQLHHffcskXqB"
              className="ct-ftn"
            >
              <p className="gmail">Fortunebitoss@gmail.com</p>
            </a>
          </div>

          <div className="ct-column">
            <div className="ct-tow" data-aos="fade-down">
              <input type="name" name="name" placeholder="Name"  value={name}
                    onChange={onHandleChange}/>
              <input type="name" name="uGmail" placeholder="Email"  value={uGmail}
                    onChange={onHandleChange} />
            </div>
            <div className="ct-sub" data-aos="zoom-out-down">
              <input
                type="name"
                name="select"
                placeholder="Subject (Optional)"
                 value={select}
                    onChange={onHandleChange}
              />
            </div>
            <div className="ct-comment" data-aos="fade-up">
              <textarea type="text" name="coment" placeholder="Message"  value={coment}
                    onChange={onHandleChange}/>
            </div>
            <div className="ct-btn" onClick={sendEmail} >Contact Me</div>
          </div>
        </div>
        <div className="footer-row" >
          <span>© Fortune Bitos Jr. 2022.</span>

          <div className="footer-title">
            <a href="https://github.com/Fortunebitos">
              <img
                src="https://res.cloudinary.com/dkg6aexz0/image/upload/v1669958116/GitHub_1_ptgu1r.png"
                alt=""
                className="td-img"
              />
            </a>
            <a href="https://www.tiktok.com/@tfg.lolita?_t=8XplAOzEKLy&_r=1">
              <img
                src="https://res.cloudinary.com/dkg6aexz0/image/upload/v1669958121/TikTok_1_yd5dei.png"
                alt=""
                className="td-img"
              />
            </a>
            <a href="https://www.facebook.com/mtc.kashimaro?mibextid=ZbWKwL">
              <img
                src="https://res.cloudinary.com/dkg6aexz0/image/upload/v1669958124/Vector_2_vpegbb.png"
                alt=""
                className="td-img1"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
