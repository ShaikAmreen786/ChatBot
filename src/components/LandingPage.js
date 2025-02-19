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
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            {/* Hero Section - Fixed text visibility */}
            <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-24">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-6xl font-bold mb-6 text-white">
                            Discover Your Perfect Career Path
                        </h1>
                        <p className="text-2xl mb-10 text-white font-medium">
                            Let AI guide you to your dream career with personalized learning paths
                        </p>
                        <button 
                            className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg
                                     hover:bg-indigo-50 transition-all shadow-xl hover:shadow-2xl
                                     transform hover:scale-105 duration-200"
                            onClick={() => setShowChatbot(true)}
                        >
                            Start Career Discovery
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Career Path Section - Improved text contrast */}
            {predictedRole && (
                <section className="py-20 container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Your Career Roadmap</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Skills Required Card */}
                        <motion.div 
                            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-indigo-700">Required Skills</h3>
                            <div className="space-y-6">
                                {sampleCareerPath.skills.map((skill, index) => (
                                    <div key={index} 
                                        className="flex justify-between items-center p-4 rounded-lg 
                                                 bg-gray-50 hover:bg-indigo-50 transition-colors"
                                    >
                                        <span className="font-semibold text-gray-900">{skill.name}</span>
                                        <span className="text-indigo-700 font-semibold">{skill.duration}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Learning Path Card */}
                        <motion.div 
                            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-indigo-700">Learning Path</h3>
                            <div className="space-y-8">
                                {sampleCareerPath.learningPath.map((phase, index) => (
                                    <div key={index} 
                                        className="border-l-4 border-indigo-500 pl-6 py-3
                                                 hover:border-pink-500 transition-colors bg-gray-50 rounded-r-lg"
                                    >
                                        <h4 className="font-bold text-xl text-gray-900">{phase.phase}</h4>
                                        <p className="text-indigo-700 text-sm mt-2 font-semibold">{phase.duration}</p>
                                        <ul className="mt-3 space-y-3">
                                            {phase.topics.map((topic, i) => (
                                                <li key={i} className="flex items-center text-gray-700 font-medium">
                                                    <span className="w-3 h-3 bg-pink-500 rounded-full mr-3 flex-shrink-0"></span>
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

            {/* Chatbot - Improved visibility and colors */}
            <motion.div 
                className="fixed bottom-8 left-8 z-50"
                initial={false}
                animate={{ scale: showChatbot ? 1 : 0.3, opacity: showChatbot ? 1 : 1 }}
            >
                {showChatbot ? (
                    <div className="relative">
                        <button 
                            className="absolute -top-4 -right-4 bg-white w-12 h-12 rounded-full 
                                     shadow-lg flex items-center justify-center text-red-500 
                                     hover:text-red-600 hover:bg-red-50 transition-colors
                                     border-2 border-red-200"
                            onClick={() => setShowChatbot(false)}
                        >
                            <svg 
                                className="w-8 h-8" 
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
                        </button>
                        <Chatbot />
                    </div>
                ) : (
                    <button 
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 rounded-full
                                 shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-200
                                 border-4 border-white relative group overflow-hidden"
                        onClick={() => setShowChatbot(true)}
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 
                                      group-hover:opacity-25 transition-opacity duration-200">
                        </div>
                        {/* Main icon */}
                        <svg 
                            className="w-16 h-16 relative z-10" 
                            fill="white"
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1}
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                        </svg>
                        {/* Pulse animation */}
                        <div className="absolute inset-0 border-4 border-white rounded-full animate-ping opacity-20"></div>
                    </button>
                )}
            </motion.div>
        </div>
    );
} 