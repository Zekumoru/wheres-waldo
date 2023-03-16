import styled from 'styled-components';

const StyledDropdown = styled.div<{
  x: number;
  y: number;
}>`
  position: absolute;
  left: ${({ x }) => `${x}px`};
  top: ${({ y }) => `${y}px`};
  background-color: #18191a;
  color: #e6e6e6;
`;

type DropdownProps = {
  x: number;
  y: number;
};

const Dropdown = ({ x, y }: DropdownProps) => {
  return (
    <StyledDropdown x={x} y={y}>
      Hello world!
    </StyledDropdown>
  );
};

export default Dropdown;
