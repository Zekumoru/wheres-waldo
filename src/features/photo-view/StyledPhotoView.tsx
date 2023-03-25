import styled from 'styled-components';

const StyledPhotoView = styled.div`
  height: 600px;
  overflow: auto;
  position: relative;
  border-radius: 4px;

  // Hide scrollbars
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  > img {
    user-select: none;
  }
`;

export default StyledPhotoView;
