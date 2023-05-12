import React from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Description from "@/components/home/description";
import ListRepositories from "@/components/home/list_repositories";

type HomeProps = {
  userName: string;
  userDescription: string;
  repo_url: string;
};

export default function Home({
  userName,
  userDescription,
  repo_url,
}: HomeProps) {
  return (
    <>
      <Head>
        <title>Portifólio - {userName}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <Description description={userDescription} />
        </div>
        <div>
          <ListRepositories url={repo_url} />
        </div>
      </main>
    </>
  );
}

export function getStaticProps(): { props: HomeProps } {
  const userName = process.env.USER_NAME || "Erro!";
  const userDescription = process.env.USER_DESCRIPTION || "Erro!";
  const repo_url = process.env.REPO_URL || "Erro!";

  return {
    props: {
      userName,
      userDescription,
      repo_url,
    },
  };
}
