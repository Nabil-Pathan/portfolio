import React from 'react'
import HeroImage from "../images/hero2.png"
import Svg from "../images/blob.svg"
import { useTypewriter , Cursor} from "react-simple-typewriter"


const Hero = () => {


    const [ text ] = useTypewriter({
        words : ['A Developer', 'An Educator','A Freelancer'],
        loop: {},
        typeSpeed:100,
        deleteSpeed: 60
    })

    return (
        <div className='container mx-auto px-4 py-8'>

            <div className='flex gap-20 items-center justify-center md:flex-row flex-col'>

                {/* Typography */}
                <div className='flex-1 md:px-20'>
                    <h1 className='md:text-5xl tracking-wide text-3xl font-bold'>Hey I am <br /> 
                    
                   
                    </h1>

                    <h1 className='mt-4 md:text-6xl font-bold text-4xl'> Nabil Khan </h1>
                    <h2   className='text-black md:mt-12 mt-4 md:text-4xl text-2xl font-medium'>
                        {text}
                        <span className='text-black'>
                        <Cursor />
                        </span>
                    </h2>


                    <button className='bg-orange-400 text-white mt-10 font-bold md:px-8 px-4 py-3'>Hire Me</button>

                </div>


                {/* Image */}
                <div className='flex-1 flex items-center justify-center md:px-20 px-12'>
                    <img className='absolute md:h-[650px] h-full md:right-20 md:top-10 z-[-1 ]' src={Svg} alt="" />
                    <img className='relative md:h-[450px] md:top-14 top-8 md:right-10 right-1 ' src={HeroImage} alt="" />
                </div>

            </div>

        </div>
    )
}

export default Hero