import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Team from './sections/Team';
// import Programs from './sections/Programs';
// import Impact from './sections/Impact';
// import Partners from './sections/Partners';
import Infrastructure from './sections/Infrastructure';
// import GetInvolved from './sections/GetInvolved';
import Donation from './sections/Donation';
import Gallery from './sections/Gallery';
// import News from './sections/News';
import Contact from './sections/Contact';
// import Downloads from './sections/Downloads';
// import Transparency from './sections/Transparency';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Team />
        {/* <Programs /> */}
        {/* <Impact /> */}
        {/* <Partners /> */}
        <Infrastructure />
        {/* <GetInvolved /> */}
        <Donation />
        <Gallery />
        {/* <News /> */}
        <Contact />
        {/* <Downloads /> */}
        {/* <Transparency /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
