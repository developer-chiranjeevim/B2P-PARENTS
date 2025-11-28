import React from "react";

const Navbar : React.FC = () => {


    return(
        <div className="">
            <div className="fixed w-full top-0 bg-white z-10 flex justify-center items-center shadow-lg px-[2rem] py-[1rem]">
                <div className="w-full">
                    {/* navbar logo container */}
                    <div className="cursor-pointer select-none">
                        <h1 className="text-[1.5rem] font-semibold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">B2PTeachers</h1>
                    </div>
                </div>
                <div className="hidden md:block">
                    {/* <ul className="inline-flex items-center gap-[2rem]">
                        <li onClick={() => navigate("/dashboard")} className="cursor-pointer">
                            <a className="capitalize text-gray-700 font-semibold hover:text-blue-700">teachers</a>
                        </li>
                        <li onClick={() => navigate("/student-dashboard")} className="cursor-pointer">
                            <a className="capitalize text-gray-700 font-semibold hover:text-blue-700">students</a>
                        </li>
                        <li onClick={() => navigate("/meetings")} className="cursor-pointer">
                            <a className="capitalize text-gray-700 font-semibold hover:text-blue-700">meetings</a>
                        </li>
                    </ul> */}
                </div>
                {/* <div onClick={() => setIsNavbarActive(!isNavbarActive)} className="block md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div> */}
            </div>
            {/* <div className={isNavbarActive?"fixed w-full min-h-[20rem] h-fit bg-gray-50 px-[2rem] top-0 duration-300 md:hidden" : "fixed w-full min-h-[20rem] h-fit bg-gray-50 px-[2rem] -top-100 duration-300 md:hidden"}>
                <div className="w-full h-[80px]"></div>
                <div className="py-[1rem]">
                    <ul className="flex flex-col gap-[1.25rem]">
                        <li onClick={() => navigate("/dashboard")} className="border-[1px] border-blue-700 rounded-lg px-[1rem] py-[0.5rem] bg-white">
                            <a className="capitalize inline-flex w-full items-center justify-between text-blue-700">
                                <h1 className="font-semibold">teachers</h1>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </a>
                        </li>
 
                        <li onClick={() => navigate("/student-dashboard")} className="border-[1px] border-blue-700 rounded-lg px-[1rem] py-[0.5rem] bg-white">
                            <a  className="capitalize inline-flex w-full items-center justify-between text-blue-700">
                                <h1 className="font-semibold">students</h1>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                </svg>
                            </a>
                        </li>

                        <li onClick={() => navigate("/meetings")} className="border-[1px] border-blue-700 rounded-lg px-[1rem] py-[0.5rem] bg-white">
                            <a className="capitalize inline-flex w-full items-center justify-between text-blue-700">
                                <h1 className="font-semibold">meetings</h1>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div> */}
            <div className="w-full h-[80px]"></div>
        </div>
    );
};



export default Navbar;