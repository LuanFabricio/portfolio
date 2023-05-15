import React from "react";
import type { TagItem } from "@/types/tags";
import TagButton from "./tag_button";

type TagListProps = {
  tags: Set<TagItem>;
  setTags: (value: Set<TagItem>) => void;
};

export default function TagList({ tags, setTags }: TagListProps) {
  const tagsButtos: JSX.Element[] = [];

  tags.forEach((tag) => {
    tagsButtos.push(
      <TagButton key={tag.name} tag={tag}
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
