import Link from "next/link";
import { Home, ArrowLeft, Search } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="text-center">
        <p className="text-7xl font-bold text-primary/20">404</p>
        <h1 className="mt-4 font-heading text-3xl font-bold text-foreground">
          Page Not Found
        </h1>
        <p className="mt-3 max-w-md text-muted-foreground">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
          have been moved or doesn&apos;t exist.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link href="/" className={buttonVariants({ size: "lg" })}>
            <Home className="mr-2 h-4 w-4" />
            Go Home
          </Link>
          <Link
            href="/services"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Browse Services
          </Link>
          <Link
            href="/contact"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
