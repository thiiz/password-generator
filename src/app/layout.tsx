import { Toaster } from "@/components/ui/toaster"
import type { Metadata } from 'next'
import './index.css'

export const metadata: Metadata = {
  title: 'My App teste',
  description: 'My application description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600 p-4">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  )
}