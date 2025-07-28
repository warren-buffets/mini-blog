import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div
      className="prose prose-lg max-w-none dark:prose-invert
      prose-headings:font-bold prose-headings:leading-tight
      prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
      prose-p:leading-relaxed prose-p:mb-6
      prose-a:text-blue-600 hover:prose-a:text-blue-800
      prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg
      dark:prose-blockquote:bg-blue-950/20
      prose-code:bg-gray-100 prose-code:text-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
      prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-xl prose-pre:overflow-x-auto
      prose-ul:list-disc prose-ol:list-decimal prose-li:mb-2
      prose-table:border-collapse prose-th:border prose-th:border-gray-300 prose-th:p-2 prose-th:bg-gray-100
      prose-td:border prose-td:border-gray-300 prose-td:p-2"
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Personnalisation des composants
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold text-gray-900 mb-8 leading-tight border-b border-gray-200 pb-4">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6 border-l-4 border-blue-500 pl-4">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              {children}
            </p>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/20 p-6 rounded-r-lg my-6 italic">
              {children}
            </blockquote>
          ),
          code: ({ inline, children, className, ...props }) => {
            if (inline) {
              return (
                <code
                  className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono"
                  {...props}
                >
                  {children}
                </code>
              );
            }

            return (
              <code className={`${className} font-mono`} {...props}>
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto my-6 shadow-lg">
              {children}
            </pre>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-gray-700 leading-relaxed">{children}</li>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-gray-300 bg-gray-100 dark:bg-gray-800 px-4 py-3 text-left font-semibold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-gray-300 px-4 py-3">{children}</td>
          ),
          a: ({ children, href }) => (
            <a
              href={href}
              className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors duration-200"
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
