export interface InputProps {
  onKeyPress?: (evt: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export interface AnimalData {
  type: string;
  id: number;
  url: string;
  title: string;
  description: string;
  image: string;
}