import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { Card, CardContent } from "./ui/card";
import { useInView } from "react-intersection-observer";

export function About() {
   const { ref, inView } = useInView({
    triggerOnce: true, // Run only once
    threshold: 0.5,    // % of element visible before triggering
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
               
                  Hi, I'm Shimaa — {" "}{" "}<RoughNotation type="highlight" color="#FF2E6399" animationDuration={1200}>
                  <span className="whitespace-nowrap">full stack developer.</span>
                  </RoughNotation>{" "}{" "} who builds things end-to-end — from the interface someone actually clicks on, to the backend logic and database running quietly behind it. I like owning the whole picture instead of just one piece of it, because that's where the real fun usually live.
                
              </p>
              <p className="text-white mb-6 leading-loose">
                I'm not precious about tools — I learn what the project needs. What I am precious about is  {" "}{" "}{" "}{" "}<RoughNotation type="highlight" color="#4361EE" animationDuration={1300}>
                   <span className="whitespace-nowrap">shipping something that actually works</span>
                  </RoughNotation>{" "}{" "} ,not just something that demos well.
              </p>
              <p className="text-white mb-6 leading-relaxed"> 
                I am currently open to new roles. {" "}<RoughNotation type="circle" color="red" animationDuration={1400}>
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