import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="border-b py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Skeleton className="w-10 h-10 rounded-full" />
            <Skeleton className="w-24 h-4" />
          </div>
          <div className="hidden md:block">
            <Skeleton className="w-20 h-8" />
          </div>
        </div>
      </header>

      <main className="flex-1 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="hidden md:block w-80 shrink-0">
            <div className="sticky top-4 space-y-6">
              {/* Brand Logo */}
              <div className="flex flex-col items-center">
                <Skeleton className="w-32 h-32 rounded-full mb-2" />
                <Skeleton className="w-24 h-6 mb-1" />
                <Skeleton className="w-32 h-4" />
              </div>

              {/* Today's top offers */}
              <div className="border rounded-lg p-4">
                <Skeleton className="w-48 h-5 mb-3" />
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Skeleton className="w-1 h-1 rounded-full mt-2" />
                      <Skeleton className="w-full h-4" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Offer statistics */}
              <div className="border rounded-lg p-4">
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="text-center">
                      <Skeleton className="w-12 h-8 mx-auto mb-1" />
                      <Skeleton className="w-20 h-4 mx-auto" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Content writer */}
              <div className="border rounded-lg p-4">
                <Skeleton className="w-48 h-5 mb-3" />
                <div className="flex items-center gap-3">
                  <Skeleton className="w-12 h-12 rounded-full" />
                  <div>
                    <Skeleton className="w-32 h-5 mb-1" />
                    <Skeleton className="w-24 h-4" />
                  </div>
                </div>
                <Skeleton className="w-full h-20 mt-3" />
              </div>

              {/* Featured Articles */}
              <div className="border rounded-lg p-4">
                <Skeleton className="w-48 h-5 mb-3" />
                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <div key={i}>
                      <Skeleton className="w-full h-5 mb-1" />
                      <Skeleton className="w-full h-12 mb-1" />
                      <Skeleton className="w-24 h-4" />
                    </div>
                  ))}
                </div>
              </div>

              {/* About Brand */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <Skeleton className="w-32 h-5" />
                  <div className="flex items-center">
                    <Skeleton className="w-8 h-5" />
                    <div className="flex ml-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Skeleton key={i} className="w-3 h-3" />
                      ))}
                    </div>
                    <Skeleton className="w-12 h-4 ml-1" />
                  </div>
                </div>
                <div className="mt-3 space-y-2">
                  {[1, 2].map((i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Skeleton className="w-16 h-4" />
                      <Skeleton className="w-48 h-4" />
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="border rounded-lg p-4">
                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <div key={i}>
                      <Skeleton className="w-full h-8 mb-2" />
                      <Skeleton className="w-full h-16" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Brand Info Banner */}
            <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex flex-col gap-2">
                <Skeleton className="w-48 h-6" />
                <Skeleton className="w-full h-16" />
                <div className="flex flex-wrap gap-2 mt-1">
                  {[1, 2, 3].map((i) => (
                    <Skeleton key={i} className="w-24 h-6" />
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <Skeleton className="w-64 h-8 mb-2" />
              <Skeleton className="w-48 h-4" />
            </div>

            {/* Coupon list */}
            <div className="space-y-4 mb-12">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center gap-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Skeleton className="w-4 h-4" />
                      <Skeleton className="w-24 h-4" />
                    </div>
                    <Skeleton className="w-full h-6 mb-1" />
                    <Skeleton className="w-48 h-4" />
                  </div>
                  <div className="shrink-0">
                    <Skeleton className="w-32 h-10" />
                  </div>
                </div>
              ))}
            </div>

            {/* Load more button */}
            <div className="text-center mb-12">
              <Skeleton className="w-32 h-10 mx-auto" />
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t py-8 mt-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <Skeleton className="w-32 h-6 mb-4" />
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((j) => (
                    <Skeleton key={j} className="w-full h-4" />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t">
            <Skeleton className="w-48 h-4" />
          </div>
        </div>
      </footer>
    </div>
  );
}
