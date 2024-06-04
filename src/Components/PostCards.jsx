import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import img1 from "../assets/Card--images/Img1.jpg";
import img2 from "../assets/Card--images/img2.jpg";
import img3 from "../assets/Card--images/img3.jpg";
import rania from "../assets/Card--images/rania.jpeg";
import souhail from "../assets/Card--images/souhail.jpeg";
import { FiMoreHorizontal } from "react-icons/fi";

const Data = [
    {id: 1, username: "Rania", likes: 1200, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", comments: 30, time: "12 Hours Ago", image: img1, avatar: rania},
    {id: 2, username: "Souhail", likes: 1500, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", comments: 50, time: "10 Hours Ago", image: img2, avatar: souhail},
    {id: 3, username: "Oussama", likes: 1000, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", comments: 40, time: "15 Hours Ago", image: img3, avatar: rania},
    {id: 4, username: "Rania", likes: 1200, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", comments: 30, time: "12 Hours Ago", image: img1, avatar: rania},
    {id: 5, username: "Souhail", likes: 1500, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", comments: 50, time: "10 Hours Ago", image: img2, avatar: souhail},
    {id: 6, username: "Oussama", likes: 1000, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", comments: 40, time: "15 Hours Ago", image: img3, avatar: rania},{id: 1, username: "Rania", likes: 1200, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", comments: 30, time: "12 Hours Ago", image: img1, avatar: rania},
    {id: 7, username: "Souhail", likes: 1500, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", comments: 50, time: "10 Hours Ago", image: img2, avatar: souhail},
    {id: 8, username: "Oussama", likes: 1000, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", comments: 40, time: "15 Hours Ago", image: img3, avatar: rania},
    {id: 9, username: "Rania", likes: 1200, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", comments: 30, time: "12 Hours Ago", image: img1, avatar: rania},
    {id: 10, username: "Souhail", likes: 1500, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", comments: 50, time: "10 Hours Ago", image: img2, avatar: souhail},
    {id: 11, username: "Oussama", likes: 1000, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", comments: 40, time: "15 Hours Ago", image: img3, avatar: rania},
];

const PostCards = () => {
    return (
        <div className="flex flex-col items-center gap-9 mb-12">
            {Data.map((card) => (
                <div
                    key={card.id}
                    className="flex flex-col gap-2 bg-white rounded-xl border border-slate-200 w-[580px]"
                >
                    <div className="flex flex-row justify-between items-center mt-2 mx-4">
                        <div className="flex flex-row items-center gap-4">
                            <img
                                src={card.avatar}
                                className="w-12 h-12 rounded-full object-cover"
                                alt="User Avatar"
                            />
                            <span>{card.username}</span>
                        </div>
                        <FiMoreHorizontal className="w-6 h-6" />
                    </div>
                    <div>
                        <img
                            src={card.image}
                            className="object-cover h-[300px] w-full"
                            alt="Card Image"
                        />
                    </div>
                    <div className="my-2 mx-4">
                        <div className="flex flex-row gap-4 items-center">
                            <AiOutlineHeart className="w-8 h-8" />
                            <FaRegComment className="w-7 h-7" />
                        </div>
                    </div>
                    <div className="mx-4 mb-4">
                        <div className="flex flex-row gap-4 items-center mb-2">
                            <img
                                src={card.avatar}
                                className="w-6 h-6 rounded-full"
                                alt="User Avatar"
                            />
                            <p>
                                Liked by <strong>{card.username}</strong> and{" "}
                                <strong>other {card.likes}</strong>
                            </p>
                        </div>
                        <p>
                            <strong>{card.username}</strong> {card.content}
                        </p>
                        <button className="text-slate-500 text-sm">
                            Show all the {card.comments} comments
                        </button>
                        <p className="mt-1 text-slate-600 text-xs uppercase">
                            {card.time}
                        </p>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default PostCards;