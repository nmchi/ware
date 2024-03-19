import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";

const App = () => {
    return (
        <>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Header />
                <HeroSection />
                <Benefits />
                <Collaboration />
                <Services />
            </div>
            <ButtonGradient />
        </>
    )
}
  
export default App  