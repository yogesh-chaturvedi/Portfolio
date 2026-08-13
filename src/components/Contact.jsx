import React, {useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion'

const Contact = () => {


    const phoneNumber = import.meta.env.VITE_CONTACT_NUMBER

    const contactData = [

        { id: 1, title: 'Email', info: 'yogeshchaturvedi2425@gmail.com' },
        { id: 2, title: 'Phone', info: phoneNumber },
        { id: 3, title: 'Location', info: 'Paschim Vihar, New Delhi, India' }

    ]

    const [loader, setLoader] = useState(false)

    function handleCopy(text) {
        if (navigator.clipboard.writeText(text)) {
            toast("Text Copied Successfully", {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    function handleProfile(link) {
        window.open(`${link}`, "_blank")
    }

    const firstInput = useRef()
    const secondInput = useRef()
    const thirdInput = useRef()

    const onSubmit = async (event) => {
        event.preventDefault();

        if (!firstInput.current.value == "" && !secondInput.current.value == "" && !thirdInput.current.value == "") {
            setLoader(true)
            const formData = new FormData(event.target);

            formData.append("access_key", "389eebdc-43bb-4a92-a7fe-7387dec353c2");

            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());

            if (res.success) {
                firstInput.current.value = ""
                secondInput.current.value = ""
                thirdInput.current.value = ""
                setLoader(false)
                toast(res.message, {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
            else {
                toast('Something went wrong', {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
        }
        else {
            toast('Fill all details', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };

    return (
       <div
    id="contact"
    className="mx-auto w-full lg:w-[80vw] text-center flex flex-col justify-center gap-y-10 p-5"
>
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
    />

    {/* Heading */}
    <div className="flex flex-col items-center">

        <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="title h-16 text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text inline-block"
        >
            Contact
        </motion.h1>

        <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] text-xs md:text-lg font-semibold"
        >
            Have a project in mind and want to collaborate? Feel free to
            reach out. I'm always open to discussing new opportunities.
        </motion.p>

    </div>


    {/* Main Contact Area */}
    <div className="flex flex-col gap-5 md:flex-row md:justify-evenly">

        {/* LEFT CARD */}
        <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -5 }}
            className="left border border-black dark:border-white rounded-2xl h-auto md:w-[45%] text-slate-900 dark:text-white flex flex-col justify-evenly py-4 bg-blue-50 hover:bg-blue-100 dark:bg-gray-900 dark:hover:bg-gray-800 transition-all duration-500 shadow-md"
        >

            <h3 className="font-bold text-2xl">
                Contact Information
            </h3>


            {/* Contact Information */}
            <div className="contactInfo px-3 py-6 flex flex-col items-center gap-7">

                {contactData.map((items, index) => (

                    <motion.div
                        key={items.id}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.15
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="border-1 w-full rounded-2xl p-1 hover:bg-gray-300 bg-gray-200 dark:bg-gray-900 shadow-md border border-gray-200 flex gap-1 md:gap-3 items-center"
                    >

                        <span>
                            <i className="fa-solid fa-envelope text-2xl px-3 py-2 rounded-full bg-gray-300 dark:bg-gray-800"></i>
                        </span>

                        <div className="flex flex-col items-start w-full break-words">

                            <p className="text-left text-sm md:text-base font-bold">
                                {items.title}
                            </p>

                            <p className="break-all text-left text-sm md:text-base">
                                {items.info}

                                <motion.i
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => handleCopy(items.info)}
                                    className="fa-solid fa-copy cursor-pointer text-xl ml-2"
                                ></motion.i>

                            </p>

                        </div>

                    </motion.div>

                ))}

            </div>


            {/* Social Media */}
            <div>
                <p className="font-semibold">
                    Connect With Me
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="icons flex justify-center gap-2 mt-2"
                >

                    <motion.span
                        whileHover={{ scale: 1.2, y: -4 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <i
                            onClick={() => handleProfile("https://www.instagram.com/yogeshchaturvedi_25")}
                            className="fa-brands fa-instagram cursor-pointer text-xl px-2 py-1 rounded-full hover:bg-gray-400 dark:hover:bg-gray-800"
                        ></i>
                    </motion.span>

                    <motion.span
                        whileHover={{ scale: 1.2, y: -4 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <i
                            onClick={() => handleProfile("https://www.linkedin.com/in/yogesh-chaturvedi-b34792345")}
                            className="fa-brands fa-linkedin cursor-pointer text-xl px-2 py-1 rounded-full hover:bg-gray-400 dark:hover:bg-gray-800"
                        ></i>
                    </motion.span>

                    <motion.span
                        whileHover={{ scale: 1.2, y: -4 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <i
                            onClick={() => handleProfile("https://x.com/yogeshchat54961")}
                            className="fa-brands fa-x-twitter cursor-pointer text-xl px-2 py-1 rounded-full hover:bg-gray-400 dark:hover:bg-gray-800"
                        ></i>
                    </motion.span>

                    <motion.span
                        whileHover={{ scale: 1.2, y: -4 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <i
                            onClick={() => handleProfile("https://github.com/yogesh-chaturvedi")}
                            className="fa-brands fa-github text-xl px-2 py-1 hover:bg-gray-400 dark:hover:bg-gray-600 rounded-full cursor-pointer"
                        ></i>
                    </motion.span>

                </motion.div>
            </div>

        </motion.div>


        {/* RIGHT CARD / FORM */}
        <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -5 }}
            className="right border dark:border-white border-black rounded-2xl h-[450px] md:w-[45%] flex flex-col justify-evenly text-slate-900 dark:text-white bg-blue-50 hover:bg-blue-100 dark:bg-gray-900 dark:hover:bg-gray-800 transition-all duration-500 shadow-md"
        >

            <h3 className="text-2xl font-bold">
                Send a Message
            </h3>


            <form onSubmit={onSubmit}>

                <div className="flex flex-col gap-6">

                    {/* Name */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-1 items-center"
                    >
                        <label htmlFor="Your Name" className="font-bold">
                            Your Name
                        </label>

                        <input
                            ref={firstInput}
                            className="border dark:border-white border-black px-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-900 rounded-3xl w-[80%] h-[40px] outline-none placeholder-black dark:placeholder-white"
                            type="text"
                            name="name"
                            placeholder="Enter Your Name"
                        />
                    </motion.div>


                    {/* Email */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-1 items-center"
                    >
                        <label htmlFor="Your email" className="font-bold">
                            Your Email
                        </label>

                        <input
                            ref={secondInput}
                            className="border dark:border-white border-black px-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-900 rounded-3xl w-[80%] h-[40px] outline-none placeholder-black dark:placeholder-white"
                            type="text"
                            name="email"
                            placeholder="Enter Your Email"
                        />
                    </motion.div>


                    {/* Message */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-1 items-center"
                    >
                        <label htmlFor="Your message" className="font-bold">
                            Your Message
                        </label>

                        <textarea
                            ref={thirdInput}
                            className="border dark:border-white border-black px-2 py-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-900 rounded-3xl w-[80%] outline-none placeholder-black dark:placeholder-white"
                            rows={3}
                            name="message"
                            placeholder="Enter Your Message Here..."
                        />
                    </motion.div>

                </div>


                {/* Send Button */}
                <motion.button
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="mt-8 mr-5 dark:bg-gradient-to-b from-blue-400 to-indigo-600 dark:hover:from-blue-500 dark:hover:to-indigo-700 bg-gray-800 text-slate-100 hover:bg-gray-950 transition-all duration-300 shadow-md px-4 py-2 rounded-lg cursor-pointer"
                >
                    {loader ? 'Submitting...' : 'Send'}
                </motion.button>

            </form>

        </motion.div>

    </div>

</div>
    )
}

export default Contact