import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

type Shop = {
  id: number
  name: string
  logo: string
  rating: number
  activeDeals: number
  slug: string
  featured?: boolean
  description: string
}

const shops: Shop[] = [
  {
    id: 1,
    name: "Amazon",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.8,
    activeDeals: 245,
    slug: "amazon",
    featured: true,
    description: "The world's largest online marketplace with millions of products.",
  },
  {
    id: 2,
    name: "Walmart",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.5,
    activeDeals: 187,
    slug: "walmart",
    featured: true,
    description: "Everyday low prices on a wide variety of products.",
  },
  {
    id: 3,
    name: "Target",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.6,
    activeDeals: 156,
    slug: "target",
    description: "Expect more, pay less with Target's quality products.",
  },
  {
    id: 4,
    name: "Best Buy",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.7,
    activeDeals: 132,
    slug: "best-buy",
    description: "Your destination for electronics, computers, appliances, and more.",
  },
  {
    id: 5,
    name: "Macy's",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.4,
    activeDeals: 98,
    slug: "macys",
    description: "Shop fashion, home, beauty, and more at Macy's.",
  },
  {
    id: 6,
    name: "Nike",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.9,
    activeDeals: 76,
    slug: "nike",
    featured: true,
    description: "Athletic footwear, apparel, and accessories for sports and fitness.",
  },
  {
    id: 7,
    name: "Adidas",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.7,
    activeDeals: 65,
    slug: "adidas",
    description: "Sports shoes, clothing, and accessories for all activities.",
  },
  {
    id: 8,
    name: "Apple",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.9,
    activeDeals: 43,
    slug: "apple",
    description: "Innovative technology products including iPhone, iPad, Mac, and more.",
  },
  {
    id: 9,
    name: "Samsung",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.6,
    activeDeals: 58,
    slug: "samsung",
    description: "Electronics, mobile devices, home appliances, and more.",
  },
  {
    id: 10,
    name: "Dell",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.5,
    activeDeals: 37,
    slug: "dell",
    description: "Computers, laptops, and technology solutions for home and business.",
  },
  {
    id: 11,
    name: "HP",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.4,
    activeDeals: 42,
    slug: "hp",
    description: "Laptops, desktops, printers, and computing accessories.",
  },
  {
    id: 12,
    name: "Lenovo",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.3,
    activeDeals: 31,
    slug: "lenovo",
    description: "Computers, laptops, tablets, and smart devices.",
  },
  {
    id: 13,
    name: "Home Depot",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.6,
    activeDeals: 89,
    slug: "home-depot",
    description: "Home improvement supplies, building materials, and appliances.",
  },
  {
    id: 14,
    name: "Lowe's",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.5,
    activeDeals: 76,
    slug: "lowes",
    description: "Home improvement products, tools, and building supplies.",
  },
  {
    id: 15,
    name: "Sephora",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.8,
    activeDeals: 67,
    slug: "sephora",
    description: "Beauty products, cosmetics, skincare, and fragrances.",
  },
  {
    id: 16,
    name: "Ulta Beauty",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.7,
    activeDeals: 54,
    slug: "ulta-beauty",
    description: "Cosmetics, skincare, haircare, and beauty products.",
  },
]

export default function StoresPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">Top Stores</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Discover the best deals and coupons from top brands worldwide. Browse our collection of stores to find
          exclusive discounts.
        </p>
      </div>

      <Suspense fallback={<StoresSkeleton />}>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {shops.map((shop) => (
            <Link
              key={shop.id}
              href={`/stores/${shop.slug}`}
              className="group relative flex flex-col rounded-lg border bg-card p-4 text-card-foreground shadow-sm transition-all hover:shadow-md"
            >
              {shop.featured && (
                <Badge className="absolute right-2 top-2" variant="secondary">
                  Trending
                </Badge>
              )}
              <div className="mb-4 flex items-center gap-3">
                <div className="flex-shrink-0">
                  <Image
                    src={shop.logo || "/placeholder.svg"}
                    alt={shop.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium group-hover:text-primary">{shop.name}</h3>
                  <div className="flex items-center gap-1">
                    <div className="flex items-center">
                      <Star className="h-3 w-3 fill-primary text-primary" />
                      <span className="ml-1 text-xs">{shop.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">• {shop.activeDeals} active deals</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{shop.description}</p>
            </Link>
          ))}
        </div>
      </Suspense>
    </div>
  )
}

function StoresSkeleton() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array(16)
        .fill(null)
        .map((_, i) => (
          <div key={i} className="flex flex-col rounded-lg border bg-card p-4 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-32" />
              </div>
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="mt-1 h-4 w-3/4" />
          </div>
        ))}
    </div>
  )
}
