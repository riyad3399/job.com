import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-200 p-4 font-bold shadow-xl flex justify-between items-center ">
      <Link className="text-2xl">Job.com</Link>
      <div className="flex justify-center items-center gap-5 text-gray-700 ">
        <Link to="/">Home</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/applied-job">Applied job</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <Link><button className="btn-primary">Star Applying</button></Link>
    </div>
  );
};

export default Header;
