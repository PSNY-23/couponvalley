"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronRight, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import {
  categoryData,
  categoryColors,
  iconMap,
  subcategoryIcons,
  subcategoryColors,
  CategoryKey,
} from "../../data/categoriesData";

interface SubcategoryItem {
  category: CategoryKey;
  subcat: string;
}

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryKey>("Food & Dining");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Search across all subcategories
  const allSubcategories: SubcategoryItem[] = Object.entries(
    categoryData
  ).flatMap(([category, subcats]) =>
    (subcats as string[]).map((subcat: string) => ({
      category: category as CategoryKey,
      subcat,
    }))
  );

  const filteredSubcategories: SubcategoryItem[] = searchQuery
    ? allSubcategories.filter((item) =>
        item.subcat.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : (categoryData[selectedCategory] as string[]).map((subcat: string) => ({
        category: selectedCategory,
        subcat,
      }));

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-[90%]">
        <div className="mb-8">
          <Skeleton className="h-12 w-full max-w-xl mx-auto" />
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-72 shrink-0">
            <Skeleton className="h-8 w-32 mb-4" />
            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
            </div>
          </aside>
          <main className="flex-1">
            <Skeleton className="h-8 w-48 mb-6" />
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <Skeleton key={i} className="h-40 w-full" />
              ))}
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-[90%]">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-72 shrink-0">
            <div className="sticky top-8">
              <h2 className="text-2xl font-bold mb-6 font-sans">Categories</h2>
              <div className="space-y-2">
                {Object.keys(categoryData).map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "ghost"
                    }
                    className={cn(
                      "w-full justify-between group transition-all duration-200",
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-accent"
                    )}
                    onClick={() => setSelectedCategory(category as CategoryKey)}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "p-2 rounded-lg transition-all duration-200",
                          selectedCategory === category
                            ? "bg-primary-foreground/20"
                            : categoryColors[category as CategoryKey].bg
                        )}
                      >
                        <div
                          className={cn(
                            "transition-colors duration-200",
                            selectedCategory === category
                              ? "text-primary-foreground"
                              : categoryColors[category as CategoryKey].text
                          )}
                        >
                          {iconMap[category as CategoryKey]}
                        </div>
                      </div>
                      <span className="font-medium">{category}</span>
                    </div>
                    <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                ))}
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold font-sans">
                {searchQuery
                  ? "Search Results"
                  : `${selectedCategory} Subcategories`}
              </h2>
              <div className="flex items-center gap-4">
                <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search all subcategories..."
                    className="w-full pl-9 h-9 text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <span className="text-sm text-muted-foreground font-medium">
                  {filteredSubcategories.length} items
                </span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory + searchQuery}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              >
                {filteredSubcategories.map(
                  (item: SubcategoryItem, idx: number) => (
                    <Card
                      key={idx}
                      className="group hover:shadow-md transition-all duration-200"
                    >
                      <CardHeader className="pb-2">
                        <div
                          className={cn(
                            "mb-2 flex h-12 w-12 items-center justify-center rounded-lg transition-colors duration-200",
                            subcategoryColors[item.subcat]?.bg ||
                              categoryColors[item.category].bg
                          )}
                        >
                          <div
                            className={
                              subcategoryColors[item.subcat]?.text ||
                              categoryColors[item.category].text
                            }
                          >
                            {subcategoryIcons[item.subcat] ||
                              iconMap[item.category]}
                          </div>
                        </div>
                        <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-200">
                          {item.subcat}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Star className="mr-1 h-4 w-4 text-yellow-400" />
                          <span className="font-medium">4.5</span>
                          <span className="mx-2">•</span>
                          <span className="font-medium">100+ deals</span>
                        </div>
                      </CardContent>
                    </Card>
                  )
                )}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}
