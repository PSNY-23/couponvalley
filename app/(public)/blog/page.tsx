import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { CalendarIcon, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

type BlogPost = {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  author: string
  category: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Ways to Save Money on Your Next Online Purchase",
    excerpt:
      "Discover the best strategies to save money when shopping online, from using coupon codes to timing your purchases right.",
    image: "/placeholder.svg?height=400&width=600",
    date: "2025-04-15",
    readTime: "5 min",
    author: "Sarah Johnson",
    category: "Shopping Tips",
    slug: "10-ways-to-save-money",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Black Friday Deals",
    excerpt:
      "Everything you need to know about finding the best Black Friday deals and avoiding common shopping pitfalls.",
    image: "/placeholder.svg?height=400&width=600",
    date: "2025-04-10",
    readTime: "8 min",
    author: "Michael Brown",
    category: "Seasonal Deals",
    slug: "ultimate-guide-black-friday",
  },
  {
    id: 3,
    title: "How to Find the Best Travel Discounts",
    excerpt: "Learn how to score amazing deals on flights, hotels, and vacation packages with these expert tips.",
    image: "/placeholder.svg?height=400&width=600",
    date: "2025-04-05",
    readTime: "6 min",
    author: "Emily Davis",
    category: "Travel",
    slug: "find-best-travel-discounts",
  },
  {
    id: 4,
    title: "Understanding Cashback Programs: Are They Worth It?",
    excerpt:
      "A deep dive into cashback programs, how they work, and whether they're actually saving you money in the long run.",
    image: "/placeholder.svg?height=400&width=600",
    date: "2025-03-28",
    readTime: "7 min",
    author: "David Wilson",
    category: "Money Saving",
    slug: "understanding-cashback-programs",
  },
  {
    id: 5,
    title: "The Psychology of Sales: Why We Can't Resist a Good Deal",
    excerpt:
      "Explore the psychological triggers that make sales and discounts so appealing and how retailers use them to influence our buying decisions.",
    image: "/placeholder.svg?height=400&width=600",
    date: "2025-03-20",
    readTime: "9 min",
    author: "Jessica Martinez",
    category: "Consumer Psychology",
    slug: "psychology-of-sales",
  },
  {
    id: 6,
    title: "How to Stack Coupons for Maximum Savings",
    excerpt:
      "Master the art of coupon stacking to multiply your savings on every purchase with these proven techniques.",
    image: "/placeholder.svg?height=400&width=600",
    date: "2025-03-15",
    readTime: "6 min",
    author: "Robert Taylor",
    category: "Coupon Strategies",
    slug: "stack-coupons-maximum-savings",
  },
]

export default function BlogPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">Blog</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Discover tips, guides, and insights on how to save money and find the best deals online.
        </p>
      </div>

      <Suspense fallback={<BlogSkeleton />}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Badge variant="secondary" className="font-normal">
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <CalendarIcon className="h-3 w-3" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h2 className="mb-2 text-xl font-semibold group-hover:text-primary">{post.title}</h2>
                <p className="mb-4 text-sm text-muted-foreground">{post.excerpt}</p>
                <p className="text-xs font-medium">By {post.author}</p>
              </div>
            </Link>
          ))}
        </div>
      </Suspense>
    </div>
  )
}

function BlogSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array(6)
        .fill(null)
        .map((_, i) => (
          <div key={i} className="overflow-hidden rounded-lg border bg-card shadow-sm">
            <Skeleton className="aspect-video w-full" />
            <div className="p-4">
              <div className="mb-2 flex items-center gap-2">
                <Skeleton className="h-5 w-20 rounded-full" />
                <Skeleton className="h-4 w-24" />
              </div>
              <Skeleton className="mb-2 h-6 w-full" />
              <Skeleton className="mb-1 h-4 w-full" />
              <Skeleton className="mb-4 h-4 w-3/4" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
        ))}
    </div>
  )
}
