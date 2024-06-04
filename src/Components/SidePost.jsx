import { HiMiniInformationCircle } from "react-icons/hi2";
import school from "../assets/SIde--images/1337.png"
import Uir from "../assets/SIde--images/uir.png"
import jobintech from "../assets/SIde--images/jobintech.jpeg"
import { FiPlus } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
const SidePost=()=> {
    return(
        <>
            <div
                className='flex flex-col absolute right-[170px] shadow-lg bg-white p-4 rounded-xl border border-slate-200 max-w-xs mb-5 mx-auto mt-8 h-[430px]'>
                <div className='flex flex-row justify-between'>
                    <h1 className='font-bold text-lg'>Add to your Feed</h1>
                    <HiMiniInformationCircle className='size-5 text-gray-700 mt-1'/>
                </div>
                <div className='flex flex-row gap-3 mt-4'>
                    <img src={school} className='w-14 h-14 rounded-full object-cover'/>
                    <div>
                        <h1 className='font-bold'>1337 Coding School</h1>
                        <p className='text-gray-500 text-sm'>Company. Higher Education</p>
                        <button
                            className='flex flex-row rounded-full max-w-xl border border-black px-4 py-1 mt-2 font-semibold text-gray-700 gap-1'>
                            <FiPlus className='size-5 mt-[3px]'/>Follow
                        </button>
                    </div>
                </div>
                <div className='flex flex-row gap-3 mt-4'>
                    <img src={Uir} className='w-14 h-14 rounded-full object-cover'/>
                    <div>
                        <h1 className='font-bold'>Université International de Rabat</h1>
                        <p className='text-gray-500 text-sm'>Salé Al Jadida, Rabat</p>
                        <button
                            className='flex flex-row rounded-full max-w-xl border border-black px-4 py-1 mt-2 font-semibold text-gray-700 gap-1'>
                            <FiPlus className='size-5 mt-[3px]'/>Follow
                        </button>
                    </div>
                </div>
                <div className='flex flex-row gap-3 mt-4'>
                    <img src={jobintech} className='w-14 h-14 rounded-full object-cover'/>
                    <div>
                        <h1 className='font-bold'>Jobintech</h1>
                        <p className='text-gray-500 text-sm'>Company. Higher Education</p>
                        <button
                            className='flex flex-row rounded-full max-w-xl border border-black px-4 py-1 mt-2 font-semibold text-gray-700 gap-1'>
                            <FiPlus className='size-5 mt-[3px]'/>Follow
                        </button>
                    </div>
                </div>
                    <p className='flex flex-row justify-between mt-4 text-gray-700 font-semibold'>View all recommandations <FaArrowRightLong className='size-5 text-gray-700 mt-1'/></p>
            </div>

        </>
    );
}
export default SidePost