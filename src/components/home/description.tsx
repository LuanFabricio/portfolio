import React from "react";

type DescriptionProps = {
  description: string;
};

export default function Description({ description }: DescriptionProps) {
  return <div className="rounded max-w-sm bg-gray-200 p-6">{description}</div>;
}
