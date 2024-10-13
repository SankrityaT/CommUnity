"use client"
import { CheckCircle, XCircle, BarChart3, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import VotingResults from '../voting-results/page'; // Assuming this is the path for VotingResults
import { Courier_Prime, Open_Sans } from 'next/font/google';

// Import fonts
const courierPrime = Courier_Prime({ subsets: ['latin'], weight: '400' });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600'] });

export default function AdminPage() {
  // Mock data for submitted issues and flagged comments
  const submittedIssues = [
    { id: 1, title: 'Salary Increment Petition', description: 'Request for a salary increment for all employees', status: 'In Voting', submitter: 'Sky Song Company', votes: 256, comments: 37, timeLeft: '3 days left' },  // Updated conflict with voting data
    { id: 2, title: 'Workplace Safety Policy', description: 'Implement new safety protocols for the workplace', status: 'Resolved', submitter: 'Sky Song Company', votes: 180, comments: 25, timeLeft: 'Resolved' },  // Updated conflict with status
    { id: 3, title: 'Recreation Room Upgrade', description: 'Proposal for a new recreation room upgrade', status: 'Approved', submitter: 'Sky Song Company', votes: 450, comments: 60, timeLeft: 'Voting In Progress' }, // Recreation Room Conflict
  ];

  const flaggedComments = [
    { id: 1, issue: 'School Road Safety Issue', comment: 'This comment violates guidelines', flaggedBy: 'Admin' },
    { id: 2, issue: 'Recycling Program Expansion', comment: 'Inappropriate language used here', flaggedBy: 'Moderator' },
  ];

  const scrollToVotingResults = () => {
    const votingSection = document.getElementById('voting-results');
    if (votingSection) {
      votingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <div className={`min-h-screen bg-gradient-to-b from-yellow-100 via-yellow-200 to-yellow-300 ${openSans.className}`}>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <h1 className={`text-3xl font-bold text-gray-900 ${courierPrime.className}`}>Admin Dashboard</h1>
          <Link href="/dashboard" className="text-yellow-600 hover:underline">
            Back to Dashboard
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Submitted Issues Section */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:px-6">
            <h2 className={`text-2xl font-bold text-gray-900 ${courierPrime.className}`}>Submitted Issues</h2>
            <p className="mt-1 text-sm text-gray-500">Review and manage issues submitted by the community.</p>
          </div>
          <div className="border-t border-gray-200">
            <ul className="divide-y divide-gray-200">
              {submittedIssues.map((issue) => (
                <li key={issue.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className={`text-lg font-medium text-gray-900 ${openSans.className}`}>{issue.title}</h3>
                      <p className="text-sm text-gray-500">{issue.description}</p>
                      <p className="mt-1 text-sm text-gray-400">Submitted by: {issue.submitter}</p>
                      <p className="text-sm text-gray-400 flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${issue.status === 'Resolved' ? 'bg-green-100 text-green-800' : issue.status === 'In Voting' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                          {issue.status}
                        </span>
                        <span>{issue.votes} Votes</span> | 
                        <span>{issue.comments} Comments</span> | 
                        <span>{issue.timeLeft}</span>
                      </p>
                    </div>
                    {issue.status === 'In Voting' && (
                      <button 
                        className="flex items-center text-sm font-medium text-yellow-600 hover:underline"
                        onClick={scrollToVotingResults}
                      >
                        View Real-Time Data
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Flagged Comments Section */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:px-6">
            <h2 className={`text-2xl font-bold text-gray-900 ${courierPrime.className}`}>Flagged Comments</h2>
            <p className="mt-1 text-sm text-gray-500">Review and manage flagged comments from discussions.</p>
          </div>
          <div className="border-t border-gray-200">
            <ul className="divide-y divide-gray-200">
              {flaggedComments.map((comment) => (
                <li key={comment.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Issue: {comment.issue}</p>
                      <p className="text-sm text-gray-500">Flagged Comment: {comment.comment}</p>
                      <p className="mt-1 text-sm text-gray-400">Flagged by: {comment.flaggedBy}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700">
                        <XCircle className="mr-2 h-5 w-5" />
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Community Insights Section with Voting Results */}
        <div id="voting-results" className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className={`text-2xl font-bold text-gray-900 ${courierPrime.className}`}>Community Insights</h2>
            <p className="mt-1 text-sm text-gray-500">View analytics on community engagement and activity.</p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            {/* Calling the Voting Results Component */}
            <VotingResults />
          </div>
        </div>
      </main>
    </div>
  );
}
