import { Tool } from '../types';

export const tools: Tool[] = [
  {
    id: 'html-decode',
    name: 'HTML Decode',
    description: 'Convert HTML entities back to characters',
    icon: 'FileCode',
    category: 'HTML'
  },
  {
    id: 'html-encode',
    name: 'HTML Encode',
    description: 'Convert characters to HTML entities',
    icon: 'FileCode2',
    category: 'HTML'
  },
  {
    id: 'url-decode',
    name: 'URL Decode',
    description: 'Decode URL-encoded strings',
    icon: 'Link',
    category: 'Utilities'
  },
  {
    id: 'url-encode',
    name: 'URL Encode',
    description: 'Encode strings for use in URLs',
    icon: 'Link2',
    category: 'Utilities'
  },
  {
    id: 'html-beautifier',
    name: 'HTML Beautifier',
    description: 'Format and beautify HTML code',
    icon: 'FileCode',
    category: 'HTML'
  },
  {
    id: 'html-minifier',
    name: 'HTML Minifier',
    description: 'Minify HTML code',
    icon: 'FileCode2',
    category: 'HTML'
  },
  {
    id: 'css-beautifier',
    name: 'CSS Beautifier',
    description: 'Format and beautify CSS code',
    icon: 'Paintbrush',
    category: 'CSS'
  },
  {
    id: 'css-minifier',
    name: 'CSS Minifier',
    description: 'Minify CSS code',
    icon: 'Paintbrush2',
    category: 'CSS'
  },
  {
    id: 'js-beautifier',
    name: 'JavaScript Beautifier',
    description: 'Format and beautify JavaScript code',
    icon: 'FileJson',
    category: 'JavaScript'
  },
  {
    id: 'js-minifier',
    name: 'JavaScript Minifier',
    description: 'Minify JavaScript code',
    icon: 'FileJson2',
    category: 'JavaScript'
  },
  {
    id: 'js-deobfuscator',
    name: 'JavaScript DeObfuscator',
    description: 'Make obfuscated JavaScript readable',
    icon: 'FileCode',
    category: 'JavaScript'
  },
  {
    id: 'js-obfuscator',
    name: 'JavaScript Obfuscator',
    description: 'Obfuscate JavaScript code',
    icon: 'FileCode2',
    category: 'JavaScript'
  },
  {
    id: 'qr-decoder',
    name: 'QR Code Decoder',
    description: 'Read QR code contents',
    icon: 'QrCode',
    category: 'Utilities'
  },
  {
    id: 'qr-generator',
    name: 'QR Code Generator',
    description: 'Generate QR codes',
    icon: 'QrCode',
    category: 'Utilities'
  },
  {
    id: 'fb-id-finder',
    name: 'Find Facebook ID',
    description: 'Extract Facebook profile IDs',
    icon: 'Facebook',
    category: 'Utilities'
  },
  {
    id: 'uuid-generator',
    name: 'UUID Generator',
    description: 'Generate random UUIDs',
    icon: 'Key',
    category: 'Utilities'
  },
  {
    id: 'url-parser',
    name: 'URL Parser',
    description: 'Parse and analyze URLs',
    icon: 'Link',
    category: 'Utilities'
  },
  {
    id: 'utm-builder',
    name: 'UTM Builder',
    description: 'Create UTM tracking URLs',
    icon: 'Link2',
    category: 'Utilities'
  }
];