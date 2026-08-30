import Link from "next/link"
import type { BreadcrumbItem } from "@/lib/jsonld"

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5 text-sm text-white/60">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={item.path} className="inline-flex items-center gap-1.5">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {isLast ? (
                <span className="text-white/85" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-white transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
