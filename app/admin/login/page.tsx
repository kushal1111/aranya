"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    async function check() {
      try {
        const s = await (await fetch('/api/admin/session')).json()
        if (s.authenticated) router.push('/admin/upload')
      } catch (e) {}
    }
    check()
  }, [router])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/admin/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password }) })
      const json = await res.json()
      if (!res.ok) {
        setError(json.error || 'Login failed')
      } else {
        router.push('/admin/upload')
      }
    } catch (e) {
      setError('Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow">
        <h1 className="text-lg font-semibold mb-4">Admin Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-sm text-gray-700">Password</span>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full rounded-md border px-3 py-2" />
          </label>
          {error && <div className="text-sm text-red-600">{error}</div>}
          <div className="flex items-center justify-between">
            <button type="submit" disabled={loading} className="px-4 py-2 bg-green-600 text-white rounded-md disabled:opacity-60">{loading ? 'Signing in...' : 'Sign in'}</button>
            <a href="/" className="text-sm text-gray-500">Back to site</a>
          </div>
        </form>
      </div>
    </div>
  )
}