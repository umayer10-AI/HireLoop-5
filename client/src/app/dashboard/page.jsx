// import DasboardRecruiter from '@/component/DashboardRecruiter';
// import { auth } from '@/lib/auth';
// import { headers } from 'next/headers';
// import React from 'react';

// const page = async () => {

//     const session = await auth.api.getSession({
//         headers: await headers(),
//     });
//     const user = session?.user
//     console.log(user)

//     let MyRole;
//     if(user?.role==='recruiter'){
//         MyRole = <DasboardRecruiter></DasboardRecruiter>
//     }

//     return (
//         <div>
//             {MyRole}
//         </div>
//     );
// };

// export default page;