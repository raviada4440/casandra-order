import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next"
import NextAuth from "next-auth"

import { authOptions } from "@/libs/auth"

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {

  console.log("req.url", req.url)
  const url = new URL(req.url as string)

  if(req?.url?.includes("epic") && req.method === "POST") {
    console.log(
      "Handling callback request from my Identity Provider",
      url.searchParams.get("wellknownUrl")
    )
    const wellknownUrl = url.searchParams.get("wellknownUrl")
    const epicProvider: any = authOptions.providers.find(provider => provider.id === 'epic')

    epicProvider.wellKnown = wellknownUrl
    const launchToken = url.searchParams.get("launch")

    if (launchToken && launchToken.length > 0) {
      epicProvider.authorization.params.scope = "launch openid profile fhirUser"
    }

    console.log("authOptions providers in route: ", JSON.stringify(authOptions.providers))
  }


  if(req?.url?.includes("cerner") && req.method === "POST") {
    console.log(
      "Handling callback request from my Identity Provider",
      url.searchParams.get("wellknownUrl")
    )
    const cernerProvider: any = authOptions.providers.find(provider => provider.id === 'cerner')

    // const wellknownUrl = url.searchParams.get("wellknownUrl")
    // cernerProvider.wellKnown = wellknownUrl
    // cernerProvider.type = "oauth"

    const launchToken = url.searchParams.get("launch")

    if (launchToken && launchToken.length > 0) {
      cernerProvider.authorization.params.scope = "user/Location.read user/Organization.read user/Patient.read user/Practitioner.read fhirUser launch openid profile"
    }

    console.log("authOptions providers in route: ", JSON.stringify(authOptions.providers))
  }

  const response =  await NextAuth(req, res, authOptions)

  console.log("response: ", JSON.stringify(response))

  return response

}

export { handler as GET, handler as POST }
