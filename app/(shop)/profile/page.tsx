'use client'
import React, { useState } from 'react'
import Payments from './_components/payments'
import Overview from './_components/overview'
import { AiFillProject } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const cards = {
    payment: [
        {
            label: "Available balance",
            stats: "KSH 2,675,000",
            icon: <AiFillProject />,
            subTitle: "Farmer's available ",
            small: <RiErrorWarningLine />,
            btn: ""
        },
        {
            label: "Pending payments",
            stats: "KSH 0.00",
            icon: <AiFillProject />,
            subTitle: "Farmer's available ",
            small: <RiErrorWarningLine />,
            btn: "Pay farmer"
        },
        {
            label: "Current Savings",
            stats: "KSH 0.00",
            icon: <AiFillProject />,
            subTitle: "Farmer's savings ",
            small: <RiErrorWarningLine />,
            btn: "View savings"
        },
        {
            label: "Amount in loans",
            stats: "KSH 0.00",
            icon: <AiFillProject />,
            subTitle: "Farmer's savings ",
            small: <RiErrorWarningLine />,
            btn: "View loans"
        },
        {
            label: "Purchases",
            stats: "KSH 0.00",
            icon: <AiFillProject />,
            subTitle: "Farmer's total purchases ",
            small: <RiErrorWarningLine />,
            btn: "View purchases"
        },
    ],
    overview: [
        {
            label: "Farm size",
            stats: "120.0",
            icon: <AiFillProject />,
            subTitle: "Total farm size in acres",
            small: <RiErrorWarningLine />
        },
        {
            label: "Products",
            stats: "120.0",
            icon: <AiFillProject />,
            subTitle: "Products supplied",
            small: <RiErrorWarningLine />
        },
        {
            label: "Livestock",
            stats: "120.0",
            icon: <AiFillProject />,
            subTitle: "Livestock owned by a farmer",
            small: <RiErrorWarningLine />
        }
    ]
}



const tabs = [
    {
        label: 'Overview'

    },
    {
        label: 'Payments'
    }
]
const UserProfile = () => {
    const [tab, setTab] = useState(0)
    const handleTab = (index: number) => {
        setTab(index)
        console.log(index)
    }
    return (
        <div className='bg-white p-12'>
            <div className='id="accordion-collapse" data-accordion="collapse"'>
                <h2 id="accordion-collapse-heading-1">
                    <button type="button" className="flex items-center justify-between w-full p-5 bg-gray-100 font-medium  text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                        <span>
                            <CgProfile size={24} />
                        </span>
                        <div>Lydia Gathoni</div>
                        <IoIosArrowDown />
                    </button>
                </h2>
                <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                        <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                    </div>
                </div>
            </div>
            <ul className='flex gap-4 cursor-pointer my-4'>{tabs.map((label, index) => <li onClick={() => handleTab(index)} key={index} className={tab === index ? 'border-soild border-b-2 border-gray-500 pb-0' : ''}>{label.label}</li>)}</ul>
            {tab === 0 && <div className='grid grid-cols-3 gap-3'>{cards.overview.map((label, index) => <Overview cards={label} key={index} />)}</div>}
            {tab === 1 && <div className='grid grid-cols-3 gap-3'>{cards.payment.map((label, index) => <Payments cards={label} key={index} />)}</div>}
        </div>

    )
}

export default UserProfile