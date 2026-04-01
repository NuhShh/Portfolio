import Divider from "./components/divider"
import AboutMe from "./components/home/about-me"
import Education from "./components/home/education"
import Experience from "./components/home/experience"
import FeaturedWork from "./components/home/featured-work"
import HeroSection from "./components/home/hero-section"
import ProjectOverview from "./components/home/project-overview"
import Certifications from "./components/home/certifications"

const page = () => {
  return (
    <main>
      <HeroSection/>
      <Divider/>
      <AboutMe/>
      <Divider/>
      <Experience/>
      <Divider/>
      <Education/>
      <Divider/>
      <FeaturedWork/>
      <Divider/>
      <Certifications/>
      <Divider/>
    </main>
  )
}

export default page