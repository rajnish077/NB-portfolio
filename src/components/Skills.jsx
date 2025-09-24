import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Angular from '../assets/angular.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Python from '../assets/python.png';
import Django from '../assets/django.png';

const Skills = () => {
    return (
        <div
            name='skills'
            className='w-full min-h-screen bg-[#0a192f] text-gray-300 px-4 sm:px-6 lg:px-8'
        >
            {/* Container */}
            <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full py-8'>
                <div className='text-center sm:text-left'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        Skills
                    </p>
                    <p className='py-4 text-gray-400'>
                        These are the technologies I've worked with
                    </p>
                </div>

                {/* Grid Section */}
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 text-center py-8'>
                    {/* HTML */}
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg p-4 bg-[#112240]'>
                        <img className='w-16 sm:w-20 mx-auto' src={HTML} alt='HTML icon' />
                        <p className='my-4 text-sm sm:text-base'>HTML</p>
                    </div>

                    {/* CSS */}
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg p-4 bg-[#112240]'>
                        <img className='w-16 sm:w-20 mx-auto' src={CSS} alt='CSS icon' />
                        <p className='my-4 text-sm sm:text-base'>CSS</p>
                    </div>

                    {/* JavaScript */}
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg p-4 bg-[#112240]'>
                        <img
                            className='w-16 sm:w-20 mx-auto'
                            src={JavaScript}
                            alt='JavaScript icon'
                        />
                        <p className='my-4 text-sm sm:text-base'>JAVASCRIPT</p>
                    </div>

                    {/* React */}
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg p-4 bg-[#112240]'>
                        <img
                            className='w-16 sm:w-20 mx-auto'
                            src={ReactImg}
                            alt='React icon'
                        />
                        <p className='my-4 text-sm sm:text-base'>REACT</p>
                    </div>

                    {/* Angular */}
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg p-4 bg-[#112240]'>
                        <img
                            className='w-16 sm:w-20 mx-auto'
                            src={Angular}
                            alt='Angular icon'
                        />
                        <p className='my-4 text-sm sm:text-base'>ANGULAR</p>
                    </div>

                    {/* GitHub */}
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg p-4 bg-[#112240]'>
                        <img
                            className='w-16 sm:w-20 mx-auto'
                            src={GitHub}
                            alt='GitHub icon'
                        />
                        <p className='my-4 text-sm sm:text-base'>GITHUB</p>
                    </div>

                    {/* Node JS */}
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg p-4 bg-[#112240]'>
                        <img className='w-16 sm:w-20 mx-auto' src={Node} alt='Node JS icon' />
                        <p className='my-4 text-sm sm:text-base'>NODE JS</p>
                    </div>

                    {/* MongoDB */}
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg p-4 bg-[#112240]'>
                        <img
                            className='w-16 sm:w-20 mx-auto'
                            src={Mongo}
                            alt='MongoDB icon'
                        />
                        <p className='my-4 text-sm sm:text-base'>MONGO DB</p>
                    </div>

                    {/* Tailwind CSS */}
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg p-4 bg-[#112240]'>
                        <img
                            className='w-16 sm:w-20 mx-auto'
                            src={Tailwind}
                            alt='Tailwind CSS icon'
                        />
                        <p className='my-4 text-sm sm:text-base'>TAILWIND</p>
                    </div>

                    {/* Python */}
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg p-4 bg-[#112240]'>
                        <img
                            className='w-16 sm:w-20 mx-auto'
                            src={Python}
                            alt='Python icon'
                        />
                        <p className='my-4 text-sm sm:text-base'>PYTHON</p>
                    </div>

                    {/* Django */}
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg p-4 bg-[#112240]'>
                        <img
                            className='w-16 sm:w-20 mx-auto'
                            src={Django}
                            alt='Django icon'
                        />
                        <p className='my-4 text-sm sm:text-base'>DJANGO</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
