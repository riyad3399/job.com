import React, { useState } from "react";
import FeaturedShow from "../FeaturedShow/FeaturedShow";
import { data } from "autoprefixer";

const FeaturedLoader = ({ datas, handelShowAllJob }) => {

 

  return (
    <>
      <div className="grid md:grid-cols-2 gap-5  my-6">
        {datas.map((data) => (
          <FeaturedShow data={data} key={data.id} />
        ))}
      </div>
      <div className="text-center mb-5">
      <button onClick={handelShowAllJob} className="bg-cyan-400 px-6 py-3 rounded-md font-semibold duration-1000 hover:bg-cyan-500">Show All Jobs</button>
     </div>
    </>
  );
};

export default FeaturedLoader;
