import { Building, ChevronRight, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import sbiLogo from "@/public/images/webp/sbiLogo.webp";

export default function PaymentOptionsWithRealLogos() {
  const bankLogos = [
    { name: "SBI Bank", src: sbiLogo },
    { name: "ICICI Bank", src: sbiLogo },
    { name: "Citibank", src: sbiLogo },
    { name: "Axis Bank", src: sbiLogo },
    { name: "HSBC", src: sbiLogo },
    { name: "Kotak Mahindra Bank", src: sbiLogo },
  ];

  const walletLogos = [
    { name: "PayPal", src: sbiLogo },
    { name: "Google Pay", src: sbiLogo },
    { name: "Paytm", src: sbiLogo },
    { name: "MobiKwik", src: sbiLogo },
    { name: "ZappPay", src: sbiLogo },
    { name: "Freecharge", src: sbiLogo },
  ];

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Bank Offers</h2>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/bank-offers" className="flex items-center gap-1">
            View All
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="w-full mx-auto p-4 flex flex-col lg:flex-row gap-6">
        {/* Bank Offers Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4">
            {/* Bank Offers Header */}
            <div className="bg-blue-50 p-8 flex flex-col items-center justify-center">
              <div className="bg-white p-4 rounded-full mb-4">
                <Building className="h-8 w-8 text-black" />
              </div>
              <h2 className="text-xl font-medium text-gray-800 text-center">
                Bank Offers
              </h2>
            </div>

            {/* Bank Logos Grid */}
            <div className="md:col-span-3 grid grid-cols-3 gap-4 p-4">
              {bankLogos.map((logo, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-center h-24"
                >
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.name}
                    width={120}
                    height={40}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wallet Offers Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4">
            {/* Wallet Offers Header */}
            <div className="bg-blue-50 p-8 flex flex-col items-center justify-center">
              <div className="bg-white p-4 rounded-full mb-4">
                <Wallet className="h-8 w-8 text-black" />
              </div>
              <h2 className="text-xl font-medium text-gray-800 text-center">
                Wallet Offers
              </h2>
            </div>

            {/* Wallet Logos Grid */}
            <div className="md:col-span-3 grid grid-cols-3 gap-4 p-4">
              {walletLogos.map((logo, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-center h-24"
                >
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.name}
                    width={120}
                    height={40}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
