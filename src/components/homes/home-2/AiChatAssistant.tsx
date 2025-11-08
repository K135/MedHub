"use client";

import React, { useState, useEffect } from 'react';
import AiChatModal from './AiChatModal';

const AiChatAssistant = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Questions based on the site content
  const questions = [
    "What are the best CME courses for Physicians in the Middle East?",
    "Which CPD programs are available for Pharmacists?",
    "How do I renew my medical license with CME credits?",
    "What accredited courses are available for Nurses?",
    "Tell me about Emergency Medicine conferences in Dubai",
    "Are there online CPD courses for Allied Health professionals?",
    "What Cardiology CME programs are upcoming in Abu Dhabi?",
    "How can I earn CME credits for Healthcare Leadership?",
    "What are the requirements for CPD credits in Saudi Arabia?",
    "Show me Radiology courses with international accreditation",
    "Which courses offer credits for Dentists?",
    "What are the best Medical Education conferences in the region?",
  ];

  useEffect(() => {
    const currentQuestion = questions[currentQuestionIndex];
    let charIndex = 0;
    setDisplayedText('');
    setIsTyping(true);

    const typingInterval = setInterval(() => {
      if (charIndex < currentQuestion.length) {
        setDisplayedText(currentQuestion.substring(0, charIndex + 1));
        charIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
        // Wait 2 seconds before moving to next question
        setTimeout(() => {
          setCurrentQuestionIndex((prev) => (prev + 1) % questions.length);
        }, 2000);
      }
    }, 50); // Speed of typing (50ms per character)

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentQuestionIndex, questions.length]);

  return (
    <>
      <section className="ai-chat-assistant-section section-padding">
        <div className="container">
          <div 
            className="ai-chat-box wow fadeInUp" 
            data-wow-delay=".2s"
            onClick={() => setIsModalOpen(true)}
            style={{ cursor: 'pointer' }}
          >
            
            {/* Heading */}
            <h3 className="chat-heading">Talk to MedHub AI</h3>

            {/* AI Message Bubble */}
            <div className="ai-message">
              <div className="ai-avatar">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#gradient1)" />
                  <path d="M2 17L12 22L22 17V12L12 17L2 12V17Z" fill="url(#gradient2)" />
                  <defs>
                    <linearGradient id="gradient1" x1="2" y1="2" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FED335" />
                      <stop offset="1" stopColor="#ffa500" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="2" y1="12" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#26225B" />
                      <stop offset="1" stopColor="#3a357a" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="message-bubble ai-bubble">
                Your CME/ CPD Course Assistant Right Here
              </div>
            </div>

            {/* User Input Area with Rolling Text */}
            <div className="user-input-area">
              <div className="user-avatar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="8" r="4" fill="#6b7280"/>
                  <path d="M4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20V21H4V20Z" fill="#6b7280"/>
                </svg>
              </div>
              <div className="input-box">
                <span className="typed-text">{displayedText}</span>
                {isTyping && <span className="typing-cursor">|</span>}
              </div>
              <button className="send-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" fill="currentColor"/>
                </svg>
              </button>
            </div>

          </div>
        </div>
      </section>

      <style jsx>{`
        .ai-chat-assistant-section {
          background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
          position: relative;
          overflow: hidden;
          padding: 40px 0 !important;
        }

        .ai-chat-assistant-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(38, 34, 91, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(254, 211, 53, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .ai-chat-box {
          max-width: 800px;
          margin: 0 auto;
          background: white;
          border-radius: 24px;
          padding: 40px 45px;
          position: relative;
          border: 2px solid transparent;
          background-image: 
            linear-gradient(white, white),
            linear-gradient(90deg, #FED335, #26225B, #FED335);
          background-origin: border-box;
          background-clip: padding-box, border-box;
          animation: glowingBorder 3s linear infinite;
          box-shadow: 0 10px 30px rgba(38, 34, 91, 0.08);
        }

        @keyframes glowingBorder {
          0% {
            box-shadow: 
              0 0 8px rgba(254, 211, 53, 0.3),
              0 10px 30px rgba(38, 34, 91, 0.08);
          }
          50% {
            box-shadow: 
              0 0 15px rgba(38, 34, 91, 0.3),
              0 10px 30px rgba(38, 34, 91, 0.08);
          }
          100% {
            box-shadow: 
              0 0 8px rgba(254, 211, 53, 0.3),
              0 10px 30px rgba(38, 34, 91, 0.08);
          }
        }

        .ai-chat-box:hover {
          transform: translateY(-8px) scale(1.01);
          cursor: pointer;
        }

        .ai-chat-box::after {
          content: 'Click to start chatting';
          position: absolute;
          bottom: -50px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #26225B 0%, #3a357a 100%);
          color: white;
          padding: 10px 24px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(38, 34, 91, 0.3);
          white-space: nowrap;
        }

        .ai-chat-box:hover::after {
          opacity: 1;
          bottom: -45px;
        }

        /* Heading */
        .chat-heading {
          font-size: 32px;
          font-weight: 800;
          color: #26225B;
          margin: 0 0 30px 0;
          text-align: left;
          line-height: 1.2;
        }

        /* AI Message */
        .ai-message {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 30px;
        }

        .ai-avatar {
          width: 45px;
          height: 45px;
          min-width: 45px;
          background: linear-gradient(135deg, #26225B 0%, #3a357a 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(38, 34, 91, 0.25);
          animation: pulse-icon 2s ease-in-out infinite;
        }

        @keyframes pulse-icon {
          0%, 100% { 
            transform: scale(1);
            box-shadow: 0 4px 12px rgba(38, 34, 91, 0.25);
          }
          50% { 
            transform: scale(1.05);
            box-shadow: 0 6px 20px rgba(38, 34, 91, 0.35);
          }
        }

        .message-bubble {
          padding: 18px 24px;
          border-radius: 20px;
          font-size: 17px;
          font-weight: 500;
          line-height: 1.5;
          max-width: 85%;
          animation: slideIn 0.5s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .ai-bubble {
          background: linear-gradient(135deg, #26225B 0%, #3a357a 100%);
          color: white;
          border-bottom-left-radius: 4px;
          box-shadow: 0 4px 16px rgba(38, 34, 91, 0.2);
        }

        /* User Input Area */
        .user-input-area {
          display: flex;
          align-items: center;
          gap: 15px;
          background: #f8f9ff;
          border: 2px solid #e5e7eb;
          border-radius: 50px;
          padding: 8px 8px 8px 18px;
          transition: all 0.3s ease;
          position: relative;
        }

        .user-input-area:hover {
          border-color: #26225B;
          box-shadow: 0 4px 16px rgba(38, 34, 91, 0.1);
        }

        .user-avatar {
          width: 38px;
          height: 38px;
          min-width: 38px;
          background: #e5e7eb;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .input-box {
          flex: 1;
          min-height: 50px;
          display: flex;
          align-items: center;
          padding: 0 10px;
          font-size: 16px;
          line-height: 1.5;
        }

        .typed-text {
          color: #26225B;
          font-weight: 500;
          display: inline;
        }

        .typing-cursor {
          display: inline-block;
          color: #FED335;
          font-weight: 700;
          font-size: 20px;
          animation: blink 0.8s step-end infinite;
          margin-left: 3px;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .send-button {
          width: 50px;
          height: 50px;
          min-width: 50px;
          background: linear-gradient(135deg, #26225B 0%, #3a357a 100%);
          border: none;
          border-radius: 50%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(38, 34, 91, 0.2);
        }

        .send-button:hover {
          transform: scale(1.1) rotate(15deg);
          background: linear-gradient(135deg, #FED335 0%, #ffd700 100%);
          color: #26225B;
          box-shadow: 0 6px 20px rgba(254, 211, 53, 0.4);
        }

        .send-button:active {
          transform: scale(0.95) rotate(15deg);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .ai-chat-assistant-section {
            padding: 30px 0 !important;
          }

          .ai-chat-box {
            padding: 35px 30px;
            border-radius: 20px;
          }

          .chat-heading {
            font-size: 28px;
            margin-bottom: 25px;
          }

          .ai-avatar {
            width: 40px;
            height: 40px;
            min-width: 40px;
          }

          .ai-avatar svg {
            width: 20px;
            height: 20px;
          }

          .message-bubble {
            font-size: 16px;
            padding: 16px 20px;
          }

          .user-avatar {
            width: 35px;
            height: 35px;
            min-width: 35px;
          }

          .user-avatar svg {
            width: 18px;
            height: 18px;
          }

          .input-box {
            font-size: 15px;
            min-height: 45px;
          }

          .send-button {
            width: 45px;
            height: 45px;
            min-width: 45px;
          }

          .send-button svg {
            width: 18px;
            height: 18px;
          }
        }

        @media (max-width: 480px) {
          .ai-chat-assistant-section {
            padding: 25px 0 !important;
          }

          .ai-chat-box {
            padding: 25px 20px;
            border-radius: 16px;
          }

          .chat-heading {
            font-size: 24px;
            margin-bottom: 20px;
          }

          .ai-message {
            gap: 12px;
            margin-bottom: 25px;
          }

          .ai-avatar {
            width: 36px;
            height: 36px;
            min-width: 36px;
          }

          .message-bubble {
            font-size: 15px;
            padding: 14px 18px;
            border-radius: 16px;
          }

          .user-input-area {
            gap: 12px;
            padding: 6px 6px 6px 15px;
          }

          .user-avatar {
            width: 32px;
            height: 32px;
            min-width: 32px;
          }

          .input-box {
            font-size: 14px;
            min-height: 40px;
            padding: 0 8px;
          }

          .typed-text {
            font-size: 14px;
          }

          .typing-cursor {
            font-size: 18px;
          }

          .send-button {
            width: 40px;
            height: 40px;
            min-width: 40px;
          }

          .send-button svg {
            width: 16px;
            height: 16px;
          }
        }
      `}</style>

      {/* AI Chat Modal */}
      <AiChatModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default AiChatAssistant;