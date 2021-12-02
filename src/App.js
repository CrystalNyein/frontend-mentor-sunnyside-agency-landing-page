import "./App.css";
import HeroSec from "./components/HeroSec";
import LearnMoreSec from "./components/LearnMoreSec";
import egg from "./assets/images/desktop/image-transform.jpg";
import standOut from "./assets/images/desktop/image-stand-out.jpg";

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
];

function App() {
  return (
    <div className="App">
      <HeroSec />
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
    </div>
  );
}

export default App;
