import React from 'react'

function Navbar() {

    const navItem = (<>
        <li className='text-gray-300 hover:text-white transition-colors'><a href='#home'>Home</a></li>
        <li className='text-gray-300 hover:text-white transition-colors'><a href='#about'>About</a></li>
        <li className='text-gray-300 hover:text-white transition-colors'><a href='#projects'>Projects</a></li>
        <li className='text-gray-300 hover:text-white transition-colors'><a href='#contact'>Contact</a></li>
    </>);

    return (
        <>
            <div className='fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg'>
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <a href="#home" className='font-mono text-xl font-bold text-white'>
                            {" "}md<span className='text-blue-500'>.ali</span>{" "}
                        </a>
                        <div>
                            <div className="dropdown dropdown-left">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-md font-mono text-xl bg-black font-bold dropdown-content border border-white/10 shadow-lg rounded-box z-2 mt-3 w-25 p-2 shadow transform transition-transform duration-300">
                                    {navItem}
                                </ul>
                            </div>
                            <div className="hidden lg:flex items-center">
                                <ul className="menu menu-horizontal font-mono text-md ">
                                    {navItem}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
