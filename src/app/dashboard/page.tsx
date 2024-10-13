"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Bell, ChevronDown, MessageCircle, ThumbsUp, BarChart2, Search } from "lucide-react";
import { Toaster } from "react-hot-toast";
import { Courier_Prime, Open_Sans } from 'next/font/google';

// Import fonts
const courierPrime = Courier_Prime({ subsets: ['latin'], weight: '400' });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600'] });

// Mock Data for Communities and Conflicts/Issues
const mockCommunities = [
  {
    id: 1,
    name: "Sky Song Company",
    description: "Community focused on employee satisfaction.",
    slug: "sky-song",
    conflicts: [
      { id: 1, title: "Salary Increment Petition", status: "In Voting", votes: 256, comments: 37, communityName: "Sky Song Company", timeLeft: "3 days left" },
      { id: 2, title: "Workplace Safety Policy", status: "Resolved", votes: 180, comments: 25, communityName: "Sky Song Company", timeLeft: "Resolved" },
    ],
  },
];

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [communities, setCommunities] = useState(mockCommunities);
  const [conflicts, setConflicts] = useState([]);

  useEffect(() => {
    const allConflicts = communities.flatMap((c) => c.conflicts);
    setConflicts(allConflicts);
  }, [communities]);

  const filteredConflicts = conflicts.filter(
    (conflict) =>
      conflict.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterCategory === "All" || conflict.communityName.includes(filterCategory))
  );

  return (
    <div className={`flex h-screen bg-gradient-to-b from-gray-100 via-yellow-100 to-white ${openSans.className}`}>
      <Toaster position="top-right" reverseOrder={false} />

{/* Sidebar */}
<aside className="w-64 bg-white shadow-lg">
  <div className="p-4">
    <h1 className={`text-3xl font-bold text-yellow-600 ${courierPrime.className}`}>CommUnity</h1>
  </div>
  <nav className="mt-6 space-y-2">
    <Link href="/dashboard" className="block py-2 px-4 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600">Dashboard</Link>
    <Link href="/profile" className="block py-2 px-4 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600">My Profile</Link>
    <Link href="/create-community" className="block py-2 px-4 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600">Create Community</Link>
    
    {/* Add this new link */}
    <Link href="/issue-submission" className="block py-2 px-4 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600">Submit a Conflict</Link>
  </nav>
</aside>


      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h2 className="text-3xl font-bold leading-7 text-gray-900">Dashboard</h2>
          </div>
        </header>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="mb-8 flex space-x-4">
            <div className="relative w-full">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Search conflicts or communities..."
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-500" />
              </div>
            </div>

            {/* Filter by Category */}
            <div className="relative">
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="block w-full py-2 px-4 border border-gray-300 bg-white rounded-md focus:ring-yellow-500 focus:border-yellow-500"
              >
                <option value="All">All Categories</option>
                {communities.map((community) => (
                  <option key={community.id} value={community.name}>
                    {community.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-3 text-gray-500" />
            </div>
          </div>

          {/* Communities Section */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4 text-gray-900">Your Communities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {communities.map((community) => (
                <div key={community.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                  <h4 className="text-lg font-bold text-yellow-600">{community.name}</h4>
                  <p className="text-sm text-gray-600">{community.description}</p>
                  <Link href={`/community-${community.slug}`} className="mt-3 block text-yellow-600 text-sm">View Community</Link>
                </div>
              ))}
            </div>
          </div>

          {/* Conflicts Section */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4 text-gray-900">Your Conflicts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredConflicts.length > 0 ? (
                filteredConflicts.map((conflict) => (
                  <div key={conflict.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-bold text-yellow-600">{conflict.title}</h4>
                      <p className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">{conflict.status}</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{conflict.communityName}</p>
                    <div className="flex justify-between items-center mt-4">
                      <p className="text-sm text-gray-500 flex items-center"><ThumbsUp className="mr-1" /> {conflict.votes} Votes</p>
                      <p className="text-sm text-gray-500 flex items-center"><MessageCircle className="mr-1" /> {conflict.comments} Comments</p>
                      <p className="text-sm text-gray-500 flex items-center"><BarChart2 className="mr-1" /> {conflict.timeLeft}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No conflicts found.</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
