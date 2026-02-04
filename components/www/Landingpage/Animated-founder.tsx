import { AnimatedFounders } from "@/components/ui/animated-founders";
import Soumojit from "@/public/Soumyajit Dutta (President).jpeg";
import Proyash from "@/public/PROYASH KUMAR SARKAR (Manager).jpeg";
import Sadrita from "@/public/Sadrita Neogi (Treasurer).jpeg";

function AnimatedFoundersUse() {
    const testimonials = [
        {
            id: "soumojit",
            quote:
                "Full-Stack Engineer | Cybersecurity | Jeopardy Attacker | Won 3+ CTF, 4+ Hackathons, 5+ Job Simuls Professional Cybercriminology and Cybersecurity investigator.",
            name: "SOUMOJIT DUTTA",
            designation: "President/Group Leader",
            src: "/Soumyajit-Dutta-(President).jpeg",
        },
        {
            id: "proyash",
            quote:
                "Full-Stack Engineer loT Systems Architect Building the Next Generation of Connected Experiences using Python & Modern Frontend Stacks| 1x CTF.",
            name: "PROYASH KUMAR SARKAR",
            designation: "Manager",
            src: "/PROYASH-KUMAR-SARKAR-(Manager).jpeg",
        },
        {
            id: "sadrita",
            quote:
                "A curious, forward-thinking guy who blends tech with creativity, into web development, projects, research, and hands-on building.",
            name: "SADRITA NEOGI",
            designation: "Treasurer",
            src: "/Sadrita-Neogi-(Treasurer).jpeg",
        },
    ];
    return <AnimatedFounders testimonials={testimonials} />;
}

export { AnimatedFoundersUse };