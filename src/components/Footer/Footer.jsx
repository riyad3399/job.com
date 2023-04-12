import React from "react";
import {
  MapPinIcon,
  CurrencyDollarIcon,
  HashtagIcon,
} from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="bg-black opacity-80 mb-8 p-24 text-center">
      <div className=" text-white text-center">
        <div className="flex justify-center">
          <HashtagIcon className="h-14 w-14 text-white mb-5" />
          <HashtagIcon className="h-10 w-10 text-white mb-5" />
          <HashtagIcon className="h-14 w-14 text-white mb-5" />
        </div>
        <p>
          Copyright © 2023 Company Name. All Rights Reserved.
          <br />
          <a href="/privacy-policy">Privacy Policy</a> |{" "}
          <a href="/terms-of-use">Terms of Use</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
