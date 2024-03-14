import React from "react";
import Layout from "../components/Layout/Layout";
const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            I'm Shivanshu Singh, a final-year Computer Science and Engineering
            student at BIET Jhansi. With a passion for technology and a knack
            for problem-solving, I've specialized in MERN Stack Development and
            have a strong foundation in Data Structures and Algorithms.
            Proficient in languages like Java, C, and C++, I also possess
            expertise in Database Management Systems, Object-Oriented
            Programming, Operating Systems, and Computer Networking. My
            e-commerce project showcases my dedication to mastering these skills
            and my commitment to continuous learning and growth in the field of
            software development.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
