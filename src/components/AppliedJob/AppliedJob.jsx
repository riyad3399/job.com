import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../../utilities/fackDB";
import AppliedJobShow from "./AppliedJobShow/AppliedJobShow";

const AppliedJob = () => {
  const allDatas = useLoaderData();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const savedJob = [];
    const storedCart = getShoppingCart();
    for (const id in storedCart) {
      const addedJobs = allDatas.find((dt) => dt.id === id);
      if (addedJobs) {
        const quantity = storedCart[id];
        addedJobs.quantity = quantity;
        savedJob.push(addedJobs);
      }
    }
    setJobs(savedJob);
  }, [allDatas]);

  return (
    <div className="grid md:grid-cols-1 my-32 gap-10">
      {jobs.map((job) => (
        <AppliedJobShow job={job} key={job.id} />
      ))}
    {
        jobs.length > 0 ?   <Link to='/' className="w-3/5 bg-blue-300 hover:bg-blue-500 font-medium py-3 px-6 rounded-md mx-auto hover:text-white text-center">
        <button>
          Back to Home
        </button>
      </Link> : ''
    }
    </div>
  );
};

export default AppliedJob;
