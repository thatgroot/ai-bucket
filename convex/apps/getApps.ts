import { query } from "../_generated/server";

export default query(async (cvx) => {
  // Fetch all apps
  return await cvx.db.query("apps").take(20);
});
