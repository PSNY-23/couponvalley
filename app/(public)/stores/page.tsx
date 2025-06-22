"use client";

import { Suspense, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, Search, Filter, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import * as Tooltip from "@radix-ui/react-tooltip";

type Shop = {
  id: number;
  name: string;
  logo: string;
  rating: number;
  activeDeals: number;
  slug: string;
  featured?: boolean;
  description: string;
  category: string;
};

const shops: Shop[] = [
  {
    id: 1,
    name: "Amazon",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.8,
    activeDeals: 245,
    slug: "amazon",
    featured: true,
    category: "Marketplace",
    description:
      "The world's largest online marketplace with millions of products.",
  },
  {
    id: 2,
    name: "Walmart",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.5,
    activeDeals: 187,
    slug: "walmart",
    featured: true,
    category: "Retail",
    description: "Everyday low prices on a wide variety of products.",
  },
  {
    id: 3,
    name: "Target",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.6,
    activeDeals: 156,
    slug: "target",
    category: "Retail",
    description: "Expect more, pay less with Target's quality products.",
  },
  {
    id: 4,
    name: "Best Buy",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.7,
    activeDeals: 132,
    slug: "best-buy",
    category: "Electronics",
    description:
      "Your destination for electronics, computers, appliances, and more.",
  },
  {
    id: 5,
    name: "Macy's",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.4,
    activeDeals: 98,
    slug: "macys",
    category: "Fashion",
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
    category: "Sports",
    description:
      "Athletic footwear, apparel, and accessories for sports and fitness.",
  },
  {
    id: 7,
    name: "Adidas",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.7,
    activeDeals: 65,
    slug: "adidas",
    category: "Sports",
    description: "Sports shoes, clothing, and accessories for all activities.",
  },
  {
    id: 8,
    name: "Apple",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.9,
    activeDeals: 43,
    slug: "apple",
    category: "Electronics",
    description:
      "Innovative technology products including iPhone, iPad, Mac, and more.",
  },
  {
    id: 9,
    name: "Samsung",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.6,
    activeDeals: 58,
    slug: "samsung",
    category: "Electronics",
    description: "Electronics, mobile devices, home appliances, and more.",
  },
  {
    id: 10,
    name: "Dell",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.5,
    activeDeals: 37,
    slug: "dell",
    category: "Electronics",
    description:
      "Computers, laptops, and technology solutions for home and business.",
  },
  {
    id: 11,
    name: "HP",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.4,
    activeDeals: 42,
    slug: "hp",
    category: "Electronics",
    description: "Laptops, desktops, printers, and computing accessories.",
  },
  {
    id: 12,
    name: "Lenovo",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.3,
    activeDeals: 31,
    slug: "lenovo",
    category: "Electronics",
    description: "Computers, laptops, tablets, and smart devices.",
  },
  {
    id: 13,
    name: "Home Depot",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.6,
    activeDeals: 89,
    slug: "home-depot",
    category: "Home Improvement",
    description:
      "Home improvement supplies, building materials, and appliances.",
  },
  {
    id: 14,
    name: "Lowe's",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.5,
    activeDeals: 76,
    slug: "lowes",
    category: "Home Improvement",
    description: "Home improvement products, tools, and building supplies.",
  },
  {
    id: 15,
    name: "Sephora",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.8,
    activeDeals: 67,
    slug: "sephora",
    category: "Beauty",
    description: "Beauty products, cosmetics, skincare, and fragrances.",
  },
  {
    id: 16,
    name: "Ulta Beauty",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.7,
    activeDeals: 54,
    slug: "ulta-beauty",
    category: "Beauty",
    description: "Cosmetics, skincare, haircare, and beauty products.",
  },
];

const categories = Array.from(new Set(shops.map((shop) => shop.category)));

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const gradientColors = [
  "bg-gradient-to-br from-white to-[#042558]/5",
  "bg-gradient-to-br from-white to-[#042558]/5",
  "bg-gradient-to-br from-white to-[#042558]/5",
  "bg-gradient-to-br from-white to-[#042558]/5",
  "bg-gradient-to-br from-white to-[#042558]/5",
  "bg-gradient-to-br from-white to-[#042558]/5",
];

export default function StoresPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredShops = useMemo(() => {
    return shops.filter((shop) => {
      const matchesSearch =
        shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shop.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || shop.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="container py-8 md:py-4 md:pb-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <h1 className="mb-2 bg-gradient-to-r from-[#042558] to-[#0a4b8c] bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
          Top Stores
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Discover the best deals and coupons from top brands worldwide. Browse
          our collection of stores to find exclusive discounts.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#042558]" />
          <Input
            type="text"
            placeholder="Search stores..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 border-[#042558]/20 focus:border-[#042558] focus:ring-[#042558]/20"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-[#042558]" />
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px] border-[#042558]/20 focus:border-[#042558] focus:ring-[#042558]/20">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </motion.div>

      <Suspense fallback={<StoresSkeleton />}>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredShops.map((shop, index) => (
            <motion.div
              key={shop.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/stores/${shop.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-[#042558]/10  p-6 text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-[#042558]/20 dark:from-[#042558]/5 dark:to-[#042558]/10"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    gradientColors[index % gradientColors.length]
                  } opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
                <div className="relative">
                  {shop.featured && (
                    <Badge
                      className="absolute right-0 top-0 z-10 bg-gradient-to-r from-[#042558] to-[#0a4b8c] text-white shadow-md"
                      variant="secondary"
                    >
                      Trending
                    </Badge>
                  )}
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-gradient-to-br from-[#042558]/10 to-[#0a4b8c]/5 p-2 transition-transform duration-300 group-hover:scale-110">
                        <Image
                          src={shop.logo || "/placeholder.svg"}
                          alt={shop.name}
                          width={64}
                          height={64}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1 text-lg font-semibold tracking-tight text-[#042558] group-hover:text-[#0a4b8c]">
                        {shop.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center rounded-full bg-[#042558]/10 px-2 py-0.5">
                          <Star className="h-3 w-3 fill-[#042558] text-[#042558]" />
                          <span className="ml-1 text-xs font-medium text-[#042558]">
                            {shop.rating}
                          </span>
                        </div>
                        <span className="text-xs text-[#042558]/70">
                          {shop.activeDeals} active deals
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="mb-4 text-sm text-[#042558]/70 line-clamp-2">
                    {shop.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className="bg-[#042558]/5 text-[#042558] hover:bg-[#042558]/10 border-[#042558]/20"
                    >
                      {shop.category}
                    </Badge>
                    <span className="flex items-center text-xs font-medium text-[#042558] group-hover:text-[#0a4b8c] group-hover:underline">
                      View deals{" "}
                      <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Suspense>
    </div>
  );
}

function StoresSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array(16)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            className="flex flex-col rounded-xl border border-[#042558]/10 bg-gradient-to-br from-white to-[#042558]/5 p-6 shadow-sm dark:from-[#042558]/5 dark:to-[#042558]/10"
          >
            <div className="mb-4 flex items-center gap-4">
              <Skeleton className="h-16 w-16 rounded-xl bg-[#042558]/10" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-5 w-24 bg-[#042558]/10" />
                <Skeleton className="h-4 w-32 bg-[#042558]/10" />
              </div>
            </div>
            <Skeleton className="mb-4 h-4 w-full bg-[#042558]/10" />
            <Skeleton className="mb-4 h-4 w-3/4 bg-[#042558]/10" />
            <div className="mt-auto flex items-center justify-between">
              <Skeleton className="h-6 w-20 bg-[#042558]/10" />
              <Skeleton className="h-4 w-16 bg-[#042558]/10" />
            </div>
          </div>
        ))}
    </div>
  );
}
