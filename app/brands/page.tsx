import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { brands } from "@/data/brands";

export default function BrandsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Popular Brands</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brands.map((brand) => (
          <Link href={`/brands/${brand.id}`} key={brand.id}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">{brand.name}</h2>
                    <p className="text-gray-600">{brand.description}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-sm text-gray-500">
                        {brand.stats.totalOffers} coupons
                      </span>
                      <span className="text-sm text-gray-500">•</span>
                      <div className="flex items-center">
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
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
