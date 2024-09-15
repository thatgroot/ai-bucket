import { mutation } from "../_generated/server";

export default mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("the user is not authenticated");
    }

    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .unique();
    if (user) {
      return user._id;
    }
    const {
      tokenIdentifier,
      email,
      emailVerified,
      phone,
      phoneNumberVerified,
      isAnonymous,
      avatar,
      pictureUrl,
    } = identity;

    const userId = await ctx.db.insert("users", {
      tokenIdentifier: tokenIdentifier,
      name: "",
      pictureUrl,
      email,
      emailVerified,
      phone,
      phoneNumberVerified,
      isAnonymous,
      avatar,
      favorites: [],
    });

    return userId;
  },
});
