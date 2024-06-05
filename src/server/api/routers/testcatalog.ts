import { z } from "zod"

import { createTRPCRouter, publicProcedure } from "@server/api/trpc"

export type CustomCatalogType = {
  TestId: number
  LabId: number | null
  TestName: string | null
  Methodology: string | null
  CasandraTestId: string | null
  LabTestId: string | null
  LabName: string | null | undefined
  OrderLoinc: string | null
}

export const testCatalogRouter = createTRPCRouter({

  // create: publicProcedure
  //   .input(z.object({ name: z.string().min(1) }))
  //   .mutation(async ({ ctx, input }) => {
  //     // simulate a slow db call
  //     await new Promise((resolve) => setTimeout(resolve, 1000))

  //     return ctx.db.testCatalog.create({
  //       data: {
  //         TestName: input.name,
  //       },
  //     })
  //   }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.testCatalog.findMany({
      select: {
        TestId: true,
        LabId: true,
        TestName: true,
        Methodology: true,
        CasandraTestId: true,
        LabTestId: true,
        Lab: {
          select: {
            LabName: true,
          },
        },
        TestOrderLoinc: {
          select: {
            OrderLoinc: true,
          },
        },
      },
      orderBy: { TestName: "asc" },
    }).then(catalogs => catalogs.map(catalog => ({
      TestId: catalog.TestId,
      LabId: catalog.LabId,
      TestName: catalog.TestName,
      Methodology: catalog.Methodology,
      LabTestId: catalog.LabTestId,
      CasandraTestId: catalog.CasandraTestId,
      LabName: catalog.Lab?.LabName,
      OrderLoinc: catalog.TestOrderLoinc?.[0]?.OrderLoinc,
    } as CustomCatalogType)))
  }),


  getTest: publicProcedure
  .input(z.object({ testId: z.string() }))
  .query(async ({ ctx, input }) => {
    return ctx.db.testCatalog.findFirst({
      where: {
        TestId: parseInt(input.testId),
      },
      include: {
        Lab: true,
        TestCptCode: true,
        TestOrderLoinc: {
          include: {
            LOINC: true,
          },
        },
        TestResultLoinc: {
          include: {
            LOINC: true,
          },
        },
        TestBiomarker: {
          include: {
            BIOMARKER: true,
          },
        }
      }
    })
  }),

  getTestByCasandraTestId: publicProcedure
  .input(z.object({ casandraTestId: z.string() }))
  .query(async ({ ctx, input }) => {
    return ctx.db.testCatalog.findFirst({
      where: {
        CasandraTestId: input.casandraTestId,
      },
      include: {
        Lab: true,
        TestCptCode: true,
        TestOrderLoinc: {
          include: {
            LOINC: true,
          },
        },
        TestResultLoinc: {
          include: {
            LOINC: true,
          },
        },
        TestBiomarker: {
          include: {
            BIOMARKER: true,
          },
        }
      }
    })
  }),

  getFilteredTests: publicProcedure
  .input(z.object({ testId: z.string() }))
  .query(async ({ ctx, input }) => {
    return ctx.db.testCatalog.findMany({
      where: {
        TestId: parseInt(input.testId),
      },
      include: {
        Lab: true,
        TestCptCode: true,
        TestOrderLoinc: true,
        TestResultLoinc: true,
      }
    })
  }),

  getLabs: publicProcedure.query(({ ctx }) => {
    return ctx.db.lab.findMany({
      orderBy: { LabName: "asc" },
    })
  }),

  searchLabs: publicProcedure
    .input(z.object({ searchStr: z.string() }))
    .query(async ({ ctx, input}) => {
      return ctx.db.lab.findMany({
        where: {
          OR: [
            {
              LabName: {
                contains: input.searchStr,
              },
            },
            {
              City: {
                contains: input.searchStr,
              },
            },
            {
              State: {
                contains: input.searchStr,
              },
            },
          ],
          AND: [
            {
              LabCode: {
                not: null,
              },
            },
          ],
        },
        orderBy: { LabName: "asc" },
        take: input.searchStr == undefined || '' ? undefined : 10,
      })
  }),

  getNumberOfCatalogs: publicProcedure.query(({ ctx }) => {
    return ctx.db.testCatalog.findMany({
      distinct: ['LabId'],
      select: {
        LabId: true,
      },
    })
  }),

  getTotalTests: publicProcedure.query(({ ctx }) => {
    return ctx.db.testCatalog.count()
  }),

  getTestCountWithOrderLoinc: publicProcedure.query(({ ctx }) => {
    return ctx.db.testOrderLoinc.count()
  }),

  getLoincCodes: publicProcedure
  .input(z.object({ searchStr: z.string() }))
  .query(async ({ ctx, input}) => {
    return ctx.db.lOINC.findMany({
      where: {
        OR: [
          {
            Loinc_Num: {
              contains: input.searchStr,
            },
          },
          {
            COMPONENT: {
              contains: input.searchStr,
            },
          },
          {
            SHORTNAME: {
              contains: input.searchStr,
            },
          },
        ],
      },
      orderBy: { Loinc_Num: "asc" },
      take: input.searchStr == undefined || '' ? undefined : 10,
    })
  }),

  getBiomaker: publicProcedure
  .input(z.object({ searchStr: z.string() }))
  .query(async ({ ctx, input}) => {
    return ctx.db.bIOMARKER.findMany({
      where: {
        OR: [
          {
            HGNCId: {
              contains: input.searchStr,
            },
          },
          {
            HGNCApprovedSymbol: {
              contains: input.searchStr,
            },
          },
          {
            HGNCApprovedName: {
              contains: input.searchStr,
            },
          },
        ],
      },
      orderBy: { HGNCId: "asc" },
      take: input.searchStr == undefined || '' ? undefined : 10,
    })
  }),
})
