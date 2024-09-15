import { mutation } from "../_generated/server";
import { v } from "convex/values";
import { UserTableSchema } from "../schema";
import type { Id } from "../_generated/dataModel";

export default mutation({
  args: {
    id: v.string(),
    ...UserTableSchema,
  },
  handler: async ({ db }, { id, ...updates }) => {
    // Update user entry by ID
    await db.patch(id as Id<"users">, updates);
  },
});
