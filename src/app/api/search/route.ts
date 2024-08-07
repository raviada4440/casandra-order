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
      highlight_attributes: ['TestName'],
      snippet_attributes: ['LabName'],
      search_attributes: [
        { field: 'TestName', weight: 3 },
        { field: 'LabName', weight: 3 },
        { field: 'LabTestId', weight: 5 },
        { field: 'CasandraTestId', weight: 5 },
        { field: 'sponsored_program.ProgramName', weight: 2 },
        { field: 'sponsored_program.TherapeuticArea', weight: 2 },
        { field: 'biomarkers.HGNCApprovedSymbol', weight: 2 },
        { field: 'provider_favorite.ProviderId', weight: 2 },
        { field: 'organization_favorite.OrganizationId', weight: 2 },
      ],
      result_attributes: ['TestId', 'LabTestId', 'CasandraTestId', 'TestName', 'LabName', 'CollectionMethod'],
      facet_attributes: [
        {
          attribute: 'Lab',
          field: 'LabName.keyword',
          type: 'string'
        },
        {
          attribute: 'Biomarker',
          field: 'biomarkers.HGNCApprovedSymbol.keyword',
          type: 'string'
        },
        {
          attribute: 'Sponsored Program',
          field: 'sponsored_program.ProgramName.keyword',
          type: 'string'
        },
        {
          attribute: 'Therapeutic Area',
          field: 'sponsored_program.TherapeuticArea.keyword',
          type: 'string'
        }
      ],
      filter_attributes: [
        {
          attribute: 'TestId',
          field: 'TestId',
          type: 'numeric'
        },
        {
          attribute: 'CasandraTestId',
          field: 'CasandraTestId',
          type: 'string'
        },
        {
          attribute: 'provider_favorite.ProviderId',
          field: 'provider_favorite.ProviderId.keyword',
          type: 'string'
        },
        {
          attribute: 'organization_favorite.OrganizationId',
          field: 'organization_favorite.OrganizationId.keyword',
          type: 'string'
        }
      ],
      query_rules: [
        {
          id: 'default-state',
          conditions: [[]],
          actions: [
            {
              action: 'RenderFacetsOrder',
              facetAttributesOrder: [
                'Sponsored Program',
                'Therapeutic Area',
                'Lab',
                'Biomarker',
              ]
            }
          ]
        },
      ]
    }
  },
  { debug: true }
)

export async function POST(req: NextRequest) {
  const data = await req.json()

  const results = await apiClient.handleRequest(data)

  return NextResponse.json(results)
}
