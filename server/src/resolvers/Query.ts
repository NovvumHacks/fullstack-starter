import { Context } from '../utils/getContext';

export const Query = {
	user: (_, args, ctx: Context, info) => {
		return ctx.db.query.user(
			{
				where: {
					...args,
				},
			},
			info
		);
	},
	users: (_, args, ctx: Context, info) => {
		return ctx.db.query.users({ ...args }, info);
	},
	photo: (_, args, ctx: Context, info) => {
		return ctx.db.query.photo({ ...args }, info);
	},
	photos: (_, args, ctx: Context, info) => {
		return ctx.db.query.photos({ ...args }, info);
	},
	product: (_, args, ctx: Context, info) => {
		return ctx.db.query.product({ ...args }, info);
	},
	products: (_, args, ctx: Context, info) => {
		return ctx.db.query.products({ ...args }, info);
	},
	location: (_, args, ctx: Context, info) => {
		return ctx.db.query.location({ ...args }, info);
	},
	locations: (_, args, ctx: Context, info) => {
		return ctx.db.query.locations({ ...args }, info);
	},
};
