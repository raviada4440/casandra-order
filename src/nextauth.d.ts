import type { DefaultSession } from "next-auth";


interface ISession extends DefaultSession {
  patientId?: string;
}

declare module "next-auth" {
  interface Session extends ISession {
    patientId?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends ISession {}
}
