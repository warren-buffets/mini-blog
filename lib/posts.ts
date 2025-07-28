import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDir = path.join(process.cwd(), "content/posts");

export type PostMeta = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function getAllPostsMeta(): PostMeta[] {
  if (!fs.existsSync(postsDir)) {
    return [];
  }

  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const source = fs.readFileSync(path.join(postsDir, file), "utf8");
      const { data } = matter(source);
      return {
        ...(data as Omit<PostMeta, "slug">),
        slug: file.replace(/\.md$/, ""),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDir, `${slug}.md`);
  const source = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(source);
  const processed = await remark().use(html).process(content);
  return {
    meta: { ...(data as Omit<PostMeta, "slug">), slug },
    contentHtml: processed.toString(),
  };
}
