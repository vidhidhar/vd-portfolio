
import { GithubIcon, LinkedinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-xl font-semibold text-primary">VD</div>
        <div className="flex items-center gap-4">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
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
    </nav>
  );
};

export default Navbar;
