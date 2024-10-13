"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Toaster, toast } from 'react-hot-toast'
import { Courier_Prime, Open_Sans } from 'next/font/google'

// Import the fonts
const courierPrime = Courier_Prime({ subsets: ['latin'], weight: '400' })
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600'] })

export default function CreateCommunity() {
  const [communityName, setCommunityName] = useState('')
  const [description, setDescription] = useState('')
  const [moderator, setModerator] = useState('')
  const [guidelines, setGuidelines] = useState('')
  const router = useRouter()

  const handleCreateCommunity = (e: React.FormEvent) => {
    e.preventDefault()

    // Retrieve existing communities from localStorage or initialize as an empty array
    const existingCommunities = JSON.parse(localStorage.getItem('communities') || '[]')

    const newCommunity = {
      id: existingCommunities.length + 1, // generate a simple id, or you can use a UUID
      name: communityName,
      description,
      moderator,
      guidelines,
    }

    // Add the new community to the list of existing communities
    const updatedCommunities = [...existingCommunities, newCommunity]

    // Save updated communities back to localStorage
    localStorage.setItem('communities', JSON.stringify(updatedCommunities))

    // Show toast notification
    toast.success('Community created successfully!')

    // Redirect back to the dashboard after creation
    setTimeout(() => {
      router.push('/dashboard')
    }, 2000) // Adding a slight delay to show the toast notification
  }

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-100 via-yellow-100 to-white flex flex-col justify-center items-center px-6 ${openSans.className}`}>
      <Toaster position="top-right" reverseOrder={false} />
      
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-10">
        <h1 className={`text-4xl font-bold text-yellow-600 mb-10 text-center ${courierPrime.className}`}>
          Create a New Community
        </h1>

        <form onSubmit={handleCreateCommunity} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="communityName">
                Community Name
              </label>
              <input
                id="communityName"
                value={communityName}
                onChange={(e) => setCommunityName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Enter the community name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="moderator">
                Moderator (Admin)
              </label>
              <input
                id="moderator"
                value={moderator}
                onChange={(e) => setModerator(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Assign a moderator"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Community Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Describe your community"
              rows={4}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guidelines">
              Community Guidelines
            </label>
            <textarea
              id="guidelines"
              value={guidelines}
              onChange={(e) => setGuidelines(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Set guidelines for the community"
              rows={4}
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 text-lg"
            >
              Create Community
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
