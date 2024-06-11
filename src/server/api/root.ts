import { createTRPCRouter } from "@server/api/trpc";
import { testCatalogRouter } from "./routers/testcatalog";
import { loincRouter } from "./routers/loinc";
import { cptRouter } from "./routers/cpt";
import { biomarkerRouter } from "./routers/biomarker";
import { userRouter } from "./routers/user";
import { labOrderRouter } from "./routers/laborder";
import { fhirRouter } from "./routers/fhir";
import { directoryRouter } from "./routers/directory";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  testcatalog: testCatalogRouter,
  loinc: loincRouter,
  cpt: cptRouter,
  biomarker: biomarkerRouter,
  laborders: labOrderRouter,
  user: userRouter,
  fhir: fhirRouter,
  directory: directoryRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
