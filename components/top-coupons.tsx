"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Check, ChevronRight, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { useLanguage } from "@/components/language-provider"

type Coupon = {
  id: number
  code: string
  title: string
  description: string
  brandName: string
  brandLogo: string
  expiryDate: string
  usedCount: number
  slug: string
}

const coupons: Coupon[] = [
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
  },
  {
    id: 3,
    code: "BEAUTY30",
    title: "30% Off Beauty Products",
    description: "Get 30% off on all beauty products",
    brandName: "BeautyStore",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-06-30",
    usedCount: 756,
    slug: "beautystore-beauty30",
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
  },
]

export default function TopCoupons() {
  const { toast } = useToast()
  const { t } = useLanguage()
  const [copiedCodes, setCopiedCodes] = useState<Record<string, boolean>>({})

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCodes({ ...copiedCodes, [code]: true })
    toast({
      title: "Code copied!",
      description: `${code} has been copied to your clipboard.`,
    })

    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setCopiedCodes({ ...copiedCodes, [code]: false })
    }, 2000)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date)
  }

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{t("topCoupons")}</h2>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/coupons" className="flex items-center gap-1">
            {t("viewAll")}
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {coupons.map((coupon) => (
          <div key={coupon.id} className="coupon-card">
            <div className="flex items-center gap-3 border-b p-4">
              <div className="flex-shrink-0">
                <Image
                  src={coupon.brandLogo || "/placeholder.svg"}
                  alt={coupon.brandName}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-contain"
                />
              </div>
              <div className="flex-1 overflow-hidden">
                <h3 className="truncate font-medium">{coupon.title}</h3>
                <p className="text-sm text-muted-foreground">{coupon.brandName}</p>
              </div>
            </div>
            <div className="p-4">
              <p className="mb-4 text-sm text-muted-foreground">{coupon.description}</p>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-muted-foreground">
                    {t("expires")}: {formatDate(coupon.expiryDate)}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {t("used")}: {coupon.usedCount} {t("times")}
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                  onClick={() => handleCopyCode(coupon.code)}
                >
                  {copiedCodes[coupon.code] ? (
                    <>
                      <Check className="h-4 w-4" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>{coupon.code}</span>
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
