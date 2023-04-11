import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className=" p-4 font-bold shadow-xl flex justify-between items-center ">
      <Link className="text-2xl">Job.com</Link>
      <div className="flex justify-center items-center gap-5 text-gray-700 ">
        <Link className="hover:text-orange-400" to="/">
          Home
        </Link>
        <Link className="hover:text-orange-400" to="/statistics">
          Statistics
        </Link>
        <Link className="hover:text-orange-400" to="/applied-job">
          Applied job
        </Link>
        <Link className="hover:text-orange-400" to="/job-details">
          Job Details
        </Link>
        <Link className="hover:text-orange-400" to="/blog">
          Blog
        </Link>
      </div>
      <Link>
        <button className="btn-primary">Star Applying</button>
      </Link>
    </nav>
  );
};

export default Header;
