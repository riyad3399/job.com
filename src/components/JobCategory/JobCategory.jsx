import React from "react";

const JobCategory = ({ sData }) => {
 
    const { job_category } = sData;
  return (
    <div className="my-8 border border-spacing-64 p-9 rounded-md bg-gray-100 shadow-lg hover:translate-y-2 duration-300 hover:bg-cyan-200  hover:scale-95 hover:border-blue-500">
        <img className="w-10 h-10" src={job_category.icon} alt="" />
        <h3 className="font-bold text-lg">{job_category.category_name}</h3>
        <p className="text-gray-500">{ job_category.category_workers}</p>
    </div>
  );
};

export default JobCategory;
