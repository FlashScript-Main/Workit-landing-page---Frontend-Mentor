import Button from "./Button"

const Hero = () => {

    return (
        <main className={`w-full pt-8 pb-[10.5rem] md:pb-[13rem] lg:pb-[17rem] xl:pb-[21rem] relative | text-center bg-primary-dark-purple | flex flex-col justify-center items-center | hero`}>
            <h1 className={`w-11/12 md:w-7/12 lg:w-[40%] | text-5xl lg:text-[4rem] xl:text-[4.5rem] text-neutral-white font-fraunces font-medium leading-[3.5rem] lg:leading-[4rem] xl:leading-[4.7rem] |  | `}>
                Data <span className={` |  | border-b-[3px] border-b-primary-eucaplyptus | `}>tailored</span><br className={`md:max-lg:hidden |  |  | `} /> to <br className={`max-md:hidden lg:hidden |  |  | `} /> your needs.
            </h1>

            <div className={`mt-7 md:mt-8 lg:mt-10 mb-8 |  |  | `}>
                <Button text={"Learn more"} />
            </div>
        </main>
    )

}

export default Hero