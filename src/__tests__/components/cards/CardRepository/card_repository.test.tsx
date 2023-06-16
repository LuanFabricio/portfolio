import CardRepository from "@/components/cards/CardRepository";
import React from "react";
import { render, screen } from "@testing-library/react";

it("Should render", () => {
  render(
    <CardRepository
      title="Card 1"
      description="Card 1 description"
      tags={["Card1", "Test"]}
      url="card1.test.com"
    />
  );
});

describe("Functions", () => {
  const title = "Card 1";
  const description = "Card 1 description";
  const tags = ["Card1", "Test"];
  const url = "card1.test.com";
  const CardTest = () => {
    return (
      <CardRepository
        title={title}
        description={description}
        tags={tags}
        url={url}
      />
    );
  };

  it("Should show the title", () => {
    render(<CardTest />);

    const card_title = screen.getByTestId("card-title");

    expect(card_title.innerHTML).toBe(title);
  });

  it("Should show the description", () => {
    render(<CardTest />);

    const card_description = screen.getByTestId("card-description");

    expect(card_description.innerHTML).toBe(description);
  });

  it("Should show the tags", () => {
    render(<CardTest />);

    screen.getByTestId("card-section-tags");

    const card_tags = screen.getAllByTestId("card-tag");

    expect(card_tags.length).toBe(tags.length);

    for (let i = 0; i < card_tags.length; i++) {
      expect(card_tags[i].innerHTML).toBe("#" + tags[i]);
    }
  });
});
