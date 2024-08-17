import { featureInfo } from "../constants"

const Features = () => {

    return (
        <section className={`-mt-48 pt-56 md:pt-[17rem] pb-48 | bg-primary-ghost-white | flex justify-center items-center | features`}>
            <ol className={`lg:max-w-7xl mt-2 lg:mt-12 |  | lg:flex lg:justify-center lg:items-center | `}>
                {featureInfo.map((item) => (
                    <li 
                        key={item.id} 
                        className={`mb-12 md:mx-auto md:w-[79.9%] |  | flex flex-col md:flex-row lg:flex-col lg:basis-1/3 | slide-in-left slide-in-left-${item.id}`}
                    >
                        <span className={`${item.id === 1 ? "px-[1.1rem] py-[0.5rem]" : "px-4 py-2"} mx-auto mb-4 md:my-auto | text-xl lg:text-2xl text-primary-dark-purple font-fraunces font-semibold | border border-primary-dark-purple rounded-full grid place-content-center | `}>
                            {item.listNumber}
                        </span>

                        <div className={`md:pl-8 lg:pl-0 lg:pt-14 | text-center md:text-left lg:text-center | flex flex-col gap-4 lg:gap-8 | `}>
                            <h3 className={` | text-2xl lg:text-3xl text-primary-dark-purple font-fraunces font-bold lg:font-semibold |  | `}>
                                {item.title}
                            </h3>

                            <p className={`w-11/12 lg:h-36 mx-auto md:mx-0 lg:mx-auto | text-base lg:text-lg text-primary-davys-grey lg:text-primary-dark-purple font-manrope font-medium lg:font-semibold |  | `}>
                                {item.desc}
                            </p>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    )

}

export default Features