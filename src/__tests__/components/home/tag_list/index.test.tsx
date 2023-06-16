import React, { useState } from "react";

import TagList from "@/components/home/tag_list";
import { TagItem } from "@/types/tags";
import { render, screen } from "@testing-library/react";

const ACTIVE_CLASSNAME = "bg-gray-400";

const tags: Set<TagItem> = new Set([
  { name: "Tag1", active: false },
  { name: "Tag2", active: true },
  { name: "Tag3", active: true },
]);

it("Should render", () => {
  render(<TagList tags={tags} setTags={() => {}} />);
});

describe("Functions", () => {
  const Test = () => {
    const [testTags, setTestTags] = useState(tags);

    return <TagList tags={testTags} setTags={setTestTags} />;
  };

  it("Should list all itens", () => {
    render(<Test />);

    const buttons = screen.getAllByTestId("tag-list-button");

    expect(buttons.length).toBe(tags.size);
  });

  it("Should change the background color of active itens", () => {
    render(<Test />);

    const buttons = screen.getAllByTestId("tag-list-button");

    let activeButtons = 0;

    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].classList.contains(ACTIVE_CLASSNAME)) {
        activeButtons++;
      }
    }

    let expectedActiveButtons = 0;

    tags.forEach((tag) => {
      if (tag.active) {
        expectedActiveButtons++;
      }
    });

    expect(activeButtons).toBe(expectedActiveButtons);
  });
});
