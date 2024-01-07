import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const Nav = () => {
  return (
    <div className="navbar gap-5 bg-base-100 lg:px-20 md:px-10 px-5">
      {/* logo */}
      <div className="">
        <img src="logo.png" className="max-w-[150px] rounded-lg" alt="" />
      </div>

      {/* search bar  */}
      <div className="flex-1">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-warning w-full "
        />
      </div>

      {/* contact info  */}
      <div className="flex flex-col">
        <span>
          <a href="tel:+8801933995057">+88019339950##</a>
        </span>
        <span>
          <a href="mailto:global.shope@gmail.com">global.shope@gmail.com</a>
        </span>
      </div>

      {/* chart info  */}
      <div className="relative">
        <span className="text-3xl">
          <CiShoppingCart />
        </span>
        <span className="absolute -top-1 -right-1 rounded-full bg-orange-300 text-black flex justify-center items-center h-4 w-4">
          0
        </span>
      </div>

      {/* user img */}
      <div className="">
        <img
          className="h-10 w-10 rounded-full"
          src="https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-6/401851088_890024975977356_8851623498555849677_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFb6p8NqFlx0u4t2dV9ihvmN85KqJQB1OI3zkqolAHU4mVedpoTZx7mapHqW0nAIH5VXayuSy12ccNuS0NfEb3T&_nc_ohc=BbZPZElAvjAAX-QSW-b&_nc_ht=scontent.fcgp17-1.fna&oh=00_AfC5K3jbFzww2DU6cJIyZaMDRfTYDH3bC9CPP3uygCV42A&oe=659EE566"
          alt=""
        />
      </div>
    </div>
  );
};

export default Nav;
