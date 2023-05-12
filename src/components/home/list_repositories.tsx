import React, { useEffect, useState } from "react";
import type { Repository } from "@/types/repositories";
import Repositories from "@/services/repositories";
import CardRepository from "../cards/CardRepository";

type ListRepositoriesProps = {
  url: string;
};

/**
 * Create a list of repositories by a url
 * @param {ListRepositoriesProps} props - Props with a repository url.
 * @returns {JSX.Element} Div with a list of cards with repositories data.
 * */
export default function ListRepositories({ url }: ListRepositoriesProps) {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const repos = new Repositories();
  repos.setUrl(url);

  useEffect(() => {
    repos.getAll().then((r) => {
      setRepositories(r);
    });
  }, []);

  const cards = repositories.map(({ name, description, link, tags }) => (
    <CardRepository
      key={name}
      title={name}
      description={description}
      url={link}
      tags={tags}
    />
  ));

  const className = "rounded grid grid-cols-2 col-auto bg-gray-500 p-6";

  return <div className={className}>{cards}</div>;
}
