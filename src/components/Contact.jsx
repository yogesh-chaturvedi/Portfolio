import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {

    const [loader, setLoader] = useState(false)

    function handleCopy(text) {
        if (navigator.clipboard.writeText(text)) {
            toast("text copied successfully", {
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
        <div id='contact' className=' mx-auto w-full lg:w-[80vw] text-center flex flex-col justify-center gap-y-10 p-5 '>
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
            <div className='flex flex-col items-center'>
                <h1 className='title h-16 text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text inline-block'>Contact</h1>
                <p className='w-full sm:w-[90%] md:w-[80%] lg:w-[70%] text:xs md:text-lg font-semibold'>Have a project in maind and want to collaborate? Feel free to reach out. I'm always open to disscuss new opportunities</p>
            </div>

            <div className='flex flex-col gap-5 md:flex-row md:justify-evenly'>
                <div className="left border border-black dark:border-white rounded-2xl h-auto md:w-[45%] bg-gray-100 text-slate-900 dark:text-white dark:bg-gray-950 flex flex-col justify-evenly py-4">
                    <h3 className='font-bold text-2xl'>Contact Information</h3>

                    <div className='contactInfo px-3 py-6 flex flex-col items-center gap-7 '>
                        {/* first */}
                        <div className='border-1 w-full rounded-2xl p-1 hover:bg-gray-300 bg-gray-200 dark:bg-black flex gap-1 md:gap-3 items-center'>
                            <span><i className="fa-solid fa-envelope text-2xl px-3 py-2 rounded-full bg-gray-300 dark:bg-gray-800"></i></span>

                            <div className='flex flex-col items-start w-full break-words'>
                                <p className='text-left text-sm md:text-base font-bold'>Email</p>
                                <p className='break-all text-left text-sm md:text-base'>yogeshchaturvedi2425@gmail.com <i onClick={() => { handleCopy("yogeshchaturvedi2425@gmail.com") }} className="fa-solid fa-copy cursor-pointer text-xl ml-2"></i></p>
                            </div>

                        </div>

                        {/* second */}
                        <div className='border-1 w-full rounded-2xl p-1 hover:bg-gray-300 bg-gray-200 dark:bg-black flex gap-1 md:gap-3 items-center'>
                            <span><i className="fa-solid fa-phone text-2xl px-3 py-2 rounded-3xl bg-gray-300 dark:bg-gray-800"></i></span>

                            <div className='flex flex-col items-start w-full break-words'>
                                <p className='text-left text-sm md:text-base font-bold'>Phone</p>
                                <p className='break-all text-left text-sm md:text-base'>(+91 9953660916)<i onClick={() => { handleCopy("9953660916") }} className="fa-solid fa-copy cursor-pointer text-xl ml-2"></i></p>
                            </div>

                        </div>

                        {/* third */}
                        <div className='border-1 w-full rounded-2xl p-1 hover:bg-gray-300 bg-gray-200 dark:bg-black flex gap-1 md:gap-3 items-center'>

                            <span><i className="fa-solid fa-location-dot text-2xl px-4 py-2 rounded-3xl bg-gray-300 dark:bg-gray-800"></i></span>

                            <div className='flex flex-col items-start w-full break-words'>
                                <p className='text-left text-sm md:text-base font-bold'>Location</p>
                                <p className='break-all text-left text-sm md:text-base'>Paschim Vihar, New Delhi, India <i onClick={() => { handleCopy("Paschim Vihar, New Delhi, India") }} className="fa-solid fa-copy cursor-pointer text-xl ml-2"></i></p>
                            </div>

                        </div>
                    </div>

                    <div className=''>
                        <p>Connect With Me</p>
                        <div className='icons'>
                            <span><i onClick={() => handleProfile("https://www.instagram.com/yogeshchaturvedi_25?igsh=c2ViYXQ4bHNiOXZq")} className="fa-brands fa-instagram cursor-pointer text-xl px-2 py-1 rounded-full hover:bg-gray-400 dark:hover:bg-gray-800"></i></span>
                            <span><i onClick={() => { handleProfile("https://www.linkedin.com/in/yogesh-chaturvedi-b34792345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app") }} className="fa-brands fa-linkedin cursor-pointer text-xl px-2 py-1 rounded-full hover:bg-gray-400 dark:hover:bg-gray-800"></i></span>
                            <span><i onClick={() => { handleProfile("https://x.com/yogeshchat54961?t=bn3arm_0WzsHTP6C0kIcbw&s=08") }} className="fa-brands fa-x-twitter cursor-pointer text-xl px-2 py-1 rounded-full hover:bg-gray-400 dark:hover:bg-gray-800"></i></span>
                            <span><i onClick={() => handleProfile("https://github.com/yogesh-chaturvedi")} className="fa-brands fa-github text-xl px-2 py-1 hover:bg-gray-400 dark:hover:bg-gray-600 rounded-full"></i></span>
                        </div>
                    </div>

                </div>


                <div className="right border dark:border-white border-black rounded-2xl dark:bg-gray-950 h-[450px] md:w-[45%] flex flex-col justify-evenly bg-gray-100 text-slate-900 dark:text-white ">

                    <h3 className='text-2xl font-bold'>Send a Message</h3>

                    <form onSubmit={onSubmit}>
                        <div className='flex flex-col gap-6'>
                            {/* first */}
                            <div className='flex flex-col gap-1 items-center'>
                                <label htmlFor="Your Name" className='font-bold'>Your Name</label>
                                <input ref={firstInput} className='border dark:border-white border-black  px-2 bg-gray-200 hove:bg-gray-300 dark:bg-black rounded-3xl w-[80%] h-[40px] outline-none placeholder-black dark:placeholder-white' type="text" name='name' placeholder='Enter Your Name' />

                            </div>
                            {/* second */}
                            <div className='flex flex-col gap-1 items-center'>
                                <label htmlFor="Your email" className='font-bold'>Your Email</label>
                                <input ref={secondInput} className='border dark:border-white border-black px-2 bg-gray-200 hove:bg-gray-300 dark:bg-black rounded-3xl w-[80%] h-[40px] outline-none placeholder-black dark:placeholder-white' type="text" name='email' placeholder='Enter Your Email' />

                            </div>
                            {/* third */}
                            <div className='flex flex-col gap-1 items-center'>
                                <label htmlFor="Your message" className='font-bold'>Your Message</label>
                                <textarea ref={thirdInput} className='border dark:border-white border-black px-2 py-1 bg-gray-200 hove:bg-gray-300 dark:bg-black rounded-3xl w-[80%] outline-none placeholder-black dark:placeholder-white' rows={3} type="text" name='message' placeholder='Enter Your Message Here...' />

                            </div>
                        </div>
                        <button type='submit' className='mt-8 mr-5 dark:bg-gradient-to-b from-blue-400 to-indigo-600 dark:hover:from-blue-500 dark:hover:to-indigo-700 bg-gray-800 text-slate-100 hover:bg-gray-950 transition-all duration-300 shadow-md px-4 py-2 rounded-lg cursor-pointer '>{loader ? 'Submitting...' : 'Send'}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact