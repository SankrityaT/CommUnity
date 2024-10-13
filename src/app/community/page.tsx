"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { PlusCircle, MessageCircle, ThumbsUp, BarChart2, User, Trash } from "lucide-react";

// Sky Song Company Data
const skySongCommunity = [
  {
    id: 1,
    name: "Sky Song Company",
    description: "Community focused on employee satisfaction.",
    moderator: "Jane Smith",
    guidelines: `
      1. Be respectful
      2. Serious discussions only
      3. Keep discussions safe for work
      4. Avoid spamming
    `,
    members: [
      "Sankritya Thakur", 
      "Deepit Arora", 
      "Melody Yeh", 
      "The Anh Pham", 
      "Evelyn Johnson", 
      "Oscar Martinez", 
      "Michael Scott", 
      "Jim Halpert", 
      "Pam Beesly", 
      "Stanley Hudson"
    ],
    issues: [
      {
        id: 1,
        title: "Salary Increment Petition",
        status: "In Voting",
        votes: 256,
        comments: 37,
        daysLeft: 3,
        discussion: [
          { user: "Evelyn Johnson", comment: "We definitely deserve a raise given the workload!" },
          { user: "Oscar Martinez", comment: "We should have an open discussion about percentages." },
        ],
      },
      {
        id: 2,
        title: "Workplace Safety Policy",
        status: "Resolved",
        votes: 180,
        comments: 25,
        daysLeft: 0,
        discussion: [],
      },
      {
        id: 3,
        title: "Recreation Room Decision",
        status: "In Discussion",
        votes: 10,
        comments: 7,
        daysLeft: 4,
        discussion: [
          { user: "Jim Halpert", comment: "We should have a coffee/snacks area for better engagement." },
          { user: "Pam Beesly", comment: "A coffee room would definitely help improve collaboration." },
          { user: "Stanley Hudson", comment: "How about a nap pod instead? I think we deserve rest!" },
        ],
      },
    ],
  },
];

export default function CommunityView({ params }: { params: { id: string } }) {
  const [communities, setCommunities] = useState(skySongCommunity);
  const [showInvitePopup, setShowInvitePopup] = useState(false);
  const [newComment, setNewComment] = useState<string>("");
  const [showDiscussion, setShowDiscussion] = useState<number | null>(null);
  const { id } = params;
  const communityId = parseInt(id, 10);

  // Clear localStorage and set only Sky Song Company data on mount
  useEffect(() => {
    localStorage.clear(); // Clear previous data
    localStorage.setItem("communities", JSON.stringify(skySongCommunity)); // Set Sky Song community only
    setCommunities(skySongCommunity); // Set state with Sky Song data
  }, []);

  // Find the community by ID
  const community = communities.find((com) => com.id === communityId);

  // Handle adding a new comment to the discussion
  const handleAddComment = (issueId: number) => {
    const updatedCommunities = communities.map((com) =>
      com.id === communityId
        ? {
            ...com,
            issues: com.issues.map((issue) =>
              issue.id === issueId
                ? { ...issue, discussion: [...issue.discussion, { user: "Current User", comment: newComment }] }
                : issue
            ),
          }
        : com
    );
    setCommunities(updatedCommunities);
    setNewComment("");
  };

  // If no community is found
  if (!community) {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <h1 className="text-2xl font-bold text-red-600">Community Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
          <h1 className="text-2xl font-bold text-gray-900">{community.name}</h1>
          <div className="flex space-x-4">
            <button onClick={() => setShowInvitePopup(true)} className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700">
              Invite
            </button>
            <Link href="/dashboard" className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700">
              Back to Dashboard
            </Link>
          </div>
        </div>
      </header>

      {/* Invite Popup */}
      {showInvitePopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Invite User</h2>
            <input
              type="text"
              value={searchUser}
              onChange={(e) => setSearchUser(e.target.value)}
              placeholder="Search by username..."
              className="w-full px-4 py-2 border rounded-md mb-4"
            />
            <div className="flex justify-between">
              <button onClick={() => setShowInvitePopup(false)} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                Cancel
              </button>
              <button onClick={() => alert(`Invited ${searchUser}`)} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                Invite
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Section */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Community Description */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-900">About the Community</h2>
          <p className="mt-2 text-gray-600">{community.description}</p>
          <p className="mt-2 text-gray-500">
            <span className="font-semibold">Moderator:</span> {community.moderator}
          </p>
        </section>

        {/* Members Section */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-900">Community Members</h2>
          <ul className="mt-4 flex space-x-4">
            {community.members.map((member, index) => (
              <li key={index} className="text-sm text-gray-500 flex items-center">
                <User className="h-5 w-5 mr-2 text-gray-500" />
                {member}
              </li>
            ))}
          </ul>
        </section>

        {/* Guidelines Section */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-900">Community Guidelines</h2>
          <pre className="mt-2 bg-white p-4 rounded-lg shadow-lg whitespace-pre-wrap">{community.guidelines}</pre>
        </section>

        {/* Issues Section */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-900">Community Issues</h2>
          <ul className="mt-4 divide-y divide-gray-200">
            {community.issues.map((issue) => (
              <li key={issue.id} className="py-4">
                <div className="flex justify-between">
                  <Link href={`/issue/${issue.id}`} className="block hover:bg-gray-50 flex-grow">
                    <h3 className="text-lg font-medium text-yellow-600">{issue.title}</h3>
                    <div className="mt-2 flex justify-between text-sm text-gray-500">
                      <span className="flex items-center">
                        <ThumbsUp className="h-5 w-5 mr-1" /> {issue.votes} Votes
                      </span>
                      <span className="flex items-center">
                        <MessageCircle className="h-5 w-5 mr-1" /> {issue.comments} Comments
                      </span>
                      <span className="flex items-center">
                        <BarChart2 className="h-5 w-5 mr-1" /> {issue.daysLeft} days left
                      </span>
                    </div>
                  </Link>
                  <button className="ml-4 text-red-500 hover:text-red-700">
                    <Trash className="h-5 w-5" />
                  </button>
                </div>

                {/* Toggle Discussion */}
                <button
                  onClick={() => setShowDiscussion(showDiscussion === issue.id ? null : issue.id)}
                  className="mt-2 text-sm text-blue-600 hover:underline"
                >
                  {showDiscussion === issue.id ? "Hide Discussion" : "Show Discussion"}
                </button>

                {/* Discussion Section */}
                {showDiscussion === issue.id && (
                  <div className="mt-4">
                    <h4 className="text-sm font-bold">Discussion</h4>
                    <ul className="ml-4 mt-2 space-y-2">
                      {issue.discussion.map((discussionItem, index) => (
                        <li key={index} className="text-sm text-gray-700">
                          <strong>{discussionItem.user}:</strong> {discussionItem.comment}
                        </li>
                      ))}
                    </ul>
                    <input
                      type="text"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="w-full p-2 border mt-2 rounded-md"
                      placeholder="Add a comment..."
                    />
                    <button
                      onClick={() => handleAddComment(issue.id)}
                      className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md"
                    >
                      Add Comment
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Submit New Issue */}
        <section className="mt-6">
          <button className="inline-flex items-center px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700">
            <PlusCircle className="mr-2 h-5 w-5" />
            Submit New Issue
          </button>
        </section>
      </main>
    </div>
  );
}
