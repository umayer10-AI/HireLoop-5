import { getUserToken } from '@/lib/session';
import React from 'react';

const page = async () => {

    const a = await getUserToken()
    console.log(a)

    return (
        <div>
            Company
        </div>
    );
};

export default page;