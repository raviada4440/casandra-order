
import { createTRPCRouter, publicProcedure } from "@server/api/trpc";
import { TestBiomarkerDeleteArgsSchema, TestBiomarkerUncheckedCreateInputSchema } from "~prisma/generated/zod";

export const biomarkerRouter = createTRPCRouter({

  addOrderLoinc: publicProcedure
    .input(TestBiomarkerUncheckedCreateInputSchema)
    .mutation(async ({ ctx, input }) => {

      return ctx.db.testBiomarker.create({
        data: input,
      });
    }),

  deleteOrderLoinc: publicProcedure
    .input(TestBiomarkerDeleteArgsSchema)
    .mutation(async ({ ctx, input }) => {

      return ctx.db.testBiomarker.delete({
        where: {
          Id: input.where.Id,
        },
      });
    }),

});
