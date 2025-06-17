import { redirect } from 'next/navigation';
import { SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { Cake, Calendar } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';

const navLinkClasses = 'text-muted-foreground hover:text-foreground transition-colors story-link';
const blueIconContainerClasses = 'bg-blue-100 rounded-lg p-2';
const orangeIconContainerClasses = 'bg-orange-100 rounded-lg p-2';
const blueIconClasses = 'text-blue-600';
const orangeIconClasses = 'text-orange-600';
const gradientTextClasses = 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent';
const primaryButtonGradient = 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700';

async function HomePage() {
  const { userId } = await auth();

  if (userId) {
    redirect('/birthdays');
  }

  return (
    <div className={cn('min-h-screen')}>
      <header className={cn(
        'fixed top-0 w-full z-50',
        'bg-white/80 backdrop-blur-md border-b border-border'
      )}>
        <div className={cn('container mx-auto px-6')}>
          <div className={cn('flex items-center justify-between h-16')}>
            <div className={cn('flex items-center gap-3')}>
              <div className={cn('flex items-center gap-1')}>
                <div className={blueIconContainerClasses}>
                  <Calendar className={cn('w-5 h-5', blueIconClasses)}/>
                </div>
                <div className={orangeIconContainerClasses}>
                  <Cake className={cn('w-5 h-5', orangeIconClasses)}/>
                </div>
              </div>
              <span className={cn('text-xl font-bold', gradientTextClasses)}>
                Birthday Tracker
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className={navLinkClasses}>
                Features
              </a>
              <a href="#testimonials" className={navLinkClasses}>
                Testimonials
              </a>
              <a href="#pricing" className={navLinkClasses}>
                Pricing
              </a>
            </nav>
            <div className={cn('flex items-center gap-4')}>
              <SignedOut>
                <SignInButton>
                  <Button variant="ghost" className={cn('hidden sm:block')}>
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button className={cn(primaryButtonGradient, 'text-white rounded-full px-6')}>
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
          className={cn(
            'relative min-h-screen flex items-center justify-center overflow-hidden',
            'bg-gradient-to-br from-blue-50 via-white to-orange-50'
          )}>
          <div className={cn('absolute inset-0 overflow-hidden')}>
            <div className={cn(
              'absolute -top-40 -right-40 w-80 h-80',
              'bg-orange-200 rounded-full opacity-20 animate-pulse'
            )}/>
            <div
              className={cn(
                'absolute -bottom-40 -left-40 w-80 h-80',
                'bg-blue-200 rounded-full opacity-20 animate-pulse'
              )}
              style={{ animationDelay: '1s' }}
            />
          </div>
          <div className={cn('container mx-auto px-6 relative z-10')}>
            <div className={cn('text-center max-w-4xl mx-auto')}>
              <div className={cn('flex justify-center items-center gap-3 mb-6')}>
                <div className={cn('p-3 rounded-full', 'bg-blue-100')}>
                  <Calendar className={cn('w-8 h-8', blueIconClasses)}/>
                </div>
                <div className={cn('p-3 rounded-full', 'bg-orange-100')}>
                  <Cake className={cn('w-8 h-8', orangeIconClasses)}/>
                </div>
              </div>
              <h1
                className={cn(
                  'text-5xl md:text-7xl font-bold mb-6 animate-fade-in',
                  'bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent'
                )}>
                Never Miss a Birthday Again
              </h1>
              <p
                className={cn(
                  'text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in'
                )}
                style={{ animationDelay: '0.2s' }}>
                Keep track of all your loved ones&#39; special days with smart reminders, gift suggestions, and
                meaningful connections.
              </p>
              <div
                className={cn(
                  'flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in'
                )}
                style={{ animationDelay: '0.4s' }}
              >
                <Button
                  size="lg"
                  className={cn(
                    primaryButtonGradient,
                    'text-white px-8 py-4 text-lg rounded-full',
                    'shadow-lg hover:shadow-xl transition-all duration-300 hover-scale'
                  )}
                >
                  Start Tracking Birthdays
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className={cn(
                    'px-8 py-4 text-lg rounded-full border-2',
                    'hover:bg-muted transition-all duration-300 hover-scale'
                  )}
                >
                  Watch Demo
                </Button>
              </div>
              <div
                className={cn('mt-12 animate-fade-in')}
                style={{ animationDelay: '0.6s' }}
              >
                <p className={cn('text-sm text-muted-foreground mb-4')}>
                  Trusted by thousands of families worldwide
                </p>
                <div className={cn('flex justify-center items-center gap-8 opacity-60')}>
                  <div className={cn('text-2xl font-bold')}>10K+</div>
                  <div className={cn('text-2xl font-bold')}>50K+</div>
                  <div className={cn('text-2xl font-bold')}>99.9%</div>
                </div>
                <div className={cn('flex justify-center items-center gap-8 text-xs text-muted-foreground')}>
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
