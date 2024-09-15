import type { Id } from "../_generated/dataModel";
import { query } from "../_generated/server";
import { v } from "convex/values";

export default query({
  args: {
    userId: v.string(),
  },
  handler: async ({ db }, { userId }) => {
    const user = await db.get(userId as Id<"users">);
    if (!user) {
      throw new Error("User not found.");
    }

    return user.favorites || [];
  },
});
