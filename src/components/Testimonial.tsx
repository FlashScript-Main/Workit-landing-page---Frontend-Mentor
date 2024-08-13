import { founderImage } from "../assets"
import { testimonialButton, testimonialdesc, testimonialTitle } from "../constants"
import Button from "./Button"

const Testimonial = () => {

    return (
        <section className={`-mt-28 pb-[17.7rem] relative |  |  | `}>
            <img 
                src={founderImage} 
                alt="Louis Graham" 
                className={`w-[18rem] mx-auto |  |  | `}
            />

            <div className={`pt-9 pb-7 w-11/12 mx-auto inset-0 mt-[14.8rem] absolute | bg-primary-dark-purple text-neutral-white text-center |  | `}>
                <h4 className={`pb-4 | text-[1.6rem] font-fraunces font-normal |  | `}>
                    {testimonialTitle}
                </h4>

                <p className={`w-[85%] mx-auto mb-6 | text-base font-manrope font-normal |  | `}>
                    {testimonialdesc}
                </p>

                <div>
                    <Button text={testimonialButton} />
                </div>
            </div>
        </section>
    )

}

export default Testimonial