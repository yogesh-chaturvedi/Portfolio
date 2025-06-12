import React, { useState } from 'react'

function Skills() {
    const [categories, setCatogries] = useState("All")


    const skillsData = [
        { name: "HTML/CSS", level: "90%", width: "90%", category: "Frontend" },
        { name: "JavaScript", level: "80%", width: "80%", category: "Frontend" },
        { name: "React", level: "85%", width: "85%", category: "Frontend" },
        { name: "Tailwind", level: "90%", width: "90%", category: "Frontend" },
        { name: "Node.js", level: "70%", width: "70%", category: "Backend" },
        { name: "Express", level: "75%", width: "75%", category: "Backend" },
        { name: "MongoDB", level: "80%", width: "80%", category: "Backend" },
        { name: "Git/GitHub", level: "80%", width: "80%", category: "Tools" },
        { name: "Postman", level: "70%", width: "70%", category: "Tools" },
    ];

    const fields = ["All", "Frontend", "Backend", "Tools"]

    return (
        <div id='my-skills' className='mx-auto w-full lg:w-[80vw] text-center flex flex-col gap-10 px-5 py-8'>

            <h1 className='title text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text h-16 inline-block'>My Skills</h1>

            <div className="Categories flex justify-center gap-3 md:gap-8">

                {fields.map((items) => {
                    return (
                        <span key={items} onClick={() => setCatogries(items)} className={`font-bold p-2 rounded-xl cursor-pointer hover:bg-gray-800 hover:text-slate-100 dark:hover:bg-blue-600 transition-all duration-300 ${categories === items ? 'dark:bg-blue-600 bg-gray-800 text-slate-100 dark:text-white' : 'dark:hover:bg-blue-600 '}`}>{items}</span>
                    )
                })}

            </div>

            <div className="skill text-start flex justify-evenly gap-y-5 md:gap-y-16 flex-wrap">
                {
                    skillsData.filter((element, index) => categories === "All" || element.category === categories)
                        .map((items, index) => (
                            <div key={index} className='border-2 dark:border-white border-black rounded-2xl flex flex-col gap-2 justify-items-start bg-gray-200 hover:bg-gray-300 text-slate-900 dark:bg-black dark:text-white h-20 w-[350px] px-4 py-2'>
                                <h3 className='font-semibold text-xl'>{items.name}</h3>
                                <p style={{ width: items.width }} className='block rounded-lg h-2.5 bg-blue-600 relative '>
                                    <span className='absolute right-0 top-2'>{items.level}</span>
                                </p>
                            </div>
                        ))}
            </div>
        </div>
    )
}

export default Skills
