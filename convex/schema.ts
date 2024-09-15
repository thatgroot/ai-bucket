import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// Define the schema for the Apps table
export const AppTableSchema = {
  uid: v.optional(v.union(v.null(), v.string())), // Optional unique identifier for the app
  primaryCategory: v.object({
    id: v.string(), // ID of the primary category
    name: v.string(), // Name of the primary category
  }),
  subcategories: v.optional(
    v.array(
      v.object({
        id: v.string(), // ID of the subcategory
        name: v.string(), // Name of the subcategory
      })
    )
  ), // Optional array of subcategories
  description: v.string(), // Description of the app
  headline: v.string(), // Headline or tagline for the app
  meta_description: v.string(), // Meta description for SEO
  name: v.string(), // Name of the app
  nsfw: v.boolean(), // Whether the app is NSFW
  summary: v.string(), // Summary or overview of the app
  tags: v.array(v.string()), // Tags associated with the app
  thumbnail: v.string(), // URL of the app's thumbnail image
  url: v.string(), // URL for the app
  featured: v.optional(v.boolean()), // Whether the app is featured
};

// @TODO:  create meta data schema for user
export const AppMetadataSchema = {
  appId: v.string(), // Reference to the app
  bookmarks: v.float64(), // Number of bookmarks
  visits: v.float64(), // Number of visits
  favourites: v.number(),
  reviews: v.object({
    id: v.string(),
    total: v.float64(),
    ratings: v.float64(),
  }),
  installs: v.float64(), // Number of installs
};

// @TODO: i think some data is missing
export const UserAppsSchema = {
  userId: v.string(), // Reference to the user who owns or created the app
  appId: v.string(), // Reference to the app
  role: v.union(v.literal("creator"), v.literal("owner")), // Role of the user with respect to the app
};

// Define the schema for the Users table
export const AdminTableSchema = {
  uid: v.string(), // Unique identifier for the admin
  name: v.string(), // Name of the admin
  email: v.string(), // Email address of the admin
  role: v.union(
    v.literal("super_admin"),
    v.literal("admin"),
    v.literal("analytics")
  ), // Role of the admin
  avatar: v.optional(v.string()), // Optional avatar image URL
  permissions: v.array(v.string()), // List of permissions or roles
};

// @TODO: Roles Scheme needed

// refine it Define the schema for the Users table
export const UserTableSchema = {
  tokenIdentifier: v.string(),
  name: v.optional(v.string()),
  pictureUrl: v.optional(v.string()),
  email: v.optional(v.string()),
  emailVerified: v.optional(v.boolean()),
  phone: v.optional(v.any()),
  phoneNumberVerified: v.optional(v.boolean()),
  isAnonymous: v.optional(v.any()),
  avatar: v.optional(v.any()), // Optional avatar image URL
  favorites: v.array(v.string()), // Array of app IDs that are favorited
};

// Define the schema for the Categories table
export const CategoryTableSchema = {
  name: v.string(), // Name of the category
  slug: v.string(), // URL-friendly version of the category name
  description: v.optional(v.string()), // Optional description of the category
  parentId: v.optional(v.string()), // Optional reference to the parent category
  subcategories: v.optional(v.array(v.string())), // Array of subcategory IDs
};

// Define the schema for the Reviews table
export const ReviewTableSchema = {
  appId: v.string(), // Reference to the app being reviewed
  userId: v.string(), // Reference to the user who wrote the review
  rating: v.float64(), // Rating given by the user
  comment: v.optional(v.string()), // Optional comment from the user
  reactions: v.optional(
    v.array(
      v.union(
        v.literal("okay"),
        v.literal("good"),
        v.literal("love"),
        v.literal("fire"),
        v.literal("anger"),
        v.literal("insightful")
      )
    )
  ),
};

// Define the schema for the Featured Apps table
export const FeaturedAppsSchema = {
  appId: v.string(), // Unique identifier for the app being featured
  type: v.union(v.literal("day"), v.literal("week"), v.literal("month")), // Type of feature (daily, weekly, or monthly)
  startDate: v.string(), // When the app starts being featured
  endDate: v.optional(v.string()), // Optional end date for the feature period
  position: v.optional(v.float64()), // Optional position or ranking within the featured list
  spotlight: v.optional(v.boolean()), // Whether the app is given special spotlight or emphasis
};

// @TODO: expand it: Define the schema for the Analytics table
export const AnalyticsSchema = {
  appId: v.string(),
  views: v.float64(),
  installs: v.float64(),
};

export default defineSchema({
  //   ...authTables,
  admins: defineTable(AdminTableSchema)
    .index("by_email", ["email"])
    .index("by_role", ["role"]),

  apps: defineTable(AppTableSchema)
    .index("by_name", ["name"])
    .index("by_primaryCategory", ["primaryCategory.id"])
    .index("by_tags", ["tags"])
    .index("by_featured", ["featured"]),

  app_metadata: defineTable(AppMetadataSchema)
    .index("by_appId", ["appId"])
    .index("by_bookmarks", ["bookmarks"])
    .index("by_visits", ["visits"])
    .index("by_installs", ["installs"]),

  user_apps: defineTable(UserAppsSchema)
    .index("by_userId", ["userId"])
    .index("by_appId", ["appId"])
    .index("by_role", ["role"]),

  users: defineTable(UserTableSchema)
    .index("by_email", ["email"])
    .index("by_token", ["tokenIdentifier"]),

  categories: defineTable(CategoryTableSchema)
    .index("by_name", ["name"])
    .index("by_slug", ["slug"])
    .index("by_parentId", ["parentId"]),

  reviews: defineTable(ReviewTableSchema)
    .index("by_appId", ["appId"])
    .index("by_userId", ["userId"])
    .index("by_rating", ["rating"]),

  featured_apps: defineTable(FeaturedAppsSchema)
    .index("by_type", ["type"])
    .index("by_appId", ["appId"]),

  analytics: defineTable(AnalyticsSchema)
    .index("by_appId", ["appId"])
    .index("by_views", ["views"])
    .index("by_installs", ["installs"]),
});
