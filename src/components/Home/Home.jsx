import React, { useState } from "react";
import Lottie from "lottie-react";
import animation from "../../assets/animation.json";
import { useLoaderData } from "react-router-dom";
import Jobs from "../Jobs/Jobs";
import FeaturedLoader from "../FeaturedLoader/FeaturedLoader";


const Home = () => {
  const datas = useLoaderData();
  // const [items, setItems] = useState([])
  const handelShowAllJob = () => {
    if (datas.length > 4) {
      const sliceData = datas.slice(0, 4)
      console.log(sliceData);
    }
    
  }

  return (
    <>
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
      <div className="mt-20">
        <h1 className="text-4xl font-bold text-center my-4">
          Job Category List
        </h1>
        <p className="text-center ">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <Jobs datas={datas} />

      <div className="mt-20 mb-8">
        <h1 className="text-4xl font-bold text-center my-4">Featured Jobs</h1>
        <p className="text-center ">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <FeaturedLoader datas={datas} handelShowAllJob={ handelShowAllJob} />
    </>
  );
};

export default Home;
