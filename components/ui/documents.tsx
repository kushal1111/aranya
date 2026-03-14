"use client"

import React, { useEffect, useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Eye } from "lucide-react"
import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogFooter, DialogTrigger } from "@/components/ui/dialog"

const documents = [
  {
    title: "Company Registration",
    file: "/docs/company-registration.pdf",
    description: "Company Registration Certificate and Incorporation document",
  },
  {
    title: "PAN Registration",
    file: "/docs/pan-registration.pdf",
    description: "PAN registration document",
  },
  {
    title: "Memorandum of Association",
    file: "/docs/signed-moa.pdf",
    description: "Executed Memorandum of Association (MoA)",
  },
  {
    title: "Articles of Association",
    file: "/docs/signed-aoa.pdf",
    description: "Executed Articles of Association (AoA)",
  },
]

function formatBytes(bytes: number | null) {
  if (!bytes) return "-"
  const thresh = 1024
  if (Math.abs(bytes) < thresh) return bytes + " B"
  const units = ["KB", "MB", "GB", "TB"]
  let u = -1
  do {
    bytes /= thresh
    ++u
  } while (Math.abs(bytes) >= thresh && u < units.length - 1)
  return bytes.toFixed(1) + " " + units[u]
}

export default function Documents() {
  const [sizes, setSizes] = useState<Record<string, number | null>>({})
  const [preview, setPreview] = useState<string | null>(null)

  useEffect(() => {
    documents.forEach(async (doc) => {
      try {
        const res = await fetch(doc.file, { method: "HEAD" })
        const len = res.headers.get("content-length")
        setSizes((s) => ({ ...s, [doc.file]: len ? parseInt(len, 10) : null }))
      } catch (e) {
        // fallback: leave unknown
        setSizes((s) => ({ ...s, [doc.file]: null }))
      }
    })
  }, [])

  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-6">Organization Documents</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {documents.map((doc, idx) => (
          <Card key={doc.file} role="article" aria-labelledby={`doc-title-${idx}`} aria-describedby={`doc-desc-${idx}`} className="bg-white text-gray-900">
            <CardHeader>
              <CardTitle id={`doc-title-${idx}`} className="text-sm">{doc.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-between">
              <p id={`doc-desc-${idx}`} className="mb-2 text-sm text-gray-600">{doc.description}</p>

              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-gray-500">{formatBytes(sizes[doc.file])}</div>

                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="ghost" onClick={() => setPreview(doc.file)} aria-label={`Preview ${doc.title}`}>
                    <Eye className="mr-2 h-4 w-4" /> Preview
                  </Button>

                  <a href={doc.file} target="_blank" rel="noopener noreferrer" aria-label={`Open ${doc.title} (opens in new tab)`} className="inline-flex items-center space-x-2 text-sm text-green-600 hover:underline">
                    <Download className="h-4 w-4" />
                    <span>Open</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!preview} onOpenChange={(open) => !open && setPreview(null)}>
        <DialogContent className="max-w-4xl w-full">
          <DialogHeader>
            <DialogTitle>Document preview</DialogTitle>
          </DialogHeader>

          <div className="mt-2">
            {preview ? (
              <iframe src={preview} className="w-full h-[75vh] border" title="PDF preview" />
            ) : (
              <div className="text-sm text-gray-500">No document selected.</div>
            )}
          </div>

          <DialogFooter>
            <div className="flex items-center justify-between w-full">
              <a href={preview ?? "#"} target="_blank" rel="noreferrer" className="text-sm text-green-600 hover:underline">
                Open in new tab
              </a>
              <Button onClick={() => setPreview(null)}>Close</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
