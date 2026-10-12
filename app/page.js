import Nav from '@/components/Nav';
import HeroSequence from '@/components/HeroSequence';
import Overview from '@/components/Overview';
import FloorPlans from '@/components/FloorPlans';
import Amenities from '@/components/Amenities';
import ProjectSpecs from '@/components/ProjectSpecs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSequence />
      <Reveal><Overview /></Reveal>
      <Reveal><FloorPlans /></Reveal>
      <Reveal><Amenities /></Reveal>
      <Reveal><ProjectSpecs /></Reveal>
      <Reveal><Contact /></Reveal>
      <Footer />
    </>
  );
}
