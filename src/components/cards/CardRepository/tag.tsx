import React from "react";

type TagProps = {
  name: string;
};

export default function RepositoryTag({ name }: TagProps) {
  return (
    <span
      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      data-testid="card-tag"
    >
      #{name}
    </span>
  );
}
