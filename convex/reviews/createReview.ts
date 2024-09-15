import { mutation } from "../_generated/server";
import { ReviewTableSchema } from "../schema";

export default mutation({
  args: ReviewTableSchema,

  handler: async ({ db }, review) => {
    // Insert a new review
    await db.insert("reviews", review);
  },
});
