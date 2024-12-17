export const htmlEncode = (str: string): string => {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
};

export const htmlDecode = (str: string): string => {
  const div = document.createElement('div');
  div.innerHTML = str;
  return div.textContent || '';
};

export const beautifyHtml = (html: string): string => {
  let formatted = '';
  let indent = 0;
  
  html.split(/>\s*</).forEach(element => {
    if (element.match(/^\/\w/)) indent--;
    formatted += '\n' + '  '.repeat(indent) + '<' + element + '>';
    if (element.match(/^<?\w[^>]*[^\/]$/) && !element.startsWith('input')) indent++;
  });
  
  return formatted.substring(1);
};

export const minifyHtml = (html: string): string => {
  return html
    .replace(/\s+/g, ' ')
    .replace(/>\s+</g, '><')
    .replace(/"\s+/g, '"')
    .replace(/\s+"/g, '"')
    .trim();
};