import React from "react";

const About = () => {
  // const info = [
  //   { text: "Years experience", count: "04" },
  //   { text: "Completed Projects", count: "24" },
  //   { text: "Companies Work", count: "06" },
  // ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              Pursuing Master of Computer Application (MCA) at National institute of technology Jamshedpur. After graduation, my ambition is to work in the field of information technology. I'm looking for an opportunity to put my knowledge and skills to use and further develop them.
I enjoy solving technical problems, conducting research, and developing software applications for many platforms. I appreciate engaged with new people and collaborating with them. I am a quick study with a kind, outgoing nature. Furthermore, I can manage working under pressure and dealing with stressful situations.
These abilities will be beneficial to any information technology organization.
              </p>
              {/* <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div> */}
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;