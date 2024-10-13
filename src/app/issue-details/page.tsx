"use client";

import React from 'react';
import Link from 'next/link';

const infrastructureCommunity = {
  id: 1,
  name: "Infrastructure Improvements",
  description: "A community focused on infrastructure projects and improvements.",
  moderator: "Jane Doe",
  guidelines: "1. Be respectful\n2. Only submit infrastructure-related issues\n3. No spamming",
  members: ["Jane Doe", "John Smith", "Alice Williams"],
  issues: [
    {
      id: 1,
      title: "New Bike Lane Proposal",
      status: "In Voting",
      votes: 256,
      comments: 37,
      daysLeft: 3,
      discussion: [
        { user: "John Smith", comment: "This is a great idea for improving safety!" },
        { user: "Jane Doe", comment: "We need more infrastructure projects like this." },
      ],
    },
    { id: 2, title: "Bridge Maintenance", status: "Resolved", votes: 180, comments: 25, daysLeft: 0, discussion: [] },
  ],
};

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
          <h1 className="text-2xl font-bold text-gray-900">{infrastructureCommunity.name}</h1>
          <Link href="/dashboard" className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700">Back to Dashboard</Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Community Description */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-900">About the Community</h2>
          <p className="mt-2 text-gray-600">{infrastructureCommunity.description}</p>
          <p className="mt-2 text-gray-500">
            <span className="font-semibold">Moderator:</span> {infrastructureCommunity.moderator}
          </p>
        </section>

        {/* Issues Section */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-900">Community Issues</h2>
          {infrastructureCommunity.issues && infrastructureCommunity.issues.length > 0 ? (
            <ul className="mt-4 divide-y divide-gray-200">
              {infrastructureCommunity.issues.map((issue) => (
                <li key={issue.id} className="py-4">
                  <h3 className="text-lg font-medium text-yellow-600">{issue.title}</h3>
                  <div className="mt-2 flex justify-between text-sm text-gray-500">
                    <span>{issue.votes} Votes</span>
                    <span>{issue.comments} Comments</span>
                    <span>{issue.daysLeft > 0 ? `${issue.daysLeft} days left` : "Voting Closed"}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No issues found for this community.</p>
          )}
        </section>
      </main>
    </div>
  );
}
