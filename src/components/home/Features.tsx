import { Calendar, Bell, Gift, Users, Smartphone, Zap } from 'lucide-react';

function Features() {
  const features = [
    {
      icon: Calendar,
      title: "Smart Calendar Sync",
      description: "Seamlessly integrates with your existing calendar apps. View all birthdays with beautiful visual indicators.",
      image: "https://images.pexels.com/photos/7947858/pexels-photo-7947858.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Bell,
      title: "Intelligent Reminders",
      description: "Custom timing with email, SMS, and push notifications. Never miss another important date.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Gift,
      title: "AI Gift Suggestions",
      description: "Personalized recommendations based on interests and history. Make every gift meaningful.",
      image: "https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Users,
      title: "Family Networks",
      description: "Organize contacts into groups. Share birthday lists for coordinated celebrations.",
      image: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Beautiful mobile experience with offline sync. Manage birthdays anywhere, anytime.",
      image: "https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Zap,
      title: "Quick Actions",
      description: "Send wishes instantly through social media, SMS, or email with smart templates.",
      image: "https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-950 relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center space-x-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full px-4 py-2">
            <span className="text-sm text-gray-400">Powerful features</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white">
            Everything you need to
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              celebrate better
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive tools that make birthday tracking effortless and celebration planning a joy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 hover:bg-gray-900/50 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 p-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl">
                  <feature.icon className="h-6 w-6 text-blue-400" />
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Features };
