import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'

import Link from 'next/link'

const navigation = [
  { name: 'About', href: '#' },
  { name: 'Works', href: '#' },
  { name: 'Journey', href: '#' },
  { name: 'Contact  ', href: '#' },
  // { name: 'Repos  ', href: '/works' },
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  // const handleType = (count: number) => {
  //   // access word count number
  //   console.log(count)}
  

  // const handleDone = () => {
  //   console.log(`Done after 5 loops!`)
  // }
  const [text,count] =useTypewriter({
    words:[
      "Hi,My name is June",
      "I enjoy writing code that solves real-world problems",
      "<CoffeeLoverAsWell />"
    ],
    loop:true,
    delaySpeed:2000,
  });
  return (
    <div className="bg-white">
     

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            
          <motion.div 
          initial={{
            x:-500,
            opacity:0,
            scale:0.5
          }}
          animate={{
            x:0,
            opacity:1,
            scale:1
          }}
          transition={{
            duration:1.5,
          }}
          className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Full-Stack Developer
            </h1>
            {/* <p className="mt-6 text-lg leading-8 text-gray-600">I am passionate about  writing code that solves real-world problems. </p> */}
            <p className="mt-6 text-lg leading-8 text-gray-600">
            
             <span > {text} </span>
             <Cursor cursorColor='#F7AB0A'/>
          {/* Style will be inherited from the parent element */}
          {/* <Typewriter
            words={['Eat', 'Sleep', 'Code', 'Repeat!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          /> */}
      
            </p>
             
            <div className="mt-10 flex items-center justify-center gap-x-6">
            <SocialIcon 
            url="https://twitter.com/MuotiJune"
            fgColor='gray'
            bgColor='transparent'

             /> 
            <SocialIcon 
            url="https://github.com/JuneMuoti" 
            fgColor='gray'
            bgColor='transparent'
            /> 
              <SocialIcon
               url="https://linkedin.com/in/junemuoti" 
               fgColor='gray'
               bgColor='transparent'
               /> 
              <SocialIcon 
              url="https://instagram.com/june_muoti"
              fgColor='gray'
              bgColor='transparent'
               /> 
          
            
            </div>
          
          </motion.div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
