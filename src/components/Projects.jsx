import React from 'react'
import { screenshots } from '../assets/screenshots';

const Projects = () => {

    function handleClick(link) {
        window.open(`${link}`, "_blank")
    }

    const data = [

        { id: 1, image: screenshots.shopNest, teckStack: ['MERN', 'Stripe', 'Gemini API'], title: 'AI-Powered E-Commerce', description: 'ShopNest is a responsive e-commerce site with auth, filters, pagination, Stripe, admin panel, and Gemini AI chatbot.', githubLink: 'https://github.com/yogesh-chaturvedi/ShopNest', projectLink: 'https://shop-nest-livid.vercel.app/' },

        { id: 2, image: screenshots.passwordManagerSS, teckStack: ['React', 'Node.js', 'MongoDb'], title: 'Password Manager', description: 'Developed LockVault – a MERN stack password manager with Encryption, Authentication, CRUD, and responsive UI.', githubLink: 'https://github.com/yogesh-chaturvedi/Password-Manager', projectLink: 'https://password-manager-ten-xi.vercel.app/' },

        { id: 3, image: screenshots.learnifyAiSS, teckStack: ['MERN', 'Multer', 'Gemini API'], title: 'Full Stack AI-Powered LMS', description: 'Built a secure, role-based LMS with secure authentication and dashboards for Admin, Instructor, and User', githubLink: 'https://github.com/yogesh-chaturvedi/LMS', projectLink: 'https://learnifyai-phi-azure.vercel.app/' }

    ]


    return (
        <div id='projects' className='mx-auto w-full lg:w-[80vw] text-center flex flex-col items-center justify-evenly gap-10 p-5'>

            <div className='flex flex-col items-center '>
                <h1 className='title h-16 text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text inline-block'>Projects</h1>

                <p className='subTitle w-full sm:w-[90%] md:w-[80%] lg:w-[70%] text:xs md:text-lg font-semibold'>Here are some of my recent projects, Each project was carefully crafted, with attention to detaile, performance and user experience</p>
            </div>

            <div className="projects flex flex-col gap-5 flex-wrap justify-center md:flex-row md:gap-20">

                {data.map((items, index) => {
                    return (<div key={index} className='ProjectCard hover:translate-y-1 transition duration-200 z-20 flex flex-col gap-6 bg-gray-200 dark:bg-black dark:text-white text-slate-900 rounded-2xl border-2 border-black  dark:border-white h-[400px] w-[300px]'>
                        <img className='border-b-2 border-gray-600 dark:border-white rounded-t-2xl h-[50%] w-full' src={items.image} alt="project-img" />

                        {/* tachStack */}
                        <div className='flex justify-evenly px-2'>
                            {items.teckStack.map((stack, index) => {
                                return (
                                    <span key={index} className='border-2 bg-gray-800 text-slate-100 text-xs rounded-xl px-3 py-1.5 '>{stack}</span>
                                )
                            })}
                        </div>

                        <div className='px-2'>
                            <div className='text-xl font-bold mb-1'>{items.title}</div>
                            <div className='text-sm'>{items.description}</div>
                        </div>

                        <div className='flex items-center justify-center gap-3'>

                            <div onClick={() => { handleClick(items.projectLink) }}><i className="fa-solid fa-link text-2xl cursor-pointer pb-3"></i></div>

                            <div onClick={() => { handleClick(items.githubLink) }}><i className="fa-brands fa-github text-2xl cursor-pointer pb-3"></i></div>

                        </div>

                    </div>)
                })}

            </div>

            <button onClick={() => { handleClick('https://github.com/yogesh-chaturvedi') }} className='contactMe mr-5 dark:bg-gradient-to-b from-blue-400 to-indigo-600  dark:hover:from-blue-500 dark:hover:to-indigo-700 bg-gray-800 hover:bg-gray-950 text-slate-100 dark:text-white  transition-all duration-300 shadow-md px-4 py-2 rounded-lg cursor-pointer'>Check My GitHub <i className="fa-solid fa-arrow-right ml-2"></i></button>

        </div>
    )
}

export default Projects