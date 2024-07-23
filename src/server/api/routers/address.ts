import { z } from "zod"

import uuid from 'react-native-uuid'

import { createTRPCRouter, publicProcedure } from "@server/api/trpc"
import { genSaltSync, hashSync } from "bcryptjs"


export type AddressType = {
  place_id: string | null
  address1: string | null
  address2: string | null
  city: string | null
  state: string | null
  state_code: string | null
  zip: string | null
  country: string | null
  formatted: string | null
}


const getAddresses = async (searchString: string): Promise<any> => {

  const url = new URL(`https://api.geoapify.com/v1/geocode/autocomplete?text=${searchString}&categories=building.residential,populated_place&filter=countrycode:us&format=json&apiKey=${process.env.GEOAPIFY_API_KEY}`)

  console.log('url: ', url.toString())

  const response = await fetch(url.toString(), {
    headers: {
      Accept: "application/json",
    },

  });

  const data = await response.json()

  // console.log('data: ', data)

  return data;
}

const getAddressesSmarty = async (searchString: string): Promise<any> => {

  const url = new URL(`https://us-autocomplete-pro.api.smarty.com/lookup?search=${searchString}&auth-id=${process.env.SMARTY_AUTH_ID}&auth-token=${process.env.SMARTY_AUTH_TOKEN}`)

  console.log('url: ', url.toString())

  const response = await fetch(url.toString(), {
    headers: {
      Accept: "application/json",
    },

  });

  const data = await response.json()

  // console.log('data: ', data)

  return data;
}

export const addressRouter = createTRPCRouter({

  getAddressList: publicProcedure
  .input(z.object({ searchStr: z.string() }))
  .query(async ({ input }) => {

      console.log('input: ', input.searchStr)

      const addressList: AddressType[] = []

      const addressesFromGeoApi: any = await getAddresses(input.searchStr)

      console.log('addressesFromGeoApi: ', addressesFromGeoApi)


      if (addressesFromGeoApi) {
        const results = addressesFromGeoApi.results

        if (results) {

          for (const addressItem of results) {

            addressList.push({
              place_id: addressItem.place_id,
              address1: addressItem.address_line1,
              address2: addressItem.address_line2,
              city: addressItem.city,
              state: addressItem.state,
              state_code: addressItem.state_code,
              zip: addressItem.postcode,
              country: addressItem.country,
              formatted: addressItem.formatted,
            })

          }
        }
      }

      return addressList;

    }),

  getSmartyAddressList: publicProcedure
  .input(z.object({ searchStr: z.string() }))
  .query(async ({ input }) => {

      console.log('input: ', input.searchStr)

      const addressList: AddressType[] = []

      const addressesFromSmarty: any = await getAddressesSmarty(input.searchStr)

      console.log('addressesFromSmarty: ', addressesFromSmarty)


      if (addressesFromSmarty) {
        const results = addressesFromSmarty.suggestions

        if (results) {
          for (const addressItem of results) {
            addressList.push({
              place_id: addressItem.street_line + addressItem.secondary + addressItem.city + addressItem.state + addressItem.zipcode,
              address1: addressItem.street_line,
              address2: addressItem.secondary,
              city: addressItem.city,
              state: addressItem.state,
              state_code: addressItem.state,
              zip: addressItem.zipcode,
              country: null,
              formatted: null,
            })

          }
        }
      }

      return addressList;

    }),

});
