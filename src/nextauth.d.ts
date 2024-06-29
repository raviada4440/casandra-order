import type { DefaultSession } from "next-auth"


interface ISession extends DefaultSession {
  patientId?: string
  authType?: string
  authProvider?: string
  entryPoint?: string
  accessToken?: string
}

declare module "next-auth" {
  interface Session extends ISession {
    patientId?: string
    authType?: string
    authProvider?: string
    entryPoint?: string
    accessToken?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT extends ISession {}
}
