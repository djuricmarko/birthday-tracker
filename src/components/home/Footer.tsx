import { Calendar, Mail, Phone, MapPin, Twitter, Github, Linkedin, Youtube } from 'lucide-react';

function Footer() {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const footerSections = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'Security', 'Updates', 'Mobile App'],
    },
    {
      title: 'Support',
      links: ['Help Center', 'Contact Us', 'API Docs', 'System Status', 'Bug Reports'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Blog', 'Careers', 'Press Kit', 'Partners'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Licenses'],
    },
  ];

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-75"></div>
                <div className="relative p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
              </div>
              <span className="text-xl font-semibold text-white">BirthdayTracker</span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Never miss a birthday again. Keep your loved ones close with smart reminders,
              gift suggestions, and celebration planning tools.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail className="h-4 w-4" />
                <span>hello@birthdaytracker.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-8 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-400">Get the latest features and birthday celebration tips.</p>
            </div>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-200"></div>
                <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg text-white font-medium">
                  Subscribe
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2025 BirthdayTracker. All rights reserved.
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="p-2 bg-gray-900 border border-gray-800 rounded-lg hover:border-gray-700 hover:bg-gray-800 transition-all duration-200"
              >
                <social.icon className="h-4 w-4 text-gray-400 hover:text-white transition-colors duration-200" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
