
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleBookCall = () => {
    document.getElementById('calendly-container')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled 
          ? 'bg-transparent lg:bg-white/60 lg:backdrop-blur-md lg:shadow-sm py-4 lg:w-[85%] mx-auto rounded-xl mt-2' 
          : 'bg-transparent py-6 '
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="items-center lg:flex hidden">
          <span className="font-bold text-2xl text-agency-dark">
            <img src="/logo.png" alt="Content Finix" className="h-12" />
          </span>
          <span className="ml-2 text-agency-dark text-2xl font-semibold">
            Content<span className="text-agency-orange">Finix</span> 
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-agency-dark hover:text-agency-orange transition-colors font-medium">Services</a>
          <a href="#process" className="text-agency-dark hover:text-agency-orange transition-colors font-medium">Process</a>
          <a href="#results" className="text-agency-dark hover:text-agency-orange transition-colors font-medium">Results</a>
          <a href="#testimonials" className="text-agency-dark hover:text-agency-orange transition-colors font-medium">Testimonials</a>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="sm" className="relative bg-agency-orange hover:bg-agency-orange/90 text-white font-medium"
            onClick={handleBookCall}
            >
              Book Call
              <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                1
              </div>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-agency-dark p-2  backdrop-blur-md bg-white/60 rounded-full"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out pt-24 lg:hidden h-full",
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="container flex flex-col space-y-6 p-6 bg-white">
          {/* Close button in top right corner */}
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-agency-dark p-2"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          
          <a 
            href="#services" 
            className="text-xl font-medium text-agency-dark hover:text-agency-orange transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#pricing" 
            className="text-xl font-medium text-agency-dark hover:text-agency-orange transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </a>
          <a 
            href="#process" 
            className="text-xl font-medium text-agency-dark hover:text-agency-orange transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Process
          </a>
          <a 
            href="#testimonials" 
            className="text-xl font-medium text-agency-dark hover:text-agency-orange transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <div className="relative">
            <Button 
              size="lg" 
              className="w-full bg-agency-orange hover:bg-agency-orange/90 text-white font-medium"
              onClick={() => {
                window.open('https://calendly.com/rashidmukhtar205/discoverycall', '_blank');
              }}
            >
             Book Call
            </Button>
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
              1
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
