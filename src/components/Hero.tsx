
import { Button } from "@/components/ui/button";
import { BarChart, Database, ChartLine, FileDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-accent/30 to-white pt-16">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-6 order-2 md:order-1">
          <div className="space-y-3">
            <h2 className="text-primary font-medium text-lg">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Vidhi Dhar
            </h1>
            <p className="text-xl text-secondary/90 font-medium">
              Data Scientist & Analyst
            </p>
          </div>
          
          <p className="text-lg text-gray-600 max-w-lg">
            Transforming complex data into actionable insights. MSc in Data Science from University of Birmingham
            with distinction and 2+ years of professional experience.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
            <Button size="lg" className="gap-2">
              <FileDown className="h-4 w-4" />
              Download CV
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-4 text-primary">
            <div className="flex flex-col items-center gap-2">
              <BarChart className="h-6 w-6" />
              <span className="text-sm text-gray-600">Data Analysis</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Database className="h-6 w-6" />
              <span className="text-sm text-gray-600">SQL Databases</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ChartLine className="h-6 w-6" />
              <span className="text-sm text-gray-600">Visualization</span>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary to-secondary blur opacity-30"></div>
            <div className="relative rounded-full p-2 bg-white shadow-lg">
              <img
                src="https://placekitten.com/400/400" 
                alt="Vidhi Dhar"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
