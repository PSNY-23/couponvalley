"use client";

import type React from "react";
import Link from "next/link";
import { Facebook, Instagram, ShoppingBag, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/components/language-provider";

export default function Footer() {
  const { t } = useLanguage();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription");
  };

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <ShoppingBag className="h-5 w-5" />
              Couponic
            </Link>
            <p className="text-sm text-muted-foreground">{t("footerText")}</p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("categories")}</h3>
            <ul className="grid gap-2">
              <li>
                <Link
                  href="/categories/electronics"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {t("electronics")}
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/fashion"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {t("fashion")}
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/travel"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {t("travel")}
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/food"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {t("food")}
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/beauty"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {t("beauty")}
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/home"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {t("home")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("topStores")}</h3>
            <ul className="grid gap-2">
              <li>
                <Link
                  href="/stores/amazon"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Amazon
                </Link>
              </li>
              <li>
                <Link
                  href="/stores/walmart"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Walmart
                </Link>
              </li>
              <li>
                <Link
                  href="/stores/target"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Target
                </Link>
              </li>
              <li>
                <Link
                  href="/stores/bestbuy"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Best Buy
                </Link>
              </li>
              <li>
                <Link
                  href="/stores/macys"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Macy's
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("newsletter")}</h3>
            <p className="text-sm text-muted-foreground">
              {t("subscribeText")}
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="max-w-[220px]"
                required
              />
              <Button type="submit">{t("subscribe")}</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
