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
import { BrandPageClient } from "./client";

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

interface BrandPageProps {
  params: {
    brandId: string;
  };
}

export default function BrandPage({ params }: BrandPageProps) {
  const brand = brands.find((b) => b.id === params.brandId);

  if (!brand) {
    notFound();
  }

  return <BrandPageClient brand={brand} />;
}
