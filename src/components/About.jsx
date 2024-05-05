import React from "react";
import AboutImage from "../images/AboutImage2.jpg";
const About = () => {
  const info = [
    { text: "Years experience", count: "02" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "01" },
  ];
  return (
    <section id="about" className="py-10 ">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-bold">
          About <span className="text-orange-500">Me</span>
        </h3>
        <p className="text-gray-600 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className=" my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              Experienced Full Stack Developer with expertise in MERN (MongoDB, Express.js, React.js, Node.js) stack development. Passionate about creating robust and scalable web applications that deliver exceptional user experiences. With a strong foundation in front-end and back-end development, I possess a comprehensive understanding of the entire software development lifecycle.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold ">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href="./src/assets/Code_a_program.pdf" download>
                <button className="bg-orange-500 text-white rounded-md px-4 py-3">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={AboutImage}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;