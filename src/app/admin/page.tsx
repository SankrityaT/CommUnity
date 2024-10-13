import { CheckCircle, XCircle, MessageCircle, BarChart3 } from 'lucide-react'
import Link from 'next/link'
import React from 'react';


export default function AdminPage() {
  // Mock data for submitted issues and flagged comments
  const submittedIssues = [
    { id: 1, title: 'New Bike Lane Proposal', description: 'Proposal to add bike lanes to major roads', status: 'Pending', submitter: 'Jane Smith' },
    { id: 2, title: 'Park Renovation Plan', description: 'Renovation of the central park', status: 'Pending', submitter: 'John Doe' },
  ]

  const flaggedComments = [
    { id: 1, issue: 'School Road Safety Issue', comment: 'This comment violates guidelines', flaggedBy: 'Admin' },
    { id: 2, issue: 'Recycling Program Expansion', comment: 'Inappropriate language used here', flaggedBy: 'Moderator' },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <Link href="/dashboard" className="text-yellow-600 hover:underline">
            Back to Dashboard
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Submitted Issues Section */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900">Submitted Issues</h2>
            <p className="mt-1 text-sm text-gray-500">Review and manage issues submitted by the community.</p>
          </div>
          <div className="border-t border-gray-200">
            <ul className="divide-y divide-gray-200">
              {submittedIssues.map((issue) => (
                <li key={issue.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{issue.title}</h3>
                      <p className="text-sm text-gray-500">{issue.description}</p>
                      <p className="mt-1 text-sm text-gray-400">Submitted by: {issue.submitter}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Approve
                      </button>
                      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700">
                        <XCircle className="mr-2 h-5 w-5" />
                        Reject
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Flagged Comments Section */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900">Flagged Comments</h2>
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

        {/* Community Insights Section */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900">Community Insights</h2>
            <p className="mt-1 text-sm text-gray-500">View analytics on community engagement and activity.</p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <div className="flex items-center justify-center">
              <BarChart3 className="h-20 w-20 text-gray-500" />
              <p className="ml-4 text-xl font-medium text-gray-500">Community data will be available soon...</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
