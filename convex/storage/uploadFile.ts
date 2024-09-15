import { v } from "convex/values";
import { mutation } from "../_generated/server";

// @TODO - upload file to the server
export default mutation({
  args: {
    file: v.any(),
  },
  handler: async ({ storage }) => {
    const imageUrl = await storage.generateUploadUrl();
    return { imageUrl };
  },
});
