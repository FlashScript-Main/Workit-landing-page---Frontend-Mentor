import { founderImage, testimonialPattern } from "../assets"
import { testimonialButton, testimonialdesc, testimonialTitle } from "../constants"
import Button from "./Button"

const Testimonial = () => {

    return (
        <section className={`-mt-24 md:-mt-10 pb-[17.7rem] md:pb-[13.5rem] relative |  |  | `}>
            <img 
                src={founderImage} 
                alt="Louis Graham" 
                className={`w-[18rem] mx-auto md:mr-[53%] |  |  | `}
            />

            <div className={`pt-9 pb-7 md:px-12 w-11/12 max-w-[25rem] md:max-w-[32rem] md:ml-[31%] mx-auto inset-0 mt-[14.8rem] md:mt-[11rem] absolute | bg-primary-dark-purple text-neutral-white text-center md:text-left |  | `}>
                <h4 className={`pb-4 | text-[1.6rem] md:text-[2.8rem] font-fraunces font-normal |  | `}>
                    {testimonialTitle}
                </h4>

                <p className={`w-[85%] md:w-[99%] mx-auto md:mx-0 mb-6 | text-base font-manrope font-normal |  | `}>
                    {testimonialdesc}
                </p>

                <div className={`relative |  |  | `}>
                    <Button text={testimonialButton} />

                    <img 
                        src={testimonialPattern} 
                        className={`hidden md:block md:absolute md:inset-0 md:-top-[20%] md:left-[54%] |  |  | `}
                    />
                </div>
            </div>
        </section>
    )

}

export default Testimonial