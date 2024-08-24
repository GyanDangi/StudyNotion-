import React from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "../Components/Cors/HomePage/HighlightText";
import CTAButton from "../Components/Cors/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlock from "../Components/Cors/HomePage/CodeBlock";

const Home = () => {
  return (
    <div>
      {/* Section 01  */}

      <div className=" relative mx-auto flex flex-col w-11/12 items-center text-white justify-between max-w-maxContent">
        <NavLink to={"/signup"}>
          <div className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold  text-richblack-300 transition-all duration-200 hover:scale-95 w-fit">
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
        <div className=" relative shadow-blue-200 mx-3 my-12 ">
          <video
            muted
            autoPlay
            loop
		  
            className="border-r-[20px] border-b-[20px] rounded-md bort"
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* Code section :01 */}

        <div>
          <CodeBlock
            position={" lg:flex-row"}
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
							h1><ahref="/">Header</a>
							/h1>
							nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>
							/nav>`}
            codecolor={"text-yellow-25"}
          />
        </div>

        {/* Code section :02 */}

        <div >
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

      {/* Section 03  */}

      {/* Footer      */}
    </div>
  );
};

export default Home;
