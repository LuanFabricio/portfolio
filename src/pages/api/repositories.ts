import type { NextApiRequest, NextApiResponse } from "next";

type Repositories = {
  name: string;
  description: string;
};

export default function hander(
  _req: NextApiRequest,
  res: NextApiResponse<Repositories[]>
) {
  // res.status(200).json(repositories);
  fetch(
    "https://raw.githubusercontent.com/LuanFabricio/portfolio-data/main/repositories.json"
  )
    .then((r) => {
      console.log(r);
      return r.json();
    })
    .then((r) => {
      console.log(r);
      const repositories: Repositories[] = r;
      res.status(200).json(repositories);
    })
    .catch((e) => {
      res.status(400);
    });
}
