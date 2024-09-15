import { v } from 'convex/values';
import { query } from './_generated/server';

export const image = query({
	args: { storageId: v.string() },
	handler: async (ctx, { storageId }) => {
		const blob = await ctx.storage.getUrl(storageId);
		return blob;
	}
});
