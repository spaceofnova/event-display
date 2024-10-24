export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white/30" />
    </div>
  );
}
