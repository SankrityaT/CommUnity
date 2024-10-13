"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [userType, setUserType] = useState('member');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adminCode, setAdminCode] = useState('');


  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log({ userType, name, email, password, adminCode });
    router.push('/dashboard');
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FBBF24] via-[#FCD34D] to-[#FAFAFA] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden flex">
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {isLoginMode ? 'Welcome Back' : 'Create Your Account'}
          </h2>
          <p className="text-gray-600 mb-6">
            {isLoginMode ? 'Log in to continue your journey in conflict resolution.' : 'Join our Conflict Resolution Community.'}
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="member"
                  checked={userType === 'member'}
                  onChange={() => setUserType('member')}
                  className="mr-2"
                />
                Member
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="admin"
                  checked={userType === 'admin'}
                  onChange={() => setUserType('admin')}
                  className="mr-2"
                />
                Admin
              </label>
            </div>
            {!isLoginMode && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                />
              </div>
            )}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={isLoginMode ? "Enter your password" : "Create a password"}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
              />
            </div>
            {userType === 'admin' && (
              <div>
                <label htmlFor="admin-code" className="block text-sm font-medium text-gray-700">Admin Code</label>
                <input
                  id="admin-code"
                  type="password"
                  value={adminCode}
                  onChange={(e) => setAdminCode(e.target.value)}
                  placeholder="Enter admin code"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                />
              </div>
            )}
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              {isLoginMode ? 'Log In' : `Sign Up as ${userType === 'admin' ? 'Admin' : 'Member'}`}
            </button>
          </form>
          <p className="mt-6 text-sm text-center">
            {isLoginMode ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              className="text-yellow-600 hover:underline"
              onClick={() => setIsLoginMode(!isLoginMode)}
            >
              {isLoginMode ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </div>
        <div className="hidden md:block w-1/2 relative">
          <Image
            src="/illustration.jpg"
            alt="Conflict Resolution Illustration"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}