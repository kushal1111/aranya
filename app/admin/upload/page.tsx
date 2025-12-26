import AdminUpload from "@/components/ui/admin-upload"
import Link from "next/link"

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Admin — Document Upload</h1>
          <Link href="/" className="text-green-600 hover:underline">← Back to site</Link>
        </div>

        <AdminUpload />
      </div>
    </div>
  )
}
