import { founderImage, testimonialPattern } from "../assets"
import { testimonialButton, testimonialdesc, testimonialTitle } from "../constants"
import Button from "./Button"

const Testimonial = () => {

    return (
        <section className={`-mt-24 md:-mt-10 lg:-mt-2 pb-[17.7rem] md:pb-[13.5rem] lg:pb-[8.5rem] xl:pb-[4rem] relative |  |  | `}>
            <img 
                src={founderImage} 
                alt="Louis Graham" 
                className={`w-[18rem] lg:w-[20rem] xl:w-[28rem] mx-auto md:mr-[53%] lg:mr-[57%] xl:mr-[61%] |  |  | `}
            />

            <div className={`pt-9 pb-7 md:px-12 w-11/12 max-w-[25rem] md:max-w-[32rem] lg:max-w-[40rem] xl:max-w-[52rem] md:ml-[31%] lg:ml-[35%] xl:ml-[32%] mx-auto inset-0 mt-[14.8rem] md:mt-[11rem] lg:mt-[9rem] xl:mt-[10rem] absolute | bg-primary-dark-purple text-neutral-white text-center md:text-left |  | `}>
                <h4 className={`pb-4 | text-[1.6rem] md:text-[2.8rem] lg:text-[3rem] xl:text-[3.7rem] font-fraunces font-normal xl:font-light |  | `}>
                    {testimonialTitle}
                </h4>

                <p className={`w-[85%] md:w-[99%] xl:w-[100%] mx-auto md:mx-0 mb-6 | text-base xl:text-lg font-manrope font-normal |  | `}>
                    {testimonialdesc}
                </p>

                <div className={`relative lg:py-2 |  |  | `}>
                    <Button text={testimonialButton} />

                    <img 
                        src={testimonialPattern} 
                        className={`hidden md:block xl:w-[38%] md:absolute md:inset-0 md:-top-[20%] xl:-top-[75%] md:left-[54%] lg:left-[63%] xl:left-[60%] |  |  | `}
                    />
                </div>
            </div>
        </section>
    )

}

export default Testimonial