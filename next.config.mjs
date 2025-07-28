import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["md", "mdx", "ts", "tsx"],
  transpilePackages: ["@heroicons/react"], // Ajout important !
  images: { domains: [] },
};

export default withMDX(nextConfig);
