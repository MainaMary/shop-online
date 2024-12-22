"use client";
import React, { useState } from "react";
import Payments from "./_components/payments";
import Overview from "./_components/overview";
import { AiFillProject } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { PiCrownDuotone } from "react-icons/pi";
import { PiAlarmBold } from "react-icons/pi";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const cards = {
    payment: [
        {
            label: "Available balance",
            stats: "KSH 2,675,000",
            icon: <MdAccountBalanceWallet />,
            subTitle: "Farmer's available ",
            small: <RiErrorWarningLine />,
            btn: "",
        },
        {
            label: "Pending payments",
            stats: "KSH 0.00",
            icon: <AiFillProject />,
            subTitle: "Farmer's available ",
            small: <RiErrorWarningLine />,
            btn: "Pay farmer",
        },
        {
            label: "Current Savings",
            stats: "KSH 0.00",
            icon: <AiFillProject />,
            subTitle: "Farmer's savings ",
            small: <RiErrorWarningLine />,
            btn: "View savings",
        },
        {
            label: "Amount in loans",
            stats: "KSH 0.00",
            icon: <AiFillProject />,
            subTitle: "Farmer's savings ",
            small: <RiErrorWarningLine />,
            btn: "View loans",
        },
        {
            label: "Purchases",
            stats: "KSH 0.00",
            icon: <AiFillProject />,
            subTitle: "Farmer's total purchases ",
            small: <RiErrorWarningLine />,
            btn: "View purchases",
        },
    ],
    overview: [
        {
            label: "Farm size",
            stats: "120",
            icon: <PiAlarmBold />,
            subTitle: "Total farm size in acres",
            small: <RiErrorWarningLine />,
        },
        {
            label: "Products",
            stats: "14",
            icon: <AiFillProject />,
            subTitle: "Products supplied",
            small: <RiErrorWarningLine />,
        },
        {
            label: "Livestock",
            stats: "100",
            icon: <PiCrownDuotone />,
            subTitle: "Credit score owned by a farmer",
            small: <RiErrorWarningLine />,
        },
        {
            label: "Credit score",
            stats: "60%",
            icon: <PiCrownDuotone />,
            subTitle: "Livestock owned by a farmer",
            small: <RiErrorWarningLine />,
        },
    ],
};

const tabs = [
    {
        label: "Overview",
    },
    {
        label: "Payments",
    },
];
const details = [
    {
        label: "Phone",
        value: "0716234568",
    },
    {
        label: "DOB",
        value: "12 February 1976",
    },
    {
        label: "ID No",
        value: "1234512",
    },
    {
        label: "Age",
        value: "48 years",
    },
    {
        label: "County",
        value: "Nairobi",
    },
    {
        label: "Route",
        value: "Nairobi",
    },
    {
        label: "Member no",
        value: "12345678",
    },
    {
        label: "Customer type",
        value: "Monthly",
    },
    {
        label: "KRA Pin",
        value: "1234512",
    },
    {
        label: "Bank details",
        value: "1234567098 , Equity Bank ,Equity Bank",
    },
];
const UserProfile = () => {
    const [tab, setTab] = useState(0);
    const [isOpen, setIsOpen] = useState(true);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    const handleTab = (index: number) => {
        setTab(index);
        console.log(index);
    };
    return (
        <div className="bg-white p-12">
            <div id="accordion-collapse" data-accordion="collapse">
                <h2 id="accordion-collapse-heading-1" onClick={toggleAccordion}>
                    <button
                        type="button"
                        className=" bg-gray-100 flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                        data-accordion-target="#accordion-collapse-body-1"
                        aria-expanded="true"
                        aria-controls="accordion-collapse-body-1"
                    >
                        <CgProfile size={20} />
                        <span>Lydia Gathoni</span>
                        <svg
                            data-accordion-icon
                            className="w-3 h-3 rotate-180 shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>
                    </button>
                </h2>
                <div
                    id="accordion-collapse-body-1"
                    className={isOpen ? "block border-gray-200 border rounded-b-xl" : "hidden"}
                    aria-labelledby="accordion-collapse-heading-1"
                >
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 grid grid-cols-3">
                        {details.map((item, index) => (
                            <p className="my-2 font-medium" key={index}>
                                {" "}
                                {`${item.label}:`}
                                {"  "}
                                <span className="text-gray-500 dark:text-gray-400">
                                    {item.value}
                                </span>
                            </p>
                        ))}
                    </div>
                    <div className="px-3 flex justify-between h-auto items-center cursor-pointer">
                        <button className="bg-green-400 my-2 text-white px-4 py-2 text-left">Edit</button>
                        <FaLocationDot size={24} />
                    </div>

                </div>
            </div>
            <ul className="flex gap-4 cursor-pointer my-4">
                {tabs.map((label, index) => (
                    <li
                        onClick={() => handleTab(index)}
                        key={index}
                        className={
                            tab === index
                                ? "border-soild border-b-2 border-gray-500 pb-0"
                                : ""
                        }
                    >
                        {label.label}
                    </li>
                ))}
            </ul>
            {tab === 0 && (
                <div className="grid grid-cols-3 gap-3">
                    {cards.overview.map((label, index) => (
                        <Overview cards={label} key={index} />
                    ))}
                </div>
            )}
            {tab === 1 && (
                <div className="grid grid-cols-3 gap-3">
                    {cards.payment.map((label, index) => (
                        <Payments cards={label} key={index} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default UserProfile;
