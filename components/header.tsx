"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/language-provider";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const navItems = [
    { name: t("topStores"), href: "/stores" },
    { name: t("categories"), href: "/categories", hasDropdown: true },
    { name: t("bestOffers"), href: "/offers" },
    { name: t("blog"), href: "/blog" },
  ];

  const categories = [
    { name: t("electronics"), href: "/categories/electronics", icon: "💻" },
    { name: t("fashion"), href: "/categories/fashion", icon: "👕" },
    { name: t("travel"), href: "/categories/travel", icon: "✈️" },
    { name: t("food"), href: "/categories/food", icon: "🍔" },
    { name: t("beauty"), href: "/categories/beauty", icon: "💄" },
    { name: t("home"), href: "/categories/home", icon: "🏠" },
  ];

  const stores = [
    { name: "Amazon", href: "/stores/amazon", icon: "🛍️" },
    { name: "Myntra", href: "/stores/myntra", icon: "👗" },
    { name: "Flipkart", href: "/stores/flipkart", icon: "📦" },
    { name: "Walmart", href: "/stores/walmart", icon: "🏪" },
    { name: "Target", href: "/stores/target", icon: "🎯" },
    { name: "Best Buy", href: "/stores/bestbuy", icon: "📱" },
    { name: "Macy's", href: "/stores/macys", icon: "👔" },
    { name: "Nike", href: "/stores/nike", icon: "👟" },
    { name: "Adidas", href: "/stores/adidas", icon: "👕" },
    { name: "Apple", href: "/stores/apple", icon: "🍎" },
    { name: "Samsung", href: "/stores/samsung", icon: "📱" },
    { name: "Dell", href: "/stores/dell", icon: "💻" },
    { name: "HP", href: "/stores/hp", icon: "🖨️" },
    { name: "Lenovo", href: "/stores/lenovo", icon: "💻" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur transition-all",
        isScrolled && "shadow-sm"
      )}
    >
      <div className='container flex h-16 items-center justify-between'>
        <div className='flex items-center gap-6'>
          <Sheet>
            <SheetTrigger asChild className='lg:hidden'>
              <Button variant='ghost' size='icon' aria-label='Menu'>
                <Menu className='h-5 w-5' />
              </Button>
            </SheetTrigger>
            <SheetContent side='left' className='w-[300px] sm:w-[400px]'>
              <nav className='grid gap-6 text-lg font-medium'>
                <Link href='/' className='flex items-center gap-2 text-lg font-bold'>
                  <ShoppingBag className='h-5 w-5' />
                  Couponic
                </Link>
                <div className='grid gap-3'>
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground",
                        pathname === item.href && "text-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className='grid gap-2'>
                  <div className='font-semibold'>{t("categories")}</div>
                  <div className='grid grid-cols-2 gap-2'>
                    {categories.map((category) => (
                      <Link
                        key={category.name}
                        href={category.href}
                        className='flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground'
                      >
                        <span>{category.icon}</span>
                        <span>{category.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href='/' className='flex items-center gap-2 font-bold'>
            <ShoppingBag className='h-5 w-5' />
            <span className='hidden sm:inline-block'>Couponic</span>
          </Link>
          <NavigationMenu className='hidden lg:flex'>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>{t("topStores")}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
                    {stores.map((store) => (
                      <li key={store.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={store.href}
                            className='flex select-none items-center gap-3 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                          >
                            <span className='text-xl'>{store.icon}</span>
                            <div className='text-sm font-medium leading-none'>{store.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>{t("categories")}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
                    {categories.map((category) => (
                      <li key={category.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={category.href}
                            className='flex select-none items-center gap-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                          >
                            <span className='text-xl'>{category.icon}</span>
                            <div className='text-sm font-medium leading-none'>{category.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href='/offers' legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>{t("bestOffers")}</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href='/blog' legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>{t("blog")}</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className='flex items-center gap-4'>
          {isSearchOpen ? (
            <form onSubmit={handleSearch} className='relative flex w-full items-center md:w-auto'>
              <Input
                type='search'
                placeholder={t("searchPlaceholder")}
                className='w-full md:w-[300px]'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                type='button'
                variant='ghost'
                size='icon'
                className='absolute right-0'
                onClick={() => setIsSearchOpen(false)}
              >
                <X className='h-4 w-4' />
              </Button>
            </form>
          ) : (
            <Button variant='ghost' size='icon' onClick={() => setIsSearchOpen(true)} aria-label='Search'>
              <Search className='h-5 w-5' />
            </Button>
          )}
          <LanguageToggle />
          <ThemeToggle />
          <Button asChild>
            <Link href='/sign-in'>Sign In</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
