import ICoord from '../../../../utils/coords.types';

interface IMarker {
  name: string;
  coords: ICoord;
  radius: number;
}

export default IMarker;
