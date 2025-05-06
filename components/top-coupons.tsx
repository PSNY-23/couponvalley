import { coupons } from "@/data/coupons";
import CouponCard from "@/components/CouponCard";
import { Button } from "react-day-picker";
import { Link } from "lucide-react";

export default function TopCoupons() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="text-xl font-bold">{"Top Deals"}</h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full">
        {coupons.map((coupon) => (
          <CouponCard key={coupon.id} coupon={coupon} />
        ))}
      </section>
    </div>
  );
}
