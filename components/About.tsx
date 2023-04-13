import React from 'react'
import {motion} from "framer-motion"


type Props = {}

const About = (props: Props) => {
  return (
    <div className='flex flex-col space-y-5 relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-0 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <motion.img
        initial={{
            x:-200,
            opacity:0,
        }}
        transition={{
            duration:1.2,
        }}
        whileInView={{x:0,opacity:1}}
        src='/profile.jpg'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-100 xl:w-[500px] xl:h-[600px]' 

        />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Welcome to  my world! </h4>
           <p className='text-base'> I am June, a dedicated and creative developer striving to create projects that I can be proud of. 

With a passion for technology and a focus on web design and Webflow development, I create beautiful digital experiences that drive value for my clients and their customers.
    I believe in taking a collaborative approach to my work and I work closely with my clients to ensure that every project meets their unique needs and exceeds their expectations.</p> 
        </div> 
        </div>
  )
}

export default About