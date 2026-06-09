import { adminCompanies } from '@/lib/api/companies';
import React from 'react';

const AdminCompaniesPage = async () => {
    const data = await adminCompanies();

    return (
        <div className="p-6 bg-[#121212] min-h-screen text-white">
            <h1 className="text-2xl font-bold mb-6">Company Management</h1>
            <div className="overflow-x-auto bg-[#1a1a1a] rounded-lg border border-gray-800">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-gray-800 text-gray-400 text-sm">
                            <th className="p-4">Company Name</th>
                            <th className="p-4">Industry</th>
                            <th className="p-4">Location</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((company) => (
                            <tr key={company._id} className="border-b border-gray-800 hover:bg-gray-900/50">
                                <td className="p-4 flex items-center gap-3">
                                    <img 
                                        src={company.logo} 
                                        alt={company.companyName} 
                                        className="w-8 h-8 rounded-full object-cover" 
                                    />
                                    <span className="font-medium">{company.companyName}</span>
                                </td>
                                <td className="p-4 text-gray-300">{company.industry}</td>
                                <td className="p-4 text-gray-300">{company.location}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${
                                        company.status === 'pending' ? 'bg-yellow-900/30 text-yellow-500' : 'bg-green-900/30 text-green-500'
                                    }`}>
                                        {company.status}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <button className="text-blue-400 hover:underline mr-4">Approve</button>
                                    <button className="text-red-400 hover:underline">Reject</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminCompaniesPage;