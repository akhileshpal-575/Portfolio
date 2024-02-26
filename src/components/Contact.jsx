import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [formFilled, setFormFilled] = useState(false);

  const emailNotify = () => {
    if (formFilled) {
      toast.success("Message Sent");
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_6lu47er', 'template_x7qc0vb', form.current, {
        publicKey: 'hXTi4HLnJi5stO7ve',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setFormFilled(true); // Set formFilled to true when the form is successfully submitted
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto text-gray-300"
        >
          <form ref={form} onSubmit={sendEmail} className="flex flex-col flex-1 gap-5">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              onChange={() => setFormFilled(false)} // Reset formFilled when form field changes
            />
            <input
              type="Email"
              name="from_email"
              placeholder="Your Email Address"
              required
              onChange={() => setFormFilled(false)} // Reset formFilled when form field changes
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={10}
              onChange={() => setFormFilled(false)} // Reset formFilled when form field changes
            ></textarea>
            <div className="flex justify-center items-center">
              <button onClick={emailNotify} className="btn-primary w-fit ">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
