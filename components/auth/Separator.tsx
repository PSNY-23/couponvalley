export const Separator = ({ label }: { label: string }) => (
  <div className="flex items-center gap-2 text-muted-foreground text-sm">
    <div className="h-px flex-1 bg-border" />
    {label}
    <div className="h-px flex-1 bg-border" />
  </div>
);