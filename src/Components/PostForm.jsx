import React, { useState } from 'react';
import rania from "../assets/Card--images/rania.jpeg";
import { FaRegImage } from "react-icons/fa";
import { PiArticleNyTimesFill } from "react-icons/pi";
import { RiMessage2Fill } from "react-icons/ri";
import PostCards from "./PostCards.jsx";
import PostCreation from "./PostCreation.jsx";
import UserProfile from "./UserProfile.jsx";
import SidePost from "./SidePost.jsx";

const PostForm = () => {
    const [showPostForm, setShowPostForm] = useState(false);

    const togglePostForm = () => {
        setShowPostForm(!showPostForm);
    };

    return (
        <>
            <UserProfile />
            <SidePost/>
            <div className='flex flex-col bg-white p-4 rounded-xl border border-slate-200 max-w-xl mb-5 mx-auto mt-8'>
                <div className="bg-white  rounded-xl  max-w-xl flex flex-row gap-6">
                    <img
                        src={rania}
                        className="w-12 mr-3 h-12 rounded-full object-cover"
                        alt="User Avatar"
                    />
                    <button
                        className='rounded-full border-[0.5px] border-gray-500  w-[450px] h-12 text-black bg-gray-50'
                        onClick={togglePostForm}
                    >
                        Start a post, try writing with AI
                    </button>
                </div>
                <div className='flex flex-row justify-around mt-4'>
                    <button className='flex flex-row gap-3'><FaRegImage className='size-6 text-blue-500' />Media</button>
                    <button className='flex flex-row gap-3'><RiMessage2Fill className='size-6 text-[#C47D17]' />Contribute Expertise</button>
                    <button className='flex flex-row gap-3'><PiArticleNyTimesFill className='size-6 text-[#E06947]' />Write article</button>
                </div>
            </div>
            {showPostForm && (
                <div className="overlay">
                    <div className="modal">
                        <PostCreation onClose={togglePostForm} />
                    </div>
                </div>
            )}
            <hr className='w-[570px] flex justify-center items-center mx-auto my-5 bg-black'></hr>
            <PostCards />
        </>
);
};

export default PostForm;
