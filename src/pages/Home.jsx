import React from 'react'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import About from '../components/About'
import Work from '../components/Work'
import Socials from '../components/Socials'

const Home = () => {
    return (
        <div className="container mx-auto">

            <div className="">
                <Hero />
            </div>

            <div className='md:mt-20 mt-4'>
                <About/>
            </div>

            <div className='md:mt-20 mt-4'>
                <Skills />
            </div>

            <div className='md:mt-20 mt-4'>
                <Work />
            </div>

            <div className='md:mt-20 mt-10'>
                <Socials />
            </div>

            <div className='mt-20'>
                <Contact/>
            </div>

        </div>

    )
}

export default Home