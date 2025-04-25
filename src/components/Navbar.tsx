
import { useState, useEffect } from "react";
import { GithubIcon, LinkedinIcon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 shadow-md backdrop-blur-md" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-xl font-semibold text-primary">Vidhi Dhar</div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
          <a href="#skills" className="text-gray-700 hover:text-primary transition-colors">Skills</a>
          <a href="#experience" className="text-gray-700 hover:text-primary transition-colors">Experience</a>
          <a href="#projects" className="text-gray-700 hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
          <div className="flex items-center gap-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <GithubIcon className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <LinkedinIcon className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden py-4 px-4 flex flex-col gap-4 animate-fade-in">
            <a href="#about" className="text-gray-700 hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#skills" className="text-gray-700 hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#experience" className="text-gray-700 hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a href="#projects" className="text-gray-700 hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <div className="flex items-center gap-4 py-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <GithubIcon className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <LinkedinIcon className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
