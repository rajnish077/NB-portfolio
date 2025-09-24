

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hello, I'm <span className="text-pink-500">Nupur Bhargav</span> nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p className="text-[#8892b0]">I am a passionate Full Stack Developer with experience in building dynamic, user-friendly, and scalable web applications. Skilled in React.js, Angular, Python (Django), and modern web technologies, I specialize in crafting seamless user experiences and robust backend solutions. My expertise also includes working with SQL and NoSQL databases to design efficient and secure data systems.
                            My journey into tech started with curiosity — I built my first basic website during college just for fun, and that small project sparked a deep passion for coding. Since then, I’ve grown into a developer who loves solving complex problems and bringing ideas to life with clean, efficient code.
                            I’m always excited to explore new technologies, take on challenges, and collaborate on innovative projects that make a meaningful impact.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
