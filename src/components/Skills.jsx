import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Skills() {
    const [categories, setCatogries] = useState("All")

    const skillsData = [
        { name: "HTML/CSS", level: "90%", width: "90%", category: "Frontend" },
        { name: "JavaScript", level: "80%", width: "80%", category: "Frontend" },
        { name: "React.js", level: "85%", width: "85%", category: "Frontend" },
        { name: "Next.js", level: "85%", width: "85%", category: "Frontend" },
        { name: "TypeScript", level: "80%", width: "80%", category: "Frontend" },
        { name: "Tailwind", level: "90%", width: "90%", category: "Frontend" },

        { name: "Node.js", level: "70%", width: "70%", category: "Backend" },
        { name: "Express", level: "75%", width: "75%", category: "Backend" },
        { name: "MongoDB", level: "80%", width: "80%", category: "Backend" },

        { name: "Git/GitHub", level: "80%", width: "80%", category: "Tools" },
        { name: "Postman", level: "70%", width: "70%", category: "Tools" },
        { name: "ClickUp", level: "70%", width: "70%", category: "Tools" },
    ]

    const fields = ["All", "Frontend", "Backend", "Tools"]

    const filteredSkills = skillsData.filter(
        (element) =>
            categories === "All" ||
            element.category === categories
    )

    return (
        <div
            id="skills"
            className="mx-auto w-full lg:w-[80vw] text-center flex flex-col gap-10 px-5 py-8"
        >

            {/* ================= HEADING ================= */}

            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.7,
                    ease: "easeOut"
                }}
                viewport={{ once: true }}
                className="title text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text h-16 inline-block"
            >
                My Skills
            </motion.h1>


            {/* ================= CATEGORIES ================= */}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.6,
                    delay: 0.2
                }}
                viewport={{ once: true }}
                className="Categories flex justify-center gap-3 md:gap-8"
            >

                {fields.map((items, index) => (

                    <motion.button
                        key={items}
                        initial={{
                            opacity: 0,
                            y: 15
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.4,
                            delay: 0.3 + index * 0.1
                        }}
                        viewport={{ once: true }}

                        whileHover={{
                            y: -3,
                            scale: 1.05
                        }}

                        whileTap={{
                            scale: 0.92
                        }}

                        onClick={() => setCatogries(items)}

                        className={`
                            relative font-bold px-4 py-2 rounded-xl
                            cursor-pointer transition-all duration-300

                            ${categories === items
                                ? 'bg-gray-800 text-white dark:bg-blue-600'
                                : 'hover:bg-gray-800 hover:text-white dark:hover:bg-blue-600'
                            }
                        `}
                    >
                        {items}

                        {/* Active indicator */}

                        {categories === items && (

                            <motion.div
                                layoutId="activeCategory"
                                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-1 rounded-full bg-pink-500"
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 25
                                }}
                            />

                        )}

                    </motion.button>

                ))}

            </motion.div>


            {/* ================= SKILLS ================= */}

            <div className="skill text-start flex justify-evenly gap-y-5 md:gap-y-16 flex-wrap min-h-[180px]">

                <AnimatePresence mode="popLayout">

                    {filteredSkills.map((items, index) => (

                        <motion.div
                            key={items.name}

                            initial={{
                                opacity: 0,
                                y: 40,
                                scale: 0.9
                            }}

                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1
                            }}

                            exit={{
                                opacity: 0,
                                y: -20,
                                scale: 0.9
                            }}

                            transition={{
                                duration: 0.45,
                                delay: index * 0.08,
                                ease: "easeOut"
                            }}

                            whileHover={{
                                y: -8,
                                scale: 1.03
                            }}

                            className="
                                border-2
                                dark:border-white
                                border-black
                                rounded-2xl
                                flex
                                flex-col
                                gap-3
                                justify-center
                                bg-gray-200
                                hover:bg-gray-300
                                text-slate-900
                                dark:bg-black
                                dark:hover:bg-gray-900
                                dark:text-white
                                h-24
                                w-[350px]
                                px-4
                                py-3
                                transition-colors
                                duration-300
                                shadow-md
                                hover:shadow-xl
                            "
                        >

                            {/* Skill name */}

                            <div className="flex justify-between items-center">

                                <h3 className="font-semibold text-xl">
                                    {items.name}
                                </h3>

                            </div>


                            {/* Progress Bar */}

                            <div className="relative w-full h-2.5 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">

                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{
                                        width: items.width
                                    }}
                                    transition={{
                                        duration: 1.2,
                                        delay: 0.25 + index * 0.08,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    className="
                                        h-full
                                        rounded-full
                                        bg-gradient-to-r
                                        from-purple-600
                                        via-pink-500
                                        to-red-500
                                        relative
                                    "
                                >

                                    {/* Moving shine */}

                                    <motion.div
                                        initial={{
                                            x: "-100%"
                                        }}
                                        animate={{
                                            x: "200%"
                                        }}
                                        transition={{
                                            duration: 1,
                                            delay: 0.7 + index * 0.08
                                        }}
                                        className="absolute top-0 left-0 h-full w-10 bg-white/30 blur-sm"
                                    />

                                </motion.div>

                            </div>


                            {/* Percentage */}

                            <motion.span
                                initial={{
                                    opacity: 0,
                                    x: -5
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0
                                }}
                                transition={{
                                    duration: 0.4,
                                    delay: 1 + index * 0.08
                                }}
                                className="text-xs font-bold text-gray-600 dark:text-gray-300"
                            >
                                {items.level}
                            </motion.span>

                        </motion.div>

                    ))}

                </AnimatePresence>

            </div>

        </div>
    )
}

export default Skills