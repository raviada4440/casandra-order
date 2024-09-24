import React,{ useContext } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'

import "instantsearch.css/themes/satellite-min.css"

import {
  InstantSearch,
  SearchBox,
  RefinementList,
  CurrentRefinements,
  Configure,
  DynamicWidgets,
} from 'react-instantsearch'

import Client from '@searchkit/instantsearch-client'

// Component Imports
import DirectionalIcon from '@/components/DirectionalIcon'
import { LabOrderContext } from '..'
import CustomInfiniteHits from './CustomInfiniteHits';

const searchClient = Client({
  url: '/api/search'
})



const Panel = ({ header, children }: any) => (
  <div className="panel">
    <h5>{header}</h5>
    {children}
  </div>
)

// const QueryRulesBanner = () => {
//   const { items } = useQueryRules({})

//   if (items.length === 0) {
//     return null
//   }

//   return (
//     <div className="query-rules">
//       {items.map((item) => (
//         <div key={item.objectID} className="query-rules__item">
//           <a href={item.url}>
//             <b className="query-rules__item-title">{item.title}</b>
//             <span className="query-rules__item-description">{item.body}</span>
//           </a>
//         </div>
//       ))}
//     </div>
//   )
// }


type Props = {
  activeStep: number
  handleNext: () => void
  handlePrev: () => void
  steps: { title: string; subtitle: string }[]
}


const StepTestDetails = ({ activeStep, handleNext, handlePrev }: Props) => {
  // States
  const { steps, loading } = useContext(LabOrderContext);


  // const SearchContent = () => {
  //   const { status } = useInstantSearch();

  //   console.log('search status ', status)

  //   return (
  //     <React.Fragment>
  //       {(status === 'stalled') && <CircularProgress  color="inherit" size={30} />}
  //       <CustomInfiniteHits />
  //     </React.Fragment>
  //   )
  // };

  return (
    <Card>
      <CardContent>
        <div className='flex items-center gap-2 mbe-4'>
          <i className='ri-microscope-line text-3xl text-primary' />
          <Typography variant='h5' className='text-primary'>
            Tests
          </Typography>
        </div>
          <InstantSearch indexName='casandratests' searchClient={searchClient} routing>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <CurrentRefinements />
              </Grid>
            </Grid>
            <Grid container spacing={5}>
              <Grid item xs={9}>
                <Configure hitsPerPage={20} />
                <div className="container">
                  <div className="searchbox">
                    <SearchBox placeholder='Search for tests by name, testcode or biomarker'/>
                    <Typography variant='body2' className='text-textSecondary'>Please clear the searchbox contents to see more choices</Typography>
                  </div>
                  <div className="search-panel">
                    <div className="search-panel__results">
                      <CustomInfiniteHits />
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={3}>
                <div className="search-panel__filters">
                  <DynamicWidgets facets={['*']}>
                    <Panel header="Type">
                      <RefinementList attribute="Type" />
                    </Panel>
                    <Panel header="Indication">
                      <RefinementList attribute="Indication" searchable/>
                    </Panel>
                    <Panel header="Lab">
                      <RefinementList attribute="Lab" searchable/>
                    </Panel>
                    <Panel header="Drug Name">
                      <RefinementList attribute="Drug Name" searchable/>
                    </Panel>
                    <Panel header="Program Name">
                      <RefinementList attribute="Program Name" searchable/>
                    </Panel>
                  </DynamicWidgets>
                </div>
              </Grid>
            </Grid>
          </InstantSearch>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <div className='flex items-center justify-between'>
                <Button
                  variant='outlined'
                  color='primary'
                  disabled={activeStep === 0}
                  onClick={handlePrev}
                  startIcon={<DirectionalIcon ltrIconClass='ri-arrow-left-line' rtlIconClass='ri-arrow-right-line' />}
                >
                  Previous
                </Button>
                <Button
                  variant='contained'
                  color={activeStep === steps?.length - 1 ? 'success' : 'primary'}
                  onClick={handleNext}
                  endIcon={
                    activeStep === steps?.length - 1 ? (
                      <i className='ri-check-line' />
                    ) : (
                      <DirectionalIcon ltrIconClass='ri-arrow-right-line' rtlIconClass='ri-arrow-left-line' />
                    )
                  }
                >
                  { loading && <CircularProgress color="inherit" size={20} /> }
                  { activeStep === steps.length - 1 ? 'Submit' : 'Next' }
                </Button>
              </div>
            </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default StepTestDetails
