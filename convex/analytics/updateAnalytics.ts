import { mutation } from "../_generated/server";
import { v } from "convex/values";
import { AnalyticsSchema } from "../schema";
import type { Id } from "../_generated/dataModel";

export default mutation({
  args: {
    id: v.string(),
    ...AnalyticsSchema,
  },
  handler: async ({ db }, { id, ...analytics }) => {
    await db.patch(id as Id<"analytics">, analytics);
  },
});
