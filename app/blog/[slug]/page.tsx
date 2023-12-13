import { sanityClient } from "@/lib/sanity/client";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import React from "react";
import { GeistSans } from "geist/font/sans";

interface BlogPageI {
  title: string;
  slug?: string;
  author: string;
  mainImage: string;
  description: string;
  _createdAt: Date;
  _updatedAt: Date;
  content: any;
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const article: BlogPageI =
    await sanityClient.fetch(`*[_type == "blog" && !(_id in path("drafts.**")) && slug.current=="${params.slug}"][0] {
        "author": (author -> {name}).name,
        _updatedAt,
        publishedAt,
        title,
        description,
        content,
        "mainImage": mainImage.asset->url
    }`);

  return (
    <div className="p-4 lg:px-0">
      <div className="relative w-full h-52 lg:h-64">
        <Image src={article.mainImage} alt={article.title} fill priority />
      </div>
      <section className={GeistSans.className}>
        <div
          className="prose max-w-none prose-a:m-0 prose-a:text-blue-600 dark:prose-headings:text-white dark:prose-blockquote:text-white dark:prose-p:text-gray-300 dark:prose-li:text-white dark:prose-figcaption:text-white
         dark:prose-lead:text-white dark:prose-ol:text-white dark:prose-code:text-white prose-code:bg-white dark:prose-code:bg-transparent dark:prose-strong:text-white prose-img:object-cover prose-img:max-h-72 mb-10"
        >
          {/* @ts-expect-error Server Component */}
          <MDXRemote source={article.content} />
        </div>
      </section>
    </div>
  );
};

export default Page;
