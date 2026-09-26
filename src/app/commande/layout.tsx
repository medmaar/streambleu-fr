// `page.tsx` in this route is a client component ("use client"), and Next.js
// only reads `export const metadata` from a server component. A sibling
// metadata.ts file with no layout/page to export it was previously dead code —
// this layout is what actually applies it (noindex, canonical, OG).
export { metadata } from "./metadata";

export default function CommandeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
