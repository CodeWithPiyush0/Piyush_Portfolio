import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import portfolioData from '../data/portfolioData'

const About = () => {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mb-4">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                    <p className="text-gray-300 text-lg leading-relaxed mb-8 text-center">
                        {portfolioData.personal.summary}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex items-center justify-center md:justify-start space-x-3 p-4 bg-gray-700/30 rounded-lg">
                            <Mail className="text-blue-400 flex-shrink-0" size={20} />
                            <span className="text-gray-300 text-sm">{portfolioData.personal.email}</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start space-x-3 p-4 bg-gray-700/30 rounded-lg">
                            <Phone className="text-blue-400 flex-shrink-0" size={20} />
                            <span className="text-gray-300 text-sm">{portfolioData.personal.phone}</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start space-x-3 p-4 bg-gray-700/30 rounded-lg">
                            <MapPin className="text-blue-400 flex-shrink-0" size={20} />
                            <span className="text-gray-300 text-sm">{portfolioData.personal.location}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About