import React from "react";
import { render } from "@testing-library/react";
import ListRepositories from "@/components/home/list_repositories";

const url =
  "https://raw.githubusercontent.com/LuanFabricio/portfolio-data/main/repositories.json";

it("Should render", () => {
  render(<ListRepositories url={url} />);
});
