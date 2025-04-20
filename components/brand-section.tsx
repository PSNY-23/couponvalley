"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

type Brand = {
  id: number
  name: string
  logo: string
  slug: string
}

const brands: Brand[] = [
  { id: 1, name: "Amazon", logo: "/placeholder.svg?height=100&width=100", slug: "amazon" },
  { id: 2, name: "Walmart", logo: "/placeholder.svg?height=100&width=100", slug: "walmart" },
  { id: 3, name: "Target", logo: "/placeholder.svg?height=100&width=100", slug: "target" },
  { id: 4, name: "Best Buy", logo: "/placeholder.svg?height=100&width=100", slug: "best-buy" },
  { id: 5, name: "Macy's", logo: "/placeholder.svg?height=100&width=100", slug: "macys" },
  { id: 6, name: "Nike", logo: "/placeholder.svg?height=100&width=100", slug: "nike" },
  { id: 7, name: "Adidas", logo: "/placeholder.svg?height=100&width=100", slug: "adidas" },
  { id: 8, name: "Apple", logo: "/placeholder.svg?height=100&width=100", slug: "apple" },
  { id: 9, name: "Samsung", logo: "/placeholder.svg?height=100&width=100", slug: "samsung" },
  { id: 10, name: "Dell", logo: "/placeholder.svg?height=100&width=100", slug: "dell" },
  { id: 11, name: "HP", logo: "/placeholder.svg?height=100&width=100", slug: "hp" },
  { id: 12, name: "Lenovo", logo: "/placeholder.svg?height=100&width=100", slug: "lenovo" },
]

export default function BrandSection() {
  const { t } = useLanguage()

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{t("topStores")}</h2>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/stores" className="flex items-center gap-1">
            {t("viewAll")}
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {brands.map((brand) => (
          <Link key={brand.id} href={`/stores/${brand.slug}`} className="group flex flex-col items-center gap-2">
            <div className="brand-logo">
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                width={64}
                height={64}
                className="h-12 w-12 object-contain"
              />
            </div>
            <span className="text-sm font-medium group-hover:text-primary">{brand.name}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
