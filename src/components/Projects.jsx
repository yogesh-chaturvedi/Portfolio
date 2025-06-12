import React from 'react'
import { screenshots } from '../assets/screenshots';

const Projects = () => {

    function handleClick(link) {
        window.open(`${link}`, "_blank")
    }


    return (
        <div id='projects' className='mx-auto w-full lg:w-[80vw] text-center flex flex-col items-center justify-evenly gap-10 p-5'>

            <div className='flex flex-col items-center '>
                <h1 className='title h-16 text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text inline-block'>Projects</h1>

                <p className='subTitle w-full sm:w-[90%] md:w-[80%] lg:w-[70%] text:xs md:text-lg font-semibold'>Here are some of my recent projects, Each project was carefully crafted, with attention to detaile, performance and user experience</p>
            </div>

            <div className="projects flex flex-col gap-5 md:flex-row md:gap-20">
                {/* first */}
                <div className='ProjectCard flex flex-col gap-6 bg-gray-200 dark:bg-black dark:text-white text-slate-900 rounded-2xl border-2 border-black dark:border-white h-[400px] w-[300px]'>
                    <img className='border-b-2 border-gray-600 dark:border-white rounded-t-2xl h-[50%] w-full' src={screenshots.geminiSS} alt="gemini-img" />

                    <div className='flex justify-evenly px-2'>
                        <span className='border-2 bg-gray-800 text-slate-100 text-xs rounded-xl px-3 py-1.5 '>React</span>
                        <span className='border-2 bg-gray-800 text-slate-100 text-xs rounded-xl px-3 py-1.5 '>Tailwind</span>
                        <span className='border-2 bg-gray-800 text-slate-100 text-xs rounded-xl px-3 py-1.5 '>Gemini Api</span>
                    </div>

                    <div className='px-2'>
                        <div className='text-2xl font-bold'>Gemini AI clone</div>
                        <div className='text-sm'>Created a Gemini UI clone featuring real-time chat, clean design, and state management with Context API.</div>
                    </div>
                    <div onClick={() => { handleClick('https://gemini-clone-omega-ruddy.vercel.app/') }}><i className="fa-brands fa-github text-3xl cursor-pointer pb-3"></i></div>
                </div>

                {/* second */}
                <div className='ProjectCard flex flex-col bg-gray-200 dark:bg-black dark:text-white text-slate-900 gap-6 rounded-2xl border-2 dark:border-white border-black h-[400px] w-[300px]'>
                    <img className='border-b-2 border-gray-600 dark:border-white rounded-t-2xl h-[50%] w-full' src={screenshots.passwordManagerSS} alt="passwordManager-img" />

                    <div className='flex justify-evenly px-2'>
                        <span className='border-2 text-slate-100  bg-gray-800 text-xs rounded-xl px-3 py-1.5 '>React</span>
                        <span className='border-2 text-slate-100 bg-gray-800 text-xs rounded-xl px-3 py-1.5 '>Node.js</span>
                        <span className='border-2 text-slate-100  bg-gray-800 text-xs rounded-xl px-3 py-1.5 '>MongoDb</span>
                    </div>

                    <div className='px-2'>
                        <div className='text-2xl font-bold'>Password Manager</div>
                        <div className='text-sm'>Developed LockVault – a MERN stack password manager with Encryption, Authentication, CRUD, and responsive UI.</div>
                    </div>
                    <div onClick={() => { handleClick('https://password-manager-ten-xi.vercel.app/') }}><i className="fa-brands fa-github text-3xl cursor-pointer pb-3"></i></div>
                </div>
            </div>

            <button onClick={() => { handleClick('https://github.com/yogesh-chaturvedi') }} className='contactMe mr-5 dark:bg-gradient-to-b from-blue-400 to-indigo-600  dark:hover:from-blue-500 dark:hover:to-indigo-700 bg-gray-800 hover:bg-gray-950 text-slate-100 dark:text-white  transition-all duration-300 shadow-md px-4 py-2 rounded-lg cursor-pointer'>Check My GitHub <i className="fa-solid fa-arrow-right ml-2"></i></button>

        </div>
    )
}

export default Projects