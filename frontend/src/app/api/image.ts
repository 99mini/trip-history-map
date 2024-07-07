import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const mock: TripImageType[] = [
  {
    id: 1,
    trip_id: 1,
    image:
      'https://cdn.pixabay.com/photo/2024/01/11/12/46/pitbull-8501582_640.jpg',
    meta: {
      position: {
        longitude: 139.767125,
        latitude: 30.681236,
        altitude: 0,
      },
      createdAt: '2021-01-03T00:00:00Z',
      updatedAt: '2021-01-03T00:00:00Z',
    },
  },
  {
    id: 2,
    trip_id: 1,
    image: 'https://cdn.pixabay.com/photo/2024/03/04/16/38/cat-8612685_640.jpg',
    meta: {
      position: {
        longitude: 139.767125,
        latitude: 35.681236,
        altitude: 0,
      },
      createdAt: '2021-01-01T00:00:00Z',
      updatedAt: '2021-01-01T00:00:00Z',
    },
  },
];

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = mock;
  res.status(200).json(response);
};

export default handler;
