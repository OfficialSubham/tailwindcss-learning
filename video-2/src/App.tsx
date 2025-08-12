import Badge from "./components/badge";
import Container from "./components/container";
import Hero from "./components/hero";
import HeroBottomTitle from "./components/heroBottomTitle";
import HeroButton from "./components/heroButton";
import HeroImage from "./components/heroImage";
import HeroSubtite from "./components/heroSubtite";
import HeroTitle from "./components/heroTitle";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] bg-linear-to-b from-white via-[#e0f2fe] to-white relative">
      <div className="max-w-4xl mx-auto absolute inset-0 h-full w-full">
        <div className="absolute inset-y-0 left-4 w-px bg-gradient-to-b from-neutral-200 to-transparent"></div>

        {/* Right gradient */}
        <div className="absolute inset-y-0 right-4 w-px bg-gradient-to-b from-neutral-200 to-transparent"></div>
      </div>
      <Container>
        <Navbar />
        <Hero>
          <Badge />
          <HeroTitle />
          <HeroSubtite />
          <HeroButton />
          <HeroBottomTitle />
        </Hero>
      </Container>
      <HeroImage />
    </div>
  );
}

export default App;
