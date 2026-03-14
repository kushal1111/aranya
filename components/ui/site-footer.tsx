import Image from "next/image"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default function SiteFooter() {
  return (
    <footer role="contentinfo" aria-labelledby="footer-heading" className="bg-gray-900 text-white py-12">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/docs/logo.jpg" alt="Aaranya logo" width={160} height={54} className="h-10 w-auto" />
            </div>
            <p className="text-gray-400">
              ARANYA is a non-profit dedicated to advancing equitable climate solutions through carbon-negative
              strategies, inclusive renewable energy transitions, and nature-based community resilience.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Activities</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/activities/projects" className="hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/activities/campaigns" className="hover:text-white transition-colors">
                  Campaigns
                </Link>
              </li>
              <li>
                <Link href="/activities/publications" className="hover:text-white transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/activities/events" className="hover:text-white transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contribute</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/volunteer" className="hover:text-white transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/#donate" className="hover:text-white transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/#partner" className="hover:text-white transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/#get-involved" className="hover:text-white transition-colors">
                  Documents
                </Link>
              </li>
              <li>
                <a href="mailto:aranyainitiatives@gmail.com" className="hover:text-white transition-colors">
                  aranyainitiatives@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+9779841564743" className="hover:text-white transition-colors">
                  +977 9841 564743
                </a>
              </li>
              <li>
                Suryabinayak - 5
                <br />
                Bhaktapur, Nepal
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 Aaranya. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/#privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/#terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
