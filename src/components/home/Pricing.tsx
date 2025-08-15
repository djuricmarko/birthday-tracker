import React from 'react';
import { Check, Zap, Crown, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: 0,
      period: "forever",
      description: "Perfect for personal use",
      icon: Zap,
      features: [
        "Up to 50 birthdays",
        "Basic reminders",
        "Mobile app access",
        "Email notifications",
        "Simple gift tracking"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: 9.99,
      period: "month",
      description: "Best for families and groups",
      icon: Crown,
      features: [
        "Unlimited birthdays",
        "Advanced reminders",
        "SMS notifications",
        "AI gift suggestions",
        "Family sharing",
        "Calendar integration",
        "Custom templates",
        "Priority support"
      ],
      buttonText: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: 29.99,
      period: "month",
      description: "For organizations and teams",
      icon: Star,
      features: [
        "Everything in Pro",
        "Team management",
        "Advanced analytics",
        "Custom integrations",
        "White-label options",
        "Dedicated support",
        "SSO authentication",
        "API access"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-950 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center space-x-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full px-4 py-2">
            <span className="text-sm text-gray-400">Simple pricing</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white">
            Choose your
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              perfect plan
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Start free and upgrade as you need. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-gray-900/30 backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-300 hover:bg-gray-900/50 ${
              plan.popular 
                ? 'border-blue-500/50 ring-1 ring-blue-500/20 scale-105' 
                : 'border-gray-800 hover:border-gray-700'
            }`}>
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-gray-700 rounded-xl">
                    <plan.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                    <p className="text-sm text-gray-400">{plan.description}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                </div>

                <button className={`w-full py-3 rounded-xl font-medium transition-all duration-200 mb-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25' 
                    : 'border border-gray-700 text-gray-300 hover:border-gray-600 hover:text-white hover:bg-gray-800/50'
                }`}>
                  {plan.buttonText}
                </button>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 space-y-4">
          <p className="text-gray-400">All plans include 30-day money-back guarantee</p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
            <span>✓ 24/7 support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
