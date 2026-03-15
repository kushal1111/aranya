import Image from "next/image"
import Link from "next/link"
import { Compass, FolderOpen, Megaphone, BookOpen, CalendarDays, Mail, Phone, MapPin, Users } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer id="contact" role="contentinfo" aria-labelledby="footer-heading" className="bg-[#0a1f14] text-white">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand column */}
          <div className="lg:col-span-1 space-y-5">
            <Link href="/" aria-label="Go to homepage" className="inline-block">
              <Image
                src="/docs/logo.jpg"
                alt="Aaranya logo"
                width={170}
                height={57}
                className="h-11 w-auto"
              />
            </Link>
            <p className="text-white/55 text-sm leading-relaxed">
              ARANYA is a non-profit dedicated to advancing equitable climate solutions through carbon-negative
              strategies, inclusive renewable energy transitions, and nature-based community resilience.
            </p>
          </div>

          {/* Activities */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-5 flex items-center gap-2"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Activities
            </h3>
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
                    <item.icon className="h-3.5 w-3.5 text-white/30" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contribute */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-5"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Contribute
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/volunteer", label: "Volunteer" },
                { href: "/#donate", label: "Donate" },
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

          {/* Contact */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-5"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Contact
            </h3>
            <ul className="space-y-4">
            <li>
                <Link
                  href="/our-team"
                  className="inline-flex items-start gap-2.5 text-sm text-white/55 hover:text-white transition-colors duration-150"
                >
                  <Users className="h-4 w-4 text-white/30 mt-0.5 shrink-0" />
                  Our Team
                </Link>
              </li>
              <li>
                <a
                  href="mailto:aranyainitiatives@gmail.com"
                  className="inline-flex items-start gap-2.5 text-sm text-white/55 hover:text-white transition-colors duration-150"
                >
                  <Mail className="h-4 w-4 text-white/30 mt-0.5 shrink-0" />
                  aranyainitiatives@gmail.com
                </a>
              </li>
              <li>
                <span className="inline-flex items-start gap-2.5 text-sm text-white/55">
                  <MapPin className="h-4 w-4 text-white/30 mt-0.5 shrink-0" />
                  Suryabinayak-5, Bhaktapur, Nepal
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} ARANYA — Action for Resilient Adaptation and Nature-based Energy Alternatives.
            All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { href: "/#privacy", label: "Privacy Policy" },
              { href: "/#terms", label: "Terms of Service" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs text-white/35 hover:text-white/70 transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
