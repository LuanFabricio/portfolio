import Repositories from "@/services/repositories";

it("Should get all repositories", async () => {
  process.env.REPO_URL =
    "https://raw.githubusercontent.com/LuanFabricio/portfolio-data/main/repositories.json";
  const repositories = new Repositories();

  await repositories.getAll();
});

it("Should get a repository by id", async () => {
  process.env.REPO_URL =
    "https://raw.githubusercontent.com/LuanFabricio/portfolio-data/main/repositories.json";
  const repositories = new Repositories();

  await repositories.getById(0);
});
