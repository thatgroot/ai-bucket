import { query } from "../_generated/server";
import { v } from "convex/values";

export default query({
  args: {
    index: v.union(v.literal("by_email"), v.literal("by_role")),
    value: v.any(),
  },
  handler: async ({ db }, { index, value }) => {
    const column_map = {
      by_email: "email",
      by_role: "role",
    };
    return await db
      .query("admins")
      .withIndex(index, (q) =>
        q.eq(column_map[index] as "email" | "role", value)
      )
      .collect();
  },
});
