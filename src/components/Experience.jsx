import React from 'react'
import { motion } from "framer-motion";

const Experience = () => {
    return (

        <div id='experience' className='container w-full lg:w-[80vw] mx-auto flex flex-col gap-10 text-center p-5'>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text inline-block mt-5"
            >
                Experience
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="mt-6 p-6 rounded-2xl bg-blue-50 hover:bg-blue-100 dark:bg-gray-900 dark:hover:bg-gray-800 transition-all duration-500 shadow-md"
            >

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div className='flex flex-col items-start'>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Frontend Developer Intern
                        </h3>

                        <p className="text-lg font-semibold text-purple-600 dark:text-purple-400 mt-1">
                            Healthletic Lifestyle
                        </p>
                    </div>

                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 px-4 py-2 rounded-full w-fit">
                        June 2026 — Present
                    </span>
                </div>


                {/* Description */}
                <p className="mt-5 text-gray-800 dark:text-gray-200 text-lg font-semibold leading-relaxed">
                    Contributing to the Healthletic Management System by building frontend
                    features, implementing forms and validations, fixing bugs, and
                    collaborating with the development team.
                </p>


                {/* Tech Stack */}
                <div className="mt-5">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                        Tech Stack
                    </h4>

                    <div className="flex items-center justify-center flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-semibold dark:bg-purple-900 dark:text-purple-200">
                            Next.js
                        </span>

                        <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold dark:bg-blue-900 dark:text-blue-200">
                            TypeScript
                        </span>

                        <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 font-semibold dark:bg-pink-900 dark:text-pink-200">
                            Zod
                        </span>

                        <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold dark:bg-green-900 dark:text-green-200">
                            React Hook Form
                        </span>

                        <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 font-semibold dark:bg-yellow-900 dark:text-yellow-200">
                            Context API
                        </span>

                        <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 font-semibold dark:bg-gray-700 dark:text-gray-200">
                            Git
                        </span>

                        <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 font-semibold dark:bg-gray-700 dark:text-gray-200">
                            GitHub
                        </span>
                    </div>
                </div>


                {/* Contributions */}
                <div className="mt-6">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 text-center">
                        Key Contributions
                    </h4>


                    <div className='flex justify-center'>
                        <div className="flex flex-col items-start space-y-2 text-gray-800 dark:text-gray-200 font-medium">
                            <p>• Building and maintaining frontend features</p>
                            <p>• Working on HMS application workflows</p>
                            <p>• Implementing forms and validation</p>
                            <p>• Fixing bugs and improving UI</p>
                            <p>• Following Git/GitHub workflow and pull requests</p>
                        </div>
                    </div>
                </div>

            </motion.div>
        </div >
    )
}

export default Experience
