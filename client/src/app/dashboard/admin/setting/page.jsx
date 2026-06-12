import { userList } from '@/lib/users';
import React from 'react';

const page = async () => {

    const data = await userList()

    return (
        <div>
            dbdtbd
        </div>
    );
};

export default page;





