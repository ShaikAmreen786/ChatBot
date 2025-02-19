import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function RolePredictionForm() {
    const [formData, setFormData] = useState({
        // Academic Percentages
        ssc_percentage: '',
        inter_percentage: '',
        btech_cgpa: '',
        school_type: 'Private',
        mini_projects: '',
        projects: '',
        core_subject: '',
        aptitude: '',
        problem_solving: '',
        programming: '',
        abstract_thinking: '',
        design: '',
        // Hidden fields with default values
        first_computer: 'Personal',
        first_program: 'School',
        lab_programs: 'Yes',
        language_known: 'Python',
        problem_solving_approach: 'Logical',
        typing_speed: 'Medium',
        management_or_technical: 'Technical',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add your form submission logic here
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
                        className="w-full bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 
                                 text-white py-4 px-6 rounded-lg font-semibold shadow-lg 
                                 hover:shadow-xl transition-all duration-200"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Predict Career Path
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
} 