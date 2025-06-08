import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Clients from '@/components/sections/Clients';
import Categories from '@/components/sections/Categories';
import Headliners from '@/components/sections/Headliners';
import Events from '@/components/sections/Events';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import Search from '@/components/sections/Search';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Clients />
      <Categories />
      <Headliners />
      <Search />
      <Events />
      <Contact />
      <Footer />
    </main>
  );
}
