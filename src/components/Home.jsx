import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import ProfileImg from '../assets/profile1.jpeg'; // Replace with your actual image path

const Home = () => {
    return (
        <div
            name='home'
            className='w-full min-h-screen bg-[#0a192f] flex items-center'
        >
            {/* Main Container */}
            <div className='max-w-[1100px] mx-auto px-6 sm:px-8 grid md:grid-cols-2 gap-12 items-center'>

                {/* ==== LEFT SECTION - TEXT ==== */}
                <div className='p-6 mt-5 flex flex-col justify-center text-center md:text-left'>
                    <p className='text-[#ccd6f6] text-lg sm:text-2xl'>Hello, my name is</p>
                    <h1 className='text-4xl sm:text-6xl lg:text-7xl font-bold text-pink-500 mt-2'>
                        NUPUR BHARGAV
                    </h1>
                    <h2 className='text-3xl sm:text-5xl lg:text-6xl font-bold text-[#8892b0] mt-2'>
                        I'm a Software Developer.
                    </h2>

                    <p className='text-[#8892b0] py-6 max-w-[600px] mx-auto md:mx-0 text-sm sm:text-base leading-relaxed'>
                        Results-driven Full Stack Developer with 2+ years of experience designing and developing
                        scalable web applications using React.js, Angular, and Python (Django). Adept at creating
                        reusable UI components, building secure RESTful APIs, and working with both SQL and
                        NoSQL databases. Strong in Agile development, performance optimization, and
                        cross-functional collaboration.
                    </p>

                    <div className='flex justify-center md:justify-start'>
                        <Link
                            to='work'
                            smooth={true}
                            duration={800}
                        >
                            <button className='text-white group border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600 transition duration-300'>
                                View Work
                                <span className='group-hover:rotate-90 duration-300'>
                                    <HiArrowNarrowRight className='ml-3' />
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* ==== RIGHT SECTION - IMAGE ==== */}
                <div className='flex justify-center md:justify-end'>
                    <img
                        src={ProfileImg}
                        alt='Profile'
                        className='w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-3xl object-cover shadow-lg hover:shadow-pink-500 hover:scale-105 duration-500'
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
