import ICoord from '../../../../utils/coords.types';
import IMarker from './marker.types';
import StyledMarker from './StyledMarker';

type MarkerProps = {
  marker: IMarker;
};

const Marker = ({ marker }: MarkerProps) => {
  const { coords, radius } = marker;
  return (
    <StyledMarker x={coords.x} y={coords.y} radius={radius}></StyledMarker>
  );
};

export default Marker;
