import React from 'react'
import { Calendar } from 'lucide-react'
import portfolioData from '../data/portfolioData'

const Education = () => {
    return (
        <section id="education" className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-800/30">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-center text-blue-400">
                    Education
                </h2>

                <div className="space-y-6 sm:space-y-8">
                    {portfolioData.education.map((edu, index) => (
                        <div
                            key={edu.institution}
                            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-400 transition-all duration-300"
                        >
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-white mb-1">
                                        {edu.institution}
                                    </h3>
                                    <p className="text-blue-400 mb-2">{edu.degree}</p>
                                    <p className="text-green-400 text-sm font-semibold">{edu.score}</p>
                                </div>
                                <div className="flex items-center space-x-2 text-sm text-gray-400 mt-2 sm:mt-0">
                                    <Calendar size={14} />
                                    <span>{edu.period}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education