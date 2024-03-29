import React, { useEffect, useState } from "react";
import type { Repository } from "@/types/repositories";
import CardRepository from "../cards/CardRepository";

type ListRepositoriesProps = {
  repositories: Repository[];
  expectedTags?: string[];
};

/**
 * Create a list of repositories by a url
 * @prop {Repository[]} repositories - Array with user's repositories.
 * @prop {string[]} repositories - Tags for filter user's repositories.
 * @returns {JSX.Element} Div with a list of cards with repositories data.
 * */
export default function ListRepositories({
  repositories,
  expectedTags = [],
}: ListRepositoriesProps): JSX.Element {
  const cards: JSX.Element[] = [];

  for (const { name, description, link, tags } of repositories) {
    for (const tag of tags) {
      if (expectedTags.length === 0 || expectedTags.includes(tag)) {
        cards.push(
          <CardRepository
            key={name}
            title={name}
            description={description}
            url={link}
            tags={tags}
          />
        );
        break;
      }
    }
  }

  const className = "rounded grid grid-cols-3 col-auto bg-gray-500 p-6";

  return <div className={className}>{cards}</div>;
}
