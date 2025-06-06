import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import portfolioData from '../data/portfolioData'

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
            <div className="max-w-5xl mx-auto text-center w-full">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            Hi, I'm <span className="text-blue-400">{portfolioData.personal.name}</span>
                        </h1>
                        <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light">
                            {portfolioData.personal.title}
                        </h2>
                    </div>

                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                        {portfolioData.personal.summary}
                    </p>

                    <div className="flex justify-center items-center space-x-6">
                        <a
                            href={`https://github.com/${portfolioData.personal.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full border border-gray-700 hover:border-blue-400 transition-all duration-300 transform hover:scale-110"
                        >
                            <Github size={24} className="text-gray-400 hover:text-blue-400 transition-colors" />
                        </a>
                        <a
                            href={`https://linkedin.com/in/${portfolioData.personal.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full border border-gray-700 hover:border-blue-400 transition-all duration-300 transform hover:scale-110"
                        >
                            <Linkedin size={24} className="text-gray-400 hover:text-blue-400 transition-colors" />
                        </a>
                        <a
                            href={`mailto:${portfolioData.personal.email}`}
                            className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full border border-gray-700 hover:border-blue-400 transition-all duration-300 transform hover:scale-110"
                        >
                            <Mail size={24} className="text-gray-400 hover:text-blue-400 transition-colors" />
                        </a>
                    </div>

                    <button
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
                    >
                        View My Work
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero