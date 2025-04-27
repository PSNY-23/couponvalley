import { coupons } from "@/data/coupons";
import CouponCard from "@/components/CouponCard";

export default function TopCoupons() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {coupons.map((coupon) => (
        <CouponCard key={coupon.id} coupon={coupon} />
      ))}
    </section>
  );
}
