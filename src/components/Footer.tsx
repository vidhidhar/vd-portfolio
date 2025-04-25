
import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-primary mb-2">Vidhi Dhar</h2>
            <p className="text-gray-400 max-w-md">
              Data Scientist passionate about transforming complex data into actionable insights
            </p>
          </div>
          
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-white">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <GithubIcon className="h-5 w-5" />
              </a>
            </Button>
            
            <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-white">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </Button>
            
            <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-white">
              <a href="mailto:vidhidhar.vd@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Vidhi Dhar. All rights reserved.
          </div>
          
          <nav className="flex gap-6 text-sm">
            <a href="#about" className="text-gray-400 hover:text-primary transition-colors">About</a>
            <a href="#skills" className="text-gray-400 hover:text-primary transition-colors">Skills</a>
            <a href="#experience" className="text-gray-400 hover:text-primary transition-colors">Experience</a>
            <a href="#projects" className="text-gray-400 hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
