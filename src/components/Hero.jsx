import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero() {
    return (
        <div id='home' className=' mx-auto py-5 flex flex-col w-full lg:w-[80vw] h-[80vh] justify-center text-center items-center gap-10 '>

            {/* <div className='image h-48 w-48 rounded-full border-2 flex justify-center items-center'>
                <div className='font-bold text-7xl'>Y</div>
            </div> */}

            <div className="info w-[90%] font-bold text-3xl md:text-5xl md:w-[75%] text-center"><span className='" font-extrabold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text inline-block"'>I'm Yogesh Chaturvedi, </span><span>Aspiring MERN Developer eager to contribute and grow in real-world projects.</span></div>
            {/* <div className="subInfo text-xl w-[50vw] text-center ">Aspiring MERN Developer eager to contribute and grow in real-world projects.</div> */}

            <div >
                <button className='contactMe mr-5 dark:bg-gradient-to-b from-blue-400 to-indigo-600  hover:from-blue-500 dark:hover:to-indigo-700 bg-gray-800 hover:bg-gray-950 text-white transition-all duration-300 shadow-md px-4 py-2 rounded-lg cursor-pointer'><AnchorLink offset={50} href='#contact' >Connect With Me</AnchorLink></button>

                <button className='contactMe mr-5 dark:bg-gradient-to-b from-blue-400 to-indigo-600  hover:from-blue-500 dark:hover:to-indigo-700  bg-gray-800 hover:bg-gray-950 text-white  transition-all duration-300 shadow-md px-4 py-2 rounded-lg cursor-pointer'><AnchorLink offset={50} href='#projects'>View Projects</AnchorLink></button>
            </div>

        </div>
    )
}

export default Hero
