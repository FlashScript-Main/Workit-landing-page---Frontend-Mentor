import { heroPatternLeft, heroPatternRight, phoneImage } from "./assets"
import { Features, FlashScript, Footer, Header, Hero, Testimonial,  } from "./components"

const App = () => {

    return (
        <div className="w-full">
            <section className={`w-full | bg-primary-dark-purple |  | `}>
                <Header />
            </section>

            <section className={`relative |  |  | `}>
                <Hero />

                <img 
                    src={phoneImage} 
                    alt="Phone Image"
                    className={`absolute m-auto -bottom-4 md:-bottom-8 left-0 right-0 w-[18rem] md:w-[22rem] z-20 |  |  | `}
                />

                <img 
                    src={heroPatternLeft} 
                    className={`hidden md:block absolute inset-0 md:-left-[11rem] md:top-[1rem] md:w-[18rem] z-20 |  |  | `}
                />

                <img 
                    src={heroPatternRight} 
                    className={`hidden md:block absolute md:-right-[5.5rem] md:top-[9rem] md:w-[10rem] z-20 |  |  | `}
                />
            </section>

            <Features />

            <Testimonial />

            <Footer />
            
            <FlashScript />
        </div>
    )

}

export default App