import React from 'react';
import { Code, Mail, ExternalLink, Award } from 'lucide-react';

const FACTS = [
  "India's first general election in 1951-52 took four months to complete.",
  "The Election Commission of India operates a polling station in Gir Forest for just one voter.",
  "In the 2019 General Elections, over 600 million people voted, making it the largest democratic exercise in history.",
  "NOTA (None of the Above) was introduced as a voting option in India in 2013.",
  "Electronic Voting Machines (EVMs) were first used experimentally in the 1982 Kerala assembly elections."
];

export function Footer() {
  const randomFact = FACTS[Math.floor(Math.random() * FACTS.length)];

  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Facts Section */}
        <div className="mb-16 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-6">
          <div className="bg-blue-50 p-4 rounded-2xl">
            <Award className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-1">Election Fact</h3>
            <p className="text-xl text-gray-700 italic">"{randomFact}"</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Election Assistant</h2>
            <p className="text-gray-500 max-w-xs">
              Empowering citizens with accurate information and a simple way to check voting eligibility.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-500 hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="/eligible" className="text-gray-500 hover:text-blue-600 transition-colors">Eligibility Check</a></li>
              <li><a href="/docs" className="text-gray-500 hover:text-blue-600 transition-colors">Important Documents</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Developer</h3>
            <div className="space-y-3">
              <p className="text-gray-900 font-medium">Mitansh Jadhav</p>
              <div className="flex flex-col space-y-2">
                <a href="mailto:mitansh.jadhav2007@gmail.com" className="flex items-center text-gray-500 hover:text-blue-600 transition-colors group">
                  <Mail className="w-4 h-4 mr-2" />
                  mitansh.jadhav2007@gmail.com
                </a>
                <a href="https://github.com/mitanshhh" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-500 hover:text-blue-600 transition-colors group">
                  <Code className="w-4 h-4 mr-2" />
                  github.com/mitanshhh
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Election Assistant. Built for democracy.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
