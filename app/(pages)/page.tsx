"use client";
import { Button } from "../../components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Star, Heart, Clock, StarIcon, ListIcon, TagIcon } from "lucide-react";
import Link from "next/link";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useEffect } from "react";
export default function Home() {
  const storeUser = useMutation(api.users.register.default);

  useEffect(() => {
    storeUser({});
  }, []);
  return (
    <>
      <div className="grid gap-8">
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Featured Apps</h2>
            <Button variant="link" className="text-primary hover:underline">
              See all
            </Button>
          </div>
          <Carousel>
            <CarouselContent>
              {[1, 2, 3, 4, 5].map((_, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                    <Button className="group block h-full p-0 bg-transparent">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                        <img
                          src="https://g-updece5q5lq.vusercontent.net/placeholder.svg"
                          alt="App screenshot"
                          className="object-cover w-full aspect-[4/3] h-full group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute top-2 right-2 flex items-center gap-1 bg-background/70 backdrop-blur-sm rounded-full px-2 py-1 text-xs">
                          <StarIcon className="w-4 h-4 fill-primary" />
                          <span>4.8</span>
                        </div>
                      </div>
                      <div className="p-4 bg-background text-left">
                        <a
                          href="/apps/8jO_x"
                          className="text-lg font-semibold text-muted-foreground w-fit"
                        >
                          App Name
                        </a>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          App description goes here.
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <ListIcon className="w-4 h-4" />
                            <span>Category</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <TagIcon className="w-4 h-4" />
                            <span>$4.99</span>
                          </div>
                        </div>
                      </div>
                    </Button>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Top Rated</h2>
            <Button variant="link" className="text-primary hover:underline">
              See all
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <Card key={i}>
                <Button variant="link" className="group block h-full">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                    <img
                      src="https://g-updece5q5lq.vusercontent.net/placeholder.svg"
                      alt="App screenshot"
                      className="object-cover aspect-[4/3] w-full h-full group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute top-2 right-2 flex items-center gap-1 bg-background/70 backdrop-blur-sm rounded-full px-2 py-1 text-xs">
                      <StarIcon className="w-4 h-4 fill-primary" />
                      <span>5.0</span>
                    </div>
                  </div>
                  <div className="p-4 bg-background">
                    <h3 className="text-lg font-semibold line-clamp-1">
                      App Name
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      App description goes here.
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <ListIcon className="w-4 h-4" />
                        <span>Category</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <TagIcon className="w-4 h-4" />
                        <span>Price</span>
                      </div>
                    </div>
                  </div>
                </Button>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Productivity",
              "Entertainment",
              "Social",
              "Education",
              "Finance",
              "Health",
              "Travel",
              "Games",
            ].map((category, index) => (
              <Button key={index} variant="outline" className="h-auto py-4">
                <Link href={`/category/${category.toLowerCase()}`}>
                  {category}
                </Link>
              </Button>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Star className="mr-2" />
                Top Rated
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {["App A", "App B", "App C"].map((app, index) => (
                  <li key={index}>
                    <Link
                      href={`/app/${app.toLowerCase().replace(" ", "-")}`}
                      className="text-blue-600 hover:underline"
                    >
                      {app}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="mr-2" />
                Most Favorited
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {["App 1", "App 2", "App 3"].map((app, index) => (
                  <li key={index}>
                    <Link
                      href={`/app/${app.toLowerCase().replace(" ", "-")}`}
                      className="text-blue-600 hover:underline"
                    >
                      {app}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2" />
                Recently Updated
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {["App 1", "App 2", "App 3"].map((app, index) => (
                  <li key={index}>
                    <Link
                      href={`/app/${app.toLowerCase().replace(" ", "-")}`}
                      className="text-blue-600 hover:underline"
                    >
                      {app}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">News and Updates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "New Features Released", type: "Blog Post" },
              { title: "App of the Week", type: "Industry News" },
              { title: "Security Update", type: "App Update" },
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    {item.type}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Read More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
