import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Brand Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the brand you're looking for. It may have been
          removed or doesn't exist.
        </p>
        <Link href="/stores">
          <Button>View All Stores</Button>
        </Link>
      </div>
    </div>
  );
}
