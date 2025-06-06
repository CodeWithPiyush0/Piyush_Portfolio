import React from 'react'
import portfolioData from '../data/portfolioData'

const Footer = () => {
    return (
        <footer className="py-8 px-4 sm:px-6 border-t border-gray-800">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-gray-500 text-sm">
                    © 2025 {portfolioData.personal.name}. Built with React & Tailwind CSS
                </p>
            </div>
        </footer>
    )
}

export default Footer