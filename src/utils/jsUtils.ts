export const beautifyJs = (js: string): string => {
  let formatted = '';
  let indent = 0;
  let inString = false;
  let stringChar = '';
  
  for (let i = 0; i < js.length; i++) {
    const char = js[i];
    
    if (char === '"' || char === "'" || char === '`') {
      if (!inString) {
        inString = true;
        stringChar = char;
      } else if (stringChar === char && js[i - 1] !== '\\') {
        inString = false;
      }
    }
    
    if (!inString) {
      if (char === '{' || char === '[') {
        formatted += char + '\n' + '  '.repeat(++indent);
      } else if (char === '}' || char === ']') {
        formatted += '\n' + '  '.repeat(--indent) + char;
      } else if (char === ';') {
        formatted += char + '\n' + '  '.repeat(indent);
      } else if (char === '\n') {
        formatted += '\n' + '  '.repeat(indent);
      } else {
        formatted += char;
      }
    } else {
      formatted += char;
    }
  }
  
  return formatted;
};

export const minifyJs = (js: string): string => {
  return js
    .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1')
    .replace(/\s+/g, ' ')
    .replace(/{\s+/g, '{')
    .replace(/}\s+/g, '}')
    .replace(/;\s+/g, ';')
    .replace(/,\s+/g, ',')
    .trim();
};

export const obfuscateJs = (js: string): string => {
  // Simple obfuscation for demonstration
  const varPrefix = '_' + Math.random().toString(36).substr(2, 9);
  let varCounter = 0;
  const varMap = new Map();
  
  return js.replace(/\b(?:let|const|var)\s+(\w+)\b/g, (_, name) => {
    if (!varMap.has(name)) {
      varMap.set(name, `${varPrefix}${varCounter++}`);
    }
    return `var ${varMap.get(name)}`;
  }).replace(/\b(\w+)\b/g, (match) => {
    return varMap.get(match) || match;
  });
};

export const deobfuscateJs = (js: string): string => {
  // Basic deobfuscation - formats the code
  return beautifyJs(js);
};