import rania from "../assets/Card--images/rania.jpeg";
import souhail from "../assets/Card--images/souhail.jpeg";
import { PiEnvelopeDuotone } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa";
const UserProfile=()=> {
    return(
        <>
            <div className='flex flex-col absolute left-44 shadow-lg bg-white p-4 rounded-xl border border-slate-200 max-w-xs mb-5 mx-auto mt-8 h-[430px]'>
                <div
                    className='p-4 max-w-xs w-[350px] bg-[#E0D2BE] h-16 rounded-b-none right-[17px] rounded-xl relative bottom-[16px]'>
                    <img
                        src={rania}
                        className="w-20 h-20 rounded-full object-cover flex justify-center items-center mx-auto border-2 border-white"
                        alt="User Avatar"
                    />
                    <h1 className='text-center text-xl mt-5 font-semibold'>Rania El Morabet</h1>
                    <p className='text-center mt-2 text-gray-500'>Software Engineering Student</p>
                    <hr className='w-[319px] relative right-[16px] mt-4'></hr>
                    <div className='flex flex-row justify-between mt-2'>
                        <p className='text-gray-500 font-semibold'>Profile viewers</p>
                        <p className='text-blue-500 font-semibold '>500</p>
                    </div>
                    <div className='flex flex-row justify-between mt-2'>
                        <p className='text-gray-500 font-semibold'>Post impression</p>
                        <p className='text-blue-500 font-semibold '>5,500</p>
                    </div>
                    <hr className='w-[319px] relative right-[16px] mt-4'></hr>
                    <p className='text-gray-500 text-sm mt-2'>Grow your business with Premium Business</p>
                    <div className='flex flex-row gap-1 mt-2'>
                        <PiEnvelopeDuotone className='size-6 text-[#D89839]'/>
                        <p className='font-semibold text-md'>Network Smarter, Try Premium Free</p>
                    </div>
                    <hr className='w-[319px] relative right-[16px] mt-4'></hr>
                    <div className='flex flex-row gap-1 mt-3'>
                        <FaBookmark className={'text-gray-500 size-5'}/>
                        <p className='font-semibold text-sm'>Saved items</p>
                    </div>
                </div>
            </div>

        </>
    );
}
export default UserProfile