// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

// Type Imports
import type { ChildrenType } from '@core/types'
import type { Locale } from '@configs/i18n'

// Config Imports
import { i18n } from '@configs/i18n'

// Style Imports
import '@/app/globals.css'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'
import { TRPCReactProvider } from '~trpc/react'

export const metadata = {
  title: 'Casandra.ai - AI-Assisted Lab Test Decision Support And Ordering',
  description:
    'Order the right test from the right lab all in one place in your EHR with Casandra’s SMART on FHIR app. Get actionable test results displaying available clinical trials and relevant FDA-approved therapies.'
}

const RootLayout = ({ children, params }: ChildrenType & { params: { lang: Locale } }) => {
  // Vars
  const direction = i18n.langDirection[params.lang]

  return (
    <html id='__next' lang={params.lang} dir={direction}>
      <body className='flex is-full min-bs-full flex-auto flex-col'>
      <TRPCReactProvider>{children}</TRPCReactProvider>
        {/* <BuyNowButton /> */}
      </body>
    </html>
  )
}

export default RootLayout


