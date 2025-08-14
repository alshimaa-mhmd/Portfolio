import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";
import { RoughNotation } from "react-rough-notation";

export function Contact() {
 const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [incomplete, setIncomplete] = useState(false);
    const [sent, setSent] = useState(false);
    

    function handleSubmit(e){
        e.preventDefault();
        if(!name || !mail || !message) {
            setIncomplete(true);
            return;
        }
        setSent(false); // Reset sent state
        setLoading(true); // Start loading
        const service_id= "service_3x1oemx";
        const template_id ="template_cdznldd" ;
        const publick_key = "N3_m_AnIyQe-_9hjl";

        const templateParams = {
            to_name :"Alshimaa Mohamed" ,
            from_name: name,
            from_email: mail,
            message: message,
        };

        emailjs.send(service_id, template_id, templateParams, publick_key).then((response) => {
            console.log("Email Sent Successfilly!", response);
            setSent(true);
            setMail('');
            setName('');
            setMessage('');
        }).catch((error) => {
      console.log("Error Sending Email", error);
    })
    .finally(() => {
      setLoading(false); // Stop loading in all cases
      setIncomplete(false);
    });
    }
  return (
    <section id="contact" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-16"><RoughNotation type="underline" show={true} color="#4361EE" animate={false}>Get In Touch</RoughNotation></h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl mb-6">Let's work together</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and development.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>alshimaa717@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Sohag, Egypt</span>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input placeholder=" Name" value={name} onChange={ (e) => setName(e.target.value) } />
                  <Input type="email" placeholder="Email Address" value={mail} onChange={(e) => setMail(e.target.value)} />
                  <Textarea placeholder="Your Message" rows={4} value={message} 
          onChange={(e)=> setMessage(e.target.value)} />
                  {incomplete && <p className='text-red-500 text-xs sm:text-sm'>Please fill in all fields.</p>}
                  <Button type="submit" className={`w-full ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105' }`} disabled={loading}>
                   {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
       {/* Success notification */}
      {sent && (
        <div className="fixed right-4  sm:right-8 w-[280px] sm:w-[320px] lg:w-[295px] min-h-[68px] flex items-center justify-center gap-3 bg-muted shadow-2xl text-white font-semibold text-center p-4 z-[100] rounded-lg animate-slideInAndOut text-sm sm:text-base">
          <span>Your Email Was Sent Successfully!</span>
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#C788DD] flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clipRule="evenodd"/>
          </svg>
        </div>
      )}
    </section>
  );
}