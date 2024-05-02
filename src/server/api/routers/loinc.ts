
import { createTRPCRouter, publicProcedure } from "@server/api/trpc";
import { TestOrderLoincDeleteArgsSchema, TestOrderLoincUncheckedCreateInputSchema, TestResultLoincDeleteArgsSchema, TestResultLoincUncheckedCreateInputSchema } from "~prisma/generated/zod";

export const loincRouter = createTRPCRouter({

  addOrderLoinc: publicProcedure
    .input(TestOrderLoincUncheckedCreateInputSchema)
    .mutation(async ({ ctx, input }) => {

      return ctx.db.testOrderLoinc.create({
        data: input,
      });
    }),

  deleteOrderLoinc: publicProcedure
    .input(TestOrderLoincDeleteArgsSchema)
    .mutation(async ({ ctx, input }) => {

      return ctx.db.testOrderLoinc.delete({
        where: {
          Id: input.where.Id,
        },
      });
    }),


  addResultLoinc: publicProcedure
    .input(TestResultLoincUncheckedCreateInputSchema)
    .mutation(async ({ ctx, input }) => {

      return ctx.db.testResultLoinc.create({
        data: input,
      });
    }),

  deleteResultLoinc: publicProcedure
    .input(TestResultLoincDeleteArgsSchema)
    .mutation(async ({ ctx, input }) => {

      return ctx.db.testResultLoinc.delete({
        where: {
          Id: input.where.Id,
        },
      });
    }),

});
