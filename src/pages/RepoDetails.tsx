import { useLoaderData, useParams } from "react-router-dom";

type Repo = {
  id: number;
  name: string;
  description: string;
  language: string;
};

export default function RepoDetails() {
  const { username } = useParams();
  const repo = useLoaderData() as Repo;
  console.log(repo);
  return (
    <>
      {username}'s repo : {repo.name}
    </>
  );
}
