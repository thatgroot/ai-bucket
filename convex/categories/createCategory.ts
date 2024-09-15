import { mutation } from "../_generated/server";
import { CategoryTableSchema } from "../schema";

export default mutation({
  args: CategoryTableSchema,
  handler: async ({ db }, category) => {
    await db.insert("categories", category);
  },
});
