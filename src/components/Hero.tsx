import Button from "./Button"

const Hero = () => {

    return (
        <main className={`w-full pt-8 pb-[10.5rem] md:pb-[13rem] relative | text-center bg-primary-dark-purple | flex flex-col justify-center items-center | hero`}>
            <h1 className={`w-11/12 md:w-7/12 | text-5xl text-neutral-white font-fraunces font-medium leading-[3.5rem] |  | `}>
                Data <span className={` |  | border-b-[3px] border-b-primary-eucaplyptus | `}>tailored</span> to your needs.
            </h1>

            <div className={`mt-7 md:mt-8 mb-8 |  |  | `}>
                <Button text={"Learn more"} />
            </div>
        </main>
    )

}

export default Hero