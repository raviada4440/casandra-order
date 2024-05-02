import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const AccountScalarFieldEnumSchema = z.enum(['id','userId','type','provider','providerAccountId','refresh_token','access_token','expires_at','token_type','scope','id_token','session_state']);

export const BIOMARKERScalarFieldEnumSchema = z.enum(['HGNCId','HGNCStatus','HGNCApprovedSymbol','HGNCApprovedName']);

export const LOINCScalarFieldEnumSchema = z.enum(['Loinc_Num','COMPONENT','PROPERTY','TIME_ASPCT','SYSTEM','SCALE_TYP','METHOD_TYP','CLASS','VersionLastChanged','CHNG_TYPE','DefinitionDescription','STATUS','CONSUMER_NAME','CLASSTYPE','FORMULA','EXMPL_ANSWERS','SURVEY_QUEST_TEXT','SURVEY_QUEST_SRC','UNITSREQUIRED','RELATEDNAMES2','SHORTNAME','ORDER_OBS','HL7_FIELD_SUBFIELD_ID','EXTERNAL_COPYRIGHT_NOTICE','EXAMPLE_UNITS','LONG_COMMON_NAME','EXAMPLE_UCUM_UNITS','STATUS_REASON','STATUS_TEXT','CHANGE_REASON_PUBLIC','COMMON_TEST_RANK','COMMON_ORDER_RANK','HL7_ATTACHMENT_STRUCTURE','EXTERNAL_COPYRIGHT_LINK','PanelType','AskAtOrderEntry','AssociatedObservations','VersionFirstReleased','ValidHL7AttachmentRequest','DisplayName']);

export const LabScalarFieldEnumSchema = z.enum(['LabId','LabName','LabCode','Address','City','State','Zip']);

export const LoincComponentHierarchyScalarFieldEnumSchema = z.enum(['Id','ParentId','Level','Code','Sequence','CodeText','Component','Property','Timing','Scale','Method']);

export const LoincPanelHierarchyScalarFieldEnumSchema = z.enum(['Id','ParentId','Level','Code','Sequence','CodeText','Component','Property','Timing','Scale','Method']);

export const LoincUniveralLabOrdersScalarFieldEnumSchema = z.enum(['Loinc_Num','Long_Common_Name','ORDER_OBS']);

export const PostScalarFieldEnumSchema = z.enum(['id','name','createdAt','updatedAt']);

export const SessionScalarFieldEnumSchema = z.enum(['id','sessionToken','userId','expires']);

export const TestBiomarkerScalarFieldEnumSchema = z.enum(['Id','TestId','LabTestId','HGNCId','CreatedAt','UpdatedAt']);

export const TestCatalogScalarFieldEnumSchema = z.enum(['TestId','LabId','href','CasandraTestId','LabTestId','TestName','AlternativeName','AlternativeName1','AlternativeName2','AlternativeName3','AlternativeName4','AlternativeName5','TestIncludes','SpecimenType','SpecialInstructions','Methodology','TestDescription','Diseases','Probes','ClinicalSignificance','SpecimenRequirements','Volume','MinimumVolume','Container','Collection','StabilityRequirements','StorageTransportation','PatientPreparation','CausesForRejection','TestUsage','TestLimitations','CPTCodes','NewYorkApproved','LevelOfService','TurnAroundTime','AssayCategory','ReferenceRanges','SetupSchedule','AlternativeSpecimen','LoincCodesText','LoincCodesHTML','CreatedAt','UpdatedAt']);

export const TestCptCodeScalarFieldEnumSchema = z.enum(['Id','TestId','LabTestId','CptCode','Modifier','Comments','CreatedAt','UpdatedAt']);

export const TestOrderLoincScalarFieldEnumSchema = z.enum(['Id','TestId','LabTestId','OrderLoinc','CreatedAt','UpdatedAt']);

export const TestResultLoincScalarFieldEnumSchema = z.enum(['Id','TestId','LabTestId','ResultCode','ResultCodeName','UofM','ResultLoinc','CreatedAt','UpdatedAt']);

export const UserScalarFieldEnumSchema = z.enum(['id','name','email','password','emailVerified','image']);

export const VerificationTokenScalarFieldEnumSchema = z.enum(['identifier','token','expires']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const NullsOrderSchema = z.enum(['first','last']);

export const AccountOrderByRelevanceFieldEnumSchema = z.enum(['id','userId','type','provider','providerAccountId','refresh_token','access_token','token_type','scope','id_token','session_state']);

export const BIOMARKEROrderByRelevanceFieldEnumSchema = z.enum(['HGNCId','HGNCStatus','HGNCApprovedSymbol','HGNCApprovedName']);

export const LOINCOrderByRelevanceFieldEnumSchema = z.enum(['Loinc_Num','COMPONENT','PROPERTY','TIME_ASPCT','SYSTEM','SCALE_TYP','METHOD_TYP','CLASS','VersionLastChanged','CHNG_TYPE','DefinitionDescription','STATUS','CONSUMER_NAME','FORMULA','EXMPL_ANSWERS','SURVEY_QUEST_TEXT','SURVEY_QUEST_SRC','UNITSREQUIRED','RELATEDNAMES2','SHORTNAME','ORDER_OBS','HL7_FIELD_SUBFIELD_ID','EXTERNAL_COPYRIGHT_NOTICE','EXAMPLE_UNITS','LONG_COMMON_NAME','EXAMPLE_UCUM_UNITS','STATUS_REASON','STATUS_TEXT','CHANGE_REASON_PUBLIC','HL7_ATTACHMENT_STRUCTURE','EXTERNAL_COPYRIGHT_LINK','PanelType','AskAtOrderEntry','AssociatedObservations','VersionFirstReleased','ValidHL7AttachmentRequest','DisplayName']);

export const LabOrderByRelevanceFieldEnumSchema = z.enum(['LabName','LabCode','Address','City','State','Zip']);

export const LoincComponentHierarchyOrderByRelevanceFieldEnumSchema = z.enum(['Code','Sequence','CodeText','Component','Property','Timing','Scale','Method']);

export const LoincPanelHierarchyOrderByRelevanceFieldEnumSchema = z.enum(['Code','Sequence','CodeText','Component','Property','Timing','Scale','Method']);

export const LoincUniveralLabOrdersOrderByRelevanceFieldEnumSchema = z.enum(['Loinc_Num','Long_Common_Name','ORDER_OBS']);

export const PostOrderByRelevanceFieldEnumSchema = z.enum(['name']);

export const SessionOrderByRelevanceFieldEnumSchema = z.enum(['id','sessionToken','userId']);

export const TestBiomarkerOrderByRelevanceFieldEnumSchema = z.enum(['LabTestId','HGNCId']);

export const TestCatalogOrderByRelevanceFieldEnumSchema = z.enum(['href','CasandraTestId','LabTestId','TestName','AlternativeName','AlternativeName1','AlternativeName2','AlternativeName3','AlternativeName4','AlternativeName5','TestIncludes','SpecimenType','SpecialInstructions','Methodology','TestDescription','Diseases','Probes','ClinicalSignificance','SpecimenRequirements','Volume','MinimumVolume','Container','Collection','StabilityRequirements','StorageTransportation','PatientPreparation','CausesForRejection','TestUsage','TestLimitations','CPTCodes','NewYorkApproved','LevelOfService','TurnAroundTime','AssayCategory','ReferenceRanges','SetupSchedule','AlternativeSpecimen','LoincCodesText','LoincCodesHTML']);

export const TestCptCodeOrderByRelevanceFieldEnumSchema = z.enum(['LabTestId','CptCode','Modifier','Comments']);

export const TestOrderLoincOrderByRelevanceFieldEnumSchema = z.enum(['LabTestId','OrderLoinc']);

export const TestResultLoincOrderByRelevanceFieldEnumSchema = z.enum(['LabTestId','ResultCode','ResultCodeName','UofM','ResultLoinc']);

export const UserOrderByRelevanceFieldEnumSchema = z.enum(['id','name','email','password','image']);

export const VerificationTokenOrderByRelevanceFieldEnumSchema = z.enum(['identifier','token']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// ACCOUNT SCHEMA
/////////////////////////////////////////

export const AccountSchema = z.object({
  id: z.string(),
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().nullable(),
  access_token: z.string().nullable(),
  expires_at: z.number().nullable(),
  token_type: z.string().nullable(),
  scope: z.string().nullable(),
  id_token: z.string().nullable(),
  session_state: z.string().nullable(),
})

export type Account = z.infer<typeof AccountSchema>

/////////////////////////////////////////
// ACCOUNT PARTIAL SCHEMA
/////////////////////////////////////////

export const AccountPartialSchema = AccountSchema.partial()

export type AccountPartial = z.infer<typeof AccountPartialSchema>

// ACCOUNT RELATION SCHEMA
//------------------------------------------------------

export type AccountRelations = {
  User: UserWithRelations;
};

export type AccountWithRelations = z.infer<typeof AccountSchema> & AccountRelations

export const AccountWithRelationsSchema: z.ZodType<AccountWithRelations> = AccountSchema.merge(z.object({
  User: z.lazy(() => UserWithRelationsSchema),
}))

// ACCOUNT PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type AccountPartialRelations = {
  User?: UserPartialWithRelations;
};

export type AccountPartialWithRelations = z.infer<typeof AccountPartialSchema> & AccountPartialRelations

export const AccountPartialWithRelationsSchema: z.ZodType<AccountPartialWithRelations> = AccountPartialSchema.merge(z.object({
  User: z.lazy(() => UserPartialWithRelationsSchema),
})).partial()

export type AccountWithPartialRelations = z.infer<typeof AccountSchema> & AccountPartialRelations

export const AccountWithPartialRelationsSchema: z.ZodType<AccountWithPartialRelations> = AccountSchema.merge(z.object({
  User: z.lazy(() => UserPartialWithRelationsSchema),
}).partial())

/////////////////////////////////////////
// BIOMARKER SCHEMA
/////////////////////////////////////////

export const BIOMARKERSchema = z.object({
  HGNCId: z.string(),
  HGNCStatus: z.string().nullable(),
  HGNCApprovedSymbol: z.string().nullable(),
  HGNCApprovedName: z.string().nullable(),
})

export type BIOMARKER = z.infer<typeof BIOMARKERSchema>

/////////////////////////////////////////
// BIOMARKER PARTIAL SCHEMA
/////////////////////////////////////////

export const BIOMARKERPartialSchema = BIOMARKERSchema.partial()

export type BIOMARKERPartial = z.infer<typeof BIOMARKERPartialSchema>

// BIOMARKER RELATION SCHEMA
//------------------------------------------------------

export type BIOMARKERRelations = {
  TestBiomarker: TestBiomarkerWithRelations[];
};

export type BIOMARKERWithRelations = z.infer<typeof BIOMARKERSchema> & BIOMARKERRelations

export const BIOMARKERWithRelationsSchema: z.ZodType<BIOMARKERWithRelations> = BIOMARKERSchema.merge(z.object({
  TestBiomarker: z.lazy(() => TestBiomarkerWithRelationsSchema).array(),
}))

// BIOMARKER PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type BIOMARKERPartialRelations = {
  TestBiomarker?: TestBiomarkerPartialWithRelations[];
};

export type BIOMARKERPartialWithRelations = z.infer<typeof BIOMARKERPartialSchema> & BIOMARKERPartialRelations

export const BIOMARKERPartialWithRelationsSchema: z.ZodType<BIOMARKERPartialWithRelations> = BIOMARKERPartialSchema.merge(z.object({
  TestBiomarker: z.lazy(() => TestBiomarkerPartialWithRelationsSchema).array(),
})).partial()

export type BIOMARKERWithPartialRelations = z.infer<typeof BIOMARKERSchema> & BIOMARKERPartialRelations

export const BIOMARKERWithPartialRelationsSchema: z.ZodType<BIOMARKERWithPartialRelations> = BIOMARKERSchema.merge(z.object({
  TestBiomarker: z.lazy(() => TestBiomarkerPartialWithRelationsSchema).array(),
}).partial())

/////////////////////////////////////////
// LOINC SCHEMA
/////////////////////////////////////////

export const LOINCSchema = z.object({
  Loinc_Num: z.string(),
  COMPONENT: z.string().nullable(),
  PROPERTY: z.string().nullable(),
  TIME_ASPCT: z.string().nullable(),
  SYSTEM: z.string().nullable(),
  SCALE_TYP: z.string().nullable(),
  METHOD_TYP: z.string().nullable(),
  CLASS: z.string().nullable(),
  VersionLastChanged: z.string().nullable(),
  CHNG_TYPE: z.string().nullable(),
  DefinitionDescription: z.string().nullable(),
  STATUS: z.string().nullable(),
  CONSUMER_NAME: z.string().nullable(),
  CLASSTYPE: z.number().nullable(),
  FORMULA: z.string().nullable(),
  EXMPL_ANSWERS: z.string().nullable(),
  SURVEY_QUEST_TEXT: z.string().nullable(),
  SURVEY_QUEST_SRC: z.string().nullable(),
  UNITSREQUIRED: z.string().nullable(),
  RELATEDNAMES2: z.string().nullable(),
  SHORTNAME: z.string().nullable(),
  ORDER_OBS: z.string().nullable(),
  HL7_FIELD_SUBFIELD_ID: z.string().nullable(),
  EXTERNAL_COPYRIGHT_NOTICE: z.string().nullable(),
  EXAMPLE_UNITS: z.string().nullable(),
  LONG_COMMON_NAME: z.string().nullable(),
  EXAMPLE_UCUM_UNITS: z.string().nullable(),
  STATUS_REASON: z.string().nullable(),
  STATUS_TEXT: z.string().nullable(),
  CHANGE_REASON_PUBLIC: z.string().nullable(),
  COMMON_TEST_RANK: z.number().nullable(),
  COMMON_ORDER_RANK: z.number().nullable(),
  HL7_ATTACHMENT_STRUCTURE: z.string().nullable(),
  EXTERNAL_COPYRIGHT_LINK: z.string().nullable(),
  PanelType: z.string().nullable(),
  AskAtOrderEntry: z.string().nullable(),
  AssociatedObservations: z.string().nullable(),
  VersionFirstReleased: z.string().nullable(),
  ValidHL7AttachmentRequest: z.string().nullable(),
  DisplayName: z.string().nullable(),
})

export type LOINC = z.infer<typeof LOINCSchema>

/////////////////////////////////////////
// LOINC PARTIAL SCHEMA
/////////////////////////////////////////

export const LOINCPartialSchema = LOINCSchema.partial()

export type LOINCPartial = z.infer<typeof LOINCPartialSchema>

// LOINC RELATION SCHEMA
//------------------------------------------------------

export type LOINCRelations = {
  TestOrderLoinc: TestOrderLoincWithRelations[];
  TestResultLoinc: TestResultLoincWithRelations[];
};

export type LOINCWithRelations = z.infer<typeof LOINCSchema> & LOINCRelations

export const LOINCWithRelationsSchema: z.ZodType<LOINCWithRelations> = LOINCSchema.merge(z.object({
  TestOrderLoinc: z.lazy(() => TestOrderLoincWithRelationsSchema).array(),
  TestResultLoinc: z.lazy(() => TestResultLoincWithRelationsSchema).array(),
}))

// LOINC PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type LOINCPartialRelations = {
  TestOrderLoinc?: TestOrderLoincPartialWithRelations[];
  TestResultLoinc?: TestResultLoincPartialWithRelations[];
};

export type LOINCPartialWithRelations = z.infer<typeof LOINCPartialSchema> & LOINCPartialRelations

export const LOINCPartialWithRelationsSchema: z.ZodType<LOINCPartialWithRelations> = LOINCPartialSchema.merge(z.object({
  TestOrderLoinc: z.lazy(() => TestOrderLoincPartialWithRelationsSchema).array(),
  TestResultLoinc: z.lazy(() => TestResultLoincPartialWithRelationsSchema).array(),
})).partial()

export type LOINCWithPartialRelations = z.infer<typeof LOINCSchema> & LOINCPartialRelations

export const LOINCWithPartialRelationsSchema: z.ZodType<LOINCWithPartialRelations> = LOINCSchema.merge(z.object({
  TestOrderLoinc: z.lazy(() => TestOrderLoincPartialWithRelationsSchema).array(),
  TestResultLoinc: z.lazy(() => TestResultLoincPartialWithRelationsSchema).array(),
}).partial())

/////////////////////////////////////////
// LAB SCHEMA
/////////////////////////////////////////

export const LabSchema = z.object({
  LabId: z.number(),
  LabName: z.string().nullable(),
  LabCode: z.string().nullable(),
  Address: z.string().nullable(),
  City: z.string().nullable(),
  State: z.string().nullable(),
  Zip: z.string().nullable(),
})

export type Lab = z.infer<typeof LabSchema>

/////////////////////////////////////////
// LAB PARTIAL SCHEMA
/////////////////////////////////////////

export const LabPartialSchema = LabSchema.partial()

export type LabPartial = z.infer<typeof LabPartialSchema>

// LAB RELATION SCHEMA
//------------------------------------------------------

export type LabRelations = {
  TestCatalog: TestCatalogWithRelations[];
};

export type LabWithRelations = z.infer<typeof LabSchema> & LabRelations

export const LabWithRelationsSchema: z.ZodType<LabWithRelations> = LabSchema.merge(z.object({
  TestCatalog: z.lazy(() => TestCatalogWithRelationsSchema).array(),
}))

// LAB PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type LabPartialRelations = {
  TestCatalog?: TestCatalogPartialWithRelations[];
};

export type LabPartialWithRelations = z.infer<typeof LabPartialSchema> & LabPartialRelations

export const LabPartialWithRelationsSchema: z.ZodType<LabPartialWithRelations> = LabPartialSchema.merge(z.object({
  TestCatalog: z.lazy(() => TestCatalogPartialWithRelationsSchema).array(),
})).partial()

export type LabWithPartialRelations = z.infer<typeof LabSchema> & LabPartialRelations

export const LabWithPartialRelationsSchema: z.ZodType<LabWithPartialRelations> = LabSchema.merge(z.object({
  TestCatalog: z.lazy(() => TestCatalogPartialWithRelationsSchema).array(),
}).partial())

/////////////////////////////////////////
// LOINC COMPONENT HIERARCHY SCHEMA
/////////////////////////////////////////

export const LoincComponentHierarchySchema = z.object({
  Id: z.bigint(),
  ParentId: z.bigint(),
  Level: z.number(),
  Code: z.string(),
  Sequence: z.string(),
  CodeText: z.string(),
  Component: z.string(),
  Property: z.string(),
  Timing: z.string(),
  Scale: z.string(),
  Method: z.string(),
})

export type LoincComponentHierarchy = z.infer<typeof LoincComponentHierarchySchema>

/////////////////////////////////////////
// LOINC COMPONENT HIERARCHY PARTIAL SCHEMA
/////////////////////////////////////////

export const LoincComponentHierarchyPartialSchema = LoincComponentHierarchySchema.partial()

export type LoincComponentHierarchyPartial = z.infer<typeof LoincComponentHierarchyPartialSchema>

/////////////////////////////////////////
// LOINC PANEL HIERARCHY SCHEMA
/////////////////////////////////////////

export const LoincPanelHierarchySchema = z.object({
  Id: z.number(),
  ParentId: z.number(),
  Level: z.number(),
  Code: z.string(),
  Sequence: z.string(),
  CodeText: z.string(),
  Component: z.string(),
  Property: z.string(),
  Timing: z.string(),
  Scale: z.string(),
  Method: z.string(),
})

export type LoincPanelHierarchy = z.infer<typeof LoincPanelHierarchySchema>

/////////////////////////////////////////
// LOINC PANEL HIERARCHY PARTIAL SCHEMA
/////////////////////////////////////////

export const LoincPanelHierarchyPartialSchema = LoincPanelHierarchySchema.partial()

export type LoincPanelHierarchyPartial = z.infer<typeof LoincPanelHierarchyPartialSchema>

/////////////////////////////////////////
// LOINC UNIVERAL LAB ORDERS SCHEMA
/////////////////////////////////////////

export const LoincUniveralLabOrdersSchema = z.object({
  Loinc_Num: z.string(),
  Long_Common_Name: z.string().nullable(),
  ORDER_OBS: z.string().nullable(),
})

export type LoincUniveralLabOrders = z.infer<typeof LoincUniveralLabOrdersSchema>

/////////////////////////////////////////
// LOINC UNIVERAL LAB ORDERS PARTIAL SCHEMA
/////////////////////////////////////////

export const LoincUniveralLabOrdersPartialSchema = LoincUniveralLabOrdersSchema.partial()

export type LoincUniveralLabOrdersPartial = z.infer<typeof LoincUniveralLabOrdersPartialSchema>

/////////////////////////////////////////
// POST SCHEMA
/////////////////////////////////////////

export const PostSchema = z.object({
  id: z.number(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Post = z.infer<typeof PostSchema>

/////////////////////////////////////////
// POST PARTIAL SCHEMA
/////////////////////////////////////////

export const PostPartialSchema = PostSchema.partial()

export type PostPartial = z.infer<typeof PostPartialSchema>

/////////////////////////////////////////
// SESSION SCHEMA
/////////////////////////////////////////

export const SessionSchema = z.object({
  id: z.string(),
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.date(),
})

export type Session = z.infer<typeof SessionSchema>

/////////////////////////////////////////
// SESSION PARTIAL SCHEMA
/////////////////////////////////////////

export const SessionPartialSchema = SessionSchema.partial()

export type SessionPartial = z.infer<typeof SessionPartialSchema>

// SESSION RELATION SCHEMA
//------------------------------------------------------

export type SessionRelations = {
  User: UserWithRelations;
};

export type SessionWithRelations = z.infer<typeof SessionSchema> & SessionRelations

export const SessionWithRelationsSchema: z.ZodType<SessionWithRelations> = SessionSchema.merge(z.object({
  User: z.lazy(() => UserWithRelationsSchema),
}))

// SESSION PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type SessionPartialRelations = {
  User?: UserPartialWithRelations;
};

export type SessionPartialWithRelations = z.infer<typeof SessionPartialSchema> & SessionPartialRelations

export const SessionPartialWithRelationsSchema: z.ZodType<SessionPartialWithRelations> = SessionPartialSchema.merge(z.object({
  User: z.lazy(() => UserPartialWithRelationsSchema),
})).partial()

export type SessionWithPartialRelations = z.infer<typeof SessionSchema> & SessionPartialRelations

export const SessionWithPartialRelationsSchema: z.ZodType<SessionWithPartialRelations> = SessionSchema.merge(z.object({
  User: z.lazy(() => UserPartialWithRelationsSchema),
}).partial())

/////////////////////////////////////////
// TEST BIOMARKER SCHEMA
/////////////////////////////////////////

export const TestBiomarkerSchema = z.object({
  Id: z.number(),
  TestId: z.number(),
  LabTestId: z.string().nullable(),
  HGNCId: z.string(),
  CreatedAt: z.date(),
  UpdatedAt: z.date(),
})

export type TestBiomarker = z.infer<typeof TestBiomarkerSchema>

/////////////////////////////////////////
// TEST BIOMARKER PARTIAL SCHEMA
/////////////////////////////////////////

export const TestBiomarkerPartialSchema = TestBiomarkerSchema.partial()

export type TestBiomarkerPartial = z.infer<typeof TestBiomarkerPartialSchema>

// TEST BIOMARKER RELATION SCHEMA
//------------------------------------------------------

export type TestBiomarkerRelations = {
  BIOMARKER: BIOMARKERWithRelations;
  TestCatalog: TestCatalogWithRelations;
};

export type TestBiomarkerWithRelations = z.infer<typeof TestBiomarkerSchema> & TestBiomarkerRelations

export const TestBiomarkerWithRelationsSchema: z.ZodType<TestBiomarkerWithRelations> = TestBiomarkerSchema.merge(z.object({
  BIOMARKER: z.lazy(() => BIOMARKERWithRelationsSchema),
  TestCatalog: z.lazy(() => TestCatalogWithRelationsSchema),
}))

// TEST BIOMARKER PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type TestBiomarkerPartialRelations = {
  BIOMARKER?: BIOMARKERPartialWithRelations;
  TestCatalog?: TestCatalogPartialWithRelations;
};

export type TestBiomarkerPartialWithRelations = z.infer<typeof TestBiomarkerPartialSchema> & TestBiomarkerPartialRelations

export const TestBiomarkerPartialWithRelationsSchema: z.ZodType<TestBiomarkerPartialWithRelations> = TestBiomarkerPartialSchema.merge(z.object({
  BIOMARKER: z.lazy(() => BIOMARKERPartialWithRelationsSchema),
  TestCatalog: z.lazy(() => TestCatalogPartialWithRelationsSchema),
})).partial()

export type TestBiomarkerWithPartialRelations = z.infer<typeof TestBiomarkerSchema> & TestBiomarkerPartialRelations

export const TestBiomarkerWithPartialRelationsSchema: z.ZodType<TestBiomarkerWithPartialRelations> = TestBiomarkerSchema.merge(z.object({
  BIOMARKER: z.lazy(() => BIOMARKERPartialWithRelationsSchema),
  TestCatalog: z.lazy(() => TestCatalogPartialWithRelationsSchema),
}).partial())

/////////////////////////////////////////
// TEST CATALOG SCHEMA
/////////////////////////////////////////

export const TestCatalogSchema = z.object({
  TestId: z.number(),
  LabId: z.number().nullable(),
  href: z.string().nullable(),
  CasandraTestId: z.string(),
  LabTestId: z.string().nullable(),
  TestName: z.string().nullable(),
  AlternativeName: z.string().nullable(),
  AlternativeName1: z.string().nullable(),
  AlternativeName2: z.string().nullable(),
  AlternativeName3: z.string().nullable(),
  AlternativeName4: z.string().nullable(),
  AlternativeName5: z.string().nullable(),
  TestIncludes: z.string().nullable(),
  SpecimenType: z.string().nullable(),
  SpecialInstructions: z.string().nullable(),
  Methodology: z.string().nullable(),
  TestDescription: z.string().nullable(),
  Diseases: z.string().nullable(),
  Probes: z.string().nullable(),
  ClinicalSignificance: z.string().nullable(),
  SpecimenRequirements: z.string().nullable(),
  Volume: z.string().nullable(),
  MinimumVolume: z.string().nullable(),
  Container: z.string().nullable(),
  Collection: z.string().nullable(),
  StabilityRequirements: z.string().nullable(),
  StorageTransportation: z.string().nullable(),
  PatientPreparation: z.string().nullable(),
  CausesForRejection: z.string().nullable(),
  TestUsage: z.string().nullable(),
  TestLimitations: z.string().nullable(),
  CPTCodes: z.string().nullable(),
  NewYorkApproved: z.string().nullable(),
  LevelOfService: z.string().nullable(),
  TurnAroundTime: z.string().nullable(),
  AssayCategory: z.string().nullable(),
  ReferenceRanges: z.string().nullable(),
  SetupSchedule: z.string().nullable(),
  AlternativeSpecimen: z.string().nullable(),
  LoincCodesText: z.string().nullable(),
  LoincCodesHTML: z.string().nullable(),
  CreatedAt: z.date(),
  UpdatedAt: z.date(),
})

export type TestCatalog = z.infer<typeof TestCatalogSchema>

/////////////////////////////////////////
// TEST CATALOG PARTIAL SCHEMA
/////////////////////////////////////////

export const TestCatalogPartialSchema = TestCatalogSchema.partial()

export type TestCatalogPartial = z.infer<typeof TestCatalogPartialSchema>

// TEST CATALOG RELATION SCHEMA
//------------------------------------------------------

export type TestCatalogRelations = {
  TestBiomarker: TestBiomarkerWithRelations[];
  Lab?: LabWithRelations | null;
  TestCptCode: TestCptCodeWithRelations[];
  TestOrderLoinc: TestOrderLoincWithRelations[];
  TestResultLoinc: TestResultLoincWithRelations[];
};

export type TestCatalogWithRelations = z.infer<typeof TestCatalogSchema> & TestCatalogRelations

export const TestCatalogWithRelationsSchema: z.ZodType<TestCatalogWithRelations> = TestCatalogSchema.merge(z.object({
  TestBiomarker: z.lazy(() => TestBiomarkerWithRelationsSchema).array(),
  Lab: z.lazy(() => LabWithRelationsSchema).nullable(),
  TestCptCode: z.lazy(() => TestCptCodeWithRelationsSchema).array(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincWithRelationsSchema).array(),
  TestResultLoinc: z.lazy(() => TestResultLoincWithRelationsSchema).array(),
}))

// TEST CATALOG PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type TestCatalogPartialRelations = {
  TestBiomarker?: TestBiomarkerPartialWithRelations[];
  Lab?: LabPartialWithRelations | null;
  TestCptCode?: TestCptCodePartialWithRelations[];
  TestOrderLoinc?: TestOrderLoincPartialWithRelations[];
  TestResultLoinc?: TestResultLoincPartialWithRelations[];
};

export type TestCatalogPartialWithRelations = z.infer<typeof TestCatalogPartialSchema> & TestCatalogPartialRelations

export const TestCatalogPartialWithRelationsSchema: z.ZodType<TestCatalogPartialWithRelations> = TestCatalogPartialSchema.merge(z.object({
  TestBiomarker: z.lazy(() => TestBiomarkerPartialWithRelationsSchema).array(),
  Lab: z.lazy(() => LabPartialWithRelationsSchema).nullable(),
  TestCptCode: z.lazy(() => TestCptCodePartialWithRelationsSchema).array(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincPartialWithRelationsSchema).array(),
  TestResultLoinc: z.lazy(() => TestResultLoincPartialWithRelationsSchema).array(),
})).partial()

export type TestCatalogWithPartialRelations = z.infer<typeof TestCatalogSchema> & TestCatalogPartialRelations

export const TestCatalogWithPartialRelationsSchema: z.ZodType<TestCatalogWithPartialRelations> = TestCatalogSchema.merge(z.object({
  TestBiomarker: z.lazy(() => TestBiomarkerPartialWithRelationsSchema).array(),
  Lab: z.lazy(() => LabPartialWithRelationsSchema).nullable(),
  TestCptCode: z.lazy(() => TestCptCodePartialWithRelationsSchema).array(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincPartialWithRelationsSchema).array(),
  TestResultLoinc: z.lazy(() => TestResultLoincPartialWithRelationsSchema).array(),
}).partial())

/////////////////////////////////////////
// TEST CPT CODE SCHEMA
/////////////////////////////////////////

export const TestCptCodeSchema = z.object({
  Id: z.number(),
  TestId: z.number(),
  LabTestId: z.string().nullable(),
  CptCode: z.string().nullable(),
  Modifier: z.string().nullable(),
  Comments: z.string().nullable(),
  CreatedAt: z.date(),
  UpdatedAt: z.date(),
})

export type TestCptCode = z.infer<typeof TestCptCodeSchema>

/////////////////////////////////////////
// TEST CPT CODE PARTIAL SCHEMA
/////////////////////////////////////////

export const TestCptCodePartialSchema = TestCptCodeSchema.partial()

export type TestCptCodePartial = z.infer<typeof TestCptCodePartialSchema>

// TEST CPT CODE RELATION SCHEMA
//------------------------------------------------------

export type TestCptCodeRelations = {
  TestCatalog: TestCatalogWithRelations;
};

export type TestCptCodeWithRelations = z.infer<typeof TestCptCodeSchema> & TestCptCodeRelations

export const TestCptCodeWithRelationsSchema: z.ZodType<TestCptCodeWithRelations> = TestCptCodeSchema.merge(z.object({
  TestCatalog: z.lazy(() => TestCatalogWithRelationsSchema),
}))

// TEST CPT CODE PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type TestCptCodePartialRelations = {
  TestCatalog?: TestCatalogPartialWithRelations;
};

export type TestCptCodePartialWithRelations = z.infer<typeof TestCptCodePartialSchema> & TestCptCodePartialRelations

export const TestCptCodePartialWithRelationsSchema: z.ZodType<TestCptCodePartialWithRelations> = TestCptCodePartialSchema.merge(z.object({
  TestCatalog: z.lazy(() => TestCatalogPartialWithRelationsSchema),
})).partial()

export type TestCptCodeWithPartialRelations = z.infer<typeof TestCptCodeSchema> & TestCptCodePartialRelations

export const TestCptCodeWithPartialRelationsSchema: z.ZodType<TestCptCodeWithPartialRelations> = TestCptCodeSchema.merge(z.object({
  TestCatalog: z.lazy(() => TestCatalogPartialWithRelationsSchema),
}).partial())

/////////////////////////////////////////
// TEST ORDER LOINC SCHEMA
/////////////////////////////////////////

export const TestOrderLoincSchema = z.object({
  Id: z.number(),
  TestId: z.number(),
  LabTestId: z.string().nullable(),
  OrderLoinc: z.string().nullable(),
  CreatedAt: z.date(),
  UpdatedAt: z.date(),
})

export type TestOrderLoinc = z.infer<typeof TestOrderLoincSchema>

/////////////////////////////////////////
// TEST ORDER LOINC PARTIAL SCHEMA
/////////////////////////////////////////

export const TestOrderLoincPartialSchema = TestOrderLoincSchema.partial()

export type TestOrderLoincPartial = z.infer<typeof TestOrderLoincPartialSchema>

// TEST ORDER LOINC RELATION SCHEMA
//------------------------------------------------------

export type TestOrderLoincRelations = {
  LOINC?: LOINCWithRelations | null;
  TestCatalog: TestCatalogWithRelations;
};

export type TestOrderLoincWithRelations = z.infer<typeof TestOrderLoincSchema> & TestOrderLoincRelations

export const TestOrderLoincWithRelationsSchema: z.ZodType<TestOrderLoincWithRelations> = TestOrderLoincSchema.merge(z.object({
  LOINC: z.lazy(() => LOINCWithRelationsSchema).nullable(),
  TestCatalog: z.lazy(() => TestCatalogWithRelationsSchema),
}))

// TEST ORDER LOINC PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type TestOrderLoincPartialRelations = {
  LOINC?: LOINCPartialWithRelations | null;
  TestCatalog?: TestCatalogPartialWithRelations;
};

export type TestOrderLoincPartialWithRelations = z.infer<typeof TestOrderLoincPartialSchema> & TestOrderLoincPartialRelations

export const TestOrderLoincPartialWithRelationsSchema: z.ZodType<TestOrderLoincPartialWithRelations> = TestOrderLoincPartialSchema.merge(z.object({
  LOINC: z.lazy(() => LOINCPartialWithRelationsSchema).nullable(),
  TestCatalog: z.lazy(() => TestCatalogPartialWithRelationsSchema),
})).partial()

export type TestOrderLoincWithPartialRelations = z.infer<typeof TestOrderLoincSchema> & TestOrderLoincPartialRelations

export const TestOrderLoincWithPartialRelationsSchema: z.ZodType<TestOrderLoincWithPartialRelations> = TestOrderLoincSchema.merge(z.object({
  LOINC: z.lazy(() => LOINCPartialWithRelationsSchema).nullable(),
  TestCatalog: z.lazy(() => TestCatalogPartialWithRelationsSchema),
}).partial())

/////////////////////////////////////////
// TEST RESULT LOINC SCHEMA
/////////////////////////////////////////

export const TestResultLoincSchema = z.object({
  Id: z.number(),
  TestId: z.number(),
  LabTestId: z.string().nullable(),
  ResultCode: z.string().nullable(),
  ResultCodeName: z.string().nullable(),
  UofM: z.string().nullable(),
  ResultLoinc: z.string().nullable(),
  CreatedAt: z.date(),
  UpdatedAt: z.date(),
})

export type TestResultLoinc = z.infer<typeof TestResultLoincSchema>

/////////////////////////////////////////
// TEST RESULT LOINC PARTIAL SCHEMA
/////////////////////////////////////////

export const TestResultLoincPartialSchema = TestResultLoincSchema.partial()

export type TestResultLoincPartial = z.infer<typeof TestResultLoincPartialSchema>

// TEST RESULT LOINC RELATION SCHEMA
//------------------------------------------------------

export type TestResultLoincRelations = {
  LOINC?: LOINCWithRelations | null;
  TestCatalog: TestCatalogWithRelations;
};

export type TestResultLoincWithRelations = z.infer<typeof TestResultLoincSchema> & TestResultLoincRelations

export const TestResultLoincWithRelationsSchema: z.ZodType<TestResultLoincWithRelations> = TestResultLoincSchema.merge(z.object({
  LOINC: z.lazy(() => LOINCWithRelationsSchema).nullable(),
  TestCatalog: z.lazy(() => TestCatalogWithRelationsSchema),
}))

// TEST RESULT LOINC PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type TestResultLoincPartialRelations = {
  LOINC?: LOINCPartialWithRelations | null;
  TestCatalog?: TestCatalogPartialWithRelations;
};

export type TestResultLoincPartialWithRelations = z.infer<typeof TestResultLoincPartialSchema> & TestResultLoincPartialRelations

export const TestResultLoincPartialWithRelationsSchema: z.ZodType<TestResultLoincPartialWithRelations> = TestResultLoincPartialSchema.merge(z.object({
  LOINC: z.lazy(() => LOINCPartialWithRelationsSchema).nullable(),
  TestCatalog: z.lazy(() => TestCatalogPartialWithRelationsSchema),
})).partial()

export type TestResultLoincWithPartialRelations = z.infer<typeof TestResultLoincSchema> & TestResultLoincPartialRelations

export const TestResultLoincWithPartialRelationsSchema: z.ZodType<TestResultLoincWithPartialRelations> = TestResultLoincSchema.merge(z.object({
  LOINC: z.lazy(() => LOINCPartialWithRelationsSchema).nullable(),
  TestCatalog: z.lazy(() => TestCatalogPartialWithRelationsSchema),
}).partial())

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string(),
  name: z.string().nullable(),
  email: z.string(),
  password: z.string(),
  emailVerified: z.date().nullable(),
  image: z.string().nullable(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// USER PARTIAL SCHEMA
/////////////////////////////////////////

export const UserPartialSchema = UserSchema.partial()

export type UserPartial = z.infer<typeof UserPartialSchema>

// USER RELATION SCHEMA
//------------------------------------------------------

export type UserRelations = {
  Account: AccountWithRelations[];
  Session: SessionWithRelations[];
};

export type UserWithRelations = z.infer<typeof UserSchema> & UserRelations

export const UserWithRelationsSchema: z.ZodType<UserWithRelations> = UserSchema.merge(z.object({
  Account: z.lazy(() => AccountWithRelationsSchema).array(),
  Session: z.lazy(() => SessionWithRelationsSchema).array(),
}))

// USER PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type UserPartialRelations = {
  Account?: AccountPartialWithRelations[];
  Session?: SessionPartialWithRelations[];
};

export type UserPartialWithRelations = z.infer<typeof UserPartialSchema> & UserPartialRelations

export const UserPartialWithRelationsSchema: z.ZodType<UserPartialWithRelations> = UserPartialSchema.merge(z.object({
  Account: z.lazy(() => AccountPartialWithRelationsSchema).array(),
  Session: z.lazy(() => SessionPartialWithRelationsSchema).array(),
})).partial()

export type UserWithPartialRelations = z.infer<typeof UserSchema> & UserPartialRelations

export const UserWithPartialRelationsSchema: z.ZodType<UserWithPartialRelations> = UserSchema.merge(z.object({
  Account: z.lazy(() => AccountPartialWithRelationsSchema).array(),
  Session: z.lazy(() => SessionPartialWithRelationsSchema).array(),
}).partial())

/////////////////////////////////////////
// VERIFICATION TOKEN SCHEMA
/////////////////////////////////////////

export const VerificationTokenSchema = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.date(),
})

export type VerificationToken = z.infer<typeof VerificationTokenSchema>

/////////////////////////////////////////
// VERIFICATION TOKEN PARTIAL SCHEMA
/////////////////////////////////////////

export const VerificationTokenPartialSchema = VerificationTokenSchema.partial()

export type VerificationTokenPartial = z.infer<typeof VerificationTokenPartialSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// ACCOUNT
//------------------------------------------------------

export const AccountIncludeSchema: z.ZodType<Prisma.AccountInclude> = z.object({
  User: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const AccountArgsSchema: z.ZodType<Prisma.AccountDefaultArgs> = z.object({
  select: z.lazy(() => AccountSelectSchema).optional(),
  include: z.lazy(() => AccountIncludeSchema).optional(),
}).strict();

export const AccountSelectSchema: z.ZodType<Prisma.AccountSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  type: z.boolean().optional(),
  provider: z.boolean().optional(),
  providerAccountId: z.boolean().optional(),
  refresh_token: z.boolean().optional(),
  access_token: z.boolean().optional(),
  expires_at: z.boolean().optional(),
  token_type: z.boolean().optional(),
  scope: z.boolean().optional(),
  id_token: z.boolean().optional(),
  session_state: z.boolean().optional(),
  User: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// BIOMARKER
//------------------------------------------------------

export const BIOMARKERIncludeSchema: z.ZodType<Prisma.BIOMARKERInclude> = z.object({
  TestBiomarker: z.union([z.boolean(),z.lazy(() => TestBiomarkerFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BIOMARKERCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const BIOMARKERArgsSchema: z.ZodType<Prisma.BIOMARKERDefaultArgs> = z.object({
  select: z.lazy(() => BIOMARKERSelectSchema).optional(),
  include: z.lazy(() => BIOMARKERIncludeSchema).optional(),
}).strict();

export const BIOMARKERCountOutputTypeArgsSchema: z.ZodType<Prisma.BIOMARKERCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => BIOMARKERCountOutputTypeSelectSchema).nullish(),
}).strict();

export const BIOMARKERCountOutputTypeSelectSchema: z.ZodType<Prisma.BIOMARKERCountOutputTypeSelect> = z.object({
  TestBiomarker: z.boolean().optional(),
}).strict();

export const BIOMARKERSelectSchema: z.ZodType<Prisma.BIOMARKERSelect> = z.object({
  HGNCId: z.boolean().optional(),
  HGNCStatus: z.boolean().optional(),
  HGNCApprovedSymbol: z.boolean().optional(),
  HGNCApprovedName: z.boolean().optional(),
  TestBiomarker: z.union([z.boolean(),z.lazy(() => TestBiomarkerFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BIOMARKERCountOutputTypeArgsSchema)]).optional(),
}).strict()

// LOINC
//------------------------------------------------------

export const LOINCIncludeSchema: z.ZodType<Prisma.LOINCInclude> = z.object({
  TestOrderLoinc: z.union([z.boolean(),z.lazy(() => TestOrderLoincFindManyArgsSchema)]).optional(),
  TestResultLoinc: z.union([z.boolean(),z.lazy(() => TestResultLoincFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => LOINCCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const LOINCArgsSchema: z.ZodType<Prisma.LOINCDefaultArgs> = z.object({
  select: z.lazy(() => LOINCSelectSchema).optional(),
  include: z.lazy(() => LOINCIncludeSchema).optional(),
}).strict();

export const LOINCCountOutputTypeArgsSchema: z.ZodType<Prisma.LOINCCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => LOINCCountOutputTypeSelectSchema).nullish(),
}).strict();

export const LOINCCountOutputTypeSelectSchema: z.ZodType<Prisma.LOINCCountOutputTypeSelect> = z.object({
  TestOrderLoinc: z.boolean().optional(),
  TestResultLoinc: z.boolean().optional(),
}).strict();

export const LOINCSelectSchema: z.ZodType<Prisma.LOINCSelect> = z.object({
  Loinc_Num: z.boolean().optional(),
  COMPONENT: z.boolean().optional(),
  PROPERTY: z.boolean().optional(),
  TIME_ASPCT: z.boolean().optional(),
  SYSTEM: z.boolean().optional(),
  SCALE_TYP: z.boolean().optional(),
  METHOD_TYP: z.boolean().optional(),
  CLASS: z.boolean().optional(),
  VersionLastChanged: z.boolean().optional(),
  CHNG_TYPE: z.boolean().optional(),
  DefinitionDescription: z.boolean().optional(),
  STATUS: z.boolean().optional(),
  CONSUMER_NAME: z.boolean().optional(),
  CLASSTYPE: z.boolean().optional(),
  FORMULA: z.boolean().optional(),
  EXMPL_ANSWERS: z.boolean().optional(),
  SURVEY_QUEST_TEXT: z.boolean().optional(),
  SURVEY_QUEST_SRC: z.boolean().optional(),
  UNITSREQUIRED: z.boolean().optional(),
  RELATEDNAMES2: z.boolean().optional(),
  SHORTNAME: z.boolean().optional(),
  ORDER_OBS: z.boolean().optional(),
  HL7_FIELD_SUBFIELD_ID: z.boolean().optional(),
  EXTERNAL_COPYRIGHT_NOTICE: z.boolean().optional(),
  EXAMPLE_UNITS: z.boolean().optional(),
  LONG_COMMON_NAME: z.boolean().optional(),
  EXAMPLE_UCUM_UNITS: z.boolean().optional(),
  STATUS_REASON: z.boolean().optional(),
  STATUS_TEXT: z.boolean().optional(),
  CHANGE_REASON_PUBLIC: z.boolean().optional(),
  COMMON_TEST_RANK: z.boolean().optional(),
  COMMON_ORDER_RANK: z.boolean().optional(),
  HL7_ATTACHMENT_STRUCTURE: z.boolean().optional(),
  EXTERNAL_COPYRIGHT_LINK: z.boolean().optional(),
  PanelType: z.boolean().optional(),
  AskAtOrderEntry: z.boolean().optional(),
  AssociatedObservations: z.boolean().optional(),
  VersionFirstReleased: z.boolean().optional(),
  ValidHL7AttachmentRequest: z.boolean().optional(),
  DisplayName: z.boolean().optional(),
  TestOrderLoinc: z.union([z.boolean(),z.lazy(() => TestOrderLoincFindManyArgsSchema)]).optional(),
  TestResultLoinc: z.union([z.boolean(),z.lazy(() => TestResultLoincFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => LOINCCountOutputTypeArgsSchema)]).optional(),
}).strict()

// LAB
//------------------------------------------------------

export const LabIncludeSchema: z.ZodType<Prisma.LabInclude> = z.object({
  TestCatalog: z.union([z.boolean(),z.lazy(() => TestCatalogFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => LabCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const LabArgsSchema: z.ZodType<Prisma.LabDefaultArgs> = z.object({
  select: z.lazy(() => LabSelectSchema).optional(),
  include: z.lazy(() => LabIncludeSchema).optional(),
}).strict();

export const LabCountOutputTypeArgsSchema: z.ZodType<Prisma.LabCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => LabCountOutputTypeSelectSchema).nullish(),
}).strict();

export const LabCountOutputTypeSelectSchema: z.ZodType<Prisma.LabCountOutputTypeSelect> = z.object({
  TestCatalog: z.boolean().optional(),
}).strict();

export const LabSelectSchema: z.ZodType<Prisma.LabSelect> = z.object({
  LabId: z.boolean().optional(),
  LabName: z.boolean().optional(),
  LabCode: z.boolean().optional(),
  Address: z.boolean().optional(),
  City: z.boolean().optional(),
  State: z.boolean().optional(),
  Zip: z.boolean().optional(),
  TestCatalog: z.union([z.boolean(),z.lazy(() => TestCatalogFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => LabCountOutputTypeArgsSchema)]).optional(),
}).strict()

// LOINC COMPONENT HIERARCHY
//------------------------------------------------------

export const LoincComponentHierarchySelectSchema: z.ZodType<Prisma.LoincComponentHierarchySelect> = z.object({
  Id: z.boolean().optional(),
  ParentId: z.boolean().optional(),
  Level: z.boolean().optional(),
  Code: z.boolean().optional(),
  Sequence: z.boolean().optional(),
  CodeText: z.boolean().optional(),
  Component: z.boolean().optional(),
  Property: z.boolean().optional(),
  Timing: z.boolean().optional(),
  Scale: z.boolean().optional(),
  Method: z.boolean().optional(),
}).strict()

// LOINC PANEL HIERARCHY
//------------------------------------------------------

export const LoincPanelHierarchySelectSchema: z.ZodType<Prisma.LoincPanelHierarchySelect> = z.object({
  Id: z.boolean().optional(),
  ParentId: z.boolean().optional(),
  Level: z.boolean().optional(),
  Code: z.boolean().optional(),
  Sequence: z.boolean().optional(),
  CodeText: z.boolean().optional(),
  Component: z.boolean().optional(),
  Property: z.boolean().optional(),
  Timing: z.boolean().optional(),
  Scale: z.boolean().optional(),
  Method: z.boolean().optional(),
}).strict()

// LOINC UNIVERAL LAB ORDERS
//------------------------------------------------------

export const LoincUniveralLabOrdersSelectSchema: z.ZodType<Prisma.LoincUniveralLabOrdersSelect> = z.object({
  Loinc_Num: z.boolean().optional(),
  Long_Common_Name: z.boolean().optional(),
  ORDER_OBS: z.boolean().optional(),
}).strict()

// POST
//------------------------------------------------------

export const PostSelectSchema: z.ZodType<Prisma.PostSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

// SESSION
//------------------------------------------------------

export const SessionIncludeSchema: z.ZodType<Prisma.SessionInclude> = z.object({
  User: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const SessionArgsSchema: z.ZodType<Prisma.SessionDefaultArgs> = z.object({
  select: z.lazy(() => SessionSelectSchema).optional(),
  include: z.lazy(() => SessionIncludeSchema).optional(),
}).strict();

export const SessionSelectSchema: z.ZodType<Prisma.SessionSelect> = z.object({
  id: z.boolean().optional(),
  sessionToken: z.boolean().optional(),
  userId: z.boolean().optional(),
  expires: z.boolean().optional(),
  User: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// TEST BIOMARKER
//------------------------------------------------------

export const TestBiomarkerIncludeSchema: z.ZodType<Prisma.TestBiomarkerInclude> = z.object({
  BIOMARKER: z.union([z.boolean(),z.lazy(() => BIOMARKERArgsSchema)]).optional(),
  TestCatalog: z.union([z.boolean(),z.lazy(() => TestCatalogArgsSchema)]).optional(),
}).strict()

export const TestBiomarkerArgsSchema: z.ZodType<Prisma.TestBiomarkerDefaultArgs> = z.object({
  select: z.lazy(() => TestBiomarkerSelectSchema).optional(),
  include: z.lazy(() => TestBiomarkerIncludeSchema).optional(),
}).strict();

export const TestBiomarkerSelectSchema: z.ZodType<Prisma.TestBiomarkerSelect> = z.object({
  Id: z.boolean().optional(),
  TestId: z.boolean().optional(),
  LabTestId: z.boolean().optional(),
  HGNCId: z.boolean().optional(),
  CreatedAt: z.boolean().optional(),
  UpdatedAt: z.boolean().optional(),
  BIOMARKER: z.union([z.boolean(),z.lazy(() => BIOMARKERArgsSchema)]).optional(),
  TestCatalog: z.union([z.boolean(),z.lazy(() => TestCatalogArgsSchema)]).optional(),
}).strict()

// TEST CATALOG
//------------------------------------------------------

export const TestCatalogIncludeSchema: z.ZodType<Prisma.TestCatalogInclude> = z.object({
  TestBiomarker: z.union([z.boolean(),z.lazy(() => TestBiomarkerFindManyArgsSchema)]).optional(),
  Lab: z.union([z.boolean(),z.lazy(() => LabArgsSchema)]).optional(),
  TestCptCode: z.union([z.boolean(),z.lazy(() => TestCptCodeFindManyArgsSchema)]).optional(),
  TestOrderLoinc: z.union([z.boolean(),z.lazy(() => TestOrderLoincFindManyArgsSchema)]).optional(),
  TestResultLoinc: z.union([z.boolean(),z.lazy(() => TestResultLoincFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TestCatalogCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TestCatalogArgsSchema: z.ZodType<Prisma.TestCatalogDefaultArgs> = z.object({
  select: z.lazy(() => TestCatalogSelectSchema).optional(),
  include: z.lazy(() => TestCatalogIncludeSchema).optional(),
}).strict();

export const TestCatalogCountOutputTypeArgsSchema: z.ZodType<Prisma.TestCatalogCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TestCatalogCountOutputTypeSelectSchema).nullish(),
}).strict();

export const TestCatalogCountOutputTypeSelectSchema: z.ZodType<Prisma.TestCatalogCountOutputTypeSelect> = z.object({
  TestBiomarker: z.boolean().optional(),
  TestCptCode: z.boolean().optional(),
  TestOrderLoinc: z.boolean().optional(),
  TestResultLoinc: z.boolean().optional(),
}).strict();

export const TestCatalogSelectSchema: z.ZodType<Prisma.TestCatalogSelect> = z.object({
  TestId: z.boolean().optional(),
  LabId: z.boolean().optional(),
  href: z.boolean().optional(),
  CasandraTestId: z.boolean().optional(),
  LabTestId: z.boolean().optional(),
  TestName: z.boolean().optional(),
  AlternativeName: z.boolean().optional(),
  AlternativeName1: z.boolean().optional(),
  AlternativeName2: z.boolean().optional(),
  AlternativeName3: z.boolean().optional(),
  AlternativeName4: z.boolean().optional(),
  AlternativeName5: z.boolean().optional(),
  TestIncludes: z.boolean().optional(),
  SpecimenType: z.boolean().optional(),
  SpecialInstructions: z.boolean().optional(),
  Methodology: z.boolean().optional(),
  TestDescription: z.boolean().optional(),
  Diseases: z.boolean().optional(),
  Probes: z.boolean().optional(),
  ClinicalSignificance: z.boolean().optional(),
  SpecimenRequirements: z.boolean().optional(),
  Volume: z.boolean().optional(),
  MinimumVolume: z.boolean().optional(),
  Container: z.boolean().optional(),
  Collection: z.boolean().optional(),
  StabilityRequirements: z.boolean().optional(),
  StorageTransportation: z.boolean().optional(),
  PatientPreparation: z.boolean().optional(),
  CausesForRejection: z.boolean().optional(),
  TestUsage: z.boolean().optional(),
  TestLimitations: z.boolean().optional(),
  CPTCodes: z.boolean().optional(),
  NewYorkApproved: z.boolean().optional(),
  LevelOfService: z.boolean().optional(),
  TurnAroundTime: z.boolean().optional(),
  AssayCategory: z.boolean().optional(),
  ReferenceRanges: z.boolean().optional(),
  SetupSchedule: z.boolean().optional(),
  AlternativeSpecimen: z.boolean().optional(),
  LoincCodesText: z.boolean().optional(),
  LoincCodesHTML: z.boolean().optional(),
  CreatedAt: z.boolean().optional(),
  UpdatedAt: z.boolean().optional(),
  TestBiomarker: z.union([z.boolean(),z.lazy(() => TestBiomarkerFindManyArgsSchema)]).optional(),
  Lab: z.union([z.boolean(),z.lazy(() => LabArgsSchema)]).optional(),
  TestCptCode: z.union([z.boolean(),z.lazy(() => TestCptCodeFindManyArgsSchema)]).optional(),
  TestOrderLoinc: z.union([z.boolean(),z.lazy(() => TestOrderLoincFindManyArgsSchema)]).optional(),
  TestResultLoinc: z.union([z.boolean(),z.lazy(() => TestResultLoincFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TestCatalogCountOutputTypeArgsSchema)]).optional(),
}).strict()

// TEST CPT CODE
//------------------------------------------------------

export const TestCptCodeIncludeSchema: z.ZodType<Prisma.TestCptCodeInclude> = z.object({
  TestCatalog: z.union([z.boolean(),z.lazy(() => TestCatalogArgsSchema)]).optional(),
}).strict()

export const TestCptCodeArgsSchema: z.ZodType<Prisma.TestCptCodeDefaultArgs> = z.object({
  select: z.lazy(() => TestCptCodeSelectSchema).optional(),
  include: z.lazy(() => TestCptCodeIncludeSchema).optional(),
}).strict();

export const TestCptCodeSelectSchema: z.ZodType<Prisma.TestCptCodeSelect> = z.object({
  Id: z.boolean().optional(),
  TestId: z.boolean().optional(),
  LabTestId: z.boolean().optional(),
  CptCode: z.boolean().optional(),
  Modifier: z.boolean().optional(),
  Comments: z.boolean().optional(),
  CreatedAt: z.boolean().optional(),
  UpdatedAt: z.boolean().optional(),
  TestCatalog: z.union([z.boolean(),z.lazy(() => TestCatalogArgsSchema)]).optional(),
}).strict()

// TEST ORDER LOINC
//------------------------------------------------------

export const TestOrderLoincIncludeSchema: z.ZodType<Prisma.TestOrderLoincInclude> = z.object({
  LOINC: z.union([z.boolean(),z.lazy(() => LOINCArgsSchema)]).optional(),
  TestCatalog: z.union([z.boolean(),z.lazy(() => TestCatalogArgsSchema)]).optional(),
}).strict()

export const TestOrderLoincArgsSchema: z.ZodType<Prisma.TestOrderLoincDefaultArgs> = z.object({
  select: z.lazy(() => TestOrderLoincSelectSchema).optional(),
  include: z.lazy(() => TestOrderLoincIncludeSchema).optional(),
}).strict();

export const TestOrderLoincSelectSchema: z.ZodType<Prisma.TestOrderLoincSelect> = z.object({
  Id: z.boolean().optional(),
  TestId: z.boolean().optional(),
  LabTestId: z.boolean().optional(),
  OrderLoinc: z.boolean().optional(),
  CreatedAt: z.boolean().optional(),
  UpdatedAt: z.boolean().optional(),
  LOINC: z.union([z.boolean(),z.lazy(() => LOINCArgsSchema)]).optional(),
  TestCatalog: z.union([z.boolean(),z.lazy(() => TestCatalogArgsSchema)]).optional(),
}).strict()

// TEST RESULT LOINC
//------------------------------------------------------

export const TestResultLoincIncludeSchema: z.ZodType<Prisma.TestResultLoincInclude> = z.object({
  LOINC: z.union([z.boolean(),z.lazy(() => LOINCArgsSchema)]).optional(),
  TestCatalog: z.union([z.boolean(),z.lazy(() => TestCatalogArgsSchema)]).optional(),
}).strict()

export const TestResultLoincArgsSchema: z.ZodType<Prisma.TestResultLoincDefaultArgs> = z.object({
  select: z.lazy(() => TestResultLoincSelectSchema).optional(),
  include: z.lazy(() => TestResultLoincIncludeSchema).optional(),
}).strict();

export const TestResultLoincSelectSchema: z.ZodType<Prisma.TestResultLoincSelect> = z.object({
  Id: z.boolean().optional(),
  TestId: z.boolean().optional(),
  LabTestId: z.boolean().optional(),
  ResultCode: z.boolean().optional(),
  ResultCodeName: z.boolean().optional(),
  UofM: z.boolean().optional(),
  ResultLoinc: z.boolean().optional(),
  CreatedAt: z.boolean().optional(),
  UpdatedAt: z.boolean().optional(),
  LOINC: z.union([z.boolean(),z.lazy(() => LOINCArgsSchema)]).optional(),
  TestCatalog: z.union([z.boolean(),z.lazy(() => TestCatalogArgsSchema)]).optional(),
}).strict()

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  Account: z.union([z.boolean(),z.lazy(() => AccountFindManyArgsSchema)]).optional(),
  Session: z.union([z.boolean(),z.lazy(() => SessionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  Account: z.boolean().optional(),
  Session: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  password: z.boolean().optional(),
  emailVerified: z.boolean().optional(),
  image: z.boolean().optional(),
  Account: z.union([z.boolean(),z.lazy(() => AccountFindManyArgsSchema)]).optional(),
  Session: z.union([z.boolean(),z.lazy(() => SessionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// VERIFICATION TOKEN
//------------------------------------------------------

export const VerificationTokenSelectSchema: z.ZodType<Prisma.VerificationTokenSelect> = z.object({
  identifier: z.boolean().optional(),
  token: z.boolean().optional(),
  expires: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const AccountWhereInputSchema: z.ZodType<Prisma.AccountWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  User: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const AccountOrderByWithRelationAndSearchRelevanceInputSchema: z.ZodType<Prisma.AccountOrderByWithRelationAndSearchRelevanceInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  access_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  expires_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  token_type: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  scope: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  id_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  session_state: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  User: z.lazy(() => UserOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
  _relevance: z.lazy(() => AccountOrderByRelevanceInputSchema).optional()
}).strict();

export const AccountWhereUniqueInputSchema: z.ZodType<Prisma.AccountWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    provider_providerAccountId: z.lazy(() => AccountProviderProviderAccountIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    provider_providerAccountId: z.lazy(() => AccountProviderProviderAccountIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  provider_providerAccountId: z.lazy(() => AccountProviderProviderAccountIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  User: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const AccountOrderByWithAggregationInputSchema: z.ZodType<Prisma.AccountOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  access_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  expires_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  token_type: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  scope: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  id_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  session_state: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => AccountCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AccountAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AccountMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AccountMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AccountSumOrderByAggregateInputSchema).optional()
}).strict();

export const AccountScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const BIOMARKERWhereInputSchema: z.ZodType<Prisma.BIOMARKERWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BIOMARKERWhereInputSchema),z.lazy(() => BIOMARKERWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BIOMARKERWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BIOMARKERWhereInputSchema),z.lazy(() => BIOMARKERWhereInputSchema).array() ]).optional(),
  HGNCId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  HGNCStatus: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  HGNCApprovedSymbol: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  HGNCApprovedName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  TestBiomarker: z.lazy(() => TestBiomarkerListRelationFilterSchema).optional()
}).strict();

export const BIOMARKEROrderByWithRelationAndSearchRelevanceInputSchema: z.ZodType<Prisma.BIOMARKEROrderByWithRelationAndSearchRelevanceInput> = z.object({
  HGNCId: z.lazy(() => SortOrderSchema).optional(),
  HGNCStatus: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  HGNCApprovedSymbol: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  HGNCApprovedName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  TestBiomarker: z.lazy(() => TestBiomarkerOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => BIOMARKEROrderByRelevanceInputSchema).optional()
}).strict();

export const BIOMARKERWhereUniqueInputSchema: z.ZodType<Prisma.BIOMARKERWhereUniqueInput> = z.union([
  z.object({
    HGNCId: z.string(),
    HGNCApprovedSymbol: z.string()
  }),
  z.object({
    HGNCId: z.string(),
  }),
  z.object({
    HGNCApprovedSymbol: z.string(),
  }),
])
.and(z.object({
  HGNCId: z.string().optional(),
  HGNCApprovedSymbol: z.string().optional(),
  AND: z.union([ z.lazy(() => BIOMARKERWhereInputSchema),z.lazy(() => BIOMARKERWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BIOMARKERWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BIOMARKERWhereInputSchema),z.lazy(() => BIOMARKERWhereInputSchema).array() ]).optional(),
  HGNCStatus: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  HGNCApprovedName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  TestBiomarker: z.lazy(() => TestBiomarkerListRelationFilterSchema).optional()
}).strict());

export const BIOMARKEROrderByWithAggregationInputSchema: z.ZodType<Prisma.BIOMARKEROrderByWithAggregationInput> = z.object({
  HGNCId: z.lazy(() => SortOrderSchema).optional(),
  HGNCStatus: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  HGNCApprovedSymbol: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  HGNCApprovedName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => BIOMARKERCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BIOMARKERMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BIOMARKERMinOrderByAggregateInputSchema).optional()
}).strict();

export const BIOMARKERScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BIOMARKERScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BIOMARKERScalarWhereWithAggregatesInputSchema),z.lazy(() => BIOMARKERScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BIOMARKERScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BIOMARKERScalarWhereWithAggregatesInputSchema),z.lazy(() => BIOMARKERScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  HGNCId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  HGNCStatus: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  HGNCApprovedSymbol: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  HGNCApprovedName: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const LOINCWhereInputSchema: z.ZodType<Prisma.LOINCWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LOINCWhereInputSchema),z.lazy(() => LOINCWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LOINCWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LOINCWhereInputSchema),z.lazy(() => LOINCWhereInputSchema).array() ]).optional(),
  Loinc_Num: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  COMPONENT: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  PROPERTY: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  TIME_ASPCT: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  SYSTEM: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  SCALE_TYP: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  METHOD_TYP: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CLASS: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  VersionLastChanged: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CHNG_TYPE: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  DefinitionDescription: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  STATUS: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CONSUMER_NAME: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CLASSTYPE: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  FORMULA: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  EXMPL_ANSWERS: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  SURVEY_QUEST_TEXT: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  SURVEY_QUEST_SRC: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  UNITSREQUIRED: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  RELATEDNAMES2: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  SHORTNAME: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ORDER_OBS: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  HL7_FIELD_SUBFIELD_ID: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  EXTERNAL_COPYRIGHT_NOTICE: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  EXAMPLE_UNITS: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  LONG_COMMON_NAME: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  EXAMPLE_UCUM_UNITS: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  STATUS_REASON: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  STATUS_TEXT: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CHANGE_REASON_PUBLIC: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  COMMON_TEST_RANK: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  COMMON_ORDER_RANK: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  HL7_ATTACHMENT_STRUCTURE: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  EXTERNAL_COPYRIGHT_LINK: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  PanelType: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  AskAtOrderEntry: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  AssociatedObservations: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  VersionFirstReleased: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ValidHL7AttachmentRequest: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  DisplayName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincListRelationFilterSchema).optional(),
  TestResultLoinc: z.lazy(() => TestResultLoincListRelationFilterSchema).optional()
}).strict();

export const LOINCOrderByWithRelationAndSearchRelevanceInputSchema: z.ZodType<Prisma.LOINCOrderByWithRelationAndSearchRelevanceInput> = z.object({
  Loinc_Num: z.lazy(() => SortOrderSchema).optional(),
  COMPONENT: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  PROPERTY: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  TIME_ASPCT: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  SYSTEM: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  SCALE_TYP: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  METHOD_TYP: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  CLASS: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  VersionLastChanged: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  CHNG_TYPE: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  DefinitionDescription: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  STATUS: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  CONSUMER_NAME: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  CLASSTYPE: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  FORMULA: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  EXMPL_ANSWERS: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  SURVEY_QUEST_TEXT: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  SURVEY_QUEST_SRC: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  UNITSREQUIRED: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  RELATEDNAMES2: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  SHORTNAME: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ORDER_OBS: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  HL7_FIELD_SUBFIELD_ID: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  EXTERNAL_COPYRIGHT_NOTICE: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  EXAMPLE_UNITS: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  LONG_COMMON_NAME: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  EXAMPLE_UCUM_UNITS: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  STATUS_REASON: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  STATUS_TEXT: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  CHANGE_REASON_PUBLIC: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  COMMON_TEST_RANK: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  COMMON_ORDER_RANK: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  HL7_ATTACHMENT_STRUCTURE: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  EXTERNAL_COPYRIGHT_LINK: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  PanelType: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  AskAtOrderEntry: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  AssociatedObservations: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  VersionFirstReleased: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ValidHL7AttachmentRequest: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  DisplayName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincOrderByRelationAggregateInputSchema).optional(),
  TestResultLoinc: z.lazy(() => TestResultLoincOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => LOINCOrderByRelevanceInputSchema).optional()
}).strict();

export const LOINCWhereUniqueInputSchema: z.ZodType<Prisma.LOINCWhereUniqueInput> = z.object({
  Loinc_Num: z.string()
})
.and(z.object({
  Loinc_Num: z.string().optional(),
  AND: z.union([ z.lazy(() => LOINCWhereInputSchema),z.lazy(() => LOINCWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LOINCWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LOINCWhereInputSchema),z.lazy(() => LOINCWhereInputSchema).array() ]).optional(),
  COMPONENT: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  PROPERTY: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  TIME_ASPCT: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  SYSTEM: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  SCALE_TYP: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  METHOD_TYP: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CLASS: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  VersionLastChanged: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CHNG_TYPE: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  DefinitionDescription: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  STATUS: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CONSUMER_NAME: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CLASSTYPE: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  FORMULA: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  EXMPL_ANSWERS: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  SURVEY_QUEST_TEXT: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  SURVEY_QUEST_SRC: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  UNITSREQUIRED: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  RELATEDNAMES2: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  SHORTNAME: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ORDER_OBS: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  HL7_FIELD_SUBFIELD_ID: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  EXTERNAL_COPYRIGHT_NOTICE: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  EXAMPLE_UNITS: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  LONG_COMMON_NAME: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  EXAMPLE_UCUM_UNITS: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  STATUS_REASON: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  STATUS_TEXT: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CHANGE_REASON_PUBLIC: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  COMMON_TEST_RANK: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  COMMON_ORDER_RANK: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  HL7_ATTACHMENT_STRUCTURE: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  EXTERNAL_COPYRIGHT_LINK: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  PanelType: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  AskAtOrderEntry: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  AssociatedObservations: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  VersionFirstReleased: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ValidHL7AttachmentRequest: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  DisplayName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincListRelationFilterSchema).optional(),
  TestResultLoinc: z.lazy(() => TestResultLoincListRelationFilterSchema).optional()
}).strict());

export const LOINCOrderByWithAggregationInputSchema: z.ZodType<Prisma.LOINCOrderByWithAggregationInput> = z.object({
  Loinc_Num: z.lazy(() => SortOrderSchema).optional(),
  COMPONENT: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  PROPERTY: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  TIME_ASPCT: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  SYSTEM: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  SCALE_TYP: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  METHOD_TYP: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  CLASS: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  VersionLastChanged: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  CHNG_TYPE: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  DefinitionDescription: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  STATUS: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  CONSUMER_NAME: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  CLASSTYPE: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  FORMULA: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  EXMPL_ANSWERS: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  SURVEY_QUEST_TEXT: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  SURVEY_QUEST_SRC: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  UNITSREQUIRED: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  RELATEDNAMES2: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  SHORTNAME: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ORDER_OBS: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  HL7_FIELD_SUBFIELD_ID: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  EXTERNAL_COPYRIGHT_NOTICE: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  EXAMPLE_UNITS: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  LONG_COMMON_NAME: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  EXAMPLE_UCUM_UNITS: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  STATUS_REASON: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  STATUS_TEXT: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  CHANGE_REASON_PUBLIC: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  COMMON_TEST_RANK: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  COMMON_ORDER_RANK: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  HL7_ATTACHMENT_STRUCTURE: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  EXTERNAL_COPYRIGHT_LINK: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  PanelType: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  AskAtOrderEntry: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  AssociatedObservations: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  VersionFirstReleased: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ValidHL7AttachmentRequest: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  DisplayName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => LOINCCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => LOINCAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LOINCMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LOINCMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => LOINCSumOrderByAggregateInputSchema).optional()
}).strict();

export const LOINCScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LOINCScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => LOINCScalarWhereWithAggregatesInputSchema),z.lazy(() => LOINCScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LOINCScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LOINCScalarWhereWithAggregatesInputSchema),z.lazy(() => LOINCScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  Loinc_Num: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  COMPONENT: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  PROPERTY: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  TIME_ASPCT: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  SYSTEM: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  SCALE_TYP: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  METHOD_TYP: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  CLASS: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  VersionLastChanged: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  CHNG_TYPE: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  DefinitionDescription: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  STATUS: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  CONSUMER_NAME: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  CLASSTYPE: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  FORMULA: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  EXMPL_ANSWERS: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  SURVEY_QUEST_TEXT: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  SURVEY_QUEST_SRC: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  UNITSREQUIRED: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  RELATEDNAMES2: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  SHORTNAME: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  ORDER_OBS: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  HL7_FIELD_SUBFIELD_ID: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  EXTERNAL_COPYRIGHT_NOTICE: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  EXAMPLE_UNITS: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  LONG_COMMON_NAME: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  EXAMPLE_UCUM_UNITS: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  STATUS_REASON: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  STATUS_TEXT: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  CHANGE_REASON_PUBLIC: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  COMMON_TEST_RANK: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  COMMON_ORDER_RANK: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  HL7_ATTACHMENT_STRUCTURE: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  EXTERNAL_COPYRIGHT_LINK: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  PanelType: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  AskAtOrderEntry: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  AssociatedObservations: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  VersionFirstReleased: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  ValidHL7AttachmentRequest: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  DisplayName: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const LabWhereInputSchema: z.ZodType<Prisma.LabWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LabWhereInputSchema),z.lazy(() => LabWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LabWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LabWhereInputSchema),z.lazy(() => LabWhereInputSchema).array() ]).optional(),
  LabId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  LabName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  LabCode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Address: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  City: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  State: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Zip: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  TestCatalog: z.lazy(() => TestCatalogListRelationFilterSchema).optional()
}).strict();

export const LabOrderByWithRelationAndSearchRelevanceInputSchema: z.ZodType<Prisma.LabOrderByWithRelationAndSearchRelevanceInput> = z.object({
  LabId: z.lazy(() => SortOrderSchema).optional(),
  LabName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  LabCode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Address: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  City: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  State: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Zip: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  TestCatalog: z.lazy(() => TestCatalogOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => LabOrderByRelevanceInputSchema).optional()
}).strict();

export const LabWhereUniqueInputSchema: z.ZodType<Prisma.LabWhereUniqueInput> = z.object({
  LabId: z.number()
})
.and(z.object({
  LabId: z.number().optional(),
  AND: z.union([ z.lazy(() => LabWhereInputSchema),z.lazy(() => LabWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LabWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LabWhereInputSchema),z.lazy(() => LabWhereInputSchema).array() ]).optional(),
  LabName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  LabCode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Address: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  City: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  State: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Zip: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  TestCatalog: z.lazy(() => TestCatalogListRelationFilterSchema).optional()
}).strict());

export const LabOrderByWithAggregationInputSchema: z.ZodType<Prisma.LabOrderByWithAggregationInput> = z.object({
  LabId: z.lazy(() => SortOrderSchema).optional(),
  LabName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  LabCode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Address: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  City: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  State: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Zip: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => LabCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => LabAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LabMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LabMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => LabSumOrderByAggregateInputSchema).optional()
}).strict();

export const LabScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LabScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => LabScalarWhereWithAggregatesInputSchema),z.lazy(() => LabScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LabScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LabScalarWhereWithAggregatesInputSchema),z.lazy(() => LabScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  LabId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  LabName: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  LabCode: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  Address: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  City: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  State: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  Zip: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const LoincComponentHierarchyWhereInputSchema: z.ZodType<Prisma.LoincComponentHierarchyWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LoincComponentHierarchyWhereInputSchema),z.lazy(() => LoincComponentHierarchyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LoincComponentHierarchyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LoincComponentHierarchyWhereInputSchema),z.lazy(() => LoincComponentHierarchyWhereInputSchema).array() ]).optional(),
  Id: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  ParentId: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  Level: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  Code: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Sequence: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  CodeText: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Component: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Property: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Timing: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Scale: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Method: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const LoincComponentHierarchyOrderByWithRelationAndSearchRelevanceInputSchema: z.ZodType<Prisma.LoincComponentHierarchyOrderByWithRelationAndSearchRelevanceInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  ParentId: z.lazy(() => SortOrderSchema).optional(),
  Level: z.lazy(() => SortOrderSchema).optional(),
  Code: z.lazy(() => SortOrderSchema).optional(),
  Sequence: z.lazy(() => SortOrderSchema).optional(),
  CodeText: z.lazy(() => SortOrderSchema).optional(),
  Component: z.lazy(() => SortOrderSchema).optional(),
  Property: z.lazy(() => SortOrderSchema).optional(),
  Timing: z.lazy(() => SortOrderSchema).optional(),
  Scale: z.lazy(() => SortOrderSchema).optional(),
  Method: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => LoincComponentHierarchyOrderByRelevanceInputSchema).optional()
}).strict();

export const LoincComponentHierarchyWhereUniqueInputSchema: z.ZodType<Prisma.LoincComponentHierarchyWhereUniqueInput> = z.object({
  Id: z.bigint()
})
.and(z.object({
  Id: z.bigint().optional(),
  AND: z.union([ z.lazy(() => LoincComponentHierarchyWhereInputSchema),z.lazy(() => LoincComponentHierarchyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LoincComponentHierarchyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LoincComponentHierarchyWhereInputSchema),z.lazy(() => LoincComponentHierarchyWhereInputSchema).array() ]).optional(),
  ParentId: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  Level: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  Code: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Sequence: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  CodeText: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Component: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Property: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Timing: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Scale: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Method: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const LoincComponentHierarchyOrderByWithAggregationInputSchema: z.ZodType<Prisma.LoincComponentHierarchyOrderByWithAggregationInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  ParentId: z.lazy(() => SortOrderSchema).optional(),
  Level: z.lazy(() => SortOrderSchema).optional(),
  Code: z.lazy(() => SortOrderSchema).optional(),
  Sequence: z.lazy(() => SortOrderSchema).optional(),
  CodeText: z.lazy(() => SortOrderSchema).optional(),
  Component: z.lazy(() => SortOrderSchema).optional(),
  Property: z.lazy(() => SortOrderSchema).optional(),
  Timing: z.lazy(() => SortOrderSchema).optional(),
  Scale: z.lazy(() => SortOrderSchema).optional(),
  Method: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LoincComponentHierarchyCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => LoincComponentHierarchyAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LoincComponentHierarchyMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LoincComponentHierarchyMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => LoincComponentHierarchySumOrderByAggregateInputSchema).optional()
}).strict();

export const LoincComponentHierarchyScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LoincComponentHierarchyScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => LoincComponentHierarchyScalarWhereWithAggregatesInputSchema),z.lazy(() => LoincComponentHierarchyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LoincComponentHierarchyScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LoincComponentHierarchyScalarWhereWithAggregatesInputSchema),z.lazy(() => LoincComponentHierarchyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  Id: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  ParentId: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  Level: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  Code: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  Sequence: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  CodeText: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  Component: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  Property: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  Timing: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  Scale: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  Method: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const LoincPanelHierarchyWhereInputSchema: z.ZodType<Prisma.LoincPanelHierarchyWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LoincPanelHierarchyWhereInputSchema),z.lazy(() => LoincPanelHierarchyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LoincPanelHierarchyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LoincPanelHierarchyWhereInputSchema),z.lazy(() => LoincPanelHierarchyWhereInputSchema).array() ]).optional(),
  Id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  ParentId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  Level: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  Code: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Sequence: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  CodeText: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Component: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Property: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Timing: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Scale: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Method: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const LoincPanelHierarchyOrderByWithRelationAndSearchRelevanceInputSchema: z.ZodType<Prisma.LoincPanelHierarchyOrderByWithRelationAndSearchRelevanceInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  ParentId: z.lazy(() => SortOrderSchema).optional(),
  Level: z.lazy(() => SortOrderSchema).optional(),
  Code: z.lazy(() => SortOrderSchema).optional(),
  Sequence: z.lazy(() => SortOrderSchema).optional(),
  CodeText: z.lazy(() => SortOrderSchema).optional(),
  Component: z.lazy(() => SortOrderSchema).optional(),
  Property: z.lazy(() => SortOrderSchema).optional(),
  Timing: z.lazy(() => SortOrderSchema).optional(),
  Scale: z.lazy(() => SortOrderSchema).optional(),
  Method: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => LoincPanelHierarchyOrderByRelevanceInputSchema).optional()
}).strict();

export const LoincPanelHierarchyWhereUniqueInputSchema: z.ZodType<Prisma.LoincPanelHierarchyWhereUniqueInput> = z.object({
  Id: z.number()
})
.and(z.object({
  Id: z.number().optional(),
  AND: z.union([ z.lazy(() => LoincPanelHierarchyWhereInputSchema),z.lazy(() => LoincPanelHierarchyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LoincPanelHierarchyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LoincPanelHierarchyWhereInputSchema),z.lazy(() => LoincPanelHierarchyWhereInputSchema).array() ]).optional(),
  ParentId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  Level: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  Code: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Sequence: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  CodeText: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Component: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Property: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Timing: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Scale: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Method: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const LoincPanelHierarchyOrderByWithAggregationInputSchema: z.ZodType<Prisma.LoincPanelHierarchyOrderByWithAggregationInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  ParentId: z.lazy(() => SortOrderSchema).optional(),
  Level: z.lazy(() => SortOrderSchema).optional(),
  Code: z.lazy(() => SortOrderSchema).optional(),
  Sequence: z.lazy(() => SortOrderSchema).optional(),
  CodeText: z.lazy(() => SortOrderSchema).optional(),
  Component: z.lazy(() => SortOrderSchema).optional(),
  Property: z.lazy(() => SortOrderSchema).optional(),
  Timing: z.lazy(() => SortOrderSchema).optional(),
  Scale: z.lazy(() => SortOrderSchema).optional(),
  Method: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LoincPanelHierarchyCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => LoincPanelHierarchyAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LoincPanelHierarchyMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LoincPanelHierarchyMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => LoincPanelHierarchySumOrderByAggregateInputSchema).optional()
}).strict();

export const LoincPanelHierarchyScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LoincPanelHierarchyScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => LoincPanelHierarchyScalarWhereWithAggregatesInputSchema),z.lazy(() => LoincPanelHierarchyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LoincPanelHierarchyScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LoincPanelHierarchyScalarWhereWithAggregatesInputSchema),z.lazy(() => LoincPanelHierarchyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  Id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  ParentId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  Level: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  Code: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  Sequence: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  CodeText: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  Component: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  Property: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  Timing: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  Scale: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  Method: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const LoincUniveralLabOrdersWhereInputSchema: z.ZodType<Prisma.LoincUniveralLabOrdersWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LoincUniveralLabOrdersWhereInputSchema),z.lazy(() => LoincUniveralLabOrdersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LoincUniveralLabOrdersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LoincUniveralLabOrdersWhereInputSchema),z.lazy(() => LoincUniveralLabOrdersWhereInputSchema).array() ]).optional(),
  Loinc_Num: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Long_Common_Name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ORDER_OBS: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const LoincUniveralLabOrdersOrderByWithRelationAndSearchRelevanceInputSchema: z.ZodType<Prisma.LoincUniveralLabOrdersOrderByWithRelationAndSearchRelevanceInput> = z.object({
  Loinc_Num: z.lazy(() => SortOrderSchema).optional(),
  Long_Common_Name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ORDER_OBS: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _relevance: z.lazy(() => LoincUniveralLabOrdersOrderByRelevanceInputSchema).optional()
}).strict();

export const LoincUniveralLabOrdersWhereUniqueInputSchema: z.ZodType<Prisma.LoincUniveralLabOrdersWhereUniqueInput> = z.object({
  Loinc_Num: z.string()
})
.and(z.object({
  Loinc_Num: z.string().optional(),
  AND: z.union([ z.lazy(() => LoincUniveralLabOrdersWhereInputSchema),z.lazy(() => LoincUniveralLabOrdersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LoincUniveralLabOrdersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LoincUniveralLabOrdersWhereInputSchema),z.lazy(() => LoincUniveralLabOrdersWhereInputSchema).array() ]).optional(),
  Long_Common_Name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ORDER_OBS: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export const LoincUniveralLabOrdersOrderByWithAggregationInputSchema: z.ZodType<Prisma.LoincUniveralLabOrdersOrderByWithAggregationInput> = z.object({
  Loinc_Num: z.lazy(() => SortOrderSchema).optional(),
  Long_Common_Name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ORDER_OBS: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => LoincUniveralLabOrdersCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LoincUniveralLabOrdersMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LoincUniveralLabOrdersMinOrderByAggregateInputSchema).optional()
}).strict();

export const LoincUniveralLabOrdersScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LoincUniveralLabOrdersScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => LoincUniveralLabOrdersScalarWhereWithAggregatesInputSchema),z.lazy(() => LoincUniveralLabOrdersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LoincUniveralLabOrdersScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LoincUniveralLabOrdersScalarWhereWithAggregatesInputSchema),z.lazy(() => LoincUniveralLabOrdersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  Loinc_Num: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  Long_Common_Name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  ORDER_OBS: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const PostWhereInputSchema: z.ZodType<Prisma.PostWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PostWhereInputSchema),z.lazy(() => PostWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PostWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PostWhereInputSchema),z.lazy(() => PostWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
}).strict();

export const PostOrderByWithRelationAndSearchRelevanceInputSchema: z.ZodType<Prisma.PostOrderByWithRelationAndSearchRelevanceInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => PostOrderByRelevanceInputSchema).optional()
}).strict();

export const PostWhereUniqueInputSchema: z.ZodType<Prisma.PostWhereUniqueInput> = z.object({
  id: z.number()
})
.and(z.object({
  id: z.number().optional(),
  AND: z.union([ z.lazy(() => PostWhereInputSchema),z.lazy(() => PostWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PostWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PostWhereInputSchema),z.lazy(() => PostWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
}).strict());

export const PostOrderByWithAggregationInputSchema: z.ZodType<Prisma.PostOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PostCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PostAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PostMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PostMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PostSumOrderByAggregateInputSchema).optional()
}).strict();

export const PostScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PostScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PostScalarWhereWithAggregatesInputSchema),z.lazy(() => PostScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PostScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PostScalarWhereWithAggregatesInputSchema),z.lazy(() => PostScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.date() ]).optional(),
}).strict();

export const SessionWhereInputSchema: z.ZodType<Prisma.SessionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
  User: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const SessionOrderByWithRelationAndSearchRelevanceInputSchema: z.ZodType<Prisma.SessionOrderByWithRelationAndSearchRelevanceInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  User: z.lazy(() => UserOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
  _relevance: z.lazy(() => SessionOrderByRelevanceInputSchema).optional()
}).strict();

export const SessionWhereUniqueInputSchema: z.ZodType<Prisma.SessionWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    sessionToken: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    sessionToken: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  sessionToken: z.string().optional(),
  AND: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
  User: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const SessionOrderByWithAggregationInputSchema: z.ZodType<Prisma.SessionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SessionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SessionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SessionMinOrderByAggregateInputSchema).optional()
}).strict();

export const SessionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SessionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.date() ]).optional(),
}).strict();

export const TestBiomarkerWhereInputSchema: z.ZodType<Prisma.TestBiomarkerWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TestBiomarkerWhereInputSchema),z.lazy(() => TestBiomarkerWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestBiomarkerWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestBiomarkerWhereInputSchema),z.lazy(() => TestBiomarkerWhereInputSchema).array() ]).optional(),
  Id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  TestId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  LabTestId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  HGNCId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  CreatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
  UpdatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
  BIOMARKER: z.union([ z.lazy(() => BIOMARKERRelationFilterSchema),z.lazy(() => BIOMARKERWhereInputSchema) ]).optional(),
  TestCatalog: z.union([ z.lazy(() => TestCatalogRelationFilterSchema),z.lazy(() => TestCatalogWhereInputSchema) ]).optional(),
}).strict();

export const TestBiomarkerOrderByWithRelationAndSearchRelevanceInputSchema: z.ZodType<Prisma.TestBiomarkerOrderByWithRelationAndSearchRelevanceInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  TestId: z.lazy(() => SortOrderSchema).optional(),
  LabTestId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  HGNCId: z.lazy(() => SortOrderSchema).optional(),
  CreatedAt: z.lazy(() => SortOrderSchema).optional(),
  UpdatedAt: z.lazy(() => SortOrderSchema).optional(),
  BIOMARKER: z.lazy(() => BIOMARKEROrderByWithRelationAndSearchRelevanceInputSchema).optional(),
  TestCatalog: z.lazy(() => TestCatalogOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
  _relevance: z.lazy(() => TestBiomarkerOrderByRelevanceInputSchema).optional()
}).strict();

export const TestBiomarkerWhereUniqueInputSchema: z.ZodType<Prisma.TestBiomarkerWhereUniqueInput> = z.union([
  z.object({
    Id: z.number(),
    TestId_HGNCId: z.lazy(() => TestBiomarkerTestIdHGNCIdCompoundUniqueInputSchema)
  }),
  z.object({
    Id: z.number(),
  }),
  z.object({
    TestId_HGNCId: z.lazy(() => TestBiomarkerTestIdHGNCIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  Id: z.number().optional(),
  TestId_HGNCId: z.lazy(() => TestBiomarkerTestIdHGNCIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => TestBiomarkerWhereInputSchema),z.lazy(() => TestBiomarkerWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestBiomarkerWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestBiomarkerWhereInputSchema),z.lazy(() => TestBiomarkerWhereInputSchema).array() ]).optional(),
  TestId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  LabTestId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  HGNCId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  CreatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
  UpdatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
  BIOMARKER: z.union([ z.lazy(() => BIOMARKERRelationFilterSchema),z.lazy(() => BIOMARKERWhereInputSchema) ]).optional(),
  TestCatalog: z.union([ z.lazy(() => TestCatalogRelationFilterSchema),z.lazy(() => TestCatalogWhereInputSchema) ]).optional(),
}).strict());

export const TestBiomarkerOrderByWithAggregationInputSchema: z.ZodType<Prisma.TestBiomarkerOrderByWithAggregationInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  TestId: z.lazy(() => SortOrderSchema).optional(),
  LabTestId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  HGNCId: z.lazy(() => SortOrderSchema).optional(),
  CreatedAt: z.lazy(() => SortOrderSchema).optional(),
  UpdatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TestBiomarkerCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TestBiomarkerAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TestBiomarkerMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TestBiomarkerMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TestBiomarkerSumOrderByAggregateInputSchema).optional()
}).strict();

export const TestBiomarkerScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TestBiomarkerScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TestBiomarkerScalarWhereWithAggregatesInputSchema),z.lazy(() => TestBiomarkerScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestBiomarkerScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestBiomarkerScalarWhereWithAggregatesInputSchema),z.lazy(() => TestBiomarkerScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  Id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  TestId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  LabTestId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  HGNCId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  CreatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.date() ]).optional(),
  UpdatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.date() ]).optional(),
}).strict();

export const TestCatalogWhereInputSchema: z.ZodType<Prisma.TestCatalogWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TestCatalogWhereInputSchema),z.lazy(() => TestCatalogWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestCatalogWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestCatalogWhereInputSchema),z.lazy(() => TestCatalogWhereInputSchema).array() ]).optional(),
  TestId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  LabId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  href: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CasandraTestId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  LabTestId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  TestName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  AlternativeName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  AlternativeName1: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  AlternativeName2: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  AlternativeName3: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  AlternativeName4: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  AlternativeName5: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  TestIncludes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  SpecimenType: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  SpecialInstructions: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Methodology: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  TestDescription: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Diseases: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Probes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ClinicalSignificance: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  SpecimenRequirements: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Volume: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  MinimumVolume: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Container: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Collection: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  StabilityRequirements: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  StorageTransportation: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  PatientPreparation: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CausesForRejection: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  TestUsage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  TestLimitations: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CPTCodes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  NewYorkApproved: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  LevelOfService: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  TurnAroundTime: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  AssayCategory: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ReferenceRanges: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  SetupSchedule: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  AlternativeSpecimen: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  LoincCodesText: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  LoincCodesHTML: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CreatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
  UpdatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
  TestBiomarker: z.lazy(() => TestBiomarkerListRelationFilterSchema).optional(),
  Lab: z.union([ z.lazy(() => LabNullableRelationFilterSchema),z.lazy(() => LabWhereInputSchema) ]).optional().nullable(),
  TestCptCode: z.lazy(() => TestCptCodeListRelationFilterSchema).optional(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincListRelationFilterSchema).optional(),
  TestResultLoinc: z.lazy(() => TestResultLoincListRelationFilterSchema).optional()
}).strict();

export const TestCatalogOrderByWithRelationAndSearchRelevanceInputSchema: z.ZodType<Prisma.TestCatalogOrderByWithRelationAndSearchRelevanceInput> = z.object({
  TestId: z.lazy(() => SortOrderSchema).optional(),
  LabId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  href: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  CasandraTestId: z.lazy(() => SortOrderSchema).optional(),
  LabTestId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  TestName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  AlternativeName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  AlternativeName1: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  AlternativeName2: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  AlternativeName3: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  AlternativeName4: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  AlternativeName5: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  TestIncludes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  SpecimenType: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  SpecialInstructions: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Methodology: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  TestDescription: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Diseases: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Probes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ClinicalSignificance: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  SpecimenRequirements: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Volume: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  MinimumVolume: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Container: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Collection: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  StabilityRequirements: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  StorageTransportation: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  PatientPreparation: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  CausesForRejection: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  TestUsage: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  TestLimitations: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  CPTCodes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  NewYorkApproved: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  LevelOfService: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  TurnAroundTime: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  AssayCategory: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ReferenceRanges: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  SetupSchedule: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  AlternativeSpecimen: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  LoincCodesText: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  LoincCodesHTML: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  CreatedAt: z.lazy(() => SortOrderSchema).optional(),
  UpdatedAt: z.lazy(() => SortOrderSchema).optional(),
  TestBiomarker: z.lazy(() => TestBiomarkerOrderByRelationAggregateInputSchema).optional(),
  Lab: z.lazy(() => LabOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
  TestCptCode: z.lazy(() => TestCptCodeOrderByRelationAggregateInputSchema).optional(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincOrderByRelationAggregateInputSchema).optional(),
  TestResultLoinc: z.lazy(() => TestResultLoincOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => TestCatalogOrderByRelevanceInputSchema).optional()
}).strict();

export const TestCatalogWhereUniqueInputSchema: z.ZodType<Prisma.TestCatalogWhereUniqueInput> = z.union([
  z.object({
    TestId: z.number(),
    LabId_LabTestId: z.lazy(() => TestCatalogLabIdLabTestIdCompoundUniqueInputSchema)
  }),
  z.object({
    TestId: z.number(),
  }),
  z.object({
    LabId_LabTestId: z.lazy(() => TestCatalogLabIdLabTestIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  TestId: z.number().optional(),
  LabId_LabTestId: z.lazy(() => TestCatalogLabIdLabTestIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => TestCatalogWhereInputSchema),z.lazy(() => TestCatalogWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestCatalogWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestCatalogWhereInputSchema),z.lazy(() => TestCatalogWhereInputSchema).array() ]).optional(),
  LabId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  href: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CasandraTestId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  LabTestId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  TestName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  AlternativeName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  AlternativeName1: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  AlternativeName2: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  AlternativeName3: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  AlternativeName4: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  AlternativeName5: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  TestIncludes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  SpecimenType: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  SpecialInstructions: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Methodology: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  TestDescription: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Diseases: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Probes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ClinicalSignificance: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  SpecimenRequirements: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Volume: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  MinimumVolume: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Container: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Collection: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  StabilityRequirements: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  StorageTransportation: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  PatientPreparation: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CausesForRejection: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  TestUsage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  TestLimitations: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CPTCodes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  NewYorkApproved: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  LevelOfService: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  TurnAroundTime: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  AssayCategory: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ReferenceRanges: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  SetupSchedule: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  AlternativeSpecimen: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  LoincCodesText: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  LoincCodesHTML: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CreatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
  UpdatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
  TestBiomarker: z.lazy(() => TestBiomarkerListRelationFilterSchema).optional(),
  Lab: z.union([ z.lazy(() => LabNullableRelationFilterSchema),z.lazy(() => LabWhereInputSchema) ]).optional().nullable(),
  TestCptCode: z.lazy(() => TestCptCodeListRelationFilterSchema).optional(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincListRelationFilterSchema).optional(),
  TestResultLoinc: z.lazy(() => TestResultLoincListRelationFilterSchema).optional()
}).strict());

export const TestCatalogOrderByWithAggregationInputSchema: z.ZodType<Prisma.TestCatalogOrderByWithAggregationInput> = z.object({
  TestId: z.lazy(() => SortOrderSchema).optional(),
  LabId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  href: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  CasandraTestId: z.lazy(() => SortOrderSchema).optional(),
  LabTestId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  TestName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  AlternativeName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  AlternativeName1: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  AlternativeName2: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  AlternativeName3: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  AlternativeName4: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  AlternativeName5: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  TestIncludes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  SpecimenType: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  SpecialInstructions: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Methodology: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  TestDescription: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Diseases: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Probes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ClinicalSignificance: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  SpecimenRequirements: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Volume: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  MinimumVolume: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Container: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Collection: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  StabilityRequirements: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  StorageTransportation: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  PatientPreparation: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  CausesForRejection: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  TestUsage: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  TestLimitations: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  CPTCodes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  NewYorkApproved: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  LevelOfService: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  TurnAroundTime: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  AssayCategory: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ReferenceRanges: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  SetupSchedule: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  AlternativeSpecimen: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  LoincCodesText: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  LoincCodesHTML: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  CreatedAt: z.lazy(() => SortOrderSchema).optional(),
  UpdatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TestCatalogCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TestCatalogAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TestCatalogMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TestCatalogMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TestCatalogSumOrderByAggregateInputSchema).optional()
}).strict();

export const TestCatalogScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TestCatalogScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TestCatalogScalarWhereWithAggregatesInputSchema),z.lazy(() => TestCatalogScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestCatalogScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestCatalogScalarWhereWithAggregatesInputSchema),z.lazy(() => TestCatalogScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  TestId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  LabId: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  href: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  CasandraTestId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  LabTestId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  TestName: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  AlternativeName: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  AlternativeName1: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  AlternativeName2: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  AlternativeName3: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  AlternativeName4: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  AlternativeName5: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  TestIncludes: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  SpecimenType: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  SpecialInstructions: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  Methodology: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  TestDescription: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  Diseases: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  Probes: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  ClinicalSignificance: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  SpecimenRequirements: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  Volume: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  MinimumVolume: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  Container: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  Collection: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  StabilityRequirements: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  StorageTransportation: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  PatientPreparation: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  CausesForRejection: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  TestUsage: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  TestLimitations: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  CPTCodes: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  NewYorkApproved: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  LevelOfService: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  TurnAroundTime: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  AssayCategory: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  ReferenceRanges: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  SetupSchedule: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  AlternativeSpecimen: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  LoincCodesText: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  LoincCodesHTML: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  CreatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.date() ]).optional(),
  UpdatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.date() ]).optional(),
}).strict();

export const TestCptCodeWhereInputSchema: z.ZodType<Prisma.TestCptCodeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TestCptCodeWhereInputSchema),z.lazy(() => TestCptCodeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestCptCodeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestCptCodeWhereInputSchema),z.lazy(() => TestCptCodeWhereInputSchema).array() ]).optional(),
  Id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  TestId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  LabTestId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CptCode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Modifier: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Comments: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CreatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
  UpdatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
  TestCatalog: z.union([ z.lazy(() => TestCatalogRelationFilterSchema),z.lazy(() => TestCatalogWhereInputSchema) ]).optional(),
}).strict();

export const TestCptCodeOrderByWithRelationAndSearchRelevanceInputSchema: z.ZodType<Prisma.TestCptCodeOrderByWithRelationAndSearchRelevanceInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  TestId: z.lazy(() => SortOrderSchema).optional(),
  LabTestId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  CptCode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Modifier: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Comments: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  CreatedAt: z.lazy(() => SortOrderSchema).optional(),
  UpdatedAt: z.lazy(() => SortOrderSchema).optional(),
  TestCatalog: z.lazy(() => TestCatalogOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
  _relevance: z.lazy(() => TestCptCodeOrderByRelevanceInputSchema).optional()
}).strict();

export const TestCptCodeWhereUniqueInputSchema: z.ZodType<Prisma.TestCptCodeWhereUniqueInput> = z.object({
  Id: z.number()
})
.and(z.object({
  Id: z.number().optional(),
  AND: z.union([ z.lazy(() => TestCptCodeWhereInputSchema),z.lazy(() => TestCptCodeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestCptCodeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestCptCodeWhereInputSchema),z.lazy(() => TestCptCodeWhereInputSchema).array() ]).optional(),
  TestId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  LabTestId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CptCode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Modifier: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Comments: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CreatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
  UpdatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
  TestCatalog: z.union([ z.lazy(() => TestCatalogRelationFilterSchema),z.lazy(() => TestCatalogWhereInputSchema) ]).optional(),
}).strict());

export const TestCptCodeOrderByWithAggregationInputSchema: z.ZodType<Prisma.TestCptCodeOrderByWithAggregationInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  TestId: z.lazy(() => SortOrderSchema).optional(),
  LabTestId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  CptCode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Modifier: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Comments: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  CreatedAt: z.lazy(() => SortOrderSchema).optional(),
  UpdatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TestCptCodeCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TestCptCodeAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TestCptCodeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TestCptCodeMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TestCptCodeSumOrderByAggregateInputSchema).optional()
}).strict();

export const TestCptCodeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TestCptCodeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TestCptCodeScalarWhereWithAggregatesInputSchema),z.lazy(() => TestCptCodeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestCptCodeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestCptCodeScalarWhereWithAggregatesInputSchema),z.lazy(() => TestCptCodeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  Id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  TestId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  LabTestId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  CptCode: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  Modifier: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  Comments: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  CreatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.date() ]).optional(),
  UpdatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.date() ]).optional(),
}).strict();

export const TestOrderLoincWhereInputSchema: z.ZodType<Prisma.TestOrderLoincWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TestOrderLoincWhereInputSchema),z.lazy(() => TestOrderLoincWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestOrderLoincWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestOrderLoincWhereInputSchema),z.lazy(() => TestOrderLoincWhereInputSchema).array() ]).optional(),
  Id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  TestId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  LabTestId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  OrderLoinc: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CreatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
  UpdatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
  LOINC: z.union([ z.lazy(() => LOINCNullableRelationFilterSchema),z.lazy(() => LOINCWhereInputSchema) ]).optional().nullable(),
  TestCatalog: z.union([ z.lazy(() => TestCatalogRelationFilterSchema),z.lazy(() => TestCatalogWhereInputSchema) ]).optional(),
}).strict();

export const TestOrderLoincOrderByWithRelationAndSearchRelevanceInputSchema: z.ZodType<Prisma.TestOrderLoincOrderByWithRelationAndSearchRelevanceInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  TestId: z.lazy(() => SortOrderSchema).optional(),
  LabTestId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  OrderLoinc: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  CreatedAt: z.lazy(() => SortOrderSchema).optional(),
  UpdatedAt: z.lazy(() => SortOrderSchema).optional(),
  LOINC: z.lazy(() => LOINCOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
  TestCatalog: z.lazy(() => TestCatalogOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
  _relevance: z.lazy(() => TestOrderLoincOrderByRelevanceInputSchema).optional()
}).strict();

export const TestOrderLoincWhereUniqueInputSchema: z.ZodType<Prisma.TestOrderLoincWhereUniqueInput> = z.union([
  z.object({
    Id: z.number(),
    TestId_OrderLoinc: z.lazy(() => TestOrderLoincTestIdOrderLoincCompoundUniqueInputSchema)
  }),
  z.object({
    Id: z.number(),
  }),
  z.object({
    TestId_OrderLoinc: z.lazy(() => TestOrderLoincTestIdOrderLoincCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  Id: z.number().optional(),
  TestId_OrderLoinc: z.lazy(() => TestOrderLoincTestIdOrderLoincCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => TestOrderLoincWhereInputSchema),z.lazy(() => TestOrderLoincWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestOrderLoincWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestOrderLoincWhereInputSchema),z.lazy(() => TestOrderLoincWhereInputSchema).array() ]).optional(),
  TestId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  LabTestId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  OrderLoinc: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CreatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
  UpdatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
  LOINC: z.union([ z.lazy(() => LOINCNullableRelationFilterSchema),z.lazy(() => LOINCWhereInputSchema) ]).optional().nullable(),
  TestCatalog: z.union([ z.lazy(() => TestCatalogRelationFilterSchema),z.lazy(() => TestCatalogWhereInputSchema) ]).optional(),
}).strict());

export const TestOrderLoincOrderByWithAggregationInputSchema: z.ZodType<Prisma.TestOrderLoincOrderByWithAggregationInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  TestId: z.lazy(() => SortOrderSchema).optional(),
  LabTestId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  OrderLoinc: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  CreatedAt: z.lazy(() => SortOrderSchema).optional(),
  UpdatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TestOrderLoincCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TestOrderLoincAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TestOrderLoincMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TestOrderLoincMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TestOrderLoincSumOrderByAggregateInputSchema).optional()
}).strict();

export const TestOrderLoincScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TestOrderLoincScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TestOrderLoincScalarWhereWithAggregatesInputSchema),z.lazy(() => TestOrderLoincScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestOrderLoincScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestOrderLoincScalarWhereWithAggregatesInputSchema),z.lazy(() => TestOrderLoincScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  Id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  TestId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  LabTestId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  OrderLoinc: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  CreatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.date() ]).optional(),
  UpdatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.date() ]).optional(),
}).strict();

export const TestResultLoincWhereInputSchema: z.ZodType<Prisma.TestResultLoincWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TestResultLoincWhereInputSchema),z.lazy(() => TestResultLoincWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestResultLoincWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestResultLoincWhereInputSchema),z.lazy(() => TestResultLoincWhereInputSchema).array() ]).optional(),
  Id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  TestId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  LabTestId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ResultCode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ResultCodeName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  UofM: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ResultLoinc: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CreatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
  UpdatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
  LOINC: z.union([ z.lazy(() => LOINCNullableRelationFilterSchema),z.lazy(() => LOINCWhereInputSchema) ]).optional().nullable(),
  TestCatalog: z.union([ z.lazy(() => TestCatalogRelationFilterSchema),z.lazy(() => TestCatalogWhereInputSchema) ]).optional(),
}).strict();

export const TestResultLoincOrderByWithRelationAndSearchRelevanceInputSchema: z.ZodType<Prisma.TestResultLoincOrderByWithRelationAndSearchRelevanceInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  TestId: z.lazy(() => SortOrderSchema).optional(),
  LabTestId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ResultCode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ResultCodeName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  UofM: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ResultLoinc: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  CreatedAt: z.lazy(() => SortOrderSchema).optional(),
  UpdatedAt: z.lazy(() => SortOrderSchema).optional(),
  LOINC: z.lazy(() => LOINCOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
  TestCatalog: z.lazy(() => TestCatalogOrderByWithRelationAndSearchRelevanceInputSchema).optional(),
  _relevance: z.lazy(() => TestResultLoincOrderByRelevanceInputSchema).optional()
}).strict();

export const TestResultLoincWhereUniqueInputSchema: z.ZodType<Prisma.TestResultLoincWhereUniqueInput> = z.object({
  Id: z.number()
})
.and(z.object({
  Id: z.number().optional(),
  AND: z.union([ z.lazy(() => TestResultLoincWhereInputSchema),z.lazy(() => TestResultLoincWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestResultLoincWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestResultLoincWhereInputSchema),z.lazy(() => TestResultLoincWhereInputSchema).array() ]).optional(),
  TestId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  LabTestId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ResultCode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ResultCodeName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  UofM: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ResultLoinc: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CreatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
  UpdatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
  LOINC: z.union([ z.lazy(() => LOINCNullableRelationFilterSchema),z.lazy(() => LOINCWhereInputSchema) ]).optional().nullable(),
  TestCatalog: z.union([ z.lazy(() => TestCatalogRelationFilterSchema),z.lazy(() => TestCatalogWhereInputSchema) ]).optional(),
}).strict());

export const TestResultLoincOrderByWithAggregationInputSchema: z.ZodType<Prisma.TestResultLoincOrderByWithAggregationInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  TestId: z.lazy(() => SortOrderSchema).optional(),
  LabTestId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ResultCode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ResultCodeName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  UofM: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ResultLoinc: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  CreatedAt: z.lazy(() => SortOrderSchema).optional(),
  UpdatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TestResultLoincCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TestResultLoincAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TestResultLoincMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TestResultLoincMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TestResultLoincSumOrderByAggregateInputSchema).optional()
}).strict();

export const TestResultLoincScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TestResultLoincScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TestResultLoincScalarWhereWithAggregatesInputSchema),z.lazy(() => TestResultLoincScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestResultLoincScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestResultLoincScalarWhereWithAggregatesInputSchema),z.lazy(() => TestResultLoincScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  Id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  TestId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  LabTestId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  ResultCode: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  ResultCodeName: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  UofM: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  ResultLoinc: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  CreatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.date() ]).optional(),
  UpdatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.date() ]).optional(),
}).strict();

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.date() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Account: z.lazy(() => AccountListRelationFilterSchema).optional(),
  Session: z.lazy(() => SessionListRelationFilterSchema).optional()
}).strict();

export const UserOrderByWithRelationAndSearchRelevanceInputSchema: z.ZodType<Prisma.UserOrderByWithRelationAndSearchRelevanceInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Account: z.lazy(() => AccountOrderByRelationAggregateInputSchema).optional(),
  Session: z.lazy(() => SessionOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => UserOrderByRelevanceInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    email: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.date() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Account: z.lazy(() => AccountListRelationFilterSchema).optional(),
  Session: z.lazy(() => SessionListRelationFilterSchema).optional()
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.date() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const VerificationTokenWhereInputSchema: z.ZodType<Prisma.VerificationTokenWhereInput> = z.object({
  AND: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationTokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  identifier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
}).strict();

export const VerificationTokenOrderByWithRelationAndSearchRelevanceInputSchema: z.ZodType<Prisma.VerificationTokenOrderByWithRelationAndSearchRelevanceInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  _relevance: z.lazy(() => VerificationTokenOrderByRelevanceInputSchema).optional()
}).strict();

export const VerificationTokenWhereUniqueInputSchema: z.ZodType<Prisma.VerificationTokenWhereUniqueInput> = z.union([
  z.object({
    token: z.string(),
    identifier_token: z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInputSchema)
  }),
  z.object({
    token: z.string(),
  }),
  z.object({
    identifier_token: z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  token: z.string().optional(),
  identifier_token: z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationTokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  identifier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
}).strict());

export const VerificationTokenOrderByWithAggregationInputSchema: z.ZodType<Prisma.VerificationTokenOrderByWithAggregationInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => VerificationTokenCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VerificationTokenMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VerificationTokenMinOrderByAggregateInputSchema).optional()
}).strict();

export const VerificationTokenScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.VerificationTokenScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema),z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema),z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  identifier: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.date() ]).optional(),
}).strict();

export const AccountCreateInputSchema: z.ZodType<Prisma.AccountCreateInput> = z.object({
  id: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  User: z.lazy(() => UserCreateNestedOneWithoutAccountInputSchema)
}).strict();

export const AccountUncheckedCreateInputSchema: z.ZodType<Prisma.AccountUncheckedCreateInput> = z.object({
  id: z.string(),
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable()
}).strict();

export const AccountUpdateInputSchema: z.ZodType<Prisma.AccountUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  User: z.lazy(() => UserUpdateOneRequiredWithoutAccountNestedInputSchema).optional()
}).strict();

export const AccountUncheckedUpdateInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountCreateManyInputSchema: z.ZodType<Prisma.AccountCreateManyInput> = z.object({
  id: z.string(),
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable()
}).strict();

export const AccountUpdateManyMutationInputSchema: z.ZodType<Prisma.AccountUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const BIOMARKERCreateInputSchema: z.ZodType<Prisma.BIOMARKERCreateInput> = z.object({
  HGNCId: z.string(),
  HGNCStatus: z.string().optional().nullable(),
  HGNCApprovedSymbol: z.string().optional().nullable(),
  HGNCApprovedName: z.string().optional().nullable(),
  TestBiomarker: z.lazy(() => TestBiomarkerCreateNestedManyWithoutBIOMARKERInputSchema).optional()
}).strict();

export const BIOMARKERUncheckedCreateInputSchema: z.ZodType<Prisma.BIOMARKERUncheckedCreateInput> = z.object({
  HGNCId: z.string(),
  HGNCStatus: z.string().optional().nullable(),
  HGNCApprovedSymbol: z.string().optional().nullable(),
  HGNCApprovedName: z.string().optional().nullable(),
  TestBiomarker: z.lazy(() => TestBiomarkerUncheckedCreateNestedManyWithoutBIOMARKERInputSchema).optional()
}).strict();

export const BIOMARKERUpdateInputSchema: z.ZodType<Prisma.BIOMARKERUpdateInput> = z.object({
  HGNCId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  HGNCStatus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HGNCApprovedSymbol: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HGNCApprovedName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestBiomarker: z.lazy(() => TestBiomarkerUpdateManyWithoutBIOMARKERNestedInputSchema).optional()
}).strict();

export const BIOMARKERUncheckedUpdateInputSchema: z.ZodType<Prisma.BIOMARKERUncheckedUpdateInput> = z.object({
  HGNCId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  HGNCStatus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HGNCApprovedSymbol: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HGNCApprovedName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestBiomarker: z.lazy(() => TestBiomarkerUncheckedUpdateManyWithoutBIOMARKERNestedInputSchema).optional()
}).strict();

export const BIOMARKERCreateManyInputSchema: z.ZodType<Prisma.BIOMARKERCreateManyInput> = z.object({
  HGNCId: z.string(),
  HGNCStatus: z.string().optional().nullable(),
  HGNCApprovedSymbol: z.string().optional().nullable(),
  HGNCApprovedName: z.string().optional().nullable()
}).strict();

export const BIOMARKERUpdateManyMutationInputSchema: z.ZodType<Prisma.BIOMARKERUpdateManyMutationInput> = z.object({
  HGNCId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  HGNCStatus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HGNCApprovedSymbol: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HGNCApprovedName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const BIOMARKERUncheckedUpdateManyInputSchema: z.ZodType<Prisma.BIOMARKERUncheckedUpdateManyInput> = z.object({
  HGNCId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  HGNCStatus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HGNCApprovedSymbol: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HGNCApprovedName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const LOINCCreateInputSchema: z.ZodType<Prisma.LOINCCreateInput> = z.object({
  Loinc_Num: z.string(),
  COMPONENT: z.string().optional().nullable(),
  PROPERTY: z.string().optional().nullable(),
  TIME_ASPCT: z.string().optional().nullable(),
  SYSTEM: z.string().optional().nullable(),
  SCALE_TYP: z.string().optional().nullable(),
  METHOD_TYP: z.string().optional().nullable(),
  CLASS: z.string().optional().nullable(),
  VersionLastChanged: z.string().optional().nullable(),
  CHNG_TYPE: z.string().optional().nullable(),
  DefinitionDescription: z.string().optional().nullable(),
  STATUS: z.string().optional().nullable(),
  CONSUMER_NAME: z.string().optional().nullable(),
  CLASSTYPE: z.number().optional().nullable(),
  FORMULA: z.string().optional().nullable(),
  EXMPL_ANSWERS: z.string().optional().nullable(),
  SURVEY_QUEST_TEXT: z.string().optional().nullable(),
  SURVEY_QUEST_SRC: z.string().optional().nullable(),
  UNITSREQUIRED: z.string().optional().nullable(),
  RELATEDNAMES2: z.string().optional().nullable(),
  SHORTNAME: z.string().optional().nullable(),
  ORDER_OBS: z.string().optional().nullable(),
  HL7_FIELD_SUBFIELD_ID: z.string().optional().nullable(),
  EXTERNAL_COPYRIGHT_NOTICE: z.string().optional().nullable(),
  EXAMPLE_UNITS: z.string().optional().nullable(),
  LONG_COMMON_NAME: z.string().optional().nullable(),
  EXAMPLE_UCUM_UNITS: z.string().optional().nullable(),
  STATUS_REASON: z.string().optional().nullable(),
  STATUS_TEXT: z.string().optional().nullable(),
  CHANGE_REASON_PUBLIC: z.string().optional().nullable(),
  COMMON_TEST_RANK: z.number().optional().nullable(),
  COMMON_ORDER_RANK: z.number().optional().nullable(),
  HL7_ATTACHMENT_STRUCTURE: z.string().optional().nullable(),
  EXTERNAL_COPYRIGHT_LINK: z.string().optional().nullable(),
  PanelType: z.string().optional().nullable(),
  AskAtOrderEntry: z.string().optional().nullable(),
  AssociatedObservations: z.string().optional().nullable(),
  VersionFirstReleased: z.string().optional().nullable(),
  ValidHL7AttachmentRequest: z.string().optional().nullable(),
  DisplayName: z.string().optional().nullable(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincCreateNestedManyWithoutLOINCInputSchema).optional(),
  TestResultLoinc: z.lazy(() => TestResultLoincCreateNestedManyWithoutLOINCInputSchema).optional()
}).strict();

export const LOINCUncheckedCreateInputSchema: z.ZodType<Prisma.LOINCUncheckedCreateInput> = z.object({
  Loinc_Num: z.string(),
  COMPONENT: z.string().optional().nullable(),
  PROPERTY: z.string().optional().nullable(),
  TIME_ASPCT: z.string().optional().nullable(),
  SYSTEM: z.string().optional().nullable(),
  SCALE_TYP: z.string().optional().nullable(),
  METHOD_TYP: z.string().optional().nullable(),
  CLASS: z.string().optional().nullable(),
  VersionLastChanged: z.string().optional().nullable(),
  CHNG_TYPE: z.string().optional().nullable(),
  DefinitionDescription: z.string().optional().nullable(),
  STATUS: z.string().optional().nullable(),
  CONSUMER_NAME: z.string().optional().nullable(),
  CLASSTYPE: z.number().optional().nullable(),
  FORMULA: z.string().optional().nullable(),
  EXMPL_ANSWERS: z.string().optional().nullable(),
  SURVEY_QUEST_TEXT: z.string().optional().nullable(),
  SURVEY_QUEST_SRC: z.string().optional().nullable(),
  UNITSREQUIRED: z.string().optional().nullable(),
  RELATEDNAMES2: z.string().optional().nullable(),
  SHORTNAME: z.string().optional().nullable(),
  ORDER_OBS: z.string().optional().nullable(),
  HL7_FIELD_SUBFIELD_ID: z.string().optional().nullable(),
  EXTERNAL_COPYRIGHT_NOTICE: z.string().optional().nullable(),
  EXAMPLE_UNITS: z.string().optional().nullable(),
  LONG_COMMON_NAME: z.string().optional().nullable(),
  EXAMPLE_UCUM_UNITS: z.string().optional().nullable(),
  STATUS_REASON: z.string().optional().nullable(),
  STATUS_TEXT: z.string().optional().nullable(),
  CHANGE_REASON_PUBLIC: z.string().optional().nullable(),
  COMMON_TEST_RANK: z.number().optional().nullable(),
  COMMON_ORDER_RANK: z.number().optional().nullable(),
  HL7_ATTACHMENT_STRUCTURE: z.string().optional().nullable(),
  EXTERNAL_COPYRIGHT_LINK: z.string().optional().nullable(),
  PanelType: z.string().optional().nullable(),
  AskAtOrderEntry: z.string().optional().nullable(),
  AssociatedObservations: z.string().optional().nullable(),
  VersionFirstReleased: z.string().optional().nullable(),
  ValidHL7AttachmentRequest: z.string().optional().nullable(),
  DisplayName: z.string().optional().nullable(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincUncheckedCreateNestedManyWithoutLOINCInputSchema).optional(),
  TestResultLoinc: z.lazy(() => TestResultLoincUncheckedCreateNestedManyWithoutLOINCInputSchema).optional()
}).strict();

export const LOINCUpdateInputSchema: z.ZodType<Prisma.LOINCUpdateInput> = z.object({
  Loinc_Num: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  COMPONENT: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  PROPERTY: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TIME_ASPCT: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SYSTEM: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SCALE_TYP: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  METHOD_TYP: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CLASS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  VersionLastChanged: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CHNG_TYPE: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  DefinitionDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  STATUS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CONSUMER_NAME: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CLASSTYPE: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  FORMULA: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXMPL_ANSWERS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SURVEY_QUEST_TEXT: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SURVEY_QUEST_SRC: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  UNITSREQUIRED: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  RELATEDNAMES2: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SHORTNAME: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ORDER_OBS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HL7_FIELD_SUBFIELD_ID: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXTERNAL_COPYRIGHT_NOTICE: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXAMPLE_UNITS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LONG_COMMON_NAME: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXAMPLE_UCUM_UNITS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  STATUS_REASON: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  STATUS_TEXT: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CHANGE_REASON_PUBLIC: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  COMMON_TEST_RANK: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  COMMON_ORDER_RANK: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HL7_ATTACHMENT_STRUCTURE: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXTERNAL_COPYRIGHT_LINK: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  PanelType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AskAtOrderEntry: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AssociatedObservations: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  VersionFirstReleased: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ValidHL7AttachmentRequest: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  DisplayName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincUpdateManyWithoutLOINCNestedInputSchema).optional(),
  TestResultLoinc: z.lazy(() => TestResultLoincUpdateManyWithoutLOINCNestedInputSchema).optional()
}).strict();

export const LOINCUncheckedUpdateInputSchema: z.ZodType<Prisma.LOINCUncheckedUpdateInput> = z.object({
  Loinc_Num: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  COMPONENT: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  PROPERTY: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TIME_ASPCT: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SYSTEM: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SCALE_TYP: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  METHOD_TYP: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CLASS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  VersionLastChanged: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CHNG_TYPE: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  DefinitionDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  STATUS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CONSUMER_NAME: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CLASSTYPE: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  FORMULA: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXMPL_ANSWERS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SURVEY_QUEST_TEXT: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SURVEY_QUEST_SRC: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  UNITSREQUIRED: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  RELATEDNAMES2: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SHORTNAME: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ORDER_OBS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HL7_FIELD_SUBFIELD_ID: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXTERNAL_COPYRIGHT_NOTICE: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXAMPLE_UNITS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LONG_COMMON_NAME: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXAMPLE_UCUM_UNITS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  STATUS_REASON: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  STATUS_TEXT: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CHANGE_REASON_PUBLIC: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  COMMON_TEST_RANK: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  COMMON_ORDER_RANK: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HL7_ATTACHMENT_STRUCTURE: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXTERNAL_COPYRIGHT_LINK: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  PanelType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AskAtOrderEntry: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AssociatedObservations: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  VersionFirstReleased: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ValidHL7AttachmentRequest: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  DisplayName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincUncheckedUpdateManyWithoutLOINCNestedInputSchema).optional(),
  TestResultLoinc: z.lazy(() => TestResultLoincUncheckedUpdateManyWithoutLOINCNestedInputSchema).optional()
}).strict();

export const LOINCCreateManyInputSchema: z.ZodType<Prisma.LOINCCreateManyInput> = z.object({
  Loinc_Num: z.string(),
  COMPONENT: z.string().optional().nullable(),
  PROPERTY: z.string().optional().nullable(),
  TIME_ASPCT: z.string().optional().nullable(),
  SYSTEM: z.string().optional().nullable(),
  SCALE_TYP: z.string().optional().nullable(),
  METHOD_TYP: z.string().optional().nullable(),
  CLASS: z.string().optional().nullable(),
  VersionLastChanged: z.string().optional().nullable(),
  CHNG_TYPE: z.string().optional().nullable(),
  DefinitionDescription: z.string().optional().nullable(),
  STATUS: z.string().optional().nullable(),
  CONSUMER_NAME: z.string().optional().nullable(),
  CLASSTYPE: z.number().optional().nullable(),
  FORMULA: z.string().optional().nullable(),
  EXMPL_ANSWERS: z.string().optional().nullable(),
  SURVEY_QUEST_TEXT: z.string().optional().nullable(),
  SURVEY_QUEST_SRC: z.string().optional().nullable(),
  UNITSREQUIRED: z.string().optional().nullable(),
  RELATEDNAMES2: z.string().optional().nullable(),
  SHORTNAME: z.string().optional().nullable(),
  ORDER_OBS: z.string().optional().nullable(),
  HL7_FIELD_SUBFIELD_ID: z.string().optional().nullable(),
  EXTERNAL_COPYRIGHT_NOTICE: z.string().optional().nullable(),
  EXAMPLE_UNITS: z.string().optional().nullable(),
  LONG_COMMON_NAME: z.string().optional().nullable(),
  EXAMPLE_UCUM_UNITS: z.string().optional().nullable(),
  STATUS_REASON: z.string().optional().nullable(),
  STATUS_TEXT: z.string().optional().nullable(),
  CHANGE_REASON_PUBLIC: z.string().optional().nullable(),
  COMMON_TEST_RANK: z.number().optional().nullable(),
  COMMON_ORDER_RANK: z.number().optional().nullable(),
  HL7_ATTACHMENT_STRUCTURE: z.string().optional().nullable(),
  EXTERNAL_COPYRIGHT_LINK: z.string().optional().nullable(),
  PanelType: z.string().optional().nullable(),
  AskAtOrderEntry: z.string().optional().nullable(),
  AssociatedObservations: z.string().optional().nullable(),
  VersionFirstReleased: z.string().optional().nullable(),
  ValidHL7AttachmentRequest: z.string().optional().nullable(),
  DisplayName: z.string().optional().nullable()
}).strict();

export const LOINCUpdateManyMutationInputSchema: z.ZodType<Prisma.LOINCUpdateManyMutationInput> = z.object({
  Loinc_Num: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  COMPONENT: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  PROPERTY: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TIME_ASPCT: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SYSTEM: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SCALE_TYP: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  METHOD_TYP: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CLASS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  VersionLastChanged: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CHNG_TYPE: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  DefinitionDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  STATUS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CONSUMER_NAME: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CLASSTYPE: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  FORMULA: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXMPL_ANSWERS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SURVEY_QUEST_TEXT: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SURVEY_QUEST_SRC: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  UNITSREQUIRED: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  RELATEDNAMES2: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SHORTNAME: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ORDER_OBS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HL7_FIELD_SUBFIELD_ID: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXTERNAL_COPYRIGHT_NOTICE: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXAMPLE_UNITS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LONG_COMMON_NAME: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXAMPLE_UCUM_UNITS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  STATUS_REASON: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  STATUS_TEXT: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CHANGE_REASON_PUBLIC: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  COMMON_TEST_RANK: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  COMMON_ORDER_RANK: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HL7_ATTACHMENT_STRUCTURE: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXTERNAL_COPYRIGHT_LINK: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  PanelType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AskAtOrderEntry: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AssociatedObservations: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  VersionFirstReleased: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ValidHL7AttachmentRequest: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  DisplayName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const LOINCUncheckedUpdateManyInputSchema: z.ZodType<Prisma.LOINCUncheckedUpdateManyInput> = z.object({
  Loinc_Num: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  COMPONENT: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  PROPERTY: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TIME_ASPCT: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SYSTEM: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SCALE_TYP: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  METHOD_TYP: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CLASS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  VersionLastChanged: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CHNG_TYPE: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  DefinitionDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  STATUS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CONSUMER_NAME: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CLASSTYPE: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  FORMULA: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXMPL_ANSWERS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SURVEY_QUEST_TEXT: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SURVEY_QUEST_SRC: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  UNITSREQUIRED: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  RELATEDNAMES2: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SHORTNAME: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ORDER_OBS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HL7_FIELD_SUBFIELD_ID: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXTERNAL_COPYRIGHT_NOTICE: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXAMPLE_UNITS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LONG_COMMON_NAME: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXAMPLE_UCUM_UNITS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  STATUS_REASON: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  STATUS_TEXT: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CHANGE_REASON_PUBLIC: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  COMMON_TEST_RANK: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  COMMON_ORDER_RANK: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HL7_ATTACHMENT_STRUCTURE: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXTERNAL_COPYRIGHT_LINK: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  PanelType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AskAtOrderEntry: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AssociatedObservations: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  VersionFirstReleased: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ValidHL7AttachmentRequest: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  DisplayName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const LabCreateInputSchema: z.ZodType<Prisma.LabCreateInput> = z.object({
  LabName: z.string().optional().nullable(),
  LabCode: z.string().optional().nullable(),
  Address: z.string().optional().nullable(),
  City: z.string().optional().nullable(),
  State: z.string().optional().nullable(),
  Zip: z.string().optional().nullable(),
  TestCatalog: z.lazy(() => TestCatalogCreateNestedManyWithoutLabInputSchema).optional()
}).strict();

export const LabUncheckedCreateInputSchema: z.ZodType<Prisma.LabUncheckedCreateInput> = z.object({
  LabId: z.number().optional(),
  LabName: z.string().optional().nullable(),
  LabCode: z.string().optional().nullable(),
  Address: z.string().optional().nullable(),
  City: z.string().optional().nullable(),
  State: z.string().optional().nullable(),
  Zip: z.string().optional().nullable(),
  TestCatalog: z.lazy(() => TestCatalogUncheckedCreateNestedManyWithoutLabInputSchema).optional()
}).strict();

export const LabUpdateInputSchema: z.ZodType<Prisma.LabUpdateInput> = z.object({
  LabName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LabCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  City: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  State: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Zip: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestCatalog: z.lazy(() => TestCatalogUpdateManyWithoutLabNestedInputSchema).optional()
}).strict();

export const LabUncheckedUpdateInputSchema: z.ZodType<Prisma.LabUncheckedUpdateInput> = z.object({
  LabId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  LabName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LabCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  City: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  State: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Zip: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestCatalog: z.lazy(() => TestCatalogUncheckedUpdateManyWithoutLabNestedInputSchema).optional()
}).strict();

export const LabCreateManyInputSchema: z.ZodType<Prisma.LabCreateManyInput> = z.object({
  LabId: z.number().optional(),
  LabName: z.string().optional().nullable(),
  LabCode: z.string().optional().nullable(),
  Address: z.string().optional().nullable(),
  City: z.string().optional().nullable(),
  State: z.string().optional().nullable(),
  Zip: z.string().optional().nullable()
}).strict();

export const LabUpdateManyMutationInputSchema: z.ZodType<Prisma.LabUpdateManyMutationInput> = z.object({
  LabName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LabCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  City: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  State: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Zip: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const LabUncheckedUpdateManyInputSchema: z.ZodType<Prisma.LabUncheckedUpdateManyInput> = z.object({
  LabId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  LabName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LabCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  City: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  State: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Zip: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const LoincComponentHierarchyCreateInputSchema: z.ZodType<Prisma.LoincComponentHierarchyCreateInput> = z.object({
  Id: z.bigint(),
  ParentId: z.bigint(),
  Level: z.number(),
  Code: z.string(),
  Sequence: z.string(),
  CodeText: z.string(),
  Component: z.string(),
  Property: z.string(),
  Timing: z.string(),
  Scale: z.string(),
  Method: z.string()
}).strict();

export const LoincComponentHierarchyUncheckedCreateInputSchema: z.ZodType<Prisma.LoincComponentHierarchyUncheckedCreateInput> = z.object({
  Id: z.bigint(),
  ParentId: z.bigint(),
  Level: z.number(),
  Code: z.string(),
  Sequence: z.string(),
  CodeText: z.string(),
  Component: z.string(),
  Property: z.string(),
  Timing: z.string(),
  Scale: z.string(),
  Method: z.string()
}).strict();

export const LoincComponentHierarchyUpdateInputSchema: z.ZodType<Prisma.LoincComponentHierarchyUpdateInput> = z.object({
  Id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  ParentId: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  Level: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Sequence: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  CodeText: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Component: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Property: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Timing: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Scale: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Method: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LoincComponentHierarchyUncheckedUpdateInputSchema: z.ZodType<Prisma.LoincComponentHierarchyUncheckedUpdateInput> = z.object({
  Id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  ParentId: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  Level: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Sequence: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  CodeText: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Component: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Property: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Timing: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Scale: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Method: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LoincComponentHierarchyCreateManyInputSchema: z.ZodType<Prisma.LoincComponentHierarchyCreateManyInput> = z.object({
  Id: z.bigint(),
  ParentId: z.bigint(),
  Level: z.number(),
  Code: z.string(),
  Sequence: z.string(),
  CodeText: z.string(),
  Component: z.string(),
  Property: z.string(),
  Timing: z.string(),
  Scale: z.string(),
  Method: z.string()
}).strict();

export const LoincComponentHierarchyUpdateManyMutationInputSchema: z.ZodType<Prisma.LoincComponentHierarchyUpdateManyMutationInput> = z.object({
  Id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  ParentId: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  Level: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Sequence: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  CodeText: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Component: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Property: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Timing: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Scale: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Method: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LoincComponentHierarchyUncheckedUpdateManyInputSchema: z.ZodType<Prisma.LoincComponentHierarchyUncheckedUpdateManyInput> = z.object({
  Id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  ParentId: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  Level: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Sequence: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  CodeText: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Component: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Property: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Timing: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Scale: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Method: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LoincPanelHierarchyCreateInputSchema: z.ZodType<Prisma.LoincPanelHierarchyCreateInput> = z.object({
  Id: z.number(),
  ParentId: z.number(),
  Level: z.number(),
  Code: z.string(),
  Sequence: z.string(),
  CodeText: z.string(),
  Component: z.string(),
  Property: z.string(),
  Timing: z.string(),
  Scale: z.string(),
  Method: z.string()
}).strict();

export const LoincPanelHierarchyUncheckedCreateInputSchema: z.ZodType<Prisma.LoincPanelHierarchyUncheckedCreateInput> = z.object({
  Id: z.number(),
  ParentId: z.number(),
  Level: z.number(),
  Code: z.string(),
  Sequence: z.string(),
  CodeText: z.string(),
  Component: z.string(),
  Property: z.string(),
  Timing: z.string(),
  Scale: z.string(),
  Method: z.string()
}).strict();

export const LoincPanelHierarchyUpdateInputSchema: z.ZodType<Prisma.LoincPanelHierarchyUpdateInput> = z.object({
  Id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ParentId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Level: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Sequence: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  CodeText: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Component: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Property: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Timing: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Scale: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Method: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LoincPanelHierarchyUncheckedUpdateInputSchema: z.ZodType<Prisma.LoincPanelHierarchyUncheckedUpdateInput> = z.object({
  Id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ParentId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Level: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Sequence: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  CodeText: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Component: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Property: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Timing: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Scale: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Method: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LoincPanelHierarchyCreateManyInputSchema: z.ZodType<Prisma.LoincPanelHierarchyCreateManyInput> = z.object({
  Id: z.number(),
  ParentId: z.number(),
  Level: z.number(),
  Code: z.string(),
  Sequence: z.string(),
  CodeText: z.string(),
  Component: z.string(),
  Property: z.string(),
  Timing: z.string(),
  Scale: z.string(),
  Method: z.string()
}).strict();

export const LoincPanelHierarchyUpdateManyMutationInputSchema: z.ZodType<Prisma.LoincPanelHierarchyUpdateManyMutationInput> = z.object({
  Id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ParentId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Level: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Sequence: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  CodeText: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Component: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Property: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Timing: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Scale: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Method: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LoincPanelHierarchyUncheckedUpdateManyInputSchema: z.ZodType<Prisma.LoincPanelHierarchyUncheckedUpdateManyInput> = z.object({
  Id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  ParentId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Level: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Sequence: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  CodeText: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Component: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Property: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Timing: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Scale: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Method: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LoincUniveralLabOrdersCreateInputSchema: z.ZodType<Prisma.LoincUniveralLabOrdersCreateInput> = z.object({
  Loinc_Num: z.string(),
  Long_Common_Name: z.string().optional().nullable(),
  ORDER_OBS: z.string().optional().nullable()
}).strict();

export const LoincUniveralLabOrdersUncheckedCreateInputSchema: z.ZodType<Prisma.LoincUniveralLabOrdersUncheckedCreateInput> = z.object({
  Loinc_Num: z.string(),
  Long_Common_Name: z.string().optional().nullable(),
  ORDER_OBS: z.string().optional().nullable()
}).strict();

export const LoincUniveralLabOrdersUpdateInputSchema: z.ZodType<Prisma.LoincUniveralLabOrdersUpdateInput> = z.object({
  Loinc_Num: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Long_Common_Name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ORDER_OBS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const LoincUniveralLabOrdersUncheckedUpdateInputSchema: z.ZodType<Prisma.LoincUniveralLabOrdersUncheckedUpdateInput> = z.object({
  Loinc_Num: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Long_Common_Name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ORDER_OBS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const LoincUniveralLabOrdersCreateManyInputSchema: z.ZodType<Prisma.LoincUniveralLabOrdersCreateManyInput> = z.object({
  Loinc_Num: z.string(),
  Long_Common_Name: z.string().optional().nullable(),
  ORDER_OBS: z.string().optional().nullable()
}).strict();

export const LoincUniveralLabOrdersUpdateManyMutationInputSchema: z.ZodType<Prisma.LoincUniveralLabOrdersUpdateManyMutationInput> = z.object({
  Loinc_Num: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Long_Common_Name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ORDER_OBS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const LoincUniveralLabOrdersUncheckedUpdateManyInputSchema: z.ZodType<Prisma.LoincUniveralLabOrdersUncheckedUpdateManyInput> = z.object({
  Loinc_Num: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Long_Common_Name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ORDER_OBS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PostCreateInputSchema: z.ZodType<Prisma.PostCreateInput> = z.object({
  name: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date()
}).strict();

export const PostUncheckedCreateInputSchema: z.ZodType<Prisma.PostUncheckedCreateInput> = z.object({
  id: z.number().optional(),
  name: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date()
}).strict();

export const PostUpdateInputSchema: z.ZodType<Prisma.PostUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PostUncheckedUpdateInputSchema: z.ZodType<Prisma.PostUncheckedUpdateInput> = z.object({
  id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PostCreateManyInputSchema: z.ZodType<Prisma.PostCreateManyInput> = z.object({
  id: z.number().optional(),
  name: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date()
}).strict();

export const PostUpdateManyMutationInputSchema: z.ZodType<Prisma.PostUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PostUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PostUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionCreateInputSchema: z.ZodType<Prisma.SessionCreateInput> = z.object({
  id: z.string(),
  sessionToken: z.string(),
  expires: z.date(),
  User: z.lazy(() => UserCreateNestedOneWithoutSessionInputSchema)
}).strict();

export const SessionUncheckedCreateInputSchema: z.ZodType<Prisma.SessionUncheckedCreateInput> = z.object({
  id: z.string(),
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.date()
}).strict();

export const SessionUpdateInputSchema: z.ZodType<Prisma.SessionUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  User: z.lazy(() => UserUpdateOneRequiredWithoutSessionNestedInputSchema).optional()
}).strict();

export const SessionUncheckedUpdateInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionCreateManyInputSchema: z.ZodType<Prisma.SessionCreateManyInput> = z.object({
  id: z.string(),
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.date()
}).strict();

export const SessionUpdateManyMutationInputSchema: z.ZodType<Prisma.SessionUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestBiomarkerCreateInputSchema: z.ZodType<Prisma.TestBiomarkerCreateInput> = z.object({
  LabTestId: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional(),
  BIOMARKER: z.lazy(() => BIOMARKERCreateNestedOneWithoutTestBiomarkerInputSchema),
  TestCatalog: z.lazy(() => TestCatalogCreateNestedOneWithoutTestBiomarkerInputSchema)
}).strict();

export const TestBiomarkerUncheckedCreateInputSchema: z.ZodType<Prisma.TestBiomarkerUncheckedCreateInput> = z.object({
  Id: z.number().optional(),
  TestId: z.number(),
  LabTestId: z.string().optional().nullable(),
  HGNCId: z.string(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional()
}).strict();

export const TestBiomarkerUpdateInputSchema: z.ZodType<Prisma.TestBiomarkerUpdateInput> = z.object({
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  BIOMARKER: z.lazy(() => BIOMARKERUpdateOneRequiredWithoutTestBiomarkerNestedInputSchema).optional(),
  TestCatalog: z.lazy(() => TestCatalogUpdateOneRequiredWithoutTestBiomarkerNestedInputSchema).optional()
}).strict();

export const TestBiomarkerUncheckedUpdateInputSchema: z.ZodType<Prisma.TestBiomarkerUncheckedUpdateInput> = z.object({
  Id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  TestId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HGNCId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestBiomarkerCreateManyInputSchema: z.ZodType<Prisma.TestBiomarkerCreateManyInput> = z.object({
  Id: z.number().optional(),
  TestId: z.number(),
  LabTestId: z.string().optional().nullable(),
  HGNCId: z.string(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional()
}).strict();

export const TestBiomarkerUpdateManyMutationInputSchema: z.ZodType<Prisma.TestBiomarkerUpdateManyMutationInput> = z.object({
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestBiomarkerUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TestBiomarkerUncheckedUpdateManyInput> = z.object({
  Id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  TestId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HGNCId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestCatalogCreateInputSchema: z.ZodType<Prisma.TestCatalogCreateInput> = z.object({
  href: z.string().optional().nullable(),
  CasandraTestId: z.string(),
  LabTestId: z.string().optional().nullable(),
  TestName: z.string().optional().nullable(),
  AlternativeName: z.string().optional().nullable(),
  AlternativeName1: z.string().optional().nullable(),
  AlternativeName2: z.string().optional().nullable(),
  AlternativeName3: z.string().optional().nullable(),
  AlternativeName4: z.string().optional().nullable(),
  AlternativeName5: z.string().optional().nullable(),
  TestIncludes: z.string().optional().nullable(),
  SpecimenType: z.string().optional().nullable(),
  SpecialInstructions: z.string().optional().nullable(),
  Methodology: z.string().optional().nullable(),
  TestDescription: z.string().optional().nullable(),
  Diseases: z.string().optional().nullable(),
  Probes: z.string().optional().nullable(),
  ClinicalSignificance: z.string().optional().nullable(),
  SpecimenRequirements: z.string().optional().nullable(),
  Volume: z.string().optional().nullable(),
  MinimumVolume: z.string().optional().nullable(),
  Container: z.string().optional().nullable(),
  Collection: z.string().optional().nullable(),
  StabilityRequirements: z.string().optional().nullable(),
  StorageTransportation: z.string().optional().nullable(),
  PatientPreparation: z.string().optional().nullable(),
  CausesForRejection: z.string().optional().nullable(),
  TestUsage: z.string().optional().nullable(),
  TestLimitations: z.string().optional().nullable(),
  CPTCodes: z.string().optional().nullable(),
  NewYorkApproved: z.string().optional().nullable(),
  LevelOfService: z.string().optional().nullable(),
  TurnAroundTime: z.string().optional().nullable(),
  AssayCategory: z.string().optional().nullable(),
  ReferenceRanges: z.string().optional().nullable(),
  SetupSchedule: z.string().optional().nullable(),
  AlternativeSpecimen: z.string().optional().nullable(),
  LoincCodesText: z.string().optional().nullable(),
  LoincCodesHTML: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional(),
  TestBiomarker: z.lazy(() => TestBiomarkerCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  Lab: z.lazy(() => LabCreateNestedOneWithoutTestCatalogInputSchema).optional(),
  TestCptCode: z.lazy(() => TestCptCodeCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  TestResultLoinc: z.lazy(() => TestResultLoincCreateNestedManyWithoutTestCatalogInputSchema).optional()
}).strict();

export const TestCatalogUncheckedCreateInputSchema: z.ZodType<Prisma.TestCatalogUncheckedCreateInput> = z.object({
  TestId: z.number().optional(),
  LabId: z.number().optional().nullable(),
  href: z.string().optional().nullable(),
  CasandraTestId: z.string(),
  LabTestId: z.string().optional().nullable(),
  TestName: z.string().optional().nullable(),
  AlternativeName: z.string().optional().nullable(),
  AlternativeName1: z.string().optional().nullable(),
  AlternativeName2: z.string().optional().nullable(),
  AlternativeName3: z.string().optional().nullable(),
  AlternativeName4: z.string().optional().nullable(),
  AlternativeName5: z.string().optional().nullable(),
  TestIncludes: z.string().optional().nullable(),
  SpecimenType: z.string().optional().nullable(),
  SpecialInstructions: z.string().optional().nullable(),
  Methodology: z.string().optional().nullable(),
  TestDescription: z.string().optional().nullable(),
  Diseases: z.string().optional().nullable(),
  Probes: z.string().optional().nullable(),
  ClinicalSignificance: z.string().optional().nullable(),
  SpecimenRequirements: z.string().optional().nullable(),
  Volume: z.string().optional().nullable(),
  MinimumVolume: z.string().optional().nullable(),
  Container: z.string().optional().nullable(),
  Collection: z.string().optional().nullable(),
  StabilityRequirements: z.string().optional().nullable(),
  StorageTransportation: z.string().optional().nullable(),
  PatientPreparation: z.string().optional().nullable(),
  CausesForRejection: z.string().optional().nullable(),
  TestUsage: z.string().optional().nullable(),
  TestLimitations: z.string().optional().nullable(),
  CPTCodes: z.string().optional().nullable(),
  NewYorkApproved: z.string().optional().nullable(),
  LevelOfService: z.string().optional().nullable(),
  TurnAroundTime: z.string().optional().nullable(),
  AssayCategory: z.string().optional().nullable(),
  ReferenceRanges: z.string().optional().nullable(),
  SetupSchedule: z.string().optional().nullable(),
  AlternativeSpecimen: z.string().optional().nullable(),
  LoincCodesText: z.string().optional().nullable(),
  LoincCodesHTML: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional(),
  TestBiomarker: z.lazy(() => TestBiomarkerUncheckedCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  TestCptCode: z.lazy(() => TestCptCodeUncheckedCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincUncheckedCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  TestResultLoinc: z.lazy(() => TestResultLoincUncheckedCreateNestedManyWithoutTestCatalogInputSchema).optional()
}).strict();

export const TestCatalogUpdateInputSchema: z.ZodType<Prisma.TestCatalogUpdateInput> = z.object({
  href: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CasandraTestId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName1: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName2: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName3: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName4: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName5: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestIncludes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecimenType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecialInstructions: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Methodology: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Diseases: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Probes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ClinicalSignificance: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecimenRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Volume: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  MinimumVolume: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Container: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Collection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  StabilityRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  StorageTransportation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  PatientPreparation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CausesForRejection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestLimitations: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CPTCodes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NewYorkApproved: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LevelOfService: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TurnAroundTime: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AssayCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ReferenceRanges: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SetupSchedule: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeSpecimen: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LoincCodesText: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LoincCodesHTML: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  TestBiomarker: z.lazy(() => TestBiomarkerUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  Lab: z.lazy(() => LabUpdateOneWithoutTestCatalogNestedInputSchema).optional(),
  TestCptCode: z.lazy(() => TestCptCodeUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  TestResultLoinc: z.lazy(() => TestResultLoincUpdateManyWithoutTestCatalogNestedInputSchema).optional()
}).strict();

export const TestCatalogUncheckedUpdateInputSchema: z.ZodType<Prisma.TestCatalogUncheckedUpdateInput> = z.object({
  TestId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  LabId: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  href: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CasandraTestId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName1: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName2: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName3: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName4: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName5: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestIncludes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecimenType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecialInstructions: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Methodology: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Diseases: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Probes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ClinicalSignificance: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecimenRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Volume: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  MinimumVolume: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Container: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Collection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  StabilityRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  StorageTransportation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  PatientPreparation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CausesForRejection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestLimitations: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CPTCodes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NewYorkApproved: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LevelOfService: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TurnAroundTime: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AssayCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ReferenceRanges: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SetupSchedule: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeSpecimen: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LoincCodesText: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LoincCodesHTML: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  TestBiomarker: z.lazy(() => TestBiomarkerUncheckedUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  TestCptCode: z.lazy(() => TestCptCodeUncheckedUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincUncheckedUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  TestResultLoinc: z.lazy(() => TestResultLoincUncheckedUpdateManyWithoutTestCatalogNestedInputSchema).optional()
}).strict();

export const TestCatalogCreateManyInputSchema: z.ZodType<Prisma.TestCatalogCreateManyInput> = z.object({
  TestId: z.number().optional(),
  LabId: z.number().optional().nullable(),
  href: z.string().optional().nullable(),
  CasandraTestId: z.string(),
  LabTestId: z.string().optional().nullable(),
  TestName: z.string().optional().nullable(),
  AlternativeName: z.string().optional().nullable(),
  AlternativeName1: z.string().optional().nullable(),
  AlternativeName2: z.string().optional().nullable(),
  AlternativeName3: z.string().optional().nullable(),
  AlternativeName4: z.string().optional().nullable(),
  AlternativeName5: z.string().optional().nullable(),
  TestIncludes: z.string().optional().nullable(),
  SpecimenType: z.string().optional().nullable(),
  SpecialInstructions: z.string().optional().nullable(),
  Methodology: z.string().optional().nullable(),
  TestDescription: z.string().optional().nullable(),
  Diseases: z.string().optional().nullable(),
  Probes: z.string().optional().nullable(),
  ClinicalSignificance: z.string().optional().nullable(),
  SpecimenRequirements: z.string().optional().nullable(),
  Volume: z.string().optional().nullable(),
  MinimumVolume: z.string().optional().nullable(),
  Container: z.string().optional().nullable(),
  Collection: z.string().optional().nullable(),
  StabilityRequirements: z.string().optional().nullable(),
  StorageTransportation: z.string().optional().nullable(),
  PatientPreparation: z.string().optional().nullable(),
  CausesForRejection: z.string().optional().nullable(),
  TestUsage: z.string().optional().nullable(),
  TestLimitations: z.string().optional().nullable(),
  CPTCodes: z.string().optional().nullable(),
  NewYorkApproved: z.string().optional().nullable(),
  LevelOfService: z.string().optional().nullable(),
  TurnAroundTime: z.string().optional().nullable(),
  AssayCategory: z.string().optional().nullable(),
  ReferenceRanges: z.string().optional().nullable(),
  SetupSchedule: z.string().optional().nullable(),
  AlternativeSpecimen: z.string().optional().nullable(),
  LoincCodesText: z.string().optional().nullable(),
  LoincCodesHTML: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional()
}).strict();

export const TestCatalogUpdateManyMutationInputSchema: z.ZodType<Prisma.TestCatalogUpdateManyMutationInput> = z.object({
  href: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CasandraTestId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName1: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName2: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName3: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName4: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName5: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestIncludes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecimenType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecialInstructions: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Methodology: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Diseases: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Probes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ClinicalSignificance: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecimenRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Volume: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  MinimumVolume: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Container: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Collection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  StabilityRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  StorageTransportation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  PatientPreparation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CausesForRejection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestLimitations: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CPTCodes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NewYorkApproved: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LevelOfService: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TurnAroundTime: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AssayCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ReferenceRanges: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SetupSchedule: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeSpecimen: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LoincCodesText: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LoincCodesHTML: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestCatalogUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TestCatalogUncheckedUpdateManyInput> = z.object({
  TestId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  LabId: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  href: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CasandraTestId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName1: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName2: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName3: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName4: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName5: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestIncludes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecimenType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecialInstructions: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Methodology: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Diseases: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Probes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ClinicalSignificance: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecimenRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Volume: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  MinimumVolume: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Container: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Collection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  StabilityRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  StorageTransportation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  PatientPreparation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CausesForRejection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestLimitations: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CPTCodes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NewYorkApproved: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LevelOfService: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TurnAroundTime: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AssayCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ReferenceRanges: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SetupSchedule: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeSpecimen: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LoincCodesText: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LoincCodesHTML: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestCptCodeCreateInputSchema: z.ZodType<Prisma.TestCptCodeCreateInput> = z.object({
  LabTestId: z.string().optional().nullable(),
  CptCode: z.string().optional().nullable(),
  Modifier: z.string().optional().nullable(),
  Comments: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional(),
  TestCatalog: z.lazy(() => TestCatalogCreateNestedOneWithoutTestCptCodeInputSchema)
}).strict();

export const TestCptCodeUncheckedCreateInputSchema: z.ZodType<Prisma.TestCptCodeUncheckedCreateInput> = z.object({
  Id: z.number().optional(),
  TestId: z.number(),
  LabTestId: z.string().optional().nullable(),
  CptCode: z.string().optional().nullable(),
  Modifier: z.string().optional().nullable(),
  Comments: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional()
}).strict();

export const TestCptCodeUpdateInputSchema: z.ZodType<Prisma.TestCptCodeUpdateInput> = z.object({
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CptCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Modifier: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  TestCatalog: z.lazy(() => TestCatalogUpdateOneRequiredWithoutTestCptCodeNestedInputSchema).optional()
}).strict();

export const TestCptCodeUncheckedUpdateInputSchema: z.ZodType<Prisma.TestCptCodeUncheckedUpdateInput> = z.object({
  Id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  TestId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CptCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Modifier: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestCptCodeCreateManyInputSchema: z.ZodType<Prisma.TestCptCodeCreateManyInput> = z.object({
  Id: z.number().optional(),
  TestId: z.number(),
  LabTestId: z.string().optional().nullable(),
  CptCode: z.string().optional().nullable(),
  Modifier: z.string().optional().nullable(),
  Comments: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional()
}).strict();

export const TestCptCodeUpdateManyMutationInputSchema: z.ZodType<Prisma.TestCptCodeUpdateManyMutationInput> = z.object({
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CptCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Modifier: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestCptCodeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TestCptCodeUncheckedUpdateManyInput> = z.object({
  Id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  TestId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CptCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Modifier: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestOrderLoincCreateInputSchema: z.ZodType<Prisma.TestOrderLoincCreateInput> = z.object({
  LabTestId: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional(),
  LOINC: z.lazy(() => LOINCCreateNestedOneWithoutTestOrderLoincInputSchema).optional(),
  TestCatalog: z.lazy(() => TestCatalogCreateNestedOneWithoutTestOrderLoincInputSchema)
}).strict();

export const TestOrderLoincUncheckedCreateInputSchema: z.ZodType<Prisma.TestOrderLoincUncheckedCreateInput> = z.object({
  Id: z.number().optional(),
  TestId: z.number(),
  LabTestId: z.string().optional().nullable(),
  OrderLoinc: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional()
}).strict();

export const TestOrderLoincUpdateInputSchema: z.ZodType<Prisma.TestOrderLoincUpdateInput> = z.object({
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  LOINC: z.lazy(() => LOINCUpdateOneWithoutTestOrderLoincNestedInputSchema).optional(),
  TestCatalog: z.lazy(() => TestCatalogUpdateOneRequiredWithoutTestOrderLoincNestedInputSchema).optional()
}).strict();

export const TestOrderLoincUncheckedUpdateInputSchema: z.ZodType<Prisma.TestOrderLoincUncheckedUpdateInput> = z.object({
  Id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  TestId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  OrderLoinc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestOrderLoincCreateManyInputSchema: z.ZodType<Prisma.TestOrderLoincCreateManyInput> = z.object({
  Id: z.number().optional(),
  TestId: z.number(),
  LabTestId: z.string().optional().nullable(),
  OrderLoinc: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional()
}).strict();

export const TestOrderLoincUpdateManyMutationInputSchema: z.ZodType<Prisma.TestOrderLoincUpdateManyMutationInput> = z.object({
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestOrderLoincUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TestOrderLoincUncheckedUpdateManyInput> = z.object({
  Id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  TestId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  OrderLoinc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestResultLoincCreateInputSchema: z.ZodType<Prisma.TestResultLoincCreateInput> = z.object({
  LabTestId: z.string().optional().nullable(),
  ResultCode: z.string().optional().nullable(),
  ResultCodeName: z.string().optional().nullable(),
  UofM: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional(),
  LOINC: z.lazy(() => LOINCCreateNestedOneWithoutTestResultLoincInputSchema).optional(),
  TestCatalog: z.lazy(() => TestCatalogCreateNestedOneWithoutTestResultLoincInputSchema)
}).strict();

export const TestResultLoincUncheckedCreateInputSchema: z.ZodType<Prisma.TestResultLoincUncheckedCreateInput> = z.object({
  Id: z.number().optional(),
  TestId: z.number(),
  LabTestId: z.string().optional().nullable(),
  ResultCode: z.string().optional().nullable(),
  ResultCodeName: z.string().optional().nullable(),
  UofM: z.string().optional().nullable(),
  ResultLoinc: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional()
}).strict();

export const TestResultLoincUpdateInputSchema: z.ZodType<Prisma.TestResultLoincUpdateInput> = z.object({
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ResultCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ResultCodeName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  UofM: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  LOINC: z.lazy(() => LOINCUpdateOneWithoutTestResultLoincNestedInputSchema).optional(),
  TestCatalog: z.lazy(() => TestCatalogUpdateOneRequiredWithoutTestResultLoincNestedInputSchema).optional()
}).strict();

export const TestResultLoincUncheckedUpdateInputSchema: z.ZodType<Prisma.TestResultLoincUncheckedUpdateInput> = z.object({
  Id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  TestId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ResultCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ResultCodeName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  UofM: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ResultLoinc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestResultLoincCreateManyInputSchema: z.ZodType<Prisma.TestResultLoincCreateManyInput> = z.object({
  Id: z.number().optional(),
  TestId: z.number(),
  LabTestId: z.string().optional().nullable(),
  ResultCode: z.string().optional().nullable(),
  ResultCodeName: z.string().optional().nullable(),
  UofM: z.string().optional().nullable(),
  ResultLoinc: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional()
}).strict();

export const TestResultLoincUpdateManyMutationInputSchema: z.ZodType<Prisma.TestResultLoincUpdateManyMutationInput> = z.object({
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ResultCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ResultCodeName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  UofM: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestResultLoincUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TestResultLoincUncheckedUpdateManyInput> = z.object({
  Id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  TestId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ResultCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ResultCodeName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  UofM: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ResultLoinc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string(),
  name: z.string().optional().nullable(),
  email: z.string(),
  password: z.string(),
  emailVerified: z.date().optional().nullable(),
  image: z.string().optional().nullable(),
  Account: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  Session: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string(),
  name: z.string().optional().nullable(),
  email: z.string(),
  password: z.string(),
  emailVerified: z.date().optional().nullable(),
  image: z.string().optional().nullable(),
  Account: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Session: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Account: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  Session: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Account: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Session: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string(),
  name: z.string().optional().nullable(),
  email: z.string(),
  password: z.string(),
  emailVerified: z.date().optional().nullable(),
  image: z.string().optional().nullable()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const VerificationTokenCreateInputSchema: z.ZodType<Prisma.VerificationTokenCreateInput> = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.date()
}).strict();

export const VerificationTokenUncheckedCreateInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedCreateInput> = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.date()
}).strict();

export const VerificationTokenUpdateInputSchema: z.ZodType<Prisma.VerificationTokenUpdateInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenUncheckedUpdateInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedUpdateInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenCreateManyInputSchema: z.ZodType<Prisma.VerificationTokenCreateManyInput> = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.date()
}).strict();

export const VerificationTokenUpdateManyMutationInputSchema: z.ZodType<Prisma.VerificationTokenUpdateManyMutationInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenUncheckedUpdateManyInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedUpdateManyInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  search: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  search: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const UserRelationFilterSchema: z.ZodType<Prisma.UserRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const AccountOrderByRelevanceInputSchema: z.ZodType<Prisma.AccountOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => AccountOrderByRelevanceFieldEnumSchema),z.lazy(() => AccountOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const AccountProviderProviderAccountIdCompoundUniqueInputSchema: z.ZodType<Prisma.AccountProviderProviderAccountIdCompoundUniqueInput> = z.object({
  provider: z.string(),
  providerAccountId: z.string()
}).strict();

export const AccountCountOrderByAggregateInputSchema: z.ZodType<Prisma.AccountCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AccountAvgOrderByAggregateInput> = z.object({
  expires_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountMinOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountSumOrderByAggregateInputSchema: z.ZodType<Prisma.AccountSumOrderByAggregateInput> = z.object({
  expires_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  search: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  search: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const TestBiomarkerListRelationFilterSchema: z.ZodType<Prisma.TestBiomarkerListRelationFilter> = z.object({
  every: z.lazy(() => TestBiomarkerWhereInputSchema).optional(),
  some: z.lazy(() => TestBiomarkerWhereInputSchema).optional(),
  none: z.lazy(() => TestBiomarkerWhereInputSchema).optional()
}).strict();

export const TestBiomarkerOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TestBiomarkerOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BIOMARKEROrderByRelevanceInputSchema: z.ZodType<Prisma.BIOMARKEROrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => BIOMARKEROrderByRelevanceFieldEnumSchema),z.lazy(() => BIOMARKEROrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const BIOMARKERCountOrderByAggregateInputSchema: z.ZodType<Prisma.BIOMARKERCountOrderByAggregateInput> = z.object({
  HGNCId: z.lazy(() => SortOrderSchema).optional(),
  HGNCStatus: z.lazy(() => SortOrderSchema).optional(),
  HGNCApprovedSymbol: z.lazy(() => SortOrderSchema).optional(),
  HGNCApprovedName: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BIOMARKERMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BIOMARKERMaxOrderByAggregateInput> = z.object({
  HGNCId: z.lazy(() => SortOrderSchema).optional(),
  HGNCStatus: z.lazy(() => SortOrderSchema).optional(),
  HGNCApprovedSymbol: z.lazy(() => SortOrderSchema).optional(),
  HGNCApprovedName: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BIOMARKERMinOrderByAggregateInputSchema: z.ZodType<Prisma.BIOMARKERMinOrderByAggregateInput> = z.object({
  HGNCId: z.lazy(() => SortOrderSchema).optional(),
  HGNCStatus: z.lazy(() => SortOrderSchema).optional(),
  HGNCApprovedSymbol: z.lazy(() => SortOrderSchema).optional(),
  HGNCApprovedName: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestOrderLoincListRelationFilterSchema: z.ZodType<Prisma.TestOrderLoincListRelationFilter> = z.object({
  every: z.lazy(() => TestOrderLoincWhereInputSchema).optional(),
  some: z.lazy(() => TestOrderLoincWhereInputSchema).optional(),
  none: z.lazy(() => TestOrderLoincWhereInputSchema).optional()
}).strict();

export const TestResultLoincListRelationFilterSchema: z.ZodType<Prisma.TestResultLoincListRelationFilter> = z.object({
  every: z.lazy(() => TestResultLoincWhereInputSchema).optional(),
  some: z.lazy(() => TestResultLoincWhereInputSchema).optional(),
  none: z.lazy(() => TestResultLoincWhereInputSchema).optional()
}).strict();

export const TestOrderLoincOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TestOrderLoincOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestResultLoincOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TestResultLoincOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LOINCOrderByRelevanceInputSchema: z.ZodType<Prisma.LOINCOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => LOINCOrderByRelevanceFieldEnumSchema),z.lazy(() => LOINCOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const LOINCCountOrderByAggregateInputSchema: z.ZodType<Prisma.LOINCCountOrderByAggregateInput> = z.object({
  Loinc_Num: z.lazy(() => SortOrderSchema).optional(),
  COMPONENT: z.lazy(() => SortOrderSchema).optional(),
  PROPERTY: z.lazy(() => SortOrderSchema).optional(),
  TIME_ASPCT: z.lazy(() => SortOrderSchema).optional(),
  SYSTEM: z.lazy(() => SortOrderSchema).optional(),
  SCALE_TYP: z.lazy(() => SortOrderSchema).optional(),
  METHOD_TYP: z.lazy(() => SortOrderSchema).optional(),
  CLASS: z.lazy(() => SortOrderSchema).optional(),
  VersionLastChanged: z.lazy(() => SortOrderSchema).optional(),
  CHNG_TYPE: z.lazy(() => SortOrderSchema).optional(),
  DefinitionDescription: z.lazy(() => SortOrderSchema).optional(),
  STATUS: z.lazy(() => SortOrderSchema).optional(),
  CONSUMER_NAME: z.lazy(() => SortOrderSchema).optional(),
  CLASSTYPE: z.lazy(() => SortOrderSchema).optional(),
  FORMULA: z.lazy(() => SortOrderSchema).optional(),
  EXMPL_ANSWERS: z.lazy(() => SortOrderSchema).optional(),
  SURVEY_QUEST_TEXT: z.lazy(() => SortOrderSchema).optional(),
  SURVEY_QUEST_SRC: z.lazy(() => SortOrderSchema).optional(),
  UNITSREQUIRED: z.lazy(() => SortOrderSchema).optional(),
  RELATEDNAMES2: z.lazy(() => SortOrderSchema).optional(),
  SHORTNAME: z.lazy(() => SortOrderSchema).optional(),
  ORDER_OBS: z.lazy(() => SortOrderSchema).optional(),
  HL7_FIELD_SUBFIELD_ID: z.lazy(() => SortOrderSchema).optional(),
  EXTERNAL_COPYRIGHT_NOTICE: z.lazy(() => SortOrderSchema).optional(),
  EXAMPLE_UNITS: z.lazy(() => SortOrderSchema).optional(),
  LONG_COMMON_NAME: z.lazy(() => SortOrderSchema).optional(),
  EXAMPLE_UCUM_UNITS: z.lazy(() => SortOrderSchema).optional(),
  STATUS_REASON: z.lazy(() => SortOrderSchema).optional(),
  STATUS_TEXT: z.lazy(() => SortOrderSchema).optional(),
  CHANGE_REASON_PUBLIC: z.lazy(() => SortOrderSchema).optional(),
  COMMON_TEST_RANK: z.lazy(() => SortOrderSchema).optional(),
  COMMON_ORDER_RANK: z.lazy(() => SortOrderSchema).optional(),
  HL7_ATTACHMENT_STRUCTURE: z.lazy(() => SortOrderSchema).optional(),
  EXTERNAL_COPYRIGHT_LINK: z.lazy(() => SortOrderSchema).optional(),
  PanelType: z.lazy(() => SortOrderSchema).optional(),
  AskAtOrderEntry: z.lazy(() => SortOrderSchema).optional(),
  AssociatedObservations: z.lazy(() => SortOrderSchema).optional(),
  VersionFirstReleased: z.lazy(() => SortOrderSchema).optional(),
  ValidHL7AttachmentRequest: z.lazy(() => SortOrderSchema).optional(),
  DisplayName: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LOINCAvgOrderByAggregateInputSchema: z.ZodType<Prisma.LOINCAvgOrderByAggregateInput> = z.object({
  CLASSTYPE: z.lazy(() => SortOrderSchema).optional(),
  COMMON_TEST_RANK: z.lazy(() => SortOrderSchema).optional(),
  COMMON_ORDER_RANK: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LOINCMaxOrderByAggregateInputSchema: z.ZodType<Prisma.LOINCMaxOrderByAggregateInput> = z.object({
  Loinc_Num: z.lazy(() => SortOrderSchema).optional(),
  COMPONENT: z.lazy(() => SortOrderSchema).optional(),
  PROPERTY: z.lazy(() => SortOrderSchema).optional(),
  TIME_ASPCT: z.lazy(() => SortOrderSchema).optional(),
  SYSTEM: z.lazy(() => SortOrderSchema).optional(),
  SCALE_TYP: z.lazy(() => SortOrderSchema).optional(),
  METHOD_TYP: z.lazy(() => SortOrderSchema).optional(),
  CLASS: z.lazy(() => SortOrderSchema).optional(),
  VersionLastChanged: z.lazy(() => SortOrderSchema).optional(),
  CHNG_TYPE: z.lazy(() => SortOrderSchema).optional(),
  DefinitionDescription: z.lazy(() => SortOrderSchema).optional(),
  STATUS: z.lazy(() => SortOrderSchema).optional(),
  CONSUMER_NAME: z.lazy(() => SortOrderSchema).optional(),
  CLASSTYPE: z.lazy(() => SortOrderSchema).optional(),
  FORMULA: z.lazy(() => SortOrderSchema).optional(),
  EXMPL_ANSWERS: z.lazy(() => SortOrderSchema).optional(),
  SURVEY_QUEST_TEXT: z.lazy(() => SortOrderSchema).optional(),
  SURVEY_QUEST_SRC: z.lazy(() => SortOrderSchema).optional(),
  UNITSREQUIRED: z.lazy(() => SortOrderSchema).optional(),
  RELATEDNAMES2: z.lazy(() => SortOrderSchema).optional(),
  SHORTNAME: z.lazy(() => SortOrderSchema).optional(),
  ORDER_OBS: z.lazy(() => SortOrderSchema).optional(),
  HL7_FIELD_SUBFIELD_ID: z.lazy(() => SortOrderSchema).optional(),
  EXTERNAL_COPYRIGHT_NOTICE: z.lazy(() => SortOrderSchema).optional(),
  EXAMPLE_UNITS: z.lazy(() => SortOrderSchema).optional(),
  LONG_COMMON_NAME: z.lazy(() => SortOrderSchema).optional(),
  EXAMPLE_UCUM_UNITS: z.lazy(() => SortOrderSchema).optional(),
  STATUS_REASON: z.lazy(() => SortOrderSchema).optional(),
  STATUS_TEXT: z.lazy(() => SortOrderSchema).optional(),
  CHANGE_REASON_PUBLIC: z.lazy(() => SortOrderSchema).optional(),
  COMMON_TEST_RANK: z.lazy(() => SortOrderSchema).optional(),
  COMMON_ORDER_RANK: z.lazy(() => SortOrderSchema).optional(),
  HL7_ATTACHMENT_STRUCTURE: z.lazy(() => SortOrderSchema).optional(),
  EXTERNAL_COPYRIGHT_LINK: z.lazy(() => SortOrderSchema).optional(),
  PanelType: z.lazy(() => SortOrderSchema).optional(),
  AskAtOrderEntry: z.lazy(() => SortOrderSchema).optional(),
  AssociatedObservations: z.lazy(() => SortOrderSchema).optional(),
  VersionFirstReleased: z.lazy(() => SortOrderSchema).optional(),
  ValidHL7AttachmentRequest: z.lazy(() => SortOrderSchema).optional(),
  DisplayName: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LOINCMinOrderByAggregateInputSchema: z.ZodType<Prisma.LOINCMinOrderByAggregateInput> = z.object({
  Loinc_Num: z.lazy(() => SortOrderSchema).optional(),
  COMPONENT: z.lazy(() => SortOrderSchema).optional(),
  PROPERTY: z.lazy(() => SortOrderSchema).optional(),
  TIME_ASPCT: z.lazy(() => SortOrderSchema).optional(),
  SYSTEM: z.lazy(() => SortOrderSchema).optional(),
  SCALE_TYP: z.lazy(() => SortOrderSchema).optional(),
  METHOD_TYP: z.lazy(() => SortOrderSchema).optional(),
  CLASS: z.lazy(() => SortOrderSchema).optional(),
  VersionLastChanged: z.lazy(() => SortOrderSchema).optional(),
  CHNG_TYPE: z.lazy(() => SortOrderSchema).optional(),
  DefinitionDescription: z.lazy(() => SortOrderSchema).optional(),
  STATUS: z.lazy(() => SortOrderSchema).optional(),
  CONSUMER_NAME: z.lazy(() => SortOrderSchema).optional(),
  CLASSTYPE: z.lazy(() => SortOrderSchema).optional(),
  FORMULA: z.lazy(() => SortOrderSchema).optional(),
  EXMPL_ANSWERS: z.lazy(() => SortOrderSchema).optional(),
  SURVEY_QUEST_TEXT: z.lazy(() => SortOrderSchema).optional(),
  SURVEY_QUEST_SRC: z.lazy(() => SortOrderSchema).optional(),
  UNITSREQUIRED: z.lazy(() => SortOrderSchema).optional(),
  RELATEDNAMES2: z.lazy(() => SortOrderSchema).optional(),
  SHORTNAME: z.lazy(() => SortOrderSchema).optional(),
  ORDER_OBS: z.lazy(() => SortOrderSchema).optional(),
  HL7_FIELD_SUBFIELD_ID: z.lazy(() => SortOrderSchema).optional(),
  EXTERNAL_COPYRIGHT_NOTICE: z.lazy(() => SortOrderSchema).optional(),
  EXAMPLE_UNITS: z.lazy(() => SortOrderSchema).optional(),
  LONG_COMMON_NAME: z.lazy(() => SortOrderSchema).optional(),
  EXAMPLE_UCUM_UNITS: z.lazy(() => SortOrderSchema).optional(),
  STATUS_REASON: z.lazy(() => SortOrderSchema).optional(),
  STATUS_TEXT: z.lazy(() => SortOrderSchema).optional(),
  CHANGE_REASON_PUBLIC: z.lazy(() => SortOrderSchema).optional(),
  COMMON_TEST_RANK: z.lazy(() => SortOrderSchema).optional(),
  COMMON_ORDER_RANK: z.lazy(() => SortOrderSchema).optional(),
  HL7_ATTACHMENT_STRUCTURE: z.lazy(() => SortOrderSchema).optional(),
  EXTERNAL_COPYRIGHT_LINK: z.lazy(() => SortOrderSchema).optional(),
  PanelType: z.lazy(() => SortOrderSchema).optional(),
  AskAtOrderEntry: z.lazy(() => SortOrderSchema).optional(),
  AssociatedObservations: z.lazy(() => SortOrderSchema).optional(),
  VersionFirstReleased: z.lazy(() => SortOrderSchema).optional(),
  ValidHL7AttachmentRequest: z.lazy(() => SortOrderSchema).optional(),
  DisplayName: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LOINCSumOrderByAggregateInputSchema: z.ZodType<Prisma.LOINCSumOrderByAggregateInput> = z.object({
  CLASSTYPE: z.lazy(() => SortOrderSchema).optional(),
  COMMON_TEST_RANK: z.lazy(() => SortOrderSchema).optional(),
  COMMON_ORDER_RANK: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const TestCatalogListRelationFilterSchema: z.ZodType<Prisma.TestCatalogListRelationFilter> = z.object({
  every: z.lazy(() => TestCatalogWhereInputSchema).optional(),
  some: z.lazy(() => TestCatalogWhereInputSchema).optional(),
  none: z.lazy(() => TestCatalogWhereInputSchema).optional()
}).strict();

export const TestCatalogOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TestCatalogOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LabOrderByRelevanceInputSchema: z.ZodType<Prisma.LabOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => LabOrderByRelevanceFieldEnumSchema),z.lazy(() => LabOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const LabCountOrderByAggregateInputSchema: z.ZodType<Prisma.LabCountOrderByAggregateInput> = z.object({
  LabId: z.lazy(() => SortOrderSchema).optional(),
  LabName: z.lazy(() => SortOrderSchema).optional(),
  LabCode: z.lazy(() => SortOrderSchema).optional(),
  Address: z.lazy(() => SortOrderSchema).optional(),
  City: z.lazy(() => SortOrderSchema).optional(),
  State: z.lazy(() => SortOrderSchema).optional(),
  Zip: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LabAvgOrderByAggregateInputSchema: z.ZodType<Prisma.LabAvgOrderByAggregateInput> = z.object({
  LabId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LabMaxOrderByAggregateInputSchema: z.ZodType<Prisma.LabMaxOrderByAggregateInput> = z.object({
  LabId: z.lazy(() => SortOrderSchema).optional(),
  LabName: z.lazy(() => SortOrderSchema).optional(),
  LabCode: z.lazy(() => SortOrderSchema).optional(),
  Address: z.lazy(() => SortOrderSchema).optional(),
  City: z.lazy(() => SortOrderSchema).optional(),
  State: z.lazy(() => SortOrderSchema).optional(),
  Zip: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LabMinOrderByAggregateInputSchema: z.ZodType<Prisma.LabMinOrderByAggregateInput> = z.object({
  LabId: z.lazy(() => SortOrderSchema).optional(),
  LabName: z.lazy(() => SortOrderSchema).optional(),
  LabCode: z.lazy(() => SortOrderSchema).optional(),
  Address: z.lazy(() => SortOrderSchema).optional(),
  City: z.lazy(() => SortOrderSchema).optional(),
  State: z.lazy(() => SortOrderSchema).optional(),
  Zip: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LabSumOrderByAggregateInputSchema: z.ZodType<Prisma.LabSumOrderByAggregateInput> = z.object({
  LabId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const BigIntFilterSchema: z.ZodType<Prisma.BigIntFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntFilterSchema) ]).optional(),
}).strict();

export const LoincComponentHierarchyOrderByRelevanceInputSchema: z.ZodType<Prisma.LoincComponentHierarchyOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => LoincComponentHierarchyOrderByRelevanceFieldEnumSchema),z.lazy(() => LoincComponentHierarchyOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const LoincComponentHierarchyCountOrderByAggregateInputSchema: z.ZodType<Prisma.LoincComponentHierarchyCountOrderByAggregateInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  ParentId: z.lazy(() => SortOrderSchema).optional(),
  Level: z.lazy(() => SortOrderSchema).optional(),
  Code: z.lazy(() => SortOrderSchema).optional(),
  Sequence: z.lazy(() => SortOrderSchema).optional(),
  CodeText: z.lazy(() => SortOrderSchema).optional(),
  Component: z.lazy(() => SortOrderSchema).optional(),
  Property: z.lazy(() => SortOrderSchema).optional(),
  Timing: z.lazy(() => SortOrderSchema).optional(),
  Scale: z.lazy(() => SortOrderSchema).optional(),
  Method: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LoincComponentHierarchyAvgOrderByAggregateInputSchema: z.ZodType<Prisma.LoincComponentHierarchyAvgOrderByAggregateInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  ParentId: z.lazy(() => SortOrderSchema).optional(),
  Level: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LoincComponentHierarchyMaxOrderByAggregateInputSchema: z.ZodType<Prisma.LoincComponentHierarchyMaxOrderByAggregateInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  ParentId: z.lazy(() => SortOrderSchema).optional(),
  Level: z.lazy(() => SortOrderSchema).optional(),
  Code: z.lazy(() => SortOrderSchema).optional(),
  Sequence: z.lazy(() => SortOrderSchema).optional(),
  CodeText: z.lazy(() => SortOrderSchema).optional(),
  Component: z.lazy(() => SortOrderSchema).optional(),
  Property: z.lazy(() => SortOrderSchema).optional(),
  Timing: z.lazy(() => SortOrderSchema).optional(),
  Scale: z.lazy(() => SortOrderSchema).optional(),
  Method: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LoincComponentHierarchyMinOrderByAggregateInputSchema: z.ZodType<Prisma.LoincComponentHierarchyMinOrderByAggregateInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  ParentId: z.lazy(() => SortOrderSchema).optional(),
  Level: z.lazy(() => SortOrderSchema).optional(),
  Code: z.lazy(() => SortOrderSchema).optional(),
  Sequence: z.lazy(() => SortOrderSchema).optional(),
  CodeText: z.lazy(() => SortOrderSchema).optional(),
  Component: z.lazy(() => SortOrderSchema).optional(),
  Property: z.lazy(() => SortOrderSchema).optional(),
  Timing: z.lazy(() => SortOrderSchema).optional(),
  Scale: z.lazy(() => SortOrderSchema).optional(),
  Method: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LoincComponentHierarchySumOrderByAggregateInputSchema: z.ZodType<Prisma.LoincComponentHierarchySumOrderByAggregateInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  ParentId: z.lazy(() => SortOrderSchema).optional(),
  Level: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BigIntWithAggregatesFilterSchema: z.ZodType<Prisma.BigIntWithAggregatesFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _max: z.lazy(() => NestedBigIntFilterSchema).optional()
}).strict();

export const LoincPanelHierarchyOrderByRelevanceInputSchema: z.ZodType<Prisma.LoincPanelHierarchyOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => LoincPanelHierarchyOrderByRelevanceFieldEnumSchema),z.lazy(() => LoincPanelHierarchyOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const LoincPanelHierarchyCountOrderByAggregateInputSchema: z.ZodType<Prisma.LoincPanelHierarchyCountOrderByAggregateInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  ParentId: z.lazy(() => SortOrderSchema).optional(),
  Level: z.lazy(() => SortOrderSchema).optional(),
  Code: z.lazy(() => SortOrderSchema).optional(),
  Sequence: z.lazy(() => SortOrderSchema).optional(),
  CodeText: z.lazy(() => SortOrderSchema).optional(),
  Component: z.lazy(() => SortOrderSchema).optional(),
  Property: z.lazy(() => SortOrderSchema).optional(),
  Timing: z.lazy(() => SortOrderSchema).optional(),
  Scale: z.lazy(() => SortOrderSchema).optional(),
  Method: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LoincPanelHierarchyAvgOrderByAggregateInputSchema: z.ZodType<Prisma.LoincPanelHierarchyAvgOrderByAggregateInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  ParentId: z.lazy(() => SortOrderSchema).optional(),
  Level: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LoincPanelHierarchyMaxOrderByAggregateInputSchema: z.ZodType<Prisma.LoincPanelHierarchyMaxOrderByAggregateInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  ParentId: z.lazy(() => SortOrderSchema).optional(),
  Level: z.lazy(() => SortOrderSchema).optional(),
  Code: z.lazy(() => SortOrderSchema).optional(),
  Sequence: z.lazy(() => SortOrderSchema).optional(),
  CodeText: z.lazy(() => SortOrderSchema).optional(),
  Component: z.lazy(() => SortOrderSchema).optional(),
  Property: z.lazy(() => SortOrderSchema).optional(),
  Timing: z.lazy(() => SortOrderSchema).optional(),
  Scale: z.lazy(() => SortOrderSchema).optional(),
  Method: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LoincPanelHierarchyMinOrderByAggregateInputSchema: z.ZodType<Prisma.LoincPanelHierarchyMinOrderByAggregateInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  ParentId: z.lazy(() => SortOrderSchema).optional(),
  Level: z.lazy(() => SortOrderSchema).optional(),
  Code: z.lazy(() => SortOrderSchema).optional(),
  Sequence: z.lazy(() => SortOrderSchema).optional(),
  CodeText: z.lazy(() => SortOrderSchema).optional(),
  Component: z.lazy(() => SortOrderSchema).optional(),
  Property: z.lazy(() => SortOrderSchema).optional(),
  Timing: z.lazy(() => SortOrderSchema).optional(),
  Scale: z.lazy(() => SortOrderSchema).optional(),
  Method: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LoincPanelHierarchySumOrderByAggregateInputSchema: z.ZodType<Prisma.LoincPanelHierarchySumOrderByAggregateInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  ParentId: z.lazy(() => SortOrderSchema).optional(),
  Level: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LoincUniveralLabOrdersOrderByRelevanceInputSchema: z.ZodType<Prisma.LoincUniveralLabOrdersOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => LoincUniveralLabOrdersOrderByRelevanceFieldEnumSchema),z.lazy(() => LoincUniveralLabOrdersOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const LoincUniveralLabOrdersCountOrderByAggregateInputSchema: z.ZodType<Prisma.LoincUniveralLabOrdersCountOrderByAggregateInput> = z.object({
  Loinc_Num: z.lazy(() => SortOrderSchema).optional(),
  Long_Common_Name: z.lazy(() => SortOrderSchema).optional(),
  ORDER_OBS: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LoincUniveralLabOrdersMaxOrderByAggregateInputSchema: z.ZodType<Prisma.LoincUniveralLabOrdersMaxOrderByAggregateInput> = z.object({
  Loinc_Num: z.lazy(() => SortOrderSchema).optional(),
  Long_Common_Name: z.lazy(() => SortOrderSchema).optional(),
  ORDER_OBS: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LoincUniveralLabOrdersMinOrderByAggregateInputSchema: z.ZodType<Prisma.LoincUniveralLabOrdersMinOrderByAggregateInput> = z.object({
  Loinc_Num: z.lazy(() => SortOrderSchema).optional(),
  Long_Common_Name: z.lazy(() => SortOrderSchema).optional(),
  ORDER_OBS: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.date().optional(),
  in: z.date().array().optional(),
  notIn: z.date().array().optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([ z.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const PostOrderByRelevanceInputSchema: z.ZodType<Prisma.PostOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => PostOrderByRelevanceFieldEnumSchema),z.lazy(() => PostOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const PostCountOrderByAggregateInputSchema: z.ZodType<Prisma.PostCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PostAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PostAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PostMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PostMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PostMinOrderByAggregateInputSchema: z.ZodType<Prisma.PostMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PostSumOrderByAggregateInputSchema: z.ZodType<Prisma.PostSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.date().optional(),
  in: z.date().array().optional(),
  notIn: z.date().array().optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([ z.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const SessionOrderByRelevanceInputSchema: z.ZodType<Prisma.SessionOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => SessionOrderByRelevanceFieldEnumSchema),z.lazy(() => SessionOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const SessionCountOrderByAggregateInputSchema: z.ZodType<Prisma.SessionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionMinOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BIOMARKERRelationFilterSchema: z.ZodType<Prisma.BIOMARKERRelationFilter> = z.object({
  is: z.lazy(() => BIOMARKERWhereInputSchema).optional(),
  isNot: z.lazy(() => BIOMARKERWhereInputSchema).optional()
}).strict();

export const TestCatalogRelationFilterSchema: z.ZodType<Prisma.TestCatalogRelationFilter> = z.object({
  is: z.lazy(() => TestCatalogWhereInputSchema).optional(),
  isNot: z.lazy(() => TestCatalogWhereInputSchema).optional()
}).strict();

export const TestBiomarkerOrderByRelevanceInputSchema: z.ZodType<Prisma.TestBiomarkerOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => TestBiomarkerOrderByRelevanceFieldEnumSchema),z.lazy(() => TestBiomarkerOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const TestBiomarkerTestIdHGNCIdCompoundUniqueInputSchema: z.ZodType<Prisma.TestBiomarkerTestIdHGNCIdCompoundUniqueInput> = z.object({
  TestId: z.number(),
  HGNCId: z.string()
}).strict();

export const TestBiomarkerCountOrderByAggregateInputSchema: z.ZodType<Prisma.TestBiomarkerCountOrderByAggregateInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  TestId: z.lazy(() => SortOrderSchema).optional(),
  LabTestId: z.lazy(() => SortOrderSchema).optional(),
  HGNCId: z.lazy(() => SortOrderSchema).optional(),
  CreatedAt: z.lazy(() => SortOrderSchema).optional(),
  UpdatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestBiomarkerAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TestBiomarkerAvgOrderByAggregateInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  TestId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestBiomarkerMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TestBiomarkerMaxOrderByAggregateInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  TestId: z.lazy(() => SortOrderSchema).optional(),
  LabTestId: z.lazy(() => SortOrderSchema).optional(),
  HGNCId: z.lazy(() => SortOrderSchema).optional(),
  CreatedAt: z.lazy(() => SortOrderSchema).optional(),
  UpdatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestBiomarkerMinOrderByAggregateInputSchema: z.ZodType<Prisma.TestBiomarkerMinOrderByAggregateInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  TestId: z.lazy(() => SortOrderSchema).optional(),
  LabTestId: z.lazy(() => SortOrderSchema).optional(),
  HGNCId: z.lazy(() => SortOrderSchema).optional(),
  CreatedAt: z.lazy(() => SortOrderSchema).optional(),
  UpdatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestBiomarkerSumOrderByAggregateInputSchema: z.ZodType<Prisma.TestBiomarkerSumOrderByAggregateInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  TestId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LabNullableRelationFilterSchema: z.ZodType<Prisma.LabNullableRelationFilter> = z.object({
  is: z.lazy(() => LabWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => LabWhereInputSchema).optional().nullable()
}).strict();

export const TestCptCodeListRelationFilterSchema: z.ZodType<Prisma.TestCptCodeListRelationFilter> = z.object({
  every: z.lazy(() => TestCptCodeWhereInputSchema).optional(),
  some: z.lazy(() => TestCptCodeWhereInputSchema).optional(),
  none: z.lazy(() => TestCptCodeWhereInputSchema).optional()
}).strict();

export const TestCptCodeOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TestCptCodeOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestCatalogOrderByRelevanceInputSchema: z.ZodType<Prisma.TestCatalogOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => TestCatalogOrderByRelevanceFieldEnumSchema),z.lazy(() => TestCatalogOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const TestCatalogLabIdLabTestIdCompoundUniqueInputSchema: z.ZodType<Prisma.TestCatalogLabIdLabTestIdCompoundUniqueInput> = z.object({
  LabId: z.number(),
  LabTestId: z.string()
}).strict();

export const TestCatalogCountOrderByAggregateInputSchema: z.ZodType<Prisma.TestCatalogCountOrderByAggregateInput> = z.object({
  TestId: z.lazy(() => SortOrderSchema).optional(),
  LabId: z.lazy(() => SortOrderSchema).optional(),
  href: z.lazy(() => SortOrderSchema).optional(),
  CasandraTestId: z.lazy(() => SortOrderSchema).optional(),
  LabTestId: z.lazy(() => SortOrderSchema).optional(),
  TestName: z.lazy(() => SortOrderSchema).optional(),
  AlternativeName: z.lazy(() => SortOrderSchema).optional(),
  AlternativeName1: z.lazy(() => SortOrderSchema).optional(),
  AlternativeName2: z.lazy(() => SortOrderSchema).optional(),
  AlternativeName3: z.lazy(() => SortOrderSchema).optional(),
  AlternativeName4: z.lazy(() => SortOrderSchema).optional(),
  AlternativeName5: z.lazy(() => SortOrderSchema).optional(),
  TestIncludes: z.lazy(() => SortOrderSchema).optional(),
  SpecimenType: z.lazy(() => SortOrderSchema).optional(),
  SpecialInstructions: z.lazy(() => SortOrderSchema).optional(),
  Methodology: z.lazy(() => SortOrderSchema).optional(),
  TestDescription: z.lazy(() => SortOrderSchema).optional(),
  Diseases: z.lazy(() => SortOrderSchema).optional(),
  Probes: z.lazy(() => SortOrderSchema).optional(),
  ClinicalSignificance: z.lazy(() => SortOrderSchema).optional(),
  SpecimenRequirements: z.lazy(() => SortOrderSchema).optional(),
  Volume: z.lazy(() => SortOrderSchema).optional(),
  MinimumVolume: z.lazy(() => SortOrderSchema).optional(),
  Container: z.lazy(() => SortOrderSchema).optional(),
  Collection: z.lazy(() => SortOrderSchema).optional(),
  StabilityRequirements: z.lazy(() => SortOrderSchema).optional(),
  StorageTransportation: z.lazy(() => SortOrderSchema).optional(),
  PatientPreparation: z.lazy(() => SortOrderSchema).optional(),
  CausesForRejection: z.lazy(() => SortOrderSchema).optional(),
  TestUsage: z.lazy(() => SortOrderSchema).optional(),
  TestLimitations: z.lazy(() => SortOrderSchema).optional(),
  CPTCodes: z.lazy(() => SortOrderSchema).optional(),
  NewYorkApproved: z.lazy(() => SortOrderSchema).optional(),
  LevelOfService: z.lazy(() => SortOrderSchema).optional(),
  TurnAroundTime: z.lazy(() => SortOrderSchema).optional(),
  AssayCategory: z.lazy(() => SortOrderSchema).optional(),
  ReferenceRanges: z.lazy(() => SortOrderSchema).optional(),
  SetupSchedule: z.lazy(() => SortOrderSchema).optional(),
  AlternativeSpecimen: z.lazy(() => SortOrderSchema).optional(),
  LoincCodesText: z.lazy(() => SortOrderSchema).optional(),
  LoincCodesHTML: z.lazy(() => SortOrderSchema).optional(),
  CreatedAt: z.lazy(() => SortOrderSchema).optional(),
  UpdatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestCatalogAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TestCatalogAvgOrderByAggregateInput> = z.object({
  TestId: z.lazy(() => SortOrderSchema).optional(),
  LabId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestCatalogMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TestCatalogMaxOrderByAggregateInput> = z.object({
  TestId: z.lazy(() => SortOrderSchema).optional(),
  LabId: z.lazy(() => SortOrderSchema).optional(),
  href: z.lazy(() => SortOrderSchema).optional(),
  CasandraTestId: z.lazy(() => SortOrderSchema).optional(),
  LabTestId: z.lazy(() => SortOrderSchema).optional(),
  TestName: z.lazy(() => SortOrderSchema).optional(),
  AlternativeName: z.lazy(() => SortOrderSchema).optional(),
  AlternativeName1: z.lazy(() => SortOrderSchema).optional(),
  AlternativeName2: z.lazy(() => SortOrderSchema).optional(),
  AlternativeName3: z.lazy(() => SortOrderSchema).optional(),
  AlternativeName4: z.lazy(() => SortOrderSchema).optional(),
  AlternativeName5: z.lazy(() => SortOrderSchema).optional(),
  TestIncludes: z.lazy(() => SortOrderSchema).optional(),
  SpecimenType: z.lazy(() => SortOrderSchema).optional(),
  SpecialInstructions: z.lazy(() => SortOrderSchema).optional(),
  Methodology: z.lazy(() => SortOrderSchema).optional(),
  TestDescription: z.lazy(() => SortOrderSchema).optional(),
  Diseases: z.lazy(() => SortOrderSchema).optional(),
  Probes: z.lazy(() => SortOrderSchema).optional(),
  ClinicalSignificance: z.lazy(() => SortOrderSchema).optional(),
  SpecimenRequirements: z.lazy(() => SortOrderSchema).optional(),
  Volume: z.lazy(() => SortOrderSchema).optional(),
  MinimumVolume: z.lazy(() => SortOrderSchema).optional(),
  Container: z.lazy(() => SortOrderSchema).optional(),
  Collection: z.lazy(() => SortOrderSchema).optional(),
  StabilityRequirements: z.lazy(() => SortOrderSchema).optional(),
  StorageTransportation: z.lazy(() => SortOrderSchema).optional(),
  PatientPreparation: z.lazy(() => SortOrderSchema).optional(),
  CausesForRejection: z.lazy(() => SortOrderSchema).optional(),
  TestUsage: z.lazy(() => SortOrderSchema).optional(),
  TestLimitations: z.lazy(() => SortOrderSchema).optional(),
  CPTCodes: z.lazy(() => SortOrderSchema).optional(),
  NewYorkApproved: z.lazy(() => SortOrderSchema).optional(),
  LevelOfService: z.lazy(() => SortOrderSchema).optional(),
  TurnAroundTime: z.lazy(() => SortOrderSchema).optional(),
  AssayCategory: z.lazy(() => SortOrderSchema).optional(),
  ReferenceRanges: z.lazy(() => SortOrderSchema).optional(),
  SetupSchedule: z.lazy(() => SortOrderSchema).optional(),
  AlternativeSpecimen: z.lazy(() => SortOrderSchema).optional(),
  LoincCodesText: z.lazy(() => SortOrderSchema).optional(),
  LoincCodesHTML: z.lazy(() => SortOrderSchema).optional(),
  CreatedAt: z.lazy(() => SortOrderSchema).optional(),
  UpdatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestCatalogMinOrderByAggregateInputSchema: z.ZodType<Prisma.TestCatalogMinOrderByAggregateInput> = z.object({
  TestId: z.lazy(() => SortOrderSchema).optional(),
  LabId: z.lazy(() => SortOrderSchema).optional(),
  href: z.lazy(() => SortOrderSchema).optional(),
  CasandraTestId: z.lazy(() => SortOrderSchema).optional(),
  LabTestId: z.lazy(() => SortOrderSchema).optional(),
  TestName: z.lazy(() => SortOrderSchema).optional(),
  AlternativeName: z.lazy(() => SortOrderSchema).optional(),
  AlternativeName1: z.lazy(() => SortOrderSchema).optional(),
  AlternativeName2: z.lazy(() => SortOrderSchema).optional(),
  AlternativeName3: z.lazy(() => SortOrderSchema).optional(),
  AlternativeName4: z.lazy(() => SortOrderSchema).optional(),
  AlternativeName5: z.lazy(() => SortOrderSchema).optional(),
  TestIncludes: z.lazy(() => SortOrderSchema).optional(),
  SpecimenType: z.lazy(() => SortOrderSchema).optional(),
  SpecialInstructions: z.lazy(() => SortOrderSchema).optional(),
  Methodology: z.lazy(() => SortOrderSchema).optional(),
  TestDescription: z.lazy(() => SortOrderSchema).optional(),
  Diseases: z.lazy(() => SortOrderSchema).optional(),
  Probes: z.lazy(() => SortOrderSchema).optional(),
  ClinicalSignificance: z.lazy(() => SortOrderSchema).optional(),
  SpecimenRequirements: z.lazy(() => SortOrderSchema).optional(),
  Volume: z.lazy(() => SortOrderSchema).optional(),
  MinimumVolume: z.lazy(() => SortOrderSchema).optional(),
  Container: z.lazy(() => SortOrderSchema).optional(),
  Collection: z.lazy(() => SortOrderSchema).optional(),
  StabilityRequirements: z.lazy(() => SortOrderSchema).optional(),
  StorageTransportation: z.lazy(() => SortOrderSchema).optional(),
  PatientPreparation: z.lazy(() => SortOrderSchema).optional(),
  CausesForRejection: z.lazy(() => SortOrderSchema).optional(),
  TestUsage: z.lazy(() => SortOrderSchema).optional(),
  TestLimitations: z.lazy(() => SortOrderSchema).optional(),
  CPTCodes: z.lazy(() => SortOrderSchema).optional(),
  NewYorkApproved: z.lazy(() => SortOrderSchema).optional(),
  LevelOfService: z.lazy(() => SortOrderSchema).optional(),
  TurnAroundTime: z.lazy(() => SortOrderSchema).optional(),
  AssayCategory: z.lazy(() => SortOrderSchema).optional(),
  ReferenceRanges: z.lazy(() => SortOrderSchema).optional(),
  SetupSchedule: z.lazy(() => SortOrderSchema).optional(),
  AlternativeSpecimen: z.lazy(() => SortOrderSchema).optional(),
  LoincCodesText: z.lazy(() => SortOrderSchema).optional(),
  LoincCodesHTML: z.lazy(() => SortOrderSchema).optional(),
  CreatedAt: z.lazy(() => SortOrderSchema).optional(),
  UpdatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestCatalogSumOrderByAggregateInputSchema: z.ZodType<Prisma.TestCatalogSumOrderByAggregateInput> = z.object({
  TestId: z.lazy(() => SortOrderSchema).optional(),
  LabId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestCptCodeOrderByRelevanceInputSchema: z.ZodType<Prisma.TestCptCodeOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => TestCptCodeOrderByRelevanceFieldEnumSchema),z.lazy(() => TestCptCodeOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const TestCptCodeCountOrderByAggregateInputSchema: z.ZodType<Prisma.TestCptCodeCountOrderByAggregateInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  TestId: z.lazy(() => SortOrderSchema).optional(),
  LabTestId: z.lazy(() => SortOrderSchema).optional(),
  CptCode: z.lazy(() => SortOrderSchema).optional(),
  Modifier: z.lazy(() => SortOrderSchema).optional(),
  Comments: z.lazy(() => SortOrderSchema).optional(),
  CreatedAt: z.lazy(() => SortOrderSchema).optional(),
  UpdatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestCptCodeAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TestCptCodeAvgOrderByAggregateInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  TestId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestCptCodeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TestCptCodeMaxOrderByAggregateInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  TestId: z.lazy(() => SortOrderSchema).optional(),
  LabTestId: z.lazy(() => SortOrderSchema).optional(),
  CptCode: z.lazy(() => SortOrderSchema).optional(),
  Modifier: z.lazy(() => SortOrderSchema).optional(),
  Comments: z.lazy(() => SortOrderSchema).optional(),
  CreatedAt: z.lazy(() => SortOrderSchema).optional(),
  UpdatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestCptCodeMinOrderByAggregateInputSchema: z.ZodType<Prisma.TestCptCodeMinOrderByAggregateInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  TestId: z.lazy(() => SortOrderSchema).optional(),
  LabTestId: z.lazy(() => SortOrderSchema).optional(),
  CptCode: z.lazy(() => SortOrderSchema).optional(),
  Modifier: z.lazy(() => SortOrderSchema).optional(),
  Comments: z.lazy(() => SortOrderSchema).optional(),
  CreatedAt: z.lazy(() => SortOrderSchema).optional(),
  UpdatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestCptCodeSumOrderByAggregateInputSchema: z.ZodType<Prisma.TestCptCodeSumOrderByAggregateInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  TestId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LOINCNullableRelationFilterSchema: z.ZodType<Prisma.LOINCNullableRelationFilter> = z.object({
  is: z.lazy(() => LOINCWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => LOINCWhereInputSchema).optional().nullable()
}).strict();

export const TestOrderLoincOrderByRelevanceInputSchema: z.ZodType<Prisma.TestOrderLoincOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => TestOrderLoincOrderByRelevanceFieldEnumSchema),z.lazy(() => TestOrderLoincOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const TestOrderLoincTestIdOrderLoincCompoundUniqueInputSchema: z.ZodType<Prisma.TestOrderLoincTestIdOrderLoincCompoundUniqueInput> = z.object({
  TestId: z.number(),
  OrderLoinc: z.string()
}).strict();

export const TestOrderLoincCountOrderByAggregateInputSchema: z.ZodType<Prisma.TestOrderLoincCountOrderByAggregateInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  TestId: z.lazy(() => SortOrderSchema).optional(),
  LabTestId: z.lazy(() => SortOrderSchema).optional(),
  OrderLoinc: z.lazy(() => SortOrderSchema).optional(),
  CreatedAt: z.lazy(() => SortOrderSchema).optional(),
  UpdatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestOrderLoincAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TestOrderLoincAvgOrderByAggregateInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  TestId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestOrderLoincMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TestOrderLoincMaxOrderByAggregateInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  TestId: z.lazy(() => SortOrderSchema).optional(),
  LabTestId: z.lazy(() => SortOrderSchema).optional(),
  OrderLoinc: z.lazy(() => SortOrderSchema).optional(),
  CreatedAt: z.lazy(() => SortOrderSchema).optional(),
  UpdatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestOrderLoincMinOrderByAggregateInputSchema: z.ZodType<Prisma.TestOrderLoincMinOrderByAggregateInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  TestId: z.lazy(() => SortOrderSchema).optional(),
  LabTestId: z.lazy(() => SortOrderSchema).optional(),
  OrderLoinc: z.lazy(() => SortOrderSchema).optional(),
  CreatedAt: z.lazy(() => SortOrderSchema).optional(),
  UpdatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestOrderLoincSumOrderByAggregateInputSchema: z.ZodType<Prisma.TestOrderLoincSumOrderByAggregateInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  TestId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestResultLoincOrderByRelevanceInputSchema: z.ZodType<Prisma.TestResultLoincOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => TestResultLoincOrderByRelevanceFieldEnumSchema),z.lazy(() => TestResultLoincOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const TestResultLoincCountOrderByAggregateInputSchema: z.ZodType<Prisma.TestResultLoincCountOrderByAggregateInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  TestId: z.lazy(() => SortOrderSchema).optional(),
  LabTestId: z.lazy(() => SortOrderSchema).optional(),
  ResultCode: z.lazy(() => SortOrderSchema).optional(),
  ResultCodeName: z.lazy(() => SortOrderSchema).optional(),
  UofM: z.lazy(() => SortOrderSchema).optional(),
  ResultLoinc: z.lazy(() => SortOrderSchema).optional(),
  CreatedAt: z.lazy(() => SortOrderSchema).optional(),
  UpdatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestResultLoincAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TestResultLoincAvgOrderByAggregateInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  TestId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestResultLoincMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TestResultLoincMaxOrderByAggregateInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  TestId: z.lazy(() => SortOrderSchema).optional(),
  LabTestId: z.lazy(() => SortOrderSchema).optional(),
  ResultCode: z.lazy(() => SortOrderSchema).optional(),
  ResultCodeName: z.lazy(() => SortOrderSchema).optional(),
  UofM: z.lazy(() => SortOrderSchema).optional(),
  ResultLoinc: z.lazy(() => SortOrderSchema).optional(),
  CreatedAt: z.lazy(() => SortOrderSchema).optional(),
  UpdatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestResultLoincMinOrderByAggregateInputSchema: z.ZodType<Prisma.TestResultLoincMinOrderByAggregateInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  TestId: z.lazy(() => SortOrderSchema).optional(),
  LabTestId: z.lazy(() => SortOrderSchema).optional(),
  ResultCode: z.lazy(() => SortOrderSchema).optional(),
  ResultCodeName: z.lazy(() => SortOrderSchema).optional(),
  UofM: z.lazy(() => SortOrderSchema).optional(),
  ResultLoinc: z.lazy(() => SortOrderSchema).optional(),
  CreatedAt: z.lazy(() => SortOrderSchema).optional(),
  UpdatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TestResultLoincSumOrderByAggregateInputSchema: z.ZodType<Prisma.TestResultLoincSumOrderByAggregateInput> = z.object({
  Id: z.lazy(() => SortOrderSchema).optional(),
  TestId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.date().optional().nullable(),
  in: z.date().array().optional().nullable(),
  notIn: z.date().array().optional().nullable(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([ z.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const AccountListRelationFilterSchema: z.ZodType<Prisma.AccountListRelationFilter> = z.object({
  every: z.lazy(() => AccountWhereInputSchema).optional(),
  some: z.lazy(() => AccountWhereInputSchema).optional(),
  none: z.lazy(() => AccountWhereInputSchema).optional()
}).strict();

export const SessionListRelationFilterSchema: z.ZodType<Prisma.SessionListRelationFilter> = z.object({
  every: z.lazy(() => SessionWhereInputSchema).optional(),
  some: z.lazy(() => SessionWhereInputSchema).optional(),
  none: z.lazy(() => SessionWhereInputSchema).optional()
}).strict();

export const AccountOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AccountOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SessionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserOrderByRelevanceInputSchema: z.ZodType<Prisma.UserOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => UserOrderByRelevanceFieldEnumSchema),z.lazy(() => UserOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.date().optional().nullable(),
  in: z.date().array().optional().nullable(),
  notIn: z.date().array().optional().nullable(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([ z.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const VerificationTokenOrderByRelevanceInputSchema: z.ZodType<Prisma.VerificationTokenOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => VerificationTokenOrderByRelevanceFieldEnumSchema),z.lazy(() => VerificationTokenOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const VerificationTokenIdentifierTokenCompoundUniqueInputSchema: z.ZodType<Prisma.VerificationTokenIdentifierTokenCompoundUniqueInput> = z.object({
  identifier: z.string(),
  token: z.string()
}).strict();

export const VerificationTokenCountOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenCountOrderByAggregateInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenMaxOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenMaxOrderByAggregateInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenMinOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenMinOrderByAggregateInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserCreateNestedOneWithoutAccountInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAccountInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAccountInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const UserUpdateOneRequiredWithoutAccountNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAccountNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAccountInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAccountInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutAccountInputSchema),z.lazy(() => UserUpdateWithoutAccountInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountInputSchema) ]).optional(),
}).strict();

export const TestBiomarkerCreateNestedManyWithoutBIOMARKERInputSchema: z.ZodType<Prisma.TestBiomarkerCreateNestedManyWithoutBIOMARKERInput> = z.object({
  create: z.union([ z.lazy(() => TestBiomarkerCreateWithoutBIOMARKERInputSchema),z.lazy(() => TestBiomarkerCreateWithoutBIOMARKERInputSchema).array(),z.lazy(() => TestBiomarkerUncheckedCreateWithoutBIOMARKERInputSchema),z.lazy(() => TestBiomarkerUncheckedCreateWithoutBIOMARKERInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestBiomarkerCreateOrConnectWithoutBIOMARKERInputSchema),z.lazy(() => TestBiomarkerCreateOrConnectWithoutBIOMARKERInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestBiomarkerCreateManyBIOMARKERInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestBiomarkerWhereUniqueInputSchema),z.lazy(() => TestBiomarkerWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TestBiomarkerUncheckedCreateNestedManyWithoutBIOMARKERInputSchema: z.ZodType<Prisma.TestBiomarkerUncheckedCreateNestedManyWithoutBIOMARKERInput> = z.object({
  create: z.union([ z.lazy(() => TestBiomarkerCreateWithoutBIOMARKERInputSchema),z.lazy(() => TestBiomarkerCreateWithoutBIOMARKERInputSchema).array(),z.lazy(() => TestBiomarkerUncheckedCreateWithoutBIOMARKERInputSchema),z.lazy(() => TestBiomarkerUncheckedCreateWithoutBIOMARKERInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestBiomarkerCreateOrConnectWithoutBIOMARKERInputSchema),z.lazy(() => TestBiomarkerCreateOrConnectWithoutBIOMARKERInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestBiomarkerCreateManyBIOMARKERInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestBiomarkerWhereUniqueInputSchema),z.lazy(() => TestBiomarkerWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TestBiomarkerUpdateManyWithoutBIOMARKERNestedInputSchema: z.ZodType<Prisma.TestBiomarkerUpdateManyWithoutBIOMARKERNestedInput> = z.object({
  create: z.union([ z.lazy(() => TestBiomarkerCreateWithoutBIOMARKERInputSchema),z.lazy(() => TestBiomarkerCreateWithoutBIOMARKERInputSchema).array(),z.lazy(() => TestBiomarkerUncheckedCreateWithoutBIOMARKERInputSchema),z.lazy(() => TestBiomarkerUncheckedCreateWithoutBIOMARKERInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestBiomarkerCreateOrConnectWithoutBIOMARKERInputSchema),z.lazy(() => TestBiomarkerCreateOrConnectWithoutBIOMARKERInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestBiomarkerUpsertWithWhereUniqueWithoutBIOMARKERInputSchema),z.lazy(() => TestBiomarkerUpsertWithWhereUniqueWithoutBIOMARKERInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestBiomarkerCreateManyBIOMARKERInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestBiomarkerWhereUniqueInputSchema),z.lazy(() => TestBiomarkerWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestBiomarkerWhereUniqueInputSchema),z.lazy(() => TestBiomarkerWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestBiomarkerWhereUniqueInputSchema),z.lazy(() => TestBiomarkerWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestBiomarkerWhereUniqueInputSchema),z.lazy(() => TestBiomarkerWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestBiomarkerUpdateWithWhereUniqueWithoutBIOMARKERInputSchema),z.lazy(() => TestBiomarkerUpdateWithWhereUniqueWithoutBIOMARKERInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestBiomarkerUpdateManyWithWhereWithoutBIOMARKERInputSchema),z.lazy(() => TestBiomarkerUpdateManyWithWhereWithoutBIOMARKERInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestBiomarkerScalarWhereInputSchema),z.lazy(() => TestBiomarkerScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TestBiomarkerUncheckedUpdateManyWithoutBIOMARKERNestedInputSchema: z.ZodType<Prisma.TestBiomarkerUncheckedUpdateManyWithoutBIOMARKERNestedInput> = z.object({
  create: z.union([ z.lazy(() => TestBiomarkerCreateWithoutBIOMARKERInputSchema),z.lazy(() => TestBiomarkerCreateWithoutBIOMARKERInputSchema).array(),z.lazy(() => TestBiomarkerUncheckedCreateWithoutBIOMARKERInputSchema),z.lazy(() => TestBiomarkerUncheckedCreateWithoutBIOMARKERInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestBiomarkerCreateOrConnectWithoutBIOMARKERInputSchema),z.lazy(() => TestBiomarkerCreateOrConnectWithoutBIOMARKERInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestBiomarkerUpsertWithWhereUniqueWithoutBIOMARKERInputSchema),z.lazy(() => TestBiomarkerUpsertWithWhereUniqueWithoutBIOMARKERInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestBiomarkerCreateManyBIOMARKERInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestBiomarkerWhereUniqueInputSchema),z.lazy(() => TestBiomarkerWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestBiomarkerWhereUniqueInputSchema),z.lazy(() => TestBiomarkerWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestBiomarkerWhereUniqueInputSchema),z.lazy(() => TestBiomarkerWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestBiomarkerWhereUniqueInputSchema),z.lazy(() => TestBiomarkerWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestBiomarkerUpdateWithWhereUniqueWithoutBIOMARKERInputSchema),z.lazy(() => TestBiomarkerUpdateWithWhereUniqueWithoutBIOMARKERInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestBiomarkerUpdateManyWithWhereWithoutBIOMARKERInputSchema),z.lazy(() => TestBiomarkerUpdateManyWithWhereWithoutBIOMARKERInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestBiomarkerScalarWhereInputSchema),z.lazy(() => TestBiomarkerScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TestOrderLoincCreateNestedManyWithoutLOINCInputSchema: z.ZodType<Prisma.TestOrderLoincCreateNestedManyWithoutLOINCInput> = z.object({
  create: z.union([ z.lazy(() => TestOrderLoincCreateWithoutLOINCInputSchema),z.lazy(() => TestOrderLoincCreateWithoutLOINCInputSchema).array(),z.lazy(() => TestOrderLoincUncheckedCreateWithoutLOINCInputSchema),z.lazy(() => TestOrderLoincUncheckedCreateWithoutLOINCInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestOrderLoincCreateOrConnectWithoutLOINCInputSchema),z.lazy(() => TestOrderLoincCreateOrConnectWithoutLOINCInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestOrderLoincCreateManyLOINCInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestOrderLoincWhereUniqueInputSchema),z.lazy(() => TestOrderLoincWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TestResultLoincCreateNestedManyWithoutLOINCInputSchema: z.ZodType<Prisma.TestResultLoincCreateNestedManyWithoutLOINCInput> = z.object({
  create: z.union([ z.lazy(() => TestResultLoincCreateWithoutLOINCInputSchema),z.lazy(() => TestResultLoincCreateWithoutLOINCInputSchema).array(),z.lazy(() => TestResultLoincUncheckedCreateWithoutLOINCInputSchema),z.lazy(() => TestResultLoincUncheckedCreateWithoutLOINCInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestResultLoincCreateOrConnectWithoutLOINCInputSchema),z.lazy(() => TestResultLoincCreateOrConnectWithoutLOINCInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestResultLoincCreateManyLOINCInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestResultLoincWhereUniqueInputSchema),z.lazy(() => TestResultLoincWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TestOrderLoincUncheckedCreateNestedManyWithoutLOINCInputSchema: z.ZodType<Prisma.TestOrderLoincUncheckedCreateNestedManyWithoutLOINCInput> = z.object({
  create: z.union([ z.lazy(() => TestOrderLoincCreateWithoutLOINCInputSchema),z.lazy(() => TestOrderLoincCreateWithoutLOINCInputSchema).array(),z.lazy(() => TestOrderLoincUncheckedCreateWithoutLOINCInputSchema),z.lazy(() => TestOrderLoincUncheckedCreateWithoutLOINCInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestOrderLoincCreateOrConnectWithoutLOINCInputSchema),z.lazy(() => TestOrderLoincCreateOrConnectWithoutLOINCInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestOrderLoincCreateManyLOINCInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestOrderLoincWhereUniqueInputSchema),z.lazy(() => TestOrderLoincWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TestResultLoincUncheckedCreateNestedManyWithoutLOINCInputSchema: z.ZodType<Prisma.TestResultLoincUncheckedCreateNestedManyWithoutLOINCInput> = z.object({
  create: z.union([ z.lazy(() => TestResultLoincCreateWithoutLOINCInputSchema),z.lazy(() => TestResultLoincCreateWithoutLOINCInputSchema).array(),z.lazy(() => TestResultLoincUncheckedCreateWithoutLOINCInputSchema),z.lazy(() => TestResultLoincUncheckedCreateWithoutLOINCInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestResultLoincCreateOrConnectWithoutLOINCInputSchema),z.lazy(() => TestResultLoincCreateOrConnectWithoutLOINCInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestResultLoincCreateManyLOINCInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestResultLoincWhereUniqueInputSchema),z.lazy(() => TestResultLoincWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TestOrderLoincUpdateManyWithoutLOINCNestedInputSchema: z.ZodType<Prisma.TestOrderLoincUpdateManyWithoutLOINCNestedInput> = z.object({
  create: z.union([ z.lazy(() => TestOrderLoincCreateWithoutLOINCInputSchema),z.lazy(() => TestOrderLoincCreateWithoutLOINCInputSchema).array(),z.lazy(() => TestOrderLoincUncheckedCreateWithoutLOINCInputSchema),z.lazy(() => TestOrderLoincUncheckedCreateWithoutLOINCInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestOrderLoincCreateOrConnectWithoutLOINCInputSchema),z.lazy(() => TestOrderLoincCreateOrConnectWithoutLOINCInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestOrderLoincUpsertWithWhereUniqueWithoutLOINCInputSchema),z.lazy(() => TestOrderLoincUpsertWithWhereUniqueWithoutLOINCInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestOrderLoincCreateManyLOINCInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestOrderLoincWhereUniqueInputSchema),z.lazy(() => TestOrderLoincWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestOrderLoincWhereUniqueInputSchema),z.lazy(() => TestOrderLoincWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestOrderLoincWhereUniqueInputSchema),z.lazy(() => TestOrderLoincWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestOrderLoincWhereUniqueInputSchema),z.lazy(() => TestOrderLoincWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestOrderLoincUpdateWithWhereUniqueWithoutLOINCInputSchema),z.lazy(() => TestOrderLoincUpdateWithWhereUniqueWithoutLOINCInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestOrderLoincUpdateManyWithWhereWithoutLOINCInputSchema),z.lazy(() => TestOrderLoincUpdateManyWithWhereWithoutLOINCInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestOrderLoincScalarWhereInputSchema),z.lazy(() => TestOrderLoincScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TestResultLoincUpdateManyWithoutLOINCNestedInputSchema: z.ZodType<Prisma.TestResultLoincUpdateManyWithoutLOINCNestedInput> = z.object({
  create: z.union([ z.lazy(() => TestResultLoincCreateWithoutLOINCInputSchema),z.lazy(() => TestResultLoincCreateWithoutLOINCInputSchema).array(),z.lazy(() => TestResultLoincUncheckedCreateWithoutLOINCInputSchema),z.lazy(() => TestResultLoincUncheckedCreateWithoutLOINCInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestResultLoincCreateOrConnectWithoutLOINCInputSchema),z.lazy(() => TestResultLoincCreateOrConnectWithoutLOINCInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestResultLoincUpsertWithWhereUniqueWithoutLOINCInputSchema),z.lazy(() => TestResultLoincUpsertWithWhereUniqueWithoutLOINCInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestResultLoincCreateManyLOINCInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestResultLoincWhereUniqueInputSchema),z.lazy(() => TestResultLoincWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestResultLoincWhereUniqueInputSchema),z.lazy(() => TestResultLoincWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestResultLoincWhereUniqueInputSchema),z.lazy(() => TestResultLoincWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestResultLoincWhereUniqueInputSchema),z.lazy(() => TestResultLoincWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestResultLoincUpdateWithWhereUniqueWithoutLOINCInputSchema),z.lazy(() => TestResultLoincUpdateWithWhereUniqueWithoutLOINCInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestResultLoincUpdateManyWithWhereWithoutLOINCInputSchema),z.lazy(() => TestResultLoincUpdateManyWithWhereWithoutLOINCInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestResultLoincScalarWhereInputSchema),z.lazy(() => TestResultLoincScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TestOrderLoincUncheckedUpdateManyWithoutLOINCNestedInputSchema: z.ZodType<Prisma.TestOrderLoincUncheckedUpdateManyWithoutLOINCNestedInput> = z.object({
  create: z.union([ z.lazy(() => TestOrderLoincCreateWithoutLOINCInputSchema),z.lazy(() => TestOrderLoincCreateWithoutLOINCInputSchema).array(),z.lazy(() => TestOrderLoincUncheckedCreateWithoutLOINCInputSchema),z.lazy(() => TestOrderLoincUncheckedCreateWithoutLOINCInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestOrderLoincCreateOrConnectWithoutLOINCInputSchema),z.lazy(() => TestOrderLoincCreateOrConnectWithoutLOINCInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestOrderLoincUpsertWithWhereUniqueWithoutLOINCInputSchema),z.lazy(() => TestOrderLoincUpsertWithWhereUniqueWithoutLOINCInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestOrderLoincCreateManyLOINCInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestOrderLoincWhereUniqueInputSchema),z.lazy(() => TestOrderLoincWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestOrderLoincWhereUniqueInputSchema),z.lazy(() => TestOrderLoincWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestOrderLoincWhereUniqueInputSchema),z.lazy(() => TestOrderLoincWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestOrderLoincWhereUniqueInputSchema),z.lazy(() => TestOrderLoincWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestOrderLoincUpdateWithWhereUniqueWithoutLOINCInputSchema),z.lazy(() => TestOrderLoincUpdateWithWhereUniqueWithoutLOINCInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestOrderLoincUpdateManyWithWhereWithoutLOINCInputSchema),z.lazy(() => TestOrderLoincUpdateManyWithWhereWithoutLOINCInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestOrderLoincScalarWhereInputSchema),z.lazy(() => TestOrderLoincScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TestResultLoincUncheckedUpdateManyWithoutLOINCNestedInputSchema: z.ZodType<Prisma.TestResultLoincUncheckedUpdateManyWithoutLOINCNestedInput> = z.object({
  create: z.union([ z.lazy(() => TestResultLoincCreateWithoutLOINCInputSchema),z.lazy(() => TestResultLoincCreateWithoutLOINCInputSchema).array(),z.lazy(() => TestResultLoincUncheckedCreateWithoutLOINCInputSchema),z.lazy(() => TestResultLoincUncheckedCreateWithoutLOINCInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestResultLoincCreateOrConnectWithoutLOINCInputSchema),z.lazy(() => TestResultLoincCreateOrConnectWithoutLOINCInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestResultLoincUpsertWithWhereUniqueWithoutLOINCInputSchema),z.lazy(() => TestResultLoincUpsertWithWhereUniqueWithoutLOINCInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestResultLoincCreateManyLOINCInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestResultLoincWhereUniqueInputSchema),z.lazy(() => TestResultLoincWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestResultLoincWhereUniqueInputSchema),z.lazy(() => TestResultLoincWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestResultLoincWhereUniqueInputSchema),z.lazy(() => TestResultLoincWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestResultLoincWhereUniqueInputSchema),z.lazy(() => TestResultLoincWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestResultLoincUpdateWithWhereUniqueWithoutLOINCInputSchema),z.lazy(() => TestResultLoincUpdateWithWhereUniqueWithoutLOINCInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestResultLoincUpdateManyWithWhereWithoutLOINCInputSchema),z.lazy(() => TestResultLoincUpdateManyWithWhereWithoutLOINCInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestResultLoincScalarWhereInputSchema),z.lazy(() => TestResultLoincScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TestCatalogCreateNestedManyWithoutLabInputSchema: z.ZodType<Prisma.TestCatalogCreateNestedManyWithoutLabInput> = z.object({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutLabInputSchema),z.lazy(() => TestCatalogCreateWithoutLabInputSchema).array(),z.lazy(() => TestCatalogUncheckedCreateWithoutLabInputSchema),z.lazy(() => TestCatalogUncheckedCreateWithoutLabInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogCreateOrConnectWithoutLabInputSchema),z.lazy(() => TestCatalogCreateOrConnectWithoutLabInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogCreateManyLabInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestCatalogWhereUniqueInputSchema),z.lazy(() => TestCatalogWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TestCatalogUncheckedCreateNestedManyWithoutLabInputSchema: z.ZodType<Prisma.TestCatalogUncheckedCreateNestedManyWithoutLabInput> = z.object({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutLabInputSchema),z.lazy(() => TestCatalogCreateWithoutLabInputSchema).array(),z.lazy(() => TestCatalogUncheckedCreateWithoutLabInputSchema),z.lazy(() => TestCatalogUncheckedCreateWithoutLabInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogCreateOrConnectWithoutLabInputSchema),z.lazy(() => TestCatalogCreateOrConnectWithoutLabInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogCreateManyLabInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestCatalogWhereUniqueInputSchema),z.lazy(() => TestCatalogWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TestCatalogUpdateManyWithoutLabNestedInputSchema: z.ZodType<Prisma.TestCatalogUpdateManyWithoutLabNestedInput> = z.object({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutLabInputSchema),z.lazy(() => TestCatalogCreateWithoutLabInputSchema).array(),z.lazy(() => TestCatalogUncheckedCreateWithoutLabInputSchema),z.lazy(() => TestCatalogUncheckedCreateWithoutLabInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogCreateOrConnectWithoutLabInputSchema),z.lazy(() => TestCatalogCreateOrConnectWithoutLabInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestCatalogUpsertWithWhereUniqueWithoutLabInputSchema),z.lazy(() => TestCatalogUpsertWithWhereUniqueWithoutLabInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogCreateManyLabInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestCatalogWhereUniqueInputSchema),z.lazy(() => TestCatalogWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestCatalogWhereUniqueInputSchema),z.lazy(() => TestCatalogWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestCatalogWhereUniqueInputSchema),z.lazy(() => TestCatalogWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestCatalogWhereUniqueInputSchema),z.lazy(() => TestCatalogWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestCatalogUpdateWithWhereUniqueWithoutLabInputSchema),z.lazy(() => TestCatalogUpdateWithWhereUniqueWithoutLabInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestCatalogUpdateManyWithWhereWithoutLabInputSchema),z.lazy(() => TestCatalogUpdateManyWithWhereWithoutLabInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestCatalogScalarWhereInputSchema),z.lazy(() => TestCatalogScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const TestCatalogUncheckedUpdateManyWithoutLabNestedInputSchema: z.ZodType<Prisma.TestCatalogUncheckedUpdateManyWithoutLabNestedInput> = z.object({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutLabInputSchema),z.lazy(() => TestCatalogCreateWithoutLabInputSchema).array(),z.lazy(() => TestCatalogUncheckedCreateWithoutLabInputSchema),z.lazy(() => TestCatalogUncheckedCreateWithoutLabInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogCreateOrConnectWithoutLabInputSchema),z.lazy(() => TestCatalogCreateOrConnectWithoutLabInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestCatalogUpsertWithWhereUniqueWithoutLabInputSchema),z.lazy(() => TestCatalogUpsertWithWhereUniqueWithoutLabInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogCreateManyLabInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestCatalogWhereUniqueInputSchema),z.lazy(() => TestCatalogWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestCatalogWhereUniqueInputSchema),z.lazy(() => TestCatalogWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestCatalogWhereUniqueInputSchema),z.lazy(() => TestCatalogWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestCatalogWhereUniqueInputSchema),z.lazy(() => TestCatalogWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestCatalogUpdateWithWhereUniqueWithoutLabInputSchema),z.lazy(() => TestCatalogUpdateWithWhereUniqueWithoutLabInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestCatalogUpdateManyWithWhereWithoutLabInputSchema),z.lazy(() => TestCatalogUpdateManyWithWhereWithoutLabInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestCatalogScalarWhereInputSchema),z.lazy(() => TestCatalogScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BigIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BigIntFieldUpdateOperationsInput> = z.object({
  set: z.bigint().optional(),
  increment: z.bigint().optional(),
  decrement: z.bigint().optional(),
  multiply: z.bigint().optional(),
  divide: z.bigint().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.date().optional()
}).strict();

export const UserCreateNestedOneWithoutSessionInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSessionInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSessionInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutSessionNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSessionNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSessionInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSessionInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutSessionInputSchema),z.lazy(() => UserUpdateWithoutSessionInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionInputSchema) ]).optional(),
}).strict();

export const BIOMARKERCreateNestedOneWithoutTestBiomarkerInputSchema: z.ZodType<Prisma.BIOMARKERCreateNestedOneWithoutTestBiomarkerInput> = z.object({
  create: z.union([ z.lazy(() => BIOMARKERCreateWithoutTestBiomarkerInputSchema),z.lazy(() => BIOMARKERUncheckedCreateWithoutTestBiomarkerInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BIOMARKERCreateOrConnectWithoutTestBiomarkerInputSchema).optional(),
  connect: z.lazy(() => BIOMARKERWhereUniqueInputSchema).optional()
}).strict();

export const TestCatalogCreateNestedOneWithoutTestBiomarkerInputSchema: z.ZodType<Prisma.TestCatalogCreateNestedOneWithoutTestBiomarkerInput> = z.object({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutTestBiomarkerInputSchema),z.lazy(() => TestCatalogUncheckedCreateWithoutTestBiomarkerInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogCreateOrConnectWithoutTestBiomarkerInputSchema).optional(),
  connect: z.lazy(() => TestCatalogWhereUniqueInputSchema).optional()
}).strict();

export const BIOMARKERUpdateOneRequiredWithoutTestBiomarkerNestedInputSchema: z.ZodType<Prisma.BIOMARKERUpdateOneRequiredWithoutTestBiomarkerNestedInput> = z.object({
  create: z.union([ z.lazy(() => BIOMARKERCreateWithoutTestBiomarkerInputSchema),z.lazy(() => BIOMARKERUncheckedCreateWithoutTestBiomarkerInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BIOMARKERCreateOrConnectWithoutTestBiomarkerInputSchema).optional(),
  upsert: z.lazy(() => BIOMARKERUpsertWithoutTestBiomarkerInputSchema).optional(),
  connect: z.lazy(() => BIOMARKERWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BIOMARKERUpdateToOneWithWhereWithoutTestBiomarkerInputSchema),z.lazy(() => BIOMARKERUpdateWithoutTestBiomarkerInputSchema),z.lazy(() => BIOMARKERUncheckedUpdateWithoutTestBiomarkerInputSchema) ]).optional(),
}).strict();

export const TestCatalogUpdateOneRequiredWithoutTestBiomarkerNestedInputSchema: z.ZodType<Prisma.TestCatalogUpdateOneRequiredWithoutTestBiomarkerNestedInput> = z.object({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutTestBiomarkerInputSchema),z.lazy(() => TestCatalogUncheckedCreateWithoutTestBiomarkerInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogCreateOrConnectWithoutTestBiomarkerInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogUpsertWithoutTestBiomarkerInputSchema).optional(),
  connect: z.lazy(() => TestCatalogWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogUpdateToOneWithWhereWithoutTestBiomarkerInputSchema),z.lazy(() => TestCatalogUpdateWithoutTestBiomarkerInputSchema),z.lazy(() => TestCatalogUncheckedUpdateWithoutTestBiomarkerInputSchema) ]).optional(),
}).strict();

export const TestBiomarkerCreateNestedManyWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestBiomarkerCreateNestedManyWithoutTestCatalogInput> = z.object({
  create: z.union([ z.lazy(() => TestBiomarkerCreateWithoutTestCatalogInputSchema),z.lazy(() => TestBiomarkerCreateWithoutTestCatalogInputSchema).array(),z.lazy(() => TestBiomarkerUncheckedCreateWithoutTestCatalogInputSchema),z.lazy(() => TestBiomarkerUncheckedCreateWithoutTestCatalogInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestBiomarkerCreateOrConnectWithoutTestCatalogInputSchema),z.lazy(() => TestBiomarkerCreateOrConnectWithoutTestCatalogInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestBiomarkerCreateManyTestCatalogInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestBiomarkerWhereUniqueInputSchema),z.lazy(() => TestBiomarkerWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const LabCreateNestedOneWithoutTestCatalogInputSchema: z.ZodType<Prisma.LabCreateNestedOneWithoutTestCatalogInput> = z.object({
  create: z.union([ z.lazy(() => LabCreateWithoutTestCatalogInputSchema),z.lazy(() => LabUncheckedCreateWithoutTestCatalogInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LabCreateOrConnectWithoutTestCatalogInputSchema).optional(),
  connect: z.lazy(() => LabWhereUniqueInputSchema).optional()
}).strict();

export const TestCptCodeCreateNestedManyWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestCptCodeCreateNestedManyWithoutTestCatalogInput> = z.object({
  create: z.union([ z.lazy(() => TestCptCodeCreateWithoutTestCatalogInputSchema),z.lazy(() => TestCptCodeCreateWithoutTestCatalogInputSchema).array(),z.lazy(() => TestCptCodeUncheckedCreateWithoutTestCatalogInputSchema),z.lazy(() => TestCptCodeUncheckedCreateWithoutTestCatalogInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCptCodeCreateOrConnectWithoutTestCatalogInputSchema),z.lazy(() => TestCptCodeCreateOrConnectWithoutTestCatalogInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCptCodeCreateManyTestCatalogInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestCptCodeWhereUniqueInputSchema),z.lazy(() => TestCptCodeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TestOrderLoincCreateNestedManyWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestOrderLoincCreateNestedManyWithoutTestCatalogInput> = z.object({
  create: z.union([ z.lazy(() => TestOrderLoincCreateWithoutTestCatalogInputSchema),z.lazy(() => TestOrderLoincCreateWithoutTestCatalogInputSchema).array(),z.lazy(() => TestOrderLoincUncheckedCreateWithoutTestCatalogInputSchema),z.lazy(() => TestOrderLoincUncheckedCreateWithoutTestCatalogInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestOrderLoincCreateOrConnectWithoutTestCatalogInputSchema),z.lazy(() => TestOrderLoincCreateOrConnectWithoutTestCatalogInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestOrderLoincCreateManyTestCatalogInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestOrderLoincWhereUniqueInputSchema),z.lazy(() => TestOrderLoincWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TestResultLoincCreateNestedManyWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestResultLoincCreateNestedManyWithoutTestCatalogInput> = z.object({
  create: z.union([ z.lazy(() => TestResultLoincCreateWithoutTestCatalogInputSchema),z.lazy(() => TestResultLoincCreateWithoutTestCatalogInputSchema).array(),z.lazy(() => TestResultLoincUncheckedCreateWithoutTestCatalogInputSchema),z.lazy(() => TestResultLoincUncheckedCreateWithoutTestCatalogInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestResultLoincCreateOrConnectWithoutTestCatalogInputSchema),z.lazy(() => TestResultLoincCreateOrConnectWithoutTestCatalogInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestResultLoincCreateManyTestCatalogInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestResultLoincWhereUniqueInputSchema),z.lazy(() => TestResultLoincWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TestBiomarkerUncheckedCreateNestedManyWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestBiomarkerUncheckedCreateNestedManyWithoutTestCatalogInput> = z.object({
  create: z.union([ z.lazy(() => TestBiomarkerCreateWithoutTestCatalogInputSchema),z.lazy(() => TestBiomarkerCreateWithoutTestCatalogInputSchema).array(),z.lazy(() => TestBiomarkerUncheckedCreateWithoutTestCatalogInputSchema),z.lazy(() => TestBiomarkerUncheckedCreateWithoutTestCatalogInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestBiomarkerCreateOrConnectWithoutTestCatalogInputSchema),z.lazy(() => TestBiomarkerCreateOrConnectWithoutTestCatalogInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestBiomarkerCreateManyTestCatalogInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestBiomarkerWhereUniqueInputSchema),z.lazy(() => TestBiomarkerWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TestCptCodeUncheckedCreateNestedManyWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestCptCodeUncheckedCreateNestedManyWithoutTestCatalogInput> = z.object({
  create: z.union([ z.lazy(() => TestCptCodeCreateWithoutTestCatalogInputSchema),z.lazy(() => TestCptCodeCreateWithoutTestCatalogInputSchema).array(),z.lazy(() => TestCptCodeUncheckedCreateWithoutTestCatalogInputSchema),z.lazy(() => TestCptCodeUncheckedCreateWithoutTestCatalogInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCptCodeCreateOrConnectWithoutTestCatalogInputSchema),z.lazy(() => TestCptCodeCreateOrConnectWithoutTestCatalogInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCptCodeCreateManyTestCatalogInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestCptCodeWhereUniqueInputSchema),z.lazy(() => TestCptCodeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TestOrderLoincUncheckedCreateNestedManyWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestOrderLoincUncheckedCreateNestedManyWithoutTestCatalogInput> = z.object({
  create: z.union([ z.lazy(() => TestOrderLoincCreateWithoutTestCatalogInputSchema),z.lazy(() => TestOrderLoincCreateWithoutTestCatalogInputSchema).array(),z.lazy(() => TestOrderLoincUncheckedCreateWithoutTestCatalogInputSchema),z.lazy(() => TestOrderLoincUncheckedCreateWithoutTestCatalogInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestOrderLoincCreateOrConnectWithoutTestCatalogInputSchema),z.lazy(() => TestOrderLoincCreateOrConnectWithoutTestCatalogInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestOrderLoincCreateManyTestCatalogInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestOrderLoincWhereUniqueInputSchema),z.lazy(() => TestOrderLoincWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TestResultLoincUncheckedCreateNestedManyWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestResultLoincUncheckedCreateNestedManyWithoutTestCatalogInput> = z.object({
  create: z.union([ z.lazy(() => TestResultLoincCreateWithoutTestCatalogInputSchema),z.lazy(() => TestResultLoincCreateWithoutTestCatalogInputSchema).array(),z.lazy(() => TestResultLoincUncheckedCreateWithoutTestCatalogInputSchema),z.lazy(() => TestResultLoincUncheckedCreateWithoutTestCatalogInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestResultLoincCreateOrConnectWithoutTestCatalogInputSchema),z.lazy(() => TestResultLoincCreateOrConnectWithoutTestCatalogInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestResultLoincCreateManyTestCatalogInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestResultLoincWhereUniqueInputSchema),z.lazy(() => TestResultLoincWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TestBiomarkerUpdateManyWithoutTestCatalogNestedInputSchema: z.ZodType<Prisma.TestBiomarkerUpdateManyWithoutTestCatalogNestedInput> = z.object({
  create: z.union([ z.lazy(() => TestBiomarkerCreateWithoutTestCatalogInputSchema),z.lazy(() => TestBiomarkerCreateWithoutTestCatalogInputSchema).array(),z.lazy(() => TestBiomarkerUncheckedCreateWithoutTestCatalogInputSchema),z.lazy(() => TestBiomarkerUncheckedCreateWithoutTestCatalogInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestBiomarkerCreateOrConnectWithoutTestCatalogInputSchema),z.lazy(() => TestBiomarkerCreateOrConnectWithoutTestCatalogInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestBiomarkerUpsertWithWhereUniqueWithoutTestCatalogInputSchema),z.lazy(() => TestBiomarkerUpsertWithWhereUniqueWithoutTestCatalogInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestBiomarkerCreateManyTestCatalogInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestBiomarkerWhereUniqueInputSchema),z.lazy(() => TestBiomarkerWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestBiomarkerWhereUniqueInputSchema),z.lazy(() => TestBiomarkerWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestBiomarkerWhereUniqueInputSchema),z.lazy(() => TestBiomarkerWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestBiomarkerWhereUniqueInputSchema),z.lazy(() => TestBiomarkerWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestBiomarkerUpdateWithWhereUniqueWithoutTestCatalogInputSchema),z.lazy(() => TestBiomarkerUpdateWithWhereUniqueWithoutTestCatalogInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestBiomarkerUpdateManyWithWhereWithoutTestCatalogInputSchema),z.lazy(() => TestBiomarkerUpdateManyWithWhereWithoutTestCatalogInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestBiomarkerScalarWhereInputSchema),z.lazy(() => TestBiomarkerScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const LabUpdateOneWithoutTestCatalogNestedInputSchema: z.ZodType<Prisma.LabUpdateOneWithoutTestCatalogNestedInput> = z.object({
  create: z.union([ z.lazy(() => LabCreateWithoutTestCatalogInputSchema),z.lazy(() => LabUncheckedCreateWithoutTestCatalogInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LabCreateOrConnectWithoutTestCatalogInputSchema).optional(),
  upsert: z.lazy(() => LabUpsertWithoutTestCatalogInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => LabWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => LabWhereInputSchema) ]).optional(),
  connect: z.lazy(() => LabWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LabUpdateToOneWithWhereWithoutTestCatalogInputSchema),z.lazy(() => LabUpdateWithoutTestCatalogInputSchema),z.lazy(() => LabUncheckedUpdateWithoutTestCatalogInputSchema) ]).optional(),
}).strict();

export const TestCptCodeUpdateManyWithoutTestCatalogNestedInputSchema: z.ZodType<Prisma.TestCptCodeUpdateManyWithoutTestCatalogNestedInput> = z.object({
  create: z.union([ z.lazy(() => TestCptCodeCreateWithoutTestCatalogInputSchema),z.lazy(() => TestCptCodeCreateWithoutTestCatalogInputSchema).array(),z.lazy(() => TestCptCodeUncheckedCreateWithoutTestCatalogInputSchema),z.lazy(() => TestCptCodeUncheckedCreateWithoutTestCatalogInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCptCodeCreateOrConnectWithoutTestCatalogInputSchema),z.lazy(() => TestCptCodeCreateOrConnectWithoutTestCatalogInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestCptCodeUpsertWithWhereUniqueWithoutTestCatalogInputSchema),z.lazy(() => TestCptCodeUpsertWithWhereUniqueWithoutTestCatalogInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCptCodeCreateManyTestCatalogInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestCptCodeWhereUniqueInputSchema),z.lazy(() => TestCptCodeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestCptCodeWhereUniqueInputSchema),z.lazy(() => TestCptCodeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestCptCodeWhereUniqueInputSchema),z.lazy(() => TestCptCodeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestCptCodeWhereUniqueInputSchema),z.lazy(() => TestCptCodeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestCptCodeUpdateWithWhereUniqueWithoutTestCatalogInputSchema),z.lazy(() => TestCptCodeUpdateWithWhereUniqueWithoutTestCatalogInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestCptCodeUpdateManyWithWhereWithoutTestCatalogInputSchema),z.lazy(() => TestCptCodeUpdateManyWithWhereWithoutTestCatalogInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestCptCodeScalarWhereInputSchema),z.lazy(() => TestCptCodeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TestOrderLoincUpdateManyWithoutTestCatalogNestedInputSchema: z.ZodType<Prisma.TestOrderLoincUpdateManyWithoutTestCatalogNestedInput> = z.object({
  create: z.union([ z.lazy(() => TestOrderLoincCreateWithoutTestCatalogInputSchema),z.lazy(() => TestOrderLoincCreateWithoutTestCatalogInputSchema).array(),z.lazy(() => TestOrderLoincUncheckedCreateWithoutTestCatalogInputSchema),z.lazy(() => TestOrderLoincUncheckedCreateWithoutTestCatalogInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestOrderLoincCreateOrConnectWithoutTestCatalogInputSchema),z.lazy(() => TestOrderLoincCreateOrConnectWithoutTestCatalogInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestOrderLoincUpsertWithWhereUniqueWithoutTestCatalogInputSchema),z.lazy(() => TestOrderLoincUpsertWithWhereUniqueWithoutTestCatalogInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestOrderLoincCreateManyTestCatalogInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestOrderLoincWhereUniqueInputSchema),z.lazy(() => TestOrderLoincWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestOrderLoincWhereUniqueInputSchema),z.lazy(() => TestOrderLoincWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestOrderLoincWhereUniqueInputSchema),z.lazy(() => TestOrderLoincWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestOrderLoincWhereUniqueInputSchema),z.lazy(() => TestOrderLoincWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestOrderLoincUpdateWithWhereUniqueWithoutTestCatalogInputSchema),z.lazy(() => TestOrderLoincUpdateWithWhereUniqueWithoutTestCatalogInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestOrderLoincUpdateManyWithWhereWithoutTestCatalogInputSchema),z.lazy(() => TestOrderLoincUpdateManyWithWhereWithoutTestCatalogInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestOrderLoincScalarWhereInputSchema),z.lazy(() => TestOrderLoincScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TestResultLoincUpdateManyWithoutTestCatalogNestedInputSchema: z.ZodType<Prisma.TestResultLoincUpdateManyWithoutTestCatalogNestedInput> = z.object({
  create: z.union([ z.lazy(() => TestResultLoincCreateWithoutTestCatalogInputSchema),z.lazy(() => TestResultLoincCreateWithoutTestCatalogInputSchema).array(),z.lazy(() => TestResultLoincUncheckedCreateWithoutTestCatalogInputSchema),z.lazy(() => TestResultLoincUncheckedCreateWithoutTestCatalogInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestResultLoincCreateOrConnectWithoutTestCatalogInputSchema),z.lazy(() => TestResultLoincCreateOrConnectWithoutTestCatalogInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestResultLoincUpsertWithWhereUniqueWithoutTestCatalogInputSchema),z.lazy(() => TestResultLoincUpsertWithWhereUniqueWithoutTestCatalogInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestResultLoincCreateManyTestCatalogInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestResultLoincWhereUniqueInputSchema),z.lazy(() => TestResultLoincWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestResultLoincWhereUniqueInputSchema),z.lazy(() => TestResultLoincWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestResultLoincWhereUniqueInputSchema),z.lazy(() => TestResultLoincWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestResultLoincWhereUniqueInputSchema),z.lazy(() => TestResultLoincWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestResultLoincUpdateWithWhereUniqueWithoutTestCatalogInputSchema),z.lazy(() => TestResultLoincUpdateWithWhereUniqueWithoutTestCatalogInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestResultLoincUpdateManyWithWhereWithoutTestCatalogInputSchema),z.lazy(() => TestResultLoincUpdateManyWithWhereWithoutTestCatalogInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestResultLoincScalarWhereInputSchema),z.lazy(() => TestResultLoincScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TestBiomarkerUncheckedUpdateManyWithoutTestCatalogNestedInputSchema: z.ZodType<Prisma.TestBiomarkerUncheckedUpdateManyWithoutTestCatalogNestedInput> = z.object({
  create: z.union([ z.lazy(() => TestBiomarkerCreateWithoutTestCatalogInputSchema),z.lazy(() => TestBiomarkerCreateWithoutTestCatalogInputSchema).array(),z.lazy(() => TestBiomarkerUncheckedCreateWithoutTestCatalogInputSchema),z.lazy(() => TestBiomarkerUncheckedCreateWithoutTestCatalogInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestBiomarkerCreateOrConnectWithoutTestCatalogInputSchema),z.lazy(() => TestBiomarkerCreateOrConnectWithoutTestCatalogInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestBiomarkerUpsertWithWhereUniqueWithoutTestCatalogInputSchema),z.lazy(() => TestBiomarkerUpsertWithWhereUniqueWithoutTestCatalogInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestBiomarkerCreateManyTestCatalogInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestBiomarkerWhereUniqueInputSchema),z.lazy(() => TestBiomarkerWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestBiomarkerWhereUniqueInputSchema),z.lazy(() => TestBiomarkerWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestBiomarkerWhereUniqueInputSchema),z.lazy(() => TestBiomarkerWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestBiomarkerWhereUniqueInputSchema),z.lazy(() => TestBiomarkerWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestBiomarkerUpdateWithWhereUniqueWithoutTestCatalogInputSchema),z.lazy(() => TestBiomarkerUpdateWithWhereUniqueWithoutTestCatalogInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestBiomarkerUpdateManyWithWhereWithoutTestCatalogInputSchema),z.lazy(() => TestBiomarkerUpdateManyWithWhereWithoutTestCatalogInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestBiomarkerScalarWhereInputSchema),z.lazy(() => TestBiomarkerScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TestCptCodeUncheckedUpdateManyWithoutTestCatalogNestedInputSchema: z.ZodType<Prisma.TestCptCodeUncheckedUpdateManyWithoutTestCatalogNestedInput> = z.object({
  create: z.union([ z.lazy(() => TestCptCodeCreateWithoutTestCatalogInputSchema),z.lazy(() => TestCptCodeCreateWithoutTestCatalogInputSchema).array(),z.lazy(() => TestCptCodeUncheckedCreateWithoutTestCatalogInputSchema),z.lazy(() => TestCptCodeUncheckedCreateWithoutTestCatalogInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCptCodeCreateOrConnectWithoutTestCatalogInputSchema),z.lazy(() => TestCptCodeCreateOrConnectWithoutTestCatalogInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestCptCodeUpsertWithWhereUniqueWithoutTestCatalogInputSchema),z.lazy(() => TestCptCodeUpsertWithWhereUniqueWithoutTestCatalogInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCptCodeCreateManyTestCatalogInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestCptCodeWhereUniqueInputSchema),z.lazy(() => TestCptCodeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestCptCodeWhereUniqueInputSchema),z.lazy(() => TestCptCodeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestCptCodeWhereUniqueInputSchema),z.lazy(() => TestCptCodeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestCptCodeWhereUniqueInputSchema),z.lazy(() => TestCptCodeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestCptCodeUpdateWithWhereUniqueWithoutTestCatalogInputSchema),z.lazy(() => TestCptCodeUpdateWithWhereUniqueWithoutTestCatalogInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestCptCodeUpdateManyWithWhereWithoutTestCatalogInputSchema),z.lazy(() => TestCptCodeUpdateManyWithWhereWithoutTestCatalogInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestCptCodeScalarWhereInputSchema),z.lazy(() => TestCptCodeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TestOrderLoincUncheckedUpdateManyWithoutTestCatalogNestedInputSchema: z.ZodType<Prisma.TestOrderLoincUncheckedUpdateManyWithoutTestCatalogNestedInput> = z.object({
  create: z.union([ z.lazy(() => TestOrderLoincCreateWithoutTestCatalogInputSchema),z.lazy(() => TestOrderLoincCreateWithoutTestCatalogInputSchema).array(),z.lazy(() => TestOrderLoincUncheckedCreateWithoutTestCatalogInputSchema),z.lazy(() => TestOrderLoincUncheckedCreateWithoutTestCatalogInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestOrderLoincCreateOrConnectWithoutTestCatalogInputSchema),z.lazy(() => TestOrderLoincCreateOrConnectWithoutTestCatalogInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestOrderLoincUpsertWithWhereUniqueWithoutTestCatalogInputSchema),z.lazy(() => TestOrderLoincUpsertWithWhereUniqueWithoutTestCatalogInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestOrderLoincCreateManyTestCatalogInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestOrderLoincWhereUniqueInputSchema),z.lazy(() => TestOrderLoincWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestOrderLoincWhereUniqueInputSchema),z.lazy(() => TestOrderLoincWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestOrderLoincWhereUniqueInputSchema),z.lazy(() => TestOrderLoincWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestOrderLoincWhereUniqueInputSchema),z.lazy(() => TestOrderLoincWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestOrderLoincUpdateWithWhereUniqueWithoutTestCatalogInputSchema),z.lazy(() => TestOrderLoincUpdateWithWhereUniqueWithoutTestCatalogInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestOrderLoincUpdateManyWithWhereWithoutTestCatalogInputSchema),z.lazy(() => TestOrderLoincUpdateManyWithWhereWithoutTestCatalogInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestOrderLoincScalarWhereInputSchema),z.lazy(() => TestOrderLoincScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TestResultLoincUncheckedUpdateManyWithoutTestCatalogNestedInputSchema: z.ZodType<Prisma.TestResultLoincUncheckedUpdateManyWithoutTestCatalogNestedInput> = z.object({
  create: z.union([ z.lazy(() => TestResultLoincCreateWithoutTestCatalogInputSchema),z.lazy(() => TestResultLoincCreateWithoutTestCatalogInputSchema).array(),z.lazy(() => TestResultLoincUncheckedCreateWithoutTestCatalogInputSchema),z.lazy(() => TestResultLoincUncheckedCreateWithoutTestCatalogInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestResultLoincCreateOrConnectWithoutTestCatalogInputSchema),z.lazy(() => TestResultLoincCreateOrConnectWithoutTestCatalogInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestResultLoincUpsertWithWhereUniqueWithoutTestCatalogInputSchema),z.lazy(() => TestResultLoincUpsertWithWhereUniqueWithoutTestCatalogInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestResultLoincCreateManyTestCatalogInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestResultLoincWhereUniqueInputSchema),z.lazy(() => TestResultLoincWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestResultLoincWhereUniqueInputSchema),z.lazy(() => TestResultLoincWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestResultLoincWhereUniqueInputSchema),z.lazy(() => TestResultLoincWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestResultLoincWhereUniqueInputSchema),z.lazy(() => TestResultLoincWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestResultLoincUpdateWithWhereUniqueWithoutTestCatalogInputSchema),z.lazy(() => TestResultLoincUpdateWithWhereUniqueWithoutTestCatalogInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestResultLoincUpdateManyWithWhereWithoutTestCatalogInputSchema),z.lazy(() => TestResultLoincUpdateManyWithWhereWithoutTestCatalogInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestResultLoincScalarWhereInputSchema),z.lazy(() => TestResultLoincScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TestCatalogCreateNestedOneWithoutTestCptCodeInputSchema: z.ZodType<Prisma.TestCatalogCreateNestedOneWithoutTestCptCodeInput> = z.object({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutTestCptCodeInputSchema),z.lazy(() => TestCatalogUncheckedCreateWithoutTestCptCodeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogCreateOrConnectWithoutTestCptCodeInputSchema).optional(),
  connect: z.lazy(() => TestCatalogWhereUniqueInputSchema).optional()
}).strict();

export const TestCatalogUpdateOneRequiredWithoutTestCptCodeNestedInputSchema: z.ZodType<Prisma.TestCatalogUpdateOneRequiredWithoutTestCptCodeNestedInput> = z.object({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutTestCptCodeInputSchema),z.lazy(() => TestCatalogUncheckedCreateWithoutTestCptCodeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogCreateOrConnectWithoutTestCptCodeInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogUpsertWithoutTestCptCodeInputSchema).optional(),
  connect: z.lazy(() => TestCatalogWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogUpdateToOneWithWhereWithoutTestCptCodeInputSchema),z.lazy(() => TestCatalogUpdateWithoutTestCptCodeInputSchema),z.lazy(() => TestCatalogUncheckedUpdateWithoutTestCptCodeInputSchema) ]).optional(),
}).strict();

export const LOINCCreateNestedOneWithoutTestOrderLoincInputSchema: z.ZodType<Prisma.LOINCCreateNestedOneWithoutTestOrderLoincInput> = z.object({
  create: z.union([ z.lazy(() => LOINCCreateWithoutTestOrderLoincInputSchema),z.lazy(() => LOINCUncheckedCreateWithoutTestOrderLoincInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LOINCCreateOrConnectWithoutTestOrderLoincInputSchema).optional(),
  connect: z.lazy(() => LOINCWhereUniqueInputSchema).optional()
}).strict();

export const TestCatalogCreateNestedOneWithoutTestOrderLoincInputSchema: z.ZodType<Prisma.TestCatalogCreateNestedOneWithoutTestOrderLoincInput> = z.object({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutTestOrderLoincInputSchema),z.lazy(() => TestCatalogUncheckedCreateWithoutTestOrderLoincInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogCreateOrConnectWithoutTestOrderLoincInputSchema).optional(),
  connect: z.lazy(() => TestCatalogWhereUniqueInputSchema).optional()
}).strict();

export const LOINCUpdateOneWithoutTestOrderLoincNestedInputSchema: z.ZodType<Prisma.LOINCUpdateOneWithoutTestOrderLoincNestedInput> = z.object({
  create: z.union([ z.lazy(() => LOINCCreateWithoutTestOrderLoincInputSchema),z.lazy(() => LOINCUncheckedCreateWithoutTestOrderLoincInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LOINCCreateOrConnectWithoutTestOrderLoincInputSchema).optional(),
  upsert: z.lazy(() => LOINCUpsertWithoutTestOrderLoincInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => LOINCWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => LOINCWhereInputSchema) ]).optional(),
  connect: z.lazy(() => LOINCWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LOINCUpdateToOneWithWhereWithoutTestOrderLoincInputSchema),z.lazy(() => LOINCUpdateWithoutTestOrderLoincInputSchema),z.lazy(() => LOINCUncheckedUpdateWithoutTestOrderLoincInputSchema) ]).optional(),
}).strict();

export const TestCatalogUpdateOneRequiredWithoutTestOrderLoincNestedInputSchema: z.ZodType<Prisma.TestCatalogUpdateOneRequiredWithoutTestOrderLoincNestedInput> = z.object({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutTestOrderLoincInputSchema),z.lazy(() => TestCatalogUncheckedCreateWithoutTestOrderLoincInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogCreateOrConnectWithoutTestOrderLoincInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogUpsertWithoutTestOrderLoincInputSchema).optional(),
  connect: z.lazy(() => TestCatalogWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogUpdateToOneWithWhereWithoutTestOrderLoincInputSchema),z.lazy(() => TestCatalogUpdateWithoutTestOrderLoincInputSchema),z.lazy(() => TestCatalogUncheckedUpdateWithoutTestOrderLoincInputSchema) ]).optional(),
}).strict();

export const LOINCCreateNestedOneWithoutTestResultLoincInputSchema: z.ZodType<Prisma.LOINCCreateNestedOneWithoutTestResultLoincInput> = z.object({
  create: z.union([ z.lazy(() => LOINCCreateWithoutTestResultLoincInputSchema),z.lazy(() => LOINCUncheckedCreateWithoutTestResultLoincInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LOINCCreateOrConnectWithoutTestResultLoincInputSchema).optional(),
  connect: z.lazy(() => LOINCWhereUniqueInputSchema).optional()
}).strict();

export const TestCatalogCreateNestedOneWithoutTestResultLoincInputSchema: z.ZodType<Prisma.TestCatalogCreateNestedOneWithoutTestResultLoincInput> = z.object({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutTestResultLoincInputSchema),z.lazy(() => TestCatalogUncheckedCreateWithoutTestResultLoincInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogCreateOrConnectWithoutTestResultLoincInputSchema).optional(),
  connect: z.lazy(() => TestCatalogWhereUniqueInputSchema).optional()
}).strict();

export const LOINCUpdateOneWithoutTestResultLoincNestedInputSchema: z.ZodType<Prisma.LOINCUpdateOneWithoutTestResultLoincNestedInput> = z.object({
  create: z.union([ z.lazy(() => LOINCCreateWithoutTestResultLoincInputSchema),z.lazy(() => LOINCUncheckedCreateWithoutTestResultLoincInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LOINCCreateOrConnectWithoutTestResultLoincInputSchema).optional(),
  upsert: z.lazy(() => LOINCUpsertWithoutTestResultLoincInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => LOINCWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => LOINCWhereInputSchema) ]).optional(),
  connect: z.lazy(() => LOINCWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LOINCUpdateToOneWithWhereWithoutTestResultLoincInputSchema),z.lazy(() => LOINCUpdateWithoutTestResultLoincInputSchema),z.lazy(() => LOINCUncheckedUpdateWithoutTestResultLoincInputSchema) ]).optional(),
}).strict();

export const TestCatalogUpdateOneRequiredWithoutTestResultLoincNestedInputSchema: z.ZodType<Prisma.TestCatalogUpdateOneRequiredWithoutTestResultLoincNestedInput> = z.object({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutTestResultLoincInputSchema),z.lazy(() => TestCatalogUncheckedCreateWithoutTestResultLoincInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogCreateOrConnectWithoutTestResultLoincInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogUpsertWithoutTestResultLoincInputSchema).optional(),
  connect: z.lazy(() => TestCatalogWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogUpdateToOneWithWhereWithoutTestResultLoincInputSchema),z.lazy(() => TestCatalogUpdateWithoutTestResultLoincInputSchema),z.lazy(() => TestCatalogUncheckedUpdateWithoutTestResultLoincInputSchema) ]).optional(),
}).strict();

export const AccountCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SessionCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AccountUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SessionUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.date().optional().nullable()
}).strict();

export const AccountUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SessionUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AccountUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  search: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  search: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  search: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  search: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedBigIntFilterSchema: z.ZodType<Prisma.NestedBigIntFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntFilterSchema) ]).optional(),
}).strict();

export const NestedBigIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBigIntWithAggregatesFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _max: z.lazy(() => NestedBigIntFilterSchema).optional()
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.date().optional(),
  in: z.date().array().optional(),
  notIn: z.date().array().optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([ z.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.date().optional(),
  in: z.date().array().optional(),
  notIn: z.date().array().optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([ z.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.date().optional().nullable(),
  in: z.date().array().optional().nullable(),
  notIn: z.date().array().optional().nullable(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([ z.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.date().optional().nullable(),
  in: z.date().array().optional().nullable(),
  notIn: z.date().array().optional().nullable(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([ z.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const UserCreateWithoutAccountInputSchema: z.ZodType<Prisma.UserCreateWithoutAccountInput> = z.object({
  id: z.string(),
  name: z.string().optional().nullable(),
  email: z.string(),
  password: z.string(),
  emailVerified: z.date().optional().nullable(),
  image: z.string().optional().nullable(),
  Session: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutAccountInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountInput> = z.object({
  id: z.string(),
  name: z.string().optional().nullable(),
  email: z.string(),
  password: z.string(),
  emailVerified: z.date().optional().nullable(),
  image: z.string().optional().nullable(),
  Session: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutAccountInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAccountInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutAccountInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountInputSchema) ]),
}).strict();

export const UserUpsertWithoutAccountInputSchema: z.ZodType<Prisma.UserUpsertWithoutAccountInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutAccountInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutAccountInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutAccountInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAccountInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutAccountInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountInputSchema) ]),
}).strict();

export const UserUpdateWithoutAccountInputSchema: z.ZodType<Prisma.UserUpdateWithoutAccountInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Session: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutAccountInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Session: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const TestBiomarkerCreateWithoutBIOMARKERInputSchema: z.ZodType<Prisma.TestBiomarkerCreateWithoutBIOMARKERInput> = z.object({
  LabTestId: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional(),
  TestCatalog: z.lazy(() => TestCatalogCreateNestedOneWithoutTestBiomarkerInputSchema)
}).strict();

export const TestBiomarkerUncheckedCreateWithoutBIOMARKERInputSchema: z.ZodType<Prisma.TestBiomarkerUncheckedCreateWithoutBIOMARKERInput> = z.object({
  Id: z.number().optional(),
  TestId: z.number(),
  LabTestId: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional()
}).strict();

export const TestBiomarkerCreateOrConnectWithoutBIOMARKERInputSchema: z.ZodType<Prisma.TestBiomarkerCreateOrConnectWithoutBIOMARKERInput> = z.object({
  where: z.lazy(() => TestBiomarkerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestBiomarkerCreateWithoutBIOMARKERInputSchema),z.lazy(() => TestBiomarkerUncheckedCreateWithoutBIOMARKERInputSchema) ]),
}).strict();

export const TestBiomarkerCreateManyBIOMARKERInputEnvelopeSchema: z.ZodType<Prisma.TestBiomarkerCreateManyBIOMARKERInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TestBiomarkerCreateManyBIOMARKERInputSchema),z.lazy(() => TestBiomarkerCreateManyBIOMARKERInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TestBiomarkerUpsertWithWhereUniqueWithoutBIOMARKERInputSchema: z.ZodType<Prisma.TestBiomarkerUpsertWithWhereUniqueWithoutBIOMARKERInput> = z.object({
  where: z.lazy(() => TestBiomarkerWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestBiomarkerUpdateWithoutBIOMARKERInputSchema),z.lazy(() => TestBiomarkerUncheckedUpdateWithoutBIOMARKERInputSchema) ]),
  create: z.union([ z.lazy(() => TestBiomarkerCreateWithoutBIOMARKERInputSchema),z.lazy(() => TestBiomarkerUncheckedCreateWithoutBIOMARKERInputSchema) ]),
}).strict();

export const TestBiomarkerUpdateWithWhereUniqueWithoutBIOMARKERInputSchema: z.ZodType<Prisma.TestBiomarkerUpdateWithWhereUniqueWithoutBIOMARKERInput> = z.object({
  where: z.lazy(() => TestBiomarkerWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestBiomarkerUpdateWithoutBIOMARKERInputSchema),z.lazy(() => TestBiomarkerUncheckedUpdateWithoutBIOMARKERInputSchema) ]),
}).strict();

export const TestBiomarkerUpdateManyWithWhereWithoutBIOMARKERInputSchema: z.ZodType<Prisma.TestBiomarkerUpdateManyWithWhereWithoutBIOMARKERInput> = z.object({
  where: z.lazy(() => TestBiomarkerScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestBiomarkerUpdateManyMutationInputSchema),z.lazy(() => TestBiomarkerUncheckedUpdateManyWithoutBIOMARKERInputSchema) ]),
}).strict();

export const TestBiomarkerScalarWhereInputSchema: z.ZodType<Prisma.TestBiomarkerScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TestBiomarkerScalarWhereInputSchema),z.lazy(() => TestBiomarkerScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestBiomarkerScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestBiomarkerScalarWhereInputSchema),z.lazy(() => TestBiomarkerScalarWhereInputSchema).array() ]).optional(),
  Id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  TestId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  LabTestId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  HGNCId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  CreatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
  UpdatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
}).strict();

export const TestOrderLoincCreateWithoutLOINCInputSchema: z.ZodType<Prisma.TestOrderLoincCreateWithoutLOINCInput> = z.object({
  LabTestId: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional(),
  TestCatalog: z.lazy(() => TestCatalogCreateNestedOneWithoutTestOrderLoincInputSchema)
}).strict();

export const TestOrderLoincUncheckedCreateWithoutLOINCInputSchema: z.ZodType<Prisma.TestOrderLoincUncheckedCreateWithoutLOINCInput> = z.object({
  Id: z.number().optional(),
  TestId: z.number(),
  LabTestId: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional()
}).strict();

export const TestOrderLoincCreateOrConnectWithoutLOINCInputSchema: z.ZodType<Prisma.TestOrderLoincCreateOrConnectWithoutLOINCInput> = z.object({
  where: z.lazy(() => TestOrderLoincWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestOrderLoincCreateWithoutLOINCInputSchema),z.lazy(() => TestOrderLoincUncheckedCreateWithoutLOINCInputSchema) ]),
}).strict();

export const TestOrderLoincCreateManyLOINCInputEnvelopeSchema: z.ZodType<Prisma.TestOrderLoincCreateManyLOINCInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TestOrderLoincCreateManyLOINCInputSchema),z.lazy(() => TestOrderLoincCreateManyLOINCInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TestResultLoincCreateWithoutLOINCInputSchema: z.ZodType<Prisma.TestResultLoincCreateWithoutLOINCInput> = z.object({
  LabTestId: z.string().optional().nullable(),
  ResultCode: z.string().optional().nullable(),
  ResultCodeName: z.string().optional().nullable(),
  UofM: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional(),
  TestCatalog: z.lazy(() => TestCatalogCreateNestedOneWithoutTestResultLoincInputSchema)
}).strict();

export const TestResultLoincUncheckedCreateWithoutLOINCInputSchema: z.ZodType<Prisma.TestResultLoincUncheckedCreateWithoutLOINCInput> = z.object({
  Id: z.number().optional(),
  TestId: z.number(),
  LabTestId: z.string().optional().nullable(),
  ResultCode: z.string().optional().nullable(),
  ResultCodeName: z.string().optional().nullable(),
  UofM: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional()
}).strict();

export const TestResultLoincCreateOrConnectWithoutLOINCInputSchema: z.ZodType<Prisma.TestResultLoincCreateOrConnectWithoutLOINCInput> = z.object({
  where: z.lazy(() => TestResultLoincWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestResultLoincCreateWithoutLOINCInputSchema),z.lazy(() => TestResultLoincUncheckedCreateWithoutLOINCInputSchema) ]),
}).strict();

export const TestResultLoincCreateManyLOINCInputEnvelopeSchema: z.ZodType<Prisma.TestResultLoincCreateManyLOINCInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TestResultLoincCreateManyLOINCInputSchema),z.lazy(() => TestResultLoincCreateManyLOINCInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TestOrderLoincUpsertWithWhereUniqueWithoutLOINCInputSchema: z.ZodType<Prisma.TestOrderLoincUpsertWithWhereUniqueWithoutLOINCInput> = z.object({
  where: z.lazy(() => TestOrderLoincWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestOrderLoincUpdateWithoutLOINCInputSchema),z.lazy(() => TestOrderLoincUncheckedUpdateWithoutLOINCInputSchema) ]),
  create: z.union([ z.lazy(() => TestOrderLoincCreateWithoutLOINCInputSchema),z.lazy(() => TestOrderLoincUncheckedCreateWithoutLOINCInputSchema) ]),
}).strict();

export const TestOrderLoincUpdateWithWhereUniqueWithoutLOINCInputSchema: z.ZodType<Prisma.TestOrderLoincUpdateWithWhereUniqueWithoutLOINCInput> = z.object({
  where: z.lazy(() => TestOrderLoincWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestOrderLoincUpdateWithoutLOINCInputSchema),z.lazy(() => TestOrderLoincUncheckedUpdateWithoutLOINCInputSchema) ]),
}).strict();

export const TestOrderLoincUpdateManyWithWhereWithoutLOINCInputSchema: z.ZodType<Prisma.TestOrderLoincUpdateManyWithWhereWithoutLOINCInput> = z.object({
  where: z.lazy(() => TestOrderLoincScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestOrderLoincUpdateManyMutationInputSchema),z.lazy(() => TestOrderLoincUncheckedUpdateManyWithoutLOINCInputSchema) ]),
}).strict();

export const TestOrderLoincScalarWhereInputSchema: z.ZodType<Prisma.TestOrderLoincScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TestOrderLoincScalarWhereInputSchema),z.lazy(() => TestOrderLoincScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestOrderLoincScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestOrderLoincScalarWhereInputSchema),z.lazy(() => TestOrderLoincScalarWhereInputSchema).array() ]).optional(),
  Id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  TestId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  LabTestId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  OrderLoinc: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CreatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
  UpdatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
}).strict();

export const TestResultLoincUpsertWithWhereUniqueWithoutLOINCInputSchema: z.ZodType<Prisma.TestResultLoincUpsertWithWhereUniqueWithoutLOINCInput> = z.object({
  where: z.lazy(() => TestResultLoincWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestResultLoincUpdateWithoutLOINCInputSchema),z.lazy(() => TestResultLoincUncheckedUpdateWithoutLOINCInputSchema) ]),
  create: z.union([ z.lazy(() => TestResultLoincCreateWithoutLOINCInputSchema),z.lazy(() => TestResultLoincUncheckedCreateWithoutLOINCInputSchema) ]),
}).strict();

export const TestResultLoincUpdateWithWhereUniqueWithoutLOINCInputSchema: z.ZodType<Prisma.TestResultLoincUpdateWithWhereUniqueWithoutLOINCInput> = z.object({
  where: z.lazy(() => TestResultLoincWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestResultLoincUpdateWithoutLOINCInputSchema),z.lazy(() => TestResultLoincUncheckedUpdateWithoutLOINCInputSchema) ]),
}).strict();

export const TestResultLoincUpdateManyWithWhereWithoutLOINCInputSchema: z.ZodType<Prisma.TestResultLoincUpdateManyWithWhereWithoutLOINCInput> = z.object({
  where: z.lazy(() => TestResultLoincScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestResultLoincUpdateManyMutationInputSchema),z.lazy(() => TestResultLoincUncheckedUpdateManyWithoutLOINCInputSchema) ]),
}).strict();

export const TestResultLoincScalarWhereInputSchema: z.ZodType<Prisma.TestResultLoincScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TestResultLoincScalarWhereInputSchema),z.lazy(() => TestResultLoincScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestResultLoincScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestResultLoincScalarWhereInputSchema),z.lazy(() => TestResultLoincScalarWhereInputSchema).array() ]).optional(),
  Id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  TestId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  LabTestId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ResultCode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ResultCodeName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  UofM: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ResultLoinc: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CreatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
  UpdatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
}).strict();

export const TestCatalogCreateWithoutLabInputSchema: z.ZodType<Prisma.TestCatalogCreateWithoutLabInput> = z.object({
  href: z.string().optional().nullable(),
  CasandraTestId: z.string(),
  LabTestId: z.string().optional().nullable(),
  TestName: z.string().optional().nullable(),
  AlternativeName: z.string().optional().nullable(),
  AlternativeName1: z.string().optional().nullable(),
  AlternativeName2: z.string().optional().nullable(),
  AlternativeName3: z.string().optional().nullable(),
  AlternativeName4: z.string().optional().nullable(),
  AlternativeName5: z.string().optional().nullable(),
  TestIncludes: z.string().optional().nullable(),
  SpecimenType: z.string().optional().nullable(),
  SpecialInstructions: z.string().optional().nullable(),
  Methodology: z.string().optional().nullable(),
  TestDescription: z.string().optional().nullable(),
  Diseases: z.string().optional().nullable(),
  Probes: z.string().optional().nullable(),
  ClinicalSignificance: z.string().optional().nullable(),
  SpecimenRequirements: z.string().optional().nullable(),
  Volume: z.string().optional().nullable(),
  MinimumVolume: z.string().optional().nullable(),
  Container: z.string().optional().nullable(),
  Collection: z.string().optional().nullable(),
  StabilityRequirements: z.string().optional().nullable(),
  StorageTransportation: z.string().optional().nullable(),
  PatientPreparation: z.string().optional().nullable(),
  CausesForRejection: z.string().optional().nullable(),
  TestUsage: z.string().optional().nullable(),
  TestLimitations: z.string().optional().nullable(),
  CPTCodes: z.string().optional().nullable(),
  NewYorkApproved: z.string().optional().nullable(),
  LevelOfService: z.string().optional().nullable(),
  TurnAroundTime: z.string().optional().nullable(),
  AssayCategory: z.string().optional().nullable(),
  ReferenceRanges: z.string().optional().nullable(),
  SetupSchedule: z.string().optional().nullable(),
  AlternativeSpecimen: z.string().optional().nullable(),
  LoincCodesText: z.string().optional().nullable(),
  LoincCodesHTML: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional(),
  TestBiomarker: z.lazy(() => TestBiomarkerCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  TestCptCode: z.lazy(() => TestCptCodeCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  TestResultLoinc: z.lazy(() => TestResultLoincCreateNestedManyWithoutTestCatalogInputSchema).optional()
}).strict();

export const TestCatalogUncheckedCreateWithoutLabInputSchema: z.ZodType<Prisma.TestCatalogUncheckedCreateWithoutLabInput> = z.object({
  TestId: z.number().optional(),
  href: z.string().optional().nullable(),
  CasandraTestId: z.string(),
  LabTestId: z.string().optional().nullable(),
  TestName: z.string().optional().nullable(),
  AlternativeName: z.string().optional().nullable(),
  AlternativeName1: z.string().optional().nullable(),
  AlternativeName2: z.string().optional().nullable(),
  AlternativeName3: z.string().optional().nullable(),
  AlternativeName4: z.string().optional().nullable(),
  AlternativeName5: z.string().optional().nullable(),
  TestIncludes: z.string().optional().nullable(),
  SpecimenType: z.string().optional().nullable(),
  SpecialInstructions: z.string().optional().nullable(),
  Methodology: z.string().optional().nullable(),
  TestDescription: z.string().optional().nullable(),
  Diseases: z.string().optional().nullable(),
  Probes: z.string().optional().nullable(),
  ClinicalSignificance: z.string().optional().nullable(),
  SpecimenRequirements: z.string().optional().nullable(),
  Volume: z.string().optional().nullable(),
  MinimumVolume: z.string().optional().nullable(),
  Container: z.string().optional().nullable(),
  Collection: z.string().optional().nullable(),
  StabilityRequirements: z.string().optional().nullable(),
  StorageTransportation: z.string().optional().nullable(),
  PatientPreparation: z.string().optional().nullable(),
  CausesForRejection: z.string().optional().nullable(),
  TestUsage: z.string().optional().nullable(),
  TestLimitations: z.string().optional().nullable(),
  CPTCodes: z.string().optional().nullable(),
  NewYorkApproved: z.string().optional().nullable(),
  LevelOfService: z.string().optional().nullable(),
  TurnAroundTime: z.string().optional().nullable(),
  AssayCategory: z.string().optional().nullable(),
  ReferenceRanges: z.string().optional().nullable(),
  SetupSchedule: z.string().optional().nullable(),
  AlternativeSpecimen: z.string().optional().nullable(),
  LoincCodesText: z.string().optional().nullable(),
  LoincCodesHTML: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional(),
  TestBiomarker: z.lazy(() => TestBiomarkerUncheckedCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  TestCptCode: z.lazy(() => TestCptCodeUncheckedCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincUncheckedCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  TestResultLoinc: z.lazy(() => TestResultLoincUncheckedCreateNestedManyWithoutTestCatalogInputSchema).optional()
}).strict();

export const TestCatalogCreateOrConnectWithoutLabInputSchema: z.ZodType<Prisma.TestCatalogCreateOrConnectWithoutLabInput> = z.object({
  where: z.lazy(() => TestCatalogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutLabInputSchema),z.lazy(() => TestCatalogUncheckedCreateWithoutLabInputSchema) ]),
}).strict();

export const TestCatalogCreateManyLabInputEnvelopeSchema: z.ZodType<Prisma.TestCatalogCreateManyLabInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TestCatalogCreateManyLabInputSchema),z.lazy(() => TestCatalogCreateManyLabInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TestCatalogUpsertWithWhereUniqueWithoutLabInputSchema: z.ZodType<Prisma.TestCatalogUpsertWithWhereUniqueWithoutLabInput> = z.object({
  where: z.lazy(() => TestCatalogWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestCatalogUpdateWithoutLabInputSchema),z.lazy(() => TestCatalogUncheckedUpdateWithoutLabInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutLabInputSchema),z.lazy(() => TestCatalogUncheckedCreateWithoutLabInputSchema) ]),
}).strict();

export const TestCatalogUpdateWithWhereUniqueWithoutLabInputSchema: z.ZodType<Prisma.TestCatalogUpdateWithWhereUniqueWithoutLabInput> = z.object({
  where: z.lazy(() => TestCatalogWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestCatalogUpdateWithoutLabInputSchema),z.lazy(() => TestCatalogUncheckedUpdateWithoutLabInputSchema) ]),
}).strict();

export const TestCatalogUpdateManyWithWhereWithoutLabInputSchema: z.ZodType<Prisma.TestCatalogUpdateManyWithWhereWithoutLabInput> = z.object({
  where: z.lazy(() => TestCatalogScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestCatalogUpdateManyMutationInputSchema),z.lazy(() => TestCatalogUncheckedUpdateManyWithoutLabInputSchema) ]),
}).strict();

export const TestCatalogScalarWhereInputSchema: z.ZodType<Prisma.TestCatalogScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TestCatalogScalarWhereInputSchema),z.lazy(() => TestCatalogScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestCatalogScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestCatalogScalarWhereInputSchema),z.lazy(() => TestCatalogScalarWhereInputSchema).array() ]).optional(),
  TestId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  LabId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  href: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CasandraTestId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  LabTestId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  TestName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  AlternativeName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  AlternativeName1: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  AlternativeName2: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  AlternativeName3: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  AlternativeName4: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  AlternativeName5: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  TestIncludes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  SpecimenType: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  SpecialInstructions: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Methodology: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  TestDescription: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Diseases: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Probes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ClinicalSignificance: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  SpecimenRequirements: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Volume: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  MinimumVolume: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Container: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Collection: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  StabilityRequirements: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  StorageTransportation: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  PatientPreparation: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CausesForRejection: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  TestUsage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  TestLimitations: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CPTCodes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  NewYorkApproved: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  LevelOfService: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  TurnAroundTime: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  AssayCategory: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ReferenceRanges: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  SetupSchedule: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  AlternativeSpecimen: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  LoincCodesText: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  LoincCodesHTML: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CreatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
  UpdatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
}).strict();

export const UserCreateWithoutSessionInputSchema: z.ZodType<Prisma.UserCreateWithoutSessionInput> = z.object({
  id: z.string(),
  name: z.string().optional().nullable(),
  email: z.string(),
  password: z.string(),
  emailVerified: z.date().optional().nullable(),
  image: z.string().optional().nullable(),
  Account: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutSessionInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionInput> = z.object({
  id: z.string(),
  name: z.string().optional().nullable(),
  email: z.string(),
  password: z.string(),
  emailVerified: z.date().optional().nullable(),
  image: z.string().optional().nullable(),
  Account: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutSessionInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSessionInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutSessionInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionInputSchema) ]),
}).strict();

export const UserUpsertWithoutSessionInputSchema: z.ZodType<Prisma.UserUpsertWithoutSessionInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutSessionInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutSessionInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutSessionInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSessionInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutSessionInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionInputSchema) ]),
}).strict();

export const UserUpdateWithoutSessionInputSchema: z.ZodType<Prisma.UserUpdateWithoutSessionInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Account: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutSessionInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Account: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const BIOMARKERCreateWithoutTestBiomarkerInputSchema: z.ZodType<Prisma.BIOMARKERCreateWithoutTestBiomarkerInput> = z.object({
  HGNCId: z.string(),
  HGNCStatus: z.string().optional().nullable(),
  HGNCApprovedSymbol: z.string().optional().nullable(),
  HGNCApprovedName: z.string().optional().nullable()
}).strict();

export const BIOMARKERUncheckedCreateWithoutTestBiomarkerInputSchema: z.ZodType<Prisma.BIOMARKERUncheckedCreateWithoutTestBiomarkerInput> = z.object({
  HGNCId: z.string(),
  HGNCStatus: z.string().optional().nullable(),
  HGNCApprovedSymbol: z.string().optional().nullable(),
  HGNCApprovedName: z.string().optional().nullable()
}).strict();

export const BIOMARKERCreateOrConnectWithoutTestBiomarkerInputSchema: z.ZodType<Prisma.BIOMARKERCreateOrConnectWithoutTestBiomarkerInput> = z.object({
  where: z.lazy(() => BIOMARKERWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BIOMARKERCreateWithoutTestBiomarkerInputSchema),z.lazy(() => BIOMARKERUncheckedCreateWithoutTestBiomarkerInputSchema) ]),
}).strict();

export const TestCatalogCreateWithoutTestBiomarkerInputSchema: z.ZodType<Prisma.TestCatalogCreateWithoutTestBiomarkerInput> = z.object({
  href: z.string().optional().nullable(),
  CasandraTestId: z.string(),
  LabTestId: z.string().optional().nullable(),
  TestName: z.string().optional().nullable(),
  AlternativeName: z.string().optional().nullable(),
  AlternativeName1: z.string().optional().nullable(),
  AlternativeName2: z.string().optional().nullable(),
  AlternativeName3: z.string().optional().nullable(),
  AlternativeName4: z.string().optional().nullable(),
  AlternativeName5: z.string().optional().nullable(),
  TestIncludes: z.string().optional().nullable(),
  SpecimenType: z.string().optional().nullable(),
  SpecialInstructions: z.string().optional().nullable(),
  Methodology: z.string().optional().nullable(),
  TestDescription: z.string().optional().nullable(),
  Diseases: z.string().optional().nullable(),
  Probes: z.string().optional().nullable(),
  ClinicalSignificance: z.string().optional().nullable(),
  SpecimenRequirements: z.string().optional().nullable(),
  Volume: z.string().optional().nullable(),
  MinimumVolume: z.string().optional().nullable(),
  Container: z.string().optional().nullable(),
  Collection: z.string().optional().nullable(),
  StabilityRequirements: z.string().optional().nullable(),
  StorageTransportation: z.string().optional().nullable(),
  PatientPreparation: z.string().optional().nullable(),
  CausesForRejection: z.string().optional().nullable(),
  TestUsage: z.string().optional().nullable(),
  TestLimitations: z.string().optional().nullable(),
  CPTCodes: z.string().optional().nullable(),
  NewYorkApproved: z.string().optional().nullable(),
  LevelOfService: z.string().optional().nullable(),
  TurnAroundTime: z.string().optional().nullable(),
  AssayCategory: z.string().optional().nullable(),
  ReferenceRanges: z.string().optional().nullable(),
  SetupSchedule: z.string().optional().nullable(),
  AlternativeSpecimen: z.string().optional().nullable(),
  LoincCodesText: z.string().optional().nullable(),
  LoincCodesHTML: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional(),
  Lab: z.lazy(() => LabCreateNestedOneWithoutTestCatalogInputSchema).optional(),
  TestCptCode: z.lazy(() => TestCptCodeCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  TestResultLoinc: z.lazy(() => TestResultLoincCreateNestedManyWithoutTestCatalogInputSchema).optional()
}).strict();

export const TestCatalogUncheckedCreateWithoutTestBiomarkerInputSchema: z.ZodType<Prisma.TestCatalogUncheckedCreateWithoutTestBiomarkerInput> = z.object({
  TestId: z.number().optional(),
  LabId: z.number().optional().nullable(),
  href: z.string().optional().nullable(),
  CasandraTestId: z.string(),
  LabTestId: z.string().optional().nullable(),
  TestName: z.string().optional().nullable(),
  AlternativeName: z.string().optional().nullable(),
  AlternativeName1: z.string().optional().nullable(),
  AlternativeName2: z.string().optional().nullable(),
  AlternativeName3: z.string().optional().nullable(),
  AlternativeName4: z.string().optional().nullable(),
  AlternativeName5: z.string().optional().nullable(),
  TestIncludes: z.string().optional().nullable(),
  SpecimenType: z.string().optional().nullable(),
  SpecialInstructions: z.string().optional().nullable(),
  Methodology: z.string().optional().nullable(),
  TestDescription: z.string().optional().nullable(),
  Diseases: z.string().optional().nullable(),
  Probes: z.string().optional().nullable(),
  ClinicalSignificance: z.string().optional().nullable(),
  SpecimenRequirements: z.string().optional().nullable(),
  Volume: z.string().optional().nullable(),
  MinimumVolume: z.string().optional().nullable(),
  Container: z.string().optional().nullable(),
  Collection: z.string().optional().nullable(),
  StabilityRequirements: z.string().optional().nullable(),
  StorageTransportation: z.string().optional().nullable(),
  PatientPreparation: z.string().optional().nullable(),
  CausesForRejection: z.string().optional().nullable(),
  TestUsage: z.string().optional().nullable(),
  TestLimitations: z.string().optional().nullable(),
  CPTCodes: z.string().optional().nullable(),
  NewYorkApproved: z.string().optional().nullable(),
  LevelOfService: z.string().optional().nullable(),
  TurnAroundTime: z.string().optional().nullable(),
  AssayCategory: z.string().optional().nullable(),
  ReferenceRanges: z.string().optional().nullable(),
  SetupSchedule: z.string().optional().nullable(),
  AlternativeSpecimen: z.string().optional().nullable(),
  LoincCodesText: z.string().optional().nullable(),
  LoincCodesHTML: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional(),
  TestCptCode: z.lazy(() => TestCptCodeUncheckedCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincUncheckedCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  TestResultLoinc: z.lazy(() => TestResultLoincUncheckedCreateNestedManyWithoutTestCatalogInputSchema).optional()
}).strict();

export const TestCatalogCreateOrConnectWithoutTestBiomarkerInputSchema: z.ZodType<Prisma.TestCatalogCreateOrConnectWithoutTestBiomarkerInput> = z.object({
  where: z.lazy(() => TestCatalogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutTestBiomarkerInputSchema),z.lazy(() => TestCatalogUncheckedCreateWithoutTestBiomarkerInputSchema) ]),
}).strict();

export const BIOMARKERUpsertWithoutTestBiomarkerInputSchema: z.ZodType<Prisma.BIOMARKERUpsertWithoutTestBiomarkerInput> = z.object({
  update: z.union([ z.lazy(() => BIOMARKERUpdateWithoutTestBiomarkerInputSchema),z.lazy(() => BIOMARKERUncheckedUpdateWithoutTestBiomarkerInputSchema) ]),
  create: z.union([ z.lazy(() => BIOMARKERCreateWithoutTestBiomarkerInputSchema),z.lazy(() => BIOMARKERUncheckedCreateWithoutTestBiomarkerInputSchema) ]),
  where: z.lazy(() => BIOMARKERWhereInputSchema).optional()
}).strict();

export const BIOMARKERUpdateToOneWithWhereWithoutTestBiomarkerInputSchema: z.ZodType<Prisma.BIOMARKERUpdateToOneWithWhereWithoutTestBiomarkerInput> = z.object({
  where: z.lazy(() => BIOMARKERWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BIOMARKERUpdateWithoutTestBiomarkerInputSchema),z.lazy(() => BIOMARKERUncheckedUpdateWithoutTestBiomarkerInputSchema) ]),
}).strict();

export const BIOMARKERUpdateWithoutTestBiomarkerInputSchema: z.ZodType<Prisma.BIOMARKERUpdateWithoutTestBiomarkerInput> = z.object({
  HGNCId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  HGNCStatus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HGNCApprovedSymbol: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HGNCApprovedName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const BIOMARKERUncheckedUpdateWithoutTestBiomarkerInputSchema: z.ZodType<Prisma.BIOMARKERUncheckedUpdateWithoutTestBiomarkerInput> = z.object({
  HGNCId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  HGNCStatus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HGNCApprovedSymbol: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HGNCApprovedName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TestCatalogUpsertWithoutTestBiomarkerInputSchema: z.ZodType<Prisma.TestCatalogUpsertWithoutTestBiomarkerInput> = z.object({
  update: z.union([ z.lazy(() => TestCatalogUpdateWithoutTestBiomarkerInputSchema),z.lazy(() => TestCatalogUncheckedUpdateWithoutTestBiomarkerInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutTestBiomarkerInputSchema),z.lazy(() => TestCatalogUncheckedCreateWithoutTestBiomarkerInputSchema) ]),
  where: z.lazy(() => TestCatalogWhereInputSchema).optional()
}).strict();

export const TestCatalogUpdateToOneWithWhereWithoutTestBiomarkerInputSchema: z.ZodType<Prisma.TestCatalogUpdateToOneWithWhereWithoutTestBiomarkerInput> = z.object({
  where: z.lazy(() => TestCatalogWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogUpdateWithoutTestBiomarkerInputSchema),z.lazy(() => TestCatalogUncheckedUpdateWithoutTestBiomarkerInputSchema) ]),
}).strict();

export const TestCatalogUpdateWithoutTestBiomarkerInputSchema: z.ZodType<Prisma.TestCatalogUpdateWithoutTestBiomarkerInput> = z.object({
  href: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CasandraTestId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName1: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName2: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName3: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName4: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName5: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestIncludes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecimenType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecialInstructions: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Methodology: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Diseases: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Probes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ClinicalSignificance: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecimenRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Volume: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  MinimumVolume: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Container: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Collection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  StabilityRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  StorageTransportation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  PatientPreparation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CausesForRejection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestLimitations: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CPTCodes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NewYorkApproved: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LevelOfService: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TurnAroundTime: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AssayCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ReferenceRanges: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SetupSchedule: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeSpecimen: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LoincCodesText: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LoincCodesHTML: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Lab: z.lazy(() => LabUpdateOneWithoutTestCatalogNestedInputSchema).optional(),
  TestCptCode: z.lazy(() => TestCptCodeUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  TestResultLoinc: z.lazy(() => TestResultLoincUpdateManyWithoutTestCatalogNestedInputSchema).optional()
}).strict();

export const TestCatalogUncheckedUpdateWithoutTestBiomarkerInputSchema: z.ZodType<Prisma.TestCatalogUncheckedUpdateWithoutTestBiomarkerInput> = z.object({
  TestId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  LabId: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  href: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CasandraTestId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName1: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName2: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName3: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName4: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName5: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestIncludes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecimenType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecialInstructions: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Methodology: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Diseases: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Probes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ClinicalSignificance: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecimenRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Volume: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  MinimumVolume: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Container: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Collection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  StabilityRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  StorageTransportation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  PatientPreparation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CausesForRejection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestLimitations: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CPTCodes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NewYorkApproved: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LevelOfService: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TurnAroundTime: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AssayCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ReferenceRanges: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SetupSchedule: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeSpecimen: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LoincCodesText: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LoincCodesHTML: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  TestCptCode: z.lazy(() => TestCptCodeUncheckedUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincUncheckedUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  TestResultLoinc: z.lazy(() => TestResultLoincUncheckedUpdateManyWithoutTestCatalogNestedInputSchema).optional()
}).strict();

export const TestBiomarkerCreateWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestBiomarkerCreateWithoutTestCatalogInput> = z.object({
  LabTestId: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional(),
  BIOMARKER: z.lazy(() => BIOMARKERCreateNestedOneWithoutTestBiomarkerInputSchema)
}).strict();

export const TestBiomarkerUncheckedCreateWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestBiomarkerUncheckedCreateWithoutTestCatalogInput> = z.object({
  Id: z.number().optional(),
  LabTestId: z.string().optional().nullable(),
  HGNCId: z.string(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional()
}).strict();

export const TestBiomarkerCreateOrConnectWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestBiomarkerCreateOrConnectWithoutTestCatalogInput> = z.object({
  where: z.lazy(() => TestBiomarkerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestBiomarkerCreateWithoutTestCatalogInputSchema),z.lazy(() => TestBiomarkerUncheckedCreateWithoutTestCatalogInputSchema) ]),
}).strict();

export const TestBiomarkerCreateManyTestCatalogInputEnvelopeSchema: z.ZodType<Prisma.TestBiomarkerCreateManyTestCatalogInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TestBiomarkerCreateManyTestCatalogInputSchema),z.lazy(() => TestBiomarkerCreateManyTestCatalogInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const LabCreateWithoutTestCatalogInputSchema: z.ZodType<Prisma.LabCreateWithoutTestCatalogInput> = z.object({
  LabName: z.string().optional().nullable(),
  LabCode: z.string().optional().nullable(),
  Address: z.string().optional().nullable(),
  City: z.string().optional().nullable(),
  State: z.string().optional().nullable(),
  Zip: z.string().optional().nullable()
}).strict();

export const LabUncheckedCreateWithoutTestCatalogInputSchema: z.ZodType<Prisma.LabUncheckedCreateWithoutTestCatalogInput> = z.object({
  LabId: z.number().optional(),
  LabName: z.string().optional().nullable(),
  LabCode: z.string().optional().nullable(),
  Address: z.string().optional().nullable(),
  City: z.string().optional().nullable(),
  State: z.string().optional().nullable(),
  Zip: z.string().optional().nullable()
}).strict();

export const LabCreateOrConnectWithoutTestCatalogInputSchema: z.ZodType<Prisma.LabCreateOrConnectWithoutTestCatalogInput> = z.object({
  where: z.lazy(() => LabWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabCreateWithoutTestCatalogInputSchema),z.lazy(() => LabUncheckedCreateWithoutTestCatalogInputSchema) ]),
}).strict();

export const TestCptCodeCreateWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestCptCodeCreateWithoutTestCatalogInput> = z.object({
  LabTestId: z.string().optional().nullable(),
  CptCode: z.string().optional().nullable(),
  Modifier: z.string().optional().nullable(),
  Comments: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional()
}).strict();

export const TestCptCodeUncheckedCreateWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestCptCodeUncheckedCreateWithoutTestCatalogInput> = z.object({
  Id: z.number().optional(),
  LabTestId: z.string().optional().nullable(),
  CptCode: z.string().optional().nullable(),
  Modifier: z.string().optional().nullable(),
  Comments: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional()
}).strict();

export const TestCptCodeCreateOrConnectWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestCptCodeCreateOrConnectWithoutTestCatalogInput> = z.object({
  where: z.lazy(() => TestCptCodeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCptCodeCreateWithoutTestCatalogInputSchema),z.lazy(() => TestCptCodeUncheckedCreateWithoutTestCatalogInputSchema) ]),
}).strict();

export const TestCptCodeCreateManyTestCatalogInputEnvelopeSchema: z.ZodType<Prisma.TestCptCodeCreateManyTestCatalogInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TestCptCodeCreateManyTestCatalogInputSchema),z.lazy(() => TestCptCodeCreateManyTestCatalogInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TestOrderLoincCreateWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestOrderLoincCreateWithoutTestCatalogInput> = z.object({
  LabTestId: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional(),
  LOINC: z.lazy(() => LOINCCreateNestedOneWithoutTestOrderLoincInputSchema).optional()
}).strict();

export const TestOrderLoincUncheckedCreateWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestOrderLoincUncheckedCreateWithoutTestCatalogInput> = z.object({
  Id: z.number().optional(),
  LabTestId: z.string().optional().nullable(),
  OrderLoinc: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional()
}).strict();

export const TestOrderLoincCreateOrConnectWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestOrderLoincCreateOrConnectWithoutTestCatalogInput> = z.object({
  where: z.lazy(() => TestOrderLoincWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestOrderLoincCreateWithoutTestCatalogInputSchema),z.lazy(() => TestOrderLoincUncheckedCreateWithoutTestCatalogInputSchema) ]),
}).strict();

export const TestOrderLoincCreateManyTestCatalogInputEnvelopeSchema: z.ZodType<Prisma.TestOrderLoincCreateManyTestCatalogInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TestOrderLoincCreateManyTestCatalogInputSchema),z.lazy(() => TestOrderLoincCreateManyTestCatalogInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TestResultLoincCreateWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestResultLoincCreateWithoutTestCatalogInput> = z.object({
  LabTestId: z.string().optional().nullable(),
  ResultCode: z.string().optional().nullable(),
  ResultCodeName: z.string().optional().nullable(),
  UofM: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional(),
  LOINC: z.lazy(() => LOINCCreateNestedOneWithoutTestResultLoincInputSchema).optional()
}).strict();

export const TestResultLoincUncheckedCreateWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestResultLoincUncheckedCreateWithoutTestCatalogInput> = z.object({
  Id: z.number().optional(),
  LabTestId: z.string().optional().nullable(),
  ResultCode: z.string().optional().nullable(),
  ResultCodeName: z.string().optional().nullable(),
  UofM: z.string().optional().nullable(),
  ResultLoinc: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional()
}).strict();

export const TestResultLoincCreateOrConnectWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestResultLoincCreateOrConnectWithoutTestCatalogInput> = z.object({
  where: z.lazy(() => TestResultLoincWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestResultLoincCreateWithoutTestCatalogInputSchema),z.lazy(() => TestResultLoincUncheckedCreateWithoutTestCatalogInputSchema) ]),
}).strict();

export const TestResultLoincCreateManyTestCatalogInputEnvelopeSchema: z.ZodType<Prisma.TestResultLoincCreateManyTestCatalogInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TestResultLoincCreateManyTestCatalogInputSchema),z.lazy(() => TestResultLoincCreateManyTestCatalogInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TestBiomarkerUpsertWithWhereUniqueWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestBiomarkerUpsertWithWhereUniqueWithoutTestCatalogInput> = z.object({
  where: z.lazy(() => TestBiomarkerWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestBiomarkerUpdateWithoutTestCatalogInputSchema),z.lazy(() => TestBiomarkerUncheckedUpdateWithoutTestCatalogInputSchema) ]),
  create: z.union([ z.lazy(() => TestBiomarkerCreateWithoutTestCatalogInputSchema),z.lazy(() => TestBiomarkerUncheckedCreateWithoutTestCatalogInputSchema) ]),
}).strict();

export const TestBiomarkerUpdateWithWhereUniqueWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestBiomarkerUpdateWithWhereUniqueWithoutTestCatalogInput> = z.object({
  where: z.lazy(() => TestBiomarkerWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestBiomarkerUpdateWithoutTestCatalogInputSchema),z.lazy(() => TestBiomarkerUncheckedUpdateWithoutTestCatalogInputSchema) ]),
}).strict();

export const TestBiomarkerUpdateManyWithWhereWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestBiomarkerUpdateManyWithWhereWithoutTestCatalogInput> = z.object({
  where: z.lazy(() => TestBiomarkerScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestBiomarkerUpdateManyMutationInputSchema),z.lazy(() => TestBiomarkerUncheckedUpdateManyWithoutTestCatalogInputSchema) ]),
}).strict();

export const LabUpsertWithoutTestCatalogInputSchema: z.ZodType<Prisma.LabUpsertWithoutTestCatalogInput> = z.object({
  update: z.union([ z.lazy(() => LabUpdateWithoutTestCatalogInputSchema),z.lazy(() => LabUncheckedUpdateWithoutTestCatalogInputSchema) ]),
  create: z.union([ z.lazy(() => LabCreateWithoutTestCatalogInputSchema),z.lazy(() => LabUncheckedCreateWithoutTestCatalogInputSchema) ]),
  where: z.lazy(() => LabWhereInputSchema).optional()
}).strict();

export const LabUpdateToOneWithWhereWithoutTestCatalogInputSchema: z.ZodType<Prisma.LabUpdateToOneWithWhereWithoutTestCatalogInput> = z.object({
  where: z.lazy(() => LabWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LabUpdateWithoutTestCatalogInputSchema),z.lazy(() => LabUncheckedUpdateWithoutTestCatalogInputSchema) ]),
}).strict();

export const LabUpdateWithoutTestCatalogInputSchema: z.ZodType<Prisma.LabUpdateWithoutTestCatalogInput> = z.object({
  LabName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LabCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  City: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  State: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Zip: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const LabUncheckedUpdateWithoutTestCatalogInputSchema: z.ZodType<Prisma.LabUncheckedUpdateWithoutTestCatalogInput> = z.object({
  LabId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  LabName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LabCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  City: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  State: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Zip: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TestCptCodeUpsertWithWhereUniqueWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestCptCodeUpsertWithWhereUniqueWithoutTestCatalogInput> = z.object({
  where: z.lazy(() => TestCptCodeWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestCptCodeUpdateWithoutTestCatalogInputSchema),z.lazy(() => TestCptCodeUncheckedUpdateWithoutTestCatalogInputSchema) ]),
  create: z.union([ z.lazy(() => TestCptCodeCreateWithoutTestCatalogInputSchema),z.lazy(() => TestCptCodeUncheckedCreateWithoutTestCatalogInputSchema) ]),
}).strict();

export const TestCptCodeUpdateWithWhereUniqueWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestCptCodeUpdateWithWhereUniqueWithoutTestCatalogInput> = z.object({
  where: z.lazy(() => TestCptCodeWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestCptCodeUpdateWithoutTestCatalogInputSchema),z.lazy(() => TestCptCodeUncheckedUpdateWithoutTestCatalogInputSchema) ]),
}).strict();

export const TestCptCodeUpdateManyWithWhereWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestCptCodeUpdateManyWithWhereWithoutTestCatalogInput> = z.object({
  where: z.lazy(() => TestCptCodeScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestCptCodeUpdateManyMutationInputSchema),z.lazy(() => TestCptCodeUncheckedUpdateManyWithoutTestCatalogInputSchema) ]),
}).strict();

export const TestCptCodeScalarWhereInputSchema: z.ZodType<Prisma.TestCptCodeScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TestCptCodeScalarWhereInputSchema),z.lazy(() => TestCptCodeScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestCptCodeScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestCptCodeScalarWhereInputSchema),z.lazy(() => TestCptCodeScalarWhereInputSchema).array() ]).optional(),
  Id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  TestId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  LabTestId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CptCode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Modifier: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Comments: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  CreatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
  UpdatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
}).strict();

export const TestOrderLoincUpsertWithWhereUniqueWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestOrderLoincUpsertWithWhereUniqueWithoutTestCatalogInput> = z.object({
  where: z.lazy(() => TestOrderLoincWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestOrderLoincUpdateWithoutTestCatalogInputSchema),z.lazy(() => TestOrderLoincUncheckedUpdateWithoutTestCatalogInputSchema) ]),
  create: z.union([ z.lazy(() => TestOrderLoincCreateWithoutTestCatalogInputSchema),z.lazy(() => TestOrderLoincUncheckedCreateWithoutTestCatalogInputSchema) ]),
}).strict();

export const TestOrderLoincUpdateWithWhereUniqueWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestOrderLoincUpdateWithWhereUniqueWithoutTestCatalogInput> = z.object({
  where: z.lazy(() => TestOrderLoincWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestOrderLoincUpdateWithoutTestCatalogInputSchema),z.lazy(() => TestOrderLoincUncheckedUpdateWithoutTestCatalogInputSchema) ]),
}).strict();

export const TestOrderLoincUpdateManyWithWhereWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestOrderLoincUpdateManyWithWhereWithoutTestCatalogInput> = z.object({
  where: z.lazy(() => TestOrderLoincScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestOrderLoincUpdateManyMutationInputSchema),z.lazy(() => TestOrderLoincUncheckedUpdateManyWithoutTestCatalogInputSchema) ]),
}).strict();

export const TestResultLoincUpsertWithWhereUniqueWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestResultLoincUpsertWithWhereUniqueWithoutTestCatalogInput> = z.object({
  where: z.lazy(() => TestResultLoincWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestResultLoincUpdateWithoutTestCatalogInputSchema),z.lazy(() => TestResultLoincUncheckedUpdateWithoutTestCatalogInputSchema) ]),
  create: z.union([ z.lazy(() => TestResultLoincCreateWithoutTestCatalogInputSchema),z.lazy(() => TestResultLoincUncheckedCreateWithoutTestCatalogInputSchema) ]),
}).strict();

export const TestResultLoincUpdateWithWhereUniqueWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestResultLoincUpdateWithWhereUniqueWithoutTestCatalogInput> = z.object({
  where: z.lazy(() => TestResultLoincWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestResultLoincUpdateWithoutTestCatalogInputSchema),z.lazy(() => TestResultLoincUncheckedUpdateWithoutTestCatalogInputSchema) ]),
}).strict();

export const TestResultLoincUpdateManyWithWhereWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestResultLoincUpdateManyWithWhereWithoutTestCatalogInput> = z.object({
  where: z.lazy(() => TestResultLoincScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestResultLoincUpdateManyMutationInputSchema),z.lazy(() => TestResultLoincUncheckedUpdateManyWithoutTestCatalogInputSchema) ]),
}).strict();

export const TestCatalogCreateWithoutTestCptCodeInputSchema: z.ZodType<Prisma.TestCatalogCreateWithoutTestCptCodeInput> = z.object({
  href: z.string().optional().nullable(),
  CasandraTestId: z.string(),
  LabTestId: z.string().optional().nullable(),
  TestName: z.string().optional().nullable(),
  AlternativeName: z.string().optional().nullable(),
  AlternativeName1: z.string().optional().nullable(),
  AlternativeName2: z.string().optional().nullable(),
  AlternativeName3: z.string().optional().nullable(),
  AlternativeName4: z.string().optional().nullable(),
  AlternativeName5: z.string().optional().nullable(),
  TestIncludes: z.string().optional().nullable(),
  SpecimenType: z.string().optional().nullable(),
  SpecialInstructions: z.string().optional().nullable(),
  Methodology: z.string().optional().nullable(),
  TestDescription: z.string().optional().nullable(),
  Diseases: z.string().optional().nullable(),
  Probes: z.string().optional().nullable(),
  ClinicalSignificance: z.string().optional().nullable(),
  SpecimenRequirements: z.string().optional().nullable(),
  Volume: z.string().optional().nullable(),
  MinimumVolume: z.string().optional().nullable(),
  Container: z.string().optional().nullable(),
  Collection: z.string().optional().nullable(),
  StabilityRequirements: z.string().optional().nullable(),
  StorageTransportation: z.string().optional().nullable(),
  PatientPreparation: z.string().optional().nullable(),
  CausesForRejection: z.string().optional().nullable(),
  TestUsage: z.string().optional().nullable(),
  TestLimitations: z.string().optional().nullable(),
  CPTCodes: z.string().optional().nullable(),
  NewYorkApproved: z.string().optional().nullable(),
  LevelOfService: z.string().optional().nullable(),
  TurnAroundTime: z.string().optional().nullable(),
  AssayCategory: z.string().optional().nullable(),
  ReferenceRanges: z.string().optional().nullable(),
  SetupSchedule: z.string().optional().nullable(),
  AlternativeSpecimen: z.string().optional().nullable(),
  LoincCodesText: z.string().optional().nullable(),
  LoincCodesHTML: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional(),
  TestBiomarker: z.lazy(() => TestBiomarkerCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  Lab: z.lazy(() => LabCreateNestedOneWithoutTestCatalogInputSchema).optional(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  TestResultLoinc: z.lazy(() => TestResultLoincCreateNestedManyWithoutTestCatalogInputSchema).optional()
}).strict();

export const TestCatalogUncheckedCreateWithoutTestCptCodeInputSchema: z.ZodType<Prisma.TestCatalogUncheckedCreateWithoutTestCptCodeInput> = z.object({
  TestId: z.number().optional(),
  LabId: z.number().optional().nullable(),
  href: z.string().optional().nullable(),
  CasandraTestId: z.string(),
  LabTestId: z.string().optional().nullable(),
  TestName: z.string().optional().nullable(),
  AlternativeName: z.string().optional().nullable(),
  AlternativeName1: z.string().optional().nullable(),
  AlternativeName2: z.string().optional().nullable(),
  AlternativeName3: z.string().optional().nullable(),
  AlternativeName4: z.string().optional().nullable(),
  AlternativeName5: z.string().optional().nullable(),
  TestIncludes: z.string().optional().nullable(),
  SpecimenType: z.string().optional().nullable(),
  SpecialInstructions: z.string().optional().nullable(),
  Methodology: z.string().optional().nullable(),
  TestDescription: z.string().optional().nullable(),
  Diseases: z.string().optional().nullable(),
  Probes: z.string().optional().nullable(),
  ClinicalSignificance: z.string().optional().nullable(),
  SpecimenRequirements: z.string().optional().nullable(),
  Volume: z.string().optional().nullable(),
  MinimumVolume: z.string().optional().nullable(),
  Container: z.string().optional().nullable(),
  Collection: z.string().optional().nullable(),
  StabilityRequirements: z.string().optional().nullable(),
  StorageTransportation: z.string().optional().nullable(),
  PatientPreparation: z.string().optional().nullable(),
  CausesForRejection: z.string().optional().nullable(),
  TestUsage: z.string().optional().nullable(),
  TestLimitations: z.string().optional().nullable(),
  CPTCodes: z.string().optional().nullable(),
  NewYorkApproved: z.string().optional().nullable(),
  LevelOfService: z.string().optional().nullable(),
  TurnAroundTime: z.string().optional().nullable(),
  AssayCategory: z.string().optional().nullable(),
  ReferenceRanges: z.string().optional().nullable(),
  SetupSchedule: z.string().optional().nullable(),
  AlternativeSpecimen: z.string().optional().nullable(),
  LoincCodesText: z.string().optional().nullable(),
  LoincCodesHTML: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional(),
  TestBiomarker: z.lazy(() => TestBiomarkerUncheckedCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincUncheckedCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  TestResultLoinc: z.lazy(() => TestResultLoincUncheckedCreateNestedManyWithoutTestCatalogInputSchema).optional()
}).strict();

export const TestCatalogCreateOrConnectWithoutTestCptCodeInputSchema: z.ZodType<Prisma.TestCatalogCreateOrConnectWithoutTestCptCodeInput> = z.object({
  where: z.lazy(() => TestCatalogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutTestCptCodeInputSchema),z.lazy(() => TestCatalogUncheckedCreateWithoutTestCptCodeInputSchema) ]),
}).strict();

export const TestCatalogUpsertWithoutTestCptCodeInputSchema: z.ZodType<Prisma.TestCatalogUpsertWithoutTestCptCodeInput> = z.object({
  update: z.union([ z.lazy(() => TestCatalogUpdateWithoutTestCptCodeInputSchema),z.lazy(() => TestCatalogUncheckedUpdateWithoutTestCptCodeInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutTestCptCodeInputSchema),z.lazy(() => TestCatalogUncheckedCreateWithoutTestCptCodeInputSchema) ]),
  where: z.lazy(() => TestCatalogWhereInputSchema).optional()
}).strict();

export const TestCatalogUpdateToOneWithWhereWithoutTestCptCodeInputSchema: z.ZodType<Prisma.TestCatalogUpdateToOneWithWhereWithoutTestCptCodeInput> = z.object({
  where: z.lazy(() => TestCatalogWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogUpdateWithoutTestCptCodeInputSchema),z.lazy(() => TestCatalogUncheckedUpdateWithoutTestCptCodeInputSchema) ]),
}).strict();

export const TestCatalogUpdateWithoutTestCptCodeInputSchema: z.ZodType<Prisma.TestCatalogUpdateWithoutTestCptCodeInput> = z.object({
  href: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CasandraTestId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName1: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName2: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName3: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName4: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName5: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestIncludes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecimenType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecialInstructions: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Methodology: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Diseases: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Probes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ClinicalSignificance: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecimenRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Volume: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  MinimumVolume: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Container: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Collection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  StabilityRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  StorageTransportation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  PatientPreparation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CausesForRejection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestLimitations: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CPTCodes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NewYorkApproved: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LevelOfService: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TurnAroundTime: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AssayCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ReferenceRanges: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SetupSchedule: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeSpecimen: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LoincCodesText: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LoincCodesHTML: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  TestBiomarker: z.lazy(() => TestBiomarkerUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  Lab: z.lazy(() => LabUpdateOneWithoutTestCatalogNestedInputSchema).optional(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  TestResultLoinc: z.lazy(() => TestResultLoincUpdateManyWithoutTestCatalogNestedInputSchema).optional()
}).strict();

export const TestCatalogUncheckedUpdateWithoutTestCptCodeInputSchema: z.ZodType<Prisma.TestCatalogUncheckedUpdateWithoutTestCptCodeInput> = z.object({
  TestId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  LabId: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  href: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CasandraTestId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName1: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName2: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName3: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName4: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName5: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestIncludes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecimenType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecialInstructions: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Methodology: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Diseases: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Probes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ClinicalSignificance: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecimenRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Volume: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  MinimumVolume: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Container: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Collection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  StabilityRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  StorageTransportation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  PatientPreparation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CausesForRejection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestLimitations: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CPTCodes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NewYorkApproved: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LevelOfService: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TurnAroundTime: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AssayCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ReferenceRanges: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SetupSchedule: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeSpecimen: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LoincCodesText: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LoincCodesHTML: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  TestBiomarker: z.lazy(() => TestBiomarkerUncheckedUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincUncheckedUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  TestResultLoinc: z.lazy(() => TestResultLoincUncheckedUpdateManyWithoutTestCatalogNestedInputSchema).optional()
}).strict();

export const LOINCCreateWithoutTestOrderLoincInputSchema: z.ZodType<Prisma.LOINCCreateWithoutTestOrderLoincInput> = z.object({
  Loinc_Num: z.string(),
  COMPONENT: z.string().optional().nullable(),
  PROPERTY: z.string().optional().nullable(),
  TIME_ASPCT: z.string().optional().nullable(),
  SYSTEM: z.string().optional().nullable(),
  SCALE_TYP: z.string().optional().nullable(),
  METHOD_TYP: z.string().optional().nullable(),
  CLASS: z.string().optional().nullable(),
  VersionLastChanged: z.string().optional().nullable(),
  CHNG_TYPE: z.string().optional().nullable(),
  DefinitionDescription: z.string().optional().nullable(),
  STATUS: z.string().optional().nullable(),
  CONSUMER_NAME: z.string().optional().nullable(),
  CLASSTYPE: z.number().optional().nullable(),
  FORMULA: z.string().optional().nullable(),
  EXMPL_ANSWERS: z.string().optional().nullable(),
  SURVEY_QUEST_TEXT: z.string().optional().nullable(),
  SURVEY_QUEST_SRC: z.string().optional().nullable(),
  UNITSREQUIRED: z.string().optional().nullable(),
  RELATEDNAMES2: z.string().optional().nullable(),
  SHORTNAME: z.string().optional().nullable(),
  ORDER_OBS: z.string().optional().nullable(),
  HL7_FIELD_SUBFIELD_ID: z.string().optional().nullable(),
  EXTERNAL_COPYRIGHT_NOTICE: z.string().optional().nullable(),
  EXAMPLE_UNITS: z.string().optional().nullable(),
  LONG_COMMON_NAME: z.string().optional().nullable(),
  EXAMPLE_UCUM_UNITS: z.string().optional().nullable(),
  STATUS_REASON: z.string().optional().nullable(),
  STATUS_TEXT: z.string().optional().nullable(),
  CHANGE_REASON_PUBLIC: z.string().optional().nullable(),
  COMMON_TEST_RANK: z.number().optional().nullable(),
  COMMON_ORDER_RANK: z.number().optional().nullable(),
  HL7_ATTACHMENT_STRUCTURE: z.string().optional().nullable(),
  EXTERNAL_COPYRIGHT_LINK: z.string().optional().nullable(),
  PanelType: z.string().optional().nullable(),
  AskAtOrderEntry: z.string().optional().nullable(),
  AssociatedObservations: z.string().optional().nullable(),
  VersionFirstReleased: z.string().optional().nullable(),
  ValidHL7AttachmentRequest: z.string().optional().nullable(),
  DisplayName: z.string().optional().nullable(),
  TestResultLoinc: z.lazy(() => TestResultLoincCreateNestedManyWithoutLOINCInputSchema).optional()
}).strict();

export const LOINCUncheckedCreateWithoutTestOrderLoincInputSchema: z.ZodType<Prisma.LOINCUncheckedCreateWithoutTestOrderLoincInput> = z.object({
  Loinc_Num: z.string(),
  COMPONENT: z.string().optional().nullable(),
  PROPERTY: z.string().optional().nullable(),
  TIME_ASPCT: z.string().optional().nullable(),
  SYSTEM: z.string().optional().nullable(),
  SCALE_TYP: z.string().optional().nullable(),
  METHOD_TYP: z.string().optional().nullable(),
  CLASS: z.string().optional().nullable(),
  VersionLastChanged: z.string().optional().nullable(),
  CHNG_TYPE: z.string().optional().nullable(),
  DefinitionDescription: z.string().optional().nullable(),
  STATUS: z.string().optional().nullable(),
  CONSUMER_NAME: z.string().optional().nullable(),
  CLASSTYPE: z.number().optional().nullable(),
  FORMULA: z.string().optional().nullable(),
  EXMPL_ANSWERS: z.string().optional().nullable(),
  SURVEY_QUEST_TEXT: z.string().optional().nullable(),
  SURVEY_QUEST_SRC: z.string().optional().nullable(),
  UNITSREQUIRED: z.string().optional().nullable(),
  RELATEDNAMES2: z.string().optional().nullable(),
  SHORTNAME: z.string().optional().nullable(),
  ORDER_OBS: z.string().optional().nullable(),
  HL7_FIELD_SUBFIELD_ID: z.string().optional().nullable(),
  EXTERNAL_COPYRIGHT_NOTICE: z.string().optional().nullable(),
  EXAMPLE_UNITS: z.string().optional().nullable(),
  LONG_COMMON_NAME: z.string().optional().nullable(),
  EXAMPLE_UCUM_UNITS: z.string().optional().nullable(),
  STATUS_REASON: z.string().optional().nullable(),
  STATUS_TEXT: z.string().optional().nullable(),
  CHANGE_REASON_PUBLIC: z.string().optional().nullable(),
  COMMON_TEST_RANK: z.number().optional().nullable(),
  COMMON_ORDER_RANK: z.number().optional().nullable(),
  HL7_ATTACHMENT_STRUCTURE: z.string().optional().nullable(),
  EXTERNAL_COPYRIGHT_LINK: z.string().optional().nullable(),
  PanelType: z.string().optional().nullable(),
  AskAtOrderEntry: z.string().optional().nullable(),
  AssociatedObservations: z.string().optional().nullable(),
  VersionFirstReleased: z.string().optional().nullable(),
  ValidHL7AttachmentRequest: z.string().optional().nullable(),
  DisplayName: z.string().optional().nullable(),
  TestResultLoinc: z.lazy(() => TestResultLoincUncheckedCreateNestedManyWithoutLOINCInputSchema).optional()
}).strict();

export const LOINCCreateOrConnectWithoutTestOrderLoincInputSchema: z.ZodType<Prisma.LOINCCreateOrConnectWithoutTestOrderLoincInput> = z.object({
  where: z.lazy(() => LOINCWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LOINCCreateWithoutTestOrderLoincInputSchema),z.lazy(() => LOINCUncheckedCreateWithoutTestOrderLoincInputSchema) ]),
}).strict();

export const TestCatalogCreateWithoutTestOrderLoincInputSchema: z.ZodType<Prisma.TestCatalogCreateWithoutTestOrderLoincInput> = z.object({
  href: z.string().optional().nullable(),
  CasandraTestId: z.string(),
  LabTestId: z.string().optional().nullable(),
  TestName: z.string().optional().nullable(),
  AlternativeName: z.string().optional().nullable(),
  AlternativeName1: z.string().optional().nullable(),
  AlternativeName2: z.string().optional().nullable(),
  AlternativeName3: z.string().optional().nullable(),
  AlternativeName4: z.string().optional().nullable(),
  AlternativeName5: z.string().optional().nullable(),
  TestIncludes: z.string().optional().nullable(),
  SpecimenType: z.string().optional().nullable(),
  SpecialInstructions: z.string().optional().nullable(),
  Methodology: z.string().optional().nullable(),
  TestDescription: z.string().optional().nullable(),
  Diseases: z.string().optional().nullable(),
  Probes: z.string().optional().nullable(),
  ClinicalSignificance: z.string().optional().nullable(),
  SpecimenRequirements: z.string().optional().nullable(),
  Volume: z.string().optional().nullable(),
  MinimumVolume: z.string().optional().nullable(),
  Container: z.string().optional().nullable(),
  Collection: z.string().optional().nullable(),
  StabilityRequirements: z.string().optional().nullable(),
  StorageTransportation: z.string().optional().nullable(),
  PatientPreparation: z.string().optional().nullable(),
  CausesForRejection: z.string().optional().nullable(),
  TestUsage: z.string().optional().nullable(),
  TestLimitations: z.string().optional().nullable(),
  CPTCodes: z.string().optional().nullable(),
  NewYorkApproved: z.string().optional().nullable(),
  LevelOfService: z.string().optional().nullable(),
  TurnAroundTime: z.string().optional().nullable(),
  AssayCategory: z.string().optional().nullable(),
  ReferenceRanges: z.string().optional().nullable(),
  SetupSchedule: z.string().optional().nullable(),
  AlternativeSpecimen: z.string().optional().nullable(),
  LoincCodesText: z.string().optional().nullable(),
  LoincCodesHTML: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional(),
  TestBiomarker: z.lazy(() => TestBiomarkerCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  Lab: z.lazy(() => LabCreateNestedOneWithoutTestCatalogInputSchema).optional(),
  TestCptCode: z.lazy(() => TestCptCodeCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  TestResultLoinc: z.lazy(() => TestResultLoincCreateNestedManyWithoutTestCatalogInputSchema).optional()
}).strict();

export const TestCatalogUncheckedCreateWithoutTestOrderLoincInputSchema: z.ZodType<Prisma.TestCatalogUncheckedCreateWithoutTestOrderLoincInput> = z.object({
  TestId: z.number().optional(),
  LabId: z.number().optional().nullable(),
  href: z.string().optional().nullable(),
  CasandraTestId: z.string(),
  LabTestId: z.string().optional().nullable(),
  TestName: z.string().optional().nullable(),
  AlternativeName: z.string().optional().nullable(),
  AlternativeName1: z.string().optional().nullable(),
  AlternativeName2: z.string().optional().nullable(),
  AlternativeName3: z.string().optional().nullable(),
  AlternativeName4: z.string().optional().nullable(),
  AlternativeName5: z.string().optional().nullable(),
  TestIncludes: z.string().optional().nullable(),
  SpecimenType: z.string().optional().nullable(),
  SpecialInstructions: z.string().optional().nullable(),
  Methodology: z.string().optional().nullable(),
  TestDescription: z.string().optional().nullable(),
  Diseases: z.string().optional().nullable(),
  Probes: z.string().optional().nullable(),
  ClinicalSignificance: z.string().optional().nullable(),
  SpecimenRequirements: z.string().optional().nullable(),
  Volume: z.string().optional().nullable(),
  MinimumVolume: z.string().optional().nullable(),
  Container: z.string().optional().nullable(),
  Collection: z.string().optional().nullable(),
  StabilityRequirements: z.string().optional().nullable(),
  StorageTransportation: z.string().optional().nullable(),
  PatientPreparation: z.string().optional().nullable(),
  CausesForRejection: z.string().optional().nullable(),
  TestUsage: z.string().optional().nullable(),
  TestLimitations: z.string().optional().nullable(),
  CPTCodes: z.string().optional().nullable(),
  NewYorkApproved: z.string().optional().nullable(),
  LevelOfService: z.string().optional().nullable(),
  TurnAroundTime: z.string().optional().nullable(),
  AssayCategory: z.string().optional().nullable(),
  ReferenceRanges: z.string().optional().nullable(),
  SetupSchedule: z.string().optional().nullable(),
  AlternativeSpecimen: z.string().optional().nullable(),
  LoincCodesText: z.string().optional().nullable(),
  LoincCodesHTML: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional(),
  TestBiomarker: z.lazy(() => TestBiomarkerUncheckedCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  TestCptCode: z.lazy(() => TestCptCodeUncheckedCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  TestResultLoinc: z.lazy(() => TestResultLoincUncheckedCreateNestedManyWithoutTestCatalogInputSchema).optional()
}).strict();

export const TestCatalogCreateOrConnectWithoutTestOrderLoincInputSchema: z.ZodType<Prisma.TestCatalogCreateOrConnectWithoutTestOrderLoincInput> = z.object({
  where: z.lazy(() => TestCatalogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutTestOrderLoincInputSchema),z.lazy(() => TestCatalogUncheckedCreateWithoutTestOrderLoincInputSchema) ]),
}).strict();

export const LOINCUpsertWithoutTestOrderLoincInputSchema: z.ZodType<Prisma.LOINCUpsertWithoutTestOrderLoincInput> = z.object({
  update: z.union([ z.lazy(() => LOINCUpdateWithoutTestOrderLoincInputSchema),z.lazy(() => LOINCUncheckedUpdateWithoutTestOrderLoincInputSchema) ]),
  create: z.union([ z.lazy(() => LOINCCreateWithoutTestOrderLoincInputSchema),z.lazy(() => LOINCUncheckedCreateWithoutTestOrderLoincInputSchema) ]),
  where: z.lazy(() => LOINCWhereInputSchema).optional()
}).strict();

export const LOINCUpdateToOneWithWhereWithoutTestOrderLoincInputSchema: z.ZodType<Prisma.LOINCUpdateToOneWithWhereWithoutTestOrderLoincInput> = z.object({
  where: z.lazy(() => LOINCWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LOINCUpdateWithoutTestOrderLoincInputSchema),z.lazy(() => LOINCUncheckedUpdateWithoutTestOrderLoincInputSchema) ]),
}).strict();

export const LOINCUpdateWithoutTestOrderLoincInputSchema: z.ZodType<Prisma.LOINCUpdateWithoutTestOrderLoincInput> = z.object({
  Loinc_Num: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  COMPONENT: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  PROPERTY: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TIME_ASPCT: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SYSTEM: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SCALE_TYP: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  METHOD_TYP: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CLASS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  VersionLastChanged: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CHNG_TYPE: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  DefinitionDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  STATUS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CONSUMER_NAME: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CLASSTYPE: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  FORMULA: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXMPL_ANSWERS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SURVEY_QUEST_TEXT: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SURVEY_QUEST_SRC: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  UNITSREQUIRED: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  RELATEDNAMES2: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SHORTNAME: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ORDER_OBS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HL7_FIELD_SUBFIELD_ID: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXTERNAL_COPYRIGHT_NOTICE: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXAMPLE_UNITS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LONG_COMMON_NAME: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXAMPLE_UCUM_UNITS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  STATUS_REASON: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  STATUS_TEXT: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CHANGE_REASON_PUBLIC: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  COMMON_TEST_RANK: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  COMMON_ORDER_RANK: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HL7_ATTACHMENT_STRUCTURE: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXTERNAL_COPYRIGHT_LINK: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  PanelType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AskAtOrderEntry: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AssociatedObservations: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  VersionFirstReleased: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ValidHL7AttachmentRequest: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  DisplayName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestResultLoinc: z.lazy(() => TestResultLoincUpdateManyWithoutLOINCNestedInputSchema).optional()
}).strict();

export const LOINCUncheckedUpdateWithoutTestOrderLoincInputSchema: z.ZodType<Prisma.LOINCUncheckedUpdateWithoutTestOrderLoincInput> = z.object({
  Loinc_Num: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  COMPONENT: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  PROPERTY: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TIME_ASPCT: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SYSTEM: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SCALE_TYP: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  METHOD_TYP: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CLASS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  VersionLastChanged: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CHNG_TYPE: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  DefinitionDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  STATUS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CONSUMER_NAME: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CLASSTYPE: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  FORMULA: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXMPL_ANSWERS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SURVEY_QUEST_TEXT: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SURVEY_QUEST_SRC: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  UNITSREQUIRED: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  RELATEDNAMES2: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SHORTNAME: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ORDER_OBS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HL7_FIELD_SUBFIELD_ID: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXTERNAL_COPYRIGHT_NOTICE: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXAMPLE_UNITS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LONG_COMMON_NAME: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXAMPLE_UCUM_UNITS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  STATUS_REASON: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  STATUS_TEXT: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CHANGE_REASON_PUBLIC: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  COMMON_TEST_RANK: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  COMMON_ORDER_RANK: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HL7_ATTACHMENT_STRUCTURE: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXTERNAL_COPYRIGHT_LINK: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  PanelType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AskAtOrderEntry: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AssociatedObservations: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  VersionFirstReleased: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ValidHL7AttachmentRequest: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  DisplayName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestResultLoinc: z.lazy(() => TestResultLoincUncheckedUpdateManyWithoutLOINCNestedInputSchema).optional()
}).strict();

export const TestCatalogUpsertWithoutTestOrderLoincInputSchema: z.ZodType<Prisma.TestCatalogUpsertWithoutTestOrderLoincInput> = z.object({
  update: z.union([ z.lazy(() => TestCatalogUpdateWithoutTestOrderLoincInputSchema),z.lazy(() => TestCatalogUncheckedUpdateWithoutTestOrderLoincInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutTestOrderLoincInputSchema),z.lazy(() => TestCatalogUncheckedCreateWithoutTestOrderLoincInputSchema) ]),
  where: z.lazy(() => TestCatalogWhereInputSchema).optional()
}).strict();

export const TestCatalogUpdateToOneWithWhereWithoutTestOrderLoincInputSchema: z.ZodType<Prisma.TestCatalogUpdateToOneWithWhereWithoutTestOrderLoincInput> = z.object({
  where: z.lazy(() => TestCatalogWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogUpdateWithoutTestOrderLoincInputSchema),z.lazy(() => TestCatalogUncheckedUpdateWithoutTestOrderLoincInputSchema) ]),
}).strict();

export const TestCatalogUpdateWithoutTestOrderLoincInputSchema: z.ZodType<Prisma.TestCatalogUpdateWithoutTestOrderLoincInput> = z.object({
  href: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CasandraTestId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName1: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName2: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName3: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName4: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName5: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestIncludes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecimenType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecialInstructions: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Methodology: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Diseases: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Probes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ClinicalSignificance: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecimenRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Volume: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  MinimumVolume: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Container: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Collection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  StabilityRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  StorageTransportation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  PatientPreparation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CausesForRejection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestLimitations: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CPTCodes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NewYorkApproved: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LevelOfService: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TurnAroundTime: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AssayCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ReferenceRanges: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SetupSchedule: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeSpecimen: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LoincCodesText: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LoincCodesHTML: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  TestBiomarker: z.lazy(() => TestBiomarkerUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  Lab: z.lazy(() => LabUpdateOneWithoutTestCatalogNestedInputSchema).optional(),
  TestCptCode: z.lazy(() => TestCptCodeUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  TestResultLoinc: z.lazy(() => TestResultLoincUpdateManyWithoutTestCatalogNestedInputSchema).optional()
}).strict();

export const TestCatalogUncheckedUpdateWithoutTestOrderLoincInputSchema: z.ZodType<Prisma.TestCatalogUncheckedUpdateWithoutTestOrderLoincInput> = z.object({
  TestId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  LabId: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  href: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CasandraTestId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName1: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName2: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName3: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName4: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName5: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestIncludes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecimenType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecialInstructions: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Methodology: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Diseases: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Probes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ClinicalSignificance: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecimenRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Volume: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  MinimumVolume: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Container: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Collection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  StabilityRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  StorageTransportation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  PatientPreparation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CausesForRejection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestLimitations: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CPTCodes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NewYorkApproved: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LevelOfService: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TurnAroundTime: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AssayCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ReferenceRanges: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SetupSchedule: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeSpecimen: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LoincCodesText: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LoincCodesHTML: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  TestBiomarker: z.lazy(() => TestBiomarkerUncheckedUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  TestCptCode: z.lazy(() => TestCptCodeUncheckedUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  TestResultLoinc: z.lazy(() => TestResultLoincUncheckedUpdateManyWithoutTestCatalogNestedInputSchema).optional()
}).strict();

export const LOINCCreateWithoutTestResultLoincInputSchema: z.ZodType<Prisma.LOINCCreateWithoutTestResultLoincInput> = z.object({
  Loinc_Num: z.string(),
  COMPONENT: z.string().optional().nullable(),
  PROPERTY: z.string().optional().nullable(),
  TIME_ASPCT: z.string().optional().nullable(),
  SYSTEM: z.string().optional().nullable(),
  SCALE_TYP: z.string().optional().nullable(),
  METHOD_TYP: z.string().optional().nullable(),
  CLASS: z.string().optional().nullable(),
  VersionLastChanged: z.string().optional().nullable(),
  CHNG_TYPE: z.string().optional().nullable(),
  DefinitionDescription: z.string().optional().nullable(),
  STATUS: z.string().optional().nullable(),
  CONSUMER_NAME: z.string().optional().nullable(),
  CLASSTYPE: z.number().optional().nullable(),
  FORMULA: z.string().optional().nullable(),
  EXMPL_ANSWERS: z.string().optional().nullable(),
  SURVEY_QUEST_TEXT: z.string().optional().nullable(),
  SURVEY_QUEST_SRC: z.string().optional().nullable(),
  UNITSREQUIRED: z.string().optional().nullable(),
  RELATEDNAMES2: z.string().optional().nullable(),
  SHORTNAME: z.string().optional().nullable(),
  ORDER_OBS: z.string().optional().nullable(),
  HL7_FIELD_SUBFIELD_ID: z.string().optional().nullable(),
  EXTERNAL_COPYRIGHT_NOTICE: z.string().optional().nullable(),
  EXAMPLE_UNITS: z.string().optional().nullable(),
  LONG_COMMON_NAME: z.string().optional().nullable(),
  EXAMPLE_UCUM_UNITS: z.string().optional().nullable(),
  STATUS_REASON: z.string().optional().nullable(),
  STATUS_TEXT: z.string().optional().nullable(),
  CHANGE_REASON_PUBLIC: z.string().optional().nullable(),
  COMMON_TEST_RANK: z.number().optional().nullable(),
  COMMON_ORDER_RANK: z.number().optional().nullable(),
  HL7_ATTACHMENT_STRUCTURE: z.string().optional().nullable(),
  EXTERNAL_COPYRIGHT_LINK: z.string().optional().nullable(),
  PanelType: z.string().optional().nullable(),
  AskAtOrderEntry: z.string().optional().nullable(),
  AssociatedObservations: z.string().optional().nullable(),
  VersionFirstReleased: z.string().optional().nullable(),
  ValidHL7AttachmentRequest: z.string().optional().nullable(),
  DisplayName: z.string().optional().nullable(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincCreateNestedManyWithoutLOINCInputSchema).optional()
}).strict();

export const LOINCUncheckedCreateWithoutTestResultLoincInputSchema: z.ZodType<Prisma.LOINCUncheckedCreateWithoutTestResultLoincInput> = z.object({
  Loinc_Num: z.string(),
  COMPONENT: z.string().optional().nullable(),
  PROPERTY: z.string().optional().nullable(),
  TIME_ASPCT: z.string().optional().nullable(),
  SYSTEM: z.string().optional().nullable(),
  SCALE_TYP: z.string().optional().nullable(),
  METHOD_TYP: z.string().optional().nullable(),
  CLASS: z.string().optional().nullable(),
  VersionLastChanged: z.string().optional().nullable(),
  CHNG_TYPE: z.string().optional().nullable(),
  DefinitionDescription: z.string().optional().nullable(),
  STATUS: z.string().optional().nullable(),
  CONSUMER_NAME: z.string().optional().nullable(),
  CLASSTYPE: z.number().optional().nullable(),
  FORMULA: z.string().optional().nullable(),
  EXMPL_ANSWERS: z.string().optional().nullable(),
  SURVEY_QUEST_TEXT: z.string().optional().nullable(),
  SURVEY_QUEST_SRC: z.string().optional().nullable(),
  UNITSREQUIRED: z.string().optional().nullable(),
  RELATEDNAMES2: z.string().optional().nullable(),
  SHORTNAME: z.string().optional().nullable(),
  ORDER_OBS: z.string().optional().nullable(),
  HL7_FIELD_SUBFIELD_ID: z.string().optional().nullable(),
  EXTERNAL_COPYRIGHT_NOTICE: z.string().optional().nullable(),
  EXAMPLE_UNITS: z.string().optional().nullable(),
  LONG_COMMON_NAME: z.string().optional().nullable(),
  EXAMPLE_UCUM_UNITS: z.string().optional().nullable(),
  STATUS_REASON: z.string().optional().nullable(),
  STATUS_TEXT: z.string().optional().nullable(),
  CHANGE_REASON_PUBLIC: z.string().optional().nullable(),
  COMMON_TEST_RANK: z.number().optional().nullable(),
  COMMON_ORDER_RANK: z.number().optional().nullable(),
  HL7_ATTACHMENT_STRUCTURE: z.string().optional().nullable(),
  EXTERNAL_COPYRIGHT_LINK: z.string().optional().nullable(),
  PanelType: z.string().optional().nullable(),
  AskAtOrderEntry: z.string().optional().nullable(),
  AssociatedObservations: z.string().optional().nullable(),
  VersionFirstReleased: z.string().optional().nullable(),
  ValidHL7AttachmentRequest: z.string().optional().nullable(),
  DisplayName: z.string().optional().nullable(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincUncheckedCreateNestedManyWithoutLOINCInputSchema).optional()
}).strict();

export const LOINCCreateOrConnectWithoutTestResultLoincInputSchema: z.ZodType<Prisma.LOINCCreateOrConnectWithoutTestResultLoincInput> = z.object({
  where: z.lazy(() => LOINCWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LOINCCreateWithoutTestResultLoincInputSchema),z.lazy(() => LOINCUncheckedCreateWithoutTestResultLoincInputSchema) ]),
}).strict();

export const TestCatalogCreateWithoutTestResultLoincInputSchema: z.ZodType<Prisma.TestCatalogCreateWithoutTestResultLoincInput> = z.object({
  href: z.string().optional().nullable(),
  CasandraTestId: z.string(),
  LabTestId: z.string().optional().nullable(),
  TestName: z.string().optional().nullable(),
  AlternativeName: z.string().optional().nullable(),
  AlternativeName1: z.string().optional().nullable(),
  AlternativeName2: z.string().optional().nullable(),
  AlternativeName3: z.string().optional().nullable(),
  AlternativeName4: z.string().optional().nullable(),
  AlternativeName5: z.string().optional().nullable(),
  TestIncludes: z.string().optional().nullable(),
  SpecimenType: z.string().optional().nullable(),
  SpecialInstructions: z.string().optional().nullable(),
  Methodology: z.string().optional().nullable(),
  TestDescription: z.string().optional().nullable(),
  Diseases: z.string().optional().nullable(),
  Probes: z.string().optional().nullable(),
  ClinicalSignificance: z.string().optional().nullable(),
  SpecimenRequirements: z.string().optional().nullable(),
  Volume: z.string().optional().nullable(),
  MinimumVolume: z.string().optional().nullable(),
  Container: z.string().optional().nullable(),
  Collection: z.string().optional().nullable(),
  StabilityRequirements: z.string().optional().nullable(),
  StorageTransportation: z.string().optional().nullable(),
  PatientPreparation: z.string().optional().nullable(),
  CausesForRejection: z.string().optional().nullable(),
  TestUsage: z.string().optional().nullable(),
  TestLimitations: z.string().optional().nullable(),
  CPTCodes: z.string().optional().nullable(),
  NewYorkApproved: z.string().optional().nullable(),
  LevelOfService: z.string().optional().nullable(),
  TurnAroundTime: z.string().optional().nullable(),
  AssayCategory: z.string().optional().nullable(),
  ReferenceRanges: z.string().optional().nullable(),
  SetupSchedule: z.string().optional().nullable(),
  AlternativeSpecimen: z.string().optional().nullable(),
  LoincCodesText: z.string().optional().nullable(),
  LoincCodesHTML: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional(),
  TestBiomarker: z.lazy(() => TestBiomarkerCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  Lab: z.lazy(() => LabCreateNestedOneWithoutTestCatalogInputSchema).optional(),
  TestCptCode: z.lazy(() => TestCptCodeCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincCreateNestedManyWithoutTestCatalogInputSchema).optional()
}).strict();

export const TestCatalogUncheckedCreateWithoutTestResultLoincInputSchema: z.ZodType<Prisma.TestCatalogUncheckedCreateWithoutTestResultLoincInput> = z.object({
  TestId: z.number().optional(),
  LabId: z.number().optional().nullable(),
  href: z.string().optional().nullable(),
  CasandraTestId: z.string(),
  LabTestId: z.string().optional().nullable(),
  TestName: z.string().optional().nullable(),
  AlternativeName: z.string().optional().nullable(),
  AlternativeName1: z.string().optional().nullable(),
  AlternativeName2: z.string().optional().nullable(),
  AlternativeName3: z.string().optional().nullable(),
  AlternativeName4: z.string().optional().nullable(),
  AlternativeName5: z.string().optional().nullable(),
  TestIncludes: z.string().optional().nullable(),
  SpecimenType: z.string().optional().nullable(),
  SpecialInstructions: z.string().optional().nullable(),
  Methodology: z.string().optional().nullable(),
  TestDescription: z.string().optional().nullable(),
  Diseases: z.string().optional().nullable(),
  Probes: z.string().optional().nullable(),
  ClinicalSignificance: z.string().optional().nullable(),
  SpecimenRequirements: z.string().optional().nullable(),
  Volume: z.string().optional().nullable(),
  MinimumVolume: z.string().optional().nullable(),
  Container: z.string().optional().nullable(),
  Collection: z.string().optional().nullable(),
  StabilityRequirements: z.string().optional().nullable(),
  StorageTransportation: z.string().optional().nullable(),
  PatientPreparation: z.string().optional().nullable(),
  CausesForRejection: z.string().optional().nullable(),
  TestUsage: z.string().optional().nullable(),
  TestLimitations: z.string().optional().nullable(),
  CPTCodes: z.string().optional().nullable(),
  NewYorkApproved: z.string().optional().nullable(),
  LevelOfService: z.string().optional().nullable(),
  TurnAroundTime: z.string().optional().nullable(),
  AssayCategory: z.string().optional().nullable(),
  ReferenceRanges: z.string().optional().nullable(),
  SetupSchedule: z.string().optional().nullable(),
  AlternativeSpecimen: z.string().optional().nullable(),
  LoincCodesText: z.string().optional().nullable(),
  LoincCodesHTML: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional(),
  TestBiomarker: z.lazy(() => TestBiomarkerUncheckedCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  TestCptCode: z.lazy(() => TestCptCodeUncheckedCreateNestedManyWithoutTestCatalogInputSchema).optional(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincUncheckedCreateNestedManyWithoutTestCatalogInputSchema).optional()
}).strict();

export const TestCatalogCreateOrConnectWithoutTestResultLoincInputSchema: z.ZodType<Prisma.TestCatalogCreateOrConnectWithoutTestResultLoincInput> = z.object({
  where: z.lazy(() => TestCatalogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutTestResultLoincInputSchema),z.lazy(() => TestCatalogUncheckedCreateWithoutTestResultLoincInputSchema) ]),
}).strict();

export const LOINCUpsertWithoutTestResultLoincInputSchema: z.ZodType<Prisma.LOINCUpsertWithoutTestResultLoincInput> = z.object({
  update: z.union([ z.lazy(() => LOINCUpdateWithoutTestResultLoincInputSchema),z.lazy(() => LOINCUncheckedUpdateWithoutTestResultLoincInputSchema) ]),
  create: z.union([ z.lazy(() => LOINCCreateWithoutTestResultLoincInputSchema),z.lazy(() => LOINCUncheckedCreateWithoutTestResultLoincInputSchema) ]),
  where: z.lazy(() => LOINCWhereInputSchema).optional()
}).strict();

export const LOINCUpdateToOneWithWhereWithoutTestResultLoincInputSchema: z.ZodType<Prisma.LOINCUpdateToOneWithWhereWithoutTestResultLoincInput> = z.object({
  where: z.lazy(() => LOINCWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LOINCUpdateWithoutTestResultLoincInputSchema),z.lazy(() => LOINCUncheckedUpdateWithoutTestResultLoincInputSchema) ]),
}).strict();

export const LOINCUpdateWithoutTestResultLoincInputSchema: z.ZodType<Prisma.LOINCUpdateWithoutTestResultLoincInput> = z.object({
  Loinc_Num: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  COMPONENT: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  PROPERTY: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TIME_ASPCT: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SYSTEM: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SCALE_TYP: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  METHOD_TYP: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CLASS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  VersionLastChanged: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CHNG_TYPE: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  DefinitionDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  STATUS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CONSUMER_NAME: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CLASSTYPE: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  FORMULA: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXMPL_ANSWERS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SURVEY_QUEST_TEXT: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SURVEY_QUEST_SRC: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  UNITSREQUIRED: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  RELATEDNAMES2: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SHORTNAME: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ORDER_OBS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HL7_FIELD_SUBFIELD_ID: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXTERNAL_COPYRIGHT_NOTICE: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXAMPLE_UNITS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LONG_COMMON_NAME: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXAMPLE_UCUM_UNITS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  STATUS_REASON: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  STATUS_TEXT: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CHANGE_REASON_PUBLIC: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  COMMON_TEST_RANK: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  COMMON_ORDER_RANK: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HL7_ATTACHMENT_STRUCTURE: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXTERNAL_COPYRIGHT_LINK: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  PanelType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AskAtOrderEntry: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AssociatedObservations: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  VersionFirstReleased: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ValidHL7AttachmentRequest: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  DisplayName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincUpdateManyWithoutLOINCNestedInputSchema).optional()
}).strict();

export const LOINCUncheckedUpdateWithoutTestResultLoincInputSchema: z.ZodType<Prisma.LOINCUncheckedUpdateWithoutTestResultLoincInput> = z.object({
  Loinc_Num: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  COMPONENT: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  PROPERTY: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TIME_ASPCT: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SYSTEM: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SCALE_TYP: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  METHOD_TYP: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CLASS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  VersionLastChanged: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CHNG_TYPE: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  DefinitionDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  STATUS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CONSUMER_NAME: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CLASSTYPE: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  FORMULA: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXMPL_ANSWERS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SURVEY_QUEST_TEXT: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SURVEY_QUEST_SRC: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  UNITSREQUIRED: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  RELATEDNAMES2: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SHORTNAME: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ORDER_OBS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HL7_FIELD_SUBFIELD_ID: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXTERNAL_COPYRIGHT_NOTICE: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXAMPLE_UNITS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LONG_COMMON_NAME: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXAMPLE_UCUM_UNITS: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  STATUS_REASON: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  STATUS_TEXT: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CHANGE_REASON_PUBLIC: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  COMMON_TEST_RANK: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  COMMON_ORDER_RANK: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HL7_ATTACHMENT_STRUCTURE: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  EXTERNAL_COPYRIGHT_LINK: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  PanelType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AskAtOrderEntry: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AssociatedObservations: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  VersionFirstReleased: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ValidHL7AttachmentRequest: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  DisplayName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincUncheckedUpdateManyWithoutLOINCNestedInputSchema).optional()
}).strict();

export const TestCatalogUpsertWithoutTestResultLoincInputSchema: z.ZodType<Prisma.TestCatalogUpsertWithoutTestResultLoincInput> = z.object({
  update: z.union([ z.lazy(() => TestCatalogUpdateWithoutTestResultLoincInputSchema),z.lazy(() => TestCatalogUncheckedUpdateWithoutTestResultLoincInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutTestResultLoincInputSchema),z.lazy(() => TestCatalogUncheckedCreateWithoutTestResultLoincInputSchema) ]),
  where: z.lazy(() => TestCatalogWhereInputSchema).optional()
}).strict();

export const TestCatalogUpdateToOneWithWhereWithoutTestResultLoincInputSchema: z.ZodType<Prisma.TestCatalogUpdateToOneWithWhereWithoutTestResultLoincInput> = z.object({
  where: z.lazy(() => TestCatalogWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogUpdateWithoutTestResultLoincInputSchema),z.lazy(() => TestCatalogUncheckedUpdateWithoutTestResultLoincInputSchema) ]),
}).strict();

export const TestCatalogUpdateWithoutTestResultLoincInputSchema: z.ZodType<Prisma.TestCatalogUpdateWithoutTestResultLoincInput> = z.object({
  href: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CasandraTestId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName1: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName2: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName3: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName4: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName5: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestIncludes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecimenType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecialInstructions: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Methodology: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Diseases: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Probes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ClinicalSignificance: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecimenRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Volume: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  MinimumVolume: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Container: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Collection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  StabilityRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  StorageTransportation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  PatientPreparation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CausesForRejection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestLimitations: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CPTCodes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NewYorkApproved: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LevelOfService: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TurnAroundTime: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AssayCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ReferenceRanges: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SetupSchedule: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeSpecimen: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LoincCodesText: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LoincCodesHTML: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  TestBiomarker: z.lazy(() => TestBiomarkerUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  Lab: z.lazy(() => LabUpdateOneWithoutTestCatalogNestedInputSchema).optional(),
  TestCptCode: z.lazy(() => TestCptCodeUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincUpdateManyWithoutTestCatalogNestedInputSchema).optional()
}).strict();

export const TestCatalogUncheckedUpdateWithoutTestResultLoincInputSchema: z.ZodType<Prisma.TestCatalogUncheckedUpdateWithoutTestResultLoincInput> = z.object({
  TestId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  LabId: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  href: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CasandraTestId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName1: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName2: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName3: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName4: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName5: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestIncludes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecimenType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecialInstructions: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Methodology: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Diseases: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Probes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ClinicalSignificance: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecimenRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Volume: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  MinimumVolume: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Container: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Collection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  StabilityRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  StorageTransportation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  PatientPreparation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CausesForRejection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestLimitations: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CPTCodes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NewYorkApproved: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LevelOfService: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TurnAroundTime: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AssayCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ReferenceRanges: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SetupSchedule: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeSpecimen: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LoincCodesText: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LoincCodesHTML: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  TestBiomarker: z.lazy(() => TestBiomarkerUncheckedUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  TestCptCode: z.lazy(() => TestCptCodeUncheckedUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincUncheckedUpdateManyWithoutTestCatalogNestedInputSchema).optional()
}).strict();

export const AccountCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateWithoutUserInput> = z.object({
  id: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable()
}).strict();

export const AccountUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateWithoutUserInput> = z.object({
  id: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable()
}).strict();

export const AccountCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AccountCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.AccountCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AccountCreateManyUserInputSchema),z.lazy(() => AccountCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const SessionCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateWithoutUserInput> = z.object({
  id: z.string(),
  sessionToken: z.string(),
  expires: z.date()
}).strict();

export const SessionUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput> = z.object({
  id: z.string(),
  sessionToken: z.string(),
  expires: z.date()
}).strict();

export const SessionCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SessionCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.SessionCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SessionCreateManyUserInputSchema),z.lazy(() => SessionCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const AccountUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AccountUpdateWithoutUserInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AccountUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AccountUpdateWithoutUserInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const AccountUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => AccountScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AccountUpdateManyMutationInputSchema),z.lazy(() => AccountUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const AccountScalarWhereInputSchema: z.ZodType<Prisma.AccountScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const SessionUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SessionUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const SessionUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => SessionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SessionUpdateManyMutationInputSchema),z.lazy(() => SessionUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const SessionScalarWhereInputSchema: z.ZodType<Prisma.SessionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.date() ]).optional(),
}).strict();

export const TestBiomarkerCreateManyBIOMARKERInputSchema: z.ZodType<Prisma.TestBiomarkerCreateManyBIOMARKERInput> = z.object({
  Id: z.number().optional(),
  TestId: z.number(),
  LabTestId: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional()
}).strict();

export const TestBiomarkerUpdateWithoutBIOMARKERInputSchema: z.ZodType<Prisma.TestBiomarkerUpdateWithoutBIOMARKERInput> = z.object({
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  TestCatalog: z.lazy(() => TestCatalogUpdateOneRequiredWithoutTestBiomarkerNestedInputSchema).optional()
}).strict();

export const TestBiomarkerUncheckedUpdateWithoutBIOMARKERInputSchema: z.ZodType<Prisma.TestBiomarkerUncheckedUpdateWithoutBIOMARKERInput> = z.object({
  Id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  TestId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestBiomarkerUncheckedUpdateManyWithoutBIOMARKERInputSchema: z.ZodType<Prisma.TestBiomarkerUncheckedUpdateManyWithoutBIOMARKERInput> = z.object({
  Id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  TestId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestOrderLoincCreateManyLOINCInputSchema: z.ZodType<Prisma.TestOrderLoincCreateManyLOINCInput> = z.object({
  Id: z.number().optional(),
  TestId: z.number(),
  LabTestId: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional()
}).strict();

export const TestResultLoincCreateManyLOINCInputSchema: z.ZodType<Prisma.TestResultLoincCreateManyLOINCInput> = z.object({
  Id: z.number().optional(),
  TestId: z.number(),
  LabTestId: z.string().optional().nullable(),
  ResultCode: z.string().optional().nullable(),
  ResultCodeName: z.string().optional().nullable(),
  UofM: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional()
}).strict();

export const TestOrderLoincUpdateWithoutLOINCInputSchema: z.ZodType<Prisma.TestOrderLoincUpdateWithoutLOINCInput> = z.object({
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  TestCatalog: z.lazy(() => TestCatalogUpdateOneRequiredWithoutTestOrderLoincNestedInputSchema).optional()
}).strict();

export const TestOrderLoincUncheckedUpdateWithoutLOINCInputSchema: z.ZodType<Prisma.TestOrderLoincUncheckedUpdateWithoutLOINCInput> = z.object({
  Id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  TestId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestOrderLoincUncheckedUpdateManyWithoutLOINCInputSchema: z.ZodType<Prisma.TestOrderLoincUncheckedUpdateManyWithoutLOINCInput> = z.object({
  Id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  TestId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestResultLoincUpdateWithoutLOINCInputSchema: z.ZodType<Prisma.TestResultLoincUpdateWithoutLOINCInput> = z.object({
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ResultCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ResultCodeName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  UofM: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  TestCatalog: z.lazy(() => TestCatalogUpdateOneRequiredWithoutTestResultLoincNestedInputSchema).optional()
}).strict();

export const TestResultLoincUncheckedUpdateWithoutLOINCInputSchema: z.ZodType<Prisma.TestResultLoincUncheckedUpdateWithoutLOINCInput> = z.object({
  Id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  TestId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ResultCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ResultCodeName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  UofM: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestResultLoincUncheckedUpdateManyWithoutLOINCInputSchema: z.ZodType<Prisma.TestResultLoincUncheckedUpdateManyWithoutLOINCInput> = z.object({
  Id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  TestId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ResultCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ResultCodeName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  UofM: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestCatalogCreateManyLabInputSchema: z.ZodType<Prisma.TestCatalogCreateManyLabInput> = z.object({
  TestId: z.number().optional(),
  href: z.string().optional().nullable(),
  CasandraTestId: z.string(),
  LabTestId: z.string().optional().nullable(),
  TestName: z.string().optional().nullable(),
  AlternativeName: z.string().optional().nullable(),
  AlternativeName1: z.string().optional().nullable(),
  AlternativeName2: z.string().optional().nullable(),
  AlternativeName3: z.string().optional().nullable(),
  AlternativeName4: z.string().optional().nullable(),
  AlternativeName5: z.string().optional().nullable(),
  TestIncludes: z.string().optional().nullable(),
  SpecimenType: z.string().optional().nullable(),
  SpecialInstructions: z.string().optional().nullable(),
  Methodology: z.string().optional().nullable(),
  TestDescription: z.string().optional().nullable(),
  Diseases: z.string().optional().nullable(),
  Probes: z.string().optional().nullable(),
  ClinicalSignificance: z.string().optional().nullable(),
  SpecimenRequirements: z.string().optional().nullable(),
  Volume: z.string().optional().nullable(),
  MinimumVolume: z.string().optional().nullable(),
  Container: z.string().optional().nullable(),
  Collection: z.string().optional().nullable(),
  StabilityRequirements: z.string().optional().nullable(),
  StorageTransportation: z.string().optional().nullable(),
  PatientPreparation: z.string().optional().nullable(),
  CausesForRejection: z.string().optional().nullable(),
  TestUsage: z.string().optional().nullable(),
  TestLimitations: z.string().optional().nullable(),
  CPTCodes: z.string().optional().nullable(),
  NewYorkApproved: z.string().optional().nullable(),
  LevelOfService: z.string().optional().nullable(),
  TurnAroundTime: z.string().optional().nullable(),
  AssayCategory: z.string().optional().nullable(),
  ReferenceRanges: z.string().optional().nullable(),
  SetupSchedule: z.string().optional().nullable(),
  AlternativeSpecimen: z.string().optional().nullable(),
  LoincCodesText: z.string().optional().nullable(),
  LoincCodesHTML: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional()
}).strict();

export const TestCatalogUpdateWithoutLabInputSchema: z.ZodType<Prisma.TestCatalogUpdateWithoutLabInput> = z.object({
  href: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CasandraTestId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName1: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName2: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName3: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName4: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName5: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestIncludes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecimenType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecialInstructions: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Methodology: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Diseases: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Probes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ClinicalSignificance: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecimenRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Volume: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  MinimumVolume: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Container: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Collection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  StabilityRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  StorageTransportation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  PatientPreparation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CausesForRejection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestLimitations: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CPTCodes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NewYorkApproved: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LevelOfService: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TurnAroundTime: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AssayCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ReferenceRanges: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SetupSchedule: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeSpecimen: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LoincCodesText: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LoincCodesHTML: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  TestBiomarker: z.lazy(() => TestBiomarkerUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  TestCptCode: z.lazy(() => TestCptCodeUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  TestResultLoinc: z.lazy(() => TestResultLoincUpdateManyWithoutTestCatalogNestedInputSchema).optional()
}).strict();

export const TestCatalogUncheckedUpdateWithoutLabInputSchema: z.ZodType<Prisma.TestCatalogUncheckedUpdateWithoutLabInput> = z.object({
  TestId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  href: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CasandraTestId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName1: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName2: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName3: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName4: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName5: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestIncludes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecimenType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecialInstructions: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Methodology: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Diseases: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Probes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ClinicalSignificance: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecimenRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Volume: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  MinimumVolume: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Container: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Collection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  StabilityRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  StorageTransportation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  PatientPreparation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CausesForRejection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestLimitations: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CPTCodes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NewYorkApproved: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LevelOfService: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TurnAroundTime: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AssayCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ReferenceRanges: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SetupSchedule: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeSpecimen: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LoincCodesText: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LoincCodesHTML: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  TestBiomarker: z.lazy(() => TestBiomarkerUncheckedUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  TestCptCode: z.lazy(() => TestCptCodeUncheckedUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  TestOrderLoinc: z.lazy(() => TestOrderLoincUncheckedUpdateManyWithoutTestCatalogNestedInputSchema).optional(),
  TestResultLoinc: z.lazy(() => TestResultLoincUncheckedUpdateManyWithoutTestCatalogNestedInputSchema).optional()
}).strict();

export const TestCatalogUncheckedUpdateManyWithoutLabInputSchema: z.ZodType<Prisma.TestCatalogUncheckedUpdateManyWithoutLabInput> = z.object({
  TestId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  href: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CasandraTestId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName1: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName2: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName3: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName4: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeName5: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestIncludes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecimenType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecialInstructions: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Methodology: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestDescription: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Diseases: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Probes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ClinicalSignificance: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SpecimenRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Volume: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  MinimumVolume: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Container: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Collection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  StabilityRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  StorageTransportation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  PatientPreparation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CausesForRejection: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestUsage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TestLimitations: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CPTCodes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NewYorkApproved: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LevelOfService: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TurnAroundTime: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AssayCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ReferenceRanges: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  SetupSchedule: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  AlternativeSpecimen: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LoincCodesText: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  LoincCodesHTML: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestBiomarkerCreateManyTestCatalogInputSchema: z.ZodType<Prisma.TestBiomarkerCreateManyTestCatalogInput> = z.object({
  Id: z.number().optional(),
  LabTestId: z.string().optional().nullable(),
  HGNCId: z.string(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional()
}).strict();

export const TestCptCodeCreateManyTestCatalogInputSchema: z.ZodType<Prisma.TestCptCodeCreateManyTestCatalogInput> = z.object({
  Id: z.number().optional(),
  LabTestId: z.string().optional().nullable(),
  CptCode: z.string().optional().nullable(),
  Modifier: z.string().optional().nullable(),
  Comments: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional()
}).strict();

export const TestOrderLoincCreateManyTestCatalogInputSchema: z.ZodType<Prisma.TestOrderLoincCreateManyTestCatalogInput> = z.object({
  Id: z.number().optional(),
  LabTestId: z.string().optional().nullable(),
  OrderLoinc: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional()
}).strict();

export const TestResultLoincCreateManyTestCatalogInputSchema: z.ZodType<Prisma.TestResultLoincCreateManyTestCatalogInput> = z.object({
  Id: z.number().optional(),
  LabTestId: z.string().optional().nullable(),
  ResultCode: z.string().optional().nullable(),
  ResultCodeName: z.string().optional().nullable(),
  UofM: z.string().optional().nullable(),
  ResultLoinc: z.string().optional().nullable(),
  CreatedAt: z.date().optional(),
  UpdatedAt: z.date().optional()
}).strict();

export const TestBiomarkerUpdateWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestBiomarkerUpdateWithoutTestCatalogInput> = z.object({
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  BIOMARKER: z.lazy(() => BIOMARKERUpdateOneRequiredWithoutTestBiomarkerNestedInputSchema).optional()
}).strict();

export const TestBiomarkerUncheckedUpdateWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestBiomarkerUncheckedUpdateWithoutTestCatalogInput> = z.object({
  Id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HGNCId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestBiomarkerUncheckedUpdateManyWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestBiomarkerUncheckedUpdateManyWithoutTestCatalogInput> = z.object({
  Id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HGNCId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestCptCodeUpdateWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestCptCodeUpdateWithoutTestCatalogInput> = z.object({
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CptCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Modifier: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestCptCodeUncheckedUpdateWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestCptCodeUncheckedUpdateWithoutTestCatalogInput> = z.object({
  Id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CptCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Modifier: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestCptCodeUncheckedUpdateManyWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestCptCodeUncheckedUpdateManyWithoutTestCatalogInput> = z.object({
  Id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CptCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Modifier: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestOrderLoincUpdateWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestOrderLoincUpdateWithoutTestCatalogInput> = z.object({
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  LOINC: z.lazy(() => LOINCUpdateOneWithoutTestOrderLoincNestedInputSchema).optional()
}).strict();

export const TestOrderLoincUncheckedUpdateWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestOrderLoincUncheckedUpdateWithoutTestCatalogInput> = z.object({
  Id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  OrderLoinc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestOrderLoincUncheckedUpdateManyWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestOrderLoincUncheckedUpdateManyWithoutTestCatalogInput> = z.object({
  Id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  OrderLoinc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestResultLoincUpdateWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestResultLoincUpdateWithoutTestCatalogInput> = z.object({
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ResultCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ResultCodeName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  UofM: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  LOINC: z.lazy(() => LOINCUpdateOneWithoutTestResultLoincNestedInputSchema).optional()
}).strict();

export const TestResultLoincUncheckedUpdateWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestResultLoincUncheckedUpdateWithoutTestCatalogInput> = z.object({
  Id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ResultCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ResultCodeName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  UofM: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ResultLoinc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TestResultLoincUncheckedUpdateManyWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestResultLoincUncheckedUpdateManyWithoutTestCatalogInput> = z.object({
  Id: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  LabTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ResultCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ResultCodeName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  UofM: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ResultLoinc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  CreatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UpdatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountCreateManyUserInputSchema: z.ZodType<Prisma.AccountCreateManyUserInput> = z.object({
  id: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable()
}).strict();

export const SessionCreateManyUserInputSchema: z.ZodType<Prisma.SessionCreateManyUserInput> = z.object({
  id: z.string(),
  sessionToken: z.string(),
  expires: z.date()
}).strict();

export const AccountUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AccountUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const SessionUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const AccountFindFirstArgsSchema: z.ZodType<Prisma.AccountFindFirstArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationAndSearchRelevanceInputSchema.array(),AccountOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AccountFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AccountFindFirstOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationAndSearchRelevanceInputSchema.array(),AccountOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AccountFindManyArgsSchema: z.ZodType<Prisma.AccountFindManyArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationAndSearchRelevanceInputSchema.array(),AccountOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AccountAggregateArgsSchema: z.ZodType<Prisma.AccountAggregateArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationAndSearchRelevanceInputSchema.array(),AccountOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AccountGroupByArgsSchema: z.ZodType<Prisma.AccountGroupByArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithAggregationInputSchema.array(),AccountOrderByWithAggregationInputSchema ]).optional(),
  by: AccountScalarFieldEnumSchema.array(),
  having: AccountScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AccountFindUniqueArgsSchema: z.ZodType<Prisma.AccountFindUniqueArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const AccountFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AccountFindUniqueOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const BIOMARKERFindFirstArgsSchema: z.ZodType<Prisma.BIOMARKERFindFirstArgs> = z.object({
  select: BIOMARKERSelectSchema.optional(),
  include: BIOMARKERIncludeSchema.optional(),
  where: BIOMARKERWhereInputSchema.optional(),
  orderBy: z.union([ BIOMARKEROrderByWithRelationAndSearchRelevanceInputSchema.array(),BIOMARKEROrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: BIOMARKERWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BIOMARKERScalarFieldEnumSchema,BIOMARKERScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BIOMARKERFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BIOMARKERFindFirstOrThrowArgs> = z.object({
  select: BIOMARKERSelectSchema.optional(),
  include: BIOMARKERIncludeSchema.optional(),
  where: BIOMARKERWhereInputSchema.optional(),
  orderBy: z.union([ BIOMARKEROrderByWithRelationAndSearchRelevanceInputSchema.array(),BIOMARKEROrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: BIOMARKERWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BIOMARKERScalarFieldEnumSchema,BIOMARKERScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BIOMARKERFindManyArgsSchema: z.ZodType<Prisma.BIOMARKERFindManyArgs> = z.object({
  select: BIOMARKERSelectSchema.optional(),
  include: BIOMARKERIncludeSchema.optional(),
  where: BIOMARKERWhereInputSchema.optional(),
  orderBy: z.union([ BIOMARKEROrderByWithRelationAndSearchRelevanceInputSchema.array(),BIOMARKEROrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: BIOMARKERWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BIOMARKERScalarFieldEnumSchema,BIOMARKERScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BIOMARKERAggregateArgsSchema: z.ZodType<Prisma.BIOMARKERAggregateArgs> = z.object({
  where: BIOMARKERWhereInputSchema.optional(),
  orderBy: z.union([ BIOMARKEROrderByWithRelationAndSearchRelevanceInputSchema.array(),BIOMARKEROrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: BIOMARKERWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const BIOMARKERGroupByArgsSchema: z.ZodType<Prisma.BIOMARKERGroupByArgs> = z.object({
  where: BIOMARKERWhereInputSchema.optional(),
  orderBy: z.union([ BIOMARKEROrderByWithAggregationInputSchema.array(),BIOMARKEROrderByWithAggregationInputSchema ]).optional(),
  by: BIOMARKERScalarFieldEnumSchema.array(),
  having: BIOMARKERScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const BIOMARKERFindUniqueArgsSchema: z.ZodType<Prisma.BIOMARKERFindUniqueArgs> = z.object({
  select: BIOMARKERSelectSchema.optional(),
  include: BIOMARKERIncludeSchema.optional(),
  where: BIOMARKERWhereUniqueInputSchema,
}).strict() ;

export const BIOMARKERFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.BIOMARKERFindUniqueOrThrowArgs> = z.object({
  select: BIOMARKERSelectSchema.optional(),
  include: BIOMARKERIncludeSchema.optional(),
  where: BIOMARKERWhereUniqueInputSchema,
}).strict() ;

export const LOINCFindFirstArgsSchema: z.ZodType<Prisma.LOINCFindFirstArgs> = z.object({
  select: LOINCSelectSchema.optional(),
  include: LOINCIncludeSchema.optional(),
  where: LOINCWhereInputSchema.optional(),
  orderBy: z.union([ LOINCOrderByWithRelationAndSearchRelevanceInputSchema.array(),LOINCOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: LOINCWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LOINCScalarFieldEnumSchema,LOINCScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LOINCFindFirstOrThrowArgsSchema: z.ZodType<Prisma.LOINCFindFirstOrThrowArgs> = z.object({
  select: LOINCSelectSchema.optional(),
  include: LOINCIncludeSchema.optional(),
  where: LOINCWhereInputSchema.optional(),
  orderBy: z.union([ LOINCOrderByWithRelationAndSearchRelevanceInputSchema.array(),LOINCOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: LOINCWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LOINCScalarFieldEnumSchema,LOINCScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LOINCFindManyArgsSchema: z.ZodType<Prisma.LOINCFindManyArgs> = z.object({
  select: LOINCSelectSchema.optional(),
  include: LOINCIncludeSchema.optional(),
  where: LOINCWhereInputSchema.optional(),
  orderBy: z.union([ LOINCOrderByWithRelationAndSearchRelevanceInputSchema.array(),LOINCOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: LOINCWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LOINCScalarFieldEnumSchema,LOINCScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LOINCAggregateArgsSchema: z.ZodType<Prisma.LOINCAggregateArgs> = z.object({
  where: LOINCWhereInputSchema.optional(),
  orderBy: z.union([ LOINCOrderByWithRelationAndSearchRelevanceInputSchema.array(),LOINCOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: LOINCWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const LOINCGroupByArgsSchema: z.ZodType<Prisma.LOINCGroupByArgs> = z.object({
  where: LOINCWhereInputSchema.optional(),
  orderBy: z.union([ LOINCOrderByWithAggregationInputSchema.array(),LOINCOrderByWithAggregationInputSchema ]).optional(),
  by: LOINCScalarFieldEnumSchema.array(),
  having: LOINCScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const LOINCFindUniqueArgsSchema: z.ZodType<Prisma.LOINCFindUniqueArgs> = z.object({
  select: LOINCSelectSchema.optional(),
  include: LOINCIncludeSchema.optional(),
  where: LOINCWhereUniqueInputSchema,
}).strict() ;

export const LOINCFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.LOINCFindUniqueOrThrowArgs> = z.object({
  select: LOINCSelectSchema.optional(),
  include: LOINCIncludeSchema.optional(),
  where: LOINCWhereUniqueInputSchema,
}).strict() ;

export const LabFindFirstArgsSchema: z.ZodType<Prisma.LabFindFirstArgs> = z.object({
  select: LabSelectSchema.optional(),
  include: LabIncludeSchema.optional(),
  where: LabWhereInputSchema.optional(),
  orderBy: z.union([ LabOrderByWithRelationAndSearchRelevanceInputSchema.array(),LabOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: LabWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LabScalarFieldEnumSchema,LabScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LabFindFirstOrThrowArgsSchema: z.ZodType<Prisma.LabFindFirstOrThrowArgs> = z.object({
  select: LabSelectSchema.optional(),
  include: LabIncludeSchema.optional(),
  where: LabWhereInputSchema.optional(),
  orderBy: z.union([ LabOrderByWithRelationAndSearchRelevanceInputSchema.array(),LabOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: LabWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LabScalarFieldEnumSchema,LabScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LabFindManyArgsSchema: z.ZodType<Prisma.LabFindManyArgs> = z.object({
  select: LabSelectSchema.optional(),
  include: LabIncludeSchema.optional(),
  where: LabWhereInputSchema.optional(),
  orderBy: z.union([ LabOrderByWithRelationAndSearchRelevanceInputSchema.array(),LabOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: LabWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LabScalarFieldEnumSchema,LabScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LabAggregateArgsSchema: z.ZodType<Prisma.LabAggregateArgs> = z.object({
  where: LabWhereInputSchema.optional(),
  orderBy: z.union([ LabOrderByWithRelationAndSearchRelevanceInputSchema.array(),LabOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: LabWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const LabGroupByArgsSchema: z.ZodType<Prisma.LabGroupByArgs> = z.object({
  where: LabWhereInputSchema.optional(),
  orderBy: z.union([ LabOrderByWithAggregationInputSchema.array(),LabOrderByWithAggregationInputSchema ]).optional(),
  by: LabScalarFieldEnumSchema.array(),
  having: LabScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const LabFindUniqueArgsSchema: z.ZodType<Prisma.LabFindUniqueArgs> = z.object({
  select: LabSelectSchema.optional(),
  include: LabIncludeSchema.optional(),
  where: LabWhereUniqueInputSchema,
}).strict() ;

export const LabFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.LabFindUniqueOrThrowArgs> = z.object({
  select: LabSelectSchema.optional(),
  include: LabIncludeSchema.optional(),
  where: LabWhereUniqueInputSchema,
}).strict() ;

export const LoincComponentHierarchyFindFirstArgsSchema: z.ZodType<Prisma.LoincComponentHierarchyFindFirstArgs> = z.object({
  select: LoincComponentHierarchySelectSchema.optional(),
  where: LoincComponentHierarchyWhereInputSchema.optional(),
  orderBy: z.union([ LoincComponentHierarchyOrderByWithRelationAndSearchRelevanceInputSchema.array(),LoincComponentHierarchyOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: LoincComponentHierarchyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LoincComponentHierarchyScalarFieldEnumSchema,LoincComponentHierarchyScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LoincComponentHierarchyFindFirstOrThrowArgsSchema: z.ZodType<Prisma.LoincComponentHierarchyFindFirstOrThrowArgs> = z.object({
  select: LoincComponentHierarchySelectSchema.optional(),
  where: LoincComponentHierarchyWhereInputSchema.optional(),
  orderBy: z.union([ LoincComponentHierarchyOrderByWithRelationAndSearchRelevanceInputSchema.array(),LoincComponentHierarchyOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: LoincComponentHierarchyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LoincComponentHierarchyScalarFieldEnumSchema,LoincComponentHierarchyScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LoincComponentHierarchyFindManyArgsSchema: z.ZodType<Prisma.LoincComponentHierarchyFindManyArgs> = z.object({
  select: LoincComponentHierarchySelectSchema.optional(),
  where: LoincComponentHierarchyWhereInputSchema.optional(),
  orderBy: z.union([ LoincComponentHierarchyOrderByWithRelationAndSearchRelevanceInputSchema.array(),LoincComponentHierarchyOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: LoincComponentHierarchyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LoincComponentHierarchyScalarFieldEnumSchema,LoincComponentHierarchyScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LoincComponentHierarchyAggregateArgsSchema: z.ZodType<Prisma.LoincComponentHierarchyAggregateArgs> = z.object({
  where: LoincComponentHierarchyWhereInputSchema.optional(),
  orderBy: z.union([ LoincComponentHierarchyOrderByWithRelationAndSearchRelevanceInputSchema.array(),LoincComponentHierarchyOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: LoincComponentHierarchyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const LoincComponentHierarchyGroupByArgsSchema: z.ZodType<Prisma.LoincComponentHierarchyGroupByArgs> = z.object({
  where: LoincComponentHierarchyWhereInputSchema.optional(),
  orderBy: z.union([ LoincComponentHierarchyOrderByWithAggregationInputSchema.array(),LoincComponentHierarchyOrderByWithAggregationInputSchema ]).optional(),
  by: LoincComponentHierarchyScalarFieldEnumSchema.array(),
  having: LoincComponentHierarchyScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const LoincComponentHierarchyFindUniqueArgsSchema: z.ZodType<Prisma.LoincComponentHierarchyFindUniqueArgs> = z.object({
  select: LoincComponentHierarchySelectSchema.optional(),
  where: LoincComponentHierarchyWhereUniqueInputSchema,
}).strict() ;

export const LoincComponentHierarchyFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.LoincComponentHierarchyFindUniqueOrThrowArgs> = z.object({
  select: LoincComponentHierarchySelectSchema.optional(),
  where: LoincComponentHierarchyWhereUniqueInputSchema,
}).strict() ;

export const LoincPanelHierarchyFindFirstArgsSchema: z.ZodType<Prisma.LoincPanelHierarchyFindFirstArgs> = z.object({
  select: LoincPanelHierarchySelectSchema.optional(),
  where: LoincPanelHierarchyWhereInputSchema.optional(),
  orderBy: z.union([ LoincPanelHierarchyOrderByWithRelationAndSearchRelevanceInputSchema.array(),LoincPanelHierarchyOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: LoincPanelHierarchyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LoincPanelHierarchyScalarFieldEnumSchema,LoincPanelHierarchyScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LoincPanelHierarchyFindFirstOrThrowArgsSchema: z.ZodType<Prisma.LoincPanelHierarchyFindFirstOrThrowArgs> = z.object({
  select: LoincPanelHierarchySelectSchema.optional(),
  where: LoincPanelHierarchyWhereInputSchema.optional(),
  orderBy: z.union([ LoincPanelHierarchyOrderByWithRelationAndSearchRelevanceInputSchema.array(),LoincPanelHierarchyOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: LoincPanelHierarchyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LoincPanelHierarchyScalarFieldEnumSchema,LoincPanelHierarchyScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LoincPanelHierarchyFindManyArgsSchema: z.ZodType<Prisma.LoincPanelHierarchyFindManyArgs> = z.object({
  select: LoincPanelHierarchySelectSchema.optional(),
  where: LoincPanelHierarchyWhereInputSchema.optional(),
  orderBy: z.union([ LoincPanelHierarchyOrderByWithRelationAndSearchRelevanceInputSchema.array(),LoincPanelHierarchyOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: LoincPanelHierarchyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LoincPanelHierarchyScalarFieldEnumSchema,LoincPanelHierarchyScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LoincPanelHierarchyAggregateArgsSchema: z.ZodType<Prisma.LoincPanelHierarchyAggregateArgs> = z.object({
  where: LoincPanelHierarchyWhereInputSchema.optional(),
  orderBy: z.union([ LoincPanelHierarchyOrderByWithRelationAndSearchRelevanceInputSchema.array(),LoincPanelHierarchyOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: LoincPanelHierarchyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const LoincPanelHierarchyGroupByArgsSchema: z.ZodType<Prisma.LoincPanelHierarchyGroupByArgs> = z.object({
  where: LoincPanelHierarchyWhereInputSchema.optional(),
  orderBy: z.union([ LoincPanelHierarchyOrderByWithAggregationInputSchema.array(),LoincPanelHierarchyOrderByWithAggregationInputSchema ]).optional(),
  by: LoincPanelHierarchyScalarFieldEnumSchema.array(),
  having: LoincPanelHierarchyScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const LoincPanelHierarchyFindUniqueArgsSchema: z.ZodType<Prisma.LoincPanelHierarchyFindUniqueArgs> = z.object({
  select: LoincPanelHierarchySelectSchema.optional(),
  where: LoincPanelHierarchyWhereUniqueInputSchema,
}).strict() ;

export const LoincPanelHierarchyFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.LoincPanelHierarchyFindUniqueOrThrowArgs> = z.object({
  select: LoincPanelHierarchySelectSchema.optional(),
  where: LoincPanelHierarchyWhereUniqueInputSchema,
}).strict() ;

export const LoincUniveralLabOrdersFindFirstArgsSchema: z.ZodType<Prisma.LoincUniveralLabOrdersFindFirstArgs> = z.object({
  select: LoincUniveralLabOrdersSelectSchema.optional(),
  where: LoincUniveralLabOrdersWhereInputSchema.optional(),
  orderBy: z.union([ LoincUniveralLabOrdersOrderByWithRelationAndSearchRelevanceInputSchema.array(),LoincUniveralLabOrdersOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: LoincUniveralLabOrdersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LoincUniveralLabOrdersScalarFieldEnumSchema,LoincUniveralLabOrdersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LoincUniveralLabOrdersFindFirstOrThrowArgsSchema: z.ZodType<Prisma.LoincUniveralLabOrdersFindFirstOrThrowArgs> = z.object({
  select: LoincUniveralLabOrdersSelectSchema.optional(),
  where: LoincUniveralLabOrdersWhereInputSchema.optional(),
  orderBy: z.union([ LoincUniveralLabOrdersOrderByWithRelationAndSearchRelevanceInputSchema.array(),LoincUniveralLabOrdersOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: LoincUniveralLabOrdersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LoincUniveralLabOrdersScalarFieldEnumSchema,LoincUniveralLabOrdersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LoincUniveralLabOrdersFindManyArgsSchema: z.ZodType<Prisma.LoincUniveralLabOrdersFindManyArgs> = z.object({
  select: LoincUniveralLabOrdersSelectSchema.optional(),
  where: LoincUniveralLabOrdersWhereInputSchema.optional(),
  orderBy: z.union([ LoincUniveralLabOrdersOrderByWithRelationAndSearchRelevanceInputSchema.array(),LoincUniveralLabOrdersOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: LoincUniveralLabOrdersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LoincUniveralLabOrdersScalarFieldEnumSchema,LoincUniveralLabOrdersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LoincUniveralLabOrdersAggregateArgsSchema: z.ZodType<Prisma.LoincUniveralLabOrdersAggregateArgs> = z.object({
  where: LoincUniveralLabOrdersWhereInputSchema.optional(),
  orderBy: z.union([ LoincUniveralLabOrdersOrderByWithRelationAndSearchRelevanceInputSchema.array(),LoincUniveralLabOrdersOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: LoincUniveralLabOrdersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const LoincUniveralLabOrdersGroupByArgsSchema: z.ZodType<Prisma.LoincUniveralLabOrdersGroupByArgs> = z.object({
  where: LoincUniveralLabOrdersWhereInputSchema.optional(),
  orderBy: z.union([ LoincUniveralLabOrdersOrderByWithAggregationInputSchema.array(),LoincUniveralLabOrdersOrderByWithAggregationInputSchema ]).optional(),
  by: LoincUniveralLabOrdersScalarFieldEnumSchema.array(),
  having: LoincUniveralLabOrdersScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const LoincUniveralLabOrdersFindUniqueArgsSchema: z.ZodType<Prisma.LoincUniveralLabOrdersFindUniqueArgs> = z.object({
  select: LoincUniveralLabOrdersSelectSchema.optional(),
  where: LoincUniveralLabOrdersWhereUniqueInputSchema,
}).strict() ;

export const LoincUniveralLabOrdersFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.LoincUniveralLabOrdersFindUniqueOrThrowArgs> = z.object({
  select: LoincUniveralLabOrdersSelectSchema.optional(),
  where: LoincUniveralLabOrdersWhereUniqueInputSchema,
}).strict() ;

export const PostFindFirstArgsSchema: z.ZodType<Prisma.PostFindFirstArgs> = z.object({
  select: PostSelectSchema.optional(),
  where: PostWhereInputSchema.optional(),
  orderBy: z.union([ PostOrderByWithRelationAndSearchRelevanceInputSchema.array(),PostOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: PostWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PostScalarFieldEnumSchema,PostScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PostFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PostFindFirstOrThrowArgs> = z.object({
  select: PostSelectSchema.optional(),
  where: PostWhereInputSchema.optional(),
  orderBy: z.union([ PostOrderByWithRelationAndSearchRelevanceInputSchema.array(),PostOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: PostWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PostScalarFieldEnumSchema,PostScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PostFindManyArgsSchema: z.ZodType<Prisma.PostFindManyArgs> = z.object({
  select: PostSelectSchema.optional(),
  where: PostWhereInputSchema.optional(),
  orderBy: z.union([ PostOrderByWithRelationAndSearchRelevanceInputSchema.array(),PostOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: PostWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PostScalarFieldEnumSchema,PostScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PostAggregateArgsSchema: z.ZodType<Prisma.PostAggregateArgs> = z.object({
  where: PostWhereInputSchema.optional(),
  orderBy: z.union([ PostOrderByWithRelationAndSearchRelevanceInputSchema.array(),PostOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: PostWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PostGroupByArgsSchema: z.ZodType<Prisma.PostGroupByArgs> = z.object({
  where: PostWhereInputSchema.optional(),
  orderBy: z.union([ PostOrderByWithAggregationInputSchema.array(),PostOrderByWithAggregationInputSchema ]).optional(),
  by: PostScalarFieldEnumSchema.array(),
  having: PostScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PostFindUniqueArgsSchema: z.ZodType<Prisma.PostFindUniqueArgs> = z.object({
  select: PostSelectSchema.optional(),
  where: PostWhereUniqueInputSchema,
}).strict() ;

export const PostFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PostFindUniqueOrThrowArgs> = z.object({
  select: PostSelectSchema.optional(),
  where: PostWhereUniqueInputSchema,
}).strict() ;

export const SessionFindFirstArgsSchema: z.ZodType<Prisma.SessionFindFirstArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationAndSearchRelevanceInputSchema.array(),SessionOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SessionFindFirstOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationAndSearchRelevanceInputSchema.array(),SessionOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionFindManyArgsSchema: z.ZodType<Prisma.SessionFindManyArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationAndSearchRelevanceInputSchema.array(),SessionOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionAggregateArgsSchema: z.ZodType<Prisma.SessionAggregateArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationAndSearchRelevanceInputSchema.array(),SessionOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SessionGroupByArgsSchema: z.ZodType<Prisma.SessionGroupByArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithAggregationInputSchema.array(),SessionOrderByWithAggregationInputSchema ]).optional(),
  by: SessionScalarFieldEnumSchema.array(),
  having: SessionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SessionFindUniqueArgsSchema: z.ZodType<Prisma.SessionFindUniqueArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SessionFindUniqueOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const TestBiomarkerFindFirstArgsSchema: z.ZodType<Prisma.TestBiomarkerFindFirstArgs> = z.object({
  select: TestBiomarkerSelectSchema.optional(),
  include: TestBiomarkerIncludeSchema.optional(),
  where: TestBiomarkerWhereInputSchema.optional(),
  orderBy: z.union([ TestBiomarkerOrderByWithRelationAndSearchRelevanceInputSchema.array(),TestBiomarkerOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: TestBiomarkerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TestBiomarkerScalarFieldEnumSchema,TestBiomarkerScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TestBiomarkerFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TestBiomarkerFindFirstOrThrowArgs> = z.object({
  select: TestBiomarkerSelectSchema.optional(),
  include: TestBiomarkerIncludeSchema.optional(),
  where: TestBiomarkerWhereInputSchema.optional(),
  orderBy: z.union([ TestBiomarkerOrderByWithRelationAndSearchRelevanceInputSchema.array(),TestBiomarkerOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: TestBiomarkerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TestBiomarkerScalarFieldEnumSchema,TestBiomarkerScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TestBiomarkerFindManyArgsSchema: z.ZodType<Prisma.TestBiomarkerFindManyArgs> = z.object({
  select: TestBiomarkerSelectSchema.optional(),
  include: TestBiomarkerIncludeSchema.optional(),
  where: TestBiomarkerWhereInputSchema.optional(),
  orderBy: z.union([ TestBiomarkerOrderByWithRelationAndSearchRelevanceInputSchema.array(),TestBiomarkerOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: TestBiomarkerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TestBiomarkerScalarFieldEnumSchema,TestBiomarkerScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TestBiomarkerAggregateArgsSchema: z.ZodType<Prisma.TestBiomarkerAggregateArgs> = z.object({
  where: TestBiomarkerWhereInputSchema.optional(),
  orderBy: z.union([ TestBiomarkerOrderByWithRelationAndSearchRelevanceInputSchema.array(),TestBiomarkerOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: TestBiomarkerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TestBiomarkerGroupByArgsSchema: z.ZodType<Prisma.TestBiomarkerGroupByArgs> = z.object({
  where: TestBiomarkerWhereInputSchema.optional(),
  orderBy: z.union([ TestBiomarkerOrderByWithAggregationInputSchema.array(),TestBiomarkerOrderByWithAggregationInputSchema ]).optional(),
  by: TestBiomarkerScalarFieldEnumSchema.array(),
  having: TestBiomarkerScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TestBiomarkerFindUniqueArgsSchema: z.ZodType<Prisma.TestBiomarkerFindUniqueArgs> = z.object({
  select: TestBiomarkerSelectSchema.optional(),
  include: TestBiomarkerIncludeSchema.optional(),
  where: TestBiomarkerWhereUniqueInputSchema,
}).strict() ;

export const TestBiomarkerFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TestBiomarkerFindUniqueOrThrowArgs> = z.object({
  select: TestBiomarkerSelectSchema.optional(),
  include: TestBiomarkerIncludeSchema.optional(),
  where: TestBiomarkerWhereUniqueInputSchema,
}).strict() ;

export const TestCatalogFindFirstArgsSchema: z.ZodType<Prisma.TestCatalogFindFirstArgs> = z.object({
  select: TestCatalogSelectSchema.optional(),
  include: TestCatalogIncludeSchema.optional(),
  where: TestCatalogWhereInputSchema.optional(),
  orderBy: z.union([ TestCatalogOrderByWithRelationAndSearchRelevanceInputSchema.array(),TestCatalogOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: TestCatalogWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TestCatalogScalarFieldEnumSchema,TestCatalogScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TestCatalogFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TestCatalogFindFirstOrThrowArgs> = z.object({
  select: TestCatalogSelectSchema.optional(),
  include: TestCatalogIncludeSchema.optional(),
  where: TestCatalogWhereInputSchema.optional(),
  orderBy: z.union([ TestCatalogOrderByWithRelationAndSearchRelevanceInputSchema.array(),TestCatalogOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: TestCatalogWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TestCatalogScalarFieldEnumSchema,TestCatalogScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TestCatalogFindManyArgsSchema: z.ZodType<Prisma.TestCatalogFindManyArgs> = z.object({
  select: TestCatalogSelectSchema.optional(),
  include: TestCatalogIncludeSchema.optional(),
  where: TestCatalogWhereInputSchema.optional(),
  orderBy: z.union([ TestCatalogOrderByWithRelationAndSearchRelevanceInputSchema.array(),TestCatalogOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: TestCatalogWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TestCatalogScalarFieldEnumSchema,TestCatalogScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TestCatalogAggregateArgsSchema: z.ZodType<Prisma.TestCatalogAggregateArgs> = z.object({
  where: TestCatalogWhereInputSchema.optional(),
  orderBy: z.union([ TestCatalogOrderByWithRelationAndSearchRelevanceInputSchema.array(),TestCatalogOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: TestCatalogWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TestCatalogGroupByArgsSchema: z.ZodType<Prisma.TestCatalogGroupByArgs> = z.object({
  where: TestCatalogWhereInputSchema.optional(),
  orderBy: z.union([ TestCatalogOrderByWithAggregationInputSchema.array(),TestCatalogOrderByWithAggregationInputSchema ]).optional(),
  by: TestCatalogScalarFieldEnumSchema.array(),
  having: TestCatalogScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TestCatalogFindUniqueArgsSchema: z.ZodType<Prisma.TestCatalogFindUniqueArgs> = z.object({
  select: TestCatalogSelectSchema.optional(),
  include: TestCatalogIncludeSchema.optional(),
  where: TestCatalogWhereUniqueInputSchema,
}).strict() ;

export const TestCatalogFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TestCatalogFindUniqueOrThrowArgs> = z.object({
  select: TestCatalogSelectSchema.optional(),
  include: TestCatalogIncludeSchema.optional(),
  where: TestCatalogWhereUniqueInputSchema,
}).strict() ;

export const TestCptCodeFindFirstArgsSchema: z.ZodType<Prisma.TestCptCodeFindFirstArgs> = z.object({
  select: TestCptCodeSelectSchema.optional(),
  include: TestCptCodeIncludeSchema.optional(),
  where: TestCptCodeWhereInputSchema.optional(),
  orderBy: z.union([ TestCptCodeOrderByWithRelationAndSearchRelevanceInputSchema.array(),TestCptCodeOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: TestCptCodeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TestCptCodeScalarFieldEnumSchema,TestCptCodeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TestCptCodeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TestCptCodeFindFirstOrThrowArgs> = z.object({
  select: TestCptCodeSelectSchema.optional(),
  include: TestCptCodeIncludeSchema.optional(),
  where: TestCptCodeWhereInputSchema.optional(),
  orderBy: z.union([ TestCptCodeOrderByWithRelationAndSearchRelevanceInputSchema.array(),TestCptCodeOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: TestCptCodeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TestCptCodeScalarFieldEnumSchema,TestCptCodeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TestCptCodeFindManyArgsSchema: z.ZodType<Prisma.TestCptCodeFindManyArgs> = z.object({
  select: TestCptCodeSelectSchema.optional(),
  include: TestCptCodeIncludeSchema.optional(),
  where: TestCptCodeWhereInputSchema.optional(),
  orderBy: z.union([ TestCptCodeOrderByWithRelationAndSearchRelevanceInputSchema.array(),TestCptCodeOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: TestCptCodeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TestCptCodeScalarFieldEnumSchema,TestCptCodeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TestCptCodeAggregateArgsSchema: z.ZodType<Prisma.TestCptCodeAggregateArgs> = z.object({
  where: TestCptCodeWhereInputSchema.optional(),
  orderBy: z.union([ TestCptCodeOrderByWithRelationAndSearchRelevanceInputSchema.array(),TestCptCodeOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: TestCptCodeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TestCptCodeGroupByArgsSchema: z.ZodType<Prisma.TestCptCodeGroupByArgs> = z.object({
  where: TestCptCodeWhereInputSchema.optional(),
  orderBy: z.union([ TestCptCodeOrderByWithAggregationInputSchema.array(),TestCptCodeOrderByWithAggregationInputSchema ]).optional(),
  by: TestCptCodeScalarFieldEnumSchema.array(),
  having: TestCptCodeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TestCptCodeFindUniqueArgsSchema: z.ZodType<Prisma.TestCptCodeFindUniqueArgs> = z.object({
  select: TestCptCodeSelectSchema.optional(),
  include: TestCptCodeIncludeSchema.optional(),
  where: TestCptCodeWhereUniqueInputSchema,
}).strict() ;

export const TestCptCodeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TestCptCodeFindUniqueOrThrowArgs> = z.object({
  select: TestCptCodeSelectSchema.optional(),
  include: TestCptCodeIncludeSchema.optional(),
  where: TestCptCodeWhereUniqueInputSchema,
}).strict() ;

export const TestOrderLoincFindFirstArgsSchema: z.ZodType<Prisma.TestOrderLoincFindFirstArgs> = z.object({
  select: TestOrderLoincSelectSchema.optional(),
  include: TestOrderLoincIncludeSchema.optional(),
  where: TestOrderLoincWhereInputSchema.optional(),
  orderBy: z.union([ TestOrderLoincOrderByWithRelationAndSearchRelevanceInputSchema.array(),TestOrderLoincOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: TestOrderLoincWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TestOrderLoincScalarFieldEnumSchema,TestOrderLoincScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TestOrderLoincFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TestOrderLoincFindFirstOrThrowArgs> = z.object({
  select: TestOrderLoincSelectSchema.optional(),
  include: TestOrderLoincIncludeSchema.optional(),
  where: TestOrderLoincWhereInputSchema.optional(),
  orderBy: z.union([ TestOrderLoincOrderByWithRelationAndSearchRelevanceInputSchema.array(),TestOrderLoincOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: TestOrderLoincWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TestOrderLoincScalarFieldEnumSchema,TestOrderLoincScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TestOrderLoincFindManyArgsSchema: z.ZodType<Prisma.TestOrderLoincFindManyArgs> = z.object({
  select: TestOrderLoincSelectSchema.optional(),
  include: TestOrderLoincIncludeSchema.optional(),
  where: TestOrderLoincWhereInputSchema.optional(),
  orderBy: z.union([ TestOrderLoincOrderByWithRelationAndSearchRelevanceInputSchema.array(),TestOrderLoincOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: TestOrderLoincWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TestOrderLoincScalarFieldEnumSchema,TestOrderLoincScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TestOrderLoincAggregateArgsSchema: z.ZodType<Prisma.TestOrderLoincAggregateArgs> = z.object({
  where: TestOrderLoincWhereInputSchema.optional(),
  orderBy: z.union([ TestOrderLoincOrderByWithRelationAndSearchRelevanceInputSchema.array(),TestOrderLoincOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: TestOrderLoincWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TestOrderLoincGroupByArgsSchema: z.ZodType<Prisma.TestOrderLoincGroupByArgs> = z.object({
  where: TestOrderLoincWhereInputSchema.optional(),
  orderBy: z.union([ TestOrderLoincOrderByWithAggregationInputSchema.array(),TestOrderLoincOrderByWithAggregationInputSchema ]).optional(),
  by: TestOrderLoincScalarFieldEnumSchema.array(),
  having: TestOrderLoincScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TestOrderLoincFindUniqueArgsSchema: z.ZodType<Prisma.TestOrderLoincFindUniqueArgs> = z.object({
  select: TestOrderLoincSelectSchema.optional(),
  include: TestOrderLoincIncludeSchema.optional(),
  where: TestOrderLoincWhereUniqueInputSchema,
}).strict() ;

export const TestOrderLoincFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TestOrderLoincFindUniqueOrThrowArgs> = z.object({
  select: TestOrderLoincSelectSchema.optional(),
  include: TestOrderLoincIncludeSchema.optional(),
  where: TestOrderLoincWhereUniqueInputSchema,
}).strict() ;

export const TestResultLoincFindFirstArgsSchema: z.ZodType<Prisma.TestResultLoincFindFirstArgs> = z.object({
  select: TestResultLoincSelectSchema.optional(),
  include: TestResultLoincIncludeSchema.optional(),
  where: TestResultLoincWhereInputSchema.optional(),
  orderBy: z.union([ TestResultLoincOrderByWithRelationAndSearchRelevanceInputSchema.array(),TestResultLoincOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: TestResultLoincWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TestResultLoincScalarFieldEnumSchema,TestResultLoincScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TestResultLoincFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TestResultLoincFindFirstOrThrowArgs> = z.object({
  select: TestResultLoincSelectSchema.optional(),
  include: TestResultLoincIncludeSchema.optional(),
  where: TestResultLoincWhereInputSchema.optional(),
  orderBy: z.union([ TestResultLoincOrderByWithRelationAndSearchRelevanceInputSchema.array(),TestResultLoincOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: TestResultLoincWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TestResultLoincScalarFieldEnumSchema,TestResultLoincScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TestResultLoincFindManyArgsSchema: z.ZodType<Prisma.TestResultLoincFindManyArgs> = z.object({
  select: TestResultLoincSelectSchema.optional(),
  include: TestResultLoincIncludeSchema.optional(),
  where: TestResultLoincWhereInputSchema.optional(),
  orderBy: z.union([ TestResultLoincOrderByWithRelationAndSearchRelevanceInputSchema.array(),TestResultLoincOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: TestResultLoincWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TestResultLoincScalarFieldEnumSchema,TestResultLoincScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TestResultLoincAggregateArgsSchema: z.ZodType<Prisma.TestResultLoincAggregateArgs> = z.object({
  where: TestResultLoincWhereInputSchema.optional(),
  orderBy: z.union([ TestResultLoincOrderByWithRelationAndSearchRelevanceInputSchema.array(),TestResultLoincOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: TestResultLoincWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TestResultLoincGroupByArgsSchema: z.ZodType<Prisma.TestResultLoincGroupByArgs> = z.object({
  where: TestResultLoincWhereInputSchema.optional(),
  orderBy: z.union([ TestResultLoincOrderByWithAggregationInputSchema.array(),TestResultLoincOrderByWithAggregationInputSchema ]).optional(),
  by: TestResultLoincScalarFieldEnumSchema.array(),
  having: TestResultLoincScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TestResultLoincFindUniqueArgsSchema: z.ZodType<Prisma.TestResultLoincFindUniqueArgs> = z.object({
  select: TestResultLoincSelectSchema.optional(),
  include: TestResultLoincIncludeSchema.optional(),
  where: TestResultLoincWhereUniqueInputSchema,
}).strict() ;

export const TestResultLoincFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TestResultLoincFindUniqueOrThrowArgs> = z.object({
  select: TestResultLoincSelectSchema.optional(),
  include: TestResultLoincIncludeSchema.optional(),
  where: TestResultLoincWhereUniqueInputSchema,
}).strict() ;

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationAndSearchRelevanceInputSchema.array(),UserOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationAndSearchRelevanceInputSchema.array(),UserOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationAndSearchRelevanceInputSchema.array(),UserOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationAndSearchRelevanceInputSchema.array(),UserOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const VerificationTokenFindFirstArgsSchema: z.ZodType<Prisma.VerificationTokenFindFirstArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationAndSearchRelevanceInputSchema.array(),VerificationTokenOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerificationTokenScalarFieldEnumSchema,VerificationTokenScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VerificationTokenFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VerificationTokenFindFirstOrThrowArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationAndSearchRelevanceInputSchema.array(),VerificationTokenOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerificationTokenScalarFieldEnumSchema,VerificationTokenScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VerificationTokenFindManyArgsSchema: z.ZodType<Prisma.VerificationTokenFindManyArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationAndSearchRelevanceInputSchema.array(),VerificationTokenOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerificationTokenScalarFieldEnumSchema,VerificationTokenScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VerificationTokenAggregateArgsSchema: z.ZodType<Prisma.VerificationTokenAggregateArgs> = z.object({
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationAndSearchRelevanceInputSchema.array(),VerificationTokenOrderByWithRelationAndSearchRelevanceInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const VerificationTokenGroupByArgsSchema: z.ZodType<Prisma.VerificationTokenGroupByArgs> = z.object({
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithAggregationInputSchema.array(),VerificationTokenOrderByWithAggregationInputSchema ]).optional(),
  by: VerificationTokenScalarFieldEnumSchema.array(),
  having: VerificationTokenScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const VerificationTokenFindUniqueArgsSchema: z.ZodType<Prisma.VerificationTokenFindUniqueArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict() ;

export const VerificationTokenFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.VerificationTokenFindUniqueOrThrowArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict() ;

export const AccountCreateArgsSchema: z.ZodType<Prisma.AccountCreateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([ AccountCreateInputSchema,AccountUncheckedCreateInputSchema ]),
}).strict() ;

export const AccountUpsertArgsSchema: z.ZodType<Prisma.AccountUpsertArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
  create: z.union([ AccountCreateInputSchema,AccountUncheckedCreateInputSchema ]),
  update: z.union([ AccountUpdateInputSchema,AccountUncheckedUpdateInputSchema ]),
}).strict() ;

export const AccountCreateManyArgsSchema: z.ZodType<Prisma.AccountCreateManyArgs> = z.object({
  data: z.union([ AccountCreateManyInputSchema,AccountCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const AccountDeleteArgsSchema: z.ZodType<Prisma.AccountDeleteArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const AccountUpdateArgsSchema: z.ZodType<Prisma.AccountUpdateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([ AccountUpdateInputSchema,AccountUncheckedUpdateInputSchema ]),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const AccountUpdateManyArgsSchema: z.ZodType<Prisma.AccountUpdateManyArgs> = z.object({
  data: z.union([ AccountUpdateManyMutationInputSchema,AccountUncheckedUpdateManyInputSchema ]),
  where: AccountWhereInputSchema.optional(),
}).strict() ;

export const AccountDeleteManyArgsSchema: z.ZodType<Prisma.AccountDeleteManyArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
}).strict() ;

export const BIOMARKERCreateArgsSchema: z.ZodType<Prisma.BIOMARKERCreateArgs> = z.object({
  select: BIOMARKERSelectSchema.optional(),
  include: BIOMARKERIncludeSchema.optional(),
  data: z.union([ BIOMARKERCreateInputSchema,BIOMARKERUncheckedCreateInputSchema ]),
}).strict() ;

export const BIOMARKERUpsertArgsSchema: z.ZodType<Prisma.BIOMARKERUpsertArgs> = z.object({
  select: BIOMARKERSelectSchema.optional(),
  include: BIOMARKERIncludeSchema.optional(),
  where: BIOMARKERWhereUniqueInputSchema,
  create: z.union([ BIOMARKERCreateInputSchema,BIOMARKERUncheckedCreateInputSchema ]),
  update: z.union([ BIOMARKERUpdateInputSchema,BIOMARKERUncheckedUpdateInputSchema ]),
}).strict() ;

export const BIOMARKERCreateManyArgsSchema: z.ZodType<Prisma.BIOMARKERCreateManyArgs> = z.object({
  data: z.union([ BIOMARKERCreateManyInputSchema,BIOMARKERCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const BIOMARKERDeleteArgsSchema: z.ZodType<Prisma.BIOMARKERDeleteArgs> = z.object({
  select: BIOMARKERSelectSchema.optional(),
  include: BIOMARKERIncludeSchema.optional(),
  where: BIOMARKERWhereUniqueInputSchema,
}).strict() ;

export const BIOMARKERUpdateArgsSchema: z.ZodType<Prisma.BIOMARKERUpdateArgs> = z.object({
  select: BIOMARKERSelectSchema.optional(),
  include: BIOMARKERIncludeSchema.optional(),
  data: z.union([ BIOMARKERUpdateInputSchema,BIOMARKERUncheckedUpdateInputSchema ]),
  where: BIOMARKERWhereUniqueInputSchema,
}).strict() ;

export const BIOMARKERUpdateManyArgsSchema: z.ZodType<Prisma.BIOMARKERUpdateManyArgs> = z.object({
  data: z.union([ BIOMARKERUpdateManyMutationInputSchema,BIOMARKERUncheckedUpdateManyInputSchema ]),
  where: BIOMARKERWhereInputSchema.optional(),
}).strict() ;

export const BIOMARKERDeleteManyArgsSchema: z.ZodType<Prisma.BIOMARKERDeleteManyArgs> = z.object({
  where: BIOMARKERWhereInputSchema.optional(),
}).strict() ;

export const LOINCCreateArgsSchema: z.ZodType<Prisma.LOINCCreateArgs> = z.object({
  select: LOINCSelectSchema.optional(),
  include: LOINCIncludeSchema.optional(),
  data: z.union([ LOINCCreateInputSchema,LOINCUncheckedCreateInputSchema ]),
}).strict() ;

export const LOINCUpsertArgsSchema: z.ZodType<Prisma.LOINCUpsertArgs> = z.object({
  select: LOINCSelectSchema.optional(),
  include: LOINCIncludeSchema.optional(),
  where: LOINCWhereUniqueInputSchema,
  create: z.union([ LOINCCreateInputSchema,LOINCUncheckedCreateInputSchema ]),
  update: z.union([ LOINCUpdateInputSchema,LOINCUncheckedUpdateInputSchema ]),
}).strict() ;

export const LOINCCreateManyArgsSchema: z.ZodType<Prisma.LOINCCreateManyArgs> = z.object({
  data: z.union([ LOINCCreateManyInputSchema,LOINCCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const LOINCDeleteArgsSchema: z.ZodType<Prisma.LOINCDeleteArgs> = z.object({
  select: LOINCSelectSchema.optional(),
  include: LOINCIncludeSchema.optional(),
  where: LOINCWhereUniqueInputSchema,
}).strict() ;

export const LOINCUpdateArgsSchema: z.ZodType<Prisma.LOINCUpdateArgs> = z.object({
  select: LOINCSelectSchema.optional(),
  include: LOINCIncludeSchema.optional(),
  data: z.union([ LOINCUpdateInputSchema,LOINCUncheckedUpdateInputSchema ]),
  where: LOINCWhereUniqueInputSchema,
}).strict() ;

export const LOINCUpdateManyArgsSchema: z.ZodType<Prisma.LOINCUpdateManyArgs> = z.object({
  data: z.union([ LOINCUpdateManyMutationInputSchema,LOINCUncheckedUpdateManyInputSchema ]),
  where: LOINCWhereInputSchema.optional(),
}).strict() ;

export const LOINCDeleteManyArgsSchema: z.ZodType<Prisma.LOINCDeleteManyArgs> = z.object({
  where: LOINCWhereInputSchema.optional(),
}).strict() ;

export const LabCreateArgsSchema: z.ZodType<Prisma.LabCreateArgs> = z.object({
  select: LabSelectSchema.optional(),
  include: LabIncludeSchema.optional(),
  data: z.union([ LabCreateInputSchema,LabUncheckedCreateInputSchema ]).optional(),
}).strict() ;

export const LabUpsertArgsSchema: z.ZodType<Prisma.LabUpsertArgs> = z.object({
  select: LabSelectSchema.optional(),
  include: LabIncludeSchema.optional(),
  where: LabWhereUniqueInputSchema,
  create: z.union([ LabCreateInputSchema,LabUncheckedCreateInputSchema ]),
  update: z.union([ LabUpdateInputSchema,LabUncheckedUpdateInputSchema ]),
}).strict() ;

export const LabCreateManyArgsSchema: z.ZodType<Prisma.LabCreateManyArgs> = z.object({
  data: z.union([ LabCreateManyInputSchema,LabCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const LabDeleteArgsSchema: z.ZodType<Prisma.LabDeleteArgs> = z.object({
  select: LabSelectSchema.optional(),
  include: LabIncludeSchema.optional(),
  where: LabWhereUniqueInputSchema,
}).strict() ;

export const LabUpdateArgsSchema: z.ZodType<Prisma.LabUpdateArgs> = z.object({
  select: LabSelectSchema.optional(),
  include: LabIncludeSchema.optional(),
  data: z.union([ LabUpdateInputSchema,LabUncheckedUpdateInputSchema ]),
  where: LabWhereUniqueInputSchema,
}).strict() ;

export const LabUpdateManyArgsSchema: z.ZodType<Prisma.LabUpdateManyArgs> = z.object({
  data: z.union([ LabUpdateManyMutationInputSchema,LabUncheckedUpdateManyInputSchema ]),
  where: LabWhereInputSchema.optional(),
}).strict() ;

export const LabDeleteManyArgsSchema: z.ZodType<Prisma.LabDeleteManyArgs> = z.object({
  where: LabWhereInputSchema.optional(),
}).strict() ;

export const LoincComponentHierarchyCreateArgsSchema: z.ZodType<Prisma.LoincComponentHierarchyCreateArgs> = z.object({
  select: LoincComponentHierarchySelectSchema.optional(),
  data: z.union([ LoincComponentHierarchyCreateInputSchema,LoincComponentHierarchyUncheckedCreateInputSchema ]),
}).strict() ;

export const LoincComponentHierarchyUpsertArgsSchema: z.ZodType<Prisma.LoincComponentHierarchyUpsertArgs> = z.object({
  select: LoincComponentHierarchySelectSchema.optional(),
  where: LoincComponentHierarchyWhereUniqueInputSchema,
  create: z.union([ LoincComponentHierarchyCreateInputSchema,LoincComponentHierarchyUncheckedCreateInputSchema ]),
  update: z.union([ LoincComponentHierarchyUpdateInputSchema,LoincComponentHierarchyUncheckedUpdateInputSchema ]),
}).strict() ;

export const LoincComponentHierarchyCreateManyArgsSchema: z.ZodType<Prisma.LoincComponentHierarchyCreateManyArgs> = z.object({
  data: z.union([ LoincComponentHierarchyCreateManyInputSchema,LoincComponentHierarchyCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const LoincComponentHierarchyDeleteArgsSchema: z.ZodType<Prisma.LoincComponentHierarchyDeleteArgs> = z.object({
  select: LoincComponentHierarchySelectSchema.optional(),
  where: LoincComponentHierarchyWhereUniqueInputSchema,
}).strict() ;

export const LoincComponentHierarchyUpdateArgsSchema: z.ZodType<Prisma.LoincComponentHierarchyUpdateArgs> = z.object({
  select: LoincComponentHierarchySelectSchema.optional(),
  data: z.union([ LoincComponentHierarchyUpdateInputSchema,LoincComponentHierarchyUncheckedUpdateInputSchema ]),
  where: LoincComponentHierarchyWhereUniqueInputSchema,
}).strict() ;

export const LoincComponentHierarchyUpdateManyArgsSchema: z.ZodType<Prisma.LoincComponentHierarchyUpdateManyArgs> = z.object({
  data: z.union([ LoincComponentHierarchyUpdateManyMutationInputSchema,LoincComponentHierarchyUncheckedUpdateManyInputSchema ]),
  where: LoincComponentHierarchyWhereInputSchema.optional(),
}).strict() ;

export const LoincComponentHierarchyDeleteManyArgsSchema: z.ZodType<Prisma.LoincComponentHierarchyDeleteManyArgs> = z.object({
  where: LoincComponentHierarchyWhereInputSchema.optional(),
}).strict() ;

export const LoincPanelHierarchyCreateArgsSchema: z.ZodType<Prisma.LoincPanelHierarchyCreateArgs> = z.object({
  select: LoincPanelHierarchySelectSchema.optional(),
  data: z.union([ LoincPanelHierarchyCreateInputSchema,LoincPanelHierarchyUncheckedCreateInputSchema ]),
}).strict() ;

export const LoincPanelHierarchyUpsertArgsSchema: z.ZodType<Prisma.LoincPanelHierarchyUpsertArgs> = z.object({
  select: LoincPanelHierarchySelectSchema.optional(),
  where: LoincPanelHierarchyWhereUniqueInputSchema,
  create: z.union([ LoincPanelHierarchyCreateInputSchema,LoincPanelHierarchyUncheckedCreateInputSchema ]),
  update: z.union([ LoincPanelHierarchyUpdateInputSchema,LoincPanelHierarchyUncheckedUpdateInputSchema ]),
}).strict() ;

export const LoincPanelHierarchyCreateManyArgsSchema: z.ZodType<Prisma.LoincPanelHierarchyCreateManyArgs> = z.object({
  data: z.union([ LoincPanelHierarchyCreateManyInputSchema,LoincPanelHierarchyCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const LoincPanelHierarchyDeleteArgsSchema: z.ZodType<Prisma.LoincPanelHierarchyDeleteArgs> = z.object({
  select: LoincPanelHierarchySelectSchema.optional(),
  where: LoincPanelHierarchyWhereUniqueInputSchema,
}).strict() ;

export const LoincPanelHierarchyUpdateArgsSchema: z.ZodType<Prisma.LoincPanelHierarchyUpdateArgs> = z.object({
  select: LoincPanelHierarchySelectSchema.optional(),
  data: z.union([ LoincPanelHierarchyUpdateInputSchema,LoincPanelHierarchyUncheckedUpdateInputSchema ]),
  where: LoincPanelHierarchyWhereUniqueInputSchema,
}).strict() ;

export const LoincPanelHierarchyUpdateManyArgsSchema: z.ZodType<Prisma.LoincPanelHierarchyUpdateManyArgs> = z.object({
  data: z.union([ LoincPanelHierarchyUpdateManyMutationInputSchema,LoincPanelHierarchyUncheckedUpdateManyInputSchema ]),
  where: LoincPanelHierarchyWhereInputSchema.optional(),
}).strict() ;

export const LoincPanelHierarchyDeleteManyArgsSchema: z.ZodType<Prisma.LoincPanelHierarchyDeleteManyArgs> = z.object({
  where: LoincPanelHierarchyWhereInputSchema.optional(),
}).strict() ;

export const LoincUniveralLabOrdersCreateArgsSchema: z.ZodType<Prisma.LoincUniveralLabOrdersCreateArgs> = z.object({
  select: LoincUniveralLabOrdersSelectSchema.optional(),
  data: z.union([ LoincUniveralLabOrdersCreateInputSchema,LoincUniveralLabOrdersUncheckedCreateInputSchema ]),
}).strict() ;

export const LoincUniveralLabOrdersUpsertArgsSchema: z.ZodType<Prisma.LoincUniveralLabOrdersUpsertArgs> = z.object({
  select: LoincUniveralLabOrdersSelectSchema.optional(),
  where: LoincUniveralLabOrdersWhereUniqueInputSchema,
  create: z.union([ LoincUniveralLabOrdersCreateInputSchema,LoincUniveralLabOrdersUncheckedCreateInputSchema ]),
  update: z.union([ LoincUniveralLabOrdersUpdateInputSchema,LoincUniveralLabOrdersUncheckedUpdateInputSchema ]),
}).strict() ;

export const LoincUniveralLabOrdersCreateManyArgsSchema: z.ZodType<Prisma.LoincUniveralLabOrdersCreateManyArgs> = z.object({
  data: z.union([ LoincUniveralLabOrdersCreateManyInputSchema,LoincUniveralLabOrdersCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const LoincUniveralLabOrdersDeleteArgsSchema: z.ZodType<Prisma.LoincUniveralLabOrdersDeleteArgs> = z.object({
  select: LoincUniveralLabOrdersSelectSchema.optional(),
  where: LoincUniveralLabOrdersWhereUniqueInputSchema,
}).strict() ;

export const LoincUniveralLabOrdersUpdateArgsSchema: z.ZodType<Prisma.LoincUniveralLabOrdersUpdateArgs> = z.object({
  select: LoincUniveralLabOrdersSelectSchema.optional(),
  data: z.union([ LoincUniveralLabOrdersUpdateInputSchema,LoincUniveralLabOrdersUncheckedUpdateInputSchema ]),
  where: LoincUniveralLabOrdersWhereUniqueInputSchema,
}).strict() ;

export const LoincUniveralLabOrdersUpdateManyArgsSchema: z.ZodType<Prisma.LoincUniveralLabOrdersUpdateManyArgs> = z.object({
  data: z.union([ LoincUniveralLabOrdersUpdateManyMutationInputSchema,LoincUniveralLabOrdersUncheckedUpdateManyInputSchema ]),
  where: LoincUniveralLabOrdersWhereInputSchema.optional(),
}).strict() ;

export const LoincUniveralLabOrdersDeleteManyArgsSchema: z.ZodType<Prisma.LoincUniveralLabOrdersDeleteManyArgs> = z.object({
  where: LoincUniveralLabOrdersWhereInputSchema.optional(),
}).strict() ;

export const PostCreateArgsSchema: z.ZodType<Prisma.PostCreateArgs> = z.object({
  select: PostSelectSchema.optional(),
  data: z.union([ PostCreateInputSchema,PostUncheckedCreateInputSchema ]),
}).strict() ;

export const PostUpsertArgsSchema: z.ZodType<Prisma.PostUpsertArgs> = z.object({
  select: PostSelectSchema.optional(),
  where: PostWhereUniqueInputSchema,
  create: z.union([ PostCreateInputSchema,PostUncheckedCreateInputSchema ]),
  update: z.union([ PostUpdateInputSchema,PostUncheckedUpdateInputSchema ]),
}).strict() ;

export const PostCreateManyArgsSchema: z.ZodType<Prisma.PostCreateManyArgs> = z.object({
  data: z.union([ PostCreateManyInputSchema,PostCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const PostDeleteArgsSchema: z.ZodType<Prisma.PostDeleteArgs> = z.object({
  select: PostSelectSchema.optional(),
  where: PostWhereUniqueInputSchema,
}).strict() ;

export const PostUpdateArgsSchema: z.ZodType<Prisma.PostUpdateArgs> = z.object({
  select: PostSelectSchema.optional(),
  data: z.union([ PostUpdateInputSchema,PostUncheckedUpdateInputSchema ]),
  where: PostWhereUniqueInputSchema,
}).strict() ;

export const PostUpdateManyArgsSchema: z.ZodType<Prisma.PostUpdateManyArgs> = z.object({
  data: z.union([ PostUpdateManyMutationInputSchema,PostUncheckedUpdateManyInputSchema ]),
  where: PostWhereInputSchema.optional(),
}).strict() ;

export const PostDeleteManyArgsSchema: z.ZodType<Prisma.PostDeleteManyArgs> = z.object({
  where: PostWhereInputSchema.optional(),
}).strict() ;

export const SessionCreateArgsSchema: z.ZodType<Prisma.SessionCreateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([ SessionCreateInputSchema,SessionUncheckedCreateInputSchema ]),
}).strict() ;

export const SessionUpsertArgsSchema: z.ZodType<Prisma.SessionUpsertArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
  create: z.union([ SessionCreateInputSchema,SessionUncheckedCreateInputSchema ]),
  update: z.union([ SessionUpdateInputSchema,SessionUncheckedUpdateInputSchema ]),
}).strict() ;

export const SessionCreateManyArgsSchema: z.ZodType<Prisma.SessionCreateManyArgs> = z.object({
  data: z.union([ SessionCreateManyInputSchema,SessionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const SessionDeleteArgsSchema: z.ZodType<Prisma.SessionDeleteArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionUpdateArgsSchema: z.ZodType<Prisma.SessionUpdateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([ SessionUpdateInputSchema,SessionUncheckedUpdateInputSchema ]),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionUpdateManyArgsSchema: z.ZodType<Prisma.SessionUpdateManyArgs> = z.object({
  data: z.union([ SessionUpdateManyMutationInputSchema,SessionUncheckedUpdateManyInputSchema ]),
  where: SessionWhereInputSchema.optional(),
}).strict() ;

export const SessionDeleteManyArgsSchema: z.ZodType<Prisma.SessionDeleteManyArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
}).strict() ;

export const TestBiomarkerCreateArgsSchema: z.ZodType<Prisma.TestBiomarkerCreateArgs> = z.object({
  select: TestBiomarkerSelectSchema.optional(),
  include: TestBiomarkerIncludeSchema.optional(),
  data: z.union([ TestBiomarkerCreateInputSchema,TestBiomarkerUncheckedCreateInputSchema ]),
}).strict() ;

export const TestBiomarkerUpsertArgsSchema: z.ZodType<Prisma.TestBiomarkerUpsertArgs> = z.object({
  select: TestBiomarkerSelectSchema.optional(),
  include: TestBiomarkerIncludeSchema.optional(),
  where: TestBiomarkerWhereUniqueInputSchema,
  create: z.union([ TestBiomarkerCreateInputSchema,TestBiomarkerUncheckedCreateInputSchema ]),
  update: z.union([ TestBiomarkerUpdateInputSchema,TestBiomarkerUncheckedUpdateInputSchema ]),
}).strict() ;

export const TestBiomarkerCreateManyArgsSchema: z.ZodType<Prisma.TestBiomarkerCreateManyArgs> = z.object({
  data: z.union([ TestBiomarkerCreateManyInputSchema,TestBiomarkerCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TestBiomarkerDeleteArgsSchema: z.ZodType<Prisma.TestBiomarkerDeleteArgs> = z.object({
  select: TestBiomarkerSelectSchema.optional(),
  include: TestBiomarkerIncludeSchema.optional(),
  where: TestBiomarkerWhereUniqueInputSchema,
}).strict() ;

export const TestBiomarkerUpdateArgsSchema: z.ZodType<Prisma.TestBiomarkerUpdateArgs> = z.object({
  select: TestBiomarkerSelectSchema.optional(),
  include: TestBiomarkerIncludeSchema.optional(),
  data: z.union([ TestBiomarkerUpdateInputSchema,TestBiomarkerUncheckedUpdateInputSchema ]),
  where: TestBiomarkerWhereUniqueInputSchema,
}).strict() ;

export const TestBiomarkerUpdateManyArgsSchema: z.ZodType<Prisma.TestBiomarkerUpdateManyArgs> = z.object({
  data: z.union([ TestBiomarkerUpdateManyMutationInputSchema,TestBiomarkerUncheckedUpdateManyInputSchema ]),
  where: TestBiomarkerWhereInputSchema.optional(),
}).strict() ;

export const TestBiomarkerDeleteManyArgsSchema: z.ZodType<Prisma.TestBiomarkerDeleteManyArgs> = z.object({
  where: TestBiomarkerWhereInputSchema.optional(),
}).strict() ;

export const TestCatalogCreateArgsSchema: z.ZodType<Prisma.TestCatalogCreateArgs> = z.object({
  select: TestCatalogSelectSchema.optional(),
  include: TestCatalogIncludeSchema.optional(),
  data: z.union([ TestCatalogCreateInputSchema,TestCatalogUncheckedCreateInputSchema ]),
}).strict() ;

export const TestCatalogUpsertArgsSchema: z.ZodType<Prisma.TestCatalogUpsertArgs> = z.object({
  select: TestCatalogSelectSchema.optional(),
  include: TestCatalogIncludeSchema.optional(),
  where: TestCatalogWhereUniqueInputSchema,
  create: z.union([ TestCatalogCreateInputSchema,TestCatalogUncheckedCreateInputSchema ]),
  update: z.union([ TestCatalogUpdateInputSchema,TestCatalogUncheckedUpdateInputSchema ]),
}).strict() ;

export const TestCatalogCreateManyArgsSchema: z.ZodType<Prisma.TestCatalogCreateManyArgs> = z.object({
  data: z.union([ TestCatalogCreateManyInputSchema,TestCatalogCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TestCatalogDeleteArgsSchema: z.ZodType<Prisma.TestCatalogDeleteArgs> = z.object({
  select: TestCatalogSelectSchema.optional(),
  include: TestCatalogIncludeSchema.optional(),
  where: TestCatalogWhereUniqueInputSchema,
}).strict() ;

export const TestCatalogUpdateArgsSchema: z.ZodType<Prisma.TestCatalogUpdateArgs> = z.object({
  select: TestCatalogSelectSchema.optional(),
  include: TestCatalogIncludeSchema.optional(),
  data: z.union([ TestCatalogUpdateInputSchema,TestCatalogUncheckedUpdateInputSchema ]),
  where: TestCatalogWhereUniqueInputSchema,
}).strict() ;

export const TestCatalogUpdateManyArgsSchema: z.ZodType<Prisma.TestCatalogUpdateManyArgs> = z.object({
  data: z.union([ TestCatalogUpdateManyMutationInputSchema,TestCatalogUncheckedUpdateManyInputSchema ]),
  where: TestCatalogWhereInputSchema.optional(),
}).strict() ;

export const TestCatalogDeleteManyArgsSchema: z.ZodType<Prisma.TestCatalogDeleteManyArgs> = z.object({
  where: TestCatalogWhereInputSchema.optional(),
}).strict() ;

export const TestCptCodeCreateArgsSchema: z.ZodType<Prisma.TestCptCodeCreateArgs> = z.object({
  select: TestCptCodeSelectSchema.optional(),
  include: TestCptCodeIncludeSchema.optional(),
  data: z.union([ TestCptCodeCreateInputSchema,TestCptCodeUncheckedCreateInputSchema ]),
}).strict() ;

export const TestCptCodeUpsertArgsSchema: z.ZodType<Prisma.TestCptCodeUpsertArgs> = z.object({
  select: TestCptCodeSelectSchema.optional(),
  include: TestCptCodeIncludeSchema.optional(),
  where: TestCptCodeWhereUniqueInputSchema,
  create: z.union([ TestCptCodeCreateInputSchema,TestCptCodeUncheckedCreateInputSchema ]),
  update: z.union([ TestCptCodeUpdateInputSchema,TestCptCodeUncheckedUpdateInputSchema ]),
}).strict() ;

export const TestCptCodeCreateManyArgsSchema: z.ZodType<Prisma.TestCptCodeCreateManyArgs> = z.object({
  data: z.union([ TestCptCodeCreateManyInputSchema,TestCptCodeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TestCptCodeDeleteArgsSchema: z.ZodType<Prisma.TestCptCodeDeleteArgs> = z.object({
  select: TestCptCodeSelectSchema.optional(),
  include: TestCptCodeIncludeSchema.optional(),
  where: TestCptCodeWhereUniqueInputSchema,
}).strict() ;

export const TestCptCodeUpdateArgsSchema: z.ZodType<Prisma.TestCptCodeUpdateArgs> = z.object({
  select: TestCptCodeSelectSchema.optional(),
  include: TestCptCodeIncludeSchema.optional(),
  data: z.union([ TestCptCodeUpdateInputSchema,TestCptCodeUncheckedUpdateInputSchema ]),
  where: TestCptCodeWhereUniqueInputSchema,
}).strict() ;

export const TestCptCodeUpdateManyArgsSchema: z.ZodType<Prisma.TestCptCodeUpdateManyArgs> = z.object({
  data: z.union([ TestCptCodeUpdateManyMutationInputSchema,TestCptCodeUncheckedUpdateManyInputSchema ]),
  where: TestCptCodeWhereInputSchema.optional(),
}).strict() ;

export const TestCptCodeDeleteManyArgsSchema: z.ZodType<Prisma.TestCptCodeDeleteManyArgs> = z.object({
  where: TestCptCodeWhereInputSchema.optional(),
}).strict() ;

export const TestOrderLoincCreateArgsSchema: z.ZodType<Prisma.TestOrderLoincCreateArgs> = z.object({
  select: TestOrderLoincSelectSchema.optional(),
  include: TestOrderLoincIncludeSchema.optional(),
  data: z.union([ TestOrderLoincCreateInputSchema,TestOrderLoincUncheckedCreateInputSchema ]),
}).strict() ;

export const TestOrderLoincUpsertArgsSchema: z.ZodType<Prisma.TestOrderLoincUpsertArgs> = z.object({
  select: TestOrderLoincSelectSchema.optional(),
  include: TestOrderLoincIncludeSchema.optional(),
  where: TestOrderLoincWhereUniqueInputSchema,
  create: z.union([ TestOrderLoincCreateInputSchema,TestOrderLoincUncheckedCreateInputSchema ]),
  update: z.union([ TestOrderLoincUpdateInputSchema,TestOrderLoincUncheckedUpdateInputSchema ]),
}).strict() ;

export const TestOrderLoincCreateManyArgsSchema: z.ZodType<Prisma.TestOrderLoincCreateManyArgs> = z.object({
  data: z.union([ TestOrderLoincCreateManyInputSchema,TestOrderLoincCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TestOrderLoincDeleteArgsSchema: z.ZodType<Prisma.TestOrderLoincDeleteArgs> = z.object({
  select: TestOrderLoincSelectSchema.optional(),
  include: TestOrderLoincIncludeSchema.optional(),
  where: TestOrderLoincWhereUniqueInputSchema,
}).strict() ;

export const TestOrderLoincUpdateArgsSchema: z.ZodType<Prisma.TestOrderLoincUpdateArgs> = z.object({
  select: TestOrderLoincSelectSchema.optional(),
  include: TestOrderLoincIncludeSchema.optional(),
  data: z.union([ TestOrderLoincUpdateInputSchema,TestOrderLoincUncheckedUpdateInputSchema ]),
  where: TestOrderLoincWhereUniqueInputSchema,
}).strict() ;

export const TestOrderLoincUpdateManyArgsSchema: z.ZodType<Prisma.TestOrderLoincUpdateManyArgs> = z.object({
  data: z.union([ TestOrderLoincUpdateManyMutationInputSchema,TestOrderLoincUncheckedUpdateManyInputSchema ]),
  where: TestOrderLoincWhereInputSchema.optional(),
}).strict() ;

export const TestOrderLoincDeleteManyArgsSchema: z.ZodType<Prisma.TestOrderLoincDeleteManyArgs> = z.object({
  where: TestOrderLoincWhereInputSchema.optional(),
}).strict() ;

export const TestResultLoincCreateArgsSchema: z.ZodType<Prisma.TestResultLoincCreateArgs> = z.object({
  select: TestResultLoincSelectSchema.optional(),
  include: TestResultLoincIncludeSchema.optional(),
  data: z.union([ TestResultLoincCreateInputSchema,TestResultLoincUncheckedCreateInputSchema ]),
}).strict() ;

export const TestResultLoincUpsertArgsSchema: z.ZodType<Prisma.TestResultLoincUpsertArgs> = z.object({
  select: TestResultLoincSelectSchema.optional(),
  include: TestResultLoincIncludeSchema.optional(),
  where: TestResultLoincWhereUniqueInputSchema,
  create: z.union([ TestResultLoincCreateInputSchema,TestResultLoincUncheckedCreateInputSchema ]),
  update: z.union([ TestResultLoincUpdateInputSchema,TestResultLoincUncheckedUpdateInputSchema ]),
}).strict() ;

export const TestResultLoincCreateManyArgsSchema: z.ZodType<Prisma.TestResultLoincCreateManyArgs> = z.object({
  data: z.union([ TestResultLoincCreateManyInputSchema,TestResultLoincCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TestResultLoincDeleteArgsSchema: z.ZodType<Prisma.TestResultLoincDeleteArgs> = z.object({
  select: TestResultLoincSelectSchema.optional(),
  include: TestResultLoincIncludeSchema.optional(),
  where: TestResultLoincWhereUniqueInputSchema,
}).strict() ;

export const TestResultLoincUpdateArgsSchema: z.ZodType<Prisma.TestResultLoincUpdateArgs> = z.object({
  select: TestResultLoincSelectSchema.optional(),
  include: TestResultLoincIncludeSchema.optional(),
  data: z.union([ TestResultLoincUpdateInputSchema,TestResultLoincUncheckedUpdateInputSchema ]),
  where: TestResultLoincWhereUniqueInputSchema,
}).strict() ;

export const TestResultLoincUpdateManyArgsSchema: z.ZodType<Prisma.TestResultLoincUpdateManyArgs> = z.object({
  data: z.union([ TestResultLoincUpdateManyMutationInputSchema,TestResultLoincUncheckedUpdateManyInputSchema ]),
  where: TestResultLoincWhereInputSchema.optional(),
}).strict() ;

export const TestResultLoincDeleteManyArgsSchema: z.ZodType<Prisma.TestResultLoincDeleteManyArgs> = z.object({
  where: TestResultLoincWhereInputSchema.optional(),
}).strict() ;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const VerificationTokenCreateArgsSchema: z.ZodType<Prisma.VerificationTokenCreateArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  data: z.union([ VerificationTokenCreateInputSchema,VerificationTokenUncheckedCreateInputSchema ]),
}).strict() ;

export const VerificationTokenUpsertArgsSchema: z.ZodType<Prisma.VerificationTokenUpsertArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
  create: z.union([ VerificationTokenCreateInputSchema,VerificationTokenUncheckedCreateInputSchema ]),
  update: z.union([ VerificationTokenUpdateInputSchema,VerificationTokenUncheckedUpdateInputSchema ]),
}).strict() ;

export const VerificationTokenCreateManyArgsSchema: z.ZodType<Prisma.VerificationTokenCreateManyArgs> = z.object({
  data: z.union([ VerificationTokenCreateManyInputSchema,VerificationTokenCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const VerificationTokenDeleteArgsSchema: z.ZodType<Prisma.VerificationTokenDeleteArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict() ;

export const VerificationTokenUpdateArgsSchema: z.ZodType<Prisma.VerificationTokenUpdateArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  data: z.union([ VerificationTokenUpdateInputSchema,VerificationTokenUncheckedUpdateInputSchema ]),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict() ;

export const VerificationTokenUpdateManyArgsSchema: z.ZodType<Prisma.VerificationTokenUpdateManyArgs> = z.object({
  data: z.union([ VerificationTokenUpdateManyMutationInputSchema,VerificationTokenUncheckedUpdateManyInputSchema ]),
  where: VerificationTokenWhereInputSchema.optional(),
}).strict() ;

export const VerificationTokenDeleteManyArgsSchema: z.ZodType<Prisma.VerificationTokenDeleteManyArgs> = z.object({
  where: VerificationTokenWhereInputSchema.optional(),
}).strict() ;