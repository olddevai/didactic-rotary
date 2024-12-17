export const beautifyCss = (css: string): string => {
  let formatted = '';
  let indent = 0;
  
  css.split(/[{}]/).forEach((fragment, i) => {
    if (i % 2 === 0) {
      if (fragment.trim().length > 0) {
        formatted += '  '.repeat(indent) + fragment.trim() + ' {\n';
        indent++;
      }
    } else {
      if (fragment.trim().length > 0) {
        const properties = fragment.trim().split(';').filter(prop => prop.trim().length > 0);
        properties.forEach(prop => {
          formatted += '  '.repeat(indent) + prop.trim() + ';\n';
        });
      }
      indent--;
      formatted += '  '.repeat(indent) + '}\n\n';
    }
  });
  
  return formatted;
};

export const minifyCss = (css: string): string => {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}:;,])\s*/g, '$1')
    .replace(/;\}/g, '}')
    .trim();
};