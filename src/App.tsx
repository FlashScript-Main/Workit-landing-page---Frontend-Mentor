import { Features, FlashScript, Footer, Header, Hero, Testimonial,  } from "./components"

const App = () => {

    return (
        <div className="w-full bg-primary-dark-purple">
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