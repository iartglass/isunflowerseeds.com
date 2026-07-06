import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-bold uppercase tracking-wide text-amber-600">404 Error</p>
      <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Page Not Found</h1>
      <p className="mt-4 max-w-md text-gray-600 dark:text-gray-400">
        The page you're looking for doesn't exist or may have moved. Try one of these instead:
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link href="/">Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/products">Products</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/blog">Blog</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Contact</Link>
        </Button>
      </div>
    </div>
  )
}
