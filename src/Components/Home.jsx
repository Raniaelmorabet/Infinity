import HomeCards from "./HomeCards.jsx";

const Home = () => {
    return (
        <>
            <div className='mx-auto flex flex-col justify-center max-w-lg'>
                <h1 className='font-Montserrat text-center text-2xl font-bold mt-12 text-[#213F77]'>Join the Conversation</h1>
                <p className='text-[#213F77]/80 text-center mt-2 mb-14 font-Montserrat'>Discover and engage with posts from our community</p>
            </div>
            <HomeCards />
        </>
    );
}

export default Home;
