type TripImageType = {
  id: number;
  trip_id: number;
  image: string;
  meta: ImageMetaType;
};

type ImageMetaType = {
  position: {
    longitude: number;
    latitude: number;
    altitude: number;
  };
  createdAt: string;
  updatedAt: string;
};
