import React from "react";
import { MdSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const SubNav = () => {
  return (
    <div className="bg-[#fff0f6] flex justify-between lg:px-20 md:px-10 px-5 rounded-md py-2">
      <div>
        <details className="dropdown">
          <summary className="m-1 btn text-3xl bg-[#fff0f6]">
            <IoMenu />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="text-3xl h-full flex items-center">
        <Link to={"/"}>
          <MdSupportAgent />
        </Link>
      </div>
    </div>
  );
};

export default SubNav;
