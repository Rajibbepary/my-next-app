
import Link from 'next/link';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className='grid grid-cols-12 gap-3 mt-5'>
           
           <div className='col-span-3 flex flex-col gap-6 border-r-2 ml-2'>
            <Link className='p-3 mr-2 bg-green-400 rounded' href={'/dashboard/add-story'}>Add-Story</Link>
           <Link className='p-3 mr-2 bg-green-400 rounded' href={'/dashboard/my-profile'}>My-Profile</Link>
           <Link className='p-3 mr-2 bg-green-400 rounded' href={'/dashboard/setting'}>Setting</Link></div>
           <div className='col-span-9'>
             {children}
           </div>
        </div>
    );
};

export default DashboardLayout;