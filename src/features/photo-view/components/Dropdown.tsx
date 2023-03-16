import StyledDropdown from './StyledDropdown';

type DropdownProps = {
  x: number;
  y: number;
  onSelect: (selection: string) => void;
};

const characters = ['Waldo', 'Odlaw', 'Wilma', 'Woof', 'Wizard Whitebeard'];

const Dropdown = ({ x, y, onSelect }: DropdownProps) => {
  return (
    <StyledDropdown x={x} y={y}>
      <ul>
        {characters.map((character) => (
          <li onClick={() => onSelect(character)} key={character}>
            {character}
          </li>
        ))}
      </ul>
    </StyledDropdown>
  );
};

export default Dropdown;
