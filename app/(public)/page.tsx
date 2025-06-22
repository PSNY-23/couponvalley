import { Suspense } from "react";
import BannerSlider from "@/components/banner-slider";
import StoreSection from "@/components/brand-section";
import TopCoupons from "@/components/top-coupons";
import TopShops from "@/components/top-shops";
import TrendingCategories from "@/components/trending-categories";
import PopularOffers from "@/components/popular-offers";
import { Skeleton } from "@/components/ui/skeleton";
import LogoCloud from "@/components/LogoCloud/LogoCloud";
import PaymentOptionsWithRealLogos from "@/components/PaymentOptionsWithRealLogos";

export default function Home() {
  return (
    <div className="container space-y-12 py-8 md:py-12">
      <Suspense fallback={<BannerSkeleton />}>
        <BannerSlider />
      </Suspense>

      <LogoCloud />

      <Suspense fallback={<TopCouponsSkeleton />}>
        <TopCoupons />
      </Suspense>

      <Suspense fallback={<StoreSectionSkeleton />}>
        <StoreSection />
      </Suspense>

      <Suspense fallback={<TrendingCategoriesSkeleton />}>
        <TrendingCategories />
      </Suspense>

      <Suspense fallback={<PopularOffersSkeleton />}>
        <PopularOffers />
      </Suspense>

      <Suspense fallback={<TopShopsSkeleton />}>
        <TopShops />
      </Suspense>

      <Suspense fallback={<PaymentOptionsWithRealLogosSkeleton />}>
        <PaymentOptionsWithRealLogos />
      </Suspense>
    </div>
  );
}

function BannerSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-[300px] w-full rounded-xl" />
      <div className="flex justify-center gap-2">
        <Skeleton className="h-2 w-12 rounded-full" />
        <Skeleton className="h-2 w-12 rounded-full" />
        <Skeleton className="h-2 w-12 rounded-full" />
      </div>
    </div>
  );
}

function StoreSectionSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-8 w-24" />
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {Array(12)
          .fill(null)
          .map((_, i) => (
            <Skeleton key={i} className="h-16 w-16 rounded-full" />
          ))}
      </div>
    </div>
  );
}

function TopCouponsSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-8 w-24" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array(6)
          .fill(null)
          .map((_, i) => (
            <Skeleton key={i} className="h-40 w-full rounded-lg" />
          ))}
      </div>
    </div>
  );
}

function TopShopsSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-8 w-24" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array(8)
          .fill(null)
          .map((_, i) => (
            <Skeleton key={i} className="h-32 w-full rounded-lg" />
          ))}
      </div>
    </div>
  );
}

function TrendingCategoriesSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-8 w-24" />
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {Array(6)
          .fill(null)
          .map((_, i) => (
            <Skeleton key={i} className="h-24 w-full rounded-lg" />
          ))}
      </div>
    </div>
  );
}

function PopularOffersSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-48" />
      </div>
      <div className="flex gap-2 border-b">
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <Skeleton key={i} className="h-10 w-40" />
          ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array(6)
          .fill(null)
          .map((_, i) => (
            <Skeleton key={i} className="h-40 w-full rounded-lg" />
          ))}
      </div>
    </div>
  );
}
function PaymentOptionsWithRealLogosSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-48" />
      </div>
      <div className="flex gap-2 border-b">
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <Skeleton key={i} className="h-10 w-40" />
          ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array(6)
          .fill(null)
          .map((_, i) => (
            <Skeleton key={i} className="h-40 w-full rounded-lg" />
          ))}
      </div>
    </div>
  );
}
