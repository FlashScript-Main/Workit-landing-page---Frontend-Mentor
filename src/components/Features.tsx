import { featureInfo } from "../constants"

const Features = () => {

    return (
        <section className={`-mt-48 pt-56 md:pt-[17rem] pb-52 | bg-primary-ghost-white | flex justify-center items-center | features`}>
            <ol>
                {featureInfo.map((item) => (
                    <li 
                        key={item.id} 
                        className={`mb-12 md:mx-auto md:w-[79.9%] |  | flex flex-col md:flex-row  | `}
                    >
                        <span className={`${item.id === 1 ? "px-[1.1rem] py-[0.5rem]" : "px-4 py-2"} mx-auto mb-4 md:my-auto | text-xl text-primary-dark-purple font-fraunces font-semibold | border border-primary-dark-purple rounded-full grid place-content-center | `}>
                            {item.listNumber}
                        </span>

                        <div className={`md:pl-8 | text-center md:text-left | flex flex-col gap-4 | `}>
                            <h3 className={` | text-2xl text-primary-dark-purple font-fraunces font-bold |  | `}>
                                {item.title}
                            </h3>

                            <p className={`w-11/12 mx-auto md:mx-0 | text-base text-primary-davys-grey font-medium font-manrope |  | `}>
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