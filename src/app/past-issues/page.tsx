import { Search, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function PastIssuesPage() {
  // Mock data for past issues
  const pastIssues = [
    { id: 1, title: 'Park Renovation Plan', category: 'Infrastructure', resolution: 'Approved', votesInFavor: 80, votesAgainst: 20 },
    { id: 2, title: 'Recycling Program Expansion', category: 'Environmental', resolution: 'Approved', votesInFavor: 85, votesAgainst: 15 },
    { id: 3, title: 'School Road Safety Issue', category: 'Safety', resolution: 'Rejected', votesInFavor: 45, votesAgainst: 55 },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Past Issues and Resolutions</h1>
          <Link href="/dashboard" className="text-yellow-600 hover:underline">
            Back to Dashboard
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="mb-8">
          <label htmlFor="search" className="sr-only">Search past issues</label>
          <div className="relative">
            <input
              type="text"
              id="search"
              className="block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Search past issues..."
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Past Issues List */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900">Resolved Issues</h2>
          </div>
          <div className="border-t border-gray-200">
            <ul className="divide-y divide-gray-200">
              {pastIssues.map((issue) => (
                <li key={issue.id}>
                  <Link href={`/past-issues/${issue.id}`} className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-medium text-gray-900 truncate">{issue.title}</p>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              issue.resolution === 'Approved'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {issue.resolution}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            {issue.category}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <ChevronRight className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                          View Details
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
