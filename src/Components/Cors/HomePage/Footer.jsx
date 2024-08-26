import React from "react";
import logo from "../../../assets/Logo/Logo-Small-Light.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col max-w-maxContent mb-16">
      <div className=" flex flex-col lg:flex-row gap-12 mt-8 lg:mt-10">
        <div className="flex flex-col lg:flex-row md:flex-row md:gap-16 lg:gap-16 justify-between mt-5 lg:mt-10 gap-10">
          <div className="flex flex-col gap-3">
            <div className=" flex flex-row items-center gap-2">
              <img src={logo} alt="logo" />
              <p className="text-4xl font-bold text-[#C5C7D4]">StudyNotion</p>
            </div>
            <p className=" text-xl font-semibold text-[#AFB2BF]">Company </p>
            <div className=" flex lg:text-base font-bold flex-col text-[#6E727F] gap-2">
              <p>About</p>
              <p>Career</p>
              <p>Affiliate</p>
            </div>
            <div className=" flex flex-row gap-2">
              <FaFacebook className=" h-[30px] w-[30px] text-[#6E727F]" />
              <AiFillGoogleCircle className=" h-[30px] w-[30px] text-[#6E727F]" />
              <FaTwitter className=" h-[30px] w-[30px] text-[#6E727F]" />
              <FaYoutube className=" h-[30px] w-[30px] text-[#6E727F]" />
            </div>
          </div>

          <div className=" flex flex-col gap-10">
            <div className=" flex flex-col gap-2">
              <p className=" text-xl font-semibold text-[#AFB2BF]">
                Resources{" "}
              </p>
              <div className=" flex flex-col lg:text-base font-bold text-[#6E727F] gap-2 font-inter">
                <p>Articles</p>
                <p>Blogs</p>
                <p>ChartSheets</p>
                <p>Code Challenges</p>
                <p>Docs</p>
                <p>Projects</p>
                <p>Video</p>
                <p>Workspaces</p>
              </div>
            </div>
            <div className=" flex flex-col gap-2">
              <p className=" text-xl font-semibold text-[#AFB2BF]">Support</p>
              <p className="text-[#6E727F] gap-2">Help centre</p>
            </div>
          </div>
          <div className=" flex flex-col gap-10">
            <div className=" flex flex-col gap-2">
              <p className=" text-xl font-semibold text-[#AFB2BF]">Plans </p>
              <div className=" flex flex-col lg:text-base font-bold text-[#6E727F] gap-2">
                <p>Paid Memberships</p>
                <p>For Students</p>
                <p>Business Solutions</p>
              </div>
            </div>
            <div className=" flex flex-col lg:text-base font-bold gap-2">
              <p className=" text-xl font-semibold text-[#AFB2BF]">Community</p>
              <p className="text-[#6E727F] gap-2">Forums</p>
              <p className="text-[#6E727F] gap-2">Chapters</p>
              <p className="text-[#6E727F] gap-2">Events</p>
            </div>
          </div>
        </div>
        <div className=" w-1px lg:w-[1px] h-0 lg:h-[570px] text-richblack-700 border-[1px] mt-10 "></div>

        <div className=" flex flex-col lg:flex-row md:flex-row md:gap-16 lg:gap-16 justify-between mt-5 lg:mt-10 gap-8">
            <div className=" flex flex-col gap-2 lg:text-base font-bold text-richblack-400">
              <p className="lg:text-base font-bold text-xl ">Subjects</p>
              <p>AI</p>
              <p>Cloud Computing </p>
              <p>Code foundation</p>
              <p>Computer Science</p>
              <p>Cybre Security</p>
              <p>Data Analysts</p>
              <p>Data Science</p>
              <p>Data Visualization</p>
              <p>Developers Tools</p>
              <p>Devops</p>
              <p>Game Development</p>
              <p>IT</p>
              <p>Machine Learning</p>
              <p>maths</p>
              <p>Movile Development </p>
              <p>Web Design</p>
              <p>Web Development</p>
            </div>
           
            <div className=" flex flex-col gap-2 lg:text-base font-bold text-richblack-400">
              <p className=" text-xl lg:text-base font-bold ">languages</p>
              <p>Bash</p>
              <p> C </p>
              <p>C++</p>
              <p>C#</p>
              <p>Go</p>
              <p>HTML & CSS</p>
              <p>Java</p>
              <p>Javascript</p>
              <p>Kotiln</p>
              <p>PHP</p>
              <p>Python</p>
              <p>R</p>
              <p>Ruby</p>
              <p>SQL</p>
              <p>Swift</p>
            </div>

            <div className=" flex flex-col gap-2 lg:text-base font-bold text-richblack-400">
              <p className=" text-xl lg:text-base font-bold ">Career Building</p>
              <p >Career Path</p>
              <p> Career Service </p>
              <p >Interview Preparation</p>
              <p >Profestional Certification</p>
              <p >-</p>
              <p >Full Catelog</p>
              <p >Beta Content</p>
            </div>

          </div>
      </div>
      <div className=" w-0 lg:w-full h-0 lg:h-[1px] text-richblack-700 border-[1px] mt-10 "></div>
      <div className=" flex flex-col lg:flex-row items-center lg:justify-between mt-10 gap-5 text-richblack-400">
        <div className="flex flex-row gap-2">
            <p className=" border-r-2 border-richblack-700 px-4">Privacy Policy</p>
            <p className=" border-r-2 border-richblack-700 px-4">Cookies Policy</p>
            <p className=" px-4">Terms</p>
        </div>

        <div className=" flex flex-row gap-2 items-center">
            Made With 
            <FaHeart color="#e6005c"/> 
            GyanPrakash
            <FaCopyright />
            2024 StudyNotion
        </div>
      </div>
    </div>
  );
};

export default Footer;
