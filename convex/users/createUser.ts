import { mutation } from "../_generated/server";
import { UserTableSchema } from "../schema";

export default mutation({
  args: UserTableSchema,
  handler: async ({ db }, user) => {
    await db.insert("users", user);
  },
});
