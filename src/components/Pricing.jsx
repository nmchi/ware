import { smallSphere, stars } from "../assets"
import Section from "./Section"

const Pricing = () => {
    return (
        <Section className="overflow-hidden" id="pricing">
            <div className="container relative z-2">
                <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
                    <img
                        src={smallSphere}
                        width={255}
                        height={255}
                        className="relative z-1"
                        alt="Sphere"
                    />

                    <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <img
                            src={stars}
                            width={950}
                            height={400}
                            className="w-full"
                            alt="stars"
                        />
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Pricing