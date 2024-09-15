import { query } from "../_generated/server";
import { v } from "convex/values";

export default query({
  args: {
    index: v.union(
      v.literal("by_name"),
      v.literal("by_primaryCategory"),
      v.literal("by_tags"),
      v.literal("by_featured")
    ),
    value: v.any(),
  },
  handler: async ({ db }, { index, value }) => {
    // "by_name" | "by_primaryCategory" | "by_tags" | "by_featured"
    const column_map = {
      by_name: "name",
      by_primaryCategory: "primaryCategory.id",
      by_tags: "tags",
      by_featured: "featured",
    };
    return await db
      .query("apps")
      .withIndex(index, (q) =>
        q.eq(
          column_map[index] as
            | "name"
            | "tags"
            | "featured"
            | "primaryCategory.id",
          value
        )
      )
      .collect();
  },
});
