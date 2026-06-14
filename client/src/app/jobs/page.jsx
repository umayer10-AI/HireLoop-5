import JobDashboard from '@/component/JobsCard';
import React from 'react';

const page = async ({searchParams}) => {

    const searchQuery = await searchParams
    console.log(searchQuery)

    return (
        <div>
            <JobDashboard searchQuery={searchQuery}></JobDashboard>
        </div>
    );
};

export default page;