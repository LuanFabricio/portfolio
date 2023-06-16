import React from "react";
import type { TagItem } from "@/types/tags";
import TagButton from "./tag_button";

type TagListProps = {
  /**
   * Set of tags in repositories list.
   * */
  tags: Set<TagItem>;
  /**
   * Function to update tag status.
   * */
  setTags: (value: Set<TagItem>) => void;
};

/**
 * List with all tags in user's repositories.
 * @prop {Set<TagItem>}  tags - Set of all tags in user's repositories list.
 * @prop {(value: Set<TagItem>) => void} setTags - Function for update tags set.
 * @returns {JSX.Element}
 * */
export default function TagList({ tags, setTags }: TagListProps): JSX.Element {
  const tagsButtos: JSX.Element[] = [];

  tags.forEach((tag) => {
    tagsButtos.push(
      <TagButton
        key={tag.name}
        tag={tag}
        onClick={() => {
          // FIX: Too slow and create memory (bad for TS/JS)
          const newTags = new Set<TagItem>();

          tags.forEach((currentTag) => {
            if (currentTag.name == tag.name) {
              currentTag.active = !currentTag.active;
            }
            newTags.add(currentTag);
          });

          setTags(newTags);
        }}
      />
    );
  });

  return <div>{tagsButtos}</div>;
}
