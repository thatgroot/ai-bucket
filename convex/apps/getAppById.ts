import type { Id } from "../_generated/dataModel";
import { query } from "../_generated/server";
import { v } from "convex/values";

export default query({
  args: {
    id: v.string(),
  },
  handler: async ({ db }, { id }) => {
    return await db.get(id as Id<"apps">);
  },
});
