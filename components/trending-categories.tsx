"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Laptop,
  ShoppingBag,
  Plane,
  Utensils,
  Sparkles,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { cn } from "@/lib/utils";
import CouponCard from "@/components/CouponCard"; // Import CouponCard

type Category = {
  id: number;
  name: string;
  icon: React.ReactNode;
  slug: string;
  count: number;
};

type Coupon = {
  id: number;
  code: string;
  title: string;
  description: string;
  brandName: string;
  brandLogo: string;
  expiryDate: string;
  usedCount: number;
  slug: string;
  category: string; // category key
};

export const coupons: Coupon[] = [
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
    category: "fashion",
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
    category: "electronics",
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
    category: "beauty",
  },
  {
    id: 4,
    code: "FASHION10",
    title: "10% Off All Fashion Items",
    description: "Enjoy 10% off on all fashion items",
    brandName: "TrendSetters",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-07-31",
    usedCount: 560,
    slug: "trendsetters-fashion10",
    category: "fashion",
  },
  {
    id: 5,
    code: "TECH20",
    title: "20% Off Tech Gadgets",
    description: "Get 20% off on select tech gadgets",
    brandName: "GadgetGuru",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-08-15",
    usedCount: 1340,
    slug: "gadgetguru-tech20",
    category: "electronics",
  },
  {
    id: 6,
    code: "FOOD50",
    title: "50% Off on Food Orders",
    description: "Save 50% on your next food delivery",
    brandName: "FoodieDelights",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-06-20",
    usedCount: 890,
    slug: "foodiedelights-food50",
    category: "food",
  },
  {
    id: 7,
    code: "TRAVEL25",
    title: "25% Off Travel Packages",
    description: "Enjoy 25% off on your next travel booking",
    brandName: "WorldWanderer",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-09-01",
    usedCount: 450,
    slug: "worldwanderer-travel25",
    category: "travel",
  },
  {
    id: 8,
    code: "BEAUTY15",
    title: "15% Off Beauty Products",
    description: "Get 15% off on beauty and skincare products",
    brandName: "GlowUp",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-08-10",
    usedCount: 324,
    slug: "glowup-beauty15",
    category: "beauty",
  },
  {
    id: 9,
    code: "FOOD25",
    title: "25% Off on Restaurant Orders",
    description: "Save 25% on your restaurant order",
    brandName: "EatOut",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-06-15",
    usedCount: 1125,
    slug: "eatout-food25",
    category: "food",
  },
  {
    id: 10,
    code: "HOME30",
    title: "30% Off Home Decor",
    description: "Get 30% off on all home decor items",
    brandName: "HomeStyle",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-07-31",
    usedCount: 450,
    slug: "homestyle-home30",
    category: "home",
  },
  {
    id: 11,
    code: "TRAVEL15",
    title: "15% Off Travel Accessories",
    description: "Save 15% on travel accessories",
    brandName: "TravelEssentials",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-07-05",
    usedCount: 567,
    slug: "travelessentials-travel15",
    category: "travel",
  },
  {
    id: 12,
    code: "FASHION30",
    title: "30% Off Fashion Clearance",
    description: "Clearance sale - 30% off on fashion",
    brandName: "FashionEmpire",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-07-20",
    usedCount: 1400,
    slug: "fashionempire-fashion30",
    category: "fashion",
  },
  {
    id: 13,
    code: "TECH10",
    title: "10% Off Select Electronics",
    description: "Get 10% off on select electronic items",
    brandName: "TechieShop",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-06-25",
    usedCount: 200,
    slug: "techieshop-tech10",
    category: "electronics",
  },
  {
    id: 14,
    code: "FOOD20",
    title: "20% Off on Fast Food Orders",
    description: "Save 20% on your next fast food order",
    brandName: "FastFoodie",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-06-30",
    usedCount: 2100,
    slug: "fastfoodie-food20",
    category: "food",
  },
  {
    id: 15,
    code: "HOME15",
    title: "15% Off Home Appliances",
    description: "Get 15% off on selected home appliances",
    brandName: "HomeWorld",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-07-01",
    usedCount: 300,
    slug: "homeworld-home15",
    category: "home",
  },
];

const categoryColors: Record<string, string> = {
  electronics: "#D1E9FF",
  fashion: "#F2D7D9",
  travel: "#D6F8D1",
  food: "#F9F1A6",
  beauty: "#FAD7E0",
  home: "#A9C7E6",
};

export default function TrendingCategories() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] =
    useState<string>("electronics");

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
  ];

  const filteredCoupons = coupons.filter(
    (coupon) => coupon.category === selectedCategory
  );

  return (
    <section className="space-y-2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{t("trendingCategories")}</h2>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/categories" className="flex items-center gap-1">
            {t("viewAll")}
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {categories.map((category) => {
          const isSelected = selectedCategory === category.slug;
          return (
            <div
              key={category.id}
              onClick={() => setSelectedCategory(category.slug)}
              className={cn(
                "category-card group cursor-pointer border p-3 rounded-md transition relative",
                !isSelected && "hover:bg-muted"
              )}
              style={{
                backgroundColor: isSelected
                  ? categoryColors[category.slug]
                  : undefined,
                borderColor: isSelected
                  ? categoryColors[category.slug]
                  : "transparent",
              }}
            >
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                {category.icon}
              </div>
              <h3 className="text-center text-sm font-medium group-hover:text-primary">
                {category.name}
              </h3>
              <p className="text-center text-xs text-muted-foreground">
                {category.count} {t("bestOffers").toLowerCase()}
              </p>

              {isSelected && (
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent"
                  style={{
                    bottom: "-8px",
                    borderTopColor: categoryColors[category.slug],
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Coupons for Selected Category */}
      <div
        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 pt-4 p-4 rounded-md"
        style={{
          backgroundColor: `${categoryColors[selectedCategory]}`,
        }}
      >
        {filteredCoupons.length > 0 ? (
          filteredCoupons.map((coupon) => (
            <CouponCard key={coupon.id} coupon={coupon} />
          ))
        ) : (
          <p className="text-muted-foreground col-span-full text-center">
            {t("noCouponsFound")}
          </p>
        )}
      </div>
    </section>
  );
}
