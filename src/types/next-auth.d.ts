// import type { DefaultSession } from "next-auth";

import type { DefaultSession } from "next-auth";

import type {DefaultJWT} from "@auth/core/jwt"

import type { UserAttributePartialRelations, UserWithPartialRelations } from '~prisma/generated/zod'


declare module "next-auth" {

  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: UserWithPartialRelations & DefaultSession["user"]
  }

  interface User extends UserWithPartialRelations {}

  interface JWT {
    UserAttribute: UserAttributePartialRelations & DefaultJWT
  }

}
