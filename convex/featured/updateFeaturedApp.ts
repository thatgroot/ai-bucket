import { mutation } from "../_generated/server";
import { v } from "convex/values";
import { FeaturedAppsSchema } from "../schema";
import type { Id } from "../_generated/dataModel";

export default mutation({
  args: {
    id: v.string(),
    ...FeaturedAppsSchema,
  },
  handler: async ({ db }, { id, ...app }) => {
    await db.patch(id as Id<"featured_apps">, app);
  },
});
