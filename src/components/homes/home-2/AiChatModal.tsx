"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface Message {
  id: number;
  type: 'ai' | 'user';
  text: string;
  options?: string[];
  courses?: any[];
  timestamp: Date;
}

interface AiChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AiChatModal: React.FC<AiChatModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [userSelections, setUserSelections] = useState<any>({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Previous chat history (mock data)
  const previousChats = [
    { id: 1, title: "Cardiology CME Courses", date: "Today", preview: "Looking for cardiology courses in Dubai..." },
    { id: 2, title: "Emergency Medicine CPD", date: "Yesterday", preview: "Need emergency medicine training..." },
    { id: 3, title: "Nursing Certification", date: "2 days ago", preview: "What certifications are available..." },
  ];

  // Course data based on selections
  const coursesDatabase = {
    Physician: {
      UAE: [
        {
          id: 1,
          title: 'Advanced Cardiology CME',
          category: 'Cardiology',
          location: 'Dubai',
          date: 'Mar 15-17, 2024',
          credits: '15 CME Credits',
          image: 'assets/img/courses/homecourse/Advanced Cardiology CME.jpg',
          attendees: '200+',
          rating: 5
        },
        {
          id: 2,
          title: 'Emergency Medicine Updates',
          category: 'Emergency Medicine',
          location: 'Abu Dhabi',
          date: 'Apr 5-7, 2024',
          credits: '12 CME Credits',
          image: 'assets/img/courses/homecourse/Emergency Medicine Updates.jpg',
          attendees: '180+',
          rating: 5
        },
      ],
      "Saudi Arabia": [
        {
          id: 3,
          title: 'Riyadh Healthcare Leadership Summit',
          category: 'Healthcare Management',
          location: 'Riyadh',
          date: 'May 20-22, 2024',
          credits: '18 CME Credits',
          image: 'assets/img/courses/homecourse/Riyadh Healthcare Leadership Summit.jpg',
          attendees: '250+',
          rating: 5
        },
      ],
    },
    Nurse: {
      UAE: [
        {
          id: 4,
          title: 'Nursing Excellence CPD',
          category: 'Nursing',
          location: 'Dubai',
          date: 'Mar 25-27, 2024',
          credits: '10 CPD Credits',
          image: 'assets/img/courses/homecourse/Nursing Excellence CPD.jpg',
          attendees: '150+',
          rating: 5
        },
      ],
    },
    Pharmacist: {
      UAE: [
        {
          id: 5,
          title: 'Clinical Pharmacy Updates',
          category: 'Pharmacy',
          location: 'Dubai',
          date: 'Apr 10-12, 2024',
          credits: '12 CPD Credits',
          image: 'assets/img/courses/homecourse/Advanced Cardiology CME.jpg',
          attendees: '120+',
          rating: 5
        },
      ],
    },
    "Allied Health": {
      UAE: [
        {
          id: 6,
          title: 'Radiology Imaging Techniques',
          category: 'Radiology',
          location: 'Dubai',
          date: 'May 5-7, 2024',
          credits: '15 CPD Credits',
          image: 'assets/img/courses/homecourse/Radiology Imaging Techniques.jpg',
          attendees: '120+',
          rating: 5
        },
      ],
    },
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting
      setTimeout(() => {
        addAiMessage(
          "Hello! 👋 I'm your MedHub AI Assistant. I'm here to help you find the perfect CME/CPD courses tailored to your profession and location.",
          []
        );
        setTimeout(() => {
          addAiMessage(
            "Let's get started! What is your profession?",
            ['Physician', 'Nurse', 'Pharmacist', 'Allied Health', 'Dentist', 'General Question']
          );
          setCurrentStep(1);
        }, 1500);
      }, 500);
    }
  }, [isOpen]);

  const addAiMessage = (text: string, options: string[] = [], courses: any[] = []) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now(),
        type: 'ai',
        text,
        options,
        courses,
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 800);
  };

  const addUserMessage = (text: string) => {
    setMessages(prev => [...prev, {
      id: Date.now(),
      type: 'user',
      text,
      timestamp: new Date()
    }]);
  };

  const handleOptionClick = (option: string) => {
    addUserMessage(option);

    if (currentStep === 1) {
      // Profession selected
      setUserSelections({ ...userSelections, profession: option });
      
      if (option === 'General Question') {
        setTimeout(() => {
          addAiMessage(
            "Great! I can help you with general questions about our platform. What would you like to know?",
            ['View All Courses', 'How to Earn Credits', 'Accreditation Info', 'Platform Features']
          );
          setCurrentStep(5);
        }, 1000);
      } else {
        setTimeout(() => {
          addAiMessage(
            `Excellent choice! Now, where are you located in the GCC?`,
            ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman', 'Other']
          );
          setCurrentStep(2);
        }, 1000);
      }
    } else if (currentStep === 2) {
      // Location selected
      setUserSelections({ ...userSelections, location: option });
      
      setTimeout(() => {
        addAiMessage(
          `Perfect! What type of courses are you most interested in?`,
          ['Cardiology', 'Emergency Medicine', 'General Practice', 'Surgery', 'Pediatrics', 'Any Specialty']
        );
        setCurrentStep(3);
      }, 1000);
    } else if (currentStep === 3) {
      // Specialty selected
      setUserSelections({ ...userSelections, specialty: option });
      
      setTimeout(() => {
        addAiMessage(
          `Great! What format works best for you?`,
          ['In-Person Conference', 'Live Webinar', 'Online Course', 'No Preference']
        );
        setCurrentStep(4);
      }, 1000);
    } else if (currentStep === 4) {
      // Format selected
      setUserSelections({ ...userSelections, format: option });
      
      setTimeout(() => {
        const profession = userSelections.profession;
        const location = userSelections.location;
        
        let relevantCourses: any[] = [];
        
        // Type-safe course database access
        const professionData = coursesDatabase[profession as keyof typeof coursesDatabase];
        if (professionData && typeof professionData === 'object') {
          const locationCourses = professionData[location as keyof typeof professionData];
          if (locationCourses && Array.isArray(locationCourses)) {
            relevantCourses = locationCourses;
          } else {
            // Get first available location courses
            const locations = Object.keys(professionData);
            if (locations.length > 0) {
              const firstLocation = locations[0];
              const firstLocationCourses = professionData[firstLocation as keyof typeof professionData];
              if (Array.isArray(firstLocationCourses)) {
                relevantCourses = firstLocationCourses;
              }
            }
          }
        }

        if (relevantCourses.length > 0) {
          addAiMessage(
            `🎯 Perfect! Based on your preferences (${profession} in ${location}), I've found ${relevantCourses.length} highly recommended courses for you:`,
            [],
            relevantCourses
          );
        } else {
          addAiMessage(
            `I've noted your preferences! While I'm still building the course list for your specific criteria, let me show you some popular courses:`,
            [],
            coursesDatabase.Physician.UAE
          );
        }
        setCurrentStep(5);
      }, 1000);
    } else if (currentStep === 5) {
      // Handle final actions
      if (option === 'View All Courses') {
        window.location.href = '/courses';
      }
    }
  };

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    // Add user's message
    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      text: inputText,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    
    // Simulate AI response
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const aiResponse: Message = {
        id: messages.length + 2,
        type: 'ai',
        text: "Thank you for your message! To help you better, please use the option buttons above to tell me about your profession and course preferences. This helps me provide more personalized course recommendations.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleClose = () => {
    setMessages([]);
    setCurrentStep(0);
    setUserSelections({});
    setInputText('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="ai-chat-modal-overlay" onClick={handleClose}>
        <div className="ai-chat-modal-container" onClick={(e) => e.stopPropagation()}>
          
          {/* Sidebar */}
          <div className={`ai-chat-sidebar ${!isSidebarOpen ? 'collapsed' : ''}`}>
            <div className="sidebar-header">
              <img src="assets/img/logo/medhub logo.png" alt="MedHub" className="sidebar-logo" />
              <button className="sidebar-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <i className={`fas fa-${isSidebarOpen ? 'chevron-left' : 'chevron-right'}`}></i>
              </button>
            </div>

            {isSidebarOpen && (
              <>
                <button className="new-chat-btn">
                  <i className="fas fa-plus"></i>
                  New Chat
                </button>

                <div className="previous-chats">
                  <h4>Recent Chats</h4>
                  {previousChats.map(chat => (
                    <div key={chat.id} className="chat-item">
                      <div className="chat-item-header">
                        <i className="fas fa-message"></i>
                        <span className="chat-date">{chat.date}</span>
                      </div>
                      <h5>{chat.title}</h5>
                      <p>{chat.preview}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Main Chat Area */}
          <div className="ai-chat-main">
            {/* Header */}
            <div className="chat-header">
              <div className="chat-header-left">
                <div className="ai-avatar-header">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#gradient1)" />
                    <path d="M2 17L12 22L22 17V12L12 17L2 12V17Z" fill="url(#gradient2)" />
                    <defs>
                      <linearGradient id="gradient1" x1="2" y1="2" x2="22" y2="12">
                        <stop stopColor="#FED335" />
                        <stop offset="1" stopColor="#ffa500" />
                      </linearGradient>
                      <linearGradient id="gradient2" x1="2" y1="12" x2="22" y2="22">
                        <stop stopColor="#26225B" />
                        <stop offset="1" stopColor="#3a357a" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div>
                  <h3>MedHub AI Assistant</h3>
                  <span className="status-indicator">
                    <span className="status-dot"></span>
                    Online
                  </span>
                </div>
              </div>
              <button className="close-btn" onClick={handleClose}>
                <i className="fas fa-times"></i>
              </button>
            </div>

            {/* Chat Messages */}
            <div className="chat-messages" ref={chatContainerRef}>
              {messages.map((message) => (
                <div key={message.id} className={`message ${message.type}`}>
                  {message.type === 'ai' && (
                    <div className="message-avatar">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#gradient1)" />
                        <path d="M2 17L12 22L22 17V12L12 17L2 12V17Z" fill="url(#gradient2)" />
                      </svg>
                    </div>
                  )}
                  <div className="message-content">
                    <p>{message.text}</p>
                    
                    {message.options && message.options.length > 0 && (
                      <div className="options-grid">
                        {message.options.map((option, idx) => (
                          <button
                            key={idx}
                            className="option-btn"
                            onClick={() => handleOptionClick(option)}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}

                    {message.courses && message.courses.length > 0 && (
                      <div className="courses-results">
                        <div className="courses-grid">
                          {message.courses.map(course => (
                            <div key={course.id} className="course-card-mini">
                              <img src={course.image} alt={course.title} />
                              <div className="course-card-content">
                                <span className="course-category">{course.category}</span>
                                <h4>{course.title}</h4>
                                <div className="course-meta">
                                  <span><i className="fas fa-map-marker-alt"></i> {course.location}</span>
                                  <span><i className="fas fa-calendar"></i> {course.date}</span>
                                </div>
                                <div className="course-footer">
                                  <span className="course-credits">{course.credits}</span>
                                  <Link href="/courses-details" className="explore-btn">
                                    Explore →
                                  </Link>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="view-all-section">
                          <button className="view-all-courses-btn" onClick={() => window.location.href = '/courses'}>
                            <i className="fas fa-th-large"></i>
                            View All Courses
                          </button>
                          <p className="help-text">Or continue chatting to refine your search</p>
                        </div>
                      </div>
                    )}

                    <span className="message-time">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  {message.type === 'user' && (
                    <div className="message-avatar user-avatar">
                      <i className="fas fa-user"></i>
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="message ai">
                  <div className="message-avatar">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#gradient1)" />
                      <path d="M2 17L12 22L22 17V12L12 17L2 12V17Z" fill="url(#gradient2)" />
                    </svg>
                  </div>
                  <div className="message-content typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="chat-input-area">
              <input
                type="text"
                placeholder="Type your message here..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button className="send-btn" onClick={handleSendMessage}>
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ai-chat-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .ai-chat-modal-container {
          width: 90vw;
          max-width: 1400px;
          height: 85vh;
          background: white;
          border-radius: 24px;
          display: flex;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: slideUp 0.4s ease;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Sidebar */
        .ai-chat-sidebar {
          width: 280px;
          background: linear-gradient(180deg, #26225B 0%, #1a1742 100%);
          padding: 24px;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          overflow-y: auto;
        }

        .ai-chat-sidebar.collapsed {
          width: 70px;
          padding: 24px 12px;
        }

        .sidebar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: -24px -24px 24px -24px;
          padding: 20px 24px;
          background: white;
          border-radius: 0 0 0 16px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .collapsed .sidebar-header {
          margin: -24px -12px 24px -12px;
          padding: 20px 12px;
          justify-content: center;
        }

        .sidebar-logo {
          max-width: 120px;
          height: auto;
        }

        .collapsed .sidebar-logo {
          display: none;
        }

        .sidebar-toggle {
          background: #f3f4f6;
          border: none;
          color: #26225B;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .sidebar-toggle:hover {
          background: #e5e7eb;
          color: #FED335;
        }

        .new-chat-btn {
          background: linear-gradient(135deg, #FED335 0%, #ffa500 100%);
          color: #26225B;
          border: none;
          padding: 14px 20px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          justify-content: center;
          transition: all 0.3s ease;
          margin-bottom: 24px;
        }

        .new-chat-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(254, 211, 53, 0.4);
        }

        .previous-chats {
          flex: 1;
          overflow-y: auto;
        }

        .previous-chats h4 {
          color: rgba(255, 255, 255, 0.6);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
          font-weight: 600;
        }

        .chat-item {
          background: rgba(255, 255, 255, 0.05);
          padding: 12px;
          border-radius: 10px;
          margin-bottom: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .chat-item:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(254, 211, 53, 0.3);
        }

        .chat-item-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .chat-item-header i {
          color: #FED335;
          font-size: 14px;
        }

        .chat-date {
          color: rgba(255, 255, 255, 0.5);
          font-size: 11px;
        }

        .chat-item h5 {
          color: white;
          font-size: 14px;
          font-weight: 600;
          margin: 0 0 6px 0;
        }

        .chat-item p {
          color: rgba(255, 255, 255, 0.6);
          font-size: 12px;
          margin: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        /* Main Chat Area */
        .ai-chat-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: #f8f9ff;
        }

        .chat-header {
          background: white;
          padding: 20px 30px;
          border-bottom: 2px solid #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .chat-header-left {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .ai-avatar-header {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #26225B 0%, #3a357a 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(38, 34, 91, 0.3);
        }

        .chat-header h3 {
          margin: 0;
          font-size: 20px;
          font-weight: 700;
          color: #26225B;
        }

        .status-indicator {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #6b7280;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .close-btn {
          width: 40px;
          height: 40px;
          border: none;
          background: #f3f4f6;
          color: #6b7280;
          border-radius: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          transition: all 0.3s ease;
        }

        .close-btn:hover {
          background: #fee;
          color: #dc2626;
        }

        /* Chat Messages */
        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 30px;
          scroll-behavior: smooth;
        }

        .message {
          display: flex;
          gap: 12px;
          margin-bottom: 24px;
          animation: messageSlide 0.4s ease;
        }

        @keyframes messageSlide {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .message.user {
          flex-direction: row-reverse;
        }

        .message-avatar {
          width: 40px;
          height: 40px;
          min-width: 40px;
          background: linear-gradient(135deg, #26225B 0%, #3a357a 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .message-avatar.user-avatar {
          background: linear-gradient(135deg, #FED335 0%, #ffa500 100%);
          color: #26225B;
        }

        .message-content {
          max-width: 70%;
          background: white;
          padding: 16px 20px;
          border-radius: 16px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .message.user .message-content {
          background: linear-gradient(135deg, #26225B 0%, #3a357a 100%);
          color: white;
        }

        .message-content p {
          margin: 0 0 8px 0;
          line-height: 1.6;
          font-size: 15px;
        }

        .message-time {
          display: block;
          font-size: 11px;
          color: #9ca3af;
          margin-top: 6px;
        }

        .message.user .message-time {
          color: rgba(255, 255, 255, 0.7);
          text-align: right;
        }

        /* Options Grid */
        .options-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 10px;
          margin-top: 16px;
        }

        .option-btn {
          background: linear-gradient(135deg, #26225B 0%, #3a357a 100%);
          color: white;
          border: none;
          padding: 12px 18px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .option-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(38, 34, 91, 0.3);
          background: linear-gradient(135deg, #FED335 0%, #ffa500 100%);
          color: #26225B;
        }

        /* Typing Indicator */
        .typing-indicator {
          display: flex;
          gap: 6px;
          padding: 16px 20px;
        }

        .typing-indicator span {
          width: 8px;
          height: 8px;
          background: #6b7280;
          border-radius: 50%;
          animation: typing 1.4s ease-in-out infinite;
        }

        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typing {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-10px); }
        }

        /* Courses Results */
        .courses-results {
          margin-top: 20px;
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin-bottom: 20px;
        }

        .course-card-mini {
          background: #f8f9ff;
          border-radius: 12px;
          overflow: hidden;
          border: 2px solid #e5e7eb;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .course-card-mini:hover {
          transform: translateY(-4px);
          border-color: #FED335;
          box-shadow: 0 8px 24px rgba(38, 34, 91, 0.15);
        }

        .course-card-mini img {
          width: 100%;
          height: 160px;
          object-fit: cover;
        }

        .course-card-content {
          padding: 16px;
        }

        .course-category {
          display: inline-block;
          background: #26225B;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .course-card-content h4 {
          margin: 12px 0;
          font-size: 16px;
          font-weight: 700;
          color: #26225B;
          line-height: 1.3;
        }

        .course-meta {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin: 12px 0;
          font-size: 13px;
          color: #6b7280;
        }

        .course-meta span {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .course-meta i {
          color: #FED335;
          font-size: 12px;
        }

        .course-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid #e5e7eb;
        }

        .course-credits {
          font-size: 12px;
          font-weight: 700;
          color: #26225B;
        }

        .explore-btn {
          color: #26225B;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .explore-btn:hover {
          color: #FED335;
        }

        .view-all-section {
          text-align: center;
          margin-top: 24px;
          padding: 20px;
          background: linear-gradient(135deg, rgba(254, 211, 53, 0.1) 0%, rgba(38, 34, 91, 0.05) 100%);
          border-radius: 12px;
        }

        .view-all-courses-btn {
          background: linear-gradient(135deg, #26225B 0%, #3a357a 100%);
          color: white;
          border: none;
          padding: 16px 40px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(38, 34, 91, 0.3);
        }

        .view-all-courses-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(38, 34, 91, 0.4);
          background: linear-gradient(135deg, #FED335 0%, #ffa500 100%);
          color: #26225B;
        }

        .help-text {
          margin-top: 12px;
          font-size: 13px;
          color: #6b7280;
        }

        /* Chat Input Area */
        .chat-input-area {
          padding: 20px 30px;
          background: white;
          border-top: 2px solid #e5e7eb;
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .chat-input-area input {
          flex: 1;
          padding: 14px 20px;
          border: 2px solid #e5e7eb;
          border-radius: 50px;
          font-size: 15px;
          outline: none;
          transition: all 0.3s ease;
          background: white;
          color: #1f2937;
        }

        .chat-input-area input:focus {
          border-color: #26225B;
          box-shadow: 0 0 0 3px rgba(38, 34, 91, 0.1);
        }

        .chat-input-area input:disabled {
          background: #f3f4f6;
          cursor: not-allowed;
        }

        .send-btn {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #26225B 0%, #3a357a 100%);
          border: none;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          font-size: 18px;
        }

        .send-btn:hover:not(:disabled) {
          transform: scale(1.1);
          background: linear-gradient(135deg, #FED335 0%, #ffa500 100%);
          color: #26225B;
        }

        .send-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .ai-chat-modal-container {
            width: 95vw;
            height: 90vh;
          }

          .ai-chat-sidebar {
            width: 240px;
          }

          .courses-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .ai-chat-sidebar {
            position: absolute;
            left: ${isSidebarOpen ? '0' : '-280px'};
            height: 100%;
            z-index: 10;
            box-shadow: ${isSidebarOpen ? '4px 0 20px rgba(0,0,0,0.3)' : 'none'};
          }

          .ai-chat-sidebar.collapsed {
            left: 0;
            width: 60px;
          }

          .message-content {
            max-width: 85%;
          }

          .options-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default AiChatModal;