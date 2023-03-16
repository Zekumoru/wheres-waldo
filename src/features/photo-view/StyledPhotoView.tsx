import styled from 'styled-components';

const StyledPhotoView = styled.div`
  height: 600px;
  overflow: auto;
  position: relative;

  > img {
    user-select: none;
  }
`;

export default StyledPhotoView;
