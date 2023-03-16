import StyledPhotoView from './StyledPhotoView';
import waldo from '../../assets/images/waldo.jpg';
import { MouseEvent, useRef, useState } from 'react';
import Dropdown from './components/Dropdown';

type Coord = {
  x?: number;
  y?: number;
};

type Solution = {
  character: string;
  coordX: number;
  coordY: number;
  radius: number;
};

const solutions: Solution[] = [
  {
    character: 'Waldo',
    coordX: 1378,
    coordY: 653,
    radius: 24,
  },
  {
    character: 'Odlaw',
    coordX: 1067,
    coordY: 467,
    radius: 24,
  },
  {
    character: 'Wilma',
    coordX: 1869,
    coordY: 812,
    radius: 24,
  },
  {
    character: 'Wizard Whitebeard',
    coordX: 1652,
    coordY: 442,
    radius: 24,
  },
  {
    character: 'Woof',
    coordX: 243,
    coordY: 792,
    radius: 24,
  },
];

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

  const handleSelect = (selection: string) => {
    const solution = solutions.find((s) => s.character === selection);
    if (!solution) throw new Error(`Missing solution for ${selection}`);

    // Distance formula: sqrt( (pX - cX)**2 + (pY - cY)**2 )
    const distance = Math.sqrt(
      (coord.x! - solution.coordX) ** 2 + (coord.y! - solution.coordY) ** 2
    );

    // If distance is within the radius then the clicked coord is inside
    if (distance <= solution.radius) {
      console.log('Found!');
    } else {
      console.log('Nope...');
    }

    setCoord({});
  };

  return (
    <StyledPhotoView onClick={handleClick}>
      <img ref={imgRef} src={waldo} alt="Where's Waldo game" />
      {typeof coord.x === 'number' && typeof coord.y === 'number' && (
        <Dropdown x={coord.x} y={coord.y} onSelect={handleSelect} />
      )}
    </StyledPhotoView>
  );
};

export default PhotoView;
