import React from 'react';

const applications = [
  {
    jobId: "6a203094af8692fc93749575",
    jobTitle: "Data Scientist",
    companyName: "Google",
    applicantName: "Umayer",
    applicantEmail: "mdumayer70@gmail.com",
    portfolioLink: "https://www.wawakep.com",
    resumeLink: "https://www.xygiqosige.mobi",
    coverLetter: "Qui aut quis sint e",
    appliedAt: "2026-06-07T14:27:38.143Z",
    status: "Reviewing",
  },
  {
    jobId: "6a203094af8692fc93749575",
    jobTitle: "Data Scientist",
    companyName: "Google",
    applicantName: "Umayer",
    applicantEmail: "mdumayer70@gmail.com",
    portfolioLink: "https://www.wawakep.com",
    resumeLink: "https://www.xygiqosige.mobi",
    coverLetter: "Qui aut quis sint e",
    appliedAt: "2026-06-07T14:27:38.143Z",
    status: "Reviewing",
  },
  {
    jobId: "6a203094af8692fc93749575",
    jobTitle: "Data Scientist",
    companyName: "Google",
    applicantName: "Umayer",
    applicantEmail: "mdumayer70@gmail.com",
    portfolioLink: "https://www.wawakep.com",
    resumeLink: "https://www.xygiqosige.mobi",
    coverLetter: "Qui aut quis sint e",
    appliedAt: "2026-06-07T14:27:38.143Z",
    status: "Reviewing",
  },
  {
    jobId: "6a203094af8692fc93749575",
    jobTitle: "Data Scientist",
    companyName: "Google",
    applicantName: "Umayer",
    applicantEmail: "mdumayer70@gmail.com",
    portfolioLink: "https://www.wawakep.com",
    resumeLink: "https://www.xygiqosige.mobi",
    coverLetter: "Qui aut quis sint e",
    appliedAt: "2026-06-07T14:27:38.143Z",
    status: "Reviewing",
  },
];

const RecruiterBox1 = () => {
    return (
        <div>
            <div className="bg-[#121212] border border-gray-800 rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between p-6 border-b border-gray-800">
        <h2 className="text-xl font-semibold text-white">
          Recent Applications
        </h2>

        <button className="text-sm text-gray-400 hover:text-white">
          View all
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400 text-sm border-b border-gray-800">
              <th className="p-5">Applicant</th>
              <th className="p-5">Role</th>
              <th className="p-5">Company</th>
              <th className="p-5">Date Applied</th>
              <th className="p-5">Portfolio</th>
              <th className="p-5">Status</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((app) => (
              <tr
                key={app.jobId}
                className="border-b border-gray-900 hover:bg-[#1a1a1a]"
              >
                <td className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-700" />

                    <div>
                      <h4 className="font-medium text-white">
                        {app.applicantName}
                      </h4>

                      <p className="text-sm text-gray-400">
                        {app.applicantEmail}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="p-5 text-gray-300">
                  {app.jobTitle}
                </td>

                <td className="p-5 text-gray-300">
                  {app.companyName}
                </td>

                <td className="p-5 text-gray-400">
                  {new Date(app.appliedAt).toLocaleDateString()}
                </td>

                <td className="p-5">
                  <a
                    href={app.portfolioLink}
                    target="_blank"
                    className="text-purple-400 hover:text-purple-300"
                  >
                    View Portfolio
                  </a>
                </td>

                <td className="p-5">
                  <span className="px-3 py-1 text-xs rounded-full bg-yellow-500/20 text-yellow-400">
                    {app.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
        </div>
    );
};

export default RecruiterBox1;