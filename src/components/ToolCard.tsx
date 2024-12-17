import React from 'react';
import * as Icons from 'lucide-react';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
  onClick: (tool: Tool) => void;
}

export default function ToolCard({ tool, onClick }: ToolCardProps) {
  const Icon = (Icons as any)[tool.icon];

  return (
    <button
      onClick={() => onClick(tool)}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-left w-full"
    >
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-purple-100 rounded-lg">
          <Icon className="h-6 w-6 text-purple-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
          <p className="text-gray-600 mt-1">{tool.description}</p>
        </div>
      </div>
    </button>
  );
}