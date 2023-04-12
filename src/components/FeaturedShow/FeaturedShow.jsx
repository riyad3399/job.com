import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const FeaturedShow = ({ data }) => {
  const { job_time, job_time2, location, logo, name, salary, worker, id } = data;

 
  return (
    <div className="border border-spacing-96 p-8 bg-gray-100 rounded-md shadow-xl space-y-2">
      <img className="w-28 h-28" src={logo} alt="logo" />
      <h2 className="text-xl font-bold">{worker}</h2>
      <p className="font-semibold text-gray-500 text-lg">{name}</p>
      <div className="flex gap-3">
        <button className=" border border-1 border-blue-600 py-2 px-4 rounded-md bg-cyan-100">{job_time}</button>
        <button className=" border border-1 border-blue-600 py-2 px-4 rounded-md bg-cyan-100 ">{job_time2}</button>
      </div>
      <div className="flex gap-8">
        <div className="flex gap-2">
          <MapPinIcon className="h-6 w-6 text-gray-400" />
          <p className="font-medium">{location}</p>
        </div>
        <div className="flex gap-2">
          <CurrencyDollarIcon className="h-6 w-6 text-gray-400" />
          <p className="font-medium"> Salary: {salary}</p>
        </div>
      </div>
      <Link to={`/job/${id}`}>
        <button className="btn-primary">View Details</button>
    </Link>
    </div>
  );
};

export default FeaturedShow;
