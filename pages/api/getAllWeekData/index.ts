import type { NextApiRequest, NextApiResponse } from "next";
import { WeekData } from "../../../Utils/customData";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    let week = WeekData.find((week) => week.id == weekId);
    if (!week) {
      week = WeekData.find((week) => week.id == 1);
    }
    res.status(200).json(week);
  } catch {
    res.status(400).json({ error: "Something went wrong when fetching week" });
  }
}
