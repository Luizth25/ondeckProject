export type TCheckBoxProps = {
  label: string;
  type: string;
  checked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
