import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import logo from "../Components/images.png"

function Navbar(){
    return(
        <nav className="h-15 p-6 mt-8 mx-10 items-center text border rounded-lg">
            
            <div className="flex flex-shrink-0 items-center justify-between">
                <div className="flex">
                    <img className="h-7 w-8 rounded-full" src={logo} alt="" />
                    <div className="font-Inter font-bold  text-xl mx-2">Portfolio</div>
                </div>

                <div className="flex items-center gap-2 lg:gap-5">
                    <div><a href="https://github.com/Sudharsanan-coder" target="blank"><FaGithub className="h-7 w-8"/></a></div>
                    <div><a href="https://www.linkedin.com/in/sudharsanan-t-v-58459b257/" target="blank"><IoLogoLinkedin className="h-7 w-8"/></a></div>
                    <div><a href="https://www.instagram.com/zudharzanan.xd/" target="blank"><FaInstagramSquare className="h-7 w-8"/></a></div>
                    <div><a href="https://leetcode.com/u/T_V_Sudharsanan/" target="blank"><TbBrandLeetcode className="h-7 w-8"/></a></div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
