import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { paginationOptsValidator } from "convex/server";
import * as schema from "./schema";
const { AppTableSchema } = schema;
import { getPage } from "convex-helpers/server/pagination";

export { default as getApps } from "./apps/getApps";
export { default as createApp } from "./apps/createApp";
export { default as updateApp } from "./apps/updateApp";
export { default as deleteApp } from "./apps/deleteApp";
export { default as getAppById } from "./apps/getAppById";
export { default as searchAppsByIndex } from "./apps/searchAppsByIndex";

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

export const all = query({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    const foo = await ctx.db.query("apps").paginate(args.paginationOpts);
    return foo;
  },
});

export const getAll = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("apps").order("desc").take(20);
  },
});

export const get = query({
  args: {
    id: v.id("apps"),
  },
  handler: (ctx, { id }) => {
    return ctx.db.get(id);
  },
});

export const create = mutation({
  args: AppTableSchema,
  handler: async (ctx, args) => {
    return await ctx.db.insert("apps", args);
  },
});

// Query to search apps by name
export const searchAppsByName = query(async (ctx, { searchTerm }) => {
  const startIndexKey = searchTerm ? [String(searchTerm)] : undefined;

  const { page } = await getPage(ctx, {
    schema: schema.default,
    table: "apps",
    index: "by_name",
    startIndexKey,
    order: "asc",
    absoluteMaxRows: 10,
  });

  return page;
});
