import { AppTableSchema } from "../schema";
import type { Id } from "../_generated/dataModel";
import { v } from "convex/values";
import { mutation } from "../_generated/server";

export default mutation({
  args: {
    id: v.string(),
    ...AppTableSchema,
  },
  handler: async (ctx, { id, ...app }) => {
    return await ctx.db.patch(id as Id<"apps">, app);
  },
});
