import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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
        interested_books: '',
        expected_salary: '',
        relationship_status: false,
        behavior_type: 'stubborn',
        management_or_technical: 'Management',
        salary_or_work: 'salary',
        worker_type: 'hard worker',
        worked_in_teams: false,
        ssc_percentage: '',
        inter_percentage: '',
        btech_cgpa: '',
        school_type: 'Private',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [predictionResult, setPredictionResult] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

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
            formData.reading_writing_skills === 2, // reading and writing skills
            formData.memory_capability === 2,     // memory capability score
            formData.interested_subjects, // Interested subjects
            formData.interested_career_area, // interested career area
            formData.job_or_higher_studies,      // Job/Higher Studies?
            formData.company_type === 1,      // Type of company
            formData.taken_inputs_from_seniors ? 1 : 0,            // Taken inputs from seniors
            formData.interested_in_games ? 1 : 0,                  // interested in games
            formData.interested_books === 2,    // Interested Type of Books
            Number(formData.expected_salary),                      // Salary Range Expected
            formData.relationship_status ? 1 : 0,                  // In a Relationship?
            formData.behavior_type === 2,        // Gentle or Tuff behaviour?
            formData.management_or_technical === 'Management' ? 1 : 0, // Management or Technical
            formData.salary_or_work === 1,         // Salary/work
            formData.worker_type === 1,       // hard/smart worker
            formData.worked_in_teams === 1,                     // worked in teams ever?
            0                                                      // Introvert (hardcoded as per requirement)
        ];

        try {
            const response = await fetch('https://0409-152-58-233-244.ngrok-free.app/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'cors',
                body: JSON.stringify({
                    features: features
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Prediction result:', result);
            setPredictionResult(result);
            setShowModal(true);

            // Navigate to SkillsRoadmap page with prediction result
            navigate('/skills-roadmap', { state: { predictionResult: result } });

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
                    {/* Academic Information */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Academic Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    SSC Percentage
                                </label>
                                <input
                                    type="number"
                                    name="ssc_percentage"
                                    value={formData.ssc_percentage}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    min="0"
                                    max="100"
                                    step="0.01"
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
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    min="0"
                                    max="100"
                                    step="0.01"
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
                                    className="w-full p-3 border border-gray-300 rounded-lg"
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
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    required
                                >
                                    <option value="Private">Private</option>
                                    <option value="Government">Government</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Subject Percentages */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Subject Percentages</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { name: 'operating_systems', label: 'Operating Systems (%)' },
                                { name: 'algorithms', label: 'Algorithms (%)' },
                                { name: 'programming_concepts', label: 'Programming Concepts (%)' },
                                { name: 'software_engineering', label: 'Software Engineering (%)' },
                                { name: 'computer_networks', label: 'Computer Networks (%)' },
                                { name: 'electronics', label: 'Electronics (%)' },
                                { name: 'computer_architecture', label: 'Computer Architecture (%)' },
                                { name: 'mathematics', label: 'Mathematics (%)' },
                                { name: 'communication_skills', label: 'Communication Skills (%)' }
                            ].map((subject) => (
                                <div key={subject.name}>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {subject.label}
                                    </label>
                                    <input
                                        type="number"
                                        name={subject.name}
                                        value={formData[subject.name]}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg"
                                        placeholder={`Enter ${subject.label} percentage`}
                                        min="0"
                                        max="100"
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills and Ratings */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Skills and Ratings</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { name: 'logical_quotient', label: 'Logical Quotient Rating (0-10)' },
                                { name: 'coding_skills', label: 'Coding Skills Rating (0-10)' },
                                { name: 'public_speaking', label: 'Public Speaking Points (0-10)' }
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
                                        className="w-full p-3 border border-gray-300 rounded-lg"
                                        placeholder={`Enter ${skill.label}`}
                                        min="0"
                                        max="10"
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Activities and Experience */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Activities and Experience</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                    placeholder="Enter working hours"
                                    min="0"
                                    max="24"
                                    required
                                />
                            </div>
                            {[
                                { name: 'hackathons', label: 'Number of Hackathons' },
                                { name: 'certifications', label: 'Number of Certifications' },
                                { name: 'workshops', label: 'Number of Workshops' }
                            ].map((activity) => (
                                <div key={activity.name}>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {activity.label}
                                    </label>
                                    <input
                                        type="number"
                                        name={activity.name}
                                        value={formData[activity.name]}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg"
                                        placeholder={`Enter number`}
                                        min="0"
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Checkboxes */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Additional Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { name: 'can_work_long_time', label: 'Can work for long time?' },
                                { name: 'self_learning_capability', label: 'Self-learning capability?' },
                                { name: 'extra_courses', label: 'Taken extra courses?' },
                                { name: 'talent_tests', label: 'Taken talent tests?' },
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

                    {/* Interest Information */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Interests & Preferences</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Interested Subjects
                                </label>
                                <select
                                    name="interested_subjects"
                                    value={formData.interested_subjects}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    required
                                >
                                    <option value="">Select Subject</option>
                                    <option value="0">Cloud Computing</option>
                                    <option value="1">Networks</option>
                                    <option value="2">Hacking</option>
                                    <option value="3">Computer Architecture</option>
                                    <option value="4">Programming</option>
                                    <option value="5">Parallel Computing</option>
                                    <option value="6">IOT</option>
                                    <option value="7">Data Engineering</option>
                                    <option value="8">Software Engineering</option>
                                    <option value="9">Management</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Interested Career Area
                                </label>
                                <select
                                    name="interested_career_area"
                                    value={formData.interested_career_area}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    required
                                >
                                    <option value="">Select Career Area</option>
                                    <option value="0">System Developer</option>
                                    <option value="1">Business Process Analyst</option>
                                    <option value="2">Developer</option>
                                    <option value="3">Testing</option>
                                    <option value="4">Security</option>
                                    <option value="5">Cloud Computing</option>
                                </select>
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
                                    <option value="0">Select Option</option>
                                    <option value="1">Job</option>
                                    <option value="0">Higher Studies</option>
                                </select>
                            </div>

                            {/* Interested Books */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Interested Type of Books
                                </label>
                                <select
                                    name="interested_books"
                                    value={formData.interested_books}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    required
                                >
                                    <option value="">Select Book Type</option>
                                    <option value="0">Prayer Books</option>
                                    <option value="1">Children's</option>
                                    <option value="2">Travel</option>
                                    <option value="3">Romance</option>
                                    <option value="4">Cookbooks</option>
                                    <option value="5">Self help</option>
                                    <option value="6">Drama</option>
                                    <option value="7">Math</option>
                                    <option value="8">Religion & Spirituality</option>
                                    <option value="9">Anthology</option>
                                    <option value="10">Trilogy</option>
                                    <option value="11">Autobiographies</option>
                                    <option value="12">Mystery</option>
                                    <option value="13">Diaries</option>
                                    <option value="14">Journals</option>
                                    <option value="15">History</option>
                                    <option value="16">Art</option>
                                    <option value="17">Dictionaries</option>
                                    <option value="18">Horror</option>
                                    <option value="19">Encyclopedias</option>
                                    <option value="20">Action and Adventure</option>
                                    <option value="21">Fantasy</option>
                                    <option value="22">Comics</option>
                                    <option value="23">Science Fiction</option>
                                    <option value="24">Series</option>
                                    <option value="25">Guide</option>
                                    <option value="26">Biographies</option>
                                    <option value="27">Health</option>
                                    <option value="28">Satire</option>
                                    <option value="29">Science</option>
                                    <option value="30">Poetry</option>
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

            {/* Prediction Result Modal */}
            <AnimatePresence>
                {showModal && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black bg-opacity-50 z-40"
                            onClick={() => setShowModal(false)}
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 20 }}
                            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                     bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full mx-4 z-50"
                        >
                            <div className="relative">
                                {/* Close button */}
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="absolute top-0 right-0 text-gray-400 hover:text-gray-600"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                {/* Modal content */}
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                    Prediction Result
                                </h2>
                                <div className="space-y-4">
                                    {predictionResult && (
                                        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
                                            <p className="text-lg font-semibold text-gray-800">
                                                Predicted Role: {predictionResult.prediction}
                                            </p>
                                            {/* <p className="text-gray-600 mt-2">
                                                Confidence Score: {predictionResult.confidence}%
                                            </p> */}
                                            {/* Add more result details as needed */}
                                        </div>
                                    )}
                                </div>

                                {/* Close button */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setShowModal(false)}
                                    className="mt-6 w-full bg-gradient-to-r from-purple-600 to-blue-600 
                                             text-white py-3 px-6 rounded-lg font-semibold shadow-lg 
                                             hover:shadow-xl transition-all duration-200"
                                >
                                    Close
                                </motion.button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
} 