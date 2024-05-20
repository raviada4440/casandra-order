// Next Imports
import { NextResponse } from 'next/server'

import {compare} from "bcryptjs"

import { api } from '~trpc/server'
import type { UserWithPartialRelations } from '~prisma/generated/zod'



type ResponseUser = Omit<UserWithPartialRelations, 'password'>

export async function POST(req: Request) {
  // Vars
  const { email, password } = await req.json()
  const user = await api.user.getUser.query({ email })
  let response: null | ResponseUser = null

  if (user) {

    console.log("user:", user);

    const isOk = await compare(password, user.password)

    console.log("isOk:", isOk);

    if (!isOk) {
      return NextResponse.json (
        {
          // We create object here to separate each error message for each field in case of multiple errors
          message: ['Email or Password is invalid']
        },
        {
          status: 401,
          statusText: 'Unauthorized Access'
        }
      )
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...filteredUserData } = user

    response = {
      ...filteredUserData
    }

    console.log("response:", response);
    
    return NextResponse.json(response)
  } else {
    // We return 401 status code and error message if user is not found
    return NextResponse.json(
      {
        // We create object here to separate each error message for each field in case of multiple errors
        message: ['Email or Password is invalid']
      },
      {
        status: 401,
        statusText: 'Unauthorized Access'
      }
    )
  }
}
