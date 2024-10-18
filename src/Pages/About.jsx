import React from "react";
import HighlightText from "../Components/Cors/HomePage/HighlightText";
import about1 from "../assets/Images/aboutus1.webp";
import about2 from "../assets/Images/aboutus2.webp";
import about3 from "../assets/Images/aboutus3.webp";
// import Navbar from "../Components/Cors/Common/Navbar";
import foundinStory from '../assets/Images/FoundingStory.png'
import Footer from '../Components/Common/Footer'
import StatsComponents from "../Components/Cors/AboutPage/StatsComponents";
import LearningGrid from "../Components/Cors/AboutPage/LearningGrid";
import GetInTouchForm from "../Components/Cors/AboutPage/GetInTouchForm";
const About = () => {
  return (
    <div className="flex flex-col ">
      {/* <Navbar/> */}
      {/* Section 1 */}
      <div className=" w-full h-[550px] bg-richblack-800 mb-28">
        <div className=" relative  w-11/12 max-w-maxContent mb-10 mx-auto flex flex-col">
          <div className="flex  flex-col text-center mt-20 w-8/12 mx-auto gap-4">
            <p className="  text-richblack-300">About us</p>
            <div className=" flex flex-col gap-4">
              <div className=" text-4xl font-semibold text-white">
                Driving Innovation in Online Education for a
                <HighlightText text={"Brighter Future"} />
              </div>
              <p className=" text-richblack-300 ">
                Studynotion is at the forefront of driving innovation in online
                education. We're passionate about creating a brighter future by
                offering cutting-edge courses, leveraging emerging technologies,
                and nurturing a vibrant learning community.
              </p>
            </div>
          </div>
          <div className=" flex flex-row gap-4 items-center justify-between mt-5">
            <img src={about1} alt="about1" className="" />
            <img src={about2} alt="about2" className="bg-cyan-500  shadow-lg shadow-cyan-500/50" />
            <img src={about3} alt="about3" />
          </div>
        </div>
      </div>

      {/* Section :02 */}
      <div className=" w-11/12 mb-10 max-w-maxContent mx-auto flex flex-col gap-20">
        <p className=" text-4xl text-center font-semibold text-richblack-200">
          "We are passionate about revolutionizing the way we learn. Our
          innovative platform <span className=" bg-gradient-to-tr from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text">combines Technologies</span>, <span className=" bg-gradient-to-tr from-[#FF512F] to-[#F09819] text-transparent bg-clip-text">expertise</span>, and community to
          create an <span className="bg-gradient-to-tr from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text">unparalleled educational experience.</span> "
        </p>
        <div className=" flex flex-col lg:flex-row gap-5 justify-between border-t-[2px] border-richblack-800 py-20">
          <div className=" w-[40%] flex flex-col gap-10">
            <h2 className=" text-4xl bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-transparent bg-clip-text font-bold">Our Founding Story </h2>
            <div className=" flex flex-col text-richblack-400 gap-6">
              <p>Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.</p>
              <p>As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.</p>
            </div>
          </div>
          <div className=" pr-28 pt-5 ">
            <img src={foundinStory} alt="foundingStory" />
          </div>
        </div>

        <div className=" flex flex-col lg:flex-row justify-between gap-28">
          <div className=" flex flex-col gap-7">
             <h2 className=" text-4xl font-semibold bg-gradient-to-tr from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text">Our Vision</h2>
             <p className=" text-richblack-400">With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.</p>
          </div>
          <div className=" flex flex-col gap-7 pr-10">
             <h2 className=" text-4xl font-semibold bg-gradient-to-tr from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-transparent">Our Mission</h2>
             <p className=" text-richblack-400">our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.</p>
          </div>
        </div>
      </div>


      {/* Section:03 */}
      <div className="w-full bg-richblack-800 mb-10 mt-10 ">
          <StatsComponents/>
      </div>
      
    {/* Section:04 */}
    <div className="w-full bg-richblack-900 ">
          <LearningGrid/>
          <GetInTouchForm/>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
