import { query } from "../_generated/server";
import { v } from "convex/values";

export default query({
  args: {
    index: v.union(
      v.literal("by_appId"),
      v.literal("by_userId"),
      v.literal("by_rating")
    ),
    value: v.any(),
  },
  handler: async ({ db }, { index, value }) => {
    const column_map = {
      by_appId: "appId",
      by_userId: "userId",
      by_rating: "rating",
    };
    return await db
      .query("reviews")
      .withIndex(index, (q) =>
        q.eq(column_map[index] as "appId" | "userId" | "rating", value)
      )
      .collect();
  },
});
