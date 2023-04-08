export type TInputProps = {
  label: string;
  placeholder: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  value?: string;
};
