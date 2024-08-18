import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

const payload = JSON.parse(
  fs.readFileSync("./server-payload.json", { encoding: "utf8" })
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  console.log(id)
  
  if (req.method === 'GET') {
    const song = payload?.songs?.find((song: any) => song.id == id);
    console.log(id)
    console.log(song)
    res.status(200).json(song);
  } else {
    res.status(405).end();
  }
};