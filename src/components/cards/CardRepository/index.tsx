import React from "react";
import Link from "next/link";

import RepositoryTag from "./tag";

type CardRepositoryProps = {
  title: string;
  description: string;
  tags: string[];
  url: string;
};

/**
 * Component to show repository name, description, tags and url.
 * @param props {CardRepositoryProps} - Props with repository information.
 * @returns {JSX.Element} Card component.
 */
export default function CardRepository({
  title,
  description,
  tags,
  url,
}: CardRepositoryProps) {
  const cardTags = tags.map((name) => <RepositoryTag key={name} name={name} />);

  return (
    <div
      className="max-w-sm max-h-sm rounded overflow-hidden shadow-lg bg-white m-1.5"
      data-testid="card-div"
    >
      <Link href={`https://${url}`} data-testid="card-link">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2" data-testid="card-title">
            {title}
          </div>
          <p className="text-gray-700 text-base" data-testid="card-description">
            {description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2" data-testid="card-section-tags">
          {cardTags}
        </div>
      </Link>
    </div>
  );
}
