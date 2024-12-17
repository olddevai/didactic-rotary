import React, { useState } from 'react';
import { tools } from './data/tools';
import Header from './components/Header';
import ToolGrid from './components/ToolGrid';
import CategoryFilter from './components/CategoryFilter';
import ToolInterface from './components/ToolInterface';
import { Tool } from './types';
import { Search } from 'lucide-react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  const categories = ['All', 'HTML', 'CSS', 'JavaScript', 'Utilities'];

  const filteredTools = tools.filter(tool =>
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToolSelect = (tool: Tool) => {
    setSelectedTool(tool);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Developer Tools
          </h2>
          <p className="text-gray-600 max-w-2xl">
            A comprehensive collection of web development tools to help streamline your workflow.
            Choose from our wide range of utilities for HTML, CSS, JavaScript, and more.
          </p>
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
        </div>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <ToolGrid
          tools={filteredTools}
          category={selectedCategory}
          onToolSelect={handleToolSelect}
        />

        {selectedTool && (
          <ToolInterface
            tool={selectedTool}
            onClose={() => setSelectedTool(null)}
          />
        )}
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About DevTools Hub</h3>
              <p className="text-gray-400">
                Your one-stop destination for web development tools and utilities.
                Built with developers in mind.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tools</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <p className="text-gray-400">
                Follow us on social media for updates and new features.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} DevTools Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;