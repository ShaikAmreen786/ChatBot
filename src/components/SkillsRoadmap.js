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
                    { "name": "SQL Development", "duration": "8 weeks" },
                    { "name": "Database Design", "duration": "6 weeks" },
                    { "name": "Performance Tuning", "duration": "7 weeks" },
                    { "name": "Data Migration", "duration": "5 weeks" }
                ],
                "learningPath": [
                    { "phase": "Basics", "topics": ["Introduction to Databases", "SQL Fundamentals", "Basic Database Design"], "duration": "6 weeks" },
                    { "phase": "Advanced", "topics": ["Complex Queries", "Normalization & Indexing", "Data Migration"], "duration": "7 weeks" },
                    { "phase": "Professional", "topics": ["Performance Optimization", "Database Backup & Recovery", "Database Security"], "duration": "8 weeks" }
                ]
            },
            "Portal Administrator": {
                "skills": [
                    { "name": "Portal Configuration", "duration": "6 weeks" },
                    { "name": "Content Management", "duration": "7 weeks" },
                    { "name": "User Access Control", "duration": "5 weeks" },
                    { "name": "Web Analytics", "duration": "8 weeks" }
                ],
                "learningPath": [
                    { "phase": "Basics", "topics": ["Introduction to Portals", "Basic Content Management", "User Access Control"], "duration": "6 weeks" },
                    { "phase": "Advanced", "topics": ["Advanced Portal Customization", "Analytics Integration", "Security Best Practices"], "duration": "7 weeks" },
                    { "phase": "Professional", "topics": ["Performance Tuning", "Data Security Compliance", "User Experience Optimization"], "duration": "8 weeks" }
                ]
            },
            "Systems Security Administrator": {
                "skills": [
                    { "name": "Network Security", "duration": "8 weeks" },
                    { "name": "Encryption Methods", "duration": "6 weeks" },
                    { "name": "Firewall Management", "duration": "7 weeks" },
                    { "name": "Intrusion Detection", "duration": "9 weeks" }
                ],
                "learningPath": [
                    { "phase": "Basics", "topics": ["Introduction to Network Security", "Firewall Basics", "Cryptography Fundamentals"], "duration": "6 weeks" },
                    { "phase": "Advanced", "topics": ["Advanced Encryption", "Intrusion Detection Systems", "Network Monitoring Tools"], "duration": "7 weeks" },
                    { "phase": "Professional", "topics": ["Security Auditing", "Incident Response", "Compliance Standards"], "duration": "9 weeks" }
                ]
            },
            "Business Systems Analyst": {
                "skills": [
                    { "name": "Business Requirements Gathering", "duration": "6 weeks" },
                    { "name": "Business Process Modeling", "duration": "7 weeks" },
                    { "name": "Data Analysis", "duration": "8 weeks" },
                    { "name": "Stakeholder Management", "duration": "5 weeks" }
                ],
                "learningPath": [
                    { "phase": "Basics", "topics": ["Introduction to Business Analysis", "Requirements Gathering Techniques", "Basic Process Modeling"], "duration": "6 weeks" },
                    { "phase": "Advanced", "topics": ["Data Analysis Techniques", "Advanced Process Modeling", "Stakeholder Communication"], "duration": "7 weeks" },
                    { "phase": "Professional", "topics": ["Risk Analysis", "Change Management", "Agile Methodologies"], "duration": "8 weeks" }
                ]
            },
            "Software Systems Engineer": {
                "skills": [
                    { "name": "System Architecture", "duration": "6 weeks" },
                    { "name": "Software Development Life Cycle (SDLC)", "duration": "7 weeks" },
                    { "name": "Programming (C++, Java)", "duration": "8 weeks" },
                    { "name": "Debugging and Troubleshooting", "duration": "5 weeks" }
                ],
                "learningPath": [
                    { "phase": "Basics", "topics": ["Introduction to Systems Engineering", "Basic Programming", "SDLC Overview"], "duration": "6 weeks" },
                    { "phase": "Advanced", "topics": ["System Architecture Design", "Advanced Programming Concepts", "Testing and Debugging"], "duration": "7 weeks" },
                    { "phase": "Professional", "topics": ["Software Optimization", "Deployment Strategies", "System Maintenance"], "duration": "8 weeks" }
                ]
            },
            "Business Intelligence Analyst": {
                "skills": [
                    { "name": "Data Visualization", "duration": "6 weeks" },
                    { "name": "Data Modeling", "duration": "7 weeks" },
                    { "name": "ETL Processes", "duration": "8 weeks" },
                    { "name": "Report Generation", "duration": "5 weeks" }
                ],
                "learningPath": [
                    { "phase": "Basics", "topics": ["Introduction to BI", "Basic Data Visualization", "ETL Basics"], "duration": "6 weeks" },
                    { "phase": "Advanced", "topics": ["Data Warehousing", "Advanced Data Modeling", "Report Automation"], "duration": "7 weeks" },
                    { "phase": "Professional", "topics": ["Advanced Analytics", "Predictive Modeling", "Data Governance"], "duration": "8 weeks" }
                ]
            },
            "CRM Technical Developer": {
                "skills": [
                    { "name": "CRM Platform Configuration", "duration": "7 weeks" },
                    { "name": "Customization & Integration", "duration": "6 weeks" },
                    { "name": "Workflow Automation", "duration": "8 weeks" },
                    { "name": "API Development", "duration": "9 weeks" }
                ],
                "learningPath": [
                    { "phase": "Basics", "topics": ["Introduction to CRM Systems", "Basic Platform Configuration", "Simple Customization"], "duration": "6 weeks" },
                    { "phase": "Advanced", "topics": ["Advanced Integrations", "CRM Workflows", "API & Web Services"], "duration": "7 weeks" },
                    { "phase": "Professional", "topics": ["CRM Performance Optimization", "Security Practices", "Advanced Custom Development"], "duration": "9 weeks" }
                ]
            },
            "Mobile Applications Developer": {
                "skills": [
                    { "name": "Mobile App Development (Android/iOS)", "duration": "8 weeks" },
                    { "name": "User Interface Design", "duration": "7 weeks" },
                    { "name": "API Integration", "duration": "6 weeks" },
                    { "name": "Mobile Security", "duration": "5 weeks" }
                ],
                "learningPath": [
                    { "phase": "Basics", "topics": ["Introduction to Mobile Development", "Basic App Design", "APIs in Mobile Apps"], "duration": "6 weeks" },
                    { "phase": "Advanced", "topics": ["Advanced Mobile Development", "User Experience Design", "Mobile App Testing"], "duration": "7 weeks" },
                    { "phase": "Professional", "topics": ["App Performance Optimization", "Mobile Security Practices", "App Monetization"], "duration": "8 weeks" }
                ]
            },
            "UX Designer": {
                "skills": [
                    { "name": "Wireframing", "duration": "6 weeks" },
                    { "name": "Prototyping", "duration": "7 weeks" },
                    { "name": "User Research", "duration": "8 weeks" },
                    { "name": "Usability Testing", "duration": "5 weeks" }
                ],
                "learningPath": [
                    { "phase": "Basics", "topics": ["Introduction to UX", "Wireframing Tools", "User Research Basics"], "duration": "6 weeks" },
                    { "phase": "Advanced", "topics": ["Advanced Prototyping", "Usability Testing", "UX Strategy"], "duration": "7 weeks" },
                    { "phase": "Professional", "topics": ["Design Systems", "Advanced UX Research", "Cross-Platform Design"], "duration": "8 weeks" }
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
            },
            "Web Developer": {
                "skills": [
                    { "name": "HTML/CSS", "duration": "6 weeks" },
                    { "name": "JavaScript", "duration": "7 weeks" },
                    { "name": "Responsive Design", "duration": "8 weeks" },
                    { "name": "Web Performance Optimization", "duration": "5 weeks" }
                ],
                "learningPath": [
                    { "phase": "Basics", "topics": ["Introduction to Web Development", "HTML5 & CSS3 Basics", "Responsive Design"], "duration": "6 weeks" },
                    { "phase": "Advanced", "topics": ["JavaScript Essentials", "Web Animation Techniques", "Cross-Browser Compatibility"], "duration": "7 weeks" },
                    { "phase": "Professional", "topics": ["Web Performance", "Progressive Web Apps", "Web Accessibility"], "duration": "8 weeks" }
                ]
            },
            "Information Security Analyst": {
                "skills": [
                    { "name": "Network Security", "duration": "8 weeks" },
                    { "name": "Risk Management", "duration": "7 weeks" },
                    { "name": "Incident Response", "duration": "6 weeks" },
                    { "name": "Compliance and Auditing", "duration": "9 weeks" }
                ],
                "learningPath": [
                    { "phase": "Basics", "topics": ["Introduction to Information Security", "Basic Risk Management", "Incident Response Basics"], "duration": "6 weeks" },
                    { "phase": "Advanced", "topics": ["Advanced Threat Analysis", "Network Defense Techniques", "Security Auditing"], "duration": "7 weeks" },
                    { "phase": "Professional", "topics": ["Penetration Testing", "Advanced Risk Management", "Compliance Standards"], "duration": "9 weeks" }
                ]
            },
            "CRM Business Analyst": {
                "skills": [
                    { "name": "CRM Business Analysis", "duration": "6 weeks" },
                    { "name": "Process Mapping", "duration": "7 weeks" },
                    { "name": "Requirements Gathering", "duration": "8 weeks" },
                    { "name": "Stakeholder Management", "duration": "5 weeks" }
                ],
                "learningPath": [
                    { "phase": "Basics", "topics": ["CRM Fundamentals", "Requirements Gathering Techniques", "Basic Process Mapping"], "duration": "6 weeks" },
                    { "phase": "Advanced", "topics": ["Advanced CRM Systems", "Process Optimization", "Stakeholder Communication"], "duration": "7 weeks" },
                    { "phase": "Professional", "topics": ["Agile CRM Projects", "CRM Analytics", "CRM Strategy"], "duration": "8 weeks" }
                ]
            },
                "Technical Support": {
                    "skills": [
                        { "name": "Customer Service Skills", "duration": "5 weeks" },
                        { "name": "Troubleshooting", "duration": "6 weeks" },
                        { "name": "System Configuration", "duration": "7 weeks" },
                        { "name": "Network Support", "duration": "8 weeks" }
                    ],
                    "learningPath": [
                        { "phase": "Basics", "topics": ["Introduction to Technical Support", "Basic Troubleshooting Techniques", "Customer Service Basics"], "duration": "5 weeks" },
                        { "phase": "Advanced", "topics": ["Advanced Troubleshooting", "Network Configuration", "Support Tools"], "duration": "6 weeks" },
                        { "phase": "Professional", "topics": ["System Maintenance", "Network Security", "Advanced Technical Support", "ITIL Best Practices"], "duration": "7 weeks" }
                    ]
                },
                "Project Manager": {
                    "skills": [
                        { "name": "Project Planning", "duration": "6 weeks" },
                        { "name": "Risk Management", "duration": "7 weeks" },
                        { "name": "Team Leadership", "duration": "8 weeks" },
                        { "name": "Stakeholder Communication", "duration": "5 weeks" }
                    ],
                    "learningPath": [
                        { "phase": "Basics", "topics": ["Introduction to Project Management", "Project Scheduling", "Risk Management Basics"], "duration": "6 weeks" },
                        { "phase": "Advanced", "topics": ["Team Management", "Advanced Risk Strategies", "Budget Management"], "duration": "7 weeks" },
                        { "phase": "Professional", "topics": ["Agile Methodologies", "Project Closure", "Advanced Stakeholder Communication"], "duration": "8 weeks" }
                    ]
                },
                "Information Technology Manager": {
                    "skills": [
                        { "name": "IT Strategy Development", "duration": "8 weeks" },
                        { "name": "Infrastructure Management", "duration": "7 weeks" },
                        { "name": "Team Management", "duration": "6 weeks" },
                        { "name": "IT Budgeting", "duration": "9 weeks" }
                    ],
                    "learningPath": [
                        { "phase": "Basics", "topics": ["Introduction to IT Management", "Basic IT Strategy", "Infrastructure Basics"], "duration": "6 weeks" },
                        { "phase": "Advanced", "topics": ["Advanced IT Strategy", "Vendor Management", "Network Security"], "duration": "7 weeks" },
                        { "phase": "Professional", "topics": ["IT Budgeting", "Team Leadership", "Change Management"], "duration": "9 weeks" }
                    ]
                },
                "Programmer Analyst": {
                    "skills": [
                        { "name": "Programming (C++, Java, Python)", "duration": "8 weeks" },
                        { "name": "System Analysis", "duration": "7 weeks" },
                        { "name": "Database Management", "duration": "6 weeks" },
                        { "name": "Application Development", "duration": "9 weeks" }
                    ],
                    "learningPath": [
                        { "phase": "Basics", "topics": ["Introduction to Programming", "Basic Algorithms", "System Analysis Basics"], "duration": "6 weeks" },
                        { "phase": "Advanced", "topics": ["Object-Oriented Programming", "Database Management", "Advanced System Design"], "duration": "7 weeks" },
                        { "phase": "Professional", "topics": ["Application Deployment", "Code Optimization", "Software Maintenance"], "duration": "9 weeks" }
                    ]
                },
                "Design & UX": {
                    "skills": [
                        { "name": "UI/UX Design", "duration": "7 weeks" },
                        { "name": "Prototyping & Wireframing", "duration": "6 weeks" },
                        { "name": "Usability Testing", "duration": "8 weeks" },
                        { "name": "Graphic Design Tools (Sketch, Figma, Adobe XD)", "duration": "9 weeks" }
                    ],
                    "learningPath": [
                        { "phase": "Basics", "topics": ["Introduction to UI/UX", "Wireframing Techniques", "Basic Prototyping"], "duration": "6 weeks" },
                        { "phase": "Advanced", "topics": ["Design Systems", "Usability Testing", "User-Centered Design"], "duration": "7 weeks" },
                        { "phase": "Professional", "topics": ["Advanced Prototyping", "Advanced Graphic Design Tools", "Design Implementation"], "duration": "8 weeks" }
                    ]
                },
                "Solutions Architect": {
                    "skills": [
                        { "name": "Solution Design", "duration": "8 weeks" },
                        { "name": "Architecture Principles", "duration": "7 weeks" },
                        { "name": "Cloud Technologies", "duration": "6 weeks" },
                        { "name": "Security Design", "duration": "9 weeks" }
                    ],
                    "learningPath": [
                        { "phase": "Basics", "topics": ["Introduction to Solutions Architecture", "Basic Design Patterns", "Cloud Fundamentals"], "duration": "6 weeks" },
                        { "phase": "Advanced", "topics": ["Security Architecture", "Enterprise Architecture", "Integration Techniques"], "duration": "7 weeks" },
                        { "phase": "Professional", "topics": ["Scalability & High Availability", "Cost Optimization", "Cloud Security"], "duration": "9 weeks" }
                    ]
                },
                "Systems Analyst": {
                    "skills": [
                        { "name": "Systems Design", "duration": "6 weeks" },
                        { "name": "Requirements Analysis", "duration": "7 weeks" },
                        { "name": "Process Modeling", "duration": "8 weeks" },
                        { "name": "System Implementation", "duration": "9 weeks" }
                    ],
                    "learningPath": [
                        { "phase": "Basics", "topics": ["Introduction to Systems Analysis", "Basic Requirements Gathering", "System Design Basics"], "duration": "6 weeks" },
                        { "phase": "Advanced", "topics": ["Advanced Process Modeling", "Database Design", "Systems Implementation"], "duration": "7 weeks" },
                        { "phase": "Professional", "topics": ["Complex Systems Design", "User Interface Design", "Project Management"], "duration": "9 weeks" }
                    ]
                },
                "Network Security Administrator": {
                    "skills": [
                        { "name": "Network Security Protocols", "duration": "8 weeks" },
                        { "name": "Firewall Configuration", "duration": "7 weeks" },
                        { "name": "VPN Setup", "duration": "6 weeks" },
                        { "name": "Intrusion Detection Systems", "duration": "9 weeks" }
                    ],
                    "learningPath": [
                        { "phase": "Basics", "topics": ["Introduction to Network Security", "Basic Firewall Configuration", "VPN Essentials"], "duration": "6 weeks" },
                        { "phase": "Advanced", "topics": ["IDS Configuration", "Security Protocols", "Advanced Network Security Tools"], "duration": "7 weeks" },
                        { "phase": "Professional", "topics": ["Security Auditing", "Incident Response", "Network Security Best Practices"], "duration": "9 weeks" }
                    ]
                },
                "Data Architect": {
                    "skills": [
                        { "name": "Data Modeling", "duration": "8 weeks" },
                        { "name": "Database Design", "duration": "7 weeks" },
                        { "name": "Data Warehousing", "duration": "6 weeks" },
                        { "name": "Big Data Solutions", "duration": "9 weeks" }
                    ],
                    "learningPath": [
                        { "phase": "Basics", "topics": ["Introduction to Data Architecture", "Basic Data Modeling", "Database Design Principles"], "duration": "6 weeks" },
                        { "phase": "Advanced", "topics": ["Data Warehousing", "ETL Design", "Big Data Technologies"], "duration": "7 weeks" },
                        { "phase": "Professional", "topics": ["Advanced Data Models", "Data Security", "Cloud Data Solutions"], "duration": "9 weeks" }
                    ]
                },
                "Software Developer": {
                    "skills": [
                        { "name": "Programming (Java, C++)", "duration": "8 weeks" },
                        { "name": "Version Control", "duration": "7 weeks" },
                        { "name": "Object-Oriented Design", "duration": "6 weeks" },
                        { "name": "Web Development", "duration": "9 weeks" }
                    ],
                    "learningPath": [
                        { "phase": "Basics", "topics": ["Introduction to Programming", "Version Control Basics", "OOP Fundamentals"], "duration": "6 weeks" },
                        { "phase": "Advanced", "topics": ["Advanced Programming Techniques", "Design Patterns", "Web Development"], "duration": "7 weeks" },
                        { "phase": "Professional", "topics": ["Database Interaction", "API Development", "Performance Optimization"], "duration": "9 weeks" }
                    ]
                },
                "E-Commerce Analyst": {
                    "skills": [
                        { "name": "E-Commerce Platforms", "duration": "7 weeks" },
                        { "name": "Data Analytics", "duration": "6 weeks" },
                        { "name": "Customer Journey Mapping", "duration": "8 weeks" },
                        { "name": "A/B Testing", "duration": "9 weeks" }
                    ],
                    "learningPath": [
                        { "phase": "Basics", "topics": ["Introduction to E-Commerce", "Platform Management", "Basic Analytics"], "duration": "6 weeks" },
                        { "phase": "Advanced", "topics": ["Advanced Analytics", "A/B Testing", "Customer Experience Optimization"], "duration": "7 weeks" },
                        { "phase": "Professional", "topics": ["Revenue Optimization", "Data-Driven Decision Making", "Advanced Customer Journey Mapping"], "duration": "9 weeks" }
                    ]
                },
                "Technical Services/Help Desk/Tech Support": {
                    "skills": [
                        { "name": "Hardware/Software Troubleshooting", "duration": "5 weeks" },
                        { "name": "Operating Systems (Windows, Linux)", "duration": "7 weeks" },
                        { "name": "Remote Support Tools", "duration": "6 weeks" },
                        { "name": "Client Communication", "duration": "8 weeks" }
                    ],
                    "learningPath": [
                        { "phase": "Basics", "topics": ["Introduction to IT Support", "Basic Troubleshooting", "Operating System Basics"], "duration": "5 weeks" },
                        { "phase": "Advanced", "topics": ["Network Troubleshooting", "Remote Support Techniques", "Advanced IT Support Tools"], "duration": "6 weeks" },
                        { "phase": "Professional", "topics": ["Customer Support Strategies", "Incident Management", "Knowledge Base Development"], "duration": "8 weeks" }
                    ]
                },
                "Information Technology Auditor": {
                    "skills": [
                        { "name": "Risk Assessment", "duration": "8 weeks" },
                        { "name": "Audit Procedures", "duration": "7 weeks" },
                        { "name": "Compliance Standards", "duration": "6 weeks" },
                        { "name": "Internal Controls", "duration": "9 weeks" }
                    ],
                    "learningPath": [
                        { "phase": "Basics", "topics": ["Introduction to IT Auditing", "Risk Management Basics", "Audit Procedures"], "duration": "6 weeks" },
                        { "phase": "Advanced", "topics": ["Compliance Frameworks", "Internal Controls", "Data Security Auditing"], "duration": "7 weeks" },
                        { "phase": "Professional", "topics": ["Advanced Audit Techniques", "IT Governance", "Audit Reporting"], "duration": "9 weeks" }
                    ]
                },
                    "Database Manager": {
                        "skills": [
                            { "name": "Database Management Systems (DBMS)", "duration": "7 weeks" },
                            { "name": "Data Integrity", "duration": "8 weeks" },
                            { "name": "Backup & Recovery", "duration": "6 weeks" },
                            { "name": "Performance Tuning", "duration": "9 weeks" }
                        ],
                        "learningPath": [
                            { "phase": "Basics", "topics": ["Introduction to Database Management", "Basic DBMS Concepts", "Data Integrity Fundamentals"], "duration": "6 weeks" },
                            { "phase": "Advanced", "topics": ["Backup & Recovery Techniques", "Database Performance Tuning", "Advanced DBMS Tools"], "duration": "7 weeks" },
                            { "phase": "Professional", "topics": ["High Availability Systems", "Data Warehousing", "Data Security and Compliance"], "duration": "9 weeks" }
                        ]
                    },
                    "Applications Developer": {
                        "skills": [
                            { "name": "Programming (Java, C#, Python)", "duration": "8 weeks" },
                            { "name": "API Integration", "duration": "7 weeks" },
                            { "name": "Software Design Patterns", "duration": "6 weeks" },
                            { "name": "Application Deployment", "duration": "9 weeks" }
                        ],
                        "learningPath": [
                            { "phase": "Basics", "topics": ["Introduction to Application Development", "Basic Programming Concepts", "API Fundamentals"], "duration": "6 weeks" },
                            { "phase": "Advanced", "topics": ["Advanced API Integration", "Design Patterns", "Debugging and Optimization"], "duration": "7 weeks" },
                            { "phase": "Professional", "topics": ["Continuous Deployment", "Scalable Architecture", "Cloud Application Development"], "duration": "9 weeks" }
                        ]
                    },
                    "Database Administrator": {
                        "skills": [
                            { "name": "Database Administration", "duration": "8 weeks" },
                            { "name": "SQL Optimization", "duration": "7 weeks" },
                            { "name": "Data Security", "duration": "6 weeks" },
                            { "name": "Backup & Recovery", "duration": "9 weeks" }
                        ],
                        "learningPath": [
                            { "phase": "Basics", "topics": ["Introduction to Database Administration", "Basic SQL Management", "Backup and Restore Basics"], "duration": "6 weeks" },
                            { "phase": "Advanced", "topics": ["SQL Query Optimization", "Database Security", "Performance Tuning"], "duration": "7 weeks" },
                            { "phase": "Professional", "topics": ["Replication and Clustering", "Disaster Recovery", "Database Automation"], "duration": "9 weeks" }
                        ]
                    },
                    "Network Engineer": {
                        "skills": [
                            { "name": "Network Protocols", "duration": "7 weeks" },
                            { "name": "Routing & Switching", "duration": "6 weeks" },
                            { "name": "Network Security", "duration": "8 weeks" },
                            { "name": "Wireless Technologies", "duration": "9 weeks" }
                        ],
                        "learningPath": [
                            { "phase": "Basics", "topics": ["Introduction to Networking", "Basic Network Configuration", "Network Protocols"], "duration": "6 weeks" },
                            { "phase": "Advanced", "topics": ["Routing & Switching", "Network Troubleshooting", "Wireless Network Setup"], "duration": "7 weeks" },
                            { "phase": "Professional", "topics": ["Network Security", "High Availability Networks", "Advanced Wireless Technologies"], "duration": "9 weeks" }
                        ]
                    },
                    "Software Engineer": {
                        "skills": [
                            { "name": "Software Development", "duration": "8 weeks" },
                            { "name": "Version Control", "duration": "7 weeks" },
                            { "name": "Agile Methodologies", "duration": "6 weeks" },
                            { "name": "System Design", "duration": "9 weeks" }
                        ],
                        "learningPath": [
                            { "phase": "Basics", "topics": ["Introduction to Software Engineering", "Version Control Basics", "Agile Development"], "duration": "6 weeks" },
                            { "phase": "Advanced", "topics": ["Advanced Software Development", "Design Patterns", "Unit Testing"], "duration": "7 weeks" },
                            { "phase": "Professional", "topics": ["Software Architecture", "Scalable System Design", "Performance Optimization"], "duration": "9 weeks" }
                        ]
                    },
                    "Technical Engineer": {
                        "skills": [
                            { "name": "Hardware Troubleshooting", "duration": "6 weeks" },
                            { "name": "System Architecture", "duration": "8 weeks" },
                            { "name": "Cloud Platforms", "duration": "7 weeks" },
                            { "name": "Security Engineering", "duration": "9 weeks" }
                        ],
                        "learningPath": [
                            { "phase": "Basics", "topics": ["Introduction to Technical Engineering", "Basic Hardware Troubleshooting", "Basic System Architecture"], "duration": "6 weeks" },
                            { "phase": "Advanced", "topics": ["Cloud Platforms", "Advanced Troubleshooting", "Security Practices"], "duration": "7 weeks" },
                            { "phase": "Professional", "topics": ["Security Engineering", "Advanced System Optimization", "Cloud Security"], "duration": "9 weeks" }
                        ]
                    },
                    "Network Security Engineer": {
                        "skills": [
                            { "name": "Network Security Protocols", "duration": "7 weeks" },
                            { "name": "Intrusion Detection Systems", "duration": "8 weeks" },
                            { "name": "Firewalls and VPNs", "duration": "6 weeks" },
                            { "name": "Security Audits", "duration": "9 weeks" }
                        ],
                        "learningPath": [
                            { "phase": "Basics", "topics": ["Introduction to Network Security", "Basic Network Security Protocols", "Firewall Configuration"], "duration": "6 weeks" },
                            { "phase": "Advanced", "topics": ["Intrusion Detection", "VPN Configuration", "Security Tools"], "duration": "7 weeks" },
                            { "phase": "Professional", "topics": ["Advanced Security Audits", "Incident Response", "Network Security Best Practices"], "duration": "9 weeks" }
                        ]
                    },
                    "Software Quality Assurance (QA) / Testing": {
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