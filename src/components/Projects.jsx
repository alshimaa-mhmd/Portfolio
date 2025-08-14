import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";
import spaceTourism from "../assets/screencapture-space-tourism-alshimaas-projects-vercel-app-2025-08-13-01_43_29.png";
import exclusive from '../assets/exclusive (3).png'
import bookwise from '../assets/Search.png'
import { RoughNotation } from "react-rough-notation";
// import { useState } from "react";

export function Projects() {

  // const [hovered, setHovered] = useState(null);
  const projects = [
     {
    
  id: 0,
  name: "Bookwise",
  image: bookwise,
 description:"A full-stack web application to simplify access and browse a library of books for university students, read summaries, and borrow titles directly through the platform. Upon borrowing, the system automatically generates and downloads a digital receipt. \n Use the demo account below to peek inside Email: user@example.com \n Password: 123456789",  used : ["Nextjs", "Supabase" , "Tailwind", "API"],
  link: "https://library-management-system-woad-xi.vercel.app/",
  repo: "https://github.com/alshimaa-mhmd/library-management-system"
 
},{
  id: 1,
  name: "Exclusive",
  image: exclusive,
  description:"Exclusive is a sleek e-commerce web app built to give users a smooth shopping experience. With 11 fully responsive pages, users can explore products, add items to their cart or wishlist, and browse through a modern UI that feels ready for production ",
  used : ["React", "React-Router", "Tailwind", "Context API"],
  link: "https://e-commerce-mu-ivory.vercel.app/",
  repo: "https://github.com/alshimaa-mhmd/E-commerce"
},

  {
  id: 2,
  name: "Space tourism",
  image: spaceTourism,
  description:"Multi-page space tourism website using React-Router and tailwind . users are able to view each page and be able to toggle between the tabs to see new information and view the optimal layout for each of the website's pages depending on their device's screen size",
  used : ["React", "React-Router", "Tailwind"],
  link: "https://space-tourism-alshimaas-projects.vercel.app/",
  repo: "https://github.com/alshimaa-mhmd/space-tourism",
},

]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-16">            
          <RoughNotation type="underline" show={true} color="#9D4EDD" animate={false}>Featured Projects</RoughNotation>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {projects.map((project, index) => (
              <Card key={index} className="h-full flex flex-col">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={project?.image}
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription className="truncate-lines">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.used.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button size="sm" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.repo} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex items-center justify-center mt-12 gap-4">
          <Link to="/projects" className="text-center text-primary hover:underline">
            View All Projects 
          </Link>
          <ArrowRight className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}