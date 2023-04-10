import React from "react";
import Lottie from "lottie-react";
import animation from "../../assets/animation.json";
import JobCategory from "../JobCategory/JobCategory";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const datas = useLoaderData();
 
  return (
    <>
      {/* header section  */}
      <section className="grid md:grid-cols-2 justify-center items-center gap-5 px-8 mt-10 bg-gray-100">
        <div className="border-spacing-20">
          <h1 className="text-5xl font-bold">
            One Step Closer To Your{" "}
            <span className="text-blue-600">Dream Job</span>
          </h1>
          <p className="my-5">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn-primary">Get Started</button>
        </div>
        <div>
          <Lottie animationData={animation} loop={true} />
        </div>
      </section>

      
    </>
  );
};

export default Home;
