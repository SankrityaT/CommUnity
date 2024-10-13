"use client"; // This ensures the component is treated as a client-side component

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, MessageCircle, BarChart3, History, Users, Brain, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const fadeInWithDelay = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } }
});

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-yellow-600 bg-white">
        <div className="container flex h-16 items-center justify-between">
          <Link className="flex items-center space-x-2" href="/">
            <span className="font-bold text-yellow-800 text-2xl">CommUnity</span>
          </Link>
          <nav className="flex space-x-6 text-sm font-medium">
            <Link className="hover:text-yellow-600 transition-colors" href="#features">Features</Link>
            <Link className="hover:text-yellow-600 transition-colors" href="#how-it-works">How It Works</Link>
            <Link className="hover:text-yellow-600 transition-colors" href="#pricing">Pricing</Link>
          </nav>
          <nav className="flex items-center">
            <Link
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-yellow-600 bg-yellow-600 text-white shadow hover:bg-yellow-700 h-9 px-4 py-2"
              href="/auth"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center">
        {/* Hero Section */}
{/* Hero Section */}
<section className="w-full min-h-screen flex items-center justify-center py-16 bg-gradient-to-b from-yellow-100 via-yellow-200 to-yellow-300">
  <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeInUp}
    className="container flex flex-col items-center text-center px-6"
  >
    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-yellow-800 mb-6">
      Empower Your Community
    </h1>
    <p className="max-w-xl text-gray-700 text-lg mb-8">
      Collaborate, vote, and resolve conflicts together. Join a platform that values your voice.
    </p>
    <div className="flex space-x-4">
      <Link
        className="inline-flex items-center justify-center rounded-md bg-yellow-600 px-6 py-3 text-white font-semibold shadow hover:bg-yellow-700 transition-all duration-200"
        href="#"
      >
        Get Started
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
      <Link
        className="inline-flex items-center justify-center rounded-md border border-yellow-600 px-6 py-3 text-yellow-600 font-semibold shadow-sm hover:bg-yellow-50 transition-all duration-200"
        href="#"
      >
        Learn More
      </Link>
    </div>
  </motion.div>
</section>


        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInWithDelay()}
            className="container mx-auto px-6"
          >
            <h2 className="text-3xl font-bold text-center text-yellow-800 mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Community Voting", icon: <Users className="h-12 w-12 text-purple-500" />, description: "Vote on issues using advanced systems like quadratic voting.", borderColor: "border-purple-500" },
                { title: "AI-Powered Mediation", icon: <Brain className="h-12 w-12 text-teal-500" />, description: "AI-driven suggestions to resolve conflicts.", borderColor: "border-teal-500" },
                { title: "Conflict History", icon: <History className="h-12 w-12 text-green-500" />, description: "Review past conflicts to make informed decisions.", borderColor: "border-green-500" },
                { title: "Engage in Discussions", icon: <MessageSquare className="h-12 w-12 text-blue-500" />, description: "Create threads, comment, and discuss issues.", borderColor: "border-blue-500" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInWithDelay(index * 0.2)}
                  className={`p-6 bg-white border-2 ${feature.borderColor} rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300`}
                >
                  <div className="mb-6 flex justify-center">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-black">{feature.title}</h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

{/* How It Works Section */}
<section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-yellow-50">
  <motion.div
    initial="hidden"
    whileInView="visible"
    variants={fadeInUp}
    className="container mx-auto flex flex-col items-center px-4 md:px-6 text-center"
  >
    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-yellow-800 mb-12">How It Works</h2>
    <div className="grid gap-6 lg:grid-cols-3 justify-center text-center">
      {[
        {
          title: "Sign Up",
          description: "Create your account and join a community of people looking to collaborate and resolve conflicts."
        },
        {
          title: "Engage",
          description: "Participate in discussions, vote on key issues, and contribute to decision-making in your community."
        },
        {
          title: "Track Progress",
          description: "Stay updated on the progress of issues you’ve voted on and see how your community is evolving."
        }
      ].map((step, index) => (
        <motion.div
          key={index}
          variants={fadeInWithDelay(index * 0.2)}
          className="flex flex-col items-center space-y-4"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-600">
            <span className="text-3xl font-bold text-white">{index + 1}</span>
          </div>
          <h3 className="text-xl font-bold">{step.title}</h3>
          <p className="text-gray-600">{step.description}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>



        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-yellow-100 via-yellow-200 to-yellow-300">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="container px-4 md:px-6 mx-auto text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-yellow-800 mb-12">Choose Your Plan</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { plan: "BASE", price: "FREE", target: "Non-Profits", features: ["Limited members"] },
                { plan: "INSTITUTION", price: "$50-200", target: "Institutions", features: ["MedAlte Access", "Leadership Stats"] },
                { plan: "ENTERPRISE", price: "$300+", target: "Corporates", features: ["Advanced Analytics", "Certified Mediators"] },
              ].map((option, index) => (
                <motion.div
                  key={index}
                  variants={fadeInWithDelay(index * 0.2)}
                  className="flex flex-col p-6 bg-yellow-600 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <h3 className="text-2xl font-bold mb-4 text-white">{option.price}</h3>
                  <h4 className="text-4xl font-bold mb-4 text-white">{option.plan}</h4>
                  <p className="mb-4 text-white">{option.target}</p>
                  <ul className="mb-6 flex-grow">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-center mb-2 text-white">
                        <Check className="mr-2 h-5 w-5" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="#" className="bg-white text-yellow-600 py-2 px-4 rounded-full text-center font-bold hover:bg-gray-200 transition-colors">
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-yellow-200">
        <p className="text-xs text-gray-500">© 2024 CommUnity. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-yellow-600" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-yellow-600" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
