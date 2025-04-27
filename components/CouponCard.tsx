"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

interface Props {
  coupon: {
    id: string;
    code: string;
    title: string;
    description: string;
    brandName: string;
    brandLogo: string;
    expiryDate: string;
    usedCount: number;
  };
}

export default function CouponCard({ coupon }: Props) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleReveal = () => setRevealed(true);
  const handleCopy = () => {
    navigator.clipboard.writeText(coupon.code);
    setCopied(true);
    toast({ title: "Copied!", description: `${coupon.code} copied.` });
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  };

  return (
    <div className="coupon-card border rounded-lg overflow-hidden shadow-sm bg-background relative">
      <div className="bg-muted p-6 flex justify-center items-center">
        <Image
          src={coupon.brandLogo || "/placeholder.svg"}
          alt={coupon.brandName}
          width={64}
          height={64}
          className="h-16 w-16 rounded-full object-contain"
        />
      </div>

      <div className="p-4 space-y-2 mb-16">
        <div>
          <h3 className="font-semibold text-base truncate">{coupon.title}</h3>
          <p className="text-sm text-muted-foreground">{coupon.brandName}</p>
        </div>
        <p className="text-sm text-muted-foreground">{coupon.description}</p>
        <div className="text-xs text-muted-foreground space-y-1">
          <div>Expires: {formatDate(coupon.expiryDate)}</div>
          <div>Used: {coupon.usedCount} times</div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-background border-t">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={handleReveal}
            >
              <span className="flex-1 text-center">
                {revealed ? coupon.code : "Click to reveal code"}
              </span>
            </Button>

            {revealed && (
              <div
                className="h-8 w-8 p-0 flex items-center justify-center rounded-md hover:bg-muted cursor-pointer"
                onClick={handleCopy}
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
