import StyledPhotoView from './StyledPhotoView';
import waldo from '../../assets/images/waldo.jpg';
import { MouseEvent, useEffect, useState } from 'react';
import Dropdown from './components/dropdown/Dropdown';
import useImageDragScrolling from './hooks/useImageDragScrolling';
import ICoord from '../../utils/coords.types';
import { useAppSelector } from '../../app/store';
import Marker from './components/marker/Marker';
import IMarker from './components/marker/marker.types';

type PhotoViewProps = {
  onFinish?: () => void;
};

const PhotoView = ({ onFinish }: PhotoViewProps) => {
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
  const [markers, setMarkers] = useState<IMarker[]>([]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (
      !finished &&
      markers.length !== 0 &&
      markers.length === locations.length
    ) {
      onFinish?.();
      setFinished(true);
    }
  }, [markers]);

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

    // Check if not marked yet
    if (!markers.some((m) => m.name === selection)) {
      // Distance formula: sqrt( (pX - cX)**2 + (pY - cY)**2 )
      const distance = Math.sqrt(
        (coord.x! - location.coords.x) ** 2 +
          (coord.y! - location.coords.y) ** 2
      );

      // If distance is within the radius then the clicked coord is inside
      if (distance <= location.radius) {
        setMarkers((markers) => [
          ...markers,
          { coords: location.coords, radius: location.radius, name: selection },
        ]);
      } else {
        console.log('Nope...');
      }
    }

    setCoord({});
  };

  return (
    <StyledPhotoView ref={imgContainerRef} onClick={handleClick}>
      <img ref={imgRef} src={waldo} alt="Where's Waldo game" />
      {typeof coord.x === 'number' && typeof coord.y === 'number' && (
        <Dropdown
          x={coord.x}
          y={coord.y}
          onSelect={handleSelect}
          selectedNames={markers.map((m) => m.name)}
        />
      )}
      {markers.map((marker) => (
        <Marker
          key={`${marker.coords.x},${marker.coords.y}:${marker.radius}`}
          marker={marker}
        />
      ))}
    </StyledPhotoView>
  );
};

export default PhotoView;
