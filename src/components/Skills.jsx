import React from 'react';
import Mysql from '../images/mysql.png';
import Typescript from '../images/typescript.png';
import JavaScript from '../images/javascript.png';
import ReactImg from '../images/react.png';
import Node from '../images/node.png';
import Postgres from '../images/postgres.png';
import Docker from '../images/docker2.webp';
import Nextjs from '../images/next.png';
import Mongo from '../images/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col items-center justify-center w-full h-full'>

              <h1 className='text-4xl text-center  font-bold inline '>Skills</h1>

              <hr  className='h-1 text-center w-[10%]  bg-orange-400'/>          

          <div className='w-full mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md cursor-pointer  hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>React</p>
              </div>
              <div className='shadow-md cursor-pointer  hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Typescript} alt="HTML icon" />
                  <p className='my-4'>Typescript</p>
              </div>
             
              <div className='shadow-md cursor-pointer  hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Nextjs} alt="HTML icon" />
                  <p className='my-4'>Next.js</p>
              </div>
             
              <div className='shadow-md cursor-pointer  hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>

              
              <div className='shadow-md cursor-pointer  hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='shadow-md cursor-pointer  hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Postgres} alt="HTML icon" />
                  <p className='my-4'>Postgressql</p>
              </div>

              <div className='shadow-md cursor-pointer  hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mysql} alt="HTML icon" />
                  <p className='my-4'>Mysql</p>
              </div>
              <div className='shadow-md cursor-pointer  hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Docker} alt="HTML icon" />
                  <p className='my-4'>Docker</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;