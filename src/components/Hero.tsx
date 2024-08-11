import { heroPatternLeft, heroPatternRight, phoneImage } from "../assets"
import Button from "./Button"

const Hero = () => {

    return (
        <main className={`relative |  |  | `}>
            <section className={`w-full pt-8 pb-[10.5rem] md:pb-[13rem] lg:pb-[17rem] xl:pb-[21rem] relative | text-center bg-primary-dark-purple | flex flex-col justify-center items-center | hero`}>
                <h1 className={`w-11/12 md:w-7/12 lg:w-[40%] | text-5xl lg:text-[4rem] xl:text-[4.5rem] text-neutral-white font-fraunces font-medium leading-[3.5rem] lg:leading-[4rem] xl:leading-[4.7rem] |  | `}>
                    Data <span className={` |  | border-b-[3px] border-b-primary-eucaplyptus | `}>tailored</span><br className={`md:max-lg:hidden |  |  | `} /> to <br className={`max-md:hidden lg:hidden |  |  | `} /> your needs.
                </h1>

                <div className={`mt-7 md:mt-8 lg:mt-10 mb-8 |  |  | `}>
                    <Button text={"Learn more"} />
                </div>
            </section>

            <img 
                src={phoneImage} 
                alt="Phone Image"
                className={`absolute m-auto -bottom-4 md:-bottom-8 lg:-bottom-12 xl:-bottom-14 left-0 right-0 w-[18rem] md:w-[22rem] lg:w-[32rem] xl:w-[40rem] z-20 |  |  | `}
            />

            <img 
                src={heroPatternLeft} 
                className={`hidden md:block absolute inset-0 md:-left-[11rem] lg:-left-[9rem] xl:-left-[8rem] md:top-[1rem] md:w-[18rem] xl:w-[20rem] z-20 |  |  | `}
            />

            <img 
                src={heroPatternRight} 
                className={`hidden md:block absolute md:-right-[5.5rem] lg:-right-[4rem] xl:-right-[3rem] md:top-[9rem] lg:top-[8rem] xl:top-[9rem] md:w-[10rem] xl:w-[11rem] z-20 |  |  | `}
            />
        </main>
    )

}

export default Hero