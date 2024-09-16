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


const getElasticSearch = async (params: {
  casandraTestId: string;
  type: string;
  labName: string;
  drugName: string;
  indication: string;
}): Promise<any> => {

  const url = new URL(`${process.env.NEXT_PUBLIC_APP_URL}/api/search`)
  const facetFilters = []

  if (params.indication && params.indication.length > 0) {
    facetFilters.push(`Indication:${params.indication}`)
  }

  if (params.labName && params.labName.length > 0) {
    facetFilters.push(`Lab:${params.labName}`)
  }

  if (params.type && params.type.length > 0) {
    facetFilters.push(`Type:${params.type}`)
  }

  if (params.drugName && params.drugName.length > 0) {
    facetFilters.push(`DrugName:${params.drugName}`)
  }

  const requestPayload = [
    {
      "indexName": "casandratests",
      "params": {
      "facetFilters": facetFilters,
      "facets": [
        "*"
      ],
      "highlightPostTag": "__/ais-highlight__",
      "highlightPreTag": "__ais-highlight__",
      "hitsPerPage": 20,
      "maxValuesPerFacet": 20,
      "page": 0,
        "query": params.casandraTestId
      }
    }
  ]

  console.log('requestPayload: ', JSON.stringify(requestPayload))

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(requestPayload),
    headers: {
      Accept: "application/json",
    },

  });

  const data = (await response.json());

  return data;
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
  .input(z.object({ casandraTestId: z.string(), type: z.string(), labName: z.string(), drugName: z.string(), indication: z.string() }))
  .query(async ({ input }) => {

    let elasticResults = { results: [{ hits: [] }] };

    if (input.casandraTestId.length > 0 || input.type.length > 0 || input.labName.length > 0 || input.drugName.length > 0 || input.indication.length > 0) {
      elasticResults = await getElasticSearch({ casandraTestId: input.casandraTestId, type: input.type, labName: input.labName, drugName: input.drugName, indication: input.indication })
    }

    console.log('data: ', JSON.stringify(elasticResults.results[0].hits))


    return elasticResults.results[0].hits

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
