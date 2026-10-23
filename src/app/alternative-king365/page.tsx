import SeoPage, { buildMetadata } from "@/components/seo/SeoPage";
import { getPage } from "@/content/seo/registry";

const page = getPage("/alternative-king365");

export const metadata = buildMetadata(page);

export default function Page() {
  return <SeoPage page={page} />;
}
