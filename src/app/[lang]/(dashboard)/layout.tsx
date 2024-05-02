// MUI Imports
import Button from '@mui/material/Button'

// Type Imports
import type { ChildrenType } from '@core/types'
import type { Locale } from '@configs/i18n'

// Layout Imports
import LayoutWrapper from '@layouts/LayoutWrapper'
import VerticalLayout from '@layouts/VerticalLayout'
import HorizontalLayout from '@layouts/HorizontalLayout'

// Component Imports
// import Customizer from '@core/components/customizer'

import ScrollToTop from '@core/components/scroll-to-top'

import { i18n } from '@configs/i18n'

import { getMode, getSkin, getSystemMode } from '@core/utils/serverHelpers'

import Providers from '@/components/Providers'
import Navigation from '@/components/layout/vertical/Navigation'
import Header from '@/components/layout/horizontal/Header'
import Navbar from '@/components/layout/vertical/Navbar'
import VerticalFooter from '@/components/layout/vertical/Footer'
import HorizontalFooter from '@/components/layout/horizontal/Footer'

// Config Imports

// Util Imports
import { getDictionary } from '@/utils/getDictionary'


const Layout = async ({ children, params }: ChildrenType & { params: { lang: Locale } }) => {
  // Vars
  const direction = i18n.langDirection[params.lang]
  const dictionary = await getDictionary(params.lang)
  const mode = getMode()
  const systemMode = getSystemMode()
  const skin = getSkin()

  return (
    <Providers direction={direction}>
      <LayoutWrapper
        systemMode={systemMode}
        verticalLayout={
          <VerticalLayout
            navigation={<Navigation dictionary={dictionary} mode={mode} systemMode={systemMode} skin={skin} />}
            navbar={<Navbar />}
            footer={<VerticalFooter />}
          >
            {children}
          </VerticalLayout>
        }
        horizontalLayout={
          <HorizontalLayout header={<Header dictionary={dictionary} />} footer={<HorizontalFooter />}>
            {children}
          </HorizontalLayout>
        }
      />
      <ScrollToTop className='mui-fixed'>
        <Button variant='contained' className='is-10 bs-10 rounded-full p-0 min-is-0 flex items-center justify-center'>
          <i className='ri-arrow-up-line' />
        </Button>
      </ScrollToTop>
      {/* <Customizer dir={direction} /> */}
    </Providers>
  )
}

export default Layout
