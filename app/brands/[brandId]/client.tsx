"use client";

import Image from "next/image";
import { ExternalLink, Info, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useState } from "react";
import { Brand } from "@/data/brands";

// Sample similar stores
const similarStores = [
  "Overstock",
  "Newegg",
  "Forlest",
  "SHOP.COM",
  "Meeloog",
  "MemberDeals",
  "Ulike",
  "Clipp",
  "Mutha",
  "Bonanza",
  "Shop by Bravo",
  "AliExpress",
  "Pier 1",
  "Joss & Main",
  "Tanga",
  "World Market",
  "Birch Lane",
  "AllModern",
  "Banggood",
  "Houzz",
];

// Sample popular stores
const popularStores = [
  "Best Buy",
  "Chewy.com",
  "eBay",
  "Expedia",
  "Hotels.com",
  "Macy's",
  "Office Depot® & OfficeMax®",
  "Priceline",
  "SHEIN",
  "Target",
  "Temu",
  "The Home Depot",
  "ULTA",
  "Walmart",
  "Wayfair",
  "Amazon",
];

// Sample categories
const categories = [
  { name: "Electronics", items: 1500 },
  { name: "Clothing", items: 2300 },
  { name: "Home & Kitchen", items: 1800 },
  { name: "Books", items: 3500 },
  { name: "Beauty", items: 1200 },
  { name: "Toys & Games", items: 950 },
  { name: "Sports & Outdoors", items: 1100 },
  { name: "Grocery", items: 750 },
];

interface BrandPageClientProps {
  brand: Brand;
}

export function BrandPageClient({ brand }: BrandPageClientProps) {
  const [visibleCoupons, setVisibleCoupons] = useState(15);

  const handleLoadMore = () => {
    setVisibleCoupons((prev) => prev + 15);
  };

  const displayedCoupons = brand.coupons.slice(0, visibleCoupons);
  const hasMoreCoupons = brand.coupons.length > visibleCoupons;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 py-4">
        {/* Top Brand Section */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 mb-6">
          <div className="relative overflow-hidden rounded-xl">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-100 via-fuchsia-100 to-rose-100 animate-gradient-x"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-white/80"></div>

            {/* Content */}
            <div className="relative p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Brand Logo */}
                <div className="flex flex-col items-center md:w-80 shrink-0">
                  <div className="rounded-full border w-32 h-32 flex items-center justify-center overflow-hidden mb-2 bg-gradient-to-br from-white/90 to-white/50 shadow-md backdrop-blur-sm">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} Logo`}
                      width={120}
                      height={120}
                      className="object-cover rounded-full w-full h-full"
                    />
                  </div>
                  <h3 className="font-bold text-center  text-[#042558] ">
                    {brand.name}
                  </h3>
                  <p className="text-xs text-slate-600 text-center">
                    {brand.description}
                  </p>
                </div>

                {/* Brand Info Content */}
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-violet-100 to-fuchsia-100 p-2 rounded-full animate-pulse shadow-sm backdrop-blur-sm">
                      <Info className="h-5 w-5 text-violet-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col gap-3">
                        <h2 className="font-bold text-xl bg-gradient-to-r from-violet-700 via-fuchsia-700 to-rose-700 bg-clip-text text-transparent">
                          {brand.name} Shopping Tips
                        </h2>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {brand.name} offers free shipping on orders over $25
                          for non-Prime members. Prime members enjoy free 2-day
                          shipping on millions of items. Check out {brand.name}
                          's Deal of the Day for daily discounts up to 70% off!
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="bg-gradient-to-r from-violet-100 via-fuchsia-100 to-rose-100 text-violet-700 text-xs px-3 py-1.5 rounded-full font-medium hover:from-violet-200 hover:via-fuchsia-200 hover:to-rose-200 transition-all duration-300 cursor-pointer border border-violet-200/50 shadow-sm backdrop-blur-sm">
                            Prime Day Deals
                          </span>
                          <span className="bg-gradient-to-r from-violet-100 via-fuchsia-100 to-rose-100 text-violet-700 text-xs px-3 py-1.5 rounded-full font-medium hover:from-violet-200 hover:via-fuchsia-200 hover:to-rose-200 transition-all duration-300 cursor-pointer border border-violet-200/50 shadow-sm backdrop-blur-sm">
                            Subscribe & Save
                          </span>
                          <span className="bg-gradient-to-r from-violet-100 via-fuchsia-100 to-rose-100 text-violet-700 text-xs px-3 py-1.5 rounded-full font-medium hover:from-violet-200 hover:via-fuchsia-200 hover:to-rose-200 transition-all duration-300 cursor-pointer border border-violet-200/50 shadow-sm backdrop-blur-sm">
                            Outlet Store
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row gap-6">
          {/* Sidebar - hidden on mobile */}
          <aside className="hidden md:block w-80 shrink-0">
            <div className="sticky top-4 space-y-6">
              {/* Today's top offers */}
              <div className="relative overflow-hidden rounded-xl border border-[#042558]/10 bg-white">
                <div className="relative p-4">
                  <h3 className="font-bold text-sm mb-3 text-[#042558]">
                    Today's top {brand.name} offers:
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {brand.topOffers.map((offer, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#042558] mt-2"></div>
                        <span className="text-slate-700">{offer}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Offer statistics */}
              <div className="relative overflow-hidden rounded-xl border border-[#042558]/10 bg-white">
                <div className="relative p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#042558]">
                        {brand.stats.totalOffers}
                      </div>
                      <div className="text-xs text-slate-600">Total Offers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#042558]">
                        {brand.stats.couponCodes}
                      </div>
                      <div className="text-xs text-slate-600">Coupon Codes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#042558]">
                        {brand.stats.inStoreCoupons}
                      </div>
                      <div className="text-xs text-slate-600">
                        In-Store Coupons
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#042558]">
                        {brand.stats.freeShippingDeals}
                      </div>
                      <div className="text-xs text-slate-600">
                        Free Shipping Deals
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content writer */}
              <div className="relative overflow-hidden rounded-xl border border-[#042558]/10 bg-white">
                <div className="relative p-4">
                  <h3 className="text-sm font-medium text-slate-600 mb-3">
                    This page has been updated by
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#042558]/5 border border-[#042558]/10"></div>
                    <div>
                      <h4 className="font-bold text-[#042558]">
                        {brand.contentWriter.name}
                      </h4>
                      <p className="text-xs text-slate-600">
                        {brand.contentWriter.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 mt-3">
                    {brand.contentWriter.bio}
                  </p>
                  <a
                    href="#"
                    className="text-xs text-[#042558] hover:text-[#042558]/80 mt-2 inline-block transition-colors"
                  >
                    See Bio
                  </a>
                </div>
              </div>

              {/* Featured Articles */}
              <div className="relative overflow-hidden rounded-xl border border-[#042558]/10 bg-white">
                <div className="relative p-4">
                  <h3 className="font-bold mb-3 text-[#042558]">
                    {brand.name} Featured Articles
                  </h3>
                  <div className="space-y-4">
                    {brand.featuredArticles.map((article, index) => (
                      <div key={index} className="group">
                        <h4 className="font-medium text-sm text-slate-700 group-hover:text-[#042558] transition-colors">
                          {article.title}
                        </h4>
                        <p className="text-xs text-slate-600 mt-1">
                          {article.description}
                        </p>
                        <p className="text-xs text-slate-500 mt-1">
                          By {article.author}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Why trust us */}
              <div className="relative overflow-hidden rounded-xl border border-[#042558]/10 bg-white">
                <div className="relative p-4">
                  <h3 className="font-bold mb-3 text-[#042558]">
                    Why trust us?
                  </h3>
                  <p className="text-xs text-slate-600">
                    RetailMeNot.com has a dedicated merchandising team sourcing
                    and verifying the best {brand.name} coupons, promo codes and
                    deals — so you can save money and time while shopping. Our
                    deal hunters are constantly researching the market in real
                    time to provide you with up-to-date savings intel, the best
                    stores to shop and which products to buy.
                  </p>
                  <div className="flex gap-3 mt-3">
                    <a
                      href="#"
                      className="text-xs text-[#042558] hover:text-[#042558]/80 transition-colors"
                    >
                      Learn How We Verify Coupons
                    </a>
                    <a
                      href="#"
                      className="text-xs text-[#042558] hover:text-[#042558]/80 transition-colors"
                    >
                      Submit a Coupon
                    </a>
                  </div>
                </div>
              </div>

              {/* About Brand */}
              <div className="relative overflow-hidden rounded-xl border border-[#042558]/10 bg-white">
                <div className="relative p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-[#042558]">
                      About {brand.name}
                    </h3>
                    <div className="flex items-center">
                      <span className="text-sm font-bold text-slate-700">
                        {brand.rating}
                      </span>
                      <div className="flex ml-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-sm ${
                              i < Math.floor(brand.rating)
                                ? "text-[#042558]"
                                : "text-slate-300"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-xs text-slate-500 ml-1">
                        ({brand.reviewCount})
                      </span>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-[#042558] hover:text-[#042558]/80 transition-colors"
                  >
                    Log In
                  </a>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-xs font-medium text-slate-600">
                        telephone
                      </span>
                      <span className="text-xs text-slate-700">
                        {brand.phone}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-xs font-medium text-slate-600">
                        address
                      </span>
                      <span className="text-xs text-slate-700">
                        {brand.address}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="relative overflow-hidden rounded-xl border border-[#042558]/10 bg-white">
                <div className="relative p-4">
                  <Accordion type="single" collapsible className="w-full">
                    {brand.faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="border-b-0"
                      >
                        <AccordionTrigger className="text-xs font-medium py-2 text-slate-700 hover:text-[#042558] transition-colors">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-xs text-slate-600">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>

              {/* Similar Stores */}
              <div className="relative overflow-hidden rounded-xl border border-[#042558]/10 bg-white">
                <div className="relative p-4">
                  <h3 className="font-bold mb-3 text-[#042558]">
                    Similar Stores
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {similarStores.slice(0, 12).map((store, index) => (
                      <a
                        key={index}
                        href="#"
                        className="text-xs text-slate-600 hover:text-[#042558] transition-colors"
                      >
                        {store}
                      </a>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="text-xs text-[#042558] hover:text-[#042558]/80 mt-2 inline-block transition-colors"
                  >
                    View All
                  </a>
                </div>
              </div>

              {/* Popular Stores */}
              <div className="relative overflow-hidden rounded-xl border border-[#042558]/10 bg-white">
                <div className="relative p-4">
                  <h3 className="font-bold mb-3 text-[#042558]">
                    Popular Stores
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularStores.map((store, index) => (
                      <a
                        key={index}
                        href="#"
                        className="text-xs text-slate-600 hover:text-[#042558] transition-colors"
                      >
                        {store}
                      </a>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="text-xs text-[#042558] hover:text-[#042558]/80 mt-2 inline-block transition-colors"
                  >
                    All Stores
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            <div className="relative overflow-hidden rounded-xl mb-6 border border-[#042558]/10 bg-white">
              <div className="relative p-4 md:p-6">
                <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[#042558]">
                  {brand.name} Promo Codes & Coupons
                </h1>
                <p className="text-slate-600 text-sm">
                  Save with {brand.name} promo codes and coupons for May 2025
                </p>
              </div>
            </div>

            {/* Coupon list */}
            <div className="space-y-6 mb-12">
              {displayedCoupons.map((coupon, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl border border-[#042558]/10 bg-white transition-all duration-300 ease-in-out transform hover:scale-[1.01] hover:shadow-2xl hover:border-[#042558]/40 group"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#042558]/0 via-[#042558]/10 to-[#042558]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                  <div className="relative p-4 md:p-6 flex flex-col md:flex-row md:items-center gap-6">
                    {/* Savings Highlight Section */}
                    <div className="md:w-48 shrink-0 flex flex-col items-center justify-center p-4 rounded-lg bg-gradient-to-br from-[#042558]/5 to-[#042558]/10 border border-[#042558]/10">
                      <div className="text-3xl font-bold text-[#2b52ff] mb-1">
                        {coupon.savings || "30%"}
                      </div>
                      <div className="text-sm text-slate-600 font-medium">
                        OFF
                      </div>
                      {coupon.minimumPurchase && (
                        <div className="text-xs text-slate-500 mt-1">
                          Min. ₹{coupon.minimumPurchase}
                        </div>
                      )}
                    </div>

                    {/* Coupon Details */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-[#042558]/5 p-2 rounded-full border border-[#042558]/10">
                          <Tag className="h-4 w-4 text-[#042558]" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-600">
                            {coupon.date}
                          </span>
                          {coupon.verified && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-green-50 text-green-600 border border-green-100">
                              Verified
                            </span>
                          )}
                          {coupon.exclusive && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-purple-50 text-purple-600 border border-purple-100">
                              Exclusive
                            </span>
                          )}
                        </div>
                      </div>
                      <h3 className="font-semibold text-lg text-slate-800 mb-2">
                        {coupon.description}
                      </h3>
                      {coupon.details && (
                        <p className="text-sm text-slate-600 mb-3">
                          {coupon.details}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {coupon.terms && (
                          <div className="text-xs text-slate-500">
                            Terms: {coupon.terms}
                          </div>
                        )}
                        {coupon.expires && (
                          <div className="text-xs text-slate-500">
                            Expires: {coupon.expires}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="shrink-0 md:w-40">
                      <Button className="w-full bg-[#042558] text-white hover:bg-[#042558]/90 transition-all duration-300 group cursor-pointer">
                        <span className="flex items-center gap-2">
                          Show Coupon
                          <svg
                            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </span>
                      </Button>
                      {coupon.usedCount && (
                        <div className="text-xs text-slate-500 text-center mt-2">
                          Used {coupon.usedCount} times today
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load more button */}
            {hasMoreCoupons && (
              <div className="text-center mb-12">
                <Button
                  variant="outline"
                  className="border-[#042558] text-[#042558] hover:bg-[#042558]/5 transition-all duration-300"
                  onClick={handleLoadMore}
                >
                  Load More Coupons
                </Button>
              </div>
            )}

            {/* Company Profile Section */}
            <div className="relative overflow-hidden rounded-xl pt-8 mb-12 border border-[#042558]/10 bg-white">
              <div className="relative p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold mb-6 text-[#042558]">
                  About {brand.name}
                </h2>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
                  <div>
                    <h3 className="font-bold text-lg mb-4 text-[#042558]">
                      Company Overview
                    </h3>
                    <p className="text-slate-700 mb-4">
                      {brand.name} is the world's largest online retailer and a
                      prominent cloud services provider. Founded by Jeff Bezos
                      in 1994 as an online bookstore, {brand.name} has since
                      expanded to offer a wide variety of products and services
                      to customers worldwide.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-slate-700">
                      <li>
                        Offers millions of products across dozens of categories
                      </li>
                      <li>
                        Provides subscription services like Prime, Prime Video,
                        and Music
                      </li>
                      <li>
                        Operates Web Services (AWS), a comprehensive cloud
                        platform
                      </li>
                      <li>
                        Manufactures electronic devices including e-readers,
                        tablets, and smart speakers
                      </li>
                      <li>
                        Owns subsidiaries including Whole Foods Market, Zappos,
                        and Twitch
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-4 text-[#042558]">
                      Shopping Benefits
                    </h3>
                    <div className="relative overflow-hidden rounded-xl mb-4 border border-[#042558]/10 bg-white">
                      <div className="relative p-4">
                        <h4 className="font-bold mb-2 text-[#042558]">
                          Prime Benefits
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                          <li>Free Two-Day Shipping on eligible items</li>
                          <li>Access to Video streaming service</li>
                          <li>Music with over 2 million songs</li>
                          <li>Reading with thousands of books and magazines</li>
                          <li>
                            Exclusive deals and shopping events like Prime Day
                          </li>
                          <li>Unlimited photo storage with Photos</li>
                        </ul>
                      </div>
                    </div>

                    <div className="relative overflow-hidden rounded-xl border border-[#042558]/10 bg-white">
                      <div className="relative p-4">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="text-slate-700">
                                Shipping Option
                              </TableHead>
                              <TableHead className="text-slate-700">
                                Prime Members
                              </TableHead>
                              <TableHead className="text-slate-700">
                                Non-Prime
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="text-slate-700">
                                Standard Shipping
                              </TableCell>
                              <TableCell className="text-slate-700">
                                Free
                              </TableCell>
                              <TableCell className="text-slate-700">
                                $5.99+
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="text-slate-700">
                                Two-Day Shipping
                              </TableCell>
                              <TableCell className="text-slate-700">
                                Free
                              </TableCell>
                              <TableCell className="text-slate-700">
                                $9.99+
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="text-slate-700">
                                One-Day Shipping
                              </TableCell>
                              <TableCell className="text-slate-700">
                                Free on eligible items
                              </TableCell>
                              <TableCell className="text-slate-700">
                                $12.99+
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="text-slate-700">
                                Same-Day Delivery
                              </TableCell>
                              <TableCell className="text-slate-700">
                                $2.99+ on eligible items
                              </TableCell>
                              <TableCell className="text-slate-700">
                                $12.99+
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-bold text-lg mb-4 text-[#042558]">
                    Popular Categories
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {categories.map((category, index) => (
                      <div
                        key={index}
                        className="relative overflow-hidden rounded-xl border border-[#042558]/10 bg-white"
                      >
                        <div className="relative p-3 md:p-4 text-center">
                          <h4 className="font-medium text-sm text-slate-700">
                            {category.name}
                          </h4>
                          <p className="text-xs text-slate-600 mt-1">
                            {category.items}+ items
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Q&A Section */}
            <div className="relative overflow-hidden rounded-xl pt-8 mb-12 border border-[#042558]/10 bg-white">
              <div className="relative p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold mb-6 text-[#042558]">
                  Frequently Asked Questions
                </h2>

                <Accordion type="single" collapsible className="w-full">
                  {brand.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-medium text-slate-700 hover:text-[#042558] transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="mt-8 relative overflow-hidden rounded-xl border border-[#042558]/10 bg-white">
                  <div className="relative p-4 md:p-6">
                    <h3 className="font-bold mb-3 text-[#042558]">
                      Still have questions about {brand.name} coupons?
                    </h3>
                    <p className="text-slate-700 mb-4">
                      Visit {brand.name}'s Help Center for more information
                      about using coupons, promo codes, and special offers.
                    </p>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 border-[#042558] text-[#042558] hover:bg-[#042558]/5 transition-all duration-300"
                    >
                      Visit {brand.name} Help Center
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
