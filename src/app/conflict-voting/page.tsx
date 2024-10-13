"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, MessageCircle, ThumbsUp, ThumbsDown, Share2, Flag, Sparkles, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Toaster, toast } from "react-hot-toast";

export default function ConflictVotingPage() {

    const [voteCounts, setVoteCounts] = useState([35, 30, 25, 5, 5]); // Initial percentages
const [totalVotes, setTotalVotes] = useState(100); // Total votes as 100 initially
const [voted, setVoted] = useState(false);
const [selectedOption, setSelectedOption] = useState<number | null>(null);

    const [priority, setPriority] = useState(3); // Default to middle priority (3)

  const [votePercentage, setVotePercentage] = useState(50); // Default percentage
  const [comment, setComment] = useState("");
  const [voteStatus, setVoteStatus] = useState({ inFavor: 68, against: 32 });
  const [isAssistantVisible, setIsAssistantVisible] = useState(false); // Toggle state for AI Assistant
  const buttonColors = ["bg-green-600", "bg-yellow-500", "bg-blue-500", "bg-red-500", "bg-purple-500"];
  // Add this to the state
  const votingOptions = [
    "Nap Pods Only", // Budget-friendly but practical option
    "Coffee/Snack Area Only", // Another minimalistic, practical choice
    "Gym & Wellness Area", // The full upgrade, likely a more expensive choice
    "Neither (No Changes)", // Office might decide to save budget entirely
    "Green/Outdoor Workspace", // A creative compromise with flexible workspaces instead
  ];  
  
  const [selectedRanks, setSelectedRanks] = useState(Array(votingOptions.length).fill(null));

    // Define handleRankSelection function
  const handleRankSelection = (optionIndex) => {
    if (voted) return; // Disable ranking after vote submission

    const currentRank = selectedRanks.filter((rank) => rank !== null).length + 1;
    const newRanks = [...selectedRanks];

    if (newRanks[optionIndex] !== null) {
      // If the option is already ranked, reset the rank
      newRanks[optionIndex] = null;
    } else if (currentRank <= votingOptions.length) {
      // Assign the next available rank
      newRanks[optionIndex] = currentRank;
    }

    setSelectedRanks(newRanks);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Comment posted successfully!");
    setComment("");
};

const calculateVotePercentages = (ranks, totalVotes) => {
    const weights = ranks.map(rank => (rank !== null ? votingOptions.length - rank + 1 : 0));
    const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
  
    if (totalWeight === 0) return voteCounts; // If no ranks are assigned, keep original percentages
  
    return weights.map(weight => (weight / totalWeight) * 100);
  };
  
const handleVoteSubmit = () => {
    if (voted) return; // Prevent multiple submissions
  
    if (!selectedRanks.includes(null)) {
      setVoted(true);
      toast.success("Your ranking has been submitted!");
  
      // Recalculate vote percentages based on ranks
      const updatedVoteCounts = calculateVotePercentages(selectedRanks, totalVotes);
      setVoteCounts(updatedVoteCounts);
    } else {
      toast.error("Please rank all options before submitting.");
    }
  };
  

const handleVoteOption = (optionIndex: number) => {
    if (!voted) {
        const updatedVoteCounts = [...voteCounts];
        updatedVoteCounts[optionIndex] += 5; // Increment the selected option by 5%

        const updatedTotalVotes = totalVotes + 5; // Increase total votes
        const normalizedCounts = updatedVoteCounts.map(count => (count / updatedTotalVotes) * 100); // Normalize to percentages

        setVoteCounts(normalizedCounts);
        setTotalVotes(updatedTotalVotes);
        setSelectedOption(optionIndex);
        setVoted(true);
        toast.success(`You voted for: ${votingOptions[optionIndex]}`);
    }
};
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-yellow-100 to-white">
      <Toaster position="top-right" reverseOrder={false} />
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
          <div className="flex items-center">
            <Link href="/dashboard" className="mr-4">
              <ArrowLeft className="h-6 w-6 text-gray-500" />
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Conflict Voting: Recreation Room Decision</h1>
          </div>
          <button className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700">
            <Share2 className="inline-block mr-2" /> Share
          </button>
        </div>
      </header>

      <motion.main
        className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Conflict Details */}
        <div className="bg-white shadow sm:rounded-lg p-6">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Recreation Room Decision</h2>
            <span className="text-green-600 font-semibold">In Voting</span>
          </div>
          <p className="mt-4 text-gray-600">
            This issue is about adding a coffee/snack area or a nap pod to our recreation room. Discussions are ongoing, and the decision will be made based on majority votes.
          </p>

          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 mt-6">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Proposed By</dt>
              <dd className="mt-1 text-sm text-gray-900">Michael Scott</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Voting Ends</dt>
              <dd className="mt-1 text-sm text-gray-900">Oct 20, 2024</dd>
            </div>
          </dl>
        </div>

{/* Voting Section */}
<div className="bg-white shadow sm:rounded-lg mt-8 p-6">
  <h3 className="text-lg font-medium text-gray-900 mb-4">Rank Your Options</h3>
  
  {/* Ranking Buttons */}
  <div className="flex flex-col space-y-3">
    {votingOptions.map((option, index) => (
      <button
        key={index}
        className={`py-2 px-4 rounded-full shadow-lg text-sm transition-all transform hover:scale-105 focus:outline-none ${
          selectedRanks[index] !== null
            ? buttonColors[selectedRanks[index] - 1] // Assign color based on rank (1st, 2nd, 3rd)
            : "bg-gray-100 hover:bg-gray-200 border border-gray-300"
        } ${voted ? "bg-opacity-50 cursor-not-allowed" : ""}`} // Disable interaction after voting
        onClick={() => handleRankSelection(index)} // Handle rank selection
        disabled={voted} // Disable button interaction after voting
      >
        {option} {selectedRanks[index] !== null && `(Rank ${selectedRanks[index]})`}
      </button>
    ))}
  </div>

  {/* Submit Button */}
  <div className="flex justify-center space-x-4 mt-6">
    <button
      onClick={handleVoteSubmit}
      disabled={voted || selectedRanks.includes(null)} // Disable submit until all options are ranked
      className={`px-4 py-2 border border-transparent text-sm font-medium rounded-md ${
        voted
          ? "bg-gray-300 cursor-not-allowed"
          : "text-white bg-green-600 hover:bg-green-700"
      }`}
    >
      {voted ? "Voted" : "Submit Vote"}
    </button>
  </div>

  {/* Visual Representation of Voting Results */}
  <div className="mt-6 space-y-2">
    {votingOptions.map((option, index) => (
      <div key={index} className="relative">
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className={`h-full rounded-full transition-all ${buttonColors[index]}`}
            style={{
              width: `${voteCounts[index]}%`,
            }}
          ></div>
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <span className="text-xs font-medium text-gray-900">
            {option}: {voteCounts[index]}%
          </span>
        </div>
      </div>
    ))}
  </div>
</div>



        {/* AI Assistant Section */}
        <button
  onClick={() => setIsAssistantVisible(!isAssistantVisible)}
  className="fixed bottom-5 right-0 mr-3 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
>
  {isAssistantVisible ? <X className="h-6 w-6" /> : <Sparkles className="h-8 w-8" />} {/* Replaced with Sparkles icon */}
</button>


        {isAssistantVisible && (
          <div className="bg-white shadow sm:rounded-lg mt-8 p-6 fixed bottom-24 right-10 w-80">
            <h3 className="text-lg font-medium text-gray-900 mb-4">AI Assistant: Historical Data</h3>
            <p className="text-gray-600 mb-4">
              Our AI assistant has analyzed previous similar conflicts regarding recreation room facilities. Here are some insights:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                In 2020, a similar proposal for adding nap pods received 65% votes in favor, leading to their installation.
              </li>
              <li>
                The coffee/snack area proposal in 2019 had 80% approval and significantly improved employee morale.
              </li>
            </ul>
            <p className="text-gray-600 mt-4">
              Based on historical data, both options have been well-received in the past. Make your choice accordingly!
            </p>
          </div>
        )}

        {/* Discussion Section */}
        <div className="bg-white shadow sm:rounded-lg mt-8 p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Discussion</h3>
          <form onSubmit={handleCommentSubmit} className="mb-6">
            <textarea
              rows={3}
              className="shadow-sm focus:ring-yellow-500 focus:border-yellow-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              placeholder="Add your comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <div className="mt-3 flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 text-white bg-yellow-600 hover:bg-yellow-700 rounded-md"
              >
                Post Comment
              </button>
            </div>
          </form>

{/* Previous Comments */}
<ul className="divide-y divide-gray-200">
  {[
    { user: "User 1", time: "1h ago", text: "This is a great idea. A nap pod will surely increase productivity!", likes: 12 },
    { user: "User 2", time: "2h ago", text: "I think a coffee area would be more practical. It encourages collaboration.", likes: 8 },
    { user: "User 3", time: "3h ago", text: "Why not have both? But prioritize the coffee area if we can only have one.", likes: 15 },
    { user: "User 4", time: "4h ago", text: "Flexible workspaces seem like the best choice. Offers the most variety.", likes: 5 },
    { user: "User 5", time: "30m ago", text: "Nap pods sound good, but I'd prefer a gym area for better wellness.", likes: 10 },
    { user: "User 6", time: "10m ago", text: "I vote for neither. We should allocate budget elsewhere.", likes: 3 }
  ].map((comment, idx) => (
    <li key={idx} className="py-4">
      <div className="flex space-x-3">
        <Image className="h-10 w-10 rounded-full" src="/image.png" alt="" width={40} height={40} />
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium">{comment.user}</h3>
            <p className="text-sm text-gray-500">{comment.time}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{comment.text}</p>
          <div className="mt-2 flex space-x-4 text-sm text-gray-500">
            <button className="flex items-center space-x-1">
              <ThumbsUp className="h-4 w-4" /> <span>{comment.likes}</span>
            </button>
            <button className="flex items-center space-x-1">
              <MessageCircle className="h-4 w-4" /> <span>Reply</span>
            </button>
            <button className="flex items-center space-x-1">
              <Flag className="h-4 w-4" /> <span>Report</span>
            </button>
          </div>
        </div>
      </div>
    </li>
  ))}
</ul>

        </div>

        {/* Related Issues */}
        <div className="bg-white shadow sm:rounded-lg mt-8 p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Related Issues</h3>
          <ul className="divide-y divide-gray-200">
            {[1, 2].map((issueId) => (
              <li key={issueId}>
                <Link href="#" className="block hover:bg-gray-50">
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-yellow-600">Related Issue #{issueId}</p>
                      <div className="ml-2 flex-shrink-0">
                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Open
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex justify-between">
                      <p className="text-sm text-gray-500">123 Votes</p>
                      <p className="text-sm text-gray-500">45 Comments</p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.main>
    </div>
  );
}
