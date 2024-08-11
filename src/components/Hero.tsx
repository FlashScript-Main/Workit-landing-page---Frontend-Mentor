import Button from "./Button"

const Hero = () => {

    return (
        <main className={`w-full pt-8 pb-[11.5rem] relative | text-center bg-primary-dark-purple | flex flex-col justify-center items-center | wave-shape`}>
            <h1 className={`w-11/12 | text-5xl text-neutral-white font-fraunces font-medium leading-[3.5rem] |  | `}>
                Data <span className={` |  | border-b-[3px] border-b-primary-eucaplyptus | `}>tailored</span> to your needs.
            </h1>

            <div className={`mt-7 mb-8 |  |  | `}>
                <Button text={"Learn more"} />
            </div>
        </main>
    )

}

export default Hero