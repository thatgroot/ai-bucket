import { query } from "../_generated/server";
import { v } from "convex/values";

export default query({
  args: {
    index: v.union(
      v.literal("by_name"),
      v.literal("by_slug"),
      v.literal("by_parentId")
    ),
    value: v.any(),
  },
  handler: async ({ db }, { index, value }) => {
    const column_map = {
      by_name: "name",
      by_slug: "slug",
      by_parentId: "parentId",
    };
    return await db
      .query("categories")
      .withIndex(index, (q) =>
        q.eq(column_map[index] as "name" | "slug" | "parentId", value)
      )
      .collect();
  },
});
