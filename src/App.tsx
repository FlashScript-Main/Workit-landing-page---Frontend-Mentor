import { Features, FlashScript, Footer, Header, Hero, Testimonial,  } from "./components"

const App = () => {

    return (
        <div className="min-h-screen w-full bg-neutral-eggshell grid place-content-center">
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