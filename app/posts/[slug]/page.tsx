import { getAllPostsMeta, getPostBySlug } from "@/lib/posts";
import MDXComponents from "@/components/MDXComponents";

export async function generateStaticParams() {
  return getAllPostsMeta().map((p) => ({ slug: p.slug }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { meta, contentHtml } = await getPostBySlug(params.slug);
  return (
    <article className="prose mx-auto">
      <h1>{meta.title}</h1>
      <p className="text-sm text-gray-500">
        {new Date(meta.date).toLocaleDateString()}
      </p>
      <MDXComponents html={contentHtml} />
    </article>
  );
}
