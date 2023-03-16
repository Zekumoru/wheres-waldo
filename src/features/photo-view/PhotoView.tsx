import StyledPhotoView from './StyledPhotoView';
import waldo from '../../assets/images/waldo.jpg';
import { MouseEvent, useRef, useState } from 'react';
import Dropdown from './components/Dropdown';

type Coord = {
  x?: number;
  y?: number;
};

const PhotoView = () => {
  const [coord, setCoord] = useState<Coord>({});
  const imgRef = useRef<HTMLImageElement>(null);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target !== imgRef.current) {
      return;
    }

    if (typeof coord.x === 'number' && typeof coord.y === 'number') {
      setCoord({});
      return;
    }

    const { offsetX, offsetY } = e.nativeEvent;
    setCoord({ x: offsetX, y: offsetY });
  };

  return (
    <StyledPhotoView onClick={handleClick}>
      <img ref={imgRef} src={waldo} alt="Where's Waldo game" />
      {typeof coord.x === 'number' && typeof coord.y === 'number' && (
        <Dropdown x={coord.x} y={coord.y} />
      )}
    </StyledPhotoView>
  );
};

export default PhotoView;
