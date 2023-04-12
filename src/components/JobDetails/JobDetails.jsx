import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import {
  MapPinIcon,
  CurrencyDollarIcon,
  PhoneIcon,
  EnvelopeIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";
import { addToDb } from "../../utilities/fackDB";

const JobDetails = () => {
  const items = useLoaderData();
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const dynamicId = id;

  useEffect(() => {
    const findId = items.find((dt) => dt.id === dynamicId);
    setDetails(findId);

  }, [setDetails]);


  const {
    educational_requirements,
    email,
    experiences,
    job_description,
    job_responsibility,
    salary,
    phone,
    location,
    worker,
  } = details;
  return (
    <div className="container mx-8 grid md:grid-cols-2 gap-8 mt-32">
      <div className="space-y-6 rounded-md border border-blue-100 p-6">
        <p>
          <span className="font-semibold text-lg text-gray-700">
            Job Description:
          </span>
          {job_description}
        </p>
        <p>
          <span className="font-semibold text-lg text-gray-700">
            Job Responsibility:
          </span>
          {job_responsibility}
        </p>
        <p>
          <span className="font-semibold text-lg text-gray-700">
            Educational Requirements:
          </span>
          {educational_requirements}
        </p>
        <p>
          <span className="font-semibold text-lg text-gray-700">
            Experiences:
          </span>
          {experiences}
        </p>
      </div>
      <div className=" ml-10  px-24">
        <h3 className="font-semibold text-xl mb-6">Job Details</h3>
        <div className="flex gap-2 my-3">
          <CurrencyDollarIcon className="h-6 w-6 text-blue-400" />
          <p className="font-medium"> Salary: {salary}</p>
        </div>
        <div className="flex gap-2">
          <BriefcaseIcon className="h-6 w-6 text-blue-400" />
          <p className="font-medium">Job Title: {worker}</p>
        </div>
        <div className="my-6 space-y-3">
          <h3 className="font-semibold text-xl mb-6">Contact Information</h3>
          <div className="flex gap-2">
            <PhoneIcon className="w-6 h-6 text-blue-400" />
            <p>Phone: {phone}</p>
          </div>
          <div className="flex gap-2">
            <EnvelopeIcon className="w-6 h-6 text-blue-400" />
            <p>Email: {email}</p>
          </div>
          <div className="flex gap-2">
            <MapPinIcon className="w-6 h-6 text-blue-400" />
            <p>Address: {location}</p>
          </div>
          <Link to='/appliedJob'>
            <button onClick={() => addToDb(id)} className="w-3/4 bg-cyan-500 rounded-md duration-300 hover:bg-cyan-300 py-2 font-semibold mt-4">
            Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
