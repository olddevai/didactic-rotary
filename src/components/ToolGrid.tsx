import React from 'react';
import { Tool } from '../types';
import ToolCard from './ToolCard';

interface ToolGridProps {
  tools: Tool[];
  category: string;
  onToolSelect: (tool: Tool) => void;
}

export default function ToolGrid({ tools, category, onToolSelect }: ToolGridProps) {
  const filteredTools = category === 'All' 
    ? tools 
    : tools.filter(tool => tool.category === category);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredTools.map(tool => (
        <ToolCard key={tool.id} tool={tool} onClick={onToolSelect} />
      ))}
    </div>
  );
}