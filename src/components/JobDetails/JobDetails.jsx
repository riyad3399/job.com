import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const JobDetails = () => {
  const items = useLoaderData();
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const dynamicId = id;

  useEffect(() => {
    const findId = items.find((dt) => dt.id === dynamicId);
    setDetails(findId);
  }, [setDetails]);

  console.log(details);
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
    <div className="container mx-8 flex gap-10 ">
      <div className="space-y-6 w-3/5">
        <p>Job Description: {job_description}</p>
        <p>Job Responsibility: {job_responsibility}</p>
        <p>Educational Requirements:{educational_requirements}</p>
        <p>Experiences: {experiences}</p>
      </div>
      <div className="w-2/5 ml-10">
        <h3 className="font-semibold text-xl mb-6">Job Details</h3>
        <div className="flex gap-2">
          <CurrencyDollarIcon className="h-6 w-6 text-gray-400" />
          <p className="font-medium"> Salary: {salary}</p>
        </div>
        <div className="flex gap-2">
          <MapPinIcon className="h-6 w-6 text-gray-400" />
          <p className="font-medium">Job Title: {location}</p>
        </div>
          </div>
          <div>
              <h3 className="font-semibold text-xl mb-6">Contact Information</h3>
          </div>
    </div>
  );
};

export default JobDetails;
