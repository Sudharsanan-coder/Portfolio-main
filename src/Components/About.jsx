import React from 'react'
import Aboutimg from '../Components/Round3.jpg'
import { delay, motion } from "framer-motion"


const About = () => {
  return (
    <div className='mt-16 border-b border-neutral-900 pb-4 mx-10'>
        <div className='flex text-center justify-center'>
          <div className='text-2xl text-center font-bold'>About </div>
          <div className="text-2xl text-center font-thin ml-2">Me</div>
        </div>

        <div className='flex flex-wrap mt-10'>

          <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}}
          className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex justify-center'>
              <img className='rounded-2xl mt-6' src={Aboutimg} alt="Profile" />
            </div>
          </motion.div>
          <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5}}
          className='w-full  lg:w-1/2 mt-8'>
                <p>I'm a passionate Web Developer and Digital Marketer with a strong foundation in creating dynamic, responsive websites and implementing effective digital marketing strategies. With expertise in modern web technologies like JavaScript, React.js, and MongoDB, I bring innovative ideas to life through clean, efficient code.

In addition to my development skills, I have hands-on experience in digital marketing, where I've successfully managed social media campaigns, optimized content distribution, and utilized tools like Buffer, Merlin, and Klaviyo to drive brand growth and engagement. My unique blend of technical and marketing expertise allows me to deliver solutions that not only look great but also resonate with audiences and achieve measurable results.

I'm driven by a commitment to continuous learning and a desire to make a meaningful impact in the digital space.</p>
          </motion.div>
          

        </div>

    </div>
    )
}

export default About