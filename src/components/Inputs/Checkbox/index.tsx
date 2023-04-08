import { TCheckBoxProps } from "./types";
import * as s from "./styles";

const Checkbox = ({ label, type, checked, handleChange }: TCheckBoxProps) => (
  <s.CheckboxContainer>
    <s.Checkbox type={type} checked={checked} onChange={handleChange} />
    <s.label htmlFor="">{label}</s.label>
  </s.CheckboxContainer>
);

export default Checkbox;
