import StyledPhotoView from './StyledPhotoView';
import waldo from '../../assets/images/waldo.jpg';

const PhotoView = () => {
  return (
    <StyledPhotoView>
      <img src={waldo} alt="Where's Waldo game" />
    </StyledPhotoView>
  );
};

export default PhotoView;
