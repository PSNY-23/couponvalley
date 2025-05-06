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
import { coupons, type Coupon } from "../data/coupons";

type Category = {
  id: number;
  name: string;
  icon: React.ReactNode;
  slug: string;
  count: number;
};

// Extend the imported Coupon type with category
type CouponWithCategory = Coupon & {
  category: string;
};

// Add categories to the imported coupons
const couponsWithCategories: CouponWithCategory[] = coupons.map(
  (coupon, index) => ({
    ...coupon,
    category: ["electronics", "fashion", "travel", "food", "beauty", "home"][
      index % 6
    ],
  })
);

// Convert coupon type to match CouponCard props
const convertCouponForCard = (coupon: CouponWithCategory) => ({
  id: String(coupon.id),
  code: coupon.code,
  title: coupon.title,
  description: coupon.description,
  brandName: coupon.brandName,
  brandLogo: coupon.brandLogo,
  expiryDate: coupon.expiryDate,
  usedCount: coupon.usedCount,
});

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

  const filteredCoupons = couponsWithCategories.filter(
    (coupon) => coupon.category === selectedCategory
  );

  return (
    <section className="space-y-2">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">{t("trendingCategories")}</h2>
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
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-4 p-4 rounded-md"
        style={{
          backgroundColor: `${categoryColors[selectedCategory]}`,
        }}
      >
        {filteredCoupons.length > 0 ? (
          filteredCoupons.map((coupon) => (
            <CouponCard key={coupon.id} coupon={convertCouponForCard(coupon)} />
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
