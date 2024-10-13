"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Upload, X } from 'lucide-react'
import { motion } from 'framer-motion'
import toast, { Toaster } from 'react-hot-toast'
import { Courier_Prime, Open_Sans } from 'next/font/google'

// Import the fonts
const courierPrime = Courier_Prime({ subsets: ['latin'], weight: '400' })
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600'] })

// Mock community data (can be replaced with an API call or fetched from localStorage)
const availableCommunities = [
  { id: 1, name: "Sky Song Company" },
  { id: 2, name: "Tech Innovators" },
  { id: 3, name: "Green Earth Society" }
];

export default function IssueSubmissionPage() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [selectedCommunity, setSelectedCommunity] = useState(availableCommunities[0]?.id || '')
  const [files, setFiles] = useState<File[]>([])
  const [submitterName, setSubmitterName] = useState('')
  const [submitterEmail, setSubmitterEmail] = useState('')
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Handle file changes for uploads
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  // Remove file from the list
  const removeFile = (fileToRemove: File) => {
    setFiles(files.filter(file => file !== fileToRemove))
  }

  // Handle issue submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)

    // Simulate submitting the issue to the selected community
    const issueData = {
      title,
      description,
      category,
      files,
      submitterName,
      submitterEmail,
      isAnonymous,
      communityId: selectedCommunity
    }
    
    // You can replace the console.log with your actual submission logic here
    console.log("Issue submitted to community:", issueData)

    toast.success('Issue submitted successfully to the selected community!')
  }

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-100 via-yellow-100 to-white ${openSans.className}`}>
      <Toaster position="top-right" reverseOrder={false} />
      
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center">
          <Link href="/dashboard" className="mr-4">
            <ArrowLeft className="h-6 w-6 text-gray-500" />
          </Link>
          <h1 className={`text-3xl font-bold text-gray-900 ${courierPrime.className}`}>Submit a New Conflict</h1>
        </div>
      </header>

      <motion.main
        className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <form onSubmit={handleSubmit} className="px-4 py-5 sm:p-6 space-y-6">
            
            {/* Issue Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Conflict Title
              </label>
              <motion.input
                type="text"
                name="title"
                id="title"
                className="mt-1 block w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm border-gray-300 rounded-md px-3 py-2"
                placeholder="E.g., Road Safety in School Zones"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <motion.textarea
                id="description"
                name="description"
                rows={4}
                className="mt-1 block w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm border-gray-300 rounded-md px-3 py-2"
                placeholder="Describe the issue in detail."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              ></motion.textarea>
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <motion.select
                id="category"
                name="category"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <option value="">Select a category</option>
                <option value="environmental">Environmental</option>
                <option value="social">Social</option>
                <option value="political">Political</option>
                <option value="infrastructure">Infrastructure</option>
                <option value="other">Other</option>
              </motion.select>
            </div>

            {/* Community Selection */}
            <div>
              <label htmlFor="community" className="block text-sm font-medium text-gray-700">
                Select Community
              </label>
              <motion.select
                id="community"
                name="community"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md"
                value={selectedCommunity}
                onChange={(e) => setSelectedCommunity(parseInt(e.target.value))}
                required
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {availableCommunities.map((community) => (
                  <option key={community.id} value={community.id}>
                    {community.name}
                  </option>
                ))}
              </motion.select>
            </div>

            {/* Supporting Files */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Supporting Documents/Images</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <motion.div
                  className="space-y-1 text-center"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-yellow-600 hover:text-yellow-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-yellow-500"
                    >
                      <span>Upload files</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple onChange={handleFileChange} />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </motion.div>
              </div>

              {files.length > 0 && (
                <motion.ul
                  className="mt-4 space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {files.map((file, index) => (
                    <li key={index} className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-md">
                      <span className="text-sm text-gray-500">{file.name}</span>
                      <button type="button" onClick={() => removeFile(file)} className="text-red-500 hover:text-red-700">
                        <X className="h-5 w-5" />
                      </button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </div>

            {/* Submitter Information */}
            <div>
              <fieldset>
                <legend className="text-base font-medium text-gray-900">Submitter Information</legend>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <motion.input
                        id="anonymous"
                        name="anonymous"
                        type="checkbox"
                        className="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300 rounded"
                        checked={isAnonymous}
                        onChange={(e) => setIsAnonymous(e.target.checked)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="anonymous" className="font-medium text-gray-700">
                        Submit Anonymously
                      </label>
                      <p className="text-gray-500">Check this if you don't want to provide your personal information.</p>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>

            {!isAnonymous && (
              <>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <label htmlFor="submitterName" className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="submitterName"
                    id="submitterName"
                    className="mt-1 block w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm border-gray-300 rounded-md px-3 py-2"
                    value={submitterName}
                    onChange={(e) => setSubmitterName(e.target.value)}
                    required={!isAnonymous}
                  />
                </motion.div>

                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <label htmlFor="submitterEmail" className="block text-sm font-medium text-gray-700">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="submitterEmail"
                    id="submitterEmail"
                    className="mt-1 block w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm border-gray-300 rounded-md px-3 py-2"
                    value={submitterEmail}
                    onChange={(e) => setSubmitterEmail(e.target.value)}
                    required={!isAnonymous}
                  />
                </motion.div>
              </>
            )}

            {/* Submit Button */}
            <motion.div
              className="mt-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Submit Conflict
              </button>
            </motion.div>
          </form>
        </div>
      </motion.main>
    </div>
  )
}
