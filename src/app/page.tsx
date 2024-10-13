

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E6E6FA] via-[#E0F7FA] to-[#FFDAB9] flex items-center justify-center p-8">
      <main className="flex flex-col gap-8 items-center">
        <h1 className="text-4xl font-semibold text-gray-800">CommUNITY</h1>
        <p className="text-center text-lg text-gray-600">

        </p>

        {/* Navigation Links */}
        <div className="flex gap-4">
          <Link
            href="/landing"
            className="rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors text-sm sm:text-base h-10 sm:h-12 px-5 flex items-center justify-center"
          >
            Go to Landing Page
          </Link>

          <Link
            href="/auth"
            className="rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors text-sm sm:text-base h-10 sm:h-12 px-5 flex items-center justify-center"
          >
            Go to Sign Up / Login Page
          </Link>

          <Link
            href="/dashboard"
            className="rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors text-sm sm:text-base h-10 sm:h-12 px-5 flex items-center justify-center"
          >
            Go to Dashboard
          </Link>

          <Link
            href="/issue-details"
            className="rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors text-sm sm:text-base h-10 sm:h-12 px-5 flex items-center justify-center"
          >
            Go To Issue Details
          </Link>

          <Link
            href="/voting-results"
            className="rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors text-sm sm:text-base h-10 sm:h-12 px-5 flex items-center justify-center"
          >
            Voting Results
          </Link>

          <Link
            href="/ai"
            className="rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors text-sm sm:text-base h-10 sm:h-12 px-5 flex items-center justify-center"
          >
            MedAIte
          </Link>


          <Link
            href="/issue-submission"
            className="rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors text-sm sm:text-base h-10 sm:h-12 px-5 flex items-center justify-center"
          >
           Issue Submission
          </Link>

          <Link
            href="/profile"
            className="rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors text-sm sm:text-base h-10 sm:h-12 px-5 flex items-center justify-center"
          >
           Profile
          </Link>


          <Link
            href="/notifications"
            className="rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors text-sm sm:text-base h-10 sm:h-12 px-5 flex items-center justify-center"
          >
           Notifications
          </Link>


          <Link
            href="/admin"
            className="rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors text-sm sm:text-base h-10 sm:h-12 px-5 flex items-center justify-center"
          >
           Admin
          </Link>

          <Link
            href="/past-issues"
            className="rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors text-sm sm:text-base h-10 sm:h-12 px-5 flex items-center justify-center"
          >
           Past Issues
          </Link>


          <Link
            href="/create-community"
            className="rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors text-sm sm:text-base h-10 sm:h-12 px-5 flex items-center justify-center"
          >
           Create Community
          </Link>


        </div>
      </main>
    </div>
  );
}
