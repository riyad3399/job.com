import React, { useState } from "react";
import JobCategory from "../JobCategory/JobCategory";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const Jobs = ({ datas }) => {
  const sliceData = datas.slice(0, 4);

  return (
    <div>
      <div className="grid md:grid-cols-4 gap-10 ml-10">
      {sliceData.map((data) => (
        <JobCategory data={data} key={data.id} />
      ))}
      </div>
      <div>
        <FeaturedJob sliceData={ sliceData} />
      </div>
    </div>
  );
};

export default Jobs;
