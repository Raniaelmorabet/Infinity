import logo from "../assets/Navbar--image/logo.png"
import { CgInfinity } from "react-icons/cg";
import {Link, useLocation} from "react-router-dom";
const NavBar=()=> {
    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a className="flex items-center space-x-3 rtl:space-x-reverse">
                    <CgInfinity className='size-10 text-[#213F77] pb-1'/>
                    <img src={logo} className=" h-8 self-center " alt="Infinity Logo"/>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <Link to="/LoginRegister"
                            className="text-white bg-[#213F77] hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-md px-6 py-2 text-center">Login</Link>
                    <button data-collapse-toggle="navbar-cta" type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
                            aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                     id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                        <li>
                            <Link
                               to="/"
                               id='Home'
                               className={`block text-xl py-2 px-3 md:p-0  rounded ${location.pathname === '/' ? 'active' : ''}`}
                               aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link
                               to="./PostForm"
                               id='PostForm'
                               className={`block text-xl py-2 px-3 md:p-0 text-gray-900 rounded  ${location.pathname === '/PostForm' ? 'active' : ''}`}>Posts</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <hr></hr>
        </nav>

    );
 }
 export default NavBar;