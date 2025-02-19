import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function RolePredictionForm() {
    const [formData, setFormData] = useState({
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
        language_known: 'Python',
        problem_solving_approach: 'Logical',
        typing_speed: 'Medium',
        logical_quotient_rating: '8',
        hackathons: '2',
        coding_skills_rating: '7',
        public_speaking_points: '6'
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
                className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Role Prediction Form
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Academic Information */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Academic Information</h2>
                        
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
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    placeholder="Enter SSC %"
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
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    placeholder="Enter Inter %"
                                    min="0"
                                    max="100"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    BTech CGPA
                                </label>
                                <input
                                    type="number"
                                    name="btech_cgpa"
                                    value={formData.btech_cgpa}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    placeholder="Enter CGPA"
                                    step="0.01"
                                    min="0"
                                    max="10"
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
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    required
                                >
                                    <option value="Private">Private</option>
                                    <option value="Government">Government</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Projects Section */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Number of Mini Projects
                                </label>
                                <input
                                    type="number"
                                    name="mini_projects"
                                    value={formData.mini_projects}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    placeholder="Enter number"
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
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    placeholder="Enter number"
                                    min="0"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Skills Rating (1-10)</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        placeholder="Rate 1-10"
                                        min="1"
                                        max="10"
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hidden Fields */}
                    <input type="hidden" name="first_computer" value={formData.first_computer} />
                    <input type="hidden" name="first_program" value={formData.first_program} />
                    <input type="hidden" name="language_known" value={formData.language_known} />
                    <input type="hidden" name="problem_solving_approach" value={formData.problem_solving_approach} />
                    <input type="hidden" name="typing_speed" value={formData.typing_speed} />
                    <input type="hidden" name="logical_quotient_rating" value={formData.logical_quotient_rating} />
                    <input type="hidden" name="hackathons" value={formData.hackathons} />
                    <input type="hidden" name="coding_skills_rating" value={formData.coding_skills_rating} />
                    <input type="hidden" name="public_speaking_points" value={formData.public_speaking_points} />

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-semibold
                                 hover:bg-green-600 transition-colors duration-200"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Predict Role
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
} 