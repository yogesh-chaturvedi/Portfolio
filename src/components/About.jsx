import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
    const paragraphs = [
        "👋 I’m a passionate software developer who enjoys building modern and user-friendly web applications. I love turning ideas into simple, functional, and meaningful digital experiences.",

        "I work primarily with React, Next.js, TypeScript, and the MERN stack. I focus on writing clean, maintainable code while continuously improving my development skills.",

        "Currently, I’m gaining real-world experience as a Frontend Intern, working on production-level features and collaborating with a development team. This experience is helping me understand how software is built in a professional environment.",

        "Outside of coding, I enjoy learning new technologies, solving programming problems, working on personal projects, and exploring new ideas. I’m always curious to improve my skills and understand how things work behind the scenes. My goal is to grow into a strong full-stack engineer, contribute to meaningful projects, and build products that are useful, reliable, and enjoyable to use."
    ]

    return (
        <div
            id="about-me"
            className="w-full lg:w-[80vw] mx-auto flex flex-col gap-10 text-center p-5"
        >

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text inline-block mt-5"
            >
                About Me
            </motion.div>


            {/* Paragraphs */}
            <div className="info flex flex-col gap-12">

                {paragraphs.map((paragraph, index) => (
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.15
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                        whileHover={{
                            scale: 1.02,
                            y: -3
                        }}
                        className="bg-blue-50 hover:bg-blue-100 text-gray-800 text-lg font-semibold rounded-2xl py-3 px-5 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white transition-all duration-300"
                    >
                        {paragraph}
                    </motion.p>
                ))}

            </div>

        </div>
    )
}

export default About