export default function MDXComponents({ html }: { html: string }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
