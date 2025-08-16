import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import { Navbar, Hero, Features, Pricing, FAQ, Footer } from '~/components/home';

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
