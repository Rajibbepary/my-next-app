import Title from '@/components/Title';
import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <div>
            <Title>This is my About</Title>
            
            <div className='flex flex-row space-x-5'>
            <Link href={'/about/contact'}>Contact</Link>
            <Link href={'/about/teams'}>Teams</Link>
            </div>
        </div>
    );
};

export default About;