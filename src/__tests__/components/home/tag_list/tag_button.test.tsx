import React from "react";
import { render, screen } from "@testing-library/react";

import TagButton from "@/components/home/tag_list/tag_button";
import {
  TAG_BUTTON_ACTIVE_BG_COLOR,
  TAG_BUTTON_INACTIVE_BG_COLOR,
} from "@/components/home/tag_list/constants";

it("Should render", () => {
  const tag = {
    name: "Tag1",
    active: true,
  };

  render(<TagButton tag={tag} onClick={() => {}} />);
});

describe("Functions", () => {
  const activeTag = {
    name: "Active Tag",
    active: true,
  };

  const inactiveTag = {
    name: "Inactive Tag",
    active: false,
  };

  it(`Should use ${TAG_BUTTON_ACTIVE_BG_COLOR} on active tags`, () => {
    render(<TagButton tag={activeTag} onClick={() => {}} />);

    const activeButton = screen.getByTestId("tag-list-button");

    expect(
      activeButton.classList.contains(TAG_BUTTON_ACTIVE_BG_COLOR)
    ).toBeTruthy();
  });

  it(`Should use ${TAG_BUTTON_INACTIVE_BG_COLOR} on inactive tags`, () => {
    render(<TagButton tag={inactiveTag} onClick={() => {}} />);

    const inactiveButton = screen.getByTestId("tag-list-button");

    expect(
      inactiveButton.classList.contains(TAG_BUTTON_INACTIVE_BG_COLOR)
    ).toBeTruthy();
  });
});
