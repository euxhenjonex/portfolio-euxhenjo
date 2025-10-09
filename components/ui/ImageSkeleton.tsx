export default function ImageSkeleton() {
  return (
    <div className="absolute inset-0 bg-muted animate-pulse">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted-foreground/5 to-transparent animate-shimmer" />
    </div>
  );
}
