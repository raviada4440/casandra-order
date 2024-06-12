
import { z } from "zod"

import { createTRPCRouter, publicProcedure } from "@server/api/trpc"
import {
  OrganizationUncheckedCreateInputSchema
} from "~prisma/generated/zod";


export const directoryRouter = createTRPCRouter({

  addOrganization: publicProcedure
    .input(OrganizationUncheckedCreateInputSchema)
    .mutation(async ({ ctx, input }) => {

      return ctx.db.organization.create({
        data: input,
      });
    }),

  getFHIREndpoints: publicProcedure
  .input(z.object({ searchStr: z.string() }))
  .query(async ({ ctx, input}) => {
    return ctx.db.organizationEndpoint.findMany({
      where: {
        AND: [
          {
            OrgName: {
              contains: input.searchStr,
            },
          },
          {
            FHIRVersion: {
              equals: 'R4',
            },
          }
        ],
      },
      orderBy: { OrgName: "asc" },
      take: input.searchStr == undefined || '' ? undefined : 50,
    })
  }),

})
