
import React from 'react';

const  AuthLayout = ({children}) => {
    return (
        <div className='flex flex-row gap-10'>
           <div className='w-full'> {children}</div>
            <div className='bg-green-300 mt-3 text-center w-full p-3 rounded text-2xl font-bold text-black'>Wellcome to authcation</div>
        </div>
    );
};

export default  AuthLayout;