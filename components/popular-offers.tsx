"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/components/language-provider";

type Offer = {
  id: number;
  code?: string;
  title: string;
  description: string;
  brandName: string;
  brandLogo: string;
  expiryDate: string;
  usedCount: number;
  slug: string;
  isExclusive?: boolean;
  isPopular?: boolean;
  isTrending?: boolean;
};

const offers: Offer[] = [
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
    isPopular: true,
    isTrending: true,
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
    isPopular: true,
    isExclusive: true,
  },
  {
    id: 3,
    title: "Free Shipping on Orders Over $50",
    description: "Get free shipping on all orders over $50",
    brandName: "BeautyStore",
    brandLogo: "/placeholder.svg?height=100&width=100",
    expiryDate: "2025-06-30",
    usedCount: 756,
    slug: "beautystore-freeshipping",
    isPopular: true,
    isTrending: true,
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
    isTrending: true,
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
    isExclusive: true,
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
    isPopular: true,
    isExclusive: true,
  },
];

export default function PopularOffers() {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [copiedCodes, setCopiedCodes] = useState<Record<string, boolean>>({});
  const [activeTab, setActiveTab] = useState("popular");

  const handleCopyCode = (code: string) => {
    if (!code) return;

    navigator.clipboard.writeText(code);
    setCopiedCodes({ ...copiedCodes, [code]: true });
    toast({
      title: "Code copied!",
      description: `${code} has been copied to your clipboard.`,
    });

    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setCopiedCodes({ ...copiedCodes, [code]: false });
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

  const filteredOffers = {
    popular: offers.filter((offer) => offer.isPopular),
    trending: offers.filter((offer) => offer.isTrending),
    exclusive: offers.filter((offer) => offer.isExclusive),
  };

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold">{t("popularOffers")}</h2>
      <Tabs defaultValue="popular" onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="popular">{t("todaysBestOffers")}</TabsTrigger>
          <TabsTrigger value="trending">
            {t("peopleAreCurrentlyUsing")}
          </TabsTrigger>
          <TabsTrigger value="exclusive">{t("exclusive")}</TabsTrigger>
        </TabsList>
        {["popular", "trending", "exclusive"].map((tab) => (
          <TabsContent key={tab} value={tab} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {filteredOffers[tab as keyof typeof filteredOffers].map(
                (offer) => (
                  <div key={offer.id} className="coupon-card">
                    {tab === "exclusive" && (
                      <Badge
                        className="absolute right-2 top-2"
                        variant="secondary"
                      >
                        {t("exclusive")}
                      </Badge>
                    )}
                    <div className="flex items-center gap-3 border-b p-4">
                      <div className="flex-shrink-0">
                        <Image
                          src={offer.brandLogo || "/placeholder.svg"}
                          alt={offer.brandName}
                          width={100}
                          height={100}
                          className="h-30 w-30 rounded-full object-contain"
                        />
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <h3 className="truncate font-medium">{offer.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {offer.brandName}
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="mb-4 text-sm text-muted-foreground">
                        {offer.description}
                      </p>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-col gap-1">
                          <span className="text-xs text-muted-foreground">
                            {t("expires")}: {formatDate(offer.expiryDate)}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {t("used")}: {offer.usedCount} {t("times")}
                          </span>
                        </div>
                        {offer.code ? (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-1"
                            onClick={() => handleCopyCode(offer.code!)}
                          >
                            {copiedCodes[offer.code] ? (
                              <>
                                <Check className="h-4 w-4" />
                                <span>Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4" />
                                <span>{offer.code}</span>
                              </>
                            )}
                          </Button>
                        ) : (
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/offers/${offer.slug}`}>
                              {t("getOffer")}
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
