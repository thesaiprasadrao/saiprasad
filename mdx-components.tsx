import type { MDXComponents } from "mdx/types";

// Required for @next/mdx with App Router.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}