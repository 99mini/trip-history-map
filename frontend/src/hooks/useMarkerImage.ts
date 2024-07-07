import L, { LatLngExpression, Marker } from 'leaflet';
import { useEffect, useState } from 'react';

const useMarkerImage = (
  imageUrl: string,
  position: LatLngExpression,
  map: L.Map | L.LayerGroup,
) => {
  const [markerImage, setMarkerImage] = useState<Marker | null>(null);

  useEffect(() => {
    if (!imageUrl) {
      return;
    }

    const icon = L.divIcon({
      className: 'image-marker',
      iconSize: [32, 32],
      shadowSize: [0, 0],
      iconAnchor: [16, 32],
      shadowAnchor: [0, 0],
      popupAnchor: [0, -32],
    });

    const marker = L.marker(position, { icon }).addTo(map);

    setMarkerImage(marker);
  }, [imageUrl, map, position]);

  return markerImage;
};

export default useMarkerImage;
