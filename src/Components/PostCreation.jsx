import React, { useState } from "react";
import ImageUpload from "./ImageUpload.jsx";
import { IoMdClose } from "react-icons/io";

const PostCreation = ({ onClose }) => {
    const [postContent, setPostContent] = useState("");
    const [error, setError] = useState("");

    const handlePostContentChange = (e) => {
        setPostContent(e.target.value);
    };

    const handleAddPost = () => {
        if (!postContent.trim()) {
            setError("Post content cannot be empty.");
            return;
        }
        setError("");
        console.log("Post added:", postContent);
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <div className="flex flex-col shadow-lg bg-white p-4 h-auto rounded-xl border border-slate-200 max-w-2xl mb-10 mx-auto mt-8">
            <div className="flex justify-between items-center">
                <h2 className="flex justify-center items-center mx-auto font-Montserrat text-xl font-semibold text-gray-800">Create a New Post</h2>
                <IoMdClose className="text-2xl text-gray-500 cursor-pointer" aria-label="Close" onClick={handleClose} />
            </div>
            <p className="flex justify-center items-center mx-auto font-Montserrat text-gray-600 mb-4">Share your thoughts and ideas with the community!</p>
            <div className="flex flex-col md:flex-row gap-3">
                <textarea
                    placeholder="What do you wanna talk about?"
                    className="border-gray-500 border-[0.5px] w-full md:w-1/2 h-60 rounded-xl mb-5 p-2 focus:outline-none focus:border-blue-500"
                    value={postContent}
                    onChange={handlePostContentChange}
                    aria-label="Post content"
                />
                <div className="w-full md:w-1/2 h-60">
                    <ImageUpload />
                </div>
            </div>
            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
            <button
                className="rounded-full border-[0.5px] border-gray-500 w-[300px] h-10 text-white bg-[#213F77] hover:bg-[#1a3060] focus:outline-none focus:ring-2 focus:ring-blue-500 mx-auto"
                onClick={handleAddPost}
            >
                Add Post
            </button>
        </div>
    );
};

export default PostCreation;
