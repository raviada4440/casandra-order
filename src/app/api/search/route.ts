import type { NextRequest} from 'next/server';
import { NextResponse } from 'next/server'

import API from '@searchkit/api'

const apiClient = API(
  {
    connection: {
      // host: 'https://commerce-demo.es.us-east4.gcp.elastic-cloud.com:9243',
      host: process.env.ELASTICSEARCH_URL,

      // if you are authenticating with api key
      // https://www.searchkit.co/docs/guides/setup-elasticsearch#connecting-with-api-key
      apiKey: process.env.ELASTICSEARCH_API_KEY,

      // if you are authenticating with username/password
      // https://www.searchkit.co/docs/guides/setup-elasticsearch#connecting-with-usernamepassword
      //auth: {
      //  username: "elastic",
      //  password: "changeme"
      //},
    },
    search_settings: {

      // highlight_attributes: ['GroupName', 'DrugName' , 'AlternativeName2'],
      // snippet_attributes: ['LabName', 'TurnAroundTime'],

      search_attributes: [
        { field: 'GroupName', weight: 3 },
        { field: 'LabTests.LabName', weight: 2 },
        { field: 'LabTests.CasandraTestId', weight: 1 },
        { field: 'Type', weight: 2 },
        { field: 'Indication', weight: 2 },
        { field: 'DrugName', weight: 2 },
        { field: 'ProgramName', weight: 2 },
        { field: 'IcdCode', weight: 1 },
      ],
      result_attributes: ['GroupName', 'LabTests', 'Type', 'DrugName', 'Indication', 'ProgramName'],
      facet_attributes: [
        {
          attribute: 'Type',
          field: 'Type.keyword',
          type: 'string'
        },
        {
          attribute: 'Lab',
          field: 'LabTests.LabName.keyword',
          type: 'string'
        },
        {
          attribute: 'Indication',
          field: 'Indication.keyword',
          type: 'string'
        },
        {
          attribute: 'Drug Name',
          field: 'DrugName.keyword',
          type: 'string'
        },
        {
          attribute: 'Program Name',
          field: 'ProgramName.keyword',
          type: 'string'
        },
      ],
      filter_attributes: [
        {
          attribute: 'CasandraTestId',
          field: 'LabTests.CasandraTestId.keyword',
          type: 'string'
        },
        {
          attribute: 'IcdCode',
          field: 'IcdCode.keyword',
          type: 'string'
        },
        {
          attribute: 'Type',
          field: 'Type.keyword',
          type: 'string'
        },
        {
          attribute: 'Indication',
          field: 'Indication.keyword',
          type: 'string'
        },
        {
          attribute: 'DrugName',
          field: 'DrugName.keyword',
          type: 'string'
        },
        {
          attribute: 'ProgramName',
          field: 'ProgramName.keyword',
          type: 'string'
        }
      ],

      // query_rules: [
      //   {
      //     id: 'default-state',
      //     conditions: [[]],
      //     actions: [
      //       {
      //         action: 'RenderFacetsOrder',
      //         facetAttributesOrder: [
      //           'Type',
      //           'Indication',
      //           // 'Lab',
      //           // 'Drug Name',
      //         ]
      //       }
      //     ]
      //   },
      // ]
    }
  },
  { debug: true }
)

export async function POST(req: NextRequest) {
  const data = await req.json()

  console.log('payload data for elastic search: ', JSON.stringify(data))

  const results = await apiClient.handleRequest(data)

  return NextResponse.json(results)
}
