export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'HTML' | 'CSS' | 'JavaScript' | 'Utilities';
}