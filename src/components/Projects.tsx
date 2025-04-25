
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { GithubIcon, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "PyGuide: Intelligent Python Lab Assistant",
    description: "Developed an AI-driven assistant that provided real-time guidance for Python programming, improving learning outcomes. Built with PyQt5 and advanced AI methodologies.",
    tags: ["Python", "AI", "PyQt5", "Machine Learning"],
    image: "https://placekitten.com/600/350",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Data Vault Implementation for fNIRS",
    description: "Led the implementation of a data vault for fNIRS datasets, improving storage and retrieval efficiency using SQL and Python. Used Tableau to create visualisations that enhanced data processing.",
    tags: ["SQL", "Python", "Tableau", "Data Storage"],
    image: "https://placekitten.com/601/350",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Database Management with PostgreSQL",
    description: "Developed and executed scripts in bash to automate repetitive tasks, created and managed relational databases in PostgreSQL, including designing schemas and writing complex queries.",
    tags: ["PostgreSQL", "Bash", "Git", "Database Design"],
    image: "https://placekitten.com/602/350",
    githubUrl: "#",
    liveUrl: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
          <p className="mt-4 text-center max-w-2xl text-gray-600">
            Showcasing my expertise in data science, analysis, and visualization through various projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg h-full flex flex-col">
              <div className="relative aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardContent className="p-6 flex-grow">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0 flex justify-between">
                <Button variant="outline" size="sm" asChild className="gap-2">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="h-4 w-4" />
                    Code
                  </a>
                </Button>
                
                <Button size="sm" asChild className="gap-2">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="gap-2">
              <GithubIcon className="h-4 w-4" />
              See More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
