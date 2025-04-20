import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

type Offer = {
  id: number
  code?: string
  title: string
  description: string
  brandName: string
  brandLogo: string
  expiryDate: string
  usedCount: number
  slug: string
  isExclusive?: boolean
  isPopular?: boolean
  isTrending?: boolean
  type: "percentage" | "fixed" | "free-shipping" | "bogo"
  value?: string
}

const offers: Offer[] = [
  {
    id: 1,
    code: "SUMMER25",
    title: "25% Off Summer Collection",
    description: "Get 25% off on all summer collection items",
    brandName: "FashionHub",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-08-31",
    usedCount: 1245,
    slug: "fashionhub-summer25",
    isPopular: true,
    isTrending: true,
    type: "percentage",
    value: "25%",
  },
  {
    id: 2,
    code: "TECH15",
    title: "15% Off Electronics",
    description: "Save 15% on all electronics",
    brandName: "TechWorld",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-07-15",
    usedCount: 987,
    slug: "techworld-tech15",
    isPopular: true,
    isExclusive: true,
    type: "percentage",
    value: "15%",
  },
  {
    id: 3,
    title: "Free Shipping on Orders Over $50",
    description: "Get free shipping on all orders over $50",
    brandName: "BeautyStore",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-06-30",
    usedCount: 756,
    slug: "beautystore-freeshipping",
    isPopular: true,
    isTrending: true,
    type: "free-shipping",
  },
  {
    id: 4,
    code: "FOOD20",
    title: "20% Off Food Delivery",
    description: "Save 20% on your next food delivery",
    brandName: "FoodExpress",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-05-31",
    usedCount: 1532,
    slug: "foodexpress-food20",
    isTrending: true,
    type: "percentage",
    value: "20%",
  },
  {
    id: 5,
    code: "TRAVEL10",
    title: "10% Off Travel Packages",
    description: "Get 10% off on all travel packages",
    brandName: "TravelWise",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-09-30",
    usedCount: 432,
    slug: "travelwise-travel10",
    isExclusive: true,
    type: "percentage",
    value: "10%",
  },
  {
    id: 6,
    code: "HOME25",
    title: "25% Off Home Decor",
    description: "Save 25% on all home decor items",
    brandName: "HomeStyle",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-07-31",
    usedCount: 876,
    slug: "homestyle-home25",
    isPopular: true,
    isExclusive: true,
    type: "percentage",
    value: "25%",
  },
  {
    id: 7,
    code: "SHOES50",
    title: "$50 Off Shoes",
    description: "Get $50 off when you spend $200 or more on shoes",
    brandName: "FootwearCo",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-06-15",
    usedCount: 543,
    slug: "footwearco-shoes50",
    type: "fixed",
    value: "$50",
  },
  {
    id: 8,
    code: "BOGO50",
    title: "Buy One Get One 50% Off",
    description: "Buy one item and get the second 50% off",
    brandName: "ClothingStore",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-08-15",
    usedCount: 678,
    slug: "clothingstore-bogo50",
    isTrending: true,
    type: "bogo",
    value: "50%",
  },
  {
    id: 9,
    code: "BOOKS10",
    title: "10% Off Books",
    description: "Save 10% on all books",
    brandName: "BookStore",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-07-31",
    usedCount: 321,
    slug: "bookstore-books10",
    type: "percentage",
    value: "10%",
  },
]

export default function OffersPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">Best Offers</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Discover the best deals and offers from top brands. Save money on your favorite products and services.
        </p>
      </div>

      <Suspense fallback={<OffersSkeleton />}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <div key={offer.id} className="coupon-card">
              {offer.isExclusive && (
                <Badge className="absolute right-2 top-2" variant="secondary">
                  Exclusive
                </Badge>
              )}
              <div className="flex items-center gap-3 border-b p-4">
                <div className="flex-shrink-0">
                  <Image
                    src={offer.brandLogo || "/placeholder.svg"}
                    alt={offer.brandName}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-contain"
                  />
                </div>
                <div className="flex-1 overflow-hidden">
                  <h3 className="truncate font-medium">{offer.title}</h3>
                  <p className="text-sm text-muted-foreground">{offer.brandName}</p>
                </div>
                <div className="flex-shrink-0">
                  <Badge variant="outline" className="font-normal">
                    {offer.type === "percentage" && offer.value}
                    {offer.type === "fixed" && offer.value}
                    {offer.type === "free-shipping" && "Free Shipping"}
                    {offer.type === "bogo" && "BOGO"}
                  </Badge>
                </div>
              </div>
              <div className="p-4">
                <p className="mb-4 text-sm text-muted-foreground">{offer.description}</p>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-muted-foreground">
                      Expires: {new Date(offer.expiryDate).toLocaleDateString()}
                    </span>
                    <span className="text-xs text-muted-foreground">Used: {offer.usedCount} times</span>
                  </div>
                  {offer.code ? (
                    <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
                      <Link href={`/offers/${offer.slug}`}>
                        <Copy className="h-4 w-4" />
                        <span>{offer.code}</span>
                      </Link>
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/offers/${offer.slug}`}>Get Offer</Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Suspense>
    </div>
  )
}

function OffersSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Array(9)
        .fill(null)
        .map((_, i) => (
          <div key={i} className="coupon-card">
            <div className="flex items-center gap-3 border-b p-4">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
            <div className="p-4">
              <Skeleton className="mb-4 h-4 w-full" />
              <Skeleton className="mb-4 h-4 w-3/4" />
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <Skeleton className="h-3 w-24" />
                  <Skeleton className="h-3 w-20" />
                </div>
                <Skeleton className="h-8 w-24 rounded-md" />
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
