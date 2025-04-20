import type React from "react"
import { Suspense } from "react"
import Link from "next/link"
import {
  Laptop,
  ShoppingBag,
  Plane,
  Utensils,
  Sparkles,
  Home,
  Gamepad,
  Gift,
  Book,
  Dumbbell,
  Baby,
  Car,
} from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

type Category = {
  id: number
  name: string
  icon: React.ReactNode
  slug: string
  count: number
  description: string
}

const categories: Category[] = [
  {
    id: 1,
    name: "Electronics",
    icon: <Laptop className="h-8 w-8" />,
    slug: "electronics",
    count: 245,
    description: "Deals on laptops, smartphones, TVs, and other electronic devices.",
  },
  {
    id: 2,
    name: "Fashion",
    icon: <ShoppingBag className="h-8 w-8" />,
    slug: "fashion",
    count: 187,
    description: "Discounts on clothing, shoes, accessories, and more.",
  },
  {
    id: 3,
    name: "Travel",
    icon: <Plane className="h-8 w-8" />,
    slug: "travel",
    count: 156,
    description: "Savings on flights, hotels, vacation packages, and travel gear.",
  },
  {
    id: 4,
    name: "Food & Dining",
    icon: <Utensils className="h-8 w-8" />,
    slug: "food",
    count: 132,
    description: "Offers on restaurants, food delivery, groceries, and more.",
  },
  {
    id: 5,
    name: "Beauty & Health",
    icon: <Sparkles className="h-8 w-8" />,
    slug: "beauty",
    count: 98,
    description: "Deals on makeup, skincare, health products, and wellness items.",
  },
  {
    id: 6,
    name: "Home & Garden",
    icon: <Home className="h-8 w-8" />,
    slug: "home",
    count: 76,
    description: "Discounts on furniture, decor, appliances, and garden supplies.",
  },
  {
    id: 7,
    name: "Gaming",
    icon: <Gamepad className="h-8 w-8" />,
    slug: "gaming",
    count: 65,
    description: "Offers on video games, consoles, accessories, and gaming gear.",
  },
  {
    id: 8,
    name: "Gifts & Flowers",
    icon: <Gift className="h-8 w-8" />,
    slug: "gifts",
    count: 54,
    description: "Savings on gifts, flowers, personalized items, and gift cards.",
  },
  {
    id: 9,
    name: "Books & Media",
    icon: <Book className="h-8 w-8" />,
    slug: "books",
    count: 43,
    description: "Deals on books, e-books, audiobooks, music, and movies.",
  },
  {
    id: 10,
    name: "Sports & Fitness",
    icon: <Dumbbell className="h-8 w-8" />,
    slug: "sports",
    count: 38,
    description: "Discounts on sports equipment, fitness gear, and activewear.",
  },
  {
    id: 11,
    name: "Kids & Baby",
    icon: <Baby className="h-8 w-8" />,
    slug: "kids",
    count: 32,
    description: "Offers on toys, baby gear, children's clothing, and more.",
  },
  {
    id: 12,
    name: "Automotive",
    icon: <Car className="h-8 w-8" />,
    slug: "automotive",
    count: 27,
    description: "Savings on auto parts, accessories, services, and rentals.",
  },
]

export default function CategoriesPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">Categories</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Browse deals and coupons by category to find exactly what you're looking for. We have offers across a wide
          range of products and services.
        </p>
      </div>

      <Suspense fallback={<CategoriesSkeleton />}>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group flex flex-col rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                {category.icon}
              </div>
              <h3 className="mb-2 text-lg font-medium group-hover:text-primary">{category.name}</h3>
              <p className="mb-2 text-sm text-muted-foreground">{category.description}</p>
              <p className="mt-auto text-sm font-medium">{category.count} active deals</p>
            </Link>
          ))}
        </div>
      </Suspense>
    </div>
  )
}

function CategoriesSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array(12)
        .fill(null)
        .map((_, i) => (
          <div key={i} className="flex flex-col rounded-lg border bg-card p-6 shadow-sm">
            <Skeleton className="mb-4 h-16 w-16 rounded-full" />
            <Skeleton className="mb-2 h-6 w-32" />
            <Skeleton className="mb-1 h-4 w-full" />
            <Skeleton className="mb-2 h-4 w-3/4" />
            <Skeleton className="mt-auto h-4 w-24" />
          </div>
        ))}
    </div>
  )
}
