import { useAppSelector } from '../../../../app/store';
import StyledDropdown from './StyledDropdown';

type DropdownProps = {
  x: number;
  y: number;
  selectedNames?: string[];
  onSelect: (selection: string) => void;
};

const Dropdown = ({ x, y, onSelect, selectedNames }: DropdownProps) => {
  const characters = useAppSelector(
    (state) => state.characterLocationReducer.locations
  ).map((location) => location.name);

  return (
    <StyledDropdown x={x} y={y}>
      <ul>
        {characters.map((character) => {
          const isAlreadySelected = selectedNames?.includes(character) ?? false;

          return (
            <li
              className={`${isAlreadySelected ? 'selected' : ''}`}
              onClick={() => {
                if (isAlreadySelected) return;
                onSelect(character);
              }}
              key={character}
            >
              {character}
            </li>
          );
        })}
      </ul>
    </StyledDropdown>
  );
};

export default Dropdown;
