import React from 'react';
import { Wrench } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Wrench className="h-8 w-8" />
          <h1 className="text-2xl font-bold">DevTools Hub</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-purple-200 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-purple-200 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-purple-200 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}