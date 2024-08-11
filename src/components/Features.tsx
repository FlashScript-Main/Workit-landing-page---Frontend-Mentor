import { featureInfo } from "../constants"

const Features = () => {

    return (
        <section className={`-mt-48 pt-56 pb-52 | bg-primary-ghost-white | flex justify-center items-center | features`}>
            <ol>
                {featureInfo.map((item) => (
                    <li 
                        key={item.id} 
                        className={`mb-12 |  | flex flex-col | `}
                    >
                        <span className={`px-4 py-2 mx-auto mb-4 | text-xl text-primary-dark-purple font-fraunces font-semibold | border border-primary-dark-purple rounded-full grid place-content-center | `}>
                            {item.listNumber}
                        </span>

                        <div className={` | text-center | flex flex-col gap-4 | `}>
                            <h3 className={` | text-2xl text-primary-dark-purple font-fraunces font-bold |  | `}>
                                {item.title}
                            </h3>

                            <p className={`w-11/12 mx-auto | text-base text-primary-davys-grey font-medium font-manrope |  | `}>
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