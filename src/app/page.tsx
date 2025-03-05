'use client'
// File: pages/index.js
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  const experienceItem = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <Head>
        <title>Renuka Reddy Pasam - SDET Portfolio</title>
        <meta name="description" content="Portfolio of Renuka Reddy Pasam, SDET Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <nav className="flex flex-col md:flex-row justify-between items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4 mb-6 md:mb-0"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold"
            >
              RP
            </motion.div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Renuka Reddy Pasam</h1>
              <p className="text-blue-300">QA Automation Engineer - SDET</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex space-x-6"
          >
            {['about', 'skills', 'experience', 'education', 'contact'].map((tab) => (
              <motion.button
                key={tab}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`capitalize ${activeTab === tab ? 'text-blue-300 border-b-2 border-blue-300' : 'text-gray-300'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </motion.button>
            ))}
          </motion.div>
        </nav>

        <main>
          {activeTab === 'about' && (
            <motion.section
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="mb-20"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="md:col-span-2">
                  <h2 className="text-3xl font-bold mb-6">Hello, I'm <span className="text-blue-300">Renuka</span></h2>
                  <motion.p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    Versatile SDET Engineer adept at testing and validating cloud-based, on-premise, and hybrid solutions. 
                    I incorporate data from all available sources to create holistic images of product and software 
                    performance. I'm an accomplished creator of automated and manual test frameworks guaranteed to 
                    produce exceptional customer satisfaction levels.
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-wrap gap-4 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <motion.a 
                      whileHover={{ scale: 1.05, backgroundColor: '#3B82F6' }}
                      href="mailto:pasamrenuka986@gmail.com"
                      className="px-6 py-3 bg-blue-600 rounded-full font-medium flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      Contact Me
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.05, backgroundColor: '#1E3A8A' }}
                      href="https://linkedin.com/in/renukapasam"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-blue-800 rounded-full font-medium flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                      </svg>
                      LinkedIn
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.05, backgroundColor: '#111827' }}
                      href="https://renukaportfolio.web.app/"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gray-800 rounded-full font-medium flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Portfolio
                    </motion.a>
                  </motion.div>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    Contact Information
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      DeKalb, IL 60115
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-300" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      779-302-2692
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-300" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      pasamrenuka986@gmail.com
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                      </svg>
                      linkedin.com/in/renukapasam
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.section>
          )}

          {activeTab === 'skills' && (
            <motion.section
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold mb-8">Technical <span className="text-blue-300">Skills</span></h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {[
                  {
                    title: "Testing & Automation",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    ),
                    categories: [
                      {
                        name: "Test Automation",
                        skills: ["Selenium WebDriver", "Appium", "TestNG", "JUnit", "Cucumber"]
                      },
                      {
                        name: "Performance Testing",
                        skills: ["JMeter", "Load Runner", "Gatling"]
                      },
                      {
                        name: "Testing Tools",
                        skills: ["QTP/UFT", "Postman", "SoapUI", "Firebug"]
                      }
                    ]
                  },
                  {
                    title: "Programming & Scripting",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    ),
                    categories: [
                      {
                        name: "Primary Languages",
                        skills: ["Python", "GoLang", "Java", "JavaScript"]
                      },
                      {
                        name: "Scripting & Query",
                        skills: ["SQL", "Shell Scripting", "PowerShell"]
                      },
                      {
                        name: "Other Languages",
                        skills: ["C#", "C++", "VB.Net"]
                      }
                    ]
                  },
                  {
                    title: "DevOps & Cloud",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    ),
                    categories: [
                      {
                        name: "Cloud Platforms",
                        skills: ["AWS", "Azure", "GCP"]
                      },
                      {
                        name: "CI/CD & Tools",
                        skills: ["Jenkins", "GitLab CI", "CircleCI", "Docker", "Kubernetes"]
                      },
                      {
                        name: "Build Tools",
                        skills: ["Maven", "ANT", "Gradle"]
                      }
                    ]
                  },
                  {
                    title: "Web Technologies",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    ),
                    categories: [
                      {
                        name: "Frontend",
                        skills: ["HTML5", "CSS3", "JavaScript", "AngularJS"]
                      },
                      {
                        name: "Backend",
                        skills: ["NodeJS", "ASP.Net", "REST APIs"]
                      },
                      {
                        name: "Data Formats",
                        skills: ["XML", "JSON", "YAML"]
                      }
                    ]
                  }
                ].map((section) => (
                  <motion.div
                    key={section.title}
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="bg-gray-800 bg-opacity-70 rounded-lg p-6"
                  >
                    <h3 className="text-xl font-semibold mb-6 text-blue-300 flex items-center">
                      {section.icon}
                      {section.title}
                    </h3>
                    <div className="space-y-6">
                      {section.categories.map((category) => (
                        <motion.div
                          key={category.name}
                          variants={skillItem}
                          className="bg-gray-700 bg-opacity-50 rounded-lg p-4"
                        >
                          <h4 className="text-sm font-semibold text-blue-300 mb-3">{category.name}</h4>
                          <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-1 bg-gray-800 bg-opacity-50 rounded-full text-sm text-gray-300 flex items-center"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                {skill}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {activeTab === 'experience' && (
            <motion.section
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold mb-8">Work <span className="text-blue-300">Experience</span></h2>
              
              <motion.div 
                variants={staggerContainer}
                initial="hidden" 
                animate="visible"
                className="space-y-10"
              >
                <motion.div variants={experienceItem} className="bg-gray-800 bg-opacity-70 rounded-lg p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">Software Development Engineer in Test (SDET)</h3>
                      <p className="text-blue-300">Principal Healthcare, Des Moines, IA</p>
                    </div>
                    <div className="text-gray-400 font-medium mt-2 md:mt-0">
                      Jan 2023 - Current
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Created automation test scripts using Selenium WebDriver with data-driven framework and Page Factory model</li>
                    <li>Implemented BDD Framework with Cucumber and developed CI/CD pipelines using Jenkins and Git</li>
                    <li>Performed cross-browser testing using Selenium Grid on multiple platforms and devices</li>
                  </ul>
                </motion.div>

                <motion.div variants={experienceItem} className="bg-gray-800 bg-opacity-70 rounded-lg p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">QA/Selenium Automation Tester</h3>
                      <p className="text-blue-300">Cognizant, India</p>
                    </div>
                    <div className="text-gray-400 font-medium mt-2 md:mt-0">
                      Sep 2020 - Jul 2022
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Designed test plans and automated tests using Selenium WebDriver and HP ALM</li>
                    <li>Created iOS and Android test frameworks with APPIUM, Cucumber, and JavaScript</li>
                    <li>Performed Web Service API testing using SOAP UI & JMeter</li>
                  </ul>
                </motion.div>

                <motion.div variants={experienceItem} className="bg-gray-800 bg-opacity-70 rounded-lg p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">QA Engineer - SDET</h3>
                      <p className="text-blue-300">Omega Healthcare, India</p>
                    </div>
                    <div className="text-gray-400 font-medium mt-2 md:mt-0">
                      Jun 2019 - Aug 2020
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Designed & implemented a Hybrid Test Automation Framework using Selenium WebDriver</li>
                    <li>Performed API testing for web services using SOAP UI and REST API</li>
                    <li>Validated reports using complex SQL queries and executed regression tests with QTP</li>
                  </ul>
                </motion.div>
              </motion.div>
            </motion.section>
          )}

          {activeTab === 'education' && (
            <motion.section
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold mb-8">My <span className="text-blue-300">Education</span></h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-800 bg-opacity-70 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold mb-2">Master of Science</h3>
                  <p className="text-blue-300 mb-2">Computer Science</p>
                  <p className="text-gray-300">Northern Illinois University - DeKalb, IL</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="bg-gray-800 bg-opacity-70 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold mb-2">Bachelor of Technology</h3>
                  <p className="text-blue-300 mb-2">Computer Science</p>
                  <p className="text-gray-300">Vignan University - India</p>
                </motion.div>
              </div>
            </motion.section>
          )}

          {activeTab === 'contact' && (
            <motion.section
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold mb-8">Get In <span className="text-blue-300">Touch</span></h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-800 bg-opacity-70 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-300 mt-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-gray-300">DeKalb, IL 60115</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-300 mt-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-300">pasamrenuka986@gmail.com</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-300 mt-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-300">779-302-2692</p>
                      </div>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-800 bg-opacity-70 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
                  <p className="text-gray-300 mb-6">I'm always open to new opportunities and connections. Feel free to reach out to me on LinkedIn!</p>
                  
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://www.linkedin.com/in/renukapasam/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                    </svg>
                    Connect on LinkedIn
                  </motion.a>
                </motion.div>
              </div>
            </motion.section>
          )}
        </main>
      </div>
    </div>
  );
}