"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const STORAGE_KEY = "pmdrf-notice-dismissed"
const OFFICIAL_URL = "https://pmdrf.nchl.com.np/index.php"

/**
 * Temporary flood-relief notice for the Government of Nepal
 * Prime Minister’s Disaster Relief Fund.
 *
 * To remove later: delete this file, public/images/pmdrf-fonepay-qr.jpg,
 * and the <DisasterReliefNotice /> import/usage in site-shell.tsx.
 */
export default function DisasterReliefNotice() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") return
      setOpen(true)
    } catch {
      setOpen(true)
    }
  }, [])

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen)
    if (!nextOpen) {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1")
      } catch {
        // Ignore storage failures; notice simply will not persist dismiss.
      }
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-md w-[calc(100%-2rem)] max-h-[90vh] overflow-y-auto p-5 sm:p-6">
        <DialogHeader className="space-y-2 pr-6 text-left">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D8A84E]">
            Flood relief · Nepal
          </p>
          <DialogTitle className="font-heading text-xl sm:text-2xl font-bold text-[#0B3D35] leading-snug">
            Donate to the Government of Nepal Prime Minister’s Disaster Relief Fund
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-600 leading-relaxed">
            Support nationwide disaster rescue, relief and rehabilitation operations.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center gap-3 mt-1">
          <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
            <Image
              src="/images/pmdrf-fonepay-qr.jpg"
              alt="Fonepay QR code for PM Daibi Prakop Uddhar Kosh — Prime Minister’s Disaster Relief Fund"
              width={280}
              height={360}
              className="h-auto w-full max-w-[260px] object-contain"
              priority
            />
          </div>
          <p className="text-center text-xs sm:text-sm text-gray-600 leading-relaxed max-w-sm">
            Scan with Mobile Banking, Wallets, UPI-India, UnionPay and Alipay+ enabled apps.
          </p>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed text-center sm:text-left">
          For other donation methods (card, NepalPay, and more), visit the official{" "}
          <a
            href={OFFICIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-[#2F80A8] hover:text-[#276d8f] underline-offset-2 hover:underline"
          >
            Government of Nepal Prime Minister’s Disaster Relief Fund
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
          .
        </p>
      </DialogContent>
    </Dialog>
  )
}
