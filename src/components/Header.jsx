
import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="border-b-2 p-4 flex justify-between items-center flex-wrap">
            <h1 className="text-2xl">💻 Dev  Story</h1>
            <nav className='space-x-4'>
                <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/login'}>Login</Link>
                <Link href={'/register'}>Register</Link>
                <Link href={'/tutorials'}>Tutorials</Link>
                <Link href={'/stories'}>Stories</Link>
            </nav>
        </div>
        </div>
    );
};

export default Header;