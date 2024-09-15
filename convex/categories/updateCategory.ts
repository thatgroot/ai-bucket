import { v } from "convex/values";
import { CategoryTableSchema } from "../schema";
import type { Id } from "../_generated/dataModel";
import { mutation } from "../_generated/server";

export default mutation({
  args: {
    id: v.string(),
    ...CategoryTableSchema,
  },
  handler: async (ctx, { id, ...category }) => {
    // Update category by ID
    await ctx.db.patch(id as Id<"categories">, category);
  },
});
