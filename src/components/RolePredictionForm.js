import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function RolePredictionForm() {
    const [formData, setFormData] = useState({
        operating_systems: '',
        algorithms: '',
        programming_concepts: '',
        software_engineering: '',
        computer_networks: '',
        electronics: '',
        computer_architecture: '',
        mathematics: '',
        communication_skills: '',
        hours_working: '',
        logical_quotient: '',
        hackathons: '',
        coding_skills: '',
        public_speaking: '',
        can_work_long_time: false,
        self_learning_capability: false,
        extra_courses: false,
        certifications: '',
        workshops: '',
        talent_tests: false,
        olympiads: false,
        reading_writing_skills: 'excellent',
        memory_capability: 'excellent',
        interested_subjects: '',
        interested_career_area: '',
        job_or_higher_studies: 'Job',
        company_type: '',
        taken_inputs_from_seniors: false,
        interested_in_games: false,
        interested_books: 'Technology',
        expected_salary: '',
        relationship_status: false,
        behavior_type: 'stubborn',
        management_or_technical: 'Management',
        salary_or_work: 'salary',
        worker_type: 'hard worker',
        worked_in_teams: false,
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        // Create features array in the required order
        const features = [
            Number(formData.operating_systems),          // Academic percentage in Operating Systems
            Number(formData.algorithms),                 // percentage in Algorithms
            Number(formData.programming_concepts),       // Percentage in Programming Concepts
            Number(formData.software_engineering),       // Percentage in Software Engineering
            Number(formData.computer_networks),         // Percentage in Computer Networks
            Number(formData.electronics),               // Percentage in Electronics Subjects
            Number(formData.computer_architecture),     // Percentage in Computer Architecture
            Number(formData.mathematics),               // Percentage in Mathematics
            Number(formData.communication_skills),      // Percentage in Communication skills
            Number(formData.hours_working),             // Hours working per day
            Number(formData.logical_quotient),          // Logical quotient rating
            Number(formData.hackathons),                // hackathons
            Number(formData.coding_skills),             // coding skills rating
            Number(formData.public_speaking),           // public speaking points
            formData.can_work_long_time ? 1 : 0,       // can work long time before system?
            formData.self_learning_capability ? 1 : 0,  // self-learning capability?
            formData.extra_courses ? 1 : 0,             // Extra-courses did
            Number(formData.certifications),            // certifications
            Number(formData.workshops),                 // workshops
            formData.talent_tests ? 1 : 0,              // talenttests taken?
            formData.olympiads ? 1 : 0,                 // olympiads
            formData.reading_writing_skills === 'excellent' ? 2 : 1, // reading and writing skills
            formData.memory_capability === 'excellent' ? 2 : 1,     // memory capability score
            formData.interested_subjects === 'Web Services' ? 1 : 0, // Interested subjects
            formData.interested_career_area === 'Web Development' ? 1 : 0, // interested career area
            formData.job_or_higher_studies === 'Job' ? 1 : 0,      // Job/Higher Studies?
            formData.company_type === 'Web Services' ? 1 : 0,      // Type of company
            formData.taken_inputs_from_seniors ? 1 : 0,            // Taken inputs from seniors
            formData.interested_in_games ? 1 : 0,                  // interested in games
            formData.interested_books === 'Technology' ? 2 : 1,    // Interested Type of Books
            Number(formData.expected_salary),                      // Salary Range Expected
            formData.relationship_status ? 1 : 0,                  // In a Relationship?
            formData.behavior_type === 'stubborn' ? 2 : 1,        // Gentle or Tuff behaviour?
            formData.management_or_technical === 'Management' ? 1 : 0, // Management or Technical
            formData.salary_or_work === 'salary' ? 1 : 0,         // Salary/work
            formData.worker_type === 'hard worker' ? 1 : 0,       // hard/smart worker
            formData.worked_in_teams ? 1 : 0,                     // worked in teams ever?
            0                                                      // Introvert (hardcoded as per requirement)
        ];

        try {
            const response = await fetch('http://127.0.0.1:5000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    features: features
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Prediction result:', result);
            // Handle the prediction result here
            
        } catch (error) {
            console.error('Error submitting form:', error);
            setError('Error submitting form. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f4f4f9] py-12 px-4">
            <motion.div 
                className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Role Prediction Form
                </h1>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Basic Academic Information */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Basic Academic Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    SSC Percentage
                                </label>
                                <input
                                    type="number"
                                    name="ssc_percentage"
                                    value={formData.ssc_percentage}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter SSC percentage"
                                    min="0"
                                    max="100"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Inter Percentage
                                </label>
                                <input
                                    type="number"
                                    name="inter_percentage"
                                    value={formData.inter_percentage}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter Inter percentage"
                                    min="0"
                                    max="100"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    BTech CGPA
                                </label>
                                <input
                                    type="number"
                                    name="btech_cgpa"
                                    value={formData.btech_cgpa}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter CGPA"
                                    min="0"
                                    max="10"
                                    step="0.01"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    School Type
                                </label>
                                <select
                                    name="school_type"
                                    value={formData.school_type}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                >
                                    <option value="Private">Private</option>
                                    <option value="Government">Government</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Number of Mini Projects
                                </label>
                                <input
                                    type="number"
                                    name="mini_projects"
                                    value={formData.mini_projects}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter number of mini projects"
                                    min="0"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Number of Projects
                                </label>
                                <input
                                    type="number"
                                    name="projects"
                                    value={formData.projects}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter number of projects"
                                    min="0"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Skills Rating */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Skills Rating (1-10)</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { name: 'core_subject', label: 'Core Subject' },
                                { name: 'aptitude', label: 'Aptitude' },
                                { name: 'problem_solving', label: 'Problem Solving' },
                                { name: 'programming', label: 'Programming' },
                                { name: 'abstract_thinking', label: 'Abstract Thinking' },
                                { name: 'design', label: 'Design' }
                            ].map((skill) => (
                                <div key={skill.name}>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {skill.label}
                                    </label>
                                    <input
                                        type="number"
                                        name={skill.name}
                                        value={formData[skill.name]}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Rate 1-10"
                                        min="1"
                                        max="10"
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Academic Information */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Academic Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { name: 'operating_systems', label: 'Operating Systems' },
                                { name: 'algorithms', label: 'Algorithms' },
                                { name: 'programming_concepts', label: 'Programming Concepts' },
                                { name: 'software_engineering', label: 'Software Engineering' },
                                { name: 'computer_networks', label: 'Computer Networks' },
                                { name: 'electronics', label: 'Electronics' },
                                { name: 'computer_architecture', label: 'Computer Architecture' },
                                { name: 'mathematics', label: 'Mathematics' },
                                { name: 'communication_skills', label: 'Communication Skills' }
                            ].map((subject) => (
                                <div key={subject.name}>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {subject.label} (%)
                                    </label>
                                    <input
                                        type="number"
                                        name={subject.name}
                                        value={formData[subject.name]}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Enter percentage"
                                        min="0"
                                        max="100"
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Personal and Career Information */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Personal & Career Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Hours Working Per Day
                                    </label>
                                    <input
                                        type="number"
                                        name="hours_working"
                                        value={formData.hours_working}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg"
                                        min="0"
                                        max="24"
                                        required
                                    />
                                </div>
                                {/* Add more number inputs here */}
                            </div>
                            <div className="space-y-4">
                                {/* Checkboxes */}
                                {[
                                    { name: 'can_work_long_time', label: 'Can work long time before system?' },
                                    { name: 'self_learning_capability', label: 'Self-learning capability?' },
                                    { name: 'talent_tests', label: 'Talent tests taken?' },
                                    { name: 'olympiads', label: 'Participated in Olympiads?' }
                                ].map((checkbox) => (
                                    <div key={checkbox.name} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            name={checkbox.name}
                                            checked={formData[checkbox.name]}
                                            onChange={(e) => handleChange({
                                                target: {
                                                    name: checkbox.name,
                                                    value: e.target.checked
                                                }
                                            })}
                                            className="h-4 w-4 text-blue-600 rounded"
                                        />
                                        <label className="ml-2 text-sm text-gray-700">
                                            {checkbox.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Interest Information */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Interests & Preferences</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Interested Career Area
                                </label>
                                <input
                                    type="text"
                                    name="interested_career_area"
                                    value={formData.interested_career_area}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Job or Higher Studies?
                                </label>
                                <select
                                    name="job_or_higher_studies"
                                    value={formData.job_or_higher_studies}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    required
                                >
                                    <option value="Job">Job</option>
                                    <option value="Higher Studies">Higher Studies</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Personal Traits */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Personal Traits</h2>
                        <div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Management or Technical
                                </label>
                                <select
                                    name="management_or_technical"
                                    value={formData.management_or_technical}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    required
                                >
                                    <option value="Management">Management</option>
                                    <option value="Technical">Technical</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Hidden Fields */}
                    <input type="hidden" name="first_computer" value={formData.first_computer} />
                    <input type="hidden" name="first_program" value={formData.first_program} />
                    <input type="hidden" name="lab_programs" value={formData.lab_programs} />
                    <input type="hidden" name="language_known" value={formData.language_known} />
                    <input type="hidden" name="problem_solving_approach" value={formData.problem_solving_approach} />
                    <input type="hidden" name="typing_speed" value={formData.typing_speed} />

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 
                                 text-white py-4 px-6 rounded-lg font-semibold shadow-lg 
                                 hover:shadow-xl transition-all duration-200
                                 disabled:opacity-50 disabled:cursor-not-allowed"
                        whileHover={{ scale: isLoading ? 1 : 1.02 }}
                        whileTap={{ scale: isLoading ? 1 : 0.98 }}
                    >
                        {isLoading ? 'Predicting...' : 'Predict Career Path'}
                    </motion.button>
                </form>

                {/* Show error message if there is one */}
                {error && (
                    <div className="text-red-500 text-center mt-4">
                        {error}
                    </div>
                )}
            </motion.div>
        </div>
    );
} 