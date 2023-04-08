export type TInputProps = {
  label: string;
  type: string;
  placeholder: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  value: string;
};
