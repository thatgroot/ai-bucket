import { query } from "../_generated/server";

export default query(async ({ db }) => {
  // Fetch all categories
  return await db.query("categories").collect();
});
