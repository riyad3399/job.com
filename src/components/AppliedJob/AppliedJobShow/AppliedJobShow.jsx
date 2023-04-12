import React from "react";
import {
  MapPinIcon,
  CurrencyDollarIcon,
  PhoneIcon,
  EnvelopeIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";

const AppliedJobShow = ({ job }) => {
  const { logo, name, worker, job_time2, job_time, location, salary } = job;
  return (
    <div className="flex items-center border border-blue-200 space-y-5 container w-4/5 mx-auto px-6 rounded-md hover:bg-gray-100 duration-200">
      <img className="mr-8 w-28 h-28 " src={logo} alt="" />
      <div className="flex">
        <div className="flex items-center relative">
          <div>
            <h3 className="text-xl font-medium">{worker}</h3>
            <p className="text-lg text-gray-400 font-medium my-2">{name}</p>
            <div className="flex gap-3">
              <span className="border border-blue-200 p-2 rounded-md font-medium">
                {job_time}
              </span>
              <span className="border border-blue-200 p-2 rounded-md font-medium">
                {job_time2}
              </span>
            </div>
            <div className="flex justify-center items-center gap-6">
              <div className="flex gap-2 items-center">
                <MapPinIcon className="w-6 h-6 text-blue-400" />
                <p className="font-medium"><span className="text-gray-400 text-lg">Address:</span> {location}</p>
              </div>
              <div className="flex gap-2 my-3 items-center">
                <CurrencyDollarIcon className="h-6 w-6 text-blue-400" />
                <p className="font-medium"> <span className="text-lg text-gray-400">Salary:</span> {salary}</p>
              </div>
            </div>
          </div>
          <div className="absolute -right-52">
            <button className="bg-blue-300 px-4 py-2 rounded-md font-medium hover:bg-blue-500 hover:text-white">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobShow;
