
import { z } from "zod"

import { createTRPCRouter, publicProcedure } from "@server/api/trpc"
import {
  OrganizationUncheckedCreateInputSchema,
  UserAttributeUncheckedCreateInputSchema
} from "~prisma/generated/zod";


export const directoryRouter = createTRPCRouter({

  addOrganization: publicProcedure
    .input(OrganizationUncheckedCreateInputSchema)
    .mutation(async ({ ctx, input }) => {

      return ctx.db.organization.upsert({
        where: {
          Id: input.Id,
        },
        update: input,
        create: input,
      });
    }),

  addUserAttribute: publicProcedure
    .input(UserAttributeUncheckedCreateInputSchema)
    .mutation(async ({ ctx, input }) => {

      return ctx.db.userAttribute.upsert({
        where: {
          UserId: input.UserId,
        },
        update: input,
        create: input,
      });
    }),

  getFHIREndpoints: publicProcedure
    .input(z.object({ searchStr: z.string() }))
    .query(async ({ ctx, input }) => {
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
          ]
        },
        orderBy: { OrgName: "asc" },
        take: input.searchStr == undefined || '' ? undefined : 50,
      })
    }),

  getOrgFHIREndpointByISS: publicProcedure
    .input(z.object({ issuer: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.organizationEndpoint.findMany({
        where: {
          Endpoint: {
            equals: input.issuer,
          },
        },
        orderBy: { OrgName: "asc" },
        take: input.issuer == undefined || '' ? undefined : 50,
      })
    }),

  getOrganizationByOrgName: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.organization.findMany({
        where: {
          OrgName: {
            equals: input.name,
          },
        },
        orderBy: { OrgName: "asc" },
        take: input.name == undefined || '' ? undefined : 50,
      })
    }),
})
