import React from "react";
import FacebookIcon from "../assets/icons/teamfacebook.svg";
import TwitterIcon from "../assets/icons/teamgit.svg";
import LinkedinIcon from "../assets/icons/teamlinkdin.svg";

export default function TeamCard({ image, name, role, desc }) {
  return (
    <div className="bg-white rounded-xl shadow-md text-center flex flex-col items-center">
      <div className="flex p-4 text-left items-center">
        <img src={image} alt={name} className="w-full h-full max-w-[200px] max-h-[200px] object-cover mr-6" />
        <div className="wrapcard">
          <h4 className="font-semibold text-lg">{name}</h4>
          <p className="text-sm text-amberGold font-medium">{role}</p>
          <p className="text-gray-600 text-sm font-medium my-2 mb-4">{desc}</p>
          <div className="flex gap-3 mt-auto">
            <img src={FacebookIcon} alt="Facebook" className="w-5 h-5 cursor-pointer" />
            <img src={TwitterIcon} alt="Twitter" className="w-5 h-5 cursor-pointer" />
            <img src={LinkedinIcon} alt="LinkedIn" className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </div>
      
    </div>
  );
}
