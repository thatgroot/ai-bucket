import { query } from "../../_generated/server";
import { v } from "convex/values";

export default query({
  args: {
    index: v.union(
      v.literal("by_appId"),
      v.literal("by_bookmarks"),
      v.literal("by_visits"),
      v.literal("by_installs")
    ),
    value: v.any(),
  },
  handler: async ({ db }, { index, value }) => {
    // "by_appId" | "by_bookmarks" | "by_visits" | "by_installs"
    const column_map = {
      by_appId: "appId",
      by_bookmarks: "bookmarks",
      by_visits: "visits",
      by_installs: "installs",
    };
    return await db
      .query("app_metadata")
      .withIndex(index, (q) =>
        q.eq(
          column_map[index] as "appId" | "bookmarks" | "visits" | "installs",
          value
        )
      )
      .collect();
  },
});
