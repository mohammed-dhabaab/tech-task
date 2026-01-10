export interface cardTypes {
  readonly id: string;
  icon: string;
  name: string;
  details: string;
  checked?: boolean;
  onClick?: () => void;
}