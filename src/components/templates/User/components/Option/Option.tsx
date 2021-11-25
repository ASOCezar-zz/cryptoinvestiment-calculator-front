import { Checkbox, Item, Label } from './styles';

type OptionProps = {
  handleChange: () => void;
  option?: string;
  defaultChecked?: boolean;
};

export default function Option({ option, handleChange, defaultChecked = false }: OptionProps) {
  return (
    <Item>
      <Checkbox id={option} defaultChecked={defaultChecked} type="radio" name="drone" onChange={handleChange} />
      <Label htmlFor={option}>{option}</Label>
    </Item>
  );
}
