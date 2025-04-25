
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Card className="border-none shadow-lg">
              <CardContent className="p-0">
                <img 
                  src="https://placekitten.com/600/400" 
                  alt="Vidhi working with data"
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Detail-oriented Data Analyst with a passion for insights
            </h3>
            
            <p className="text-gray-600">
              I'm a data professional with 2+ years of experience in Python, SQL, and visualization tools like Tableau and PowerBI. 
              I specialize in analyzing complex datasets, designing data models, and optimizing data pipelines to support business goals.
            </p>
            
            <p className="text-gray-600">
              With a Master's in Data Science from University of Birmingham where I graduated with distinction, 
              I combine strong academic foundations with practical industry experience from my time at Publicis Media.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="text-primary font-semibold">Education</h4>
                <ul className="text-gray-600 space-y-2 mt-2">
                  <li>MSc Data Science - University of Birmingham</li>
                  <li>BTech Information Technology - Amity University</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-primary font-semibold">Interests</h4>
                <ul className="text-gray-600 space-y-2 mt-2">
                  <li>Machine Learning</li>
                  <li>Data Visualization</li>
                  <li>Predictive Analytics</li>
                  <li>Business Intelligence</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
