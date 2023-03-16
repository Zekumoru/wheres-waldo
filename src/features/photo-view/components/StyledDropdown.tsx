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
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  li {
    padding: 6px 8px;
    white-space: nowrap;
    cursor: pointer;

    &:hover {
      background-color: #282a2b;
    }
  }
`;

export default StyledDropdown;
