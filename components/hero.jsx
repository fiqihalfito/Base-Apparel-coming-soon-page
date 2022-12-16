import Image from "next/image"
import heroMobile from "../public/images/hero-mobile.jpg"
import heroDesktop from "../public/images/hero-desktop.jpg"

function Hero() {
    return (
        <div className="md:row-span-2 md:justify-self-end">
            <Image src={heroMobile} alt="hero" className="w-full md:hidden" priority />
            <Image src={heroDesktop} alt="hero" className="hidden md:block md:h-screen w-auto " />
        </div>
    )
}

export default Hero