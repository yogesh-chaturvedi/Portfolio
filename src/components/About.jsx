import React from 'react'

const About = () => {
    return (
        <div id='about-me' className='conatiner w-full lg:w-[80vw] mx-auto flex flex-col gap-10 text-center p-5'>

            <div className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text inline-block mt-5">About Me</div>

            <div className='info flex flex-col gap-12'>
                <p className='para1 bg-blue-50 hover:bg-blue-100 text-gray-800 text-lg font-semibold rounded-2xl py-1 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white hover:transition-all hover:duration-500'>👋 Hey there! I'm Yogesh Chaturvedi, an aspiring MERN Stack Developer from Delhi, India. I specialize in building full-stack web applications using MongoDB, Express, React, and Node.js, along with modern tools like Tailwind CSS.</p>

                <p className='para2 bg-blue-50 hover:bg-blue-100 text-gray-800 text-lg font-semibold rounded-2xl py-1 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white hover:transition-all hover:duration-500'>I’ve recently completed my Bachelor of Computer Applications (BCA) from PDM University, where I built a solid foundation in programming, databases, and web development. During my time there, I focused on strengthening my skills through personal projects and hands-on learning outside the classroom.</p>

                <p className='para3 bg-blue-50 hover:bg-blue-100 text-gray-800 text-lg font-semibold rounded-2xl py-1 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white hover:transition-all hover:duration-500'> Outside the classroom, I’ve focused on hands-on learning through personal projects — turning ideas into real-world applications and continuously improving my skills.</p>

                <p className='para4 bg-blue-50 hover:bg-blue-100 text-gray-800 text-lg font-semibold rounded-2xl py-1 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white hover:transition-all hover:duration-500'>🚀 I'm currently looking for internship or junior developer opportunities where I can learn, grow, and contribute to meaningful projects. I'm a curious explorer who thrives on teamwork and continuous learning.</p>
            </div>

            {/* <div>
                <button className='contactMe mr-5 bg-gradient-to-b from-blue-400 to-indigo-600  hover:from-blue-500 hover:to-indigo-700 transition-all duration-300 shadow-md px-4 py-2 rounded-lg cursor-pointer'>Certificates</button>
            </div> */}
        </div>
    )
}

export default About