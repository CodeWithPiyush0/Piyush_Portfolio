import React from 'react'
import { Calendar } from 'lucide-react'
import portfolioData from '../data/portfolioData'

const Projects = () => {

  return (
        <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-center text-blue-400">
                    Projects
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    {portfolioData.projects.map((project, index) => (
                        <div
                            key={project.title}
                            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-400 transition-all duration-300 transform hover:scale-105"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-1">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-blue-400 mb-2">{project.subtitle}</p>
                                </div>
                                <span className={`text-xs px-3 py-1 rounded-full ${project.status === 'active'
                                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                    }`}>
                                    {project.status === 'active' ? 'Active' : 'Completed'}
                                </span>
                            </div>

                            <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
                                <Calendar size={14} />
                                <span>{project.period}</span>
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                {project.description}
                            </p>

                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                                <ul className="text-xs text-gray-400 space-y-1">
                                    {project.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start space-x-2">
                                            <span className="text-blue-400 mt-1">•</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, techIndex) => (
                                    <span
                                        key={tech}
                                        className="text-xs px-2 py-1 rounded bg-gray-700 text-gray-300 border border-gray-600"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects