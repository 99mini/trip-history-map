import { LatLngExpression } from 'leaflet';
import { Marker, Popup, useMap } from 'react-leaflet';

import useMarkerImage from '@/hooks/useMarkerImage';

const TripPopup = ({ position }: { position: LatLngExpression }) => {
  const map = useMap();
  const markerImage = useMarkerImage(
    'https://cdn.pixabay.com/photo/2024/01/11/12/46/pitbull-8501582_640.jpg',
    position,
    map,
  );

  if (!markerImage) {
    return null;
  }

  return (
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
};

export default TripPopup;
