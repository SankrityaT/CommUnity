"use client"
import React from 'react'
import Link from 'next/link'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts'

export default function VotingResults() {
  // Updated voting data based on a total of 10 votes
  const votingData = [
    { name: 'Nap Pods Only', value: 2 },  // 2 out of 10 votes (20%)
    { name: 'Coffee/Snack Area Only', value: 3 }, // 3 out of 10 votes (30%)
    { name: 'Gym & Wellness Area', value: 4.5 }, // 4.5 out of 10 votes (45%)
    { name: 'Neither (No Changes)', value: 0.5 }, // 0.5 out of 10 votes (5%)
  ];

  const COLORS = ['#10B981', '#F59E0B', '#3B82F6', '#EF4444', '#8B5CF6']; // Colors for each option

  // Community Segments Breakdown (Optional)
  const segmentData = [
    { name: 'Employees', NapPods: 2, CoffeeArea: 4, GymWellness: 3, NoChanges: 1 },
    { name: 'Managers', NapPods: 3, CoffeeArea: 2, GymWellness: 4, NoChanges: 1 },
    { name: 'HR', NapPods: 2, CoffeeArea: 4, GymWellness: 3, NoChanges: 1 },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center">
          <Link href="/dashboard" className="mr-4">
            <ArrowLeft className="h-6 w-6 text-gray-500" />
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Voting Results: Recreation Room Decision</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Voting Breakdown */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900">Voting Breakdown</h2>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={votingData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value} votes`}
                    >
                      {votingData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Vote Counts</h3>
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  {votingData.map((option, index) => (
                    <div key={index} className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">{option.name}</dt>
                      <dd className="mt-1 text-3xl font-semibold text-green-600">{option.value} votes</dd>
                    </div>
                  ))}
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">Total Votes</dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">10</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Community Segments (Optional) */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900">Community Segments</h2>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={segmentData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="NapPods" name="Nap Pods Only" fill="#10B981" />
                <Bar dataKey="CoffeeArea" name="Coffee/Snack Area Only" fill="#F59E0B" />
                <Bar dataKey="GymWellness" name="Gym & Wellness Area" fill="#3B82F6" />
                <Bar dataKey="NoChanges" name="No Changes" fill="#EF4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  )
}
