import { query } from "../_generated/server";
import { v } from "convex/values";

export default query({
  args: {
    appId: v.string(),
  },
  handler: async ({ db }, { appId }) => {
    // Fetch reviews for the app
    return await db
      .query("reviews")
      .filter((q) => q.eq("appId", appId))
      .collect();
  },
});
