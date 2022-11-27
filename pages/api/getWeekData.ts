import type { NextApiRequest, NextApiResponse } from "next";
import { WeekData } from "../../Utils/customData";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(WeekData);
}
