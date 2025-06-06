import React from 'react'
import { Mail, Github, Linkedin } from 'lucide-react'
import portfolioData from '../data/portfolioData'

const Contact = () => {
    return (
        <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-blue-400">
                    Contact Me
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 mb-12">
                    Let's connect and build something amazing together!
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    <a
                        href={`mailto:${portfolioData.personal.email}`}
                        className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 sm:p-8 border border-gray-700 hover:border-red-400 transition-all duration-300 transform hover:scale-105"
                    >
                        <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <Mail size={24} className="text-red-400" />
                        </div>
                        <h3 className="font-semibold mb-2">Email</h3>
                        <p className="text-gray-400 text-sm break-all">{portfolioData.personal.email}</p>
                    </a>

                    <a
                        href={`https://github.com/${portfolioData.personal.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 sm:p-8 border border-gray-700 hover:border-green-400 transition-all duration-300 transform hover:scale-105"
                    >
                        <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <Github size={24} className="text-green-400" />
                        </div>
                        <h3 className="font-semibold mb-2">GitHub</h3>
                        <p className="text-gray-400 text-sm">github.com/{portfolioData.personal.github}</p>
                    </a>

                    <a
                        href={`https://linkedin.com/in/${portfolioData.personal.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 sm:p-8 border border-gray-700 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 sm:col-span-2 lg:col-span-1"
                    >
                        <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <Linkedin size={24} className="text-blue-400" />
                        </div>
                        <h3 className="font-semibold mb-2">LinkedIn</h3>
                        <p className="text-gray-400 text-sm">linkedin.com/in/{portfolioData.personal.linkedin}</p>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact