import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { client } from "@/lib/sanity/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectI {
  _id: string;
  title: string;
  slug?: string;
  author: string;
  description: any;
  liveSite?: string;
  github: string;
  updatedAt: Date;
  imgURL: string;
}

const Project = ({
  _id,
  author,
  description,
  imgURL,
  title,
  updatedAt,
  github,
  liveSite,
}: ProjectI) => {
  return (
    <Card className="my-4">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{author}</CardDescription>
        <div className="flex justify-center max-h-64">
          <Image src={imgURL} alt={title} height={300} width={400} />
        </div>
      </CardHeader>
      <CardContent className="text-sm py-2">
        <p>{description}</p>
      </CardContent>
      <CardFooter className="text-sm gap-4 justify-end">
        <Button size="sm">
          <Link href={github}>GitHub</Link>
        </Button>
        <Button size="sm">
          <Link href={liveSite ?? github}>Live</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const Projects = async () => {
  const projects: ProjectI[] =
    await client.fetch(`*[_type=="project" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
        _id,
        _updatedAt,
        "author": author -> name,
        slug,
        title,
        description,
        "imgURL": mainImage.asset->url,
        liveSite,
        github,
      }`);

  return (
    <div className="">
      {projects.map((p) => {
        return <Project key={p._id} {...p} />;
      })}
    </div>
  );
};

export default Projects;
