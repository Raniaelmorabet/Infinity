import logo from "../assets/Navbar--image/logo.png"
import { CgInfinity } from "react-icons/cg";
const Footer=()=> {
    return(
        <>
            <div className='footerContainer'>
                <footer
                    className="left-0 bottom-0 absolute right-0 bg-white shadow-[0_30px_50px_-13px_rgba(0,0,0,0.5)]">
                    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <a href=""
                               className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                                <CgInfinity className='size-10 text-[#213F77] pb-1'/>
                                <img src={logo} className=" h-8 self-center " alt="Inifnity Logo"/>
                            </a>
                            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                                <li>
                                    <a href="#" className="hover:underline me-4 md:me-6 text-[#213F77]">About</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline me-4 md:me-6 text-[#213F77]">Privacy
                                        Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline me-4 md:me-6 text-[#213F77]">Licensing</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline text-[#213F77]">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <hr className="my-6 border-[#213F77]/20 sm:mx-auto  lg:my-8"/>
                        <span className="block text-sm text-[#213F77] sm:text-center">© 2024 <a
                            href=""
                            className="hover:underline text-[#213F77]">Infinity</a>. All Rights Reserved.</span>
                    </div>
                </footer>
            </div>
        </>
    );
}
export default Footer