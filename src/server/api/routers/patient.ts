
import { createTRPCRouter, publicProcedure } from "@server/api/trpc";
import { z } from "zod";
import { PatientUncheckedCreateInputSchema } from "~prisma/generated/zod";

export const patientRouter = createTRPCRouter({

  upsertPatient: publicProcedure
    .input(PatientUncheckedCreateInputSchema)
    .mutation(async ({ ctx, input }) => {

      return ctx.db.patient.upsert({
        where: {
          Id: input.Id,
        },
        update: input,
        create: input,
      });
    }),

  getPatientById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return  ctx.db.patient.findUnique({
        where: {
          Id: input.id,
        },
      })
    }),

});
