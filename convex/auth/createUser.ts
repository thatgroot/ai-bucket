import { mutation } from "../_generated/server";
import { UserTableSchema } from "../schema";

export default mutation({
  args: UserTableSchema,
  handler: async ({ db }, user) => {
    const existingUser = await db
      .query("users")
      .filter((q) => q.eq("email", user.email))
      .first();
    if (existingUser) {
      throw new Error("User already exists.");
    }

    const newUser = await db.insert("users", user);

    return newUser;
  },
});
