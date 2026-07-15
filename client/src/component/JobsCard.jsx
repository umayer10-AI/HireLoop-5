import { getJobsData } from '@/lib/jobData';
import React from 'react';
import Jobs from './Jobs';

export default async function JobDashboard({searchQuery}) {

  const myfiltering = {
    ...searchQuery,
    isRemote: searchQuery.isRemote ==='true'? true: false
  }

    const sp = new URLSearchParams(myfiltering)
    const spString = sp.toString()
    console.log(spString)
  
  const jobsData = await getJobsData(spString);
  console.log(jobsData)

  return (
    <div className="min-h-screen bg-gray-950 p-6 font-sans text-white">
      {/* Client layout component e pure array data pass hobe */}
      <Jobs initialJobs={jobsData} filterSearch={myfiltering}/>
    </div>
  );
}
