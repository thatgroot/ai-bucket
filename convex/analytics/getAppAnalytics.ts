import { query } from "../_generated/server";
import { v } from "convex/values";

export default query({
  args: {
    appId: v.string(),
  },
  handler: async ({ db }, { appId }) => {
    return await db
      .query("analytics")
      .filter((q) => q.eq("appId", appId))
      .first();
  },
});
