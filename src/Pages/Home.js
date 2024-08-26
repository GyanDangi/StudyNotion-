import React from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "../Components/Cors/HomePage/HighlightText";
import CTAButton from "../Components/Cors/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlock from "../Components/Cors/HomePage/CodeBlock";
import LearninglanguageSection from "../Components/Cors/HomePage/LearninglanguageSection";
import TimelineSection from "../Components/Cors/HomePage/TimelineSection";
import InstructorSection from "../Components/Cors/HomePage/InstructorSection";
import Footer from "../Components/Cors/HomePage/Footer";

const Home = () => {
  return (
    <div>
      {/* Section 01  */}

      <div className="w-11/12 relative mx-auto flex flex-col  items-center text-white justify-between max-w-maxContent">
        <NavLink to={"/signup"}>
          <div className="group mt-16 p-1 lg:items-center sm:items-start rounded-full bg-richblack-800 font-bold  text-richblack-300 transition-all duration-200 hover:scale-95 w-fit">
            <div className=" flex flex-row gap-4 items-center rounded-full px-10 py-[5px] group-hover:bg-richblack-900 ">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </NavLink>

        <div className=" text-center font-semibold text-4xl mt-6">
          Empower Your Future Growth with
          <HighlightText text={" Coding Skills"} />
        </div>

        <div className=" mt-4 text-richblack-300 text-center font-semibold text-lg ">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        {/* two button */}
        <div className=" flex flex-row gap-7 mt-4">
          <CTAButton active={true} linkto={"/singup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        {/* Video  */}
        <div className=" flex flex-col  my-12 homevideoShadow border-white">
          <video muted autoPlay loop>
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* Code section :01 */}

        <div className=" w-[100%]">
          <CodeBlock
            position={" lg:flex-row sm:flex-col"}
            heading={
              <div className=" text-4xl font-semibold">
                Unlock your
                <HighlightText text={"coding potential"} />
                with Our online courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>
							<html>
							head><title>Example</title><linkrel="stylesheet"href="styles.css">
							/head>
							body>
							h1><a  href="/">Header</a>
							/h1>
							nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>
							/nav>`}
            codecolor={"text-yellow-25"}
          />
        </div>

        {/* Code section :02 */}

        <div className=" w-[100%]">
          <CodeBlock
            position={"lg:flex-row-reverse"}
            heading={
              <div className=" text-4xl font-semibold">
                Start
                <HighlightText text={"Coding in seconds"} />
                with Our online courses
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>
							<html>
							head><title>Example</title><linkrel="stylesheet"href="styles.css">
							/head>
							body>
							h1><ahref="/">Header</a>
							/h1>
							nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>
							/nav>`}
            codecolor={"text-yellow-25"}
          />
        </div>
      </div>

      {/* Section 02  */}

      <div className=" bg-pure-greys-5 text-richblack-700 ">
        <div className="homepage_bg h-[333px] ">
          <div className="w-11/12 max-w-maxContent flex flex-col mx-auto items-center justify-between gap-5 ">
            <div className=" h-[150px]"></div>
            <div className=" flex mx-auto flex-row gap-7 text-white">
              <CTAButton active={true} linkto={"/signup"}>
                <div className=" flex gap-3 items-center">
                  Explore Full Catelog
                  <FaArrowRight />
                </div>
              </CTAButton>

              <CTAButton active={false} linkto={"/signup"}>
                <div>Learn More</div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="w-11/12 max-w-maxContent flex flex-col mx-auto items-center justify-between gap-7  mt-[130px]">
          <div className=" flex flex-row gap-5">
            <div className=" text-4xl font-bold w-[45%]">
              Get the Skills You need for a
              <HighlightText text={"job that is in demand"} />
            </div>

            <div className=" flex flex-col gap-7 w-[45%] text-lg items-start">
              <div>
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>

              <CTAButton active={true} linkto={"/login"}>
                <div>Learn More</div>
              </CTAButton>
            </div>
          </div>

          <TimelineSection />

          <LearninglanguageSection />
        </div>
        <div></div>
      </div>

      {/* Section 03  */}

      <div className=" w-11/12 mx-auto max-w-maxContent flex flex-col justify-between bg-richblack-900">
        <InstructorSection />

        <h2 className=" text-center text-4xl font-bold text-white  mt-10">
          Reveiws from other learners
        </h2>
      </div>

      {/* Footer      */}
      <div className=" bg-richblack-800 flex flex-col mt-16">
            <Footer/>
      </div>
    </div>
  );
};

export default Home;
