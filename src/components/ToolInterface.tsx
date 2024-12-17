import React, { useState } from 'react';
import { Tool } from '../types';
import * as htmlUtils from '../utils/htmlUtils';
import * as cssUtils from '../utils/cssUtils';
import * as jsUtils from '../utils/jsUtils';
import * as urlUtils from '../utils/urlUtils';
import * as qrUtils from '../utils/qrUtils';
import * as miscUtils from '../utils/miscUtils';
import { X } from 'lucide-react';

interface ToolInterfaceProps {
  tool: Tool;
  onClose: () => void;
}

export default function ToolInterface({ tool, onClose }: ToolInterfaceProps) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const processInput = async () => {
    setError('');
    try {
      let result = '';
      
      switch (tool.id) {
        case 'html-decode':
          result = htmlUtils.htmlDecode(input);
          break;
        case 'html-encode':
          result = htmlUtils.htmlEncode(input);
          break;
        case 'url-decode':
          result = urlUtils.decodeUrl(input);
          break;
        case 'url-encode':
          result = urlUtils.encodeUrl(input);
          break;
        case 'html-beautifier':
          result = htmlUtils.beautifyHtml(input);
          break;
        case 'html-minifier':
          result = htmlUtils.minifyHtml(input);
          break;
        case 'css-beautifier':
          result = cssUtils.beautifyCss(input);
          break;
        case 'css-minifier':
          result = cssUtils.minifyCss(input);
          break;
        case 'js-beautifier':
          result = jsUtils.beautifyJs(input);
          break;
        case 'js-minifier':
          result = jsUtils.minifyJs(input);
          break;
        case 'js-deobfuscator':
          result = jsUtils.deobfuscateJs(input);
          break;
        case 'js-obfuscator':
          result = jsUtils.obfuscateJs(input);
          break;
        case 'qr-generator':
          result = await qrUtils.generateQR(input);
          break;
        case 'uuid-generator':
          result = miscUtils.generateUuid();
          break;
        case 'url-parser':
          result = JSON.stringify(urlUtils.parseUrl(input), null, 2);
          break;
        case 'fb-id-finder':
          result = miscUtils.extractFacebookId(input);
          break;
        default:
          throw new Error('Tool not implemented');
      }
      
      setOutput(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="p-4 bg-purple-600 text-white flex justify-between items-center">
          <h2 className="text-xl font-semibold">{tool.name}</h2>
          <button onClick={onClose} className="p-1 hover:bg-purple-700 rounded">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Input
              </label>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full h-40 p-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Enter your input here..."
              />
            </div>
            
            <div className="flex justify-center">
              <button
                onClick={processInput}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Process
              </button>
            </div>
            
            {error && (
              <div className="p-3 bg-red-100 text-red-700 rounded-lg">
                {error}
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Output
              </label>
              {tool.id === 'qr-generator' ? (
                <div className="flex justify-center">
                  {output && <img src={output} alt="Generated QR Code" className="max-w-xs" />}
                </div>
              ) : (
                <textarea
                  value={output}
                  readOnly
                  className="w-full h-40 p-3 border rounded-lg bg-gray-50"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}