

import { CiSearch } from "react-icons/ci";
import { MdMenu, MdMic,MdApps } from "react-icons/md";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {IoIosVideocam} from "react-icons/io";
import {FaBell} from "react-icons/fa";
import {RiAccountCircleLine} from "react-icons/ri";
import { useSidebar } from "../../context/SidebarContext";




const Header=()=>{
    
 const [searchParams]=useSearchParams();

 const query=searchParams.get("search_query");
   const {toggleSidebar}= useSidebar();
   const navigate=useNavigate()

   const handleSubmit= (e)=>{
    e.preventDefault();

    const text=e.target[0].value.trim();

    if(text){
    navigate(`results?search_query=${text}`);
    }

   }


    return( <header className="flex justify-between gap-4  px-4 py-0 h-14 sticky top-0 backdrop-blur-2xl">
        {/* sol-logo */}

        <div className="flex items-center gap-3">
            <button onClick={toggleSidebar} className="p-2 hover:bg-grey rounded-full transition duration-200">
               <MdMenu  className="text-xl md:text-2xl "/>
            </button>

            <Link to='/' className="flex items-center gap-1">
            <img src="null" alt="logo" className="w-8" />
            <span className="text-xl font-bold tracking-tight  max-md:hidden">YouTube</span>
            
            </Link>
        </div>


        {/* orta-arama */}

        <div className="flex-1 max-w-[728px] mx-4 flex justify-center items-center">
         
         <form onSubmit={handleSubmit} className="flex w-full max-w-[640px] items-center">

            <div className="flex flex-1">

            <input className="w-full h-10 px-4 bg-[#121212] border border-grey rounded-l-full text-white placeholder-[#aaaaaa] focus:border-[#1c62b9] outline-none text-base" default={query} type="text" placeholder="Ara" />

            <button className="w-16 h-10 bg-[#222222] border border-l-0 border-grey rounded-r-full flex justify-center items-center hover:bg-grey transition "><CiSearch className="text-xl" /></button>
            </div>

            <button className="ml-2 p-2 bg-[#181818] hover:bg-grey rounded-full transition sm-hidden  "><MdMic /></button>
         </form>
          </div>



       

        {/* sağ-iconlar */}

         <div className="flex items-center gap-2">
            <button className="icon sm-hidden ">
                <IoIosVideocam className="text-xl"/>
                </button>
                 <button className="icon sm-hidden">
                <MdApps className="text-xl"/>
                </button>
                 <button className="icon relative">
                <FaBell className="text-xl"/>
                <span className="absolute -top-1 -right-1 bg-red-600 text-xs rounded-full size-5 flex items-center justify-center font-bold ">3</span>
                </button>

                <button className="p-1 hover:bg-grey rounded-full transition ml-2">
                    <RiAccountCircleLine className="text-2xl text-white"/>
                </button>
                

         </div>



    </header>
    )
}

export default Header;