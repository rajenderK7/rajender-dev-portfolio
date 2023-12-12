import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { sanityClient } from "@/lib/sanity/client";
import Link from "next/link";
import React from "react";

interface BlogTileI {
  _id?: string;
  _updatedAt: Date;
  publishedAt: Date;
  title: string;
  description: string;
  slug: string;
  content: string;
}

const BlogTile = ({ title, description, slug, publishedAt }: BlogTileI) => {
  return (
    <Link href={`blog/${slug}`}>
      <Card className="m-4 lg:mx-0 hover:shadow-sm hover:shadow-slate-300 hover:dark:shadow-secondary">
        <CardHeader>
          <CardTitle className="p-0 font-extrabold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-sm py-2">
          <p>{description}</p>
        </CardContent>
        <CardFooter className="text-sm gap-4 justify-end">
          <p>{publishedAt.toString().slice(0, 10)}</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

const Blog = async () => {
  const blogs: BlogTileI[] =
    await sanityClient.fetch(`*[_type == "blog" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current,
        description,
        publishedAt,
        content,
      }`);
  return (
    <div>
      {blogs.map((b) => {
        return <BlogTile key={b._id} {...b} />;
      })}
    </div>
  );
};

export default Blog;
