import { useAppSelector } from '../../../app/store';
import StyledDropdown from './StyledDropdown';

type DropdownProps = {
  x: number;
  y: number;
  onSelect: (selection: string) => void;
};

const Dropdown = ({ x, y, onSelect }: DropdownProps) => {
  const characters = useAppSelector(
    (state) => state.characterLocationReducer.locations
  ).map((location) => location.name);

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
