"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, ChevronRight, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/components/language-provider";

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
};

const coupons: Coupon[] = [
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
  },
  {
    id: 4,
    code: "FOOD20",
    title: "20% Off Food Delivery",
    description: "Save 20% on your next food delivery",
    brandName: "FoodExpress",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-05-31",
    usedCount: 1532,
    slug: "foodexpress-food20",
  },
  {
    id: 5,
    code: "TRAVEL10",
    title: "10% Off Travel Packages",
    description: "Get 10% off on all travel packages",
    brandName: "TravelWise",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-09-30",
    usedCount: 432,
    slug: "travelwise-travel10",
  },
  {
    id: 6,
    code: "HOME25",
    title: "25% Off Home Decor",
    description: "Save 25% on all home decor items",
    brandName: "HomeStyle",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-07-31",
    usedCount: 876,
    slug: "homestyle-home25",
  },
  {
    id: 7,
    code: "FITNESS20",
    title: "20% Off Fitness Equipment",
    description: "Save 20% on all fitness equipment",
    brandName: "FitLife",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-08-15",
    usedCount: 654,
    slug: "fitlife-fitness20",
  },
  {
    id: 8,
    code: "GAMING15",
    title: "15% Off Gaming Accessories",
    description: "Get 15% off on all gaming accessories",
    brandName: "GameZone",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-07-20",
    usedCount: 789,
    slug: "gamezone-gaming15",
  },
  {
    id: 9,
    code: "BOOKS30",
    title: "30% Off Books",
    description: "Save 30% on all books",
    brandName: "BookWorld",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-06-25",
    usedCount: 543,
    slug: "bookworld-books30",
  },
  {
    id: 10,
    code: "PET25",
    title: "25% Off Pet Supplies",
    description: "Get 25% off on all pet supplies",
    brandName: "PetCare",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-08-10",
    usedCount: 321,
    slug: "petcare-pet25",
  },
];

export default function TopCoupons() {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [copiedCodes, setCopiedCodes] = useState<Record<string, boolean>>({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [revealedCodes, setRevealedCodes] = useState<Record<string, boolean>>(
    {}
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % coupons.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const handleRevealCode = (code: string) => {
    setRevealedCodes((prev) => ({ ...prev, [code]: true }));
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodes({ ...copiedCodes, [code]: true });
    toast({
      title: "Code copied!",
      description: `${code} has been copied to your clipboard.`,
    });

    setTimeout(() => {
      setCopiedCodes((prev) => ({ ...prev, [code]: false }));
    }, 2000);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{t("topCoupons")}</h2>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/coupons" className="flex items-center gap-1">
            {t("viewAll")}
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="relative">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {isMobile ? (
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {coupons.map((coupon) => (
                  <div
                    key={coupon.id}
                    className="w-full flex-shrink-0 coupon-card border rounded-lg overflow-hidden shadow-sm bg-background relative"
                  >
                    {/* Top Part: Brand Image */}
                    <div className="bg-muted p-6 flex justify-center items-center">
                      <Image
                        src={coupon.brandLogo || "/placeholder.svg"}
                        alt={coupon.brandName}
                        width={64}
                        height={64}
                        className="h-16 w-16 rounded-full object-contain"
                      />
                    </div>

                    {/* Bottom Part: Content */}
                    <div className="p-4 pb-16 min-h-[120px] flex flex-col justify-center">
                      <div className="text-center">
                        <h3 className="font-semibold text-lg line-clamp-1">
                          {coupon.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-1">
                          {coupon.brandName}
                        </p>
                      </div>
                    </div>

                    {/* Fixed Button at Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-background border-t">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          onClick={() => handleRevealCode(coupon.code)}
                        >
                          <span className="text-center">
                            {revealedCodes[coupon.code]
                              ? coupon.code
                              : "Click to reveal code"}
                          </span>
                        </Button>
                        {revealedCodes[coupon.code] && (
                          <div
                            className="h-8 w-8 p-0 flex items-center justify-center rounded-md hover:bg-muted cursor-pointer"
                            onClick={() => handleCopyCode(coupon.code)}
                          >
                            {copiedCodes[coupon.code] ? (
                              <Check className="h-4 w-4" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            coupons.map((coupon) => (
              <div
                key={coupon.id}
                className="coupon-card border rounded-lg overflow-hidden shadow-sm bg-background"
              >
                {/* Top Part: Brand Image */}
                <div className="bg-muted p-6 flex justify-center items-center">
                  <Image
                    src={coupon.brandLogo || "/placeholder.svg"}
                    alt={coupon.brandName}
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full object-contain"
                  />
                </div>

                {/* Bottom Part: Content */}
                <div className="p-4 space-y-2">
                  <div>
                    <h3 className="font-semibold text-base truncate">
                      {coupon.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {coupon.brandName}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {coupon.description}
                  </p>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <div>
                      {t("expires")}: {formatDate(coupon.expiryDate)}
                    </div>
                    <div>
                      {t("used")}: {coupon.usedCount} {t("times")}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center justify-between w-full group"
                    onClick={() => handleRevealCode(coupon.code)}
                  >
                    <span className="flex-1 text-center">
                      {revealedCodes[coupon.code]
                        ? coupon.code
                        : "Click to reveal code"}
                    </span>
                    {revealedCodes[coupon.code] && (
                      <div
                        className="h-8 w-8 p-0 flex items-center justify-center rounded-md hover:bg-muted cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopyCode(coupon.code);
                        }}
                      >
                        {copiedCodes[coupon.code] ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </div>
                    )}
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
