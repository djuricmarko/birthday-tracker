import { ArrowRight, Calendar, Gift, Bell, Sparkles } from 'lucide-react';

function Hero() {
  return (
    <section className="min-h-screen bg-gray-950 flex items-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full px-4 py-2">
              <Sparkles className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-gray-300">Never miss a birthday again</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Track every
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  birthday
                </span>
                effortlessly
              </h1>
              <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
                Smart reminders, gift suggestions, and celebration planning.
                Keep your loved ones close with our beautiful, intuitive platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-200"></div>
                <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-2xl transition-all duration-200">
                  <span>Start for free</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </button>
              <button className="border border-gray-700 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-gray-600 hover:text-white hover:bg-gray-900/50 transition-all duration-200">
                Watch demo
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <Calendar className="h-5 w-5 text-blue-400" />
                <span className="text-sm">Smart sync</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Bell className="h-5 w-5 text-purple-400" />
                <span className="text-sm">Custom alerts</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Gift className="h-5 w-5 text-pink-400" />
                <span className="text-sm">Gift ideas</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-gray-700 transition-all duration-500">
              <img
                src="https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Birthday Tracker App Interface"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-4 shadow-2xl">
                <Calendar className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero };
