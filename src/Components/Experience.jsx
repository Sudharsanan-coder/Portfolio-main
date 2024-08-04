import React from 'react'
import { motion } from "framer-motion"  

const Experience = () => {

   
    const Exp=[{

        years:"2024(July)",
        Role:"Web Developer Intern",
        Company:"VEI Technology",
        Description:"In 2024, served as a Web Developer at VEI Technology, focusing on designing and implementing responsive websites and web applications. Contributed to various projects by developing user-friendly interfaces, optimizing performance, and ensuring cross-browser compatibility.",
        Technologies:["Javascript","React.js","MongoDB"],
    },
    {
        years:"2024 (July-September)",
        Role:"Digital Marketing Intern",
        Company:"Critter Graphix",
        Description:"In 2024, worked as a Digital Marketing Intern at Critter Graphix from July to September. Gained hands-on experience in managing social media campaigns, optimizing content distribution, and utilizing many tools to enhance marketing strategies.",
        Technologies:["Buffer","Merlin","Findymail"],

    }

    ]
  return (
    <div className=" pb-4 mx-10">
      <motion.h1   whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}}  className="text-2xl text-center font-bold my-20">Experience</motion.h1>
      <div>
        {Exp.map((item, index) => (
          <div key={index} className="mb-4">
            
            <div className='flex flex-wrap '>
                <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className='w-full lg:w-1/3 '>
                    <h2 className="text-xl font-bold ">{item.Company}</h2>
                    <p className=''></p>
                </motion.div>
                <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1.5}} className='w-full lg:w-2/3 mt-4 '>
                    <p className='text-xl font-thin mb-4'>{item.Role} {item.years}</p>
                    <p>{item.Description}</p>
                    <p className='mb-6 mt-1'><strong>Technologies:</strong> {item.Technologies.join(", ")}</p>
                </motion.div>
            </div>

          </div>

        ))}
      </div>
    </div>
  )
}

export default Experience