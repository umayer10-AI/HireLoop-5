import { getJobsData } from '@/lib/jobData';
import React from 'react';
import Jobs from './Jobs';

export default async function JobDashboard({searchQuery}) {
  // Server-side database theke data fetch
  const jobsData = await getJobsData();

    // const searchQuery = await searchParams
    // console.log(searchQuery)

  return (
    <div className="min-h-screen bg-gray-950 p-6 font-sans text-white">
      {/* Client layout component e pure array data pass hobe */}
      <Jobs initialJobs={jobsData} filterSearch={searchQuery}/>
    </div>
  );
}