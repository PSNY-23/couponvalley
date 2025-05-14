"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import nikeLogo from "@/public/images/png/nikeLogo.png";
import brandLogo from "@/public/images/webp/brandLogo.avif";
import { StaticImageData } from "next/image";

type Brand = {
  id: number;
  name: string;
  slug: string;
  icon: StaticImageData;
};

const brands: Brand[] = [
  { id: 1, name: "Louis Vuitton", slug: "louis-vuitton", icon: brandLogo },
  { id: 2, name: "Nike", slug: "nike", icon: brandLogo },
  { id: 3, name: "Adidas", slug: "adidas", icon: brandLogo },
  { id: 4, name: "Killer", slug: "killer", icon: brandLogo },
  { id: 5, name: "Zara", slug: "zara", icon: brandLogo },
  { id: 6, name: "H&M", slug: "h-and-m", icon: brandLogo },
  { id: 7, name: "Amazon", slug: "amazon", icon: brandLogo },
  { id: 8, name: "Apple", slug: "apple", icon: brandLogo },
  { id: 9, name: "Samsung", slug: "samsung", icon: brandLogo },
  { id: 10, name: "Dell", slug: "dell", icon: brandLogo },
  { id: 11, name: "HP", slug: "hp", icon: brandLogo },
  { id: 12, name: "Lenovo", slug: "lenovo", icon: brandLogo },
];

export default function StoreSection() {
  const { t } = useLanguage();

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">{"Top Stores"}</h2>
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
            <div className="rounded-full bg-transparent flex items-center justify-center h-40 w-40 shadow-md group-hover:ring-2 group-hover:ring-primary text-5xl overflow-hidden">
              <Image
                src={brand.icon}
                alt={brand.name}
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="text-base font-semibold text-center group-hover:text-primary">
              {brand.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
