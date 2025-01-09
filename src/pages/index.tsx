import Navigation from "../components/Navigation"
import Splash from "../components/Splash";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return(
    <main>
      <Navigation />
      <Splash />
      <Skills />
      <Projects />
      <Footer />
    </main>
  )
}