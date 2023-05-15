import React from "react";
import type { TagItem } from "@/types/tags";
import {
  TAG_BUTTON_ACTIVE_BG_COLOR,
  TAG_BUTTON_INACTIVE_BG_COLOR,
} from "./constants";

type TagButtonProps = {
  tag: TagItem;
  onClick: () => void;
};

const DEFAULT_CLASS_NAME = "m-3 p-1.5 px-3 rounded";

export default function TagButton({ tag, onClick }: TagButtonProps) {
  let finalClassName = DEFAULT_CLASS_NAME;
  if (tag.active) {
    finalClassName += ` ${TAG_BUTTON_ACTIVE_BG_COLOR}`;
  } else {
    finalClassName += ` ${TAG_BUTTON_INACTIVE_BG_COLOR}`;
  }

  return (
    <button
      className={finalClassName}
      onClick={onClick}
      data-testid="tag-list-button"
    >
      {tag.name}
    </button>
  );
}
