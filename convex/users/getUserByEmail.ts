import { query } from "../_generated/server";
import { v } from "convex/values";

export default query({
  args: {
    email: v.string(),
  },
  handler: async ({ db }, { email }) => {
    // Fetch user by email
    return await db
      .query("users")
      .filter((q) => q.eq("email", email))
      .first();
  },
});
