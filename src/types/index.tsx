import { ReactNode } from "react";

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

export interface ApiInterface {
  get: () => Promise<AnimalData[]>;
}

export interface ApiProps {
  animals: ApiInterface;
}

export interface ApiProviderProps {
  children: ReactNode;
}

export enum SearchState {
  EMPTY,
  INVALID
}

export interface Result {
  type: string;
  id: number;
  url: string;
  title: string;
  description: string;
  image: string;
}

export interface EmptyStateProps {
  state: SearchState;
  text: string | undefined;
}

export interface PreviewProps {
  result: Result;
  onSelectItem: (value: Result | null) => void;
}