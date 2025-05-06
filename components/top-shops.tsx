"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Star,
  ShoppingBag,
  Store,
  ShoppingCart,
  Monitor,
  Shirt,
  Footprints,
  Apple,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/language-provider";

type Shop = {
  id: number;
  name: string;
  logo?: string;
  icon: string;
  rating: number;
  activeDeals: number;
  slug: string;
  featured?: boolean;
};

const shops: Shop[] = [
  {
    id: 1,
    name: "Amazon",
    // logo: "/placeholder.svg?height=100&width=100",
    icon: "🛍️",
    rating: 4.8,
    activeDeals: 245,
    slug: "amazon",
    featured: true,
  },
  {
    id: 2,
    name: "Walmart",
    // logo: "/placeholder.svg?height=100&width=100",
    icon: "🏪",
    rating: 4.5,
    activeDeals: 187,
    slug: "walmart",
    featured: true,
  },
  {
    id: 3,
    name: "Target",
    // logo: "/placeholder.svg?height=100&width=100",
    icon: "🎯",
    rating: 4.6,
    activeDeals: 156,
    slug: "target",
  },
  {
    id: 4,
    name: "Best Buy",
    // logo: "/placeholder.svg?height=100&width=100",
    icon: "💻",
    rating: 4.7,
    activeDeals: 132,
    slug: "best-buy",
  },
  {
    id: 5,
    name: "Macy's",
    // logo: "/placeholder.svg?height=100&width=100",
    icon: "👔",
    rating: 4.4,
    activeDeals: 98,
    slug: "macys",
  },
  {
    id: 6,
    name: "Nike",
    // logo: "/placeholder.svg?height=100&width=100",
    icon: "👟",
    rating: 4.9,
    activeDeals: 76,
    slug: "nike",
    featured: true,
  },
  {
    id: 7,
    name: "Adidas",
    // logo: "/placeholder.svg?height=100&width=100",
    icon: "👟",
    rating: 4.7,
    activeDeals: 65,
    slug: "adidas",
  },
  {
    id: 8,
    name: "Apple",
    // logo: "/placeholder.svg?height=100&width=100",
    icon: "🍎",
    rating: 4.9,
    activeDeals: 43,
    slug: "apple",
  },
];

export default function TopShops() {
  const { t } = useLanguage();

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">{t("topShops")}</h2>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/stores" className="flex items-center gap-1">
            {t("viewAll")}
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {shops.map((shop) => (
          <Link
            key={shop.id}
            href={`/stores/${shop.slug}`}
            className="group relative flex items-center gap-3 rounded-lg border bg-card p-4 text-card-foreground shadow-sm transition-all hover:shadow-md"
          >
            {shop.featured && (
              <Badge className="absolute right-2 top-2" variant="secondary">
                {t("trending")}
              </Badge>
            )}
            <div className="flex-shrink-0">
              {shop.logo ? (
                <Image
                  src={shop.logo}
                  alt={shop.name}
                  width={100}
                  height={100}
                  className="h-12 w-12 rounded-full object-contain"
                />
              ) : (
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-2xl">
                  {shop.icon}
                </div>
              )}
            </div>
            <div className="flex-1">
              <h3 className="font-medium group-hover:text-primary">
                {shop.name}
              </h3>
              <div className="flex items-center gap-1">
                <div className="flex items-center">
                  <Star className="h-3 w-3 fill-primary text-primary" />
                  <span className="ml-1 text-xs">{shop.rating}</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  • {shop.activeDeals} {t("bestOffers").toLowerCase()}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
