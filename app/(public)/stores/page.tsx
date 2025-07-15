"use client";

import { Suspense, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, Search, Filter, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";

//data fetching hooks
import { useStores } from "@/hooks/use-stores";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const gradientColors = [
  "bg-gradient-to-br from-white to-[#042558]/5",
  "bg-gradient-to-br from-white to-[#042558]/5",
  "bg-gradient-to-br from-white to-[#042558]/5",
  "bg-gradient-to-br from-white to-[#042558]/5",
  "bg-gradient-to-br from-white to-[#042558]/5",
  "bg-gradient-to-br from-white to-[#042558]/5",
];

export default function shopsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  //data fetching from express
  const { data: stores, isLoading } = useStores();

  const categories = Array.from(
    new Set(stores?.flatMap((store) => store.categories.map((category) => category.title)))
  );

  const filteredStores = useMemo(() => {
    if (!stores) return []; // handle undefined safely
    return stores.filter((store) => {
      const matchesSearch =
        store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" ||
        (store.categories && store.categories.some((cat) => cat.title === selectedCategory));
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, stores, selectedCategory]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className='container py-8 md:py-4 md:pb-12'>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className='mb-8 text-center'>
        <h1 className='mb-2 bg-gradient-to-r from-[#042558] to-[#0a4b8c] bg-clip-text text-3xl font-bold text-transparent md:text-4xl'>
          Top shops
        </h1>
        <p className='mx-auto max-w-2xl text-muted-foreground'>
          Discover the best deals and coupons from top brands worldwide. Browse our collection of shops to find
          exclusive discounts.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='mb-6 flex flex-col gap-4 sm:flex-row sm:items-center'
      >
        <div className='relative flex-1'>
          <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#042558]' />
          <Input
            type='text'
            placeholder='Search shops...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='pl-9 border-[#042558]/20 focus:border-[#042558] focus:ring-[#042558]/20'
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-[#042558]" />
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px] border-[#042558]/20 focus:border-[#042558] focus:ring-[#042558]/20">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </motion.div>

      <Suspense fallback={<StoreSkeleton />}>
        <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {filteredStores.map((store, index) => (
            <motion.div
              key={store.id}
              variants={cardVariants}
              initial='hidden'
              animate='visible'
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/stores/${store.id}`}
                className='group relative flex flex-col overflow-hidden rounded-xl border border-[#042558]/10  p-6 text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-[#042558]/20 dark:from-[#042558]/5 dark:to-[#042558]/10'
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    gradientColors[index % gradientColors.length]
                  } opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
                <div className='relative'>
                  {true && (
                    <Badge
                      className='absolute right-0 top-0 z-10 bg-gradient-to-r from-[#042558] to-[#0a4b8c] text-white shadow-md'
                      variant='secondary'
                    >
                      Trending
                    </Badge>
                  )}
                  <div className='mb-4 flex items-center gap-4'>
                    <div className='flex-shrink-0'>
                      <div className='relative h-16 w-16 overflow-hidden rounded-xl bg-gradient-to-br from-[#042558]/10 to-[#0a4b8c]/5 p-2 transition-transform duration-300 group-hover:scale-110'>
                        <Image
                          src={store.logo || "/placeholder.svg"}
                          alt={store.name}
                          width={64}
                          height={64}
                          className='h-full w-full object-contain'
                        />
                      </div>
                    </div>
                    <div className='flex-1'>
                      <h3 className='mb-1 text-lg font-semibold tracking-tight text-[#042558] group-hover:text-[#0a4b8c]'>
                        {store.name}
                      </h3>
                      <div className='flex items-center gap-2'>
                        <div className='flex items-center rounded-full bg-[#042558]/10 px-2 py-0.5'>
                          <Star className='h-3 w-3 fill-[#042558] text-[#042558]' />
                          <span className='ml-1 text-xs font-medium text-[#042558]'>{store.rating}</span>
                        </div>
                        <span className='text-xs text-[#042558]/70'>{store.coupons.length} active deals</span>
                      </div>
                    </div>
                  </div>
                  <p className='mb-4 text-sm text-[#042558]/70 line-clamp-2'>{store.description}</p>
                  <div className='mt-auto flex items-center justify-between'>
                    {store.categories.map((cat) => (
                      <Badge
                        key={cat.id}
                        variant='outline'
                        className='bg-[#042558]/5 text-[#042558] hover:bg-[#042558]/10 border-[#042558]/20'
                      >
                        {cat.title}
                      </Badge>
                    ))}
                    <span className='flex items-center text-xs font-medium text-[#042558] group-hover:text-[#0a4b8c] group-hover:underline'>
                      View deals <ArrowRight className='ml-1 h-3 w-3 transition-transform group-hover:translate-x-1' />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Suspense>
    </div>
  );
}

function StoreSkeleton() {
  return (
    <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {Array(16)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            className='flex flex-col rounded-xl border border-[#042558]/10 bg-gradient-to-br from-white to-[#042558]/5 p-6 shadow-sm dark:from-[#042558]/5 dark:to-[#042558]/10'
          >
            <div className='mb-4 flex items-center gap-4'>
              <Skeleton className='h-16 w-16 rounded-xl bg-[#042558]/10' />
              <div className='flex-1 space-y-2'>
                <Skeleton className='h-5 w-24 bg-[#042558]/10' />
                <Skeleton className='h-4 w-32 bg-[#042558]/10' />
              </div>
            </div>
            <Skeleton className='mb-4 h-4 w-full bg-[#042558]/10' />
            <Skeleton className='mb-4 h-4 w-3/4 bg-[#042558]/10' />
            <div className='mt-auto flex items-center justify-between'>
              <Skeleton className='h-6 w-20 bg-[#042558]/10' />
              <Skeleton className='h-4 w-16 bg-[#042558]/10' />
            </div>
          </div>
        ))}
    </div>
  );
}
