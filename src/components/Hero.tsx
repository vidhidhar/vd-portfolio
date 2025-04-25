
import { Button } from "@/components/ui/button";
import { BarChart, Database, ChartLine } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-accent/50 to-white">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center gap-8">
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-secondary blur opacity-75"></div>
          <div className="relative rounded-full p-1 bg-white">
            <img
              src="https://placekitten.com/150/150"
              alt="Vidhi Dhar"
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>
        </div>
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Hi, I'm Vidhi Dhar
          </h1>
          <p className="text-xl text-muted-foreground">
            Data Scientist & Analyst with expertise in Python, SQL, and Data Visualization
          </p>
          <div className="flex justify-center gap-4 text-muted-foreground">
            <BarChart className="h-6 w-6" />
            <Database className="h-6 w-6" />
            <ChartLine className="h-6 w-6" />
          </div>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Transforming complex data into actionable insights. MSc in Data Science from University of Birmingham
            with distinction and 2+ years of professional experience.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button size="lg">View Projects</Button>
            <Button size="lg" variant="outline">Contact Me</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
