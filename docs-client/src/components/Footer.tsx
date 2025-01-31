import React from 'react';
import { Coffee, Mail, Linkedin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <Coffee className="w-8 h-8 text-[#C0A080]" />
            <span className="text-2xl font-bold">CAFF-E</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Mail className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Globe className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400 text-center">
            Join us in redefining the future of coffee! ☕🚀
          </p>
        </div>
      </div>
    </footer>
  );
}