import Image from "next/image"
import Link from "next/link"
import { FolderOpen, BookOpen, CalendarDays, Mail, MapPin, Users } from "lucide-react"
import { DONATION_MAILTO, LOGO_PATH, ORG_ADDRESS_LINE, ORG_NAME, ORG_TAGLINE_SUFFIX, SITE_EMAIL } from "@/lib/site"

export default function SiteFooter() {
  return (
    <footer id="contact" role="contentinfo" aria-labelledby="footer-heading" className="bg-[#123B5D] text-white">
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="lg:col-span-1 space-y-5">
            <Link href="/" aria-label={`${ORG_NAME} home`} className="inline-block">
              <Image src={LOGO_PATH} alt={`${ORG_NAME} logo`} width={170} height={57} className="h-11 w-auto" />
            </Link>
            <p className="text-white/55 text-sm leading-relaxed">
              {ORG_NAME} — <span className="italic">{ORG_TAGLINE_SUFFIX}</span>. We work for a just, inclusive and
              democratic Nepal where institutions are accountable to its people.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#D8A84E] mb-5">Activities</h3>
            <ul className="space-y-3">
              {[
                { href: "/activities/projects", icon: FolderOpen, label: "Projects" },
                { href: "/activities/publications", icon: BookOpen, label: "Publications" },
                { href: "/activities/events", icon: CalendarDays, label: "Events" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors duration-150"
                  >
                    <item.icon className="h-3.5 w-3.5 text-white/30" aria-hidden="true" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#D8A84E] mb-5">Contribute</h3>
            <ul className="space-y-3">
              {[
                { href: "/volunteer", label: "Volunteer" },
                { href: DONATION_MAILTO, label: "Donation Enquiry" },
                { href: "/gallery", label: "Gallery" },
                { href: "/partners", label: "Partners" },
                { href: "/#get-involved", label: "Documents" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/55 hover:text-white transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#D8A84E] mb-5">Contact</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/our-team"
                  className="inline-flex items-start gap-2.5 text-sm text-white/55 hover:text-white transition-colors duration-150"
                >
                  <Users className="h-4 w-4 text-white/30 mt-0.5 shrink-0" aria-hidden="true" />
                  Our Team
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="inline-flex items-start gap-2.5 text-sm text-white/55 hover:text-white transition-colors duration-150"
                >
                  <Mail className="h-4 w-4 text-white/30 mt-0.5 shrink-0" aria-hidden="true" />
                  {SITE_EMAIL}
                </a>
              </li>
              <li>
                <address className="inline-flex items-start gap-2.5 text-sm text-white/55 not-italic">
                  <MapPin className="h-4 w-4 text-white/30 mt-0.5 shrink-0" aria-hidden="true" />
                  {ORG_ADDRESS_LINE}
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} {ORG_NAME} — <span className="italic">{ORG_TAGLINE_SUFFIX}</span>. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
