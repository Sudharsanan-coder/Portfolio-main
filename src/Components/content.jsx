import React from 'react'
import Round1 from "../Components/ROund1.jpg"
import { delay, motion } from "framer-motion"

const container =(delay) =>({
  hidden:{x:-100,opacity:0},
  visible:{x:0,opacity:1,transition:{duration:0.5, delay:delay},}
})

const content = () => {
  return (
    <div className=' pb-8 lg:mb-35 mt-7 mx-10'>
        <div className='flex flex-wrap'>
            
            <div className=' flex w-full lg:w-1/2'>
                <div className='flex flex-col item-center lg:items-start '>
                  <motion.div variants={container(0)} initial="hidden" animate="visible"
                   className='font-thin text-4xl mt-24 tracking-tight lg:mt-16  lg:text-8xl'>T.V.Sudharsanan</motion.div><br></br>
                  
                  <motion.span variants={container(0.5)} initial="hidden" animate="visible"
                  className='bg-gradient-to-r from bg-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent mb-2'>Front-end developer</motion.span>
                  
                  <motion.p variants={container(1)} initial="hidden" animate="visible"
                  className='my-2 max-w-xl text-xl tracking-tight font-light '>Skilled Front-End Developer with experience in creating responsive, user-friendly web applications using HTML, CSS, JavaScript, and modern frameworks. Adept at translating design mockups into functional, visually appealing interfaces, and optimizing performance for a seamless user experience</motion.p>
                </div>
            </div>

            <div className='w-full lg:w-1/2'>
              <div className='flex justify-center'>
                <motion.img initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,delay:1.2}}
                className='rounded-full mt-32 ms-10' src={Round1} alt="Profile" />
              </div> 
            </div>

        </div>
    </div>
  )
}

export default content