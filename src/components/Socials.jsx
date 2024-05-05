import { faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Socials = () => {
  return (
    <div id='socials' className='container mx-auto'>

      <div className='flex flex-col items-center'>
        <h1 className='text-center text-4xl font-bold'>Socials</h1>
        <hr className='h-1 bg-orange-500' />
      </div>

      <div className='mt-6 flex gap-2 items-center justify-center'>

        <div className='rounded-full bg-orange-500 flex items-center justify-center p-3'>
          <a href="https://www.youtube.com/channel/UCh2-vHxdn3kMYEMByoPUieQ">
          <FontAwesomeIcon className='text-white text-3xl' icon={faYoutube} />
          </a>
        </div>

        <div className='rounded-full bg-orange-500 flex items-center justify-center p-3'>
          <a href="https://www.linkedin.com/in/nabil-khan-2a8979238/">
          <FontAwesomeIcon className='text-white text-3xl' icon={faLinkedin} />
          </a>
        </div>

        <div className='rounded-full bg-orange-500 flex items-center justify-center p-3'>
          <a href="https://github.com/Nabil-Pathan">
          <FontAwesomeIcon className='text-white text-3xl' icon={faGithub} />
          </a>
        </div>

        <div className='rounded-full bg-orange-500 flex items-center justify-center p-3'>
          <a href="https://www.instagram.com/_nabil_khan_6656/">
          <FontAwesomeIcon className='text-white text-3xl' icon={faInstagram} />
          </a>
        </div>

      </div>
    </div>
  )
}

export default Socials
