import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('black');
    const [textcolor, setTextColor] = useState('white');
    const [logo, setLogo] = useState('../public/img/logo_blanco.png');

    const handleNav = () => {
        setNav(!nav);
    };

    const handleNavClose = () => {
        setNav(false);
    }

    useEffect(()=> {
        const changeColor = () => {
            if(window.scrollY >= 90) {
                setColor('#27272a') 
                setTextColor('white')
            } else {
                setColor('#e5e7eb')
                setTextColor('black')
            }
        }
        window.addEventListener('scroll', changeColor);
    }, []);

    useEffect(()=> {
        const changeLogo = () => {
            if(window.scrollY >= 90) {
                setLogo('../public/img/logo_blanco.png')       
            } else {
                setLogo('../public/img/logo_negro.png')
            }
        }
        window.addEventListener('scroll', changeLogo);
    }, []);






  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
            <Link href='/'>
            <h1 style={{color: `${textcolor}`}} className='font-bold text-4xl'>ESBA DIVE</h1>
            </Link>
            <ul style={{color: `${textcolor}`}} className='hidden sm:flex'>
                <li className='p-4'>
                    <Link href='/#cursos' className='text-lg font-bold'>CURSOS</Link>
                </li>
                <li className='p-4'>
                    <Link href='/#experiencias' className='text-lg font-bold'>EXPERIENCIAS</Link>
                </li>
                <li className='p-4'>
                    <Link href='/#nosotros' className='text-lg font-bold'>SOBRE NOSOTROS</Link>
                </li>
            </ul>


            {/* Mobile Button*/}
            <div onClick={handleNav} className='block sm:hidden z-10'>
                {nav ? <AiOutlineClose size={20} style={{color: `${textcolor}`}} /> : <AiOutlineMenu size={20} style={{color: `${textcolor}`}} />}
            </div>
            {/* Mobile Menu*/}
            <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-conter items-center w-full h-screen bg-black text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-conter items-center w-full h-screen bg-black text-center ease-in duration-300'}>
                <ul>
                    <li className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/#cursos' onClick={handleNavClose}>Cursos</Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/#experiencias' onClick={handleNavClose}>Experiencias</Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/#nosotros' onClick={handleNavClose}>Sobre Nosotros</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar;