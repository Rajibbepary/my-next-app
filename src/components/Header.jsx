'use client'

import { usePathname } from 'next/navigation';
import React from 'react';
import NavLink from './NavLink';
import Link from 'next/link';

const Header = () => {
    const pathName = usePathname();
    if(pathName.startsWith('/dashboard')) return <></>;
    return (
        <div>
            <div className="border-b-2 p-4 flex justify-between items-center flex-wrap">
            <h1 className="text-2xl">💻 Dev  Story</h1>
            <nav className='space-x-4'>
                {/* <Link href={'/'}>Home</Link> */}
                <Link href={'/'}>Home</Link>
                <NavLink href={'/about'}>About</NavLink>
                <NavLink href={'/foods'}>Food</NavLink>
                <NavLink href={'/auth/login'}>Login</NavLink>
                <NavLink href={'/register'}>Register</NavLink>
                <NavLink href={'/tutorials'}>Tutorials</NavLink>
                <NavLink href={'/stories'}>Stories</NavLink>
            </nav>
        </div>
        </div>
    );
};

export default Header;