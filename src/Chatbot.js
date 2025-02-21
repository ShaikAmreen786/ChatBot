import { useState } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

export default function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) return;
        
        const newMessages = [...messages, { sender: "user", text: input }];
        setMessages(newMessages);
        setInput("");
        setLoading(true);
        
        try {
            const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAmKVxPUm2AZMILup0Y_JeNsO5YXEtlyUo", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: input }] }]
                })
            });
    
            const data = await response.json();
            const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response.";
    
            setMessages([...newMessages, { sender: "bot", text: reply }]);
        } catch (error) {
            setMessages([...newMessages, { sender: "bot", text: "Error: Unable to connect to Gemini AI." }]);
        } finally {
            setLoading(false);
        }
    };
    
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    };

    const uploadResume = async () => {
        if (!file) return;
    
        const reader = new FileReader();
        reader.onload = async (event) => {
            const resumeText = event.target.result; // Extracted text from file
    
            try {
                const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAmKVxPUm2AZMILup0Y_JeNsO5YXEtlyUo", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: `Analyze this resume and suggest a career path: ${resumeText}` }] }]
                    })
                });
    
                const data = await response.json();
                const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't analyze the resume.";
    
                setMessages([...messages, { sender: "bot", text: reply }]);
            } catch (error) {
                setMessages([...messages, { sender: "bot", text: "Error: Resume upload failed." }]);
            }
        };
    
        reader.readAsText(file);
    };
    

    return (
        <motion.div 
            className="w-full max-w-lg mx-auto p-6 border rounded-xl shadow-xl bg-white"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Career Advisor Chatbot</h2>
            <div className="h-80 overflow-y-auto border p-4 rounded-lg bg-gray-100 shadow-inner">
                {messages.map((msg, index) => (
                    <motion.div 
                        key={index} 
                        className={`mb-3 p-3 rounded-lg w-fit max-w-xs ${msg.sender === "user" ? "bg-blue-400 text-white self-end ml-auto" : "bg-gray-300 text-black self-start"}`}
                        initial={{ scale: 0.9 }} 
                        animate={{ scale: 1 }}
                    >
                        <ReactMarkdown>{msg.text}</ReactMarkdown> {/* Renders Markdown */}
                    </motion.div>
                ))}
                {loading && (
                    <div className="chat-message loading">
                        <div className="loader">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                )}
            </div>
            <div className="flex mt-4 gap-2">
                <input 
                    type="text" 
                    className="flex-1 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about your career..." 
                />
                <motion.button 
                    className="bg-blue-500 text-white px-5 py-3 rounded-lg shadow-lg hover:bg-blue-600"
                    onClick={sendMessage}
                    whileHover={{ scale: 1.1 }}
                >Send</motion.button>
            </div>
            {/* <div className="mt-4 flex flex-col items-center gap-2">
                <input 
                    type="file" 
                    className="p-2 border rounded-lg shadow-sm cursor-pointer bg-gray-50" 
                    onChange={(e) => setFile(e.target.files[0])} 
                />
                <motion.button 
                    className="bg-green-500 text-white px-5 py-3 rounded-lg shadow-lg hover:bg-green-600" 
                    onClick={uploadResume}
                    whileHover={{ scale: 1.1 }}
                >Upload Resume</motion.button>
            </div> */}
        </motion.div>
    );
}
