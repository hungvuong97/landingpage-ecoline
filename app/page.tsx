import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Services from './components/Services';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="overflow-x-hidden w-full" suppressHydrationWarning>
      <main className="min-h-screen">
        <Header />
        <Hero />
        <Partners />
        <Services />
        <Features />
        <Pricing />
        <Testimonials />
        <About />
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
}
