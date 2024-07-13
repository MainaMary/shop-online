import React from 'react'
import { IoIosMore } from "react-icons/io"

const Overview = ({ cards }: any) => {
    return (
        <div className='rounded-md px-2 py-2 bg-green-300 border-solid cursor-pointer space-y-2'>
            <div className='flex justify-between'>
                <div className='w-[50px] h-[50px] rounded-full text-center m-auto flex justify-center items-center'>{cards.icon}</div>
                <div><IoIosMore /></div>

            </div>
        </div>
    )
}

export default Overview