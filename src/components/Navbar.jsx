import React, { useEffect, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navbar() {

    const topics = ["Home", "About Me", "My Skills", "Projects", "Contact"]
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
            localStorage.setItem("theme", ("dark"))
        }
        else {
            setTheme("light")
            localStorage.setItem("theme", ("light"))
        }
    }

    return (
        <div>
            {/* desktop */}
            <nav className='flex justify-between bg-slate-100  dark:bg-black items-center p-4 mb-10 '>
                <div className="logo flex flex-col ml-3">
                    <span className='text-xl font-bold'>Yogesh</span>
                    <span className='text-s font-semibold'>Chaturvedi</span>
                </div>


                <ul className="tabs hidden md:flex list-none gap-2 lg:gap-8 ">
                    {topics.map((elements, index) => {
                        const anchorId = elements.toLowerCase().replace(/\s+/g, '-')
                        return (
                            <li onClick={() => setMenu(elements)} key={index} className={`dark:hover:bg-blue-700 py-1 p-2 hover:bg-gray-700 hover:text-slate-100 rounded-2xl transition-all duration-500 cursor-pointer ${menu === elements ? 'dark:bg-blue-700 bg-gray-700 text-white' : ""}`}><AnchorLink offset={50} href={`#${anchorId}`} >{elements}</AnchorLink></li>
                        )
                    })}
                </ul>

                <div className='flex items-center'>
                    <span onClick={() => handleTheme()} className='text-xl cursor-pointer px-3 rounded-2xl bg-gray-800 hover:bg-gray-950 dark:bg-blue-700 mr-2 '>{theme === 'light' ? '☀️' : '🌙'}</span>
                    <button className='contactMe md:block mr-5 dark:bg-gradient-to-b from-blue-400 to-indigo-600  hover:from-blue-500 dark:hover:to-indigo-700 bg-gray-800 hover:bg-gray-900 text-white transition-all duration-300 shadow-md px-4 py-2 rounded-lg cursor-pointer'><AnchorLink offset={50} href='#contact' >Contact Me</AnchorLink></button>
                    <span className='md:hidden'><i onClick={() => setToggle(!toggle)} className="fa-solid fa-bars cursor-pointer"></i></span>
                </div>
            </nav>


            {/* mobile */}
            <div className={`h-[100vh] w-[170px] z-10 fixed top-0 right-0 bg-slate-200 text-slate-800 dark:text-slate-100 dark:bg-gray-900 ${toggle ? 'translate-x-0' : 'translate-x-full'} `}>
                <div className='flex justify-between mx-3 my-4 items-center'>
                    <div className='font-bold text-2xl'>Menu</div>
                    <div><i onClick={() => setToggle(false)} className="fa-solid fa-xmark text-2xl cursor-pointer"></i></div>
                </div>
                <div className='h-1 w-[100%] bg-black mb-4'></div>

                <ul>
                    {topics.map((elements, index) => {
                        const anchorId = elements.toLowerCase().replace(/\s+/g, '-')
                        return (
                            <li onClick={() => { setMenu(elements) }} className={`dark:hover:bg-blue-700 hover:bg-gray-800 hover:text-slate-100 mx-2 dark:text-white border-1 mb-2 text-xl py-1 p-2 rounded-2xl transition-all duration-500 cursor-pointer ${menu === elements ? 'dark:bg-blue-700 bg-gray-700 text-white' : ''}`} key={index}><AnchorLink offset={50} href={`#${anchorId}`}>{elements}</AnchorLink></li>
                        )
                    })}
                </ul>
            </div>

        </div>
    )
}

export default Navbar