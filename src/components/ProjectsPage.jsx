import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion'

import spaceTourism from "../assets/screencapture-space-tourism-alshimaas-projects-vercel-app-2025-08-13-01_43_29.png";
import exclusive from '../assets/exclusive.PNG'
import bookwise from '../assets/Search.png'
import interior from '../assets/interior.PNG'
import maortgage from '../assets/mortgage-app.jpg'
import rockPaper from '../assets/rock-paper.jpg'
import fylo from '../assets/fylo.jpg'
import todo from '../assets/todo-app.jpg'
import { RoughNotation } from "react-rough-notation";
// import urlShorten from '../assets/url-shortening-api-landing-page.png'
function ProjectsPage() {
  const completedProjects = [
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
  description:"Exclusive is a sleek e-commerce web app built to give users a smooth shopping experience. With 11 fully responsive pages, users can explore products, add items to their cart or wishlist, check out items , sign in or sign up and browse through a modern UI that feels ready for production, all the pages are fully responsive",
  used : ["React", "React-Router", "Tailwind", "Context API"],
  link: "https://e-commerce-mu-ivory.vercel.app/",
  repo: "https://github.com/alshimaa-mhmd/E-commerce"
},

  {
  id: 2,
  name: "Space tourism",
  image: spaceTourism,
  description:"Multi-page space tourism website using React-Router and tailwind , the project is simple yet it's intersting . users are able to view each page and be able to toggle between the tabs to see new information and view the optimal layout for each of the website's pages depending on their device's screen size",
  used : ["React", "React-Router", "Tailwind"],
  link: "https://space-tourism-alshimaas-projects.vercel.app/",
  repo: "https://github.com/alshimaa-mhmd/space-tourism",
},
  {
  id: 3,
  name: "viva decor",
  image: interior,
  description:"A landing page using only tailwind for an Interior design company that wanted toshare their projects to their customer and showcase their massive portfolio, inaddition to under-construction page for pages that are not developed yet , thewebsite is fully responsive .",
  used : ["HTML", "Tailwind CSS"],
  link: "https://interior-design-drab.vercel.app/",
  repo: "https://github.com/alshimaa-mhmd/Interior-Design",
},

]

const smallProjects = [
  {
  id: 4,
   name: "Mortgage repayment calculator",
  image: maortgage,
  description:"This mortgage calculator is an excellent project for practicing working with forms, client-side validation, and updating the DOM!  users are be able to Input mortgage information and see monthly repayment and total repayment amounts after submitting the form and See form validation messages if any field is incomplete",
  used : ["React", "tailwind"],
  link: "https://mortgage-app-alshimaas-projects.vercel.app/",
  repo: "https://github.com/alshimaa-mhmd/mortgage-app"
},
  {
  id: 5,
   name: "Todo App",
  image: todo,
  description:"The classic todo app with a few twists! This app includes a dark/light theme users are be able to Add new todos to the list , Mark todos as complete Delete todos from the list, Filter by all/active/complete todos, Clear all completed todos, Toggle light and dark mode , and View the optimal layout for the app depending on their device's screen size",
  used : ["React", "tailwind"],
  link: "https://todo-app-alshimaas-projects.vercel.app//",
  repo:"https://github.com/alshimaa-mhmd/todo-app"
},
  {
  id: 6,
  name: "Rock, Paper, Scissors game",
  image: rockPaper,
  description:"Fun little rock, paper scissors game , users are be able to Play Rock, Paper, Scissors against the computer and View the optimal layout for the interface depending on their device's screen size  and See hover and focus states for all interactive elements on the page",
  used : ["HTML", "pure CSS", "pure Javascript"],
  link: "https://rock-paper-scissors-alshimaas-projects.vercel.app/",
  repo: "https://github.com/alshimaa-mhmd/rock-paper-scissors",
},
//   {
//   id: 6,
//   name: "URL shortening API landing page",
//   // image: urlShorten,
//   description:"Integrate with the Clean URI link shortening API and play with browser storage in this landing page challenge, users should be able to Shorten any valid URL and See a list of their shortened links, and View the optimal layout for the interface depending on their device's screen size",
//   used : ["HTML", "pure CSS", "pure Javascript", "API"],
//   link: "https://url-shortening-api-alshimaas-projects.vercel.app/",
// },
  {
  id: 7,
  name: "Fylo dark theme landing page",
  image: fylo,
  description:"This design has some nice layout challenges in it. A perfect training ground to practice Flexbox and Grid skills. users should be able to View the optimal layout for the interface depending on their device's screen size and See hover and focus states for all interactive elements on the page",
  used : ["HTML", "pure CSS"],
  link: "https://fylo-dark-theme-alshimaas-projects.vercel.app/",
},
]

  return (
     <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        <m.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 1 }} >

         
    <section id="projects" className="py-20 px-6 dark bg-background text-foreground">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-16">
            <RoughNotation type="highlight" show={true} color="#FF2E63" animate={true} animationDuration={2000}>
              Completed Projects
              </RoughNotation>
            </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project, index) => (
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
                  <CardDescription>{project.description}</CardDescription>
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
          
        </div>
      </div>


      {/* small projects  */}
       <div className="container mx-auto mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-16">
            <RoughNotation type="highlight" show={true} color="#4895EF" animate={false}>
             Small Projects
              </RoughNotation></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smallProjects.map((project, index) => (
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
                  <CardDescription>{project.description}</CardDescription>
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
          <ArrowLeft className="w-6 h-6 text-muted-foreground" />
          <Link to="/" className="text-center text-primary hover:underline">
            Go Back 
          </Link>
          </div>
        </div>
      </div>
    </section>
     </m.div>
    </AnimatePresence>
  </LazyMotion>
  );
}

export default ProjectsPage;  