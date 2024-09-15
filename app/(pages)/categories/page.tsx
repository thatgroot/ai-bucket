import React from "react";

import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import { Search, Pencil, Trash2 } from "lucide-react";

const categories = [
  {
    name: "Productivity",
    icon: "💼",
    subcategories: ["Task Management", "Note Taking", "Time Tracking"],
  },
  {
    name: "Entertainment",
    icon: "🎭",
    subcategories: ["Music", "Video", "Games"],
  },
  {
    name: "Social",
    icon: "👥",
    subcategories: ["Messaging", "Social Networks", "Dating"],
  },
  {
    name: "Education",
    icon: "🎓",
    subcategories: ["Language Learning", "Tutoring", "Study Tools"],
  },
  {
    name: "Finance",
    icon: "💰",
    subcategories: ["Budgeting", "Investing", "Banking"],
  },
  {
    name: "Health & Fitness",
    icon: "🏋️",
    subcategories: ["Workout Tracking", "Nutrition", "Meditation"],
  },
];

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Categories</h1>

      <div className="mb-8">
        <div className="flex gap-4 mb-4">
          <Input
            className="flex-grow"
            placeholder="Search categories..."
            type="search"
          />
          <Button>
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </div>

      <Tabs>
        <TabsList className="mb-4">
          <TabsTrigger value="browse">Browse Categories</TabsTrigger>
          <TabsTrigger value="manage">Manage Categories</TabsTrigger>
        </TabsList>

        <TabsContent value="browse">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-2xl mr-2">{category.icon}</span>
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {category.subcategories.map((subcategory, _j) => (
                      <li key={_j}>
                        <a
                          href={`/category/${category.name.toLowerCase()}/${subcategory
                            .toLowerCase()
                            .replace(" ", "-")}`}
                          className="text-blue-600 hover:underline"
                        >
                          {subcategory}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <Button
                    // href={`/category/${category.name.toLowerCase()}`}
                    className="mt-4"
                    variant="outline"
                  >
                    View All in {category.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="manage">
          <Card>
            <CardHeader>
              <CardTitle>Manage Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 border rounded"
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">{category.icon}</span>
                      <span>{category.name}</span>
                    </div>
                    <div>
                      <Button variant="ghost" size="sm" className="mr-2">
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="mt-4">Add New Category</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Trending Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.slice(0, 4).map((category, index) => (
            <Button key={index} variant="outline" className="h-auto py-4">
              <a
                href={`/category/${category.name.toLowerCase()}`}
                className="flex items-center"
              >
                <span className="text-2xl mr-2">{category.icon}</span>
                {category.name}
              </a>
            </Button>
          ))}
        </div>
      </section>
    </div>
  );
}
