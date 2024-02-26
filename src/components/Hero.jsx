import React from "react";
import hero from "../assets/hero.jpg";
const Hero = () => {
  const social_media = [
    "logo-instagram",
    "logo-facebook",
    "logo-linkedin",
    "logo-twitter",
    "logo-github"
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex mt-5 py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
      <img src={hero} alt="" className="w-1/3 h-full object-cover rounded-" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Akhilesh Pal</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
              <a href="./src/assets/myResume.pdf" download>
              <button className="btn-primary mt-8">Download CV</button>
              </a>
        
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
                <div
                className="text-gray-600 hover:text-white cursor-pointer ">
                <a href="https://www.instagram.com/_akhileshpal" alt="instagram">
                <ion-icon name="logo-instagram"></ion-icon>
                </a>
                </div>
                <div
                className="text-gray-600 hover:text-white cursor-pointer ">
                <a href="https://www.facebook.com/CMakhileshpal">
                <ion-icon name="logo-facebook"></ion-icon>
                </a>
                </div>
                <div
                className="text-gray-600 hover:text-white cursor-pointer ">
                <a href="https://www.linkedin.com/in/akhileshpal068">
                <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                </div>
                <div
                className="text-gray-600 hover:text-white cursor-pointer ">
                <a href="https://www.x.com/_akhileshpal">
                <ion-icon name="logo-twitter"></ion-icon>
                </a>
                </div>
                <div
                className="text-gray-600 hover:text-white cursor-pointer ">
                <a href="https://github.com/akhileshpal-575">
                <ion-icon name="logo-github"></ion-icon>
                </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;