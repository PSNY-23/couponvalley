"use client"

import type React from "react"

import Link from "next/link"
import { ChevronRight, Laptop, ShoppingBag, Plane, Utensils, Sparkles, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

type Category = {
  id: number
  name: string
  icon: React.ReactNode
  slug: string
  count: number
}

export default function TrendingCategories() {
  const { t } = useLanguage()

  const categories: Category[] = [
    {
      id: 1,
      name: t("electronics"),
      icon: <Laptop className="h-6 w-6" />,
      slug: "electronics",
      count: 245,
    },
    {
      id: 2,
      name: t("fashion"),
      icon: <ShoppingBag className="h-6 w-6" />,
      slug: "fashion",
      count: 187,
    },
    {
      id: 3,
      name: t("travel"),
      icon: <Plane className="h-6 w-6" />,
      slug: "travel",
      count: 156,
    },
    {
      id: 4,
      name: t("food"),
      icon: <Utensils className="h-6 w-6" />,
      slug: "food",
      count: 132,
    },
    {
      id: 5,
      name: t("beauty"),
      icon: <Sparkles className="h-6 w-6" />,
      slug: "beauty",
      count: 98,
    },
    {
      id: 6,
      name: t("home"),
      icon: <Home className="h-6 w-6" />,
      slug: "home",
      count: 76,
    },
  ]

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{t("trendingCategories")}</h2>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/categories" className="flex items-center gap-1">
            {t("viewAll")}
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {categories.map((category) => (
          <Link key={category.id} href={`/categories/${category.slug}`} className="category-card group">
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              {category.icon}
            </div>
            <h3 className="text-center text-sm font-medium group-hover:text-primary">{category.name}</h3>
            <p className="text-center text-xs text-muted-foreground">
              {category.count} {t("bestOffers").toLowerCase()}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
