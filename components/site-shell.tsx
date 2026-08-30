import type { ReactNode } from "react"
import DisasterReliefNotice from "@/components/disaster-relief-notice"
import SiteFooter from "@/components/ui/site-footer"
import SiteHeader from "@/components/ui/site-header"

type SiteShellProps = {
  children: ReactNode
  active?: "home" | "activities" | "gallery" | "contact"
}

export default function SiteShell({ children, active }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-white">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <header>
        <SiteHeader active={active} />
      </header>
      <main id="main">{children}</main>
      <SiteFooter />
      {/* Temporary PMDRF flood-relief notice — remove with the component + QR asset when no longer needed */}
      <DisasterReliefNotice />
    </div>
  )
}
