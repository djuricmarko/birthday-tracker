import { redirect } from 'next/navigation';
import { SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { Cake } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Calendar } from 'lucide-react';

async function HomePage() {
  const { userId } = await auth();

  if (userId) {
    redirect('/birthdays');
  }

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Calendar className="w-5 h-5 text-blue-600"/>
                </div>
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Cake className="w-5 h-5 text-orange-600"/>
                </div>
              </div>
              <span
                className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
              Birthday Tracker
            </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors story-link">
                Features
              </a>
              <a href="#testimonials"
                 className="text-muted-foreground hover:text-foreground transition-colors story-link">
                Testimonials
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors story-link">
                Pricing
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <SignedOut>
                <SignInButton>
                  <Button variant="ghost" className="hidden sm:block">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6">
                    Get Started
                  </Button>
                </SignUpButton>
              </SignedOut>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section
          className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full opacity-20 animate-pulse"/>
            <div
              className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 animate-pulse"
              style={{ animationDelay: '1s' }}
            />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Calendar className="w-8 h-8 text-blue-600"/>
                </div>
                <div className="p-3 bg-orange-100 rounded-full">
                  <Cake className="w-8 h-8 text-orange-600"/>
                </div>
              </div>
              <h1
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent mb-6 animate-fade-in">
                Never Miss a Birthday Again
              </h1>
              <p
                className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in"
                style={{ animationDelay: '0.2s' }}>
                Keep track of all your loved ones&#39; special days with smart reminders, gift suggestions, and
                meaningful connections.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
                style={{ animationDelay: '0.4s' }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
                >
                  Start Tracking Birthdays
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg rounded-full border-2 hover:bg-muted transition-all duration-300 hover-scale"
                >
                  Watch Demo
                </Button>
              </div>
              <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <p className="text-sm text-muted-foreground mb-4">Trusted by thousands of families worldwide</p>
                <div className="flex justify-center items-center gap-8 opacity-60">
                  <div className="text-2xl font-bold">10K+</div>
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-2xl font-bold">99.9%</div>
                </div>
                <div className="flex justify-center items-center gap-8 text-xs text-muted-foreground">
                  <div>Active Users</div>
                  <div>Birthdays Tracked</div>
                  <div>Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
