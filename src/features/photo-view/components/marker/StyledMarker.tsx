import styled from 'styled-components';

const StyledMarker = styled.div<{
  x: number;
  y: number;
  radius: number;
}>`
  position: absolute;
  left: ${({ x, radius }) => `${x - radius}px`};
  top: ${({ y, radius }) => `${y - radius}px`};
  width: ${({ radius }) => `${radius * 2}px`};
  height: ${({ radius }) => `${radius * 2}px`};
  background-color: transparent;
  pointer-events: none;
  border-radius: 100%;
  border: 8px solid black;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export default StyledMarker;
