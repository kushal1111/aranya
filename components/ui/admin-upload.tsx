"use client"

import React, { useState, useEffect } from "react"

export default function AdminUpload() {
  const [files, setFiles] = useState<FileList | null>(null)
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [docs, setDocs] = useState<Array<{ name: string; size: number }>>([])

  const [authed, setAuthed] = useState<boolean | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const s = await (await fetch('/api/admin/session')).json()
        setAuthed(!!s.authenticated)
        if (s.authenticated) {
          const list = await (await fetch('/api/upload')).json()
          setDocs(list.files || [])
        } else {
          setDocs([])
        }
      } catch (e) {
        setAuthed(false)
      }
    }
    load()
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!files || files.length === 0) {
      setMessage('Please select at least one PDF file.')
      return
    }

    if (!authed) {
      setMessage('You must be signed in to upload. Go to /admin/login')
      return
    }

    const fd = new FormData()
    Array.from(files).forEach((f) => fd.append('files', f))

    setUploading(true)
    setMessage(null)

    try {
      const res = await fetch('/api/upload', { method: 'POST', body: fd })
      const json = await res.json()
      if (!res.ok) {
        if (res.status === 401) setMessage('Unauthorized. Please sign in again at /admin/login')
        else setMessage(json.error || 'Upload failed')
      } else {
        setMessage('Upload successful')
        // refresh list
        const list = await (await fetch('/api/upload')).json()
        setDocs(list.files || [])
      }
    } catch (e) {
      setMessage('Upload failed')
    } finally {
      setUploading(false)
    }
  }

  async function handleLogout() {
    try {
      const res = await fetch('/api/admin/logout', { method: 'POST' })
      if (res.ok) {
        setAuthed(false)
        setDocs([])
        setMessage('Signed out')
      } else {
        setMessage('Sign out failed')
      }
    } catch (e) {
      setMessage('Sign out failed')
    }
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Admin: Upload Documents</h2>
        <div>
          {authed === null ? (
            <span className="text-sm text-gray-500">Checking session…</span>
          ) : authed ? (
            <button onClick={handleLogout} className="px-3 py-1 bg-red-600 text-white rounded-md">Sign out</button>
          ) : (
            <a href="/admin/login" className="text-sm text-green-600 hover:underline">Sign in</a>
          )}
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-4">Drop PDF files here or choose files to add them to <code>/public/docs</code>. (Dev only)</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          aria-label="Select PDF files"
          type="file"
          accept="application/pdf"
          multiple
          onChange={(e) => setFiles(e.target.files)}
          className=""
        />

        <div className="flex items-center space-x-3">
          <button disabled={uploading} className="px-4 py-2 bg-green-600 text-white rounded-md disabled:opacity-60">
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
          <span className="text-sm text-gray-500">Max 10MB per file. Only PDFs allowed.</span>
        </div>

        {message && <div className="text-sm text-gray-700">{message}</div>}
      </form>

      <div className="mt-6">
        <h3 className="text-sm font-medium mb-2">Existing files</h3>
        <ul className="space-y-2 text-sm">
          {docs.length === 0 && <li className="text-gray-500">No files found.</li>}
          {docs.map((d) => (
            <li key={d.name} className="flex items-center justify-between">
              <span>{d.name}</span>
              <a href={`/docs/${encodeURIComponent(d.name)}`} target="_blank" rel="noreferrer" className="text-green-600 hover:underline">
                Open
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 text-xs text-gray-500">
        Note: This upload saves files into the project's <code>/public/docs</code> folder on the server. This will work in local development and some server environments, but many serverless hosts (Vercel, Netlify) do not persist runtime filesystem changes. For production, consider using an external storage (S3) or a CMS.
      </div>
    </div>
  )
}
