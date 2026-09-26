import SeoPage, { buildMetadata } from "@/components/seo/SeoPage";
import { getPage } from "@/content/seo/registry";

const page = getPage("/iptv-troyes");

export const metadata = buildMetadata(page);

export default function Page() {
  return <SeoPage page={page} />;
}
