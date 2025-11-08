import { useState, useRef, useEffect } from "react";
import "./UI/ChatBot.css";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! 👋 I'm Onkar's portfolio assistant. Ask me about his iOS work at Ixigo (SwiftUI Rewards SDK), web projects (MERN/Django), Agentic AI systems (LangChain/Autogen), or education at IIT Jodhpur!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateResponse(inputValue.toLowerCase());
      const botMessage: Message = {
        id: Date.now(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const generateResponse = (userInput: string): string => {
    // Simple keyword-based responses
    if (
      userInput.includes("hello") ||
      userInput.includes("hi") ||
      userInput.includes("hey")
    ) {
      return "Hello! I'm here to help you learn about Onkar Singh Rajput - a Full Stack & AI Developer from IIT Jodhpur. He builds iOS apps, web platforms, and AI systems!";
    }
    if (
      userInput.includes("name") ||
      userInput.includes("who are you") ||
      userInput.includes("who is")
    ) {
      return "This is Onkar Singh Rajput's portfolio! He's a BTech graduate from IIT Jodhpur (2021-2025) with expertise in iOS Development (SwiftUI), Web Development (React/Next.js), and Agentic AI (LangChain/LangGraph).";
    }
    if (
      userInput.includes("skill") ||
      userInput.includes("technology") ||
      userInput.includes("tech stack")
    ) {
      return "Onkar has diverse skills across 4 categories: iOS (SwiftUI, UIKit, Swift), Web (React.js, Next.js, Django, TypeScript), AI & ML (LangChain, LangGraph, Autogen, Pandas, NumPy, scikit-learn, OpenCV, Deep Learning), and Tools (Git, Docker, VSCode, Jira). Plus Python, C++, SQL, and soft skills!";
    }
    if (
      userInput.includes("agentic") ||
      userInput.includes("agent") ||
      userInput.includes("multi-agent")
    ) {
      return "Onkar is an expert in Agentic AI! He's built autonomous multi-agent systems using LangChain, LangGraph, and Autogen, including a self-replicating AI system with 20+ parallel agents and sophisticated coordination patterns.";
    }
    if (userInput.includes("langchain") || userInput.includes("langgraph")) {
      return "Onkar extensively uses LangChain and LangGraph to build sophisticated agentic systems. His Sidekick project uses these frameworks to create autonomous agents with memory persistence and web automation!";
    }
    if (userInput.includes("project")) {
      return "Onkar has built 6 amazing projects: AI Projects - 1) Sidekick (Multi-Agent Assistant), 2) AI Trading Floor, 3) Distributed Agent Network (20+ agents); iOS - 4) Weather App (SwiftUI); Web - 5) E-Commerce (MERN), 6) Online Voting System (React+Django). Check Portfolio!";
    }
    if (
      userInput.includes("ios") ||
      userInput.includes("swift") ||
      userInput.includes("swiftui") ||
      userInput.includes("weather")
    ) {
      return "Onkar built a Weather App (May 2025 at Ixigo) using SwiftUI with location updates, weather predictions, and smooth navigation. He's currently at Ixigo working on comprehensive Rewards SDK, UI Automation, and Onboarding System with SwiftUI & UIKit!";
    }
    if (
      userInput.includes("ecommerce") ||
      userInput.includes("e-commerce") ||
      userInput.includes("mern")
    ) {
      return "The E-Commerce Website is a full-stack MERN application with JWT/OAuth authentication, role-based access control, search filters, and personalized recommendations built with React, Node.js, Express, MongoDB, Tailwind CSS & Material-UI!";
    }
    if (userInput.includes("voting")) {
      return "The Online Voting System helps people vote from outside their hometown. Features OTP-based authentication, officer dashboard for real-time tracking, and voter dashboard. Built with React, Django, TypeScript, PostgreSQL, Material-UI & Tailwind CSS!";
    }
    if (userInput.includes("sidekick")) {
      return "Sidekick is Onkar's multi-agent personal assistant built with LangGraph and LangChain. It features Worker and Evaluator agents, can browse the web with Playwright, execute Python scripts, and has memory persistence with SQLite!";
    }
    if (userInput.includes("trading") || userInput.includes("trading floor")) {
      return "The AI Trading Floor is a multi-model stock trading simulation developed under RAID Society at IIT Jodhpur. It uses MCP (Model Context Protocol) architecture with a Gradio dashboard for real-time portfolio tracking and performance analytics!";
    }
    if (
      userInput.includes("distributed") ||
      userInput.includes("self-replicating")
    ) {
      return "The Distributed Agent Network is groundbreaking! It's a self-replicating AI system where agents autonomously generate other agents with unique personalities. Uses gRPC for communication, supports 20+ parallel agents with emergent behavior, and features meta-programming where AI writes code to spawn new agents!";
    }
    if (
      userInput.includes("experience") ||
      userInput.includes("work") ||
      userInput.includes("intern")
    ) {
      return "Onkar completed two internships: 1) Ixigo (June 2025 - Present, On-site, Gurugram) - Developed comprehensive Rewards SDK for Flights, Trains, Bus & Hotel platforms with SwiftUI & UIKit, plus UI Automation and reusable Onboarding System. 2) KbCloudtech (May-July 2024, Remote) - Developed Mandir Management System with React, Next.js, Firestore.";
    }
    if (userInput.includes("ixigo")) {
      return "At Ixigo (June 2025 - Present, On-site in Gurugram), Onkar developed a comprehensive Rewards SDK for Flights, Trains, Bus & Hotel platforms using SwiftUI & UIKit. He also implemented UI Automation for the FTP feature and created a reusable Onboarding System for the Flights app!";
    }
    if (
      userInput.includes("mandir") ||
      userInput.includes("temple") ||
      userInput.includes("kbcloudtech")
    ) {
      return "At KbCloudtech (May-July 2024, Remote), Onkar developed a Mandir Management System for temple operations including event management, donation tracking, and volunteer coordination. He used React.js, Next.js, TypeScript, Firestore with authentication and role-based access control.";
    }
    if (
      userInput.includes("education") ||
      userInput.includes("college") ||
      userInput.includes("iit") ||
      userInput.includes("degree")
    ) {
      return "Onkar completed his BTech in Bioscience and Bioengineering from IIT Jodhpur (2021-2025). His coursework includes AI, ML, Deep Learning, DSA, Probability, Statistics, Signals and Systems, and Bioimaging. His areas of interest are Agentic AI and Data Science!";
    }
    if (
      userInput.includes("contact") ||
      userInput.includes("email") ||
      userInput.includes("reach") ||
      userInput.includes("phone")
    ) {
      return "You can reach Onkar at: 📧 onkar.singh.rajput.10@gmail.com or 📱 +91 7266998538. Find him on GitHub and LinkedIn! Check the Contact section for all details.";
    }
    if (
      userInput.includes("github") ||
      userInput.includes("linkedin") ||
      userInput.includes("social")
    ) {
      return "Connect with Onkar on GitHub (github.com/onkarrajput) and LinkedIn (linkedin.com/in/onkar-singh-rajput)! Links are in the Contact section.";
    }
    if (userInput.includes("about") || userInput.includes("background")) {
      return "Onkar Singh Rajput is a BTech graduate from IIT Jodhpur (2021-2025) with expertise across iOS Development (SwiftUI/UIKit), Web Development (React/Next.js/Django), and Agentic AI (LangChain/LangGraph). He's built 6 diverse projects and completed internships at Ixigo & KbCloudtech!";
    }
    if (
      userInput.includes("leadership") ||
      userInput.includes("secretary") ||
      userInput.includes("kabaddi") ||
      userInput.includes("position")
    ) {
      return "Onkar held multiple leadership positions: Secretary of Kabaddi Club (Sep 2022-Apr 2023), Intra Societal Secretary of Frame-X Film Society (Sep 2022-Apr 2023), and Assistant Head at Varchas Event (Winter 2022) at IIT Jodhpur!";
    }
    if (
      userInput.includes("machine learning") ||
      userInput.includes("ml") ||
      userInput.includes("ai") ||
      userInput.includes("data science")
    ) {
      return "Onkar specializes in Agentic AI and Data Science! He has coursework in AI, ML, Deep Learning, and works with Pandas, NumPy, scikit-learn, and OpenCV. His main focus is building autonomous multi-agent systems with LangChain, LangGraph, and Autogen.";
    }
    if (userInput.includes("python") || userInput.includes("programming")) {
      return "Onkar is highly proficient in Python (his primary language for AI/ML) along with C, C++, SQL, JavaScript, HTML, and CSS. He uses Python extensively for building agentic systems, data science, and automation!";
    }
    if (
      userInput.includes("react") ||
      userInput.includes("web") ||
      userInput.includes("frontend")
    ) {
      return "Onkar has strong frontend skills in React.js, Next.js, and TypeScript! He's worked at both Ixigo and KbCloudtech on React-based applications with Material-UI and Tailwind CSS.";
    }
    if (
      userInput.includes("testimonial") ||
      userInput.includes("recommendation")
    ) {
      return "Colleagues praise Onkar's work! His contributions to the Actual Hotels System at Ixigo improved stability and UX, while his Mandir Management System at KbCloudtech showcased his ability to handle complex requirements!";
    }
    if (
      userInput.includes("certificate") ||
      userInput.includes("certification")
    ) {
      return "Onkar has 3 certifications: 1) Agentic AI from Udemy (July 25, 2023) - covering autonomous agents & multi-agent architectures, 2) Responsive Web Design from freeCodeCamp (2023) - HTML, CSS, responsive design, flexbox, grid & accessibility, 3) International Conference in Brain Science participation (Jan 23-26, 2023).";
    }
    if (userInput.includes("raid") || userInput.includes("society")) {
      return "Onkar works with RAID Society at IIT Jodhpur where he developed the AI Trading Floor project - a multi-model stock trading simulation using MCP architecture with real-time portfolio tracking!";
    }
    return "That's a great question! Ask me about Onkar's projects (iOS Weather App, E-commerce, Voting System, Sidekick AI, Trading Floor, Agent Network), experience (Ixigo iOS & Web, KbCloudtech), skills (SwiftUI, React, LangChain), or IIT Jodhpur education!";
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        className={`chat-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleChat}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>

      {/* Chat Window */}
      <div className={`chat-window ${isOpen ? "open" : ""}`}>
        <div className="chat-header">
          <div className="chat-header-info">
            <div className="chat-avatar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div>
              <h3>Portfolio Assistant</h3>
              <span className="chat-status">Online</span>
            </div>
          </div>
          <button
            className="chat-close"
            onClick={toggleChat}
            aria-label="Close chat"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message ${
                message.sender === "user" ? "user-message" : "bot-message"
              }`}
            >
              <div className="message-content">
                <p>{message.text}</p>
                <span className="message-time">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="message bot-message">
              <div className="message-content typing-indicator">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="chat-input-container" onSubmit={handleSendMessage}>
          <input
            ref={inputRef}
            type="text"
            className="chat-input"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            aria-label="Chat message input"
          />
          <button
            type="submit"
            className="chat-send-btn"
            disabled={!inputValue.trim()}
            aria-label="Send message"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default ChatBot;
