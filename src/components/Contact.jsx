import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
// import image from "../assets/contact-bg-image.png"

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    user_email: "",
    user_name: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xu9x0jb",
        "template_u1ph29g",
        form.current,
        "pmabxszPgerkty_3z"
      )
      .then(
        (result) => {
          alert("Form Submitted Successfully!")
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

      setFormData({
        email: '',
        name: '',
        message: '',
      });
  };

  return (
    <div className="contact-section-page">
      <div className="contact-us" id="contact-me-sec">
        {/* <img className="contact-bg-img" src= {image} alt="Contact us Background Image" /> */}
        <div className="heading-description">
          <h1>Lets Work together </h1>
          <p>
            Ready to bring your vision to life? Whether you're seeking
            exceptional 3D renders, captivating 3D animations, meticulously
            crafted furniture layouts, precise architectural designs, or
            immersive interior consultations, I'm here to collaborate with you.
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className="name-email">
            <div className="user-email">
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={"Type your valid email"}
              />
            </div>

            <div className="user-name">
              <label htmlFor="">Name</label>
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                required
                placeholder={"Type your name"}
              />
            </div>
          </div>

          <div>
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={"Type your Message"}
              cols="30"
              rows="5"
            ></textarea>
          </div>

          <button className="submit-btn" type="submit" value="Send">Submit</button>
          {/* <input type="button">Submit</input> */}
        </form>
      </div>

      <div className="checkout-work">
        <p>
          Checkout my latest <Link to={"/3d-animations"}> 3D Animations </Link>{" "}
          and
          <Link to={"/3d-renders"}> 3D Renders</Link>.
        </p>
      </div>
    </div>
  );
};

export default Contact;
