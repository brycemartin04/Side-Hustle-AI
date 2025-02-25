"use client";
import React, { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const questions = [
  {
    question: "How much time can you commit per week?",
    options: ["<5 hours", "5-10 hours", "10-20 hours", "20+ hours"],
  },
  {
    question: "What is your starting budget?",
    options: ["$0", "$100-$500", "$500-$2000", "$2000+"],
  },
  {
    question: "What type of work do you enjoy the most?",
    options: [
      "Creative (Writing, Design, Content Creation)",
      "Technical (Coding, Data Analysis, IT)",
      "Sales & Marketing (Social Media, E-commerce)",
      "Hands-on (Crafts, Repairs, Physical Labor)",
    ],
  },
  {
    question: "Do you prefer working solo or collaborating?",
    options: ["Solo", "Collaboration", "Either works for me"],
  },
  {
    question: "What is your long-term goal for this side hustle?",
    options: [
      "Extra cash on the side",
      "Build a full-time business",
      "Learn new skills",
      "Not sure yet, just exploring",
    ],
  },
  {
    question: "How comfortable are you with social media and self-promotion?",
    options: [
      "Very comfortable, I can leverage it well",
      "Somewhat comfortable, but need guidance",
      "Not comfortable, prefer to work behind the scenes",
      "I’d rather avoid social media altogether",
    ],
  },
  {
    question: "Which of these sounds most appealing to you?",
    options: [
      "Helping people (Coaching, Consulting, Teaching)",
      "Selling things (E-commerce, Dropshipping, Handmade Goods)",
      "Creating content (YouTube, Blogging, Graphic Design)",
      "Tech-based work (Coding, Automation, AI, Web Dev)",
    ],
  },
  {
    question: "Where do you want to work?",
    options: [
      "Strictly online",
      "Strictly in-person",
      "A mix of both",
      "Doesn’t matter to me",
    ],
  },
  {
    question: "How quickly do you want to see results?",
    options: [
      "Immediately (within weeks)",
      "A few months is fine",
      "I’m willing to invest time for long-term growth",
      "No rush, I just want to experiment",
    ],
  },
];

export default function SideHustleQuiz() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (step < questions.length) {
      setStep(step + 1);
    }
  };

  const handleSubmit = () => {
    handleChatRequest();
  };

  const handleChatRequest = async () => {
    setLoading(true);
    const payload = { answers, additionalNotes };
    try {
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error:", errorData);
        alert("An error occurred with the API. Please try again.");
        setLoading(false);
        return;
      }

      const data = await response.json();
      const message = data.choices[0].message.content;
      setApiResponse(message);
      console.log(message);
    } catch (error) {
      console.error("Fetch Error:", error);
      alert("An unexpected error occurred. Please check the console.");
    }
    setLoading(false);
  };

  if (!started) {
    return (
      <div className="max-w-3xl mx-auto p-12 border border-[#23c6854f] bg-white rounded-3xl shadow-md text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#202f46]">
          Find Your Perfect Side Hustle With AI
        </h2>
        <p className="mb-10 text-xl">
          Our AI-powered quiz will analyze your answers and match you with the
          perfect side hustle. Get started now!
        </p>
        <button
          onClick={() => setStarted(true)}
          className="w-40 p-2 bg-[#23C686] text-white text-xl rounded-xl transition-transform transform hover:scale-105 hover:bg-[#13B676] font-semibold duration-300"
        >
          Start Quiz
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center max-w-3xl mx-auto p-12 border border-[#23c6854f] bg-white rounded-3xl shadow-md text-center">
        <svg
          className="animate-spin h-10 w-10 text-[#23C686]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
          ></path>
        </svg>
        <p className="text-xl mt-4 text-[#202f46]">
          Loading your recommendation...
        </p>
      </div>
    );
  }

  if (apiResponse) {
    return (
      <div className="max-w-3xl mx-auto p-12 border border-[#23c6854f] bg-white rounded-3xl shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-6 text-center text-[#202f46]">
          Your Side Hustle Recommendation:
        </h2>
        <div>
          <div className="text-lg text-gray-800 overflow-auto">
            <Markdown remarkPlugins={[remarkGfm]}>
              {apiResponse.trim()}
            </Markdown>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-12 border border-[#23c6854f] bg-white rounded-3xl shadow-md text-center">
      <div className="mb-4 h-2 bg-gray-200 rounded-full">
        <div
          className="h-2 bg-[#23C686] rounded-full transition-all duration-300"
          style={{ width: `${(step / (questions.length + 1)) * 100}%` }}
        ></div>
      </div>

      {step < questions.length ? (
        <>
          <h2 className="text-xl font-semibold mb-4 p-4 text-center text-[#202f46]">
            {questions[step].question}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {questions[step].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full p-2 bg-[#23C686] text-white text-xl rounded-lg hover:bg-[#13B676] font-semibold transition-transform transform hover:scale-105 duration-300"
              >
                {option}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-4 p-4 text-center text-[#202f46]">
            Any additional details you'd like our AI to consider?
          </h2>
          <textarea
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#23C686]"
            maxLength={200}
            rows="4"
            placeholder="Mention any skills, passions, or specific goals..."
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="w-full mt-4 p-3 bg-[#23C686] text-white text-xl rounded-lg hover:bg-[#13B676] font-semibold transition duration-300"
          >
            Submit Quiz
          </button>
        </>
      )}
    </div>
  );
}
