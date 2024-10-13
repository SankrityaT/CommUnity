import Image from 'next/image'
import Link from 'next/link'
import { UserCircle, Pencil, Cog } from 'lucide-react'

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
          <Link href="/dashboard" className="text-yellow-600 hover:underline">
            Back to Dashboard
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900">User Profile</h2>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* User Info */}
              <div className="col-span-1">
                <div className="text-center">
                  <UserCircle className="h-24 w-24 text-yellow-600 mx-auto" />
                  <h3 className="mt-4 text-xl font-bold text-gray-900">John Doe</h3>
                  <p className="text-gray-500">Community Member</p>
                  <div className="mt-6">
                    <Link
                      href="/profile/edit"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700"
                    >
                      <Pencil className="mr-2 h-5 w-5" />
                      Edit Profile
                    </Link>
                  </div>
                </div>
              </div>

              {/* Community Participation */}
              <div className="col-span-2">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Community Engagement</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                    <p className="text-lg font-medium text-gray-700">Issues Submitted</p>
                    <p className="text-3xl font-bold text-yellow-600">12</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                    <p className="text-lg font-medium text-gray-700">Votes Cast</p>
                    <p className="text-3xl font-bold text-yellow-600">28</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                    <p className="text-lg font-medium text-gray-700">Discussions Participated In</p>
                    <p className="text-3xl font-bold text-yellow-600">34</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Settings Section */}
        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900">Account Settings</h2>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <div className="space-y-4">
              <Link href="/profile/settings" className="block bg-gray-50 p-4 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <div className="flex items-center">
                  <Cog className="h-5 w-5 text-gray-500 mr-2" />
                  <p className="text-gray-700 font-medium">Manage Account Settings</p>
                </div>
              </Link>
              <Link href="/profile/security" className="block bg-gray-50 p-4 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <div className="flex items-center">
                  <Cog className="h-5 w-5 text-gray-500 mr-2" />
                  <p className="text-gray-700 font-medium">Security & Privacy</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
