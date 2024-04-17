import { LiaHomeSolid , LiaInfoSolid , LiaPhoneSolid, LiaShoppingBagSolid, LiaBarsSolid ,LiaTimesCircle  } from "react-icons/lia";
import Logo from '../img/Logo.svg';
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [showMenu,setShowMenu] = useState(false);
   
    const handleShowMenu = () => {
       setShowMenu(!showMenu);
    //    console.log(showMenu)
    }
    return(
       <header className='px-3 py-2 bg-black text-white'>
            <div className='container'>
                <div className='flex justify-between'>
                    <a href=''>
                        <img className='w-36' src={Logo} alt='foodApp' />
                    </a>
                    <nav className='flex items-center'>

                        <div className='desktop-menu hidden md:flex'>
                            <ul className='flex gap-4 text-center items-center'>
                                <li>
                                    <Link to='/' className='flex items-center flex-col hover:scale-105 hover:text-[#E61B48] transition ease-in-out duration-300 p-4 inline-block text-md' >
                                    <i className='text-2xl'> <LiaHomeSolid /></i>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/about' className='flex items-center flex-col hover:scale-105 hover:text-[#E61B48] transition ease-in-out duration-300 p-4 inline-block text-md' >
                                    <i className='text-2xl'>  <LiaInfoSolid/></i>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <a href='/contact' className='flex items-center flex-col hover:scale-105 hover:text-[#E61B48] transition ease-in-out duration-300 p-4 inline-block text-md' >
                                    <i className='text-2xl'> <LiaPhoneSolid /></i>
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a href='#' className='flex items-center flex-col hover:scale-105 hover:text-[#E61B48] transition ease-in-out duration-300 p-4 inline-block text-md' >
                                    <i className='text-2xl'> <LiaShoppingBagSolid /></i>
                                        Cart
                                    </a>
                                </li>
                            </ul>
                        </div>

                        
                        <button onClick={handleShowMenu} href='#' className='md:hidden hover:scale-105 hover:text-[#E61B48] transition ease-in-out duration-300 p-4 inline-block text-md' >
                          <i className='text-2xl'> {showMenu ?   <LiaTimesCircle/> : <LiaBarsSolid /> }</i>
                        </button>
                      
                        <div className={`mobile-menu ${showMenu ? 'block' : 'hidden'} h-full lg:hidden absolute right-0 top-[100px] w-full bg-black`}>
                            <ul className='flex gap-2 flex-col text-center items-center'>
                                <li>
                                    <a href='/' className='flex items-center justify-center gap-2 hover:scale-105 hover:text-[#E61B48] transition ease-in-out duration-300 p-4 text-md' >
                                    <i className='text-2xl'> <LiaHomeSolid/></i>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href='#' className='flex items-center justify-center gap-2 hover:scale-105 hover:text-[#E61B48] transition ease-in-out duration-300 p-4 text-md' >
                                    <i className='text-2xl'> <LiaInfoSolid /></i>
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href='#' className='flex items-center justify-center gap-2 hover:scale-105 hover:text-[#E61B48] transition ease-in-out duration-300 p-4 text-md' >
                                    <i className='text-2xl'> <LiaPhoneSolid /></i>
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a href='#' className='flex items-center justify-center gap-2 hover:scale-105 hover:text-[#E61B48] transition ease-in-out duration-300 p-4 text-sm' >
                                    <i className='text-2xl'> <LiaShoppingBagSolid /></i>
                                        Cart
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                    </nav>
                </div>
            </div>
       </header>
    )
}


export default Header;