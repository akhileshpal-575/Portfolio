import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";
import project4 from "../assets/project-4.jpg";
import project5 from "../assets/project-5.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination} from "swiper/modules";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Movie App",
      github_link: "https://github.com",
      live_link: "https://netlify.app",
    },
    {
      img: project2,
      name: "Job search Web App",
      github_link: "https://github.com",
      live_link: "https://netlify.app",
    },
    {
      img: project3,
      name: "Highking",
      github_link: "https://github.com",
      live_link: "https://netlify.app",
    },
    {
      img: project4,
      name: "React Nav",
      github_link:
        "https://github.com",
      live_link: "https://netlify.app",
    },
    {
      img: project5,
      name: "Vue Country",
      github_link: "https://github.com",
      live_link: "https://netlify.app",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center justify-center relative">
        <div className="lg:w-11/12 w-full">
          <Swiper
            slidesperview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
