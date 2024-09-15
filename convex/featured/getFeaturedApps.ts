import { query } from "../_generated/server";

export default query(async ({ db }) => {
  // Fetch all featured apps
  return await db.query("featured_apps").collect();
});
