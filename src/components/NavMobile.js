import React, {useState} from "react";

import {navigation} from "../data";

import {XIcon} from '@heroicons/react/outline';
import {MenuAlt3Icon} from '@heroicons/react/outline';

import {motion} from 'framer-motion';

import {Link} from 'react-scroll';

const NavMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const circleVariants = {
        hidden: {
            scale: 0,
        },
        visible: {
            scale: 180,
            transition: {
                type: 'spring',
                stiffness: 160,
                damping: 60,
            },
        },
    };

    const ulVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.1,
            },
        },
    };

    return <nav className="relative z-50">
        {/* menu icon */}
        <div onClick={() => setIsOpen(true)} className="cursor-pointer text-white">
            <MenuAlt3Icon className="w-8 h-8"/>
        </div>

        {/* circle */}
        <motion.div
            variants={circleVariants}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            className="fixed top-0 right-0 w-4 h-4 bg-black rounded-full"
        ></motion.div>

        {/* menu */}
        <motion.ul
            variants={ulVariants}
            initial="hidden"
            animate={isOpen ? "visible" : ""}
            className={`${isOpen ? 'right-0' : '-right-full' }
            fixed top-0 bottom-0 w-full flex flex-col justify-center items-center
            transition-all duration-300 overflow-hidden`}
        >

        {/* close icon */}
        <div onClick={() => setIsOpen(false)} className="cursor-pointer
        absolute top-8 right-8">
            <XIcon className="w-8 h-8"/>
        </div>
        {navigation.map((item, index) => {
  const colorMap = {
    Projetos: "text-blue-500",
    Posters: "text-yellow-400",
    "Sobre mim": "text-red-500",
    Contato: "text-green-500",
    TASS: "text-white",
  };

  return (
            <li key={index} className="mb-8">
            <Link
                onClick={() => setIsOpen(false)}
                activeClass="active"
                to={item.href}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`
                    text-2xl
                    font-anton
                    uppercase
                    cursor-pointer
                    transition-all
                    duration-300
                    hover:opacity-70
                    hover:tracking-widest
                    hover:scale-105
                    ${colorMap[item.name] || "text-white"}
                `}
                >
                {item.name}
                </Link>
            </li>
        );
        })}     

        </motion.ul>
    </nav>;            
};

export default NavMobile;