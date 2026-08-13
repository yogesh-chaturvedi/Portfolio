import React from 'react'

const About = () => {
    return (
        <div id='about-me' className='conatiner w-full lg:w-[80vw] mx-auto flex flex-col gap-10 text-center p-5'>

            <div className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text inline-block mt-5">About Me</div>

            <div className='info flex flex-col gap-12'>
                <p className='para1 bg-blue-50 hover:bg-blue-100 text-gray-800 text-lg font-semibold rounded-2xl py-1 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white hover:transition-all hover:duration-500'>👋 I’m a passionate software developer who enjoys building modern and user-friendly web applications. I love turning ideas into simple, functional, and meaningful digital experiences.</p>

                <p className='para2 bg-blue-50 hover:bg-blue-100 text-gray-800 text-lg font-semibold rounded-2xl py-1 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white hover:transition-all hover:duration-500'>I work primarily with React, Next.js, TypeScript, and the MERN stack. I focus on writing clean, maintainable code while continuously improving my development skills.</p>

                <p className='para3 bg-blue-50 hover:bg-blue-100 text-gray-800 text-lg font-semibold rounded-2xl py-1 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white hover:transition-all hover:duration-500'>Currently, I’m gaining real-world experience as a Frontend Intern, working on production-level features and collaborating with a development team. This experience is helping me understand how software is built in a professional environment.</p>

                <p className='para4 bg-blue-50 hover:bg-blue-100 text-gray-800 text-lg font-semibold rounded-2xl py-1 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white hover:transition-all hover:duration-500'>Outside of coding, I enjoy learning new technologies, solving programming problems, working on personal projects, and exploring new ideas. I’m always curious to improve my skills and understand how things work behind the scenes. My goal is to grow into a strong full-stack engineer, contribute to meaningful projects, and build products that are useful, reliable, and enjoyable to use.</p>
            </div>

        </div>
    )
}

export default About