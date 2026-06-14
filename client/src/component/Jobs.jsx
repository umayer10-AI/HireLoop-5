"use client";

import { Pagination } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Jobs({ initialJobs = [], filterSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState(filterSearch.jobType || '');
  const [selectedCategory, setSelectedCategory] = useState(filterSearch.category || '');
  const [isRemoteOnly, setIsRemoteOnly] = useState(filterSearch.isRemote || false);
  const [page, setPage] = useState(filterSearch.page || 1);

  const router = useRouter()

  const totalItems = initialJobs.length;
  const itemsPerPage = 5;
  const totalPages = Math.ceil(totalItems/itemsPerPage);

  const getPageNumbers = () => {
    const pages = [1,2,3,4,5,6,,7,8]
    return pages
  }

  const startItem = 1;
  const endItem = totalItems;

  useEffect(() => {
  const sp = new URLSearchParams();

  if (searchQuery.trim() !== "") {
    sp.set("search", searchQuery);
  }

  if (selectedType && selectedType !== "All Types") {
    sp.set("jobType", selectedType);
  }

  if (selectedCategory && selectedCategory !== "All Categories") {
    sp.set("category", selectedCategory);
  }

  if (isRemoteOnly) {
    sp.set("isRemote", "true");
  }

  if (page) {
    sp.set("page", page);
  }

  const query = sp.toString();

  router.push(query ? `?${query}` : "/jobs");

}, [selectedType, selectedCategory, isRemoteOnly, searchQuery, page]);

  // console.log(selectedType)

  return (
    <div className="w-full max-w-[80%] mx-auto">
      
      {/* Filter UI */}
      <div className="w-full mb-8 bg-[#121212]/90 p-4 rounded-2xl border border-neutral-800 flex flex-wrap items-center gap-4">
        
        {/* Search */}
        <div className="flex-1 min-w-[240px]">
          <input
            type="text"
            placeholder="Search by title, company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-neutral-900 border border-neutral-800 text-neutral-200 px-4 py-2.5 rounded-xl"
          />
        </div>

        {/* Job Type (STATIC - NO FILTER LOGIC) */}
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="bg-neutral-900 border border-neutral-800 text-neutral-300 px-3 py-2.5 rounded-xl"
        >
          <option value="All Types">All Types</option>
          <option value="full-time">Full Time</option>
          <option value="part-time">Part Time</option>
          <option value="Internship">Internship</option>
        </select>

        {/* Category (STATIC - NO FILTER LOGIC) */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-neutral-900 border border-neutral-800 text-neutral-300 px-3 py-2.5 rounded-xl"
        >
          <option value="All Categories">All Categories</option>
          <option value="management">Management</option>
          <option value="engineering">Engineering</option>
          <option value="Full Stack">Full Stack</option>
        </select>

        {/* Remote */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={isRemoteOnly}
            onChange={(e) => setIsRemoteOnly(e.target.checked)}
          />
          Remote Only
        </label>
      </div>

      {/* Jobs Grid (NO FILTERING, JUST MAP) */}
      <div className="grid grid-cols-4 gap-6">
        {initialJobs?.map((job) => (
          <div
            key={job._id}
            className="bg-[#121212] rounded-3xl p-6 border border-neutral-800"
          >
            <h2 className="text-2xl font-semibold text-white">
              {job.jobTitle}
            </h2>

            <p className="text-neutral-400 mt-1">
              {job.companyName}
            </p>

            <p className="text-sm text-neutral-500 mt-4 line-clamp-3">
              {job.responsibilities || job.requirements}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {job.location && (
                <span className="text-xs px-3 py-1 rounded-full bg-neutral-900">
                  {job.location}
                </span>
              )}

              {job.jobType && (
                <span className="text-xs px-3 py-1 rounded-full bg-neutral-900">
                  {job.jobType}
                </span>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800">
              <Link
                href={`/jobs/${job._id}`}
                className="text-pink-400"
              >
                Apply Now →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Pagination className="w-full">
      <Pagination.Summary>
        Showing {startItem}-{endItem} of {totalItems} results
      </Pagination.Summary>
      <Pagination.Content>
        <Pagination.Item>
          <Pagination.Previous isDisabled={page === 1} onPress={() => setPage((p) => p - 1)}>
            <Pagination.PreviousIcon />
            <span>Previous</span>
          </Pagination.Previous>
        </Pagination.Item>
        {getPageNumbers().map((p, i) =>
          p === "ellipsis" ? (
            <Pagination.Item key={`ellipsis-${i}`}>
              <Pagination.Ellipsis />
            </Pagination.Item>
          ) : (
            <Pagination.Item key={p}>
              <Pagination.Link isActive={p === page} onPress={() => setPage(p)}>
                {p}
              </Pagination.Link>
            </Pagination.Item>
          ),
        )}
        <Pagination.Item>
          <Pagination.Next isDisabled={page === totalPages} onPress={() => setPage((p) => p + 1)}>
            <span>Next</span>
            <Pagination.NextIcon />
          </Pagination.Next>
        </Pagination.Item>
      </Pagination.Content>
    </Pagination>
    </div>
  );
}