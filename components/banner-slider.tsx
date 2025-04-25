"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/language-provider";

type Banner = {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
  brandName: string;
  couponCode?: string;
};

const banners: Banner[] = [
  {
    id: 1,
    image: "/images/electronics.jpg", // Use real images placed in public/images/
    title: "50% Off Electronics",
    description: "Get amazing deals on the latest electronics",
    link: "/stores/electronics-store",
    brandName: "ElectroTech",
    couponCode: "ELECTRO50",
  },
  {
    id: 2,
    image: "/images/fashion.jpg",
    title: "Summer Fashion Sale",
    description: "Refresh your wardrobe with our summer collection",
    link: "/stores/fashion-brand",
    brandName: "FashionHub",
    couponCode: "SUMMER25",
  },
  {
    id: 3,
    image: "/images/travel.jpg",
    title: "Travel Discounts",
    description: "Plan your next vacation with exclusive discounts",
    link: "/stores/travel-agency",
    brandName: "TravelWise",
  },
];

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t, isRTL } = useLanguage();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-xl shadow-md">
      <div className="relative h-[300px] md:h-[400px]">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-in-out",
              index === currentSlide
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            )}
          >
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            <div className="absolute inset-0 flex flex-col justify-center px-6 text-white md:px-12">
              <div className="max-w-xl space-y-4">
                <h2 className="text-3xl font-bold md:text-5xl drop-shadow-lg">
                  {banner.title}
                </h2>
                <p className="text-sm md:text-lg text-white/90 drop-shadow-md">
                  {banner.description}
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button
                    asChild
                    variant="outline"
                    className="border-white bg-white/20 text-white hover:bg-white hover:text-blue-600 backdrop-blur"
                  >
                    <Link href={banner.link}>
                      {banner.couponCode
                        ? `${t("copyCode")}: ${banner.couponCode}`
                        : t("getOffer")}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 text-foreground hover:bg-background/90"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>

      {/* Right Arrow */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 text-foreground hover:bg-background/90"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 w-8 rounded-full transition-all",
              index === currentSlide
                ? "bg-primary"
                : "bg-primary/30 hover:bg-primary/50"
            )}
            onClick={() => setCurrentSlide(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
