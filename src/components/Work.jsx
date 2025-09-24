
import { data } from "../data/data.js";


const Work = () => {

    // projects file
    const project = data;
    //setProject(data);

    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Work/Projects
                    </p>
                    <p className='py-4 mt-2'>Check out some of my recent work experiences:</p>
                    <h3 className="pt-0 text-2xl font-bold text-pink-500">
                        Associate Software Engineer
                    </h3>
                    <p className="mt-0 py-2 text-pink-100">BootNext Tech Ventures Pvt. Ltd., Indore | Nov 2022 – Jan 2025</p>
                    <p className="mt-0 my-9 text-[#8892b0]">My role involved developing and maintaining full-stack web applications using React.js for the frontend and Python (Django) for the backend. I built and integrated RESTful APIs, implemented secure user authentication with JWT, and worked with both SQL and NoSQL databases. I also optimized UI performance, participated in agile ceremonies, and collaborated closely with the team to deliver scalable and high-quality applications.</p>
                </div>

                {/* container for projects */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                    {/* Gird Item */}
                    {project.map((item, index) => (
                        <div
                            key={index}
                            style={{ backgroundImage: `url(${item.image})` }}
                            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
                        >
                            {/* Hover effect for images */}
                            <div className="opacity-0 group-hover:opacity-100 ">
                                <span className="text-2xl font bold text-white tracking-wider ">
                                    {item.name}
                                </span>
                                <div className="pt-8 text-center ">

                                    <a href={item.github} target="_blank">
                                        <button
                                            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                                        >
                                            Code
                                        </button>
                                    </a>

                                    <a href={item.live} target="_blank">
                                        <button
                                            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                                        >
                                            Live
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
