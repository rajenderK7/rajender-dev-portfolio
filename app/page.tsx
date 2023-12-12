import Connect from "@/components/Connect";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center lg:mt-14">
      <section className="">
        <h2 className="text-2xl  mb-2 text-slate-600 dark:text-slate-300">
          Hi there, I'm
        </h2>
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Rajender Katkuri
        </h1>
        <div className="mt-4 text-slate-600 dark:text-slate-300 text-sm">
          <p>I build for the web and mobile. Part-time Go hacker.</p>
          <p className="mt-4 lg:mt-0">
            I love building apps and ocassionally write articles on the tech I
            worked on to help beginners understand them better. Check out the{" "}
            <span className="underline font-black">
              <Link href="/projects">projects</Link>
            </span>{" "}
            and{" "}
            <span className="underline font-black">
              <Link href="/blog">blog</Link>
            </span>{" "}
            tabs for more.
          </p>
        </div>
        <Connect />
        <Skills />
        <Experience />
        {/* Recent Posts */}
      </section>
    </main>
  );
}
