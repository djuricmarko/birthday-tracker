import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import Navbar from '~/components/home/Navbar';
import Hero from '~/components/home/Hero';
import Features from '~/components/home/Features';
import Pricing from '~/components/home/Pricing';
import FAQ from '~/components/home/FAQ';
import Footer from '~/components/home/Footer';

async function HomePage() {
  const { userId } = await auth();

  if (userId) {
    redirect('/birthdays');
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default HomePage;
