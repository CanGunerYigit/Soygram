import Search from "components/search";
import { logout } from "firebase.js";
import { FaHome } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaPlusSquare } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function Header(){
    return (
    <header className=" border-b ">
     
        <div className="flex items-center justify-between h-[60px] container mx-auto">
          
          <h1 className="  text-white text-2xl font-serif italic font-semibold h-[29px] flex items-center">SOYGRAM</h1> 
          <Search></Search>
          <button>
           <faComputer size={20} className="text-white"> </faComputer>
          </button>
          <nav className="flex items-center gap-x-5">
            <NavLink to="/">
              <FaHome size={24} className="text-white "></FaHome>
              
            </NavLink>
            <NavLink to="/">
               <FaComment size={24} className="text-white "></FaComment>
            </NavLink>
            <NavLink>
              <FaPlusSquare size={24} className="text-white "></FaPlusSquare>
            </NavLink>
            <NavLink to="/">
              <FaCompass size={24} className="text-white "></FaCompass>
            </NavLink>
            <NavLink to="/">
              <FaHeart size={24} className="text-white "></FaHeart>
            </NavLink>
            <button onClick={logout} className="text-white font-semibold">Logout</button> 
             <img className="w-6 h-6 rounded-full" src=" icons/images.png"></img>
          </nav>
        </div>

 
    </header>
    )
}