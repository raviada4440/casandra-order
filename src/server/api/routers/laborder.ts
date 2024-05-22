import { z } from "zod"

import { createTRPCRouter, publicProcedure } from "@server/api/trpc"

export type CustomLabOrderType = {
  Id: string
  OrderNumber: string | null
  AccessionNumber: string | null
  OrderDate: Date | null
  PatientMRN: string | null
  PatientName: string | null
  Status: string | null
  TestName: string | null
  LabName: string | null | undefined
  OrderingPhysician: string | null
  TreatingPhysician: string | null
}

export const labOrderRouter = createTRPCRouter({

  getLabOrders: publicProcedure.query(({ ctx }) => {
    return ctx.db.labOrder.findMany({
      select: {
        Id: true,
        OrderNumber: true,
        AccessionNumber: true,
        OrderDate: true,
        PatientMRN: true,
        LabOrderTest: {
          select: {
            TestCatalog: {
              select: {
                TestName: true,
                Lab: {
                  select: {
                    LabName: true,
                  },
                },
              },
            },
          },
        },
        LabOrderStatus: {
          select: {
            Status: true,
            StatusDate: true,
          },
        },
        OrderingProvider: {
          select: {
            Name: true,
          },
        },
        TreatingProvider: {
          select: {
            Name: true,
          },
        },
        Patient: {
          select: {
            FirstName: true,
            LastName: true,
          },
        },
      },
      orderBy: { OrderDate: "asc" },
    }).then(labOrders => labOrders.map(labOrder => ({
      Id: labOrder.Id,
      OrderNumber: labOrder.OrderNumber,
      AccessionNumber: labOrder.AccessionNumber,
      OrderDate: labOrder.OrderDate,
      PatientMRN: labOrder.PatientMRN,
      PatientName: labOrder.Patient?.FirstName + ' ' + labOrder.Patient?.LastName,
      Status: labOrder.LabOrderStatus?.map(status => status.Status).join(', '),
      TestName: labOrder.LabOrderTest?.map(test => test.TestCatalog?.TestName).join(', '),
      LabName: labOrder.LabOrderTest?.map(test => test.TestCatalog?.Lab?.LabName).join(', '),
      OrderingPhysician: labOrder.OrderingProvider?.Name,
      TreatingPhysician: labOrder.TreatingProvider?.Name,
    } as CustomLabOrderType)))
  }),


  getLabOrder: publicProcedure
  .input(z.object({ labOrderId: z.string() }))
  .query(async ({ ctx, input }) => {
    return ctx.db.labOrder.findFirst({
      where: {
        Id: input.labOrderId,
      },
      include: {
        OrderingProvider: true,
        TreatingProvider: true,
        Patient: true,
        Organization: true,
        LabOrderAttachment: {
          include: {
            Attachment: true,
          },
        },
        LabOrderBilling: true,
        LabOrderIcd: {
          include: {
            ICD: true,
          },
        },
        LabOrderSpecimen: true,
        LabOrderStatus: true,
        LabOrderTest: {
          include: {
            TestCatalog: {
              include: {
                Lab: true,
                TestCptCode: true,
                TestOrderLoinc: true,
                TestResultLoinc: true,
              },
            },
          },
        },
      }
    })
  }),

  getNotResultedLabOrders: publicProcedure.query(({ ctx }) => {
    return ctx.db.labOrder.count({
      where: {
        AND: [
          {
            NOT: {
              OrderDate: null,
            }
          },
          {
            LabOrderStatus: {
              none: {
                Status: 'Resulted',
              },
            },
          }
        ]
      },
    })
  }),

  getIncompleteOrders: publicProcedure.query(({ ctx }) => {
    return ctx.db.labOrder.count({
      where: {
        OrderDate: null,
      }
    })
  }),

  getIcdCodes: publicProcedure
  .input(z.object({ searchStr: z.string() }))
  .query(async ({ ctx, input}) => {
    return ctx.db.iCD.findMany({
      where: {
        OR: [
          {
            Code: {
              contains: input.searchStr,
            },
          },
          {
            ShortDescription: {
              contains: input.searchStr,
            },
          }
        ],
      },
      orderBy: { Code: "asc" },
      take: input.searchStr == undefined || '' ? undefined : 10,
    })
  }),

  getProviders: publicProcedure
  .input(z.object({ searchStr: z.string() }))
  .query(async ({ ctx, input}) => {
    return ctx.db.provider.findMany({
      where: {
        OR: [
          {
            Name: {
              contains: input.searchStr,
            },
          },
          {
            NPI: {
              contains: input.searchStr,
            },
          }
        ],
      },
      orderBy: { Name: "asc" },
      take: input.searchStr == undefined || '' ? undefined : 10,
    })
  }),

})
