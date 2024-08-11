import { phoneImage } from "./assets"
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
                    className={`absolute m-auto bottom-0 left-0 right-0 w-72 z-20 |  |  | `}
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