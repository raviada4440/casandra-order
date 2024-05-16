// Next Imports
// import { redirect } from 'next/navigation'

// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
// import type { InvoiceType } from '@/types/apps/invoiceTypes'
import PropertyListing from '@views/pages/wizard-examples/property-listing'

// Component Imports


// const getData = async () => {
//   // Vars
//   const res = await fetch(`${process.env.API_URL}/apps/invoice`)

//   if (!res.ok) {
//     throw new Error('Failed to fetch invoice data')
//   }

//   return res.json()
// }

const EditPage = async ({ params }: { params: { id: string } }) => {
  // Vars
  // const data = await getData()

  // const filteredData = data.filter((invoice: InvoiceType) => invoice.id === params.id)[0]

  // if (!filteredData) {
  //   redirect('/not-found')
  // }
  console.log(params)
  
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12}>
        <PropertyListing />
      </Grid>
    </Grid>
  )
}

export default EditPage
