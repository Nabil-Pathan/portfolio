import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Header = () => {
    const [open, setOpen] = useState(false);

    const Links = [
        { name: "About", link: "about" },
        { name: "Skills", link: "skills" },
        { name: "Work", link: "work" },
        { name: "Socials", link: "socials" },
        { name: "Contact", link: "contact" },
    ];

    return (
        <div className={`md:relative md:bg-lightGray bg-white container mx-auto w-full py-2 bottom-2 top-0 left-0`}>
            <div className='md:flex items-center justify-between py-4 px-10'>
                <div className='font-medium text-xl cursor-pointer flex items-center gap-1'>
                    <Link className='flex items-center gap-2 md:pr-10' to="hero" smooth={true} duration={500}>
                        <h1 className='text-darkBlue md:text-3xl text-xl font-bold'>Nabil Khan</h1>
                    </Link>
                </div>
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-8 cursor-pointer md:hidden w-7 h-7'>
                    {open ? <FontAwesomeIcon className='text-xl' icon={faTimes} /> : <FontAwesomeIcon className='text-xl' icon={faBars} />}
                </div>
                <ul className={`md:flex gap-6 md:items-center md:bg-lightGray bg-white md:pb-0 pb-12 absolute md:static md:z-auto left-0 w-full md:w-auto md:px-4 pl-9 transition-all duration-500 ease-in ${open ? 'top-16' : 'top-[-490px]'}`}>
                    {Links.map((link) => (
                        <li onClick={() => setOpen(!open)} key={link.name} className='flex items-center cursor-pointer gap-2 px-2' style={{ whiteSpace: 'nowrap' }}>
                            <Link to={link.link} spy={true} smooth={true} duration={500} className='text-darkBlue md:p-0 p-4 text-center flex items-center justify-center gap-2 hover:text-blue-400 duration-500'>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className='md:flex md:mr-2 hidden items-center'>
                    <Link to="contact" spy={true} smooth={true} duration={500}>
                        <button className='border border-gray-800 px-8 py-2 rounded-full duration-500'>Contact</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
