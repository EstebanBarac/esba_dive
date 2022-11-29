import React from 'react';
import Link from 'next/link';
import {AiOutLineMenu, AiOutlineClose} from 'react-icons/ai';

function Navbar() {
  return (
    <div>
        <div>
            <Link href='/'>
            <h1>Esba Dive</h1>
            </Link>
            <ul>
                <li>
                    <Link href='/#cursos'>Cursos</Link>
                </li>
                <li>
                    <Link href='/#nosotros'>Sobre Nosotros</Link>
                </li>
            </ul>


            {/* Mobile Button*/}
            <div>
                <AiOutLineMenu size={20} />
            </div>
            {/* Mobile Menu*/}
            <div>
                <ul>
                    <li>
                        <Link href='/#cursos'>Cursos</Link>
                    </li>
                    <li>
                        <Link href='/#nosotros'>Sobre Nosotros</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar;