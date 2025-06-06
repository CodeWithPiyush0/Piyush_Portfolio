import React from 'react'
import { Code, Palette, Database, Server, Briefcase } from 'lucide-react'
import portfolioData from '../data/portfolioData'

const Skills = () => {

    const skillCategories = [
        {
            title: "Frontend",
            skills: portfolioData.skills.frontend,
            icon: <Code className="text-blue-400" size={24} />,
            color: "blue"
        },
        {
            title: "Design",
            skills: portfolioData.skills.design,
            icon: <Palette className="text-purple-400" size={24} />,
            color: "purple"
        },
        {
            title: "Backend",
            skills: portfolioData.skills.backend,
            icon: <Server className="text-green-400" size={24} />,
            color: "green"
        },
        {
            title: "Database",
            skills: portfolioData.skills.database,
            icon: <Database className="text-yellow-400" size={24} />,
            color: "yellow"
        },
        {
            title: "Programming",
            skills: portfolioData.skills.programming,
            icon: <Code className="text-red-400" size={24} />,
            color: "red"
        },
        {
            title: "Tools",
            skills: portfolioData.skills.tools,
            icon: <Briefcase className="text-indigo-400" size={24} />,
            color: "indigo"
        }
    ];

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mb-4">
                        Skills & Expertise
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={category.title}
                            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                        >
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="p-2 bg-gray-700/50 rounded-lg">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skill}
                                        className="text-sm px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 border border-gray-600/50 hover:border-blue-400/50 transition-colors"
                                    >
                                        {skill}
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

export default Skills