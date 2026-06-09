import Sidebar from '@/component/dashboard/Sidbar';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const layout = async ({children}) => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const user = session?.user
    console.log(user)

    let MyRole;
    if(user?.role==='admin'){
        MyRole = <Sidebar></Sidebar>
    }

    return (
        <div className='flex'>
                {MyRole}
            <div className='w-[80%] mx-auto'>
                {children}
            </div>
        </div>
    );
};

export default layout;