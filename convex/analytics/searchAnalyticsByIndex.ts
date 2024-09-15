import { query } from "../_generated/server";
import { v } from "convex/values";

export default query({
  args: {
    index: v.union(
      v.literal("by_appId"),
      v.literal("by_views"),
      v.literal("by_installs")
    ),
    value: v.any(),
  },
  handler: async ({ db }, { index, value }) => {
    const column_map = {
      by_appId: "appId",
      by_views: "views",
      by_installs: "installs",
    };
    return await db
      .query("analytics")
      .withIndex(index, (q) =>
        q.eq(column_map[index] as "appId" | "views" | "installs", value)
      )
      .collect();
  },
});
