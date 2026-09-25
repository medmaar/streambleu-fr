import SeoPage, { buildMetadata } from "@/components/seo/SeoPage";
import { getPage } from "@/content/seo/registry";

const page = getPage("/blog/qu-est-ce-que-l-iptv");

export const metadata = buildMetadata(page);

export default function Page() {
  return <SeoPage page={page} />;
}
