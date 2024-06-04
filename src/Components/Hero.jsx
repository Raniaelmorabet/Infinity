import carousel1 from "../assets/Hero--images/carousel1.jpg";
import carousel2 from "../assets/Hero--images/carousel2.jpg";
import carousel3 from "../assets/Hero--images/carousel3.jpg";
import { Carousel } from "flowbite-react";
import { IoIosArrowForward } from "react-icons/io";
import Home from "./Home.jsx";

const Hero = () => {
    return (
        <>
            <div className="h-80 sm:h-[300px] xl:h-[500px] 2xl:h-[700px] relative">
                <Carousel>
                    <div className="relative">
                        <img src={carousel1} alt="carousel1"/>
                        <div className="flex-wrap font-Montserrat absolute inset-0 flex flex-col justify-center items-center text-white bg-[#213F77] bg-opacity-50">
                            <h2 className="font-bold text-8xl py-5">Welcome to Infinity</h2>
                            <p className="text-3xl">Join our community and share your thoughts</p>
                            <button className="bg-[#213F77] text-white px-5 py-3 rounded-lg text-xl mt-10 flex items-center ">Start Now <IoIosArrowForward className="ml-2" /></button>
                        </div>
                    </div>
                    <div className="relative">
                        <img src={carousel2} alt="carousel2" />
                        <div className="font-Montserrat absolute inset-0 flex flex-col justify-center items-center text-white bg-[#213F77] bg-opacity-50">
                            <h2 className="font-bold text-8xl py-5">Join Our Community</h2>
                            <p className="text-3xl">Engage with posts and share your opinions</p>
                            <button className="bg-[#213F77] text-white px-5 py-3 rounded-lg text-xl mt-10 flex items-center ">Start Now <IoIosArrowForward className="ml-2" /></button>
                        </div>
                    </div>
                    <div className="relative">
                        <img src={carousel3} alt="carousel3" />
                        <div className="font-Montserrat absolute inset-0 flex flex-col justify-center items-center text-white bg-[#213F77] bg-opacity-50">
                            <h2 className="font-bold text-8xl py-5">Explore New Ideas</h2>
                            <p className="text-3xl">Discover posts from people around the world</p>
                            <button className="bg-[#213F77] text-white px-5 py-3 rounded-lg text-xl mt-10 flex items-center">Start Now <IoIosArrowForward className="ml-2" /></button>
                        </div>
                    </div>
                </Carousel>
            </div>
            <Home />
        </>
    );
};

export default Hero;