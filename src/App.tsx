import { Features, FlashScript, Footer, Header, Hero, Testimonial,  } from "./components"

const App = () => {

    return (
        <div className="w-full bg-primary-dark-purple grid place-content-center">
            <Header />

            <Hero />

            <Features />

            <Testimonial />

            <Footer />
            
            <FlashScript />
        </div>
    )

}

export default App