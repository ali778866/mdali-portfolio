import React, { useState } from 'react'
import resume from "../Data/resume.pdf"
import image from "../Data/myPhoto.jpg"

function Home() {
    const [isImageOpen, setImageOpen] = useState(false);

    return (
        <>
            <div id="home" className='min-h-screen flex items-center justify-center relative'>
                <div className='text-center z-10 px-4'>
                    <h1 onClick={() => setImageOpen(true)} className='text-5xl md:text-7xl font-mono font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right'>
                        Hi, I'm Md Ali Ansari
                    </h1>
                    <p className='text-gray-400 font-mono text-lg mb-8 max-w-lg mx-auto'>
                        I'm a full-stack devloper who loves crafting clean, scalable web applications.
                        My goal is to build solution that offer both exceptional performance and a
                        delightful user experience.
                    </p>
                    <div className='flex flex-wrap justify-center space-x-4 gap-y-3'>
                        <a href="#projects" className='bg-blue-500 text-white py-3 px-6 font-mono rounded font-medium transition relative
                        overflow-hidden hover:-translate-y-0.5 hover: shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] '>View Projects</a>
                        <a href="#contact" className='border border-blue-500 text-blue-400 font-mono py-3 px-6 rounded font-medium transition-all
                        duration-200 hover:-translate-y-0.5 hover: shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover: bg-blue-500/10'>Contact Me</a>
                        <a href={resume} target="_blank" rel="noopener noreferrer" className='border font-mono border-blue-500 text-blue-400 py-3 
                        px-6 rounded font-medium transition-all
                        duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10'>Resume</a>
                    </div>
                </div>
            </div>

            {isImageOpen && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                    <div className="relative bg-gray-800 rounded-lg shadow-lg p-4 max-w-sm">
                        <button
                            className="absolute top-1 right-1 text-white bg-gray-700 w-9 h-9 rounded-full text-4xl font-bold hover:text-red-700 "
                            onClick={() => setImageOpen(false)}
                        >
                            &times;
                        </button>
                        <img
                            src={image}
                            alt="Popup"
                            className="rounded"
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default Home
