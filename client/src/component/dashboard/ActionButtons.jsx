'use client'
import { updateCompany } from "@/lib/api/companies";
import { redirect } from "next/navigation";
import React from "react";

const ActionButtons = (company) => {
    // console.log(company.company._id)
  const a = async (id) => {
    await updateCompany(id,{status: 'Approved'})
    // console.log(id);
    redirect('/dashboard/admin/company')
  };
  const b = async (id) => {
    await updateCompany(id,{status: 'Rejected'})
    // console.log(id);
    redirect('/dashboard/admin/company')
  };

  return (
      <td className="p-4">
        <button
          onClick={() => a(company.company._id)}
          className="text-blue-400 border border-blue-500 py-0.5 px-2 rounded-2xl hover:underline mr-4"
        >
          Approve
        </button>
        <button
        onClick={() => b(company.company._id)}
        className="text-red-400 hover:underline">Reject</button>
      </td>
  );
};

export default ActionButtons;
