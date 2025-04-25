"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

type Brand = {
  id: number;
  name: string;
  slug: string;
  icon: string;
};

const brands: Brand[] = [
  { id: 1, name: "Louis Vuitton", slug: "louis-vuitton", icon: "💼" },
  { id: 2, name: "Nike", slug: "nike", icon: "👟" },
  { id: 3, name: "Adidas", slug: "adidas", icon: "🧢" },
  { id: 4, name: "Killer", slug: "killer", icon: "👕" },
  { id: 5, name: "Zara", slug: "zara", icon: "🛍️" },
  { id: 6, name: "H&M", slug: "h-and-m", icon: "👗" },
  { id: 7, name: "Amazon", slug: "amazon", icon: "📦" },
  { id: 8, name: "Apple", slug: "apple", icon: "🍎" },
  { id: 9, name: "Samsung", slug: "samsung", icon: "📱" },
  { id: 10, name: "Dell", slug: "dell", icon: "💻" },
  { id: 11, name: "HP", slug: "hp", icon: "🖥️" },
  { id: 12, name: "Lenovo", slug: "lenovo", icon: "🧰" },
];

export default function BrandSection() {
  const { t } = useLanguage();

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{"Top Brands"}</h2>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/stores" className="flex items-center gap-1">
            {t("viewAll")}
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {brands.map((brand) => (
          <Link
            key={brand.id}
            href={`/stores/${brand.slug}`}
            className="group flex flex-col items-center gap-2 transition hover:scale-105 cursor-pointer"
          >
            <div className="rounded-full bg-muted flex items-center justify-center h-20 w-20 shadow-md group-hover:ring-2 group-hover:ring-primary text-3xl">
              {brand.icon}
            </div>
            <span className="text-sm font-semibold text-center group-hover:text-primary">
              {brand.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
