import React from 'react';
import { useLocation } from 'react-router-dom';

const SkillsRoadmap = () => {
    const location = useLocation();
    const { predictionResult } = location.state || {};

    if (!predictionResult) {
        return <div>No prediction result available.</div>;
    }

    console.log("Prediction Result:", predictionResult);

    // Define skills and learning paths for the selected role
    const roleData = {
        "Database Developer": {
            "skills": [
                { "name": "SQL", "duration": "6 weeks" },
                { "name": "Database Design", "duration": "8 weeks" },
                { "name": "Database Optimization", "duration": "6 weeks" },
                { "name": "NoSQL", "duration": "6 weeks" }
            ],
            "learningPath": [
                { "phase": "Basics", "topics": ["SQL Fundamentals", "Database Normalization", "Basic Queries"], "duration": "6 weeks" },
                { "phase": "Advanced", "topics": ["Database Design", "Stored Procedures", "Triggers"], "duration": "8 weeks" },
                { "phase": "Professional", "topics": ["Database Optimization", "Replication", "NoSQL Databases"], "duration": "6 weeks" }
            ]
        },
        "Portal Administrator": {
            "skills": [
                { "name": "Web Content Management Systems (CMS)", "duration": "5 weeks" },
                { "name": "User Permissions & Access Control", "duration": "4 weeks" },
                { "name": "Portal Configuration", "duration": "6 weeks" },
                { "name": "Troubleshooting", "duration": "5 weeks" }
            ],
            "learningPath": [
                { "phase": "Basics", "topics": ["CMS Basics", "User Permissions", "Portal Access Control"], "duration": "5 weeks" },
                { "phase": "Advanced", "topics": ["Portal Configuration", "Customizing Portal", "User Role Management"], "duration": "7 weeks" },
                { "phase": "Professional", "topics": ["Troubleshooting", "Performance Tuning", "User Data Management"], "duration": "6 weeks" }
            ]
        },
        "Systems Security Administrator": {
            "skills": [
                { "name": "Firewall Configuration", "duration": "6 weeks" },
                { "name": "Network Security", "duration": "8 weeks" },
                { "name": "Threat Detection", "duration": "7 weeks" },
                { "name": "Encryption", "duration": "6 weeks" }
            ],
            "learningPath": [
                { "phase": "Basics", "topics": ["Firewall Basics", "VPN Setup", "Basic Security Measures"], "duration": "6 weeks" },
                { "phase": "Advanced", "topics": ["Network Security Protocols", "Intrusion Detection", "Encryption Methods"], "duration": "8 weeks" },
                { "phase": "Professional", "topics": ["Incident Response", "Advanced Threat Detection", "Security Audits"], "duration": "7 weeks" }
            ]
        },
        "Business Systems Analyst": {
            "skills": [
                { "name": "Requirements Gathering", "duration": "6 weeks" },
                { "name": "Process Mapping", "duration": "8 weeks" },
                { "name": "Data Analysis", "duration": "7 weeks" },
                { "name": "Business Intelligence Tools", "duration": "6 weeks" }
            ],
            "learningPath": [
                { "phase": "Basics", "topics": ["Requirements Gathering", "Business Process Mapping", "Basic Data Analysis"], "duration": "6 weeks" },
                { "phase": "Advanced", "topics": ["Advanced Data Analysis", "Business Intelligence Tools", "Process Optimization"], "duration": "8 weeks" },
                { "phase": "Professional", "topics": ["System Integration", "Stakeholder Management", "Reporting & Documentation"], "duration": "7 weeks" }
            ]
        },
        "Software Systems Engineer": {
            "skills": [
                { "name": "System Architecture", "duration": "8 weeks" },
                { "name": "Programming Languages", "duration": "10 weeks" },
                { "name": "Cloud Platforms", "duration": "9 weeks" },
                { "name": "Distributed Systems", "duration": "7 weeks" }
            ],
            "learningPath": [
                { "phase": "Basics", "topics": ["System Architecture", "Programming Fundamentals", "Basic Cloud Platforms"], "duration": "8 weeks" },
                { "phase": "Advanced", "topics": ["Distributed Systems", "Cloud Architecture", "Advanced Programming Techniques"], "duration": "10 weeks" },
                { "phase": "Professional", "topics": ["System Scalability", "Performance Tuning", "Cloud Security"], "duration": "9 weeks" }
            ]
        },
        "Business Intelligence Analyst": {
            "skills": [
                { "name": "Data Warehousing", "duration": "7 weeks" },
                { "name": "Data Visualization", "duration": "8 weeks" },
                { "name": "BI Tools", "duration": "9 weeks" },
                { "name": "ETL Processes", "duration": "6 weeks" }
            ],
            "learningPath": [
                { "phase": "Basics", "topics": ["Data Warehousing Concepts", "Introduction to BI Tools", "Basic Data Analysis"], "duration": "7 weeks" },
                { "phase": "Advanced", "topics": ["Data Visualization", "ETL Processes", "Advanced Data Analysis"], "duration": "8 weeks" },
                { "phase": "Professional", "topics": ["BI Strategy", "Reporting", "Advanced BI Tool Usage"], "duration": "9 weeks" }
            ]
        },
        "CRM Technical Developer": {
            "skills": [
                { "name": "CRM Development", "duration": "8 weeks" },
                { "name": "Customization", "duration": "7 weeks" },
                { "name": "Integration", "duration": "9 weeks" },
                { "name": "Web Services", "duration": "6 weeks" }
            ],
            "learningPath": [
                { "phase": "Basics", "topics": ["CRM Fundamentals", "Customization Basics", "Intro to Web Services"], "duration": "6 weeks" },
                { "phase": "Advanced", "topics": ["CRM Customization", "Integration with Third-Party Tools", "Web Service Development"], "duration": "8 weeks" },
                { "phase": "Professional", "topics": ["CRM Optimization", "Advanced Customization", "Enterprise-Level CRM Systems"], "duration": "9 weeks" }
            ]
        },
        "Mobile Applications Developer": {
            "skills": [
                { "name": "iOS Development", "duration": "10 weeks" },
                { "name": "Android Development", "duration": "10 weeks" },
                { "name": "Cross-Platform Development", "duration": "8 weeks" },
                { "name": "App Testing", "duration": "6 weeks" }
            ],
            "learningPath": [
                { "phase": "Basics", "topics": ["iOS Fundamentals", "Android Development Basics", "App Architecture"], "duration": "8 weeks" },
                { "phase": "Advanced", "topics": ["Cross-Platform Development", "App Performance Tuning", "App Security"], "duration": "10 weeks" },
                { "phase": "Professional", "topics": ["App Deployment", "Advanced Testing", "App Monetization"], "duration": "6 weeks" }
            ]
        },
        "UX Designer": {
            "skills": [
                { "name": "Wireframing", "duration": "6 weeks" },
                { "name": "Prototyping", "duration": "7 weeks" },
                { "name": "User Research", "duration": "8 weeks" },
                { "name": "UI Design", "duration": "9 weeks" }
            ],
            "learningPath": [
                { "phase": "Basics", "topics": ["Wireframing", "Introduction to Prototyping", "Basic UI Design"], "duration": "6 weeks" },
                { "phase": "Advanced", "topics": ["User Research", "Advanced UI Design", "Usability Testing"], "duration": "8 weeks" },
                { "phase": "Professional", "topics": ["UX Strategy", "User Experience Optimization", "Collaborative Design"], "duration": "9 weeks" }
            ]
        },
        "Quality Assurance Associate": {
            "skills": [
                { "name": "Test Planning", "duration": "6 weeks" },
                { "name": "Manual Testing", "duration": "8 weeks" },
                { "name": "Automated Testing", "duration": "9 weeks" },
                { "name": "Bug Reporting", "duration": "5 weeks" }
            ],
            "learningPath": [
                { "phase": "Basics", "topics": ["Introduction to QA", "Manual Testing Basics", "Test Planning"], "duration": "6 weeks" },
                { "phase": "Advanced", "topics": ["Automated Testing", "Test Automation Frameworks", "Bug Reporting Systems"], "duration": "8 weeks" },
                { "phase": "Professional", "topics": ["Test Case Design", "Performance Testing", "Continuous Integration"], "duration": "9 weeks" }
            ]
        }
    };

    const currentRoleData = roleData[predictionResult.prediction] || {};

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Skills Required for {predictionResult.role}</h1>
            <h2 className="text-2xl font-semibold mb-4 text-center">Learning Roadmap:</h2>

            {currentRoleData.learningPath && currentRoleData.learningPath.map((phase, index) => (
                <div key={index} className="mb-6 p-6 border border-gray-300 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-2xl font-semibold mb-2 text-blue-500">{phase.phase} (Duration: {phase.duration})</h3>
                    <ul className="list-disc pl-5 mb-4">
                        {phase.topics.map(topic => (
                            <li key={topic} className="flex items-center mb-1">
                                <span className="mr-2 text-green-500">✔️</span> {/* Icon for each topic */}
                                <span className="text-gray-700">{topic}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            <h2 className="text-2xl font-semibold mb-4 text-center">Key Skills:</h2>
            <ul className="list-disc pl-5 mb-4">
                {currentRoleData.skills && currentRoleData.skills.map(skill => (
                    <li key={skill.name} className="flex justify-between mb-2 p-2 border-b border-gray-200">
                        <span className="text-gray-800">{skill.name}</span>
                        <span className="text-gray-600">{skill.duration}</span>
                    </li>
                ))}
            </ul>

            <div className="mt-6 p-4 bg-blue-100 rounded-lg shadow-md">
                <h3 className="text-lg font-bold">Final Outcome:</h3>
                <p className="text-gray-700">Become a certified {predictionResult.prediction}!</p>
            </div>
        </div>
    );
};

export default SkillsRoadmap; 