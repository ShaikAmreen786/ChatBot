import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Chatbot from '../Chatbot';

export default function LandingPage() {
    const [predictedRole, setPredictedRole] = useState(null);
    const [showChatbot, setShowChatbot] = useState(false);

    const sampleCareerPath = {
        role: "Frontend Developer",
        timeToComplete: "6 months",
        skills: [
            { name: "HTML/CSS", duration: "4 weeks" },
            { name: "JavaScript", duration: "8 weeks" },
            { name: "React.js", duration: "12 weeks" },
        ],
        learningPath: [
            { phase: "Basics", topics: ["HTML", "CSS", "JavaScript Fundamentals"], duration: "6 weeks" },
            { phase: "Advanced", topics: ["React.js", "State Management", "API Integration"], duration: "8 weeks" },
            { phase: "Professional", topics: ["Testing", "Performance Optimization", "Deployment"], duration: "10 weeks" }
        ]
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-r from-[#6366F1] to-[#4F46E5] py-32">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" 
                         style={{
                             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                         }}
                    />
                </div>

                <div className="container mx-auto px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-5xl mx-auto"
                    >
                        <motion.h1 
                            className="text-7xl font-bold mb-8 text-white leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Master Your Professional 
                            <span className="block mt-2">Growth Journey</span>
                        </motion.h1>
                        
                        <motion.p 
                            className="text-xl mb-12 text-indigo-100 max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            SkillPath helps you identify, plan, and track your learning journey 
                            with personalized roadmaps tailored to your career goals.
                        </motion.p>

                        <motion.div
                            className="flex gap-6 justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <button 
                                className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg
                                         hover:bg-indigo-50 transition-all shadow-xl hover:shadow-2xl
                                         transform hover:scale-105 duration-200"
                                onClick={() => setShowChatbot(true)}
                            >
                                Start Your Journey
                            </button>
                            <button 
                                className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full 
                                         font-bold text-lg hover:bg-white/10 transition-all"
                            >
                                Watch Demo
                            </button>
                        </motion.div>

                        {/* Stats Section */}
                        <motion.div 
                            className="grid grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-white mb-2">500+</h3>
                                <p className="text-indigo-200">Career Paths</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-white mb-2">50K+</h3>
                                <p className="text-indigo-200">Active Learners</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-white mb-2">95%</h3>
                                <p className="text-indigo-200">Success Rate</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Wave Shape Divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg 
                        viewBox="0 0 1440 120" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            d="M0 30L48 35C96 40 192 50 288 55C384 60 480 60 576 55C672 50 768 40 864 45C960 50 1056 70 1152 75C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V30Z" 
                            fill="white"
                        />
                    </svg>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto mb-20"
                    >
                        <h2 className="text-4xl font-bold mb-6 gradient-text">
                            Empower Your Learning Journey
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Discover powerful features designed to accelerate your professional growth
                            and make learning an engaging experience.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
                        {/* Personalized Roadmaps */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl 
                                     transform hover:-translate-y-2 transition-all duration-300
                                     border border-gray-100"
                        >
                            <div className="bg-indigo-100 rounded-xl p-4 w-16 h-16 mb-6 flex items-center justify-center">
                                <svg 
                                    className="w-8 h-8 text-indigo-600" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">
                                Personalized Roadmaps
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Get customized learning paths tailored to your goals and current skill level.
                                Our AI-powered system adapts to your progress and learning style.
                            </p>
                        </motion.div>

                        {/* Track Progress */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl 
                                     transform hover:-translate-y-2 transition-all duration-300
                                     border border-gray-100"
                        >
                            <div className="bg-indigo-100 rounded-xl p-4 w-16 h-16 mb-6 flex items-center justify-center">
                                <svg 
                                    className="w-8 h-8 text-indigo-600" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">
                                Track Progress
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Monitor your journey with interactive milestones and detailed analytics.
                                Visualize your growth and identify areas for improvement.
                            </p>
                        </motion.div>

                        {/* Achievement System */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl 
                                     transform hover:-translate-y-2 transition-all duration-300
                                     border border-gray-100"
                        >
                            <div className="bg-indigo-100 rounded-xl p-4 w-16 h-16 mb-6 flex items-center justify-center">
                                <svg 
                                    className="w-8 h-8 text-indigo-600" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">
                                Achievement System
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Stay motivated with our gamified reward system. Earn badges, unlock
                                achievements, and celebrate your skill progression milestones.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Career Path Section - Updated colors */}
            {predictedRole && (
                <section className="py-20 container mx-auto px-6 bg-white bg-opacity-90 rounded-3xl my-10 mx-4 shadow-xl">
                    <h2 className="text-4xl font-bold mb-12 text-center text-blue-900">Your Career Roadmap</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Skills Required Card */}
                        <motion.div 
                            className="bg-blue-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-blue-900">Required Skills</h3>
                            <div className="space-y-6">
                                {sampleCareerPath.skills.map((skill, index) => (
                                    <div key={index} 
                                        className="flex justify-between items-center p-4 rounded-lg 
                                                 bg-white hover:bg-blue-100 transition-colors"
                                    >
                                        <span className="font-semibold text-blue-900">{skill.name}</span>
                                        <span className="text-blue-700 font-semibold">{skill.duration}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Learning Path Card */}
                        <motion.div 
                            className="bg-blue-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-blue-900">Learning Path</h3>
                            <div className="space-y-8">
                                {sampleCareerPath.learningPath.map((phase, index) => (
                                    <div key={index} 
                                        className="border-l-4 border-blue-500 pl-6 py-3
                                                 hover:border-indigo-500 transition-colors bg-white rounded-r-lg"
                                    >
                                        <h4 className="font-bold text-xl text-blue-900">{phase.phase}</h4>
                                        <p className="text-blue-700 text-sm mt-2 font-semibold">{phase.duration}</p>
                                        <ul className="mt-3 space-y-3">
                                            {phase.topics.map((topic, i) => (
                                                <li key={i} className="flex items-center text-blue-800 font-medium">
                                                    <span className="w-3 h-3 bg-indigo-500 rounded-full mr-3 flex-shrink-0"></span>
                                                    {topic}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Chatbot */}
            <motion.div 
                className="fixed bottom-8 md:left-8 left-4 z-50"
                initial={false}
                animate={{ 
                    scale: showChatbot ? 1 : [1, 1.1, 1],
                    opacity: 1 
                }}
                transition={{ 
                    duration: 0.3,
                    repeat: showChatbot ? 0 : Infinity,
                    repeatDelay: 3
                }}
            >
                {showChatbot ? (
                    <div className="relative md:w-[440px] w-[320px]">
                        {/* Close Button */}
                        <motion.button 
                            className="absolute -top-4 -right-4 bg-white w-10 h-10 rounded-full 
                                     shadow-lg flex items-center justify-center text-indigo-600 
                                     hover:text-red-600 hover:bg-red-50 transition-all duration-200
                                     border-2 border-indigo-200 z-50"
                            onClick={() => setShowChatbot(false)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg 
                                className="w-6 h-6" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                                strokeWidth={2.5}
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    d="M6 18L18 6M6 6l12 12" 
                                />
                            </svg>
                        </motion.button>

                        {/* Chat Window */}
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
                        >
                            <Chatbot />
                        </motion.div>
                    </div>
                ) : (
                    <motion.button 
                        className="group relative bg-gradient-to-r from-[#6366F1] to-[#4F46E5] 
                                 p-4 md:p-6 rounded-full shadow-2xl hover:shadow-3xl 
                                 transform hover:scale-110 transition-all duration-200
                                 border-4 border-white overflow-hidden"
                        onClick={() => setShowChatbot(true)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-indigo-500 
                                      opacity-0 group-hover:opacity-25 transition-opacity duration-200">
                        </div>

                        {/* Chat Icon */}
                        <svg 
                            className="w-8 h-8 md:w-10 md:h-10 relative z-10 text-white" 
                            fill="currentColor"
                            viewBox="0 0 24 24" 
                        >
                            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                        </svg>

                        {/* Notification Badge */}
                        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs 
                                      font-bold rounded-full w-6 h-6 flex items-center justify-center
                                      border-2 border-white animate-bounce">
                            1
                        </div>

                        {/* Pulse Effect */}
                        <div className="absolute inset-0 border-4 border-white rounded-full animate-ping opacity-20"></div>
                    </motion.button>
                )}

                {/* Mobile Tooltip */}
                {!showChatbot && (
                    <div className="absolute bottom-full left-0 mb-4 bg-gray-900 text-white 
                                  text-sm py-2 px-4 rounded-lg shadow-lg whitespace-nowrap
                                  transform -translate-x-1/2 left-1/2 md:left-auto md:translate-x-0
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        Need help? Chat with us!
                        <div className="absolute top-full left-1/2 -mt-1 transform -translate-x-1/2 
                                      border-4 border-transparent border-t-gray-900"></div>
                    </div>
                )}
            </motion.div>
        </div>
    );
} 