export function ProductCardSkeleton() {
  return (
    <div
      className="flex h-full flex-col border border-neutral-200 bg-white p-4"
      aria-hidden="true"
    >
      <div className="mx-auto h-32 w-24 animate-pulse rounded bg-neutral-200" />
      <div className="mt-3 h-3 w-full animate-pulse rounded bg-neutral-200" />
      <div className="mt-2 h-3 w-2/3 animate-pulse rounded bg-neutral-200" />
      <div className="mt-4 h-5 w-1/2 animate-pulse rounded bg-neutral-200" />
      <div className="mt-2 h-3 w-2/3 animate-pulse rounded bg-neutral-200" />
      <div className="mt-4 h-10 w-full animate-pulse rounded bg-neutral-200" />
    </div>
  );
}
