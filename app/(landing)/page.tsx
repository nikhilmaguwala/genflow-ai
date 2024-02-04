import {LandingNavbar} from "@/components/landing-navbar";
import {LandingHero} from "@/components/landing-hero";
import {LandingContent} from "@/components/landing-content";

const Landing = () => {
    return (
        <div className="h-full ">
            <LandingNavbar />
            <LandingHero />
            <LandingContent />
        </div>
    );
}

export default Landing;