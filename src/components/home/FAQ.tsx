'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How does BirthdayTracker sync with my existing calendar?',
      answer: 'BirthdayTracker seamlessly integrates with Google Calendar, Outlook, Apple Calendar, and other popular calendar apps. Simply connect your account and all birthdays will automatically appear in your calendar with customizable reminders.'
    },
    {
      question: 'Can I share birthday lists with family members?',
      answer: 'Yes! With our Pro plan, you can create family groups and share birthday lists with other members. Everyone in the group can add, edit, and receive notifications for shared birthdays, making coordination effortless.'
    },
    {
      question: 'What types of reminders can I set?',
      answer: 'You can set multiple reminders for each birthday - from weeks in advance to the day of. Choose from email, SMS, push notifications, and in-app alerts. Customize timing, frequency, and message content for each reminder.'
    },
    {
      question: 'How does the AI gift suggestion feature work?',
      answer: 'Our AI analyzes the person\'s age, interests, past gift history, and current trends to suggest personalized gift ideas. You can also save gift ideas throughout the year and track what you\'ve given in previous years.'
    },
    {
      question: 'Is my data secure and private?',
      answer: 'Absolutely. We use enterprise-grade encryption for all data transmission and storage. Your contacts and personal information are never shared with third parties. You can export your data anytime and delete your account whenever you want.'
    },
    {
      question: 'Can I use BirthdayTracker offline?',
      answer: 'Yes! Our mobile app works offline and syncs when you\'re back online. You can view birthdays, add new ones, and receive reminders even without an internet connection.'
    },
    {
      question: 'What\'s included in the free plan?',
      answer: 'The free plan includes tracking up to 50 birthdays, basic email reminders, mobile app access, and simple gift tracking. It\'s perfect for personal use and includes all core features you need.'
    },
    {
      question: 'How do I import birthdays from other apps?',
      answer: 'BirthdayTracker supports importing from CSV files, Google Contacts, Facebook birthdays, and most other birthday apps. Our import wizard makes the process simple and ensures no birthdays are lost in the transition.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gray-950 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 mb-20">
          <div
            className="inline-flex items-center space-x-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full px-4 py-2">
            <span className="text-sm text-gray-400">Common questions</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white">
            Frequently asked
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              questions
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about BirthdayTracker
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index}
                 className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-900/50 transition-colors duration-200"
              >
                <h3 className="text-lg font-medium text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Still have questions?</p>
          <button className="relative group">
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-200"></div>
            <div
              className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-200">
              Contact Support
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export { FAQ };
