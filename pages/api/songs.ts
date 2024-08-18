import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

const payload = JSON.parse(
  fs.readFileSync("./server-payload.json", { encoding: "utf8" })
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const songs = payload?.songs.map((i: any) => ({
      id: i.id,
      song: i.song,
    }));

    res.status(200).json(songs);
  } else {
    res.status(405).end();
  }
};