import type { NextApiRequest, NextApiResponse } from "next";
import type { Repository } from "../../types/repositories";
import Repositories from "@/services/repositories";

export default async function hander(
  _req: NextApiRequest,
  res: NextApiResponse<Repository[] | { error: string }>
) {
  const repositories = new Repositories();

  try {
    const repos = await repositories.getAll();
    res.status(200).json(repos);
  } catch (e) {
    res.status(400).json({ error: "failed to load data" });
  }
}
