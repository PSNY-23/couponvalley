import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto py-8">
      <Skeleton className="w-48 h-10 mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="border rounded-lg p-6">
            <div className="flex items-center gap-4">
              <Skeleton className="w-16 h-16 rounded-full" />
              <div className="flex-1">
                <Skeleton className="w-32 h-6 mb-2" />
                <Skeleton className="w-24 h-4 mb-2" />
                <div className="flex items-center gap-2">
                  <Skeleton className="w-20 h-4" />
                  <Skeleton className="w-4 h-4" />
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((j) => (
                      <Skeleton key={j} className="w-4 h-4" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
