import Navbar from "./component/navbar"
import Card from "./component/card"
import Main from "./component/main"
import About from "./component/about/about"
import Footer from "./component/footer"
export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="flex justify-center bg-white">
                <Main />
            </div>
            
            <div className="flex justify-center bg-base-100">
                <About />
            </div>

            <div className="flex justify-center bg-base-100">
                <Footer />
            </div>
        </div>

    )
}