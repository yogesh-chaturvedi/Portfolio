import React from 'react'

const Footer = () => {
    return (
        <div className='w-full p-4 flex flex-col gap-1 '>

            <div className='flex gap-3 flex-col'>
                <h2 className='font-bold text-3xl'>Yogesh Chaturvedi</h2>
                {/* <p className=' text-sx md:w-[450px]'>I'm Fullstack Developer from Delhi,India and i am fresher, and wanted to build my career in web developement.</p> */}
            </div>
            <div className="line rounded-2xl w-full h-1 bg-gray-600"></div>
            <div>&copy;2025 Yogesh Chaturvedi, All rights reserved</div>
        </div>
    )
}

export default Footer