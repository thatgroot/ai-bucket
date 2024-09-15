import { query } from "../_generated/server";
import { v } from "convex/values";

export default query({
  args: {
    index: v.union(v.literal("by_type"), v.literal("by_appId")),
    value: v.any(),
  },
  handler: async ({ db }, { index, value }) => {
    const column_map = {
      by_type: "type",
      by_appId: "appId",
    };
    return await db
      .query("featured_apps")
      .withIndex(index, (q) =>
        q.eq(column_map[index] as "type" | "appId", value)
      )
      .collect();
  },
});
