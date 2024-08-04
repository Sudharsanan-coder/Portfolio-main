import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import logo from "../Components/images.png"

function Navbar(){
    return(
        <nav className="h-15 p-6 mt-4 items-center text border rounded-lg">
            <div class=" absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <div className="flex flex-shrink-0 items-center justify-between">
                <div className="flex">
                    <img className="h-7 w-8 rounded-full" src={logo} alt="" />
                    <div className="font-Inter font-bold  text-xl mx-2">Portfolio</div>
                </div>

                <div className="flex items-center gap-5 ">
                    <div><FaGithub className="h-7 w-8"/></div>
                    <div><IoLogoLinkedin className="h-7 w-8"/></div>
                    <div><FaInstagramSquare className="h-7 w-8"/></div>
                    <div><FaHackerrank className="h-7 w-8"/></div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar