import { publications } from "@/lib/publications"
import { ORG_NAME, SITE_URL, absoluteUrl } from "@/lib/site"

export function GET() {
  const items = publications
    .map(
      (publication) => `  <item>
    <title><![CDATA[${publication.title}]]></title>
    <link>${absoluteUrl(publication.path)}</link>
    <guid isPermaLink="true">${absoluteUrl(publication.path)}</guid>
    <description><![CDATA[${publication.description}]]></description>
  </item>`
    )
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${ORG_NAME} publications</title>
    <link>${SITE_URL}/activities/publications</link>
    <description>Publications from ${ORG_NAME}.</description>
    <language>en</language>
${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  })
}
