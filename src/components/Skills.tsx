
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "Python", level: 90 },
  { name: "SQL (MySQL, PostgreSQL)", level: 85 },
  { name: "Tableau", level: 80 },
  { name: "Power BI", level: 85 },
  { name: "Excel (Advanced)", level: 90 },
  { name: "Machine Learning", level: 75 },
  { name: "Data Visualization", level: 85 },
  { name: "Statistical Analysis", level: 80 },
];

const tools = [
  "Python", "SQL", "Tableau", "Power BI", "Excel", 
  "GitHub", "ETL Tools", "SPSS", "R"
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-6">Technical Proficiency</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-6">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <Card key={tool} className="border-none shadow-sm bg-white">
                    <CardContent className="py-2 px-4">
                      <span className="text-sm font-medium">{tool}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-6">Core Competencies</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white shadow-sm rounded-lg p-4">
                  <h4 className="font-medium text-primary">Data Analysis</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Transforming raw data into meaningful insights to drive decision-making
                  </p>
                </div>
                <div className="bg-white shadow-sm rounded-lg p-4">
                  <h4 className="font-medium text-primary">Statistical Modeling</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Applying statistical methods to identify patterns and trends
                  </p>
                </div>
                <div className="bg-white shadow-sm rounded-lg p-4">
                  <h4 className="font-medium text-primary">Data Visualization</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Creating clear visual representations of complex data
                  </p>
                </div>
                <div className="bg-white shadow-sm rounded-lg p-4">
                  <h4 className="font-medium text-primary">Machine Learning</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Building predictive models to forecast outcomes and behaviors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
