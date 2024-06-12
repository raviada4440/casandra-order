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

    console.log("authOptions providers in route: ", authOptions.providers)
  }

  return await NextAuth(req, res, authOptions)

}

export { handler as GET, handler as POST }
