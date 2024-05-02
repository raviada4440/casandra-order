import { TestCptCodeDeleteArgsSchema, TestCptCodeUncheckedCreateInputSchema } from '~prisma/generated/zod';

import { createTRPCRouter, publicProcedure } from "@server/api/trpc";

export const cptRouter = createTRPCRouter({

  addCptCode: publicProcedure
  .input(TestCptCodeUncheckedCreateInputSchema)
  .mutation(async ({ ctx, input }) => {

    return ctx.db.testCptCode.create({
      data: input,
    });
  }),

  deleteCptCode: publicProcedure
  .input(TestCptCodeDeleteArgsSchema)
  .mutation(async ({ ctx, input }) => {

    return ctx.db.testCptCode.delete({
      where: {
        Id: input.where.Id,
      },
    });
  }),

});
