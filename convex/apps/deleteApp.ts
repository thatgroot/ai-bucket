import type { Id } from "../_generated/dataModel";
import { mutation } from "../_generated/server";
import { v } from "convex/values";

export default mutation({
  args: {
    appId: v.string(),
  },
  handler: async ({ db }, { appId }) => {
    await db.delete(appId as Id<"apps">);
  },
});
