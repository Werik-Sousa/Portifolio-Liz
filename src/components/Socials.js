import React from "react";
import { social } from "../data";

const Socials = () => {
  return (
    <ul className="flex space-x-2 mt-4 lg:space-x-6">
      {social.map((item) => (
        <li
          key={item.name}
          className="flex justify-center items-center"
        >
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.name}
            title={item.name}
            className="text-base text-black m-1 lg:m-0 hover:text-accent hover:scale-110 transition-all duration-300"
          >
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
