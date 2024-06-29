
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@server/api/trpc";
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

  getPatients: publicProcedure
    .input(z.object({ searchStr: z.string() }))
    .query(async ({ ctx, input}) => {
      return ctx.db.patient.findMany({
        where: {
          OR: [
            {
              FirstName: {
                contains: input.searchStr,
              },
            },
            {
              LastName: {
                contains: input.searchStr,
              },
            }
          ],
        },
        orderBy: { FirstName: "asc" },
        take: input.searchStr == undefined || '' ? undefined : 10,
      })
    }),

});
