
import Link from 'next/link';
import React from 'react';

const NotFound402 = () => {
  
    return (
        <div>
            <h1 className='text-sky-500 bg-gray-100 p-3 rounded text-2xl flex text-center items-center justify-center'> 😒 402 || Not Uff Found Page</h1>
        <Link href={'/'}><button className='text-sky-400 underline'>Go to Home</button></Link>
        </div>
    );
};

export default NotFound402;