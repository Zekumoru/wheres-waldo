import StyledPhotoView from './StyledPhotoView';
import waldo from '../../assets/images/waldo.jpg';
import { MouseEvent, useState } from 'react';
import Dropdown from './components/Dropdown';
import useImageDragScrolling from './hooks/useImageDragScrolling';
import ICoord from '../../utils/coords.types';
import { useAppSelector } from '../../app/store';

const PhotoView = () => {
  const locations = useAppSelector(
    (state) => state.characterLocationReducer.locations
  );
  const [coord, setCoord] = useState<{
    [P in keyof ICoord]+?: ICoord[P];
  }>({});
  const [imgRef, imgContainerRef, dragging, setDragging] =
    useImageDragScrolling({
      overrideEndDrag: true,
    });

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (dragging) {
      setDragging(false);
      return;
    }

    if (e.target !== imgRef.current) return;
    if (typeof coord.x === 'number' && typeof coord.y === 'number') {
      setCoord({});
      return;
    }

    const { offsetX, offsetY } = e.nativeEvent;
    setCoord({ x: offsetX, y: offsetY });
  };

  const handleSelect = (selection: string) => {
    const location = locations.find((l) => l.name === selection);
    if (!location) throw new Error(`Missing solution for ${selection}`);

    // Distance formula: sqrt( (pX - cX)**2 + (pY - cY)**2 )
    const distance = Math.sqrt(
      (coord.x! - location.coords.x) ** 2 + (coord.y! - location.coords.y) ** 2
    );

    // If distance is within the radius then the clicked coord is inside
    if (distance <= location.radius) {
      console.log('Found!');
    } else {
      console.log('Nope...');
    }

    setCoord({});
  };

  return (
    <StyledPhotoView ref={imgContainerRef} onClick={handleClick}>
      <img ref={imgRef} src={waldo} alt="Where's Waldo game" />
      {typeof coord.x === 'number' && typeof coord.y === 'number' && (
        <Dropdown x={coord.x} y={coord.y} onSelect={handleSelect} />
      )}
    </StyledPhotoView>
  );
};

export default PhotoView;
