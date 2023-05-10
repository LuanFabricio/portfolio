import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import CardRepository from "@/components/cards/CardRepository";
import { Repository } from "@/types/repositories";
import Repositories from "@/services/repositories";

export default function CardId({ url }: { url: string }) {
  const router = useRouter();
  const id: number = parseInt(
    !router.query.id
      ? "0"
      : typeof router.query.id === "string"
      ? router.query.id
      : router.query.id[0],
    10
  );

  const [repositories, setRepositories] = useState<Repository[]>();
  const serviceRepositories = new Repositories();
  serviceRepositories.setUrl(url);

  useEffect(() => {
    serviceRepositories.getAll().then((res) => {
      setRepositories(res);
    });
  });

  let name = "Erro!";
  let description = "Errro!";
  let repository_url = "Errro!";
  let tags: string[] = ["erro!"];

  if (repositories !== undefined && repositories.length > id) {
    name = repositories[id].name;
    description = repositories[id].description;
    tags = repositories[id].tags;
    repository_url = repositories[id].link;
  }

  return (
    <CardRepository
      title={name}
      description={description}
      tags={tags}
      url={repository_url}
    />
  );
}

export function getServerSideProps() {
  return {
    props: {
      url: process.env.REPO_URL || "",
    },
  };
}
