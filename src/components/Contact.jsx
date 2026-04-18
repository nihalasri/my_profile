import React from 'react';
import Swal from 'sweetalert2';

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

  return (
    <section id="contact">
      <h2 className="section-title"><span className="highlight_skill">C</span>ontact<span className="highlight_skill">M</span>e</h2>
      <p className="section-subtitle">Get In Touch</p>
      <div className="dots"><span></span><span></span><span></span></div>
      <div className="contact-container">
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
          <button type="submit" id="btn3" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
