import React from 'react';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    
    // Creating a loading state
    Swal.fire({
      title: 'Sending...',
      text: 'Please wait while we send your message.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    const formData = new FormData(event.target);
    // Replace with your Web3Forms Access Key
    formData.append("access_key", "4df3b969-7c15-430e-90d8-e866d20bec7c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully!",
        icon: "success",
        confirmButtonColor: "#e63946"
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      Swal.fire({
        title: "Error!",
        text: data.message || "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonColor: "#e63946"
      });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <motion.section 
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 variants={fadeInUp} className="section-title">
        <span className="highlight_skill">C</span>ontact <span className="highlight_skill">M</span>e
      </motion.h2>
      <motion.p variants={fadeInUp} className="section-subtitle">Get In Touch</motion.p>
      <motion.div variants={fadeInUp} className="dots"><span></span><span></span><span></span></motion.div>
      
      <motion.div 
        className="contact-container"
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
      >
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
          <button type="submit" id="btn3" className="btn">Send Message</button>
        </form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;

