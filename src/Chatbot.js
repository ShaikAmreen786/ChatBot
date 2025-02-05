import { useState } from "react";
import { motion } from "framer-motion";

export default function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [file, setFile] = useState(null);

    const sendMessage = async () => {
        if (!input.trim()) return;
        
        const newMessages = [...messages, { sender: "user", text: input }];
        setMessages(newMessages);
        setInput("");
        
        try {
            const response = await fetch("http://localhost:5000/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input })
            });
            
            const data = await response.json();
            setMessages([...newMessages, { sender: "bot", text: data.reply }]);
        } catch (error) {
            setMessages([...newMessages, { sender: "bot", text: "Error: Unable to connect." }]);
        }
    };

    const uploadResume = async () => {
        if (!file) return;
        
        const formData = new FormData();
        formData.append("file", file);
        
        try {
            const response = await fetch("http://localhost:5000/upload_resume", {
                method: "POST",
                body: formData
            });
            
            const data = await response.json();
            setMessages([...messages, { sender: "bot", text: data.reply }]);
        } catch (error) {
            setMessages([...messages, { sender: "bot", text: "Error: Resume upload failed." }]);
        }
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
                        {msg.text}
                    </motion.div>
                ))}
            </div>
            <div className="flex mt-4 gap-2">
                <input 
                    type="text" 
                    className="flex-1 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder="Ask about your career..." 
                />
                <motion.button 
                    className="bg-blue-500 text-white px-5 py-3 rounded-lg shadow-lg hover:bg-blue-600"
                    onClick={sendMessage}
                    whileHover={{ scale: 1.1 }}
                >Send</motion.button>
            </div>
            <div className="mt-4 flex flex-col items-center gap-2">
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
            </div>
        </motion.div>
    );
}
