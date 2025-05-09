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
import { brands } from "@/data/brands";
import { notFound } from "next/navigation";
import amazonLogo from "../../../public/images/png/amazonLogo.png";

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

export default function BrandPage({ params }: { params: { brandId: string } }) {
  const brand = brands.find((b) => b.id === params.brandId);

  if (!brand) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row gap-6">
          {/* Sidebar - hidden on mobile */}
          <aside className="hidden md:block w-80 shrink-0">
            <div className="sticky top-4 space-y-6">
              {/* Brand Logo */}
              <div className="flex flex-col items-center">
                <div className="rounded-full border w-32 h-32 flex items-center justify-center overflow-hidden mb-2">
                  <Image
                    src={amazonLogo}
                    alt={`${brand.name} Logo`}
                    width={120}
                    height={120}
                    className="object-cover rounded-full w-full h-full"
                  />
                </div>

                <h3 className="font-bold text-center">{brand.name}</h3>
                <p className="text-xs text-gray-500 text-center">
                  {brand.description}
                </p>
              </div>

              {/* Today's top offers */}
              <div className="border rounded-lg p-4">
                <h3 className="font-bold text-sm mb-3">
                  Today's top {brand.name} offers:
                </h3>
                <ul className="space-y-2 text-sm">
                  {brand.topOffers.map((offer, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-purple-600 mt-2"></div>
                      <span>{offer}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Offer statistics */}
              <div className="border rounded-lg p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      {brand.stats.totalOffers}
                    </div>
                    <div className="text-xs text-gray-500">Total Offers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      {brand.stats.couponCodes}
                    </div>
                    <div className="text-xs text-gray-500">Coupon Codes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      {brand.stats.inStoreCoupons}
                    </div>
                    <div className="text-xs text-gray-500">
                      In-Store Coupons
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      {brand.stats.freeShippingDeals}
                    </div>
                    <div className="text-xs text-gray-500">
                      Free Shipping Deals
                    </div>
                  </div>
                </div>
              </div>

              {/* Content writer */}
              <div className="border rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-500 mb-3">
                  This page has been updated by
                </h3>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                  <div>
                    <h4 className="font-bold">{brand.contentWriter.name}</h4>
                    <p className="text-xs text-gray-500">
                      {brand.contentWriter.role}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-3">
                  {brand.contentWriter.bio}
                </p>
                <a
                  href="#"
                  className="text-xs text-purple-600 mt-2 inline-block"
                >
                  See Bio
                </a>
              </div>

              {/* Featured Articles */}
              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-3">
                  {brand.name} Featured Articles
                </h3>
                <div className="space-y-4">
                  {brand.featuredArticles.map((article, index) => (
                    <div key={index}>
                      <h4 className="font-medium text-sm">{article.title}</h4>
                      <p className="text-xs text-gray-600 mt-1">
                        {article.description}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        By {article.author}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why trust us */}
              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-3">Why trust us?</h3>
                <p className="text-xs text-gray-600">
                  RetailMeNot.com has a dedicated merchandising team sourcing
                  and verifying the best {brand.name} coupons, promo codes and
                  deals — so you can save money and time while shopping. Our
                  deal hunters are constantly researching the market in real
                  time to provide you with up-to-date savings intel, the best
                  stores to shop and which products to buy.
                </p>
                <div className="flex gap-3 mt-3">
                  <a href="#" className="text-xs text-purple-600">
                    Learn How We Verify Coupons
                  </a>
                  <a href="#" className="text-xs text-purple-600">
                    Submit a Coupon
                  </a>
                </div>
              </div>

              {/* About Brand */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold">About {brand.name}</h3>
                  <div className="flex items-center">
                    <span className="text-sm font-bold">{brand.rating}</span>
                    <div className="flex ml-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-sm ${
                            i < Math.floor(brand.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">
                      ({brand.reviewCount})
                    </span>
                  </div>
                </div>
                <a href="#" className="text-sm text-purple-600">
                  Log In
                </a>
                <div className="mt-3 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-medium">telephone</span>
                    <span className="text-xs">{brand.phone}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-medium">address</span>
                    <span className="text-xs">{brand.address}</span>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="border rounded-lg p-4">
                <Accordion type="single" collapsible className="w-full">
                  {brand.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-b-0"
                    >
                      <AccordionTrigger className="text-xs font-medium py-2">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-xs text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Similar Stores */}
              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-3">Similar Stores</h3>
                <div className="flex flex-wrap gap-2">
                  {similarStores.slice(0, 12).map((store, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-xs text-gray-600 hover:text-purple-600"
                    >
                      {store}
                    </a>
                  ))}
                </div>
                <a
                  href="#"
                  className="text-xs text-purple-600 mt-2 inline-block"
                >
                  View All
                </a>
              </div>

              {/* Popular Stores */}
              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-3">Popular Stores</h3>
                <div className="flex flex-wrap gap-2">
                  {popularStores.map((store, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-xs text-gray-600 hover:text-purple-600"
                    >
                      {store}
                    </a>
                  ))}
                </div>
                <a
                  href="#"
                  className="text-xs text-purple-600 mt-2 inline-block"
                >
                  All Stores
                </a>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Brand Info Banner */}
            <Alert className="mb-6 bg-blue-50 border-blue-200">
              <Info className="h-4 w-4 text-blue-600" />
              <AlertDescription>
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold text-blue-800">
                    {brand.name} Shopping Tips
                  </h2>
                  <p className="text-sm text-blue-700">
                    {brand.name} offers free shipping on orders over $25 for
                    non-Prime members. Prime members enjoy free 2-day shipping
                    on millions of items. Check out {brand.name}'s Deal of the
                    Day for daily discounts up to 70% off!
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      Prime Day Deals
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      Subscribe & Save
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      Outlet Store
                    </span>
                  </div>
                </div>
              </AlertDescription>
            </Alert>

            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-2">
                {brand.name} Promo Codes & Coupons
              </h1>
              <p className="text-gray-600 text-sm">
                Save with {brand.name} promo codes and coupons for May 2025
              </p>
            </div>

            {/* Coupon list */}
            <div className="space-y-4 mb-12">
              {brand.coupons.map((coupon, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center gap-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Tag className="h-4 w-4 text-purple-600" />
                      <span className="text-xs text-gray-500">
                        {coupon.date}
                      </span>
                    </div>
                    <p className="font-medium">{coupon.description}</p>
                    {coupon.details && (
                      <p className="text-sm text-gray-600 mt-1">
                        {coupon.details}
                      </p>
                    )}
                  </div>
                  <div className="shrink-0">
                    <Button className="w-full md:w-auto bg-purple-600 hover:bg-purple-700">
                      Show Coupon
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load more button */}
            <div className="text-center mb-12">
              <Button
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50"
              >
                Load More
              </Button>
            </div>

            {/* Company Profile Section */}
            <div className="border-t pt-8 mb-12">
              <h2 className="text-xl font-bold mb-6">About {brand.name}</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-lg mb-4">Company Overview</h3>
                  <p className="text-gray-700 mb-4">
                    {brand.name} is the world's largest online retailer and a
                    prominent cloud services provider. Founded by Jeff Bezos in
                    1994 as an online bookstore, {brand.name} has since expanded
                    to offer a wide variety of products and services to
                    customers worldwide.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
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
                  <h3 className="font-bold text-lg mb-4">Shopping Benefits</h3>
                  <Card className="mb-4">
                    <CardContent className="p-4">
                      <h4 className="font-bold mb-2">Prime Benefits</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                        <li>Free Two-Day Shipping on eligible items</li>
                        <li>Access to Video streaming service</li>
                        <li>Music with over 2 million songs</li>
                        <li>Reading with thousands of books and magazines</li>
                        <li>
                          Exclusive deals and shopping events like Prime Day
                        </li>
                        <li>Unlimited photo storage with Photos</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Shipping Option</TableHead>
                        <TableHead>Prime Members</TableHead>
                        <TableHead>Non-Prime</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Standard Shipping</TableCell>
                        <TableCell>Free</TableCell>
                        <TableCell>$5.99+</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Two-Day Shipping</TableCell>
                        <TableCell>Free</TableCell>
                        <TableCell>$9.99+</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>One-Day Shipping</TableCell>
                        <TableCell>Free on eligible items</TableCell>
                        <TableCell>$12.99+</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Same-Day Delivery</TableCell>
                        <TableCell>$2.99+ on eligible items</TableCell>
                        <TableCell>$12.99+</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4">Popular Categories</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-4 text-center hover:bg-gray-50 transition-colors"
                    >
                      <h4 className="font-medium text-sm">{category.name}</h4>
                      <p className="text-xs text-gray-500 mt-1">
                        {category.items}+ items
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Q&A Section */}
            <div className="border-t pt-8 mb-12">
              <h2 className="text-xl font-bold mb-6">
                Frequently Asked Questions
              </h2>

              <Accordion type="single" collapsible className="w-full">
                {brand.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold mb-3">
                  Still have questions about {brand.name} coupons?
                </h3>
                <p className="text-gray-700 mb-4">
                  Visit {brand.name}'s Help Center for more information about
                  using coupons, promo codes, and special offers.
                </p>
                <Button variant="outline" className="flex items-center gap-2">
                  Visit {brand.name} Help Center
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
