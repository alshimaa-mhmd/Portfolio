import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { Card, CardContent } from "./ui/card";
import { useInView } from "react-intersection-observer";

export function About() {
   const { ref, inView } = useInView({
    triggerOnce: true, // Run only once
    threshold: 0.2,    // % of element visible before triggering
  });
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-16">
             <RoughNotation type="underline" color="#FF4D6D" animate={false} show={true}>
                    About Me
             </RoughNotation>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div  ref={ref}>
              <RoughNotationGroup show={inView}>
              <p className="text-white mb-6 leading-relaxed [word-spacing:8px]">
               
                  Hi, I am Shimaa , a frontend developer with expertise in{" "}{" "}
                  <RoughNotation type="highlight" color="#9D4EDD99" animationDuration={800}>
                    React,
                  </RoughNotation>{" "} {" "}{" "} {" "}{" "} {" "}{" "} {" "}{" "} {" "}
                  <RoughNotation type="highlight" color="#FFB70399" animationDuration={800}>
                    Next.js,
                  </RoughNotation>{" "}{" "}
                  <RoughNotation type="highlight" color="#FF4D6D99" animationDuration={800}>
                    <span className="whitespace-nowrap">Tailwind CSS,</span>
                  </RoughNotation>{" "}{" "}
                  and  {" "}{" "}<RoughNotation type="highlight" color="#FF2E6399" animationDuration={800}>
                   <span className="whitespace-nowrap">API integration</span>
                  </RoughNotation>{" "}{" "}, specializing in building fast, responsive, and visually appealing websites. I focus on writing {" "}{" "}
                  <RoughNotation type="circle" color="#9D4EDD" animationDuration={800}>
                    clean,
                  </RoughNotation>{" "}{" "} <RoughNotation type="circle" color="#9D4EDD" animationDuration={800}>
                     maintainable code
                  </RoughNotation>{" "}{" "} and creating seamless user experiences that work flawlessly on all devices.
               
              </p>
              <p className="text-white mb-6 leading-loose">
                My strengths go beyond technical skills, I am quick to learn new tools or technologies when the project demands it, I am <RoughNotation type="highlight" color="#9D4EDD99" animationDuration={800}>
                   flexiable 
                  </RoughNotation>{" "}{" "}<RoughNotation type="highlight" color="#FF4D6D99" animationDuration={800}>
                    <span className="whitespace-nowrap">, and a strong team member.</span>
                  </RoughNotation>{" "}{" "}
                  I approach every challenge with problem-solving, attention to detail, and a commitment to delivering high-quality results on time.
               
              </p>
              <p className="text-white mb-6 leading-relaxed"> 
                I am currently looking for a new role as a frontend developer . {" "}<RoughNotation type="circle" color="red" animationDuration={800}>
                  <span className="whitespace-nowrap">Hire me ?</span>
                  </RoughNotation>  
              </p>
              </RoughNotationGroup>
              </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-4xl">👩‍💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}