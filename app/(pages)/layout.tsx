"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  AppleIcon,
  FilterIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
} from "lucide-react";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const convex = new ConvexReactClient(
    process.env.NEXT_PUBLIC_CONVEX_URL as string
  );

  return (
    <ClerkProvider publishableKey={process.env.PUBLISABLE_KEY}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <div className="flex flex-col min-h-screen bg-background">
          <header className="bg-background border-b shadow-sm sticky top-0 z-20">
            <div className="container px-4 md:px-6 py-4 flex items-center justify-between">
              <Button variant="link">
                <AppleIcon className="w-6 h-6" />
                <span>App Store</span>
              </Button>
              <div className="relative flex-1 max-w-md ml-4 md:ml-6">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search apps..."
                  className="pl-10 pr-8 w-full rounded-full bg-muted focus:bg-background focus:ring-primary focus:ring-1"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  <FilterIcon className="w-5 h-5" />
                </Button>
              </div>
              <div className="hidden md:flex items-center gap-4">
                <Button
                  variant="link"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <a href="/categories">Categories</a>
                </Button>
                <Button
                  variant="link"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Top Charts
                </Button>
                <Button
                  variant="link"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <a href="/blog">Updates</a>
                </Button>
                <Button variant="ghost">
                  <UserIcon className="w-5 h-5 mr-2" />
                  Sign In
                </Button>
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="md:hidden">
                    <MenuIcon className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full max-w-xs">
                  <div className="grid gap-4 p-4">
                    <Button
                      variant="link"
                      className="flex items-center gap-2 text-lg font-semibold"
                    >
                      <AppleIcon className="w-6 h-6" />
                      <span>App Store</span>
                    </Button>
                    <div className="grid gap-2">
                      <Button
                        variant="link"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        Categories
                      </Button>
                      <Button
                        variant="link"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        Top Charts
                      </Button>
                      <Button
                        variant="link"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        Updates
                      </Button>
                    </div>
                    <Button variant="outline">
                      <UserIcon className="w-5 h-5 mr-2" />
                      Sign In
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </header>
          <main className="flex-1 container px-4 md:px-6 py-8">{children}</main>
        </div>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
