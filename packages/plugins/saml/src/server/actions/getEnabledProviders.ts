import { Context } from '@nocobase/actions';

export const getEnabledProviders = async (ctx: Context, next) => {
  const repository = ctx.db.getRepository('samlProviders');
  ctx.body = await repository.find({
    filter: {
      enabled: true,
    },
    fields: ['title', 'clientId'],
  });
  return next();
};
