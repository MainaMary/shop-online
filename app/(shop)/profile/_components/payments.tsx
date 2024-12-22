import React from "react";
import { IoIosMore } from "react-icons/io";

const Payments = ({ cards }: any) => {
    return (
        <div className="rounded-md p-5 bg-green-100 border-solid cursor-pointer block">
            <div className=" flex justify-between h-auto items-center text-start">
                <div className='w-[30px] h-[30px] rounded-full flex justify-center items-center bg-green-200'>{cards.icon}</div>
                <div>
                    <IoIosMore />
                </div>


            </div>
            <p className='font-medium'>{cards.label}</p>
            <p className="my-3 font-medium">{cards.stats}</p>
            <div className="flex my-4 gap-3 h-auto items-center">
                {cards.small}
                <span className="text-gray-500 ">{cards.subTitle}</span>
            </div>
            {cards.btn !== '' && <button className="bg-green-400 text-white px-2 py-2 w-full">{cards.btn}</button>}

        </div>
    );
};

export default Payments;



