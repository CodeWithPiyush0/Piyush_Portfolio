import React from 'react'
import { Menu, X } from 'lucide-react'
import portfolioData from '../data/portfolioData'

const Header = ({ activeSection, setActiveSection, isMenuOpen, setIsMenuOpen }) => {

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'education', label: 'Education' },
        { id: 'contact', label: 'Contact' }
    ];
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="text-xl font-bold text-blue-400 flex-shrink-0">
                        {portfolioData.personal.name}
                    </div>

                    <div className="hidden md:flex items-center">
                        {navItems.map((item, index) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 px-4 py-2 mx-1 rounded-md whitespace-nowrap ${activeSection === item.id ? 'text-blue-400 bg-blue-400/10' : 'text-gray-300'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    <button
                        className="md:hidden text-blue-400 p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-gray-900/98 backdrop-blur-md border-t border-gray-800">
                    <div className="px-4 py-4 space-y-2">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`block w-full text-left px-4 py-2 rounded-md text-sm transition-colors ${activeSection === item.id
                                    ? 'text-blue-400 bg-blue-400/10'
                                    : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Header