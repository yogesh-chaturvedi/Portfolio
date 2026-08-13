import React, { useEffect, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {

    const topics = ["Home", "About Me", "Skills", "Experience", "Projects", "Contact"]

    const [menu, setMenu] = useState("Home")
    const [toggle, setToggle] = useState(false)
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark")


    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        }
        else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])


    function handleTheme() {
        if (localStorage.getItem("theme") === 'light') {
            setTheme('dark')
            localStorage.setItem("theme", "dark")
        }
        else {
            setTheme("light")
            localStorage.setItem("theme", "light")
        }
    }


    return (
        <div>

            {/* Desktop Navbar */}

            <motion.nav
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex justify-between bg-slate-100 dark:bg-black items-center p-4 mb-10"
            >

                {/* Logo */}

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="logo flex flex-col ml-3"
                >
                    <span className="text-xl font-bold">
                        Yogesh
                    </span>

                    <span className="text-s font-semibold">
                        Chaturvedi
                    </span>
                </motion.div>


                {/* Desktop Links */}

                <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="tabs hidden md:flex list-none gap-2 lg:gap-8"
                >

                    {topics.map((elements, index) => {

                        const anchorId = elements
                            .toLowerCase()
                            .replace(/\s+/g, '-')

                        return (

                            <motion.li
                                key={elements}
                                initial={{ opacity: 0, y: -15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.3,
                                    delay: 0.4 + index * 0.08
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setMenu(elements)}
                                className={`dark:hover:bg-blue-700 py-1 p-2 hover:bg-gray-700 hover:text-slate-100 rounded-2xl transition-all duration-500 cursor-pointer ${
                                    menu === elements
                                        ? 'dark:bg-blue-700 bg-gray-700 text-white'
                                        : ""
                                }`}
                            >

                                <AnchorLink
                                    offset={50}
                                    href={`#${anchorId}`}
                                >
                                    {elements}
                                </AnchorLink>

                            </motion.li>

                        )
                    })}

                </motion.ul>


                {/* Right Side */}

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-center"
                >

                    {/* Theme */}

                    <motion.span
                        whileHover={{ scale: 1.1, rotate: 15 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleTheme}
                        className="text-xl cursor-pointer px-3 rounded-2xl bg-gray-800 hover:bg-gray-950 dark:bg-blue-700 mr-2"
                    >
                        {theme === 'light' ? '☀️' : '🌙'}
                    </motion.span>


                    {/* Contact */}

                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="contactMe hidden md:block mr-5 dark:bg-gradient-to-b from-blue-400 to-indigo-600 hover:from-blue-500 dark:hover:to-indigo-700 bg-gray-800 hover:bg-gray-900 text-white transition-all duration-300 shadow-md px-4 py-2 rounded-lg cursor-pointer"
                    >
                        <AnchorLink
                            offset={50}
                            href="#contact"
                        >
                            Contact Me
                        </AnchorLink>
                    </motion.button>


                    {/* Mobile Menu Button */}

                    <motion.span
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="md:hidden"
                    >
                        <i
                            onClick={() => setToggle(!toggle)}
                            className="fa-solid fa-bars ml-1 text-2xl cursor-pointer"
                        ></i>
                    </motion.span>

                </motion.div>

            </motion.nav>


            {/* Mobile Menu */}

            <AnimatePresence>

                {toggle && (

                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut"
                        }}
                        className="h-[100vh] w-[170px] z-50 fixed top-0 right-0 bg-slate-200 text-slate-800 dark:text-slate-100 dark:bg-gray-900"
                    >

                        {/* Mobile Header */}

                        <div className="flex justify-between mx-3 my-4 items-center">

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="font-bold text-2xl"
                            >
                                Menu
                            </motion.div>


                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <i
                                    onClick={() => setToggle(false)}
                                    className="fa-solid fa-xmark text-2xl cursor-pointer"
                                ></i>
                            </motion.div>

                        </div>


                        <div className="h-1 w-[100%] bg-black mb-4"></div>


                        {/* Mobile Links */}

                        <ul>

                            {topics.map((elements, index) => {

                                const anchorId = elements
                                    .toLowerCase()
                                    .replace(/\s+/g, '-')

                                return (

                                    <motion.li
                                        key={elements}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: 0.2 + index * 0.08
                                        }}
                                        whileHover={{ x: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => {
                                            setMenu(elements)
                                            setToggle(false)
                                        }}
                                        className={`dark:hover:bg-blue-700 hover:bg-gray-800 hover:text-slate-100 mx-2 dark:text-white border-1 mb-2 text-xl py-1 p-2 rounded-2xl transition-all duration-500 cursor-pointer ${
                                            menu === elements
                                                ? 'dark:bg-blue-700 bg-gray-700 text-white'
                                                : ''
                                        }`}
                                    >

                                        <AnchorLink
                                            offset={50}
                                            href={`#${anchorId}`}
                                        >
                                            {elements}
                                        </AnchorLink>

                                    </motion.li>

                                )
                            })}

                        </ul>

                    </motion.div>

                )}

            </AnimatePresence>

        </div>
    )
}

export default Navbar