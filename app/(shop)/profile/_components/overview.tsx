import React from 'react'
import { IoIosMore } from "react-icons/io"

const Overview = ({ cards }: any) => {
    return (
        <div className='rounded-md px-2 py-2 bg-green-100 border-solid cursor-pointer space-y-2'>
            <div className='flex justify-between'>
                <div className='w-[30px] h-[30px] rounded-full text-center flex justify-center bg-green-200 items-center'>{cards.icon}</div>
                <div><IoIosMore /></div>

            </div>
            <p className='font-medium'>{cards.label}</p>
            <p className="my-3 font-medium">{cards.stats}</p>
            <div className="flex my-4 gap-3 h-auto items-center">
                {cards.small}
                <span className="text-gray-500 ">{cards.subTitle}</span>
            </div>

        </div>
    )
}

export default Overview