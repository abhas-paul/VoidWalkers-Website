"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll for glassmorphism effect refinement
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/www/Home' },
        { name: 'Hall of Fame', href: '/www/HallofFame' },
        { name: 'Live Events', href: '/www/LiveEvents' },
        { name: 'Members', href: '/www/Members' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={`fixed top-0 left-0 w-full h-[70px] flex items-center justify-center z-[1000] transition-all
    duration-300 border-b border-white/10 ${scrolled ? 'bg-black/20 backdrop-blur-xl'
                : 'bg-transparent backdrop-blur-md'}`}>
            <div className="w-full max-w-[1400px] px-[5%] flex items-center justify-between">

                {/* Logo */}
                <div
                    className="text-2xl font-medium text-white tracking-wider transition-transform duration-300">
                    Void Walkers
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 list-none">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link href={link.href}
                                className="text-[1.1rem] font-medium text-white/80 hover:text-white transition-colors duration-300 py-2 cursor-pointer">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Toggle Button */}
                <button onClick={toggleMenu} className="flex md:hidden flex-col gap-[6px] p-2 z-[1100] cursor-pointer"
                    aria-label="Toggle Menu">
                    <span className={`block w-[25px] h-[2px] bg-white rounded-sm transition-all duration-300 ${isOpen
                        ? 'translate-y-[8px] rotate-45' : ''}`}></span>
                    <span className={`block w-[25px] h-[2px] bg-white rounded-sm transition-all duration-300 ${isOpen
                        ? 'opacity-0 translate-x-[10px]' : ''}`}></span>
                    <span className={`block w-[25px] h-[2px] bg-white rounded-sm transition-all duration-300 ${isOpen
                        ? '-translate-y-[8px] -rotate-45' : ''}`}></span>
                </button>

                {/* Mobile Sidebar Menu */}
                <div className={`fixed top-0 h-screen w-[300px] sm:w-[350px] bg-[#140a23]/95 backdrop-blur-[20px] flex
            flex-col items-center justify-center gap-10 p-5 shadow-[-10px_0_30px_rgba(0,0,0,0.5)] transition-all
            duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1)] z-[1050] md:hidden ${isOpen ? 'right-0' : '-right-full'
                    }`}>
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)}
                            className="text-[1.4rem] font-medium text-white/80 hover:text-white transition-colors duration-300"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;