
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Associate Data Analyst",
    company: "Victoria Solutions",
    period: "Feb 2025 – present",
    location: "London, United Kingdom",
    responsibilities: [
      "Identified patterns and trends in large data sets and provided actionable insights.",
      "Developed and optimised SQL/Python scripts, reducing data extraction and processing time by 30% across 3+ data sources.",
      "Designed and maintained 5+ interactive dashboards in Tableau/Power BI, enabling real-time tracking of key business metrics.",
      "Analyzed data to identify root causes of problems and recommend corrective actions.",
      "Implemented business intelligence solutions to increase operational efficiency.",
    ],
  },
  {
    title: "Data Analyst",
    company: "Publicis Media",
    period: "Feb 2021 – Sep 2022",
    location: "Gurugram, India",
    responsibilities: [
      "Analyzed 1M+ rows of data to uncover trends, patterns, and hidden insights.",
      "Designed data pipelines that reduced data processing time by 40%, improving availability and accuracy across 4+ departments.",
      "Applied statistical techniques to generate business reports that influenced quarterly planning and resource allocation.",
      "Built and maintained 10+ interactive dashboards in Tableau/Power BI to monitor KPIs, leading to a 25% reduction in reporting turnaround time.",
      "Generated 30+ ad-hoc reports to address unique business queries, enabling leadership to make faster, more informed decisions.",
    ],
  },
  {
    title: "Media Analyst - Programmatic Hub",
    company: "Publicis Media",
    period: "Sep 2020 – Feb 2021",
    location: "Gurugram, India",
    responsibilities: [
      "Produced monthly reports using advanced Excel spreadsheet functions.",
      "Strategized campaigns for clients, helping to meet goals and reach untapped potential customers.",
      "Assessed paid media analytics against KPIs using Google Analytics, internal and agency reporting and presented findings to key stakeholders.",
      "Identified target audiences to analyse characteristics, behaviour, and media habits.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </div>

        <div className="space-y-10 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-primary/20 hidden md:block"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-2 w-5 h-5 rounded-full border-4 border-primary bg-white hidden md:block"></div>
              
              <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="md:w-1/2 mb-6 md:mb-0"></div>
                <Card className={`md:w-1/2 transform transition-all hover:shadow-lg ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    <h4 className="text-primary font-medium mt-1">{exp.company}</h4>
                    <div className="flex flex-wrap justify-between items-center mt-2 text-sm text-gray-500">
                      <span>{exp.period}</span>
                      <span>{exp.location}</span>
                    </div>
                    
                    <ul className="mt-4 space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="text-gray-600 flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 shrink-0"></span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
