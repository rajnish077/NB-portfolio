import { useState } from 'react';
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo1.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50'>
            {/* Logo */}
            <div>
                <Link to='home' smooth={true} duration={500} spy={true}>
                    <img src={Logo} alt='LogoImg' style={{ width: '200px', height: '150px' }} />
                </Link>
            </div>

            {/* Desktop Menu */}
            <ul className='hidden md:flex space-x-6'>
                <li>
                    <Link
                        to='home'
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass="active-link"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to='about'
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass="active-link"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to='skills'
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass="active-link"
                    >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link
                        to='work'
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass="active-link"
                    >
                        Work/Projects
                    </Link>
                </li>
                <li>
                    <Link
                        to='contact'
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass="active-link"
                    >
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Hamburger Icon */}
            <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
                }
            >
                {['home', 'about', 'skills', 'work', 'contact'].map((item) => (
                    <li key={item} className='py-6 text-4xl'>
                        <Link
                            onClick={handleClick}
                            to={item}
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="active-link"
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/in/nupurbhargav/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/nupur2411'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='mailto:nupurbhargav7@gmail.com?subject=Portfolio'
                        >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='/Nupur_Bhargav_FullStack__Developer_Resume.pdf'
                            download="Nupur_Bhargav_FullStack__Developer_Resume.pdf"
                        >
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
