import React from "react";
import { screen, render } from "@testing-library/react";
import type { Repository } from "@/types/repositories";
import ListRepositories from "@/components/home/list_repositories";

const repositories: Repository[] = [
  {
    name: "Test",
    tags: ["Tag1", "Tag2"],
    link: "example.com",
    description: "Just a test",
  },
];

it("Should render", () => {
  render(<ListRepositories repositories={repositories} />);
});

describe("Functions", () => {
  it("Should show all itens on repositories list", () => {
    const repositories: Repository[] = [
      {
        name: "Test1",
        tags: ["Tag1", "Tag2"],
        link: "example1.com",
        description: "Just a test",
      },
      {
        name: "Test2",
        tags: ["Tag3", "Tag4"],
        link: "example2.com",
        description: "Just a test2",
      },
      {
        name: "Test3",
        tags: ["Tag5", "Tag6"],
        link: "example3.com",
        description: "Just a test3",
      },
    ];

    render(<ListRepositories repositories={repositories} />);

    const repositoriesElements = screen.getAllByTestId("card-div");

    expect(repositoriesElements.length).toBe(repositories.length);
  });
});
