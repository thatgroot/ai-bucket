import { mutation } from "../_generated/server";
import { AppTableSchema } from "../schema";

export default mutation({
  args: AppTableSchema,
  handler: async (cvx, app: AppType) => {
    await cvx.db.insert("apps", app);
  },
});
