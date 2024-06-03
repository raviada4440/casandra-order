// React Imports
import { useContext, useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import "instantsearch.css/themes/satellite-min.css"

import {
  InstantSearch,
  SearchBox,
  Hits,
  InfiniteHits,
  Highlight,
  RefinementList,
  Pagination,
  Stats,
  Snippet,
  CurrentRefinements,
  Configure,
  DynamicWidgets,
  useQueryRules,
} from 'react-instantsearch'
import Client from '@searchkit/instantsearch-client'

// Component Imports
import DirectionalIcon from '@/components/DirectionalIcon'
import { LabOrderContext } from '.'


const searchClient = Client({
  url: '/api/search'
})

const HitView = (props: any) => {
  return (
    <div>
      <div className="hit__details">
        <h2>
          <Highlight attribute="TestName" hit={props.hit} />
        </h2>
        <Snippet attribute="TestDescription" hit={props.hit} />
      </div>
    </div>
  )
}

const Panel = ({ header, children }: any) => (
  <div className="panel">
    <h5>{header}</h5>
    {children}
  </div>
)

const QueryRulesBanner = () => {
  const { items } = useQueryRules({})

  if (items.length === 0) {
    return null
  }

  return (
    <div className="query-rules">
      {items.map((item) => (
        <div key={item.objectID} className="query-rules__item">
          <a href={item.url}>
            <b className="query-rules__item-title">{item.title}</b>
            <span className="query-rules__item-description">{item.body}</span>
          </a>
        </div>
      ))}
    </div>
  )
}

type Props = {
  activeStep: number
  handleNext: () => void
  handlePrev: () => void
  steps: { title: string; subtitle: string }[]
}

const StepTestDetails = ({ activeStep, handleNext, handlePrev, steps }: Props) => {
  // States
  const { labOrder, setLabOrder } = useContext(LabOrderContext);

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <div className="">
          <InstantSearch indexName="testcatalog" searchClient={searchClient} routing>
            <Configure hitsPerPage={10} />
            <div className="container">
              <div className="search-panel">
                <div className="search-panel__filters">
                  <DynamicWidgets facets={['*']}>
                    <Panel header="Lab">
                      <RefinementList attribute="Lab" />
                    </Panel>
                    <Panel header="Biomarker">
                      <RefinementList attribute="Biomarker" searchable />
                    </Panel>
                    <Panel header="Sponsored Program">
                      <RefinementList attribute="Sponsored Program" />
                    </Panel>
                    <Panel header="Therapeutic Area">
                      <RefinementList attribute="Therapeutic Area" />
                    </Panel>
                  </DynamicWidgets>
                </div>
                <div className="search-panel__results">
                  <div className="searchbox">
                    <SearchBox />
                  </div>

                  {/* <Stats /> */}
                  <CurrentRefinements />
                  <QueryRulesBanner />
                  <InfiniteHits hitComponent={HitView} showPrevious={false} />
                  {/* <Hits hitComponent={HitView} /> */}
                  {/* <Pagination /> */}
                </div>
              </div>
            </div>
          </InstantSearch>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className='flex items-center justify-between'>
          <Button
            variant='outlined'
            color='secondary'
            disabled={activeStep === 0}
            onClick={handlePrev}
            startIcon={<DirectionalIcon ltrIconClass='ri-arrow-left-line' rtlIconClass='ri-arrow-right-line' />}
          >
            Previous
          </Button>
          <Button
            variant='contained'
            color={activeStep === steps.length - 1 ? 'success' : 'primary'}
            onClick={handleNext}
            endIcon={
              activeStep === steps.length - 1 ? (
                <i className='ri-check-line' />
              ) : (
                <DirectionalIcon ltrIconClass='ri-arrow-right-line' rtlIconClass='ri-arrow-left-line' />
              )
            }
          >
            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
          </Button>
        </div>
      </Grid>
    </Grid>
  )
}

export default StepTestDetails
