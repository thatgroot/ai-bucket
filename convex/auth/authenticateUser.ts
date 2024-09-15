import { mutation } from "../_generated/server";
import { v } from "convex/values";

export default mutation({
  args: {
    email: v.string(),
    password: v.string(),
  },
  handler: async ({ db }, { email, password }) => {
    const user = await db
      .query("users")
      .filter((q) => q.eq("email", email))
      .first();
    if (!user) {
      throw new Error("User not found.");
    }

    // Example: Add your password check logic here
    const isValidPassword = password === "test_password"; // Replace with real check
    if (!isValidPassword) {
      throw new Error("Invalid password.");
    }

    return user._id;
  },
});
