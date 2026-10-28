import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-16 my-96 text-center">
      <h1 className="text-2 font-medium">Page not found</h1>
      <p className="text-body">The page you are looking for does not exist or has moved.</p>
      <Link href="/all_backgrounds/" className="underline hover:text-selected">
        Browse all free backgrounds
      </Link>
    </div>
  );
}
