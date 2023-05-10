import type { Repository } from "@/types/repositories";
import type { RepositoryAPI } from "@/types/repository_github";
import assert from "assert";
import axios from "axios";

export default class Repositories {
  private repository_url = process.env.REPO_URL || "";

  setUrl(url: string) {
    assert(url.length > 0);
    this.repository_url = url;
  }

  async getAll(): Promise<Repository[]> {
    assert(this.repository_url.length > 0);

    let repositories: Repository[] | undefined;
    try {
      const repo = await axios.get<RepositoryAPI>(this.repository_url);
      repositories = repo.data.repositories;
    } catch (err) {
      console.error(err);
      throw err;
    }

    return new Promise((resolve, fail) => {
      if (repositories != undefined) {
        resolve(repositories);
      } else {
        fail("failed to load data");
      }
    });
  }

  async getById(id: number): Promise<Repository> {
    assert(this.repository_url.length > 0);

    let repository: Repository | undefined;
    try {
      const repositories = await this.getAll();
      repository = repositories[id];
    } catch (err) {
      console.error(err);
      throw err;
    }

    return new Promise((resolve, fail) => {
      if (repository != undefined) {
        resolve(repository);
      } else {
        fail("Repository not fould");
      }
    });
  }
}
