import "./App.css";
import HeroSec from "./components/HeroSec";
import LearnMoreSec from "./components/LearnMoreSec";
import egg from "./assets/images/desktop/image-transform.jpg";
import standOut from "./assets/images/desktop/image-stand-out.jpg";
import graphicDesign from "./assets/images/desktop/image-graphic-design.jpg";
import photography from "./assets/images/desktop/image-photography.jpg";
import DesignSec from "./components/DesignSec";
import TestimonialSec from "./components/TestimonialSec";
import ImageSec from "./components/ImageSec";
import FooterSec from "./components/FooterSec";

let data = [
  {
    title: "Transform your brand",
    para: "We are a full-service creative agency specialzing in helping brands grow fast.Engage your clients through compelling visuals that do most of the marketing for you.",
    sequence: "text-1",
    src: egg,
    color: "hsl(51,100%,49%)",
  },
  {
    title: "Stand out to the right audience",
    para: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.",
    sequence: "text-2",
    src: standOut,
    color: "hsl(7, 99%, 70%)",
  },
  {
    title: "Graphic Design",
    para: "Great design makes you memorable. We deliver artwork that underscores your brand message and capture potential clients' attention.",
    src: graphicDesign,
    color: "hsl(167, 40%, 24%)",
  },
  {
    title: "Photography",
    para: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
    src: photography,
    color: "hsl(198, 62%, 26%)",
  },
];

function App() {
  return (
    <div className="App">
      <HeroSec />
      <main>
        <LearnMoreSec
          title={data[0].title}
          para={data[0].para}
          sequence={data[0].sequence}
          src={data[0].src}
          color={data[0].color}
        />
        <LearnMoreSec
          title={data[1].title}
          para={data[1].para}
          sequence={data[1].sequence}
          src={data[1].src}
          color={data[1].color}
        />
        <div className="design-section">
          <DesignSec
            title={data[2].title}
            para={data[2].para}
            src={data[2].src}
            color={data[2].color}
          />

          <DesignSec
            title={data[3].title}
            para={data[3].para}
            src={data[3].src}
            color={data[3].color}
          />
        </div>
        <TestimonialSec />
        <ImageSec />
      </main>
      <FooterSec />
    </div>
  );
}

export default App;
