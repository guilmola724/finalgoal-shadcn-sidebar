import Link from "next/link";

export function Footer() {
  return (
    <div className="supports-backdrop-blur:bg-background/60 z-20 w-full shadow bg-background/95 backdrop-blur">
      <div className="mx-8 flex h-14 items-center">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built on top of{" "}
          <Link
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            shadcn/ui
          </Link>
          . The source code is available on{" "}
          <Link
            href="https://github.com/salimi-my/shadcn-ui-sidebar"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
