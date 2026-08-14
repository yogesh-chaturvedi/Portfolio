import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'

function Hero() {
    return (
        <div
            id="home"
            className="mx-auto py-5 flex flex-col w-full lg:w-[80vw] h-[80vh] justify-center text-center items-center gap-10"
        >

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="info w-[90%] font-bold text-3xl md:text-5xl md:w-[75%] text-center"
            >

                {/* Greeting */}
                <motion.span
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="font-extrabold mb-4 py-1 leading-tight bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text inline-block"
                >
                    Hey, I'm Yogesh Chaturvedi 👋
                </motion.span>


                {/* Role */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="font-extrabold text-3xl my-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text inline-block"
                >
                    Frontend Developer | Full-Stack Enthusiast
                </motion.p>


                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="text-xl sm:text-2xl md:text-3xl"
                >
                    I’m a developer passionate about building clean, responsive,
                    and practical web applications. I work with React, Next.js,
                    TypeScript, and the MERN stack, and I’m always learning and
                    building something new.
                </motion.p>

            </motion.div>


            {/* Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="flex justify-center flex-wrap gap-5"
            >

                {/* Contact */}
                <motion.button
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="contactMe dark:bg-gradient-to-b from-blue-400 to-indigo-600 hover:from-blue-500 dark:hover:to-indigo-700 bg-gray-800 hover:bg-gray-950 text-white transition-all duration-300 shadow-md px-4 py-2 rounded-lg cursor-pointer"
                >
                    <AnchorLink offset={50} href="#contact">
                        Connect With Me
                    </AnchorLink>
                </motion.button>


                {/* CV */}
                <motion.button
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="contactMe dark:bg-gradient-to-b from-blue-400 to-indigo-600 hover:from-blue-500 dark:hover:to-indigo-700 bg-gray-800 hover:bg-gray-950 text-white transition-all duration-300 shadow-md px-4 py-2 rounded-lg cursor-pointer"
                >
                    <a
                        href="/yogesh_chaturvedi_resume.pdf"
                        download="Yogesh-Chaturvedi-CV.pdf"
                    >
                        Download CV
                    </a>
                </motion.button>


                {/* Projects */}
                <motion.button
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="contactMe dark:bg-gradient-to-b from-blue-400 to-indigo-600 hover:from-blue-500 dark:hover:to-indigo-700 bg-gray-800 hover:bg-gray-950 text-white transition-all duration-300 shadow-md px-4 py-2 rounded-lg cursor-pointer"
                >
                    <AnchorLink offset={50} href="#projects">
                        View Projects
                    </AnchorLink>
                </motion.button>

            </motion.div>

        </div>
    )
}

export default Hero
