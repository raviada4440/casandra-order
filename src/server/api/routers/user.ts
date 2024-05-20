import { z } from "zod"

import { createTRPCRouter, publicProcedure } from "@server/api/trpc";


export const userRouter = createTRPCRouter({

  getUser: publicProcedure
    .input(z.object({ email: z.string() }))
    .query(async ({ ctx, input }) => {
      return  ctx.db.user.findFirst({
        where: {
          AND: [
            { email: input.email },
            { UserAttribute: { is: { UserType: 'Provider' } }}
          ],
        },
        include: {
          UserAttribute: {
            include: {
              Provider: {
                include: {
                  ProviderOrganization: {
                    include: {
                      Organization: true
                    }
                  }
                }
              }
            }
          }
        }
      })
    }),
});
