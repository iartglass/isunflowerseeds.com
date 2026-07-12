import HomePageClient from "@/components/home-page-client"
import { SchemaWebPage } from "@/components/schema"

export const metadata = {
  title: "Wholesale Sunflower Seeds Supplier | XingYi Trading",
  description:
    "Bulk sunflower seeds from Bayannur, Inner Mongolia — 361, 363, and Tongqing No.6 series. 9 production lines, 16-stage QC, exporting worldwide since 2014.",
  alternates: { canonical: "/" },
}

export default function Home() {
  return (
    <>
      <SchemaWebPage
        name="Wholesale Sunflower Seeds Supplier | XingYi Trading"
        description="Bulk sunflower seeds from Bayannur, Inner Mongolia — 361, 363, and Tongqing No.6 series. 9 production lines, 16-stage QC, exporting worldwide since 2014."
        url="/"
      />
      <HomePageClient />
    </>
  )
}
