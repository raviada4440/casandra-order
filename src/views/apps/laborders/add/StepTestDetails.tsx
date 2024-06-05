// React Imports
import type { ChangeEvent} from 'react';
import { useContext, useEffect, useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button'
import "instantsearch.css/themes/satellite-min.css"

import {
  InstantSearch,
  SearchBox,
  InfiniteHits,
  Highlight,
  RefinementList,
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

import type { LabOrderTestWithRelations } from '~prisma/generated/zod';


const searchClient = Client({
  url: '/api/search'
})



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

  console.log('labOrder ', labOrder)

  const [selected, setSelected] = useState<readonly LabOrderTestWithRelations[]>([]);

  console.log('selected ', selected)

  useEffect(() => {
    setSelected(labOrder?.LabOrderTest || []);
  }, [labOrder?.LabOrderTest]);

  // const [isSelected, setIsSelected] = useState<boolean>(false);
  // const [selectedTestId, setSelectedTestId] = useState<number>(0);

  // const defaultProviderFavorites = ['2021-01-01', '2021-01-10']

  // const ProviderFavoritesConnector = createConnector({
  //   displayName: 'ProviderFavorites',
  //   getProvidedProps: (props, searchState) => {
  //     return {
  //       availabilityDates: searchState.availabilityDates || defaultProviderFavorites
  //     }
  //   },
  //   refine: (props, searchState, nextValue) => {
  //     return {
  //       ...searchState,
  //       availabilityDates: nextValue
  //     }
  //   },
  //   getSearchParameters(searchParameters, props, searchState) {
  //     const { availabilityDates = defaultProviderFavorites } = searchState;

  //     return searchParameters.addNumericRefinement('availability.start_date', '<=', (new Date(availabilityDates[0])).getTime()).addNumericRefinement('availability.end_date', '>=', (new Date(availabilityDates[1])).getTime());
  //   },
  // })

  // const ProviderFavorites = ProviderFavoritesConnector(({ availabilityDates, refine }) => {
  //   return (
  //     <div>
  //       <input type="date"
  //         value={availabilityDates[0]} onChange={(e) => {
  //           refine([e.target.value, availabilityDates[1]])
  //         }}
  //         ></input>
  //         <input type="date"
  //         value={availabilityDates[1]}
  //         onChange={(e) => {
  //           refine([availabilityDates[0], e.target.value])
  //         }}
  //         ></input>
  //     </div>
  //   )
  // })

  const handleClick = (event: ChangeEvent<unknown>, hit: any) => {
    event.preventDefault()

    // console.log(event.target)
    // console.log(hit)

    const labOrderTest = {
      TestId: hit.TestId,
      TestCatalog: {
        TestId: hit.TestId,
        TestName: hit.TestName,
        LabTestId: hit.LabTestId,
      }
    } as unknown as LabOrderTestWithRelations

    const selectedIndex = selected.findIndex(item => item.TestId === hit.TestId)
    let newSelected: readonly LabOrderTestWithRelations[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, labOrderTest);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);

    console.log(selected)

    const labOrderCopy = { ...labOrder }

    labOrderCopy.LabOrderTest = newSelected as LabOrderTestWithRelations[]

    setLabOrder(labOrderCopy)

    // setSelectedTestId(hit.TestId)
  }


  const isSelected = (id: number) => selected?.some(item => item.TestId === id)

  const HitView = (props: any) => {
    return (
      <div>
        <div className="hit__details">
          <Grid container alignItems="center">
            <Grid item>
              <Checkbox checked={isSelected(props.hit.TestId) } onChange={(event) => handleClick(event, props.hit)} />
            </Grid>
            <Grid item xs>
              <h4>
                <Highlight attribute="TestName" hit={props.hit} />
              </h4>
              <Snippet attribute="LabName" hit={props.hit} />
            </Grid>
          </Grid>

          {/* <span>
          <Checkbox checked={isSelected(props.hit.TestId)} onChange={(event) => handleClick(event, props.hit.TestId)} />
          <h4>
            <Highlight attribute="TestName" hit={props.hit} />
          </h4>
          </span>
          <Snippet attribute="LabName" hit={props.hit} /> */}
        </div>
      </div>
    )
  }

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <div className="">
          <InstantSearch indexName="testcatalog" searchClient={searchClient} routing>
            <Configure hitsPerPage={10} />
            <div className="container">
              <div className="searchbox">
                <SearchBox />
              </div>
              <div className="search-panel">
                <div className="search-panel__results">

                  {/* <Stats /> */}
                  <CurrentRefinements />
                  <QueryRulesBanner />
                  <InfiniteHits hitComponent={HitView} showPrevious={false} />
                  {/* <Hits hitComponent={HitView} /> */}
                  {/* <Pagination /> */}
                </div>

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
