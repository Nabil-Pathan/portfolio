import React from 'react';
import { data } from "./Data";


const Work = () => {

    // projects file
    const project = data;
    //setProject(data);

    return (
        <div name='work' className='w-full md:h-screen '>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>

                    <div className='flex flex-col items-center'>
                    <h1 className='text-4xl text-center  font-bold inline '>Work</h1>

                    <hr className='h-1 text-center w-[10%]  bg-orange-400' />
                    </div>
                </div>

                {/* container for projects */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                    {/* Gird Item */}
                    {project.map((item, index) => (
                        <div
                            key={index}
                            style={{ backgroundImage: `url(${item.image})` }}
                            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
                        >
                            {/* Hover effect for images */}
                            <div className="opacity-0 group-hover:opacity-100 ">
                                <span className="text-2xl font bold text-white tracking-wider ">
                                    {item.name}
                                </span>
                                <div className="pt-8 text-center ">
                                    {/* eslint-disable-next-line */}
                                    <a href={item.github} target="_blank">
                                        <button
                                            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                                        >
                                            Code
                                        </button>
                                    </a>
                                    {/* eslint-disable-next-line */}
                                    <a href={item.live} target="_blank">
                                        <button
                                            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                                        >
                                            Live
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    );
};

export default Work;