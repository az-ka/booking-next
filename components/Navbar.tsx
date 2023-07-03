/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [state, setState] = useState(false);
    const pathname = usePathname();
    console.log(pathname);
    const navigation = [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Services", path: "/services" },
        { title: "Contact", path: "/contact" },
        { title: "Booking", path: "/booking", class: "md:hidden" },
    ];
    return (
        <nav className="bg-white w-full border-b md:border-0 md:static">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="/">
                        <Image
                            src={"/logo.png"}
                            alt={"Logo"}
                            width={55}
                            height={55}
                        />
                    </a>
                    <div className="md:hidden">
                        <button
                            className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                            onClick={() => setState(!state)}
                        >
                            {state ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 8h16M4 16h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div
                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                        state ? "block" : "hidden"
                    }`}
                >
                    <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        {navigation.map((item, idx) => {
                            return (
                                <li
                                    key={idx}
                                    className={`${
                                        pathname == item.path
                                            ? "text-blue-600 hover:text-gray-600 font-medium"
                                            : "text--600 hover:text-blue-600 font-medium"
                                    } ${item.class}`}
                                >
                                    <a href={item.path}>{item.title}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="hidden md:inline-block">
                    <a
                        href="/booking"
                        className="py-3 px-4 text-white bg-blue-500 hover:bg-blue-500 rounded-md shadow font-medium"
                    >
                        Booking
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
